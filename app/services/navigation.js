// app/services/navigation.js
import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class NavigationService extends Service {
  @service router;

  handleClick(routeName) {
    this.router.transitionTo(routeName);
  }
}
