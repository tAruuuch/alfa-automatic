$(document).ready(function() {
  var element = document.getElementById("map");

  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var labelIndex = 0;

  var map = new google.maps.Map(element, {
    center: new google.maps.LatLng(50.430997, 30.415749),
    zoom: 13,
    mapTypeId: "roadmap",
    mapTypeControl: false,
    streetViewControl: false
  });

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(50.447223, 30.431463),
    map: map,
    label: labels[labelIndex++ % labels.length],
    title: 'Офис: Украина, г. Киев, Гарматная, 26/2'
  });

  var marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(50.416353, 30.409985),
    map: map,
    label: labels[labelIndex++ % labels.length],
    title: 'Производство: Украина, г. Киев, Якутская, 7'
  });
});
