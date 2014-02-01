export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('group');
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('guestCount', 0);
    controller.set('selectedGroup', '');
    controller.set('selectedEvent', '');
  }
});
