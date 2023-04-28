import {Grade} from "./grade";

export interface Quiz {
  name:string;
  description:string;
  author:string;
  grade:Grade;
  questions:[];
}
