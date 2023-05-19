import { API } from "aws-amplify";
import { getForms } from "../graphql/queries";
import { listVersionsWithoutForms } from "../graphql/queriesCustom";
import { createForms, createVersions, updateVersions } from "../graphql/mutations";

// Return {productName} or Forms
export async function GetForm(formID: string) {
    const form : any = await API.graphql({
        query: getForms,
        variables: { id: formID }
    });

    return form?.data?.getForms;
}

// Return formID
export async function UploadForm(productName: string) {
    const newForms : any = await API.graphql({
        query: createForms,
        variables: {
            input: {
            "productName": productName
        }
        }
    });

    return newForms?.data?.createForms?.id;
}

// Void
export async function UploadVersion(version: any, formID: any) {
    await API.graphql({
        query: createVersions,
        variables: {
            input: {
            "version": version,
            "versionsFormsId": formID
        }
        }
    });

    return
}

// Return {versionNumber, formID, versionID}
export async function GetLatestApproved() {
    const allVersions : any = await API.graphql({
        query: listVersionsWithoutForms
    });

    let latestVersion = {versionNumber: 0, formID: "", versionID: ""};
    const versionItems = allVersions?.data?.listVersions?.items;
    
    for (let i = 0; i < versionItems.length; i++) {
        const versionItem : any = versionItems[i];

        if (versionItem?.approvedOn != null) {
            if (versionItem.version > latestVersion.versionNumber) {
                latestVersion = {
                    versionNumber: versionItem.version, 
                    formID: versionItem.versionsFormsId,
                    versionID: versionItem.id
                }
            }
        }

    }
    
    return latestVersion;
}

// Return {versionNumber, formID, versionID, createdAt}
export async function GetLatestNotApproved() {
    const allVersions : any = await API.graphql({
        query: listVersionsWithoutForms
    });

    let latestVersion = {
        versionNumber: 0, 
        formID: "", 
        versionID: "",
        createdAt: null
    };

    const versionItems = allVersions?.data?.listVersions?.items;
    for (let i = 0; i < versionItems.length; i++) {
        const versionItem : any = versionItems[i];

        if (versionItem?.approvedOn == null) {
            if (!latestVersion.createdAt || versionItem.createdAt > latestVersion.createdAt) {
                latestVersion = {
                    versionNumber: versionItem.version, 
                    formID: versionItem.versionsFormsId,
                    versionID: versionItem.id,
                    createdAt: versionItem.createdAt
                }
            }
        }

    }
    
    console.log(latestVersion)
    return latestVersion;
}

// Void
export async function ApproveLatest() {
    const latestNotApproved = await GetLatestNotApproved();

    const updatedVersions = await API.graphql({
        query: updateVersions,
        variables: {
            input: {
                "id": latestNotApproved.versionID,
                "approvedOn": new Date().toISOString()
            }
        }
    });
}