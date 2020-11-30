import {ComponentType} from 'react';
import {EventEmitter} from 'events';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import AuthService from 'Services/AuthService';

export interface NavItem {
  name: string;
  route: string;
  component: ComponentType<unknown>;
  shouldRender: boolean;
  icon?: IconDefinition;
  topNav?: boolean;
  resourceNav?: () => boolean;
  exact?: boolean;
}

class RouteService extends EventEmitter {
  allRoutes: NavItem[] = [];
  validRoutesCache: NavItem[] = null;
  validNavRoutesCache: NavItem[] = null;
  validPageRoutesCache: NavItem[] = null;

  constructor() {
    super();

    this.routeCaches = this.routeCaches.bind(this);
    AuthService.on('change', this.routeCaches);
  }

  routeCaches() {
    this.validateRoutes();
    this.validateNavRoutes();
    this.validatePageRoutes();

    this.emit('change');
  }

  public registerRoute(...route: NavItem[]) {
    this.allRoutes.push(...route);
  }

  validateRoutes(): NavItem[] {
    const routes = this.allRoutes.filter(r => r.shouldRender);
    this.validRoutesCache = routes;

    return routes;
  }

  validateNavRoutes(): NavItem[] {
    const routes = this.validRoutes.filter(r => r.topNav);
    this.validNavRoutesCache = routes;

    return routes;
  }

  validatePageRoutes(): NavItem[] {
    const routes = this.validRoutes.filter(r => (r.resourceNav && r.resourceNav()));
    this.validPageRoutesCache = routes;

    return routes;
  }

  public get validRoutes(): NavItem[] {
    return this.validRoutesCache ?? this.validateRoutes();
  }

  public get validNavRoutes(): NavItem[] {
    return this.validNavRoutesCache ?? this.validateNavRoutes();
  }

  public get validPageRoutes(): NavItem[] {
    return this.validPageRoutesCache ?? this.validatePageRoutes();
  }
}

export default new RouteService;
