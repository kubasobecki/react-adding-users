import { useState } from 'react';

import Card from './components/UI/Card';
import AddUserForm from './components/NewUser/AddUserForm';
import UserList from './components/Users/UserList';

function App() {
    const [users, setUsers] = useState([]);

    const addUserHandler = newUser => {
        setUsers(prevUsers => [newUser, ...prevUsers]);
    };

    return (
        <div>
            <Card className="add-user-form">
                <AddUserForm onAddUser={addUserHandler}></AddUserForm>
            </Card>
            <Card className="user-list">
                <UserList users={users}></UserList>
            </Card>
        </div>
    );
}

export default App;
