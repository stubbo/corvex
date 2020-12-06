import RouteService, {NavItem} from 'Services/RouteService';
import Login from './Login';
import LoginCallback from './LoginCallback';

const authRoutes: NavItem[] = [
  Login.route,
  LoginCallback.route,
];

RouteService.registerRoute(...authRoutes);
