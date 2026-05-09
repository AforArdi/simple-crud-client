"use client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const AddUserModal = ({ AddUserAction }) => {
    return (
        <Modal>
            <Button variant="secondary">+ Add User</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form action={AddUserAction} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="name" />
                                    </TextField>
                                    <TextField className="w-full" name="email" type="email">
                                        <Label>Email</Label>
                                        <Input placeholder="email" />
                                    </TextField>
                                    <TextField className="w-full" name="role" type="text">
                                        <Label>Role</Label>
                                        <Input placeholder="role" />
                                    </TextField>
                                    <TextField className="w-full" name="phone" type="tel">
                                        <Label>Phone</Label>
                                        <Input placeholder="phone" />
                                    </TextField>
                                    <TextField className="w-full" name="website" type="text">
                                        <Label>Website</Label>
                                        <Input placeholder="website" />
                                    </TextField>

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit">Add User</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}

export default AddUserModal;