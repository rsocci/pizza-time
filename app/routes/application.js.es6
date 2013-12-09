export default Ember.Route.extend({
  setupController: function(controller, model) {
    this._super();
    controller.set('guestCount', 0);
  }
});
