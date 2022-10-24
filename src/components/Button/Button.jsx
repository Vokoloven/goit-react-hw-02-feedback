import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.xs}px;
  border-color: ${p => p.theme.colors.muted};
  border: ${p => p.theme.radii.none};
  color: ${p => p.theme.colors.background};
  margin: ${p => p.theme.space[2]}px;
  cursor: pointer;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const buttonProps = [
  {
    name: 'Good',
  },
  {
    name: 'Neutral',
  },
  {
    name: 'Bad',
  },
];

export const Button = ({ type = 'button', onClick, children, name }) => {
  return (
    <StyledButton onClick={onClick} type={type} name={name}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
