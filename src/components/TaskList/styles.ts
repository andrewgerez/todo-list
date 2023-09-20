import styled from 'styled-components';

export const TaskListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;

  width: 46rem;
`;

export const TaskListHeader = styled.header`
  width: 100%;
  height: 1.1875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
  variant: 'created' | 'done';
}

export const TaskCounter = styled.p<TaskCounterVariants>`
  font-weight: bold;
  font-size: 0.875rem;
  color: ${(props) => 
    props.variant === "created" 
      ? props.theme["blue-500"] 
      : props.theme["purple-500"]
  };
`;

export const TaskList = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.75rem;
`;