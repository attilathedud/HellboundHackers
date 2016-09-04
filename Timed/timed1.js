// ==UserScript==
// @name         HH timed1
// @version      0.1
// @description  HellboundHackers Timed 1 solution
// @author       attilathedud
// @match        https://www.hellboundhackers.org/challenges/timed/timed1/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var page_text = $('div div')[20].innerHTML;

    var base64 = page_text.substring( 47, 71 );

    window.location = "https://www.hellboundhackers.org/challenges/timed/timed1/index.php?b64=" + atob( base64 );
})();