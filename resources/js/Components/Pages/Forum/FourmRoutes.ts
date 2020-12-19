import RouteService from 'Services/RouteService';
import Forums from 'Components/Pages/Forum/Forums';
import ShowForum from 'Components/Pages/Forum/ShowForum';

RouteService.registerRoute(Forums.route, ShowForum.route);
