import { API } from "aws-amplify";
import { getUsers, listUsers } from "../graphql/queries";

export async function GetRole(userID: any) {
    console.log("GetRole called");

    if (process.env.NODE_ENV.includes("dev")) {
        console.log("Returning development Admin role");
        return "Admin";
    }

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

export async function GetUsers() {
    console.log("GetUsers called");

    const allUsers = await API.graphql({
        query: listUsers
    });

    return allUsers;
}
