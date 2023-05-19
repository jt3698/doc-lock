import { useState } from "react";
import { ApproveLatest, GetForm, GetLatestNotApproved } from "../queries/versions";

function ApprovePage(props: { user: any; role: any}) {
    const role = props.role;

    const [version, setVersion] = useState(0);
    const [productName, setProductName] = useState('');

    const getLatestNotApprovedVersion = () => {
        GetLatestNotApproved().then(({versionNumber, formID}) => {
            if (versionNumber !== 0) {
                GetForm(formID).then((form) => {
                    setVersion(versionNumber);
                    setProductName(form.productName)
                });
            } else {
                setVersion(versionNumber);
            }
        });
    }

    const approve = () => {
        ApproveLatest().then(() => console.log("Changes approved"));
    }

    if (role === "Admin") {
        return (
            <div>
                <button onClick={getLatestNotApprovedVersion}>Get Latest Changes to Approve</button>

                {
                    version === 0 ? <h3>No changes to approve</h3> : 
                    <>
                        <h3>Approve Version {version}</h3>
                
                        <form>
                            <label>Product Name
                                <input
                                type="text" 
                                value={productName}
                                disabled={true}
                                readOnly={true}
                                />
                            </label>
                        </form>

                        <button onClick={approve}>Approve</button>
                    </>
                }
            </div>
        )
    } else {
        return (
            <div>
                <h3>You do not have access to approve.</h3>
                <h3>You are not an Admin</h3>
            </div>
        )
    }
    
}

export default ApprovePage;