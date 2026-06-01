import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | job-list', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:job-list');
    assert.ok(route);
  });
});
