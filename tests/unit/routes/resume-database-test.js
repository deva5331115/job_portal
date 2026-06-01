import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | resume-database', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:resume-database');
    assert.ok(route);
  });
});
