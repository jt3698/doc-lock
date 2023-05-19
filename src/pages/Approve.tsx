import { useState } from "react";
import { GetRole } from "../queries/users";
import { ApproveLatest, GetForm, GetLatestNotApproved } from "../queries/versions";
import { get } from "http";

function ApprovePage(props: { user: any; role: any}) {
    const userAttributes = props.user?.attributes;
    const role = props.role;

    const userID = userAttributes.sub;

    const [version, setVersion] = useState(0);
    const [productName, setProductName] = useState('');

    const getLatestNotApprovedVersion = () => {
        GetLatestNotApproved().then((latest_ver) => setVersion(latest_ver));
        GetForm("xxx-xxx").then((form) => setProductName(form.productName));
    }

    const approve = () => {
        ApproveLatest().then(() => console.log("Changes approved"));
    }

    if (role === "Admin") {
        return (
            <div>
                <button onClick={getLatestNotApprovedVersion}>Get Latest Changes to Approve</button>

                {
                    version == 0 ? <h3>No changes to approve</h3> : 
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