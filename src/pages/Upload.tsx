import { useState } from "react";
import { GetForm, GetLatestApproved, UploadForm, UploadVersion } from "../queries/versions";

function UploadPage() {
    const [version, setVersion] = useState(0);
    const [productName, setProductName] = useState('');

    const getLatestApprovedVersion = () => {
        GetLatestApproved().then(({versionNumber, formID}) => {
            GetForm(formID).then((form) => {
                setVersion(versionNumber);
                setProductName(form.productName)
            });
        });
    }

    const uploadChanges = () => {
        UploadForm(productName).then((formId) => {
            UploadVersion(version + 1, formId).then(() => console.log("Changes uploaded"));
        })
    }

    return (
        <div>
            <button onClick={getLatestApprovedVersion}>Get Latest Approved Version</button>

            <h3>Current Version: {version}</h3>
            
            <form>
                <label>Product Name
                    <input
                    type="text" 
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    />
                </label>
            </form>

            <button onClick={uploadChanges}>Upload Changes</button>
        </div>
    )
}

export default UploadPage;