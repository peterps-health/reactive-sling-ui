/**
 * Created by peter.puzanovs on 09/07/2015.
 */
var React = require('react');
var Options = require('../components/app-Options');
var Nodes = require('../components/app-Nodes');


var APP =
    React.createClass({
        render: function() {
            return (
                <div>
                    <h1>Options</h1>
                    <Options />
                    <h1>Nodes</h1>
                    <Nodes />
                </div>

            )
        }
    });

module.exports = APP;