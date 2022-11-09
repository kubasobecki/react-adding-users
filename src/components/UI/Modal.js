import styles from './Modal.module.css';
import Button from './Button';

const Modal = props => {
    return (
        <div
            className={`modal-background ${styles.modal}`}
            onClick={props.closeModal}
        >
            <div className={styles['modal-inner']}>
                <header className={styles['modal-inner__title']}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles['modal-inner__content']}>
                    <p className={styles['modal-inner__content__message']}>
                        {props.content}
                    </p>
                    <Button className="modal-button-ok">OK</Button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
