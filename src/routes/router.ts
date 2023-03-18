import config from '../config/config';
import Home from '../pages/Home/Home';
import ListUser from '../pages/ListUser/ListUserPage';
import { Router } from '../types/Router.type';
const PublishRouter: Array<Router> = [
    { path: config.routes.home, component: Home },
    { path: config.routes.listUser, component: ListUser }
];
const PrivateRouter: Array<Router> = [];
export { PrivateRouter, PublishRouter };
