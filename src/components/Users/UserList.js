import { useState } from 'react';
import UserItem from './UserItem';

const UserList = props => {
    const [users, setUsers] = useState(props.users);

    const noUsersFallback = <p>No users to show. Please add new ones.</p>;

    const userItems = props.users.map(user => (
        <UserItem
            key={Math.random() * 10}
            username={user.username}
            age={user.age}
        ></UserItem>
    ));

    return (
        <div className="user-list">
            {props.users.length ? userItems : noUsersFallback}
        </div>
    );
};

export default UserList;
