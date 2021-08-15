const choose_length = document.getElementById('choose_length');
const length_value = document.getElementById('length_value');
// const oz_result = document.getElementById('oz_result');
// const kg_result = document.getElementById('kg_result');
const Change_Feet = document.getElementById('Change_Feet');
const Change_Meters = document.getElementById('Change_Meters');
const Change_Inches = document.getElementById('Change_Inches');
const Change_Centi_meters = document.getElementById('Change_Centi_meters');
const Change_Kilo_Meters = document.getElementById('Change_Kilo_Meters');
const Change_Yard = document.getElementById('Change_Yard');
const Change_Miles = document.getElementById('Change_Miles');
const result = document.getElementById('result');

const result_array = ['feet_result', 'meters_result', 'inches_result', 'centi_meters_result', 'kilo_meters_result', 'yard_result', 'miles_result'];
let length = 0;

// Hide input box and result box
length_value.style.visibility = 'hidden';
result.style.visibility = 'hidden';

// for change in select box
choose_length.addEventListener('change', (e) => {
  // Show input box and result_box
  length_value.style.visibility = 'visible';
  result.style.visibility = 'visible';
  //current selected option values
  let given_value = e.target.value;
  // Hide selected result_box and display the rest
  if(given_value === '1') {
    length = 1;
    hideResult_box('feet_result');
  }
  if(given_value === '2') {
    length = 2;
    hideResult_box('meters_result');
  }
  if(given_value === '3') {
    length = 3;
    hideResult_box('inches_result');
  }
  if(given_value === '4') {
    length = 4;
    hideResult_box('centi_meters_result');
  }
  if(given_value === '5') {
    length = 5;
    hideResult_box('kilo_meters_result');
  }
  if(given_value === '6') {
    length = 6;
    hideResult_box('yard_result');
  }
  if(given_value === '7') {
    length = 7;
    hideResult_box('miles_result');
  }
});

// Updates converted values on input
length_value.addEventListener('input', (e) => {
  let given_value = e.target.value;
  convert(length, given_value);
});

// Hides currently selected result_list
function hideResult_box(result_box) {
  for(var i=0; i < result_array.length; i++) {
    if(result_array[i] === result_box) {
      let match = result_array[i];
      document.getElementById(match).style.display = 'none';
    } else {
      document.getElementById(result_array[i]).style.display = 'block';
    }
  }
  updateValues();
}

// function used only with hide_Result_box function
function updateValues() {
  let given_value = length_value.value;
  convert(length, given_value);
}

function convert(length, given_value) {
  switch(length) {
    case 1: // Feet change.........
      Change_Meters.innerHTML = given_value/3.2808;
      Change_Inches.innerHTML = given_value*12;
      Change_Centi_meters.innerHTML = given_value/0.032808;
      Change_Kilo_Meters.innerHTML = given_value/3280.8;
      Change_Yard.innerHTML = given_value*0.33333;
      Change_Miles.innerHTML = given_value*0.00018939;
      break;
    case 2: // Meters change..........
    Change_Feet.innerHTML = given_value*3.2808;
    Change_Inches.innerHTML = given_value*39.370;
    Change_Centi_meters.innerHTML = given_value/0.01;
    Change_Kilo_Meters.innerHTML = given_value/1000;
    Change_Yard.innerHTML = given_value*1.0936;
    Change_Miles.innerHTML = given_value*0.00062137;
      break;
    case 3: // Inches change.........
    Change_Feet.innerHTML = given_value*0.083333;
    Change_Meters.innerHTML = given_value/39.370;
    Change_Centi_meters.innerHTML = given_value/0.39370;
    Change_Kilo_Meters.innerHTML = given_value/39370;
    Change_Yard.innerHTML = given_value*0.027778;
    Change_Miles.innerHTML = given_value*0.000015783;
      break;
    case 4: // Centi_Meters change........
    Change_Feet.innerHTML = given_value*0.032808;
    Change_Inches.innerHTML = given_value*0.39370;
    Change_Meters.innerHTML = given_value/100;
    Change_Kilo_Meters.innerHTML = given_value/100000;
    Change_Yard.innerHTML = given_value*0.010936;
    Change_Miles.innerHTML = given_value*0.0000062137;
      break;
    case 5: // kilo_Meters change................
    Change_Feet.innerHTML = given_value*3280.8;
    Change_Inches.innerHTML = given_value*39370;
    Change_Meters.innerHTML = given_value*1000;
    Change_Centi_meters.innerHTML = given_value*100000;
    Change_Yard.innerHTML = given_value*1093.6;
    Change_Miles.innerHTML = given_value*0.62137;
      break;
    case 6: // Yard change....................
    Change_Feet.innerHTML = given_value*3;
    Change_Inches.innerHTML = given_value*36;
    Change_Meters.innerHTML = given_value/1.0936;
    Change_Centi_meters.innerHTML = given_value/0.010936;
    Change_Kilo_Meters.innerHTML = given_value/1093.6;
    Change_Miles.innerHTML = given_value*0.00056818;
      break;
    case 7: // Miles change.................
    Change_Feet.innerHTML = given_value*5280;
    Change_Inches.innerHTML = given_value*63360;
    Change_Meters.innerHTML = given_value/0.00062137;
    Change_Centi_meters.innerHTML = given_value/0.0000062137;
    Change_Kilo_Meters.innerHTML = given_value/0.62137;
    Change_Yard.innerHTML = given_value*1760;
      break;
  }
}