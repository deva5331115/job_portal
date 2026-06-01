// app/controllers/application.js (or similar)
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class FooterComponent extends Component {
  @tracked username='';
  @service userSessions;
    @service router;
  @action
  handleClick(routeName) {

    this.router.transitionTo(routeName);
    // Add additional logic here
  }
  get currentUsername() {
    return this.userSessions.username;
  }
  @action
   signout(routeName) {
    this.userSessions.username='';
    this.router.transitionTo(routeName);
   }
}
