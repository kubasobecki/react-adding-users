import Card from '../UI/Card';
import UserItem from './UserItem';
import styles from './UserList.module.css';

const UserList = props => {
    const noUsersFallback = <p>No users to show. Please add new ones.</p>;

    const userItems = props.users.map(user => (
        <UserItem
            key={user.id}
            username={user.username}
            age={user.age}
        ></UserItem>
    ));

    const classes = `user-list ${styles.list}`;
    return (
        <Card className="user-list">
            <ul className={classes}>
                {props.users.length ? userItems : noUsersFallback}
            </ul>
        </Card>
    );
};

export default UserList;
