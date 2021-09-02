export interface Todo {
  id: number;
  content: string;
  isCheck: boolean;
  createdAt: Date;
}

export type Todos = Todo[];

export type newTodo = {
  id: string;
  content: string;
};

export type newStatus = {
  id: string;
  isCheck: boolean;
};
