import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['listDetailHidden'],
  listDetailHidden: false,
  actions: {
    toggleListDetail() {
      return this.toggleProperty('listDetailHidden');
    },
    newFunc() {
      console.log('got the testFunc action');
    }
  },
});
