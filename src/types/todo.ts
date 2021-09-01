export interface ITodo {
  id: number;
  content: string;
  isCheck: boolean;
  createdAt: Date | null;
  due: Date;
  category: string;
}

export type ITodos = ITodo[];

// export enum TCategory {
//   WORK = '👩🏻‍💻 업무',
//   STUDY = '📚 공부',
//   LIVING = '🌱 생활',
//   EXERCISE = '🏃 운동',
//   ETC = '💬 기타',
// }
