﻿var myCenter = new google.maps.LatLng(44.421478, 26.034421);

function initialize() {
    var mapProp = {
        center: myCenter,
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    var marker = new google.maps.Marker({
        position: myCenter,
    });

    marker.setMap(map);
}

google.maps.event.addDomListener(window, "load", initialize);