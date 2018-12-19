import template from './turtle_dove2.html';

import Configurator from 'bookingbug-configurator-js';


// aa new page to the "Clients" sections of the studio app
Configurator.addPage('Clients', 'turtle_dove', { 
    style: 'tab',
    layout: [
        [
          {
            type: 'bb-turtle-dove2',
            width: 12,
            index: 0,
            panel_params: {
            }
          }
        ]
    ]
});

// A a new tab to the "client profile" set of tabs - that is set to shwo the new page
Configurator.addNamedTab('client_profile', { 
    name: 'Turtle Dove',
    path: '.views({view: "turtle_dove"})',
    position: -1
});



class TurtleDove2Ctrl {
    constructor(bbAuthorisation) {

    }
   

}

const turtleDove2Panel = {
    templateUrl: template.id,
    controller: TurtleDove2Ctrl,
    bindings: {
        filter: '<'
    }
};

// register our new 'bb-turtle-dove2' component
angular
    .module('BBAdminDashboard')
    .component('bbTurtleDove2', turtleDove2Panel);
