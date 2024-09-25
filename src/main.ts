interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<Todo, "completed">;
const todo: TodoPreview = { title: "Hello", description: "World" };
