// app/controllers/application.js (or similar)
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ChatComponent extends Component {
    @service router;
  @action
  handleClick(routeName) {

    this.router.transitionTo(routeName);
    // Add additional logic here
  }
  
}
