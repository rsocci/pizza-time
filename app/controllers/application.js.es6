export default Ember.Controller.extend({
  numberPizzas: function() {
    return Math.ceil(this.get('guestCount') * 3 / 8);
  }.property('guestCount'),

  veganAmount: function() {
    if (this.get('guestCount') < 6) {
      return 0;
    } else if (this.get('guestCount') < 35) {
      return 1;
    } else {
      return Math.ceil(this.get('numberPizzas') * 0.1);
    }
  }.property('numberPizzas', 'guestCount'),

  cheeseAmount: function() {
    if (this.get('guestCount') < 9 && this.get('guestCount') > 0) {
      return 1;
    } else {
      return Math.ceil(this.get('numberPizzas') * 0.5);
    }
  }.property('numberPizzas', 'guestCount'),

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
    if (this.get('guestCount') < 8 && this.get('guestCount') > 0) {
      return 1;
    } else {
      return Math.round(this.get('numberSodas') * 0.4);
    }
  }.property('numberSodas', 'guestCount'),

  dietColaAmount: function() {
    return Math.round(this.get('numberSodas') * 0.4);
  }.property('numberSodas'),

  spriteAmount: function() {
    return Math.round(this.get('numberSodas') * 0.2);
  }.property('numberSodas'),
});
