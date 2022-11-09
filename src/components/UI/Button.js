import styles from './Button.module.css';

const Button = props => {
    const classes = `${props.className} ${styles.button}`;
    return (
        <button
            type={props.type || 'button'}
            className={classes}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;
