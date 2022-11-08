import styles from './Button.module.css';

const Button = props => {
    return (
        <button
            type={props.type}
            className={`add-user ${styles.button}`}
            onClick={props.onClick}
        >
            {props.label}
        </button>
    );
};

export default Button;
