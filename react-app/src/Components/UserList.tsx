import React from 'react';
import {IUser} from "../types/types";

interface UserListProps {
    users: IUser[];
}

const UserList: React.FC<UserListProps> = ({users}) => {
    return (
        <div>
            {users.map(user =>
                <div key={user.id}>
                    {user.id} {user.name} проживает в городу {user.address.city} на улице {user.address.street}
                </div>
            )}
        </div>
    );
};

export default UserList;