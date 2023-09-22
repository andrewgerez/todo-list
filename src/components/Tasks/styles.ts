import styled from "styled-components";

export const TaskListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 46rem;
  height: 451px;
  gap: 4rem;

  @media (max-width: 600px) {
    width: 24rem;
  }
`;

export const NewTaskForm = styled.form`
  display: flex;
  gap: 0.5rem;

  margin: -1.6875rem 0 0 0;

  input {
    width: 39.875rem;
    height: 3.375rem;
    padding: 0 1rem;

    background-color: ${(props) => props.theme["gray-500"]};
    border: 1px solid ${(props) => props.theme["gray-700"]};
    border-radius: 8px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

    &:focus {
      outline: 0;
      border-color: ${(props) => props.theme["purple-700"]};
    }

    @media (max-width: 600px) {
      width: 16rem;
    }
  }
`;

export const TaskList = styled.main`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.75rem;

  padding-bottom: 1rem;
`;

export const TaskListHeader = styled.header`
  width: 100%;
  height: 1.1875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  div {
    display: flex;
    gap: 0.5rem;
  }

  span {
    font-weight: bold;
    font-size: 0.75rem;
    color: ${(props) => props.theme["gray-200"]};
    background-color: ${(props) => props.theme["gray-400"]};
    padding: 0.125rem 0.5rem;
    border-radius: 999px;
  }
`;

interface TaskCounterVariants {
  variant: "created" | "done";
}

export const TaskCounter = styled.p<TaskCounterVariants>`
  font-weight: bold;
  font-size: 0.875rem;
  color: ${(props) =>
    props.variant === "created"
      ? props.theme["blue-500"]
      : props.theme["purple-500"]};
`;
