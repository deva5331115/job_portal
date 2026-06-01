// app/services/user-session.js
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class UserSessionsService extends Service {
  @tracked username = '';
  
}
