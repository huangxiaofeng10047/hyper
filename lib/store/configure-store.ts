import configureStoreForDevelopment from './configure-store.dev';
import configureStoreForProduction from './configure-store.prod';

export default () => {
  if (process.env.NODE_ENV === 'production') {
    return configureStoreForProduction();
  }

  return configureStoreForDevelopment();
};
