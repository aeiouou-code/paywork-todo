import { ITodos } from 'types/todo';

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

export const mockData: ITodos = [
  {
    id: 1,
    content: '자바스크립트 17강 공부하기',
    isCheck: true,
    createdAt: today,
    due: tomorrow,
    category: '📚 공부',
  },
  {
    id: 2,
    content: '미용실 가기',
    isCheck: true,
    createdAt: today,
    due: tomorrow,
    category: '🌱 생활',
  },
  {
    id: 3,
    content: '타입스크립트 3강 공부하기',
    isCheck: true,
    createdAt: today,
    due: tomorrow,
    category: '📚 공부',
  },
  {
    id: 4,
    content: '요가하기',
    isCheck: false,
    createdAt: today,
    due: tomorrow,
    category: '🏃 운동',
  },
  {
    id: 5,
    content: '코드리뷰 받기',
    isCheck: false,
    createdAt: today,
    due: tomorrow,
    category: '👩🏻‍💻 업무',
  },
];

// export enum TCategory {
//   WORK = '👩🏻‍💻 업무',
//   STUDY = '📚 공부',
//   LIVING = '🌱 생활',
//   EXERCISE = '🏃 운동',
//   ETC = '💬 기타',
// }
