var mymap = L.map("mapid").setView([48.848902, 2.345365], 15)

L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken:
      "pk.eyJ1Ijoic3VwZXJtYXlvIiwiYSI6ImNqdnFtMDBsNjBhMTY0NG1zb2hhZzloNzkifQ.B49-du8A7imGD4g94k-Dug",
  }
).addTo(mymap)

var marker = L.marker([48.848902, 2.345365]).addTo(mymap)
