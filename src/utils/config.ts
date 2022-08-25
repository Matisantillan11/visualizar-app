import {DEVELOPMENT as DEVELOPMENT_CONFIG} from '@visualizar/config/enviroments/development';
import {PRODUCTION as PRODUCTION_CONFIG} from '@visualizar/config/enviroments/production';
const ENVIROMENT = () => {
  const NODE_ENV = process.env.NODE_ENV || 'development';
  switch (NODE_ENV) {
    case 'development':
      return DEVELOPMENT_CONFIG;
    case 'production':
      return PRODUCTION_CONFIG;
    default:
      return DEVELOPMENT_CONFIG;
  }
};

export default ENVIROMENT;
