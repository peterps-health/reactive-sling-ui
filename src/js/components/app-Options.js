var React = require('react');
var AppStore = require('../stores/app-stores');
var AddToNodes = require('../components/app-addToNodes');

function getNodes() {
    return {items: AppStore.getNodes()};
}

var Options =
    React.createClass({
        getInitialState: function() {
            return getNodes();
        },
        render: function() {
            var items = this.state.items.map(function(item, i) {
              return <tr><td>item.title</td><td><AddToNodes item={item}/></td></tr>
            });
            return <AddToNodes />
        }
    });

module.exports = Options;