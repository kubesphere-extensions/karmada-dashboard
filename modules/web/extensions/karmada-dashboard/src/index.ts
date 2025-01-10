import routes from './routes';
import locales from './locales';

const menus = [
  {
    parent: 'global',
    name: 'karmada-dashboard',
    title: 'Karmada Dashboard',
    icon: 'cluster',
    order: 0,
    desc: 'Hello karmada-dashboard',
    skipAuth: true,
  },
];

const extensionConfig = {
  routes,
  menus,
  locales,
};

export default extensionConfig;
