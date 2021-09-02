export interface Todo {
  id: number;
  content: string;
  isCheck: boolean;
  createdAt: Date;
}

export type Todos = Todo[];

export type newTodo = {
  id: number;
  content: string;
};

export type newStatus = {
  id: number;
  isCheck: boolean;
};
