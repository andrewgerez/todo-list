import styled from "styled-components";

export const Button = styled.button`
  all: unset;
  width: 5.625rem;
  height: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 8px;
  font-weight: bold;

  background-color: ${(props) => props.theme["blue-700"]};

  &:hover {
    background-color: ${(props) => props.theme["blue-500"]};
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }

  svg {
    color: ${(props) => props.theme["gray-100"]};
  }
`;
