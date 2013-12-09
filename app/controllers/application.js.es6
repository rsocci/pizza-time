export default Ember.Controller.extend({
  numberPizzas: function() {
    return Math.ceil(this.get('guestCount') * 3 / 8);
  }.property('guestCount'),

  veganAmount: function() {
    return Math.ceil(this.get('numberPizzas') * 0.1);
  }.property('numberPizzas'),

  cheeseAmount: function() {
    return Math.ceil(this.get('numberPizzas') * 0.5);
  }.property('numberPizzas'),

  pepperoniAmount: function() {
    var pepperoniAmount = this.get('numberPizzas') - this.get('veganAmount') - this.get('cheeseAmount');
    if (pepperoniAmount < 0) {
      return 0;
    } else {
      return pepperoniAmount;
    }
  }.property('numberPizzas', 'veganAmount', 'cheeseAmount'),

  numberSodas: function() {
    return Math.ceil(this.get('guestCount') / 7 );
  }.property('guestCount'),

  colaAmount: function() {
    return Math.ceil(this.get('numberSodas') * 0.4);
  }.property('numberSodas'),

  dietColaAmount: function() {
    return Math.ceil(this.get('numberSodas') * 0.4);
  }.property('numberSodas'),

  spriteAmount: function() {
    return Math.ceil(this.get('numberSodas') * 0.2);
  }.property('numberSodas'),
});
