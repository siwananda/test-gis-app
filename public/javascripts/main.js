/**
 * Created by munkeh on 11/10/2014.
 */
$(document).ready(function(){
    $("#map").height($(document).height())
    L.mapbox.accessToken = 'pk.eyJ1Ijoic2l3YW5hbmRhIiwiYSI6ImEyZ0xHcFkifQ.doKhUjQ7Z-W8gPizwQ573g';
    var map = L.mapbox.map('map', 'siwananda.jp5i56bj')
        .setView([40, -74.50], 9);
});