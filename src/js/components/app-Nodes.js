var React = require('react');
var AppStore = require('../stores/app-stores');
var AddToNodes = require('../components/app-addToNodes');
var RemoveFromNodes = require('../components/app-removeFromNodes');
var JCRNode = require('../components/app-Node');

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
              return <div>
                  <JCRNode item={item} /><RemoveFromNodes item={item}/>
              </div>
            });
            return <table>{items}</table>
        }
    });

module.exports = Options;