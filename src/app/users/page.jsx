import AddUserModal from "../components/heroUI/AddUserModal";
import UsersPageTable from "../components/heroUI/UsersPageTable";
import { AddUserAction, DeleteUserAction } from "../lib/actions";
import { getUsers } from "../lib/data";

const UsersPage = async () => {
    const users = await getUsers();
    // console.log(users);

    return ( 
        <div className="container mx-auto mt-5">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Total Users: {users.length}</h2>
                <AddUserModal AddUserAction={AddUserAction}></AddUserModal>
            </div>
            <div className="mt-5">
                <UsersPageTable users={users} DeleteUserAction={DeleteUserAction}></UsersPageTable>
            </div>
        </div>
     );
}
 
export default UsersPage;