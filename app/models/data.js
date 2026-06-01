import Model from '@ember-data/model';

export default class DataModel extends Model {
    @attr('string') name;
    @attr('string') email;
}
