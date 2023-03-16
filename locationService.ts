import { FireBaseHelper } from "./firebaseReference";
import "firebase/database";
import { child, get } from "firebase/database";

let reference: any = {};
interface BusInfo {
  schoolId: number;
  busId: number;
}


export class LocationService {
  public async GetCurrentLocation(busInfo: BusInfo): Promise<any> {
    try {
      reference = new FireBaseHelper().getReference();
    } catch (e) {
      console.log(e);
    }
    return get(
      child(
        reference,
        `/school/${busInfo.schoolId}/trips/${busInfo.busId}/location`
      )
    )
      .then((snapshot) => {
        if (snapshot.exists()) {
          let result = JSON.parse(JSON.stringify(snapshot.val()));
          let latlng = result?.at(-1);
          let splited = latlng?.split(",");

          return { lat: splited[0], lng: splited[1] };
        } else {
          console.log("No data available");
          return {};
        }
      })
      .catch((error) => {
        console.error(error);
        return {};
      });
  }
}
