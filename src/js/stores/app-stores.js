var React = require('react');
var AppActions = require('../actions/app-actions');
var assign = require('object-assign');
var EventEmmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');

var CHANGE_EVENT = 'CHANGE_EVENT';

var _catalog = [
];

var _nodes = _catalog;

function _removeItem(index) {
    var i = _nodes.indexOf(index.item);

    _nodes.splice(i, 1);
}

function _addItem(item) {
    console.log('added');
    _nodes.push(item);
}

var AppStore = assign(EventEmmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener : function(callback) {
        this.removeChangeListener(CHANGE_EVENT, callback);
    },

    getNodes: function () {
        return _nodes;
    },

    dispatcherIndex:AppDispatcher.register(function(payload){
        var action = payload.action; // this is our action from handleViewAction
        switch(action.actionType){
            case AppConstants.ADD_NODE:
                _addItem(payload.action.item);
                break;

            case AppConstants.REMOVE_NODE:
                _removeItem(payload.action.index);
                break;

        }
        AppStore.emitChange();

        return true;
    })
});

module.exports = AppStore;