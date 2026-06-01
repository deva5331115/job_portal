import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('home', { path: '/welcome' });
  this.route('about');
  this.route('job-list');
  this.route('job-detail');
  this.route('category');
  this.route('testimonial');
  this.route('contact');
  this.route('not-found');
  this.route('login');
  this.route('jobs-dashboard');
  this.route('edit-profile');
  this.route('settings');
  this.route('chat');
  this.route('calls');
  this.route('notifications');
  this.route('overall');

  this.route('company-login');
  this.route('company-dashboard');
  this.route('company-overview');
  this.route('company-notification');
  this.route('resume-database');
  this.route('my-jobpost');
  this.route('create-jobpost');
  this.route('mycompany-details');
  this.route('edit-profile-comp');
  this.route('settings-comp');
  this.route('chat-comp');
  this.route('calls-comp');
  this.route('overall-comp');
  this.route('admin-login');
  this.route('admin-dashboard');
  this.route('job-manage');
  this.route('user-manage');
  this.route('job-app');
});
