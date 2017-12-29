$(document).ready(function () {
    
    var $dOut = $("#date"),
    $hOut = $("#hours"),
    $mOut = $("#minutes"),
    $sOut = $("#seconds"),
    $ampmOut = $("#ampm");
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
  function update() {
    var date = new Date();
  
    var ampm = date.getHours() < 12 ? "AM" : "PM";
  
    var hours =
      date.getHours() == 0
        ? 12
        : date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  
    var minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  
    var seconds =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  
    var dayOfWeek = days[date.getDay()];
    var month = months[date.getMonth()];
    var day = date.getDate();
    var year = date.getFullYear();
  
    var dateString = dayOfWeek + ", " + month + " " + day + ", " + year;
  
    $dOut.text(dateString);
    $hOut.text(hours);
    $mOut.text(minutes);
    $sOut.text(seconds);
    $ampmOut.text(ampm);
  }
  
  update();
  window.setInterval(update, 1000);
  
    
 });