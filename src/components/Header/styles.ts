import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 12.5rem;
  background-color: ${(props) => props.theme['gray-700']};
`;