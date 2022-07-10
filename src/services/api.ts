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
    return axios
      .get<IPizza[]>("https://626d16545267c14d5677d9c2.mockapi.io/items")
      .then((response) => response.data);
  }
}
export const Api = new AppApi();
