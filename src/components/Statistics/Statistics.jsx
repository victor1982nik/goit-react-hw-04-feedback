import PropTypes from 'prop-types';
import { Paragraph } from './Statistics.styled';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <ul>
        <Paragraph>Good: {good}</Paragraph>
        <Paragraph>Neutral: {neutral}</Paragraph>
        <Paragraph>Bad: {bad}</Paragraph>
      </ul>
      <>
        <Paragraph>Total: {total}</Paragraph>
        <Paragraph>Positive feedback: {positivePercentage}%</Paragraph>
      </>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
