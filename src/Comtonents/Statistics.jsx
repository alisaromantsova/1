import css from "./Statistics.module.css";
function Statistics({ data }) {
  return (
    <section className={css.statistics}>
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {data.map((item) => (
          <li key={item.id} className="item">
            {item.label && <span className="label">{item.label}</span>}
            <span className="percentage">{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Statistics;
