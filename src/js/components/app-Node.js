var React = require('react');

var AppActions = require('../actions/app-actions');
var jQuery = require('jquery');



var JCRNode =
    React.createClass({
        handleClick: function() {
            AppActions.selectedNode(this.props);
            console.log('executed by handleClick' + this.props.node);
            jQuery.ajax({
                url: 'http://localhost:8080/view/tree.json',
                dataType: 'json',
                data: { path: this.props.node },
                cache: false,
                success: function(data) {
                    if(data.length > 0) {
                        this.setState({data: data});
                    }
                }.bind(this),
                error: function(xhr, status, err) {
                    console.log(this.props.url, status, err.toString());
                }.bind(this)
            });
        },
        handleContextMenu : function(e) {
            console.log("right clicked");

        },
        handleDoubleClick: function(e) {

        },
        componentDidMount: function() {
            console.log('executed by componentDidMount' + this.props.node);
            console.log('did mount');
            console.log(this.props.node);
            jQuery.ajax({
                url: 'http://localhost:8080/view/tree.json',
                dataType: 'json',
                data: { path: this.props.node },
                cache: false,
                success: function(data) {
                    if(data.length > 0) {
                        this.setState({data: data});
                    }
                }.bind(this),
                error: function(xhr, status, err) {
                    console.log(this.props.url, status, err.toString());
                }.bind(this)
            });
        },
        render: function() {
            //TODO execute the call here to figure out whether this node has children
            if(this.state != null) {
                var commentNodes = this.state.data.map(function (comment) {
                    return <JCRNode node={comment.path} />;
                });
            }
            console.log('executed');
            console.log(this.state);

            return <div>
                <div onDoubleClick={this.handleDoubleClick} onContextMenu={this.handleContextMenu} onClick={this.handleClick}>{this.props}</div>
                {commentNodes}
                </div>
        }
    });

module.exports = JCRNode;