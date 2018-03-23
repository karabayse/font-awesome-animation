// Break Chain Animation
function breakChain() {
  let chain = document.getElementById('chain');
  // Apply Icon Class Using Unicode
  chain.innerHTML = '&#xf0c1;';
  setTimeout(function() {
    chain.innerHTML = '&#xf127;';
  }, 1000);
}

// Call Break Chain Animation
breakChain();

// Animate Every 2 Seconds
setInterval(breakChain, 2000);

// Battery Charge Animation
function chargeBattery() {
  let battery = document.getElementById('battery');
  battery.innerHTML = '&#xf244;';
  setTimeout(function() {
    battery.innerHTML = '&#xf243;';
  }, 1000);
  setTimeout(function() {
    battery.innerHTML = '&#xf242;';
  }, 2000);
  setTimeout(function() {
    battery.innerHTML = '&#xf241;';
  }, 3000);
  setTimeout(function() {
    battery.innerHTML = '&#xf240;';
  }, 4000);
}

// Call Battery Charge Animation
chargeBattery();

// Run Call Battery Charge Animation Every 5 Seconds
setInterval(chargeBattery, 5000);

// Hourglass Tip Animation
function hourglassTip() {
  let hourglass = document.getElementById('hourglass');
  hourglass.innerHTML = '&#xf251;';
  setTimeout(function() {
    hourglass.innerHTML = '&#xf252;';
  }, 1000);
  setTimeout(function() {
    hourglass.innerHTML = '&#xf253;';
  }, 2000);
}

// Call Hourglass Tip Animation
hourglassTip();

// Run Animation Every 3 Seconds
setInterval(hourglassTip, 3000);
