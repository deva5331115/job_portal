// app/services/current-route.js
import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class CurrentRouteService extends Service {
  @service router;

  get currentRoute() {
    return this.router.currentRouteName;
  }
}
