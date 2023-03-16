import { schoolsList } from "./schools";

export class SchoolService {
  public Get(): object {
    return schoolsList;
  }
}

export interface School {
  Id: number;
  Name: string;
  ShortName: string;
  Url: string;
}
