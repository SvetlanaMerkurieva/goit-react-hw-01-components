import data from './data.json'

export const Statistics = () => {
    return ( 
        <section class="statistics">
            <h2 class="title">Upload stats</h2>
            <ul class="stat-list">
                {data.map((obj) => (
                    <li class="item">
                        <span class="label">{obj.label}</span>
                        <span class="percentage">{obj.percentage}</span>
                    </li>
                    )
                )}
            </ul>
        </section>
    )
}