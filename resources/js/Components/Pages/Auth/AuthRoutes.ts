import RouteService, {NavItem} from 'Services/RouteService';
import Login from './Login';
import LoginCallback from './LoginCallback';
import Logout from 'Components/Pages/Auth/Logout';

const authRoutes: NavItem[] = [
  Login.route,
  LoginCallback.route,
  Logout.route,
];

RouteService.registerRoute(...authRoutes);
