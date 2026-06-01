// app/controllers/application.js (or similar)
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class AdminLoginComponent extends Component {
  @service router;
  @service userSessions;
  @action
  handleClick(routeName) {

    this.router.transitionTo(routeName);
    // Add additional logic here
  }
  @service flashMessages;
  @tracked errorMessage = '';
    @action
    addRightPanel() {
      document.getElementById('container').classList.add("right-panel-active");
    }
  
    @action
    removeRightPanel() {
      document.getElementById('container').classList.remove("right-panel-active");
    }

    @action
  async handleLogin(event) {
    event.preventDefault();
    let email = document.getElementById("signinEmail").value;
    let password = document.getElementById("signinPSD").value;
  
    const url = 'http://localhost:5000/checklogin/admin';
    console.log("Making fetch request to:", url);
    
    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
                 });
         
    
                 console.log("Fetch response:", response);
     // let result = await response.text();
      let result= await response.json();
      console.log(result);

      if (response.ok) {
        if (result.message.includes('Login successfully')) {
          this.userSessions.username=email;
          this.flashMessages.success(result.message);
          this.handleClick('admin-dashboard')
          this.removeRightPanel();
          console.log("Signup successful");
          this.errorMessage = '';
        } else {
        
          console.error('Signup failed: ' +result.message);
          this.flashMessages.error(result.message);
        }
      } else {
       
        console.error('Signup failed: ' + result.message);
        this.flashMessages.error(result.message);
      }
    } catch (error) {
     
      console.error('Error:', error);
      this.flashMessages.error(result.message);
    }
  }
 
  

}
