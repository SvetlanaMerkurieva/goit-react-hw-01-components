import styles from './Statistics.module.css';

export const Statistics = ({title, stats}) => {
    return ( 
        <section className={styles.Statistics}>
            <h2 className={styles.Title}>{title}</h2>
            <ul className={styles.List}>
                {stats.map((obj) => (
                    <li className={styles.Item} key={obj.id}>
                        <span className="label">{obj.label}</span>
                        <span className="percentage">{obj.percentage}</span>
                    </li>
                    )
                )}
            </ul>
        </section>
    )
}