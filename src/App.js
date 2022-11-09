import { useState } from 'react';

import Card from './components/UI/Card';
import AddUserForm from './components/Users/AddUserForm';
import UserList from './components/Users/UserList';
import Modal from './components/UI/Modal';

function App() {
    const [users, setUsers] = useState([]);
    const [modal, setModal] = useState({ isValid: true });

    const formSubmitHandler = formData => {
        if (!formData.isValid) {
            setModal(prevModal => {
                return {
                    isValid: false,
                    title: formData.errorTitle,
                    content: formData.errorContent
                };
            });
        } else {
            setUsers(prevUsers => [
                { username: formData.username, age: formData.age },
                ...prevUsers
            ]);
        }
    };

    const closeModalHandler = e => {
        if (
            e.target.classList.contains('modal-background') ||
            e.target.classList.contains('modal-button-ok')
        ) {
            setModal(prevModal => {
                return { isValid: true };
            });
        }
    };

    return (
        <div>
            <Card className="add-user-form">
                <AddUserForm onSubmit={formSubmitHandler}></AddUserForm>
            </Card>
            <Card className="user-list">
                <UserList users={users}></UserList>
            </Card>
            {!modal.isValid && (
                <Modal
                    title={modal.title}
                    content={modal.content}
                    closeModal={closeModalHandler}
                ></Modal>
            )}
        </div>
    );
}

export default App;
