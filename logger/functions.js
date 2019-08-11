
const ipc = require('electron').ipcRenderer;


/**
 * 
 *
 * 
 */
function logger(msg) {    
    let notify = {};
    notify.msg = msg;
    notify.notifyID = 'notify_log'
    ipc.send('main-manager',notify);
}


module.exports = {
    logger
}