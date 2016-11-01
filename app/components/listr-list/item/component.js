import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['listItemCompleted'],
  listItemCompleted: false,
  actions: {
    toggleStrikeThrough() {
      return this.toggleProperty('listItemCompleted');
    }
  },
});
