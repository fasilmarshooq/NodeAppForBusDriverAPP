import axios from "axios";
const driverAuthEndPoint = "Driver/Auth/login";

import { School } from "./schoolService";
import { schoolsList } from "./schools";

interface AuthInfo {
  SchoolId: string;
  UserName: string;
  Password: string;
}

export class AuthService {
  public async Login(authInfo: AuthInfo): Promise<any> {
    const schoolsData: School[] = schoolsList;

    const url = schoolsData.find((x) => x.Id == 1)?.Url + driverAuthEndPoint;

    const response = await axios.post(url, {
      username: authInfo.UserName,
      password: authInfo.Password,
    });

    return response.data;
  }
}
