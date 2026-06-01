import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class HeaderCarouselComponent extends Component {
  @service router;
  @action
  handleClick(routeName) {

    this.router.transitionTo(routeName);
    // Add additional logic here
  }
    @action
    setupCarousel(element) {
      // Initialize the carousel here
      $(element).find('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        // other Owl Carousel options
      });
    }
}
