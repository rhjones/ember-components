import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['listItemStrikeThrough'],
  listItemStrikeThrough: false,
  actions: {
    toggleProperty() {
      return this.toggleProperty('listItemStrikeThrough');
    }
  },
});
