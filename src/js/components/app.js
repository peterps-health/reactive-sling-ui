/**
 * Created by peter.puzanovs on 09/07/2015.
 */
var React = require('react');
var Options = require('../components/app-Options');
var JCRNode = require('../components/app-Node');
var SelectedPath = require('../components/app-selectedPath');


var APP =
    React.createClass({
        render: function() {
            return (
                <div>
                    <h1>Selected Path</h1>
                    <SelectedPath />
                    <h1>Options</h1>
                    <Options />
                    <h1>Nodes</h1>
                    <JCRNode node="/" />
                </div>

            )
        }
    });

module.exports = APP;