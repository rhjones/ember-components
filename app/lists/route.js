import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [
     {
       title: 'Favorites',
       items: [
         { content: 'Mountains' },
         { content: 'Coffee' },
         { content: 'Live music' },
         { content: 'The spooky ghost emoji' },
       ],
     }, {
       title: 'Todos',
       items: [
         { content: 'Practice Ember' },
         { content: 'Move cross-country' },
         { content: 'Get oil change' },
         { content: 'Buy catnip' },
       ],
     },
    ];
  },
});
