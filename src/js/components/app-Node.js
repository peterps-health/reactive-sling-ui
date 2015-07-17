var React = require('react');

var AppActions = require('../actions/app-actions');



var JCRNode =
    React.createClass({
        handleClick: function() {
            AppActions.selectedNode(this.props);
        },
        handleContextMenu : function(e) {
            console.log("right clicked");

        },
        handleDoubleClick: function(e) {

        },
        render: function() {
            return <div onDoubleClick={this.handleDoubleClick} onContextMenu={this.handleContextMenu} onClick={this.handleClick}>{this.props}</div>
        }
    });

module.exports = JCRNode;