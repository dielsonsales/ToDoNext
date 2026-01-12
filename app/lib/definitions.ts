import { Calendar, House, Star, Sun, User } from "lucide-react";

export type Task = {
  id: string;
  // icon: string;
  title: string;
  // note: string;
  // remindData: Date;
  // dueDate: Date;
  done: boolean;
};

export type DefaultList = {
  id: string;
  icon: string;
  title: string;
  color: string;
};

export type CustomTaskList = {
  id: string;
  icon: string;
  title: string;
};

export const IconMap = {
  sun: Sun,
  star: Star,
  calendar: Calendar,
  user: User,
  house: House,
};
export type IconName = keyof typeof IconMap;
