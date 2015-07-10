var React = require('react');
var AppStore = require('../stores/app-stores');
var AddToNodes = require('../components/app-addToNodes');
var RemoveFromNodes = require('../components/app-removeFromNodes');

function getNodes() {
    return {items: AppStore.getNodes()};
}

var Options =
    React.createClass({
        getInitialState: function() {
            return getNodes();
        },
        componentWillMount : function () {
          AppStore.addChangeListener(this._onChange);
        },
        _onChange : function () {
          this.setState(getNodes);
        },
        render: function() {
            var items = this.state.items.map(function(item, i) {
              return <tr><td>{item}</td><td><RemoveFromNodes item={item}/></td></tr>
            });
            return <table>{items}</table>
        }
    });

module.exports = Options;