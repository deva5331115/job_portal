// app/controllers/application.js (or similar)
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AboutController extends Controller {
    @service router;
  @action
  handleClick(routeName) {

    this.router.transitionTo(routeName);
    // Add additional logic here
  }
}
