// app/controllers/application.js (or similar)
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class LoginComponent extends Component {
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
  
    const url = 'http://localhost:5000/checklogin';
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
          this.handleClick('jobs-dashboard')
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
  @action
  async handleSignup(event) {
    event.preventDefault();
    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPSD").value;
  
    const url = 'http://localhost:5000/addUser';
    console.log("Making fetch request to:", url);
    
    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
                 });
         
    
                 console.log("Fetch response:", response);
      let result = await response.json();
      console.log(result);

     
        if(result.message.includes('User registered successfully')){
          this.flashMessages.success(result.message);
          this.removeRightPanel();
          console.log("Signup successful");
          this.errorMessage = '';
        }
        
        // Handle signup failure (e.g., show an error message)
       else {
        
        //this.errorMessage = result.message;
        console.error('Signup failed: ' + result.message);
        this.flashMessages.error(result.message);
        // Redirect or update state on successful signup
       
      }
    } catch (error) {
    //  this.errorMessage = 'An error occurred while trying to sign up. Please try again later.';
    this.flashMessages.error('An error occurred while trying to sign up. Please try again later.');
      console.error('Error:', error);
    }
  }

}
