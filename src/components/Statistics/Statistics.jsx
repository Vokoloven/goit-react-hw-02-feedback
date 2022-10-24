import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTitleH2 = styled.h2`
  font-size: ${p => p.theme.fontSizes.l}px;
`;

export const Statistic = ({ state }) => {
  console.log(state);
  return (
    <>
      <StyledTitleH2>Statistic</StyledTitleH2>
      <p>Good: {state.good}</p>
      <p>Neutral: {state.neutral}</p>
      <p>Bad: {state.bad}</p>
      <p>Total: {state.total}</p>
      <p>Positive feedbacks: {state.positiveFeedback}%</p>
    </>
  );
};

Statistic.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
  }),
};
