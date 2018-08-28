var currentTemp = 0.0;
var targetTemp = 0.0;
var volume = 0.0;

var currentTempElement, targetTempElement, volumeElement;

$(document).ready(function(){
  currentTempElement = $('.currentTemp');
  targetTempElement = $('.targetTemp');
  volumeElement = $('.volume');

  initialize();
});


function initialize()
{
  writeTargetTemp();
  writeCurrentTemp();
  writeVolume();
  getTargetTemp();
  getCurrentTemp();
  getVolume();
}

function getTargetTemp()
{
  $.get('http://192.168.1.240/getTargetTemp',function(data){
    targetTemp = parseFloat(data);
    writeTargetTemp();
  });
}

function writeTargetTemp()
{
  targetTempElement.html(targetTemp.toFixed(1) + '&deg;');
}

function writeCurrentTemp()
{
  currentTempElement.html(currentTemp.toFixed(1) + '&deg;');
}

function getCurrentTemp()
{
  $.get('http://192.168.1.240/getCurrentTemp',function(data){
    currentTemp = parseFloat(data);
    writeCurrentTemp();
    setTimeout(getCurrentTemp, 2000);
  });
}

function getVolume()
{
  $.get('http://192.168.1.240/getNumberOfLitres',function(data){
    volume = parseFloat(data);
    writeVolume();
  });
}

function writeVolume()
{
  volumeElement.html(volume.toFixed(1) + 'L');
}

