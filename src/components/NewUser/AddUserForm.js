import { useState } from 'react';

import Button from '../UI/Button';
import styles from './AddUserForm.module.css';

const AddUserForm = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const usernameChangeHandler = e => {
        setEnteredUsername(e.target.value);
    };

    const ageChangeHandler = e => {
        setEnteredAge(e.target.value);
    };

    const submitHandler = e => {
        e.preventDefault();

        const formData = {};

        if (!enteredUsername || !enteredAge) {
            formData.isValid = false;
            formData.errorTitle = 'Invalid input';
            formData.errorContent =
                'Please enter a valid name and age (non-empty values).';
        } else if (enteredAge < 1) {
            formData.isValid = false;
            formData.errorTitle = 'Invalid input';
            formData.errorContent = 'Please enter a valid age (>0).';
        } else {
            formData.isValid = true;
            formData.username = enteredUsername;
            formData.age = enteredAge;
        }

        props.onSubmit(formData);
        setEnteredUsername('');
        setEnteredAge('');
    };

    return (
        <form
            action="POST"
            onSubmit={submitHandler}
            className={styles['add-user-form']}
        >
            <label htmlFor="user-name">Username</label>
            <input
                type="text"
                name="user-name"
                id="user-name"
                value={enteredUsername}
                onChange={usernameChangeHandler}
            />
            <label htmlFor="user-age">Age (Years)</label>
            <input
                type="number"
                max="200"
                min="0"
                step="1"
                name="user-age"
                id="user-age"
                value={enteredAge}
                onChange={ageChangeHandler}
            />
            <Button type="submit" label="Add User" className="button"></Button>
        </form>
    );
};

export default AddUserForm;
