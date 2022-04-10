import { PropsDemoViewData, Task } from "./types";

export const initialTasks: Task[] = [
  { text: 'Задача 1', id: Date.now() },
  { text: 'Задача 2', id: Date.now() + 100 },
]

export const initialPropsDemoData: PropsDemoViewData = {
  status: 'DRAFT',
  items: ['Вупсень', 'Пупсень', 'Шнюк', 'Мила']
};