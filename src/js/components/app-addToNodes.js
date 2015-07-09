/**
 * Created by peter.puzanovs on 09/07/2015.
 */
var React = require('react');
var AppActions = require('../actions/app-actions');

var AddToNodes =
    React.createClass({
        handleClick: function() {
            console.log(this.props.item);
            AppActions.addNode(this.props.item);
        },
        render: function() {
            return <button onClick={this.handleClick}>add Node</button>
        }
    });

module.exports = AddToNodes;