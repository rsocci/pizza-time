//= require jquery
//= require environment
//= require ember-appkit
//= require ember-data
//= require_self
//= require adapter
//= require router
//= require_tree ../app
//= require_tree ./initializers

Ember.TextField.reopen({
  attributeBindings: ['type', 'value', 'size', 'pattern', 'name', 'min', 'max']
});

window.App = require('app').default.create();
