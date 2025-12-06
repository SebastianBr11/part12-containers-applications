import { expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import Todo from "./Todo";

test("Renders todo", async () => {
  const todo = { text: "Test Todo", done: false };
  const onDelete = vi.fn((_todo) => {});
  const onComplete = vi.fn((_todo) => {});

  const { getByText } = await render(
    <Todo
      todo={todo}
      onDelete={() => onDelete(todo)}
      onComplete={() => onComplete(todo)}
    />,
  );
  await expect.element(getByText(todo.text)).toBeInTheDocument();
  await expect.element(getByText("This todo is not done")).toBeInTheDocument();

  const deleteButton = getByText("Delete");
  const completeButton = getByText("Set as done");

  await expect.element(deleteButton).toBeInTheDocument();
  await expect.element(completeButton).toBeInTheDocument();

  await deleteButton.click();
  expect(onDelete).toHaveBeenCalledWith(todo);

  await completeButton.click();
  expect(onComplete).toHaveBeenCalledWith(todo);
});
