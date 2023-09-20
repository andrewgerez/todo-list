import styled from 'styled-components'

export const NewTaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;

  margin-top: -1.6875rem;

  input {
    width: 39.875rem;
    height: 3.375rem;
    padding: 1rem 0 1rem 1rem;
    background-color: ${(props) => props.theme['gray-500']};
  }

  button {
    width: 5.625rem;
    height: 3.25rem;

    svg {
      color: ${(props) => props.theme['gray-100']};
    }
  }
`;