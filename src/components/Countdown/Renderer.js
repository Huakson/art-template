import { Fragment } from "react";

const Renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <Fragment>
      <div className="single-countdown">
        <span className="single-countdown__time">{days}</span>
        <span className="single-countdown__text">Dias</span>
      </div>
      <div className="single-countdown">
        <span className="single-countdown__time">{hours}</span>
        <span className="single-countdown__text">Horas</span>
      </div>
      <div className="single-countdown">
        <span className="single-countdown__time">{minutes}</span>
        <span className="single-countdown__text">Minutos</span>
      </div>
      <div className="single-countdown">
        <span
          className="single-countdown__time"
          suppressHydrationWarning={true}
        >
          {seconds}
        </span>
        <span className="single-countdown__text">Segundos</span>
      </div>
    </Fragment>
  );
};

export default Renderer;
