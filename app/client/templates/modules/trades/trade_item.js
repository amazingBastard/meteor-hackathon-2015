Template.tradeItem.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('items');
        self.subscribe('offers');
        self.subscribe('trades');
    });
});

Template.tradeItem.helpers({
    trades: function () {
      return Trades.find();
    }
});

Template.tradeItem.events({
  'click #confirm-trade': function(event) {
    event.preventDefault();
    console.log('this worked');

  }
})
