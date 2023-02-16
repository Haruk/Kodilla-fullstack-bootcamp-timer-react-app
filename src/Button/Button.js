import styles from './Button.module.scss';


const Button = ({ action, children }) => {
    return (
        <div className={styles.button} onClick={() => action()}>
            {children}
        </div>
    );
}

export default Button;
