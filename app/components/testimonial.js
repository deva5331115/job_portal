import Component from '@glimmer/component';
import { action } from '@ember/object';


export default class TestimonialComponent extends Component {
  @action
  initializeCarousel() {
    
      $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        dots:true,
        autoplayTimeout: 5000,
        responsive: {
          0: {
            items: 1,
            dotsEach: 1
          },
          600: {
            items: 2,
            dotsEach: 1
          },
          1000: {
            items: 3,
            dotsEach: 1
          }
        },
        onTranslated: function(event) {
            // Remove 'center' class from all items
            $('.owl-item').removeClass('center');

          // Add 'center' class to the center item
          let centerItemIndex = Math.floor($('.owl-item.active').length / 2);
          $('.owl-item.active').eq(centerItemIndex).addClass('center');
          }
      });
    
  }
}
