import styles from './Modal.module.css';
import Button from './Button';

const Modal = props => {
    return (
        <div
            className={`modal-background ${styles.modal}`}
            onClick={props.closeModal}
        >
            <div className={styles['modal-inner']}>
                <div className={styles['modal-inner__title']}>
                    {props.title}
                </div>
                <div className={styles['modal-inner__content']}>
                    <p className={styles['modal-inner__content__message']}>
                        {props.content}
                    </p>
                    <Button label="OK" className="modal-button-ok"></Button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
