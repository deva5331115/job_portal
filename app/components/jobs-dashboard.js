import Component from '@glimmer/component';
import { action } from '@ember/object';
import 'jquery.nicescroll';
import { inject as service } from '@ember/service';


export default class JobsDashboardComponent extends Component {
    @service router;
    @service userSessions;
    @action
    handleClick(routeName) {
  
      this.router.transitionTo(routeName);
      // Add additional logic here
    }
    get currentRoute() {
        return this.router.currentRouteName;
      }
      @action
      signout(routeName) {
       this.userSessions.username='';
       this.router.transitionTo(routeName);
      }
     

   
}
