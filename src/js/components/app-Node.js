var React = require('react');

var AppActions = require('../actions/app-actions');
var jQuery = require('jquery');
var classNames = require('classnames');



var JCRNode =
    React.createClass({
        getInitialState: function() {
            return {
                visible: true
            };
        },
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
                        this.setState({data: data, visible: true});
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
        handleHideOrShow: function(e) {
            this.setState({visible: !this.state.visible});
        },
        componentDidMount: function() {
            console.log(this.props.node);
            if(this.props.shoudlLoadChildren == false) {
                return;
            }
            jQuery.ajax({
                url: 'http://localhost:8080/view/tree.json',
                dataType: 'json',
                data: { path: this.props.node },
                cache: false,
                success: function(data) {
                    if(data.length > 0) {
                        this.setState({data: data, visible: true});
                    }
                }.bind(this),
                error: function(xhr, status, err) {
                    console.log(this.props.url, status, err.toString());
                }.bind(this)
            });
        },
        render: function() {
            var style;
            var togglableUp;
            if (!this.state.visible) {
                style = {display: "none"};
                togglableUp = "togglable-up inline";
            } else {
                togglableUp = "togglable-down inline";
            }
            if(this.state != null && this.state.data != undefined) {
                var commentNodes = this.state.data.map(function (comment) {
                    return <JCRNode shoudlLoadChildren={false} node={comment.path} />;
                });
            }

            return <div className="jcr-view-menu-ul">
                    <div className="jcr-view-menu-item">
                        <div className={classNames(togglableUp)} onClick={this.handleHideOrShow}></div>
                        <div className="hide">
                            <div onDoubleClick={this.handleDoubleClick} onContextMenu={this.handleContextMenu} onClick={this.handleClick}>{this.props}</div>
                                <div style={style}>
                                    {commentNodes}
                                </div>
                        </div>
                    </div>
                </div>
        }
    });

module.exports = JCRNode;