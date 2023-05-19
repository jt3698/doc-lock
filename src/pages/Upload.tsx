import { useState } from "react";
import { GetForm, GetLatestApproved, UploadForm, UploadVersion } from "../queries/versions";

function UploadPage() {
    const [version, setVersion] = useState(0);
    const [productName, setProductName] = useState('');

    const getLatestApprovedVersion = () => {
        GetLatestApproved().then((latest_ver) => setVersion(latest_ver));
        GetForm("xxx-xxx").then((form) => setProductName(form.productName));
    }

    const uploadChanges = () => {
        UploadForm().then((formId) => {
            UploadVersion(formId).then(() => console.log("Changes uploaded"));
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