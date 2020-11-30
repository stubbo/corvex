import RouteService, {NavItem} from 'Services/RouteService'
import Login from 'Components/Pages/Auth/Login';
import {faKey} from '@fortawesome/free-solid-svg-icons';

const authRoutes: NavItem[] = [
  {
    name: 'Login',
    route: '/login',
    component: Login,
    icon: faKey,
    shouldRender: Login.shouldRender,
    topNav: true,
  }
]

RouteService.registerRoute(...authRoutes);
