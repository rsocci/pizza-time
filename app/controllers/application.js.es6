export default Ember.Controller.extend({
  veganAmount: function() {
    if (this.get('guestCount') < 6) {
      return 0;
    } else if (this.get('guestCount') < 35) {
      return 1;
    } else {
      return Math.ceil(this.get('guestCount') * 0.025);
    }
  }.property('guestCount'),

  cheeseAmount: function() {
    if (this.get('guestCount') < 9 && this.get('guestCount') > 0) {
      return 1;
    } else {
      return Math.ceil(this.get('guestCount') * 0.1);
    }
  }.property('guestCount'),

  pepperoniAmount: function() {
    if (this.get('guestCount') < 9 && this.get('guestCount') > 0) {
      return 1;
    } else {
      return Math.ceil(this.get('guestCount') * 0.08);
    }
  }.property('guestCount'),

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
