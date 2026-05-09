import UsersPageTable from "../components/heroUI/UsersPageTable";
import { getUsers } from "../lib/data";

const UsersPage = async () => {
    const users = await getUsers();
    // console.log(users);

    return ( 
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold">Total Users: {users.length}</h2>
            <div className="mt-5">
                <UsersPageTable users={users}></UsersPageTable>
            </div>
        </div>
     );
}
 
export default UsersPage;