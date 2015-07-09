var constants = require('../constants/app-constants');
var dispatcher = require('../dispatchers/app-dispatcher');


var AppActions = {
    addNode:function(item) {
        dispatcher.handleViewAction({
            actionType: constants.ADD_NODE,
            item: item
        })
    },
    removeNode:function(index) {
        dispatcher.handleViewAction({
            actionType: constants.REMOVE_NODE,
            item: item
        })
    }
};

module.exports = AppActions;