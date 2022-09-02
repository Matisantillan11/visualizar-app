import axios from 'axios';
import ENVIROMENT from '@visualizar/utils/config';

const ENV = ENVIROMENT();

console.log({ENV: ENV.API_URL});
export const apiVisualizarInstance = axios.create({
  baseURL: ENV.API_URL,
});
