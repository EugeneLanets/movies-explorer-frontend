import './AboutProject.scss';

const AboutProject = () => (
  <section className="about-project section" id="about-project">
    <div className="container">
      <h2 className="section__heading">О проекте</h2>
      <div className="section__inner">
        <ul className="about-project__list">
          <li className="about-project__item">
            <p className="section__subtitle">
              Дипломный проект включал 5 этапов
            </p>
            <p className="section__paragraph">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </li>
          <li className="about-project__item">
            <p className="section__subtitle">
              На выполнение диплома ушло 5 недель
            </p>
            <p className="section__paragraph">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
        <ul className="about-project__diag">
          <li className="about-project__diag-column about-project__diag-column_type_back">
            <div className="about-project__diag-bar about-project__diag-bar_type_back">1 неделя</div>
            <div className="about-project__diag-label">Back-end</div>
          </li>
          <li className="about-project__diag-column">
            <div className="about-project__diag-bar">4 недели</div>
            <div className="about-project__diag-label">Front-end</div>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default AboutProject;
