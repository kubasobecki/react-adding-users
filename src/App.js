import { useState } from 'react';

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
                {
                    username: formData.username,
                    age: formData.age,
                    id: formData.id
                },
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
            <AddUserForm onSubmit={formSubmitHandler} />
            <UserList users={users} />
            {!modal.isValid && (
                <Modal
                    title={modal.title}
                    content={modal.content}
                    closeModal={closeModalHandler}
                />
            )}
        </div>
    );
}

export default App;
