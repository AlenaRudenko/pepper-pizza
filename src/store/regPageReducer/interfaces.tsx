export interface IRegPage {
  name: string;
  surname: string;
  email: string;
  password: string;
}
export interface INewUserReducer {
    newUser: IRegPage[];
}