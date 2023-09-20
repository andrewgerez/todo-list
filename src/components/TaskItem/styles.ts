import styled from "styled-components";
import { Checkbox } from "@drewdev-ui/react";

export const TaskItemContainer = styled.div`
  display: flex;

  width: 100%;
  height: 4.5rem;
  padding: 1rem;
  gap: 0.75rem;
  border-radius: 8px;

  background-color: ${(props) => props.theme["gray-500"]};
`;

export const CheckboxTask = styled(Checkbox)`
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 999px;
  margin-top: 0.1875rem;
  background-color: transparent;
  border-color: ${(props) => props.theme["blue-500"]};

  &&[data-state="checked"] {
    background-color: ${(props) => props.theme["purple-700"]};
    border-color: ${(props) => props.theme["purple-700"]};
  }

  &:focus,
  &[data-state="unchecked"] {
    border-color: ${(props) => props.theme["blue-500"]};
  }

  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`;

interface ITaskContent {
  completed: string;
}

export const TaskContent = styled.p<ITaskContent>`
  font-weight: regular;
  font-size: 0.875rem;
  color: ${(props) =>
    props.completed === "true"
      ? props.theme["gray-300"]
      : props.theme["gray-100"]};
  text-decoration: ${(props) => (props.completed === "true" ? "line-through" : "")};

  max-width: 39.5rem;
`;

export const DeleteButton = styled.button`
  all: unset;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;

  color: ${(props) => props.theme["gray-300"]};
`;
