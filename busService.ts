import { School } from "./schoolService";
import { schoolsList } from "./schools";

import fs from "fs";
import axios from "axios";
const driverBusEndPoint = "Driver/Driver_controller/get_bus_list";



export class BusService {
  public async GetBusList(): Promise<any> {

    const schoolsData : School[] = schoolsList;
    const url = schoolsData.find((x) => x.Id == 1)?.Url + driverBusEndPoint;
    const response = await axios.get(url);
    return response.data;
  }
}
