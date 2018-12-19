import template from './turtle_dove1.html';

import Configurator from 'bookingbug-configurator-js';

Configurator.replacePanel('bb-contact-details-panel', 'bb-turtle-dove1');


class TurtleDove1Ctrl {
    constructor(bbAuthorisation) {

    }
   

}

const turtleDove1Panel = {
    templateUrl: template.id,
    controller: TurtleDove1Ctrl,
    bindings: {
        filter: '<'
    }
};

angular
    .module('BBAdminDashboard')
    .component('bbTurtleDove1', turtleDove1Panel);
