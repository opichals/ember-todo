import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
      addItem: function(title) {
        var appCtrl = this.controllerFor('application');
        appCtrl.get('todos').pushObject({ title: title });
      }
    }
});
