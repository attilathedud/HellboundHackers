// ==UserScript==
// @name         HH Timed 2
// @version      0.1
// @description  HellboundHackers Timed 2 solution
// @author       attilathedud
// @match        https://www.hellboundhackers.org/challenges/timed/timed2/index.php
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var page_text = $('div div')[20].innerHTML;

    var sum = 0;
    
    var numbers = page_text.match(/[^\D]/g);
    
    for (var i = 2; i < numbers.length; i++) {
        var temp_number = parseInt( numbers[ i ] );

        sum += temp_number;
    }
    
    $('input')[0].value = sum;
})();