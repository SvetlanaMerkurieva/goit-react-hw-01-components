import data from './data.json'

export const Statistics = () => {
    return ( 
        <section className="statistics">
            <h2 className="title">Upload stats</h2>
            <ul className="stat-list">
                {data.map((obj) => (
                    <li className="item">
                        <span className="label">{obj.label}</span>
                        <span className="percentage">{obj.percentage}</span>
                    </li>
                    )
                )}
            </ul>
        </section>
    )
}