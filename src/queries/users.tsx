import { API } from "aws-amplify";
import { getUsers } from "../graphql/queries";

export async function GetRole(userID: any) {
    const user : any = await API.graphql({
        query: getUsers,
        variables: { id: userID }
    });

    const isAdmin = user?.data?.getUsers?.admin;

    let role = "X";
    if (isAdmin == null) {
        role = "NULL";
    } else {
        role = isAdmin ? "Admin" : "Member";
    }

    return role;
}
