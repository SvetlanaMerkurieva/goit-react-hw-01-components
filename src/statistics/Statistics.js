import data from './data.json';
import styles from './Statistics.module.css';

export const Statistics = () => {
    return ( 
        <section className={styles.Statistics}>
            <h2 className={styles.Title}>Upload stats</h2>
            <ul className={styles.List}>
                {data.map((obj) => (
                    <li className={styles.Item}>
                        <span className="label">{obj.label}</span>
                        <span className="percentage">{obj.percentage}</span>
                    </li>
                    )
                )}
            </ul>
        </section>
    )
}