/**
 * Created by peter.puzanovs on 09/07/2015.
 */
var React = require('react');
var AppActions = require('../actions/app-actions');
var AppStore = require('../stores/app-stores');

function getCurrentPath() {
    return {items: AppStore.getCurrentPath()};
}

var SelectedPath =
    React.createClass({
        getInitialState: function() {
            console.log(getCurrentPath());
            return getCurrentPath();
        },
        handleClick: function() {

        },
        componentWillMount : function () {
            AppStore.addChangeListener(this._onChange);
        },
        _onChange : function () {
            this.setState(getCurrentPath());
        },
        render: function() {
            return <div>{this.state}</div>
        }
    });

module.exports = SelectedPath;