import PropTypes from 'prop-types';

import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.label}>Good:</span> {good}
        </li>
        <li className={css.item}>
          <span className={css.label}>Neutral:</span> {neutral}
        </li>
        <li className={css.item}>
          <span className={css.label}>Bad:</span> {bad}
        </li>
        <li className={css.item}>
          <span className={css.label}>Total:</span> {total}
        </li>
        <li className={css.item}>
          <span className={css.label}>Positive feedback:</span>{' '}
          <span className={css.percentage}>{positivePercentage}%</span>
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
