/**
 * Created by peter.puzanovs on 09/07/2015.
 */
var React = require('react');
var AppActions = require('../actions/app-actions');

var RemoveFromNodes =
    React.createClass({
        handleClick: function() {
            AppActions.removeNode(this.props);
        },
        render: function() {
            return <button onClick={this.handleClick}>x</button>
        }
    });

module.exports = RemoveFromNodes;