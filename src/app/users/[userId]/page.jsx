import { getUserById } from "@/app/lib/data";
import { Button } from "@heroui/react";
import Link from "next/link";

const UserDetails = async ({ params }) => {
    const { userId } = await params;
    const user = await getUserById(userId);

    return (
        <div className="container mx-auto">
            <h2 className="text-3xl text-center font-bold">Users Details</h2>
            <div className="text-2xl">
                <p>Name: {user?.name}</p>
                <p>Email: {user?.email}</p>
                <p>Phone: {user?.phone}</p>
                <p>Website: {user?.website}</p>
            </div>
            <Link href={'/users'}>
                <Button variant="outline">Back to users</Button>
            </Link>
        </div>
    );
}

export default UserDetails;