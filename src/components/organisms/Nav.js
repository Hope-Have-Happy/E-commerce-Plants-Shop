import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button/Button';
import Preferences from '../molecules/Preferences';

const StyledWrapper = styled.nav`
  margin-top: 3rem;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: relative;
`;
const StyledLinkWrapper = styled.li`
  padding: 0 1rem;
`;

const Navigation = () => (
  <StyledWrapper>
    <StyledListWrapper>
      <StyledLinkWrapper>
        <Button active>All</Button>
      </StyledLinkWrapper>
      <StyledLinkWrapper>
        <Button>Home</Button>
      </StyledLinkWrapper>
      <StyledLinkWrapper>
        <Button>Outdoor</Button>
      </StyledLinkWrapper>
    </StyledListWrapper>
    <Preferences />
  </StyledWrapper>
);
export default Navigation;