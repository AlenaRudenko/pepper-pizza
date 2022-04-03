import { IPizza } from "./../models/pizza";
import axios from "axios";

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
