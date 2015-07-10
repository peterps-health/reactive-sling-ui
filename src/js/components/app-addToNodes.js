/**
 * Created by peter.puzanovs on 09/07/2015.
 */
var React = require('react');
var AppActions = require('../actions/app-actions');

var AddToNodes =
    React.createClass({
        handleClick: function(event) {
            AppActions.addNode(React.findDOMNode(this.refs.path).value);
        },
        render: function() {
            return <div><input ref="path" type="text"/><button onClick={this.handleClick}>add Node</button></div>
        }
    });

module.exports = AddToNodes;