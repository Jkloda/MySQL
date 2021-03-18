function convert(){
  var cTemp = document.getElementById('data').value;
  var cToFahr = (cTemp * 1.8) + 32;
  document.getElementById('res').innerText = '${cTemp} C=${cToFahr} F';
  } 
