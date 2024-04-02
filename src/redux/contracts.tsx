export interface AuthState {
  phone: string;
  userData: userDataInterface;
}
export interface userDataInterface {
  _id: string;
  mobile: string;
  role: string;
  createAt: string;
}
