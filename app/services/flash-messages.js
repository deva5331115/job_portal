import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class FlashMessagesService extends Service {
  @service('flash-messages') flashMessages;

  showMessage(message) {
    this.flashMessages.success(message);
  }

  success(message) {
    console.log(`Success: ${message}`);

    this.displayMessage(message, 'alert-box', 'success');
  }

  error(message) {
    console.log(`Error: ${message}`);

    this.displayMessage(message, 'alert-box', 'alert');
  }

  displayMessage(message, ...classes) {
    const alertElement = document.createElement('div');
    alertElement.textContent = message;
    //alertElement.classList.add(...classes);

    const container = document.getElementById('flash-messages-container');
    container.appendChild(alertElement);
    const container1 = document.getElementById('flash-messages-container1') || container ;
    container1.appendChild(alertElement);
    if(classes.includes('alert')){
        container.style.backgroundColor='red';
        container1.style.backgroundColor='red';

    }
    else{
        container.style.backgroundColor='green';
        container1.style.backgroundColor='green';
    }
   

    setTimeout(() => {
      alertElement.remove();
    }, 5000);
  }

  // Add more methods for other types of messages as needed
}
