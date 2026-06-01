import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | company-dashboard', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:company-dashboard');
    assert.ok(route);
  });
});
