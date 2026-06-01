import { helper } from '@ember/component/helper';
import { inject as service } from '@ember/service';
export default helper(function selectedNav([currentRoute, routeName]) {
  
  return currentRoute === routeName ? 'active' : '';
});
