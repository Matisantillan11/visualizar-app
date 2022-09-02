export interface IAuthenticateRequest {
  email: string;
  password: string;
}

export interface IAuthenticationResponse {
  user: User;
  token: string;
}

export interface User {
  _id: string;
  name: string;
  lastname: string;
  email: string;
  dni: string;
  school: string;
  rol: string;
  course: string;
  creationDate: string;
  updateDate: string;
  isActive: boolean;
  secret: string;
  __v: number;
}
