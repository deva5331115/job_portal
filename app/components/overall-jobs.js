import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class JobSearchComponent extends Component {
  @tracked searchQuery = '';
  @tracked jobs = [];
  @tracked currentPage = 1;
  @tracked totalPages = 1;
  @tracked isLoading = false;

  @action
  async search() {
    this.isLoading = true;
    // Make an API call to search jobs based on this.searchQuery
    let results = await fetch(`/api/jobs?query=${this.searchQuery}`).then(res => res.json());
    this.jobs = results.jobs;
    this.totalPages = results.totalPages;
    this.isLoading = false;
  }

  @action
  filterByCity(city) {
    this.searchQuery = city;
    this.search();
  }

  @action
  filterByExperience(years) {
    this.searchQuery = `Experience > ${years} years`;
    this.search();
  }

  @action
  async loadPage(page) {
    this.isLoading = true;
    this.currentPage = page;
    let response = await fetch('http://localhost:5000/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: this.searchQuery,
          page: this.currentPage,
        }),
      });
      let results = await response.json();
    this.jobs = results.jobs;
    this.isLoading = false;
  }

  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  isActivePage(page) {
    return this.currentPage === page;
  }
}
