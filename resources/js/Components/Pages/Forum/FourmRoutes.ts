import RouteService from 'Services/RouteService';
import Index from 'Components/Pages/Forum/Forums';
import ShowForum from 'Components/Pages/Forum/Forums/ShowForum';
import ShowBoard from 'Components/Pages/Forum/Boards/ShowBoard';

RouteService.registerRoute(Index.route, ShowForum.route, ShowBoard.route);
