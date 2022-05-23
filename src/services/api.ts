import axios from "axios";
import { IPizza } from "../store/mainPageReducer/interfaces";

class AppApi {
  fakeRequest(delay: number = 2000) {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve("success");
        } else {
          reject("failed");
        }
      }, delay);
    });
  }
  getProducts() {
    return axios.get<IPizza[]>("http://192.168.0.100:3005/products");
  }
}
export const Api = new AppApi();
