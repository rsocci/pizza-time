export default Ember.ObjectController.extend(Ember.Validations.Mixin, {
  validations: {
    name: {
      presence: true
    },
    city: {
      presence: true
    }
  },

  actions: {
    searchGroups: function() {
      var _this = this;
      var foundGroups = this.store.find('group', { name: this.get('name'), city: this.get('city') });
      foundGroups.then(function(data) {
        _this.set('foundGroups', data);
      });
    },

    selectGroup: function(group) {
      var _this = this;
      this.set('selectedGroup', group);
      var selectedEvent = group._data.next_event;

      var findEvent = this.store.find('event', selectedEvent.id);
      findEvent.then(function(data) {
        _this.set('selectedEvent', data);
        _this.set('guestCount', _this.get('selectedEvent').get('guestCount'));
      });
    },

    back: function() {
      this.set('selectedGroup', '');
      this.set('guestCount', 0);
    }
  },
  pizzaCount: function() {
    return  Math.ceil(this.get('guestCount') * 3 / 8);
  }.property('guestCount'),

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
    if (this.get('guestCount') > 5 && this.get('guestCount') < 9) {
      return 1;
    } else {
      return Math.round(this.get('pizzaCount') * 0.55);
    }
  }.property('guestCount'),

  pepperoniAmount: function() {
    if (this.get('guestCount') > 5 && this.get('guestCount') < 9) {
      return 1;
    } else {
      return this.get('pizzaCount') - this.get('cheeseAmount') - this.get('veganAmount');
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
  }.property('numberSodas')
});
