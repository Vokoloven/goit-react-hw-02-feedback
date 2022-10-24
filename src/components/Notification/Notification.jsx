import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPara = styled.p`
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Notification = p => {
  return <StyledPara>{p.message}</StyledPara>;
};

Notification.propTypes = {
  p: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
};
