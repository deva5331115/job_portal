import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class userManageController extends Controller {
  @tracked jobName = '';
  @tracked companyName = '';
  @tracked dateCreated = '';
  @tracked jobs = [
    { jobName: 'Software Engineer', companyName: 'Tech Innovations', dateCreated: '2023-01-15' },
    { jobName: 'Product Manager', companyName: 'Creative Solutions', dateCreated: '2023-02-10' },
    { jobName: 'Data Analyst', companyName: 'Data Insights', dateCreated: '2023-03-05' }
  ];

  @action
  addJob(event) {
    event.preventDefault();
    if (this.jobName && this.companyName && this.dateCreated) {
      this.jobs = [...this.jobs, { jobName: this.jobName, companyName: this.companyName, dateCreated: this.dateCreated }];
      this.jobName = '';
      this.companyName = '';
      this.dateCreated = '';
    }
  }

  @action
  removeJob(index) {
    this.jobs = this.jobs.filter((_, i) => i !== index);
  }

  @action
  viewJob(jobName) {
    alert('Viewing job: ' + jobName);
  }
}
