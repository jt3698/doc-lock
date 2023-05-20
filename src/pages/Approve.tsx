import { ApproveLatest, GetForm, GetLatestNotApproved } from "../queries/versions";
import { useCurrentAuth } from "../contexts/AuthContext";
import { useCurrentForm } from "../contexts/FormContext";

function ApprovePage() {
    const { userRole } = useCurrentAuth();

    const { 
        latestNotApprovedForm, saveLatestNotApprovedForm
    } = useCurrentForm();

    const getLatestNotApprovedVersion = () => {
        GetLatestNotApproved().then(({versionNumber, formID}) => {
            if (versionNumber !== 0) {
                GetForm(formID).then((form) => {
                    saveLatestNotApprovedForm({
                        version: versionNumber,
                        form: form.productName
                    })
                });
            } else {
                saveLatestNotApprovedForm({
                    version: 0,
                    form: ''
                })
            }
        });
    }

    const approve = () => {
        ApproveLatest().then(() => console.log("Changes approved"));
    }

    if (userRole === "Admin") {
        return (
            <div>
                <button onClick={getLatestNotApprovedVersion}>Get Latest Changes to Approve</button>

                {
                    latestNotApprovedForm.version === 0 ? <h3>No changes to approve</h3> : 
                    <>
                        <h3>Approve Version {latestNotApprovedForm.version}</h3>
                
                        <form>
                            <label>Product Name
                                <input
                                type="text" 
                                value={latestNotApprovedForm.form}
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