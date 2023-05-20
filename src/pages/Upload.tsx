import { GetForm, GetLatestApproved, UploadForm, UploadVersion } from "../queries/versions";
import { useCurrentForm } from "../contexts/FormContext";

function UploadPage() {
    const { 
        latestApprovedForm, saveLatestApprovedForm
    } = useCurrentForm();

    const getLatestApprovedVersion = () => {
        GetLatestApproved().then(({versionNumber, formID}) => {
            GetForm(formID).then((form) => {
                saveLatestApprovedForm({
                    version: versionNumber,
                    form: form.productName
                })
            });
        });
    }

    const uploadChanges = () => {
        UploadForm(latestApprovedForm.form).then((formId) => {
            UploadVersion(latestApprovedForm.version + 1, formId).then(() => console.log("Changes uploaded"));
        })
    }

    return (
        <div>
            <button onClick={getLatestApprovedVersion}>Get Latest Approved Version</button>

            <h3>Current Version: {latestApprovedForm.version}</h3>
            
            <form>
                <label>Product Name
                    <input
                    type="text" 
                    value={latestApprovedForm.form}
                    onChange={(e) => saveLatestApprovedForm({
                        version: latestApprovedForm.version,
                        form: e.target.value
                    })}
                    />
                </label>
            </form>

            <button onClick={uploadChanges}>Upload Changes</button>
        </div>
    )
}

export default UploadPage;