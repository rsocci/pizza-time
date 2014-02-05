export default Ember.Component.extend({
  randomColor: function() {
    return Math.floor(Math.random()*255);
  },
  blinksAway: function() {
    this.$().toggle();
    this.$().css('color', 'rgb(' + this.randomColor() + ', ' + this.randomColor() + ', ' + this.randomColor() +')');
    Ember.run.later(this, 'blinksAway', 600);
  }.on('didInsertElement')
});
