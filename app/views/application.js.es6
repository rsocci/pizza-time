export default Ember.View.extend({
  templateName: 'application',
  didInsertElement: function() {
    var _this = this;
    var $guests = $('#guests');

    var $slider = this.$("<div id='slider'></div>").insertAfter($guests).slider({
      slide: function(event, ui) {
        $guests.val(ui.value);
        _this.controller.set('guestCount', ui.value);
      }
    })

    $("input[type='number']").on('keyup change', function() {
      var value = $(this).val();
      $slider.slider("value", value);
      _this.controller.set('guestCount', value);
    })
  }
});
