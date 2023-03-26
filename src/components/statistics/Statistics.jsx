import PropTypes from 'prop-types';

import Notification from '../notification/Notification';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const hasFeedback = total > 0;
  return (
    <>
      {hasFeedback ? (
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
      ) : (
        <Notification message="There is no feedback yet" />
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  hasFeedback: PropTypes.bool.isRequired,
};

export default Statistics;
