// app/controllers/admin-dashboard.js
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Chart from 'chart.js/auto'; // Import Chart.js
export default class AdminDashboardController extends Controller {
  @service router;

  @action
  handleClick(routeName) {
    this.router.transitionTo(routeName);
    // Add additional logic here if needed
  }

  @action
  initializeChart() {
    const ctx = document.getElementById('jobStatisticsChart').getContext('2d');
    const data = {
      labels: ['Total Jobs Posted', 'Total Applications Received', 'Active Job Listings'],
      datasets: [{
        label: 'Job Statistics',
        data: [150, 300, 75], // Replace with your actual data
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 206, 86, 0.6)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }]
    };

    // Calculate percentages and modify labels
    const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
    data.labels = data.labels.map((label, index) => {
      const value = data.datasets[0].data[index];
      const percentage = ((value / total) * 100).toFixed(2);
      return `${label} (${percentage}%)`;
    });

    new Chart(ctx, {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Job Statistics'
          }
        }
      }
    });
  }
}
