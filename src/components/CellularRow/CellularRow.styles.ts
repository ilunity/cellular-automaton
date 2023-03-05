import styled from 'styled-components';

interface StyledCell {
  isActive: boolean;
}

export const StyledCell = styled.div<StyledCell>`
  height: 30px;
  width: 30px;
  background-color: ${ props => props.isActive ? '#f79646' : 'inherit' };
  border: black 1px solid;
`;
