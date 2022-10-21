import styled from 'styled-components';

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
