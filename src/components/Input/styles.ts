import styled from "styled-components";

export const Input = styled.input`
  width: 39.875rem;
  height: 3.375rem;
  padding: 1rem 0 1rem 1rem;

  background-color: ${(props) => props.theme["gray-500"]};
  border: 1px solid ${(props) => props.theme["gray-500"]};
  border-radius: 8px;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme["purple-700"]};
  }
`;
