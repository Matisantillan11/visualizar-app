import axios from 'axios';
import ENVIROMENT from '@visualizar/utils/config';

const ENV = ENVIROMENT();

export const apiVisualizarInstance = axios.create({
  baseURL: ENV.API_URL,
});
