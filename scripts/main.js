// document.querySelector("jqx-tank .jqx-track").style.width="79px"

(function () {
    'use strict';

    var niWebAppElement = document.querySelector('ni-web-application');

    niWebAppElement.addEventListener('service-state-changed', function () {
      if (niWebAppElement.serviceState.toLowerCase() === 'running') {
        var tankTrack = document.querySelector('jqx-tank .jqx-track');
        if (tankTrack === null) {
            console.log("can't find tank");
            return;
        }
        tankTrack.style.width="79px"

        var gauge = document.querySelector('jqx-gauge');
        if (gauge === null) {
          console.log("can't find gauge");
          return;
        }
        // gauge.style.position="absolute";
        // gauge.style.position="relative";
      }
    })
}());
