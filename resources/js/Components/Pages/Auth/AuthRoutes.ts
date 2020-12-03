import RouteService, {NavItem} from 'Services/RouteService';
import Login from 'Components/Pages/Auth/Login';

const authRoutes: NavItem[] = [
  Login.route,
];

RouteService.registerRoute(...authRoutes);
