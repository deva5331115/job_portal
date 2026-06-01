// app/helpers/transition-to.js
import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default class NavigateHelper extends Helper {
  @service router;

  compute([routeName, ...args]) {
    // Call the router's transitionTo method with routeName and args
    return () => this.router.transitionTo(routeName, ...args);
  }
}
