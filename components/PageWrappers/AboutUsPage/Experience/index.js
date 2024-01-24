import React from "react";
import css from "./index.module.css";

export default function index({ data }) {
  const Card = (head1, head2) => (
    <div className={css.CountCard} key={head2}>
      <span className={css.Head1}>{head1}</span>
      <span className={css.Head2}>{head2}</span>
    </div>
  );
  return (
    <div className={css.CountsContainer}>
      <div className={css.CountsWrapper}>
        <div className={css.Counts}>
          <span className={css.CountsHead}>
            {data.Heading1}
            <strong className={css.CountsHeadLogo}>
              &nbsp;
              {data.heading2}
            </strong>
          </span>
          <div className={css.CountsCards}>
            {Card(data.Locations + "+", "Locations")}
            {Card(data.Employees + "+", "Employees")}
            {Card(data.Technologies + "+", "Technologies")}
            {Card("24/7", "Support")}
          </div>
        </div>
      </div>
    </div>
  );
}
