import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTitleH1 = styled.h1`
  font-size: ${p => p.theme.fontSizes.l}px;
`;

export const Section = p => {
  return (
    <>
      <StyledTitleH1>{p.title}</StyledTitleH1>
      {p.children}
    </>
  );
};

Section.propTypes = {
  p: PropTypes.shape({
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.symbol),
  }),
};
