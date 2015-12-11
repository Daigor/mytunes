var PlayListOptionView = Backbone.View.extend({

  tagName: 'option',

  render: function(){
    console.log(this.options.name);
    return this.$el.html(this.options.name).attr('value',this.options.name);
  }

});