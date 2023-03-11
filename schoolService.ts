
const fs = require("fs");


export class SchoolService {

    public Get() : object {
        let school : string =  fs.readFileSync('schools.json','utf8');
        return JSON.parse(school);
    }
}

//  function GetSchools() : object {
//     String schools = fs.readFileSync('schools.json','utf8')
//     return JSON.parse(schools);
  
// }

// module.exports = {GetSchools};