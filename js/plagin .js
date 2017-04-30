/*global $, alert, console */

$(function () {
    'use strict';
    $('nav .bar').click(function () {
    
        $('nav .nav').toggleClass('visibel');
    });
});