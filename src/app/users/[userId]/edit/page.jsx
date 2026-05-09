import { getUserById } from "@/app/lib/data";
import { Button, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { EditUserAction } from "../../../lib/actions";

const UserEditPage = async ({params}) => {
    const {userId} = await params;
    const user = await getUserById(userId);

    const updateUserWrapper=async(formData)=>{
        'use server'
        await EditUserAction(userId, formData)
    }

    return (
        <div className="w-3/12 mx-auto mt-5">
            <h2 className="text-3xl font-bold text-center">Edit User Info</h2>
            <form action={updateUserWrapper} className="flex flex-col gap-4">
                <TextField className="w-full" name="name" defaultValue={user?.name} type="text">
                    <Label>Name</Label>
                    <Input placeholder="name" />
                </TextField>
                <TextField className="w-full" name="email" defaultValue={user?.email} type="email">
                    <Label>Email</Label>
                    <Input placeholder="email" />
                </TextField>
                <TextField className="w-full" name="role" defaultValue={user?.role} type="text">
                    <Label>Role</Label>
                    <Input placeholder="role" />
                </TextField>
                <TextField className="w-full" name="phone" defaultValue={user?.phone} type="tel">
                    <Label>Phone</Label>
                    <Input placeholder="phone" />
                </TextField>
                <TextField className="w-full" name="website" defaultValue={user?.website} type="text">
                    <Label>Website</Label>
                    <Input placeholder="website" />
                </TextField>

                <div className="flex items-center gap-4">
                    <Link href={'/users'}>
                        <Button slot="close" variant="secondary">
                            Go Back
                        </Button>
                    </Link>
                    <Button type="submit">Confirm Edit</Button>
                </div>
            </form>
        </div>
    );
}

export default UserEditPage;