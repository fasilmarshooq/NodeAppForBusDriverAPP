
import fs from "fs";

export class SchoolService {
    public Get() : object {
        let school : string =  fs.readFileSync('schools.json','utf8');
        return JSON.parse(school);
    }
}

export interface School {
    Id: number;
    Name: string;
    ShortName: string;
    Url: string;
  }



