import styles from './footer.module.css';

export default function Footer({completedTodos, totalTodos}) {
    return (
    <div className={styles.footer}>
        <span className={styles.item}>Completed Todos is: {completedTodos}</span>
        <span className={styles.item}>Total Todos is: {totalTodos}</span>
    </div>
    );
}