

var megaObject = {

bottleRocket: {},
rushmore: {},
tenenbaums: {},
aquatic: {},
darjeeling: {},
fox: {},
moonrise: {},
budapest: {}

}

// Objects containing colours

var bottleRocketBlended = {};

var bottleRocket = {

stillOne: sortColors(['#462315','#6F6236', '#AD1623','#D7B399','#B2A09C']),
stillTwo: sortColors(['#5A0E0C','#B92826', '#33403F','#575B24','#989081']),
stillThree: sortColors(['#643E30', '#AA1C20', '#A88881','#C0C1B3','#B89684'])

}


var rushmoreBlended = {};
var rushmore = {

stillOne: sortColors(['#786A60','#A0A08D','#0B1638','#828698','#909792']),
stillTwo: sortColors(['#2B201A','#797C86','#1E2741','#7B332A','#91110F']),
stillThree: sortColors(['#22212F','#938757','#852913','#707993','#4F5557'])

}

var tenenbaumsBlended = {};
var tenenbaums = {

  stillOne: sortColors(['#B12F08','#E1980E','#EBC130','#B88D28','#72A48C']),
  stillTwo: sortColors(['#661204','#D54824','#ECD288','#849A56','#272841']),
  stillThree: sortColors(['#946131','#A63D17','#624A26','#BD7B3E','#CB7C63'])

}


var aquaticBlended = {};
var aquatic = {

  stillOne: sortColors(['#D69916','#3E6A72','#4C6662','#787E83','#9C7657']),
  stillTwo: sortColors(['#AD927A','#D29C43','#A82C0B','#EDE0D3','#58572D']),
  stillThree: sortColors(['#7990AB','#66A6CB','#BA3020','#BD832E','#8C5E3D'])

}

var darjeelingBlended = {};
var darjeeling = {

  stillOne: sortColors(['#773603','#327F84','#77A199','#E0B04F','#7D1402']),
  stillTwo: sortColors(['#7D532A','#B97807','#18465B','#5B7B6B','#5D4C39']),
  stillThree: sortColors(['#30565F','#4B6768','#8D4319','#AF8933','#4B4038'])

}

var foxBlended = {};
var fox = {

  stillOne: sortColors(['#874B24','#DC852C','#EDC17A','#C38454','#D39E7F']),
  stillTwo: sortColors(['#3A3324','#EEB63A','#AD7D3C','#503317','#A75C13']),
  stillThree: sortColors(['#A6381C','#E5BA55','#9D5620','#CA8049','#AE847A'])

}

var moonriseBlended = {};
var moonrise = {

  stillOne: sortColors(['#687A75','#782503','#A3571F','#B2712F','#C0B28C']),
  stillTwo: sortColors(['#816A1D','#C6A42B','#B58061','#964E0B','#383206']),
  stillThree: sortColors(['#6F8579','#D5B435','#464B07','#936B29','#BB865F'])

}

var budapestBlended = {};
var budapest = {

  stillOne: sortColors(['#BF8C8D','#EAC0C6','#6C5257','#5B3B45','#5B3837']),
  stillTwo: sortColors(['#70355F','#381F46','#D79385','#D48D5D','#701E29']),
  stillThree: sortColors(['#D57A2A','#CC8371','#4D383E','#A35332','#D77E6D'])

}


// Array containing all Objects
const films = [bottleRocket, rushmore, tenenbaums, aquatic, darjeeling, fox, moonrise, budapest]


// somehow for each square convert every hex to rgb, and append as id

// Colouring all of the palettes associated with movie still images

paint(bottleRocket, ".bottle-rocket");
paint(rushmore, ".rushmore");
paint(tenenbaums, ".tenenbaums");
paint(aquatic, ".aquatic");
paint(darjeeling, ".darjeeling");
paint(fox, ".fox");
paint(moonrise, ".moonrise");
paint(budapest, ".budapest");

// Blending the stills to create a single blended pallette for each

blendPalette(bottleRocket,bottleRocketBlended);
blendPalette(rushmore,rushmoreBlended);
blendPalette(aquatic,aquaticBlended);
blendPalette(tenenbaums,tenenbaumsBlended);
blendPalette(fox,foxBlended);
blendPalette(darjeeling,darjeelingBlended);
blendPalette(budapest,budapestBlended);
blendPalette(moonrise, moonriseBlended);

// Applying that blending as css background colours

applyBlend(bottleRocketBlended, "#rocket-blended");
applyBlend(rushmoreBlended, "#rushmore-blended");
applyBlend(tenenbaumsBlended, "#tenenbaums-blended");
applyBlend(aquaticBlended, "#aquatic-blended");
applyBlend(darjeelingBlended, "#darjeeling-blended");
applyBlend(foxBlended, "#fox-blended");
applyBlend(moonriseBlended, "#moonrise-blended");
applyBlend(budapestBlended, "#budapest-blended");

// Pushing everything back into a higher object, converting back to hex, and re-sorting, ready for re-blending and randomising

toMegaObject(bottleRocketBlended,"bottleRocket")
toMegaObject(rushmoreBlended,"rushmore")
toMegaObject(tenenbaumsBlended,"tenenbaums");
toMegaObject(aquaticBlended, "aquatic");
toMegaObject(darjeelingBlended, "darjeeling");
toMegaObject(foxBlended,"fox");
toMegaObject(moonriseBlended,"moonrise");
toMegaObject(budapestBlended, "budapest");


//Trialling adding random colour from palette to text on the page
// $("strong").css("color",`${megaObject.bottleRocket[Math.floor((Math.random() * 5))]}`);

// -- Randomiser! //

$('.randomise-button').on('click',function(){

  var tempArray = [];
  for (key in megaObject) {

    var randomNumber = Math.floor((Math.random() * 5));
    tempArray.push(megaObject[key][randomNumber]);

  }


  shuffle(tempArray);

  $('.output').each(function(){

    for (i=0;i<5;i++) {

    if ($(this).data("id") == i) {

        $(this).css("background-color", `${tempArray[i]}`);
        $(this).attr("data-HEX",tempArray[i]);

        var rgbTemp = tinycolor(tempArray[i]);
        $(this).attr("data-RGB",rgbTemp.toRgbString());

    }

    }


  })

  //rapidly running out of time, I did this the inefficient way - damnit!

  $(".c-one").css("background-color",`${$('#mp-one').attr("data-hex")}`);
  $(".c-two").css("background-color",`${$('#mp-two').attr("data-hex")}`);
  $(".c-three").css("background-color",`${$('#mp-three').attr("data-hex")}`);
  $(".c-four").css("background-color",`${$('#mp-four').attr("data-hex")}`);
  $(".c-five").css("background-color",`${$('#mp-five').attr("data-hex")}`);

  $("#hex-text-one").text(`${$('#mp-one').attr("data-hex")}`);
  $("#hex-text-two").text(`${$('#mp-two').attr("data-hex")}`);
  $("#hex-text-three").text(`${$('#mp-three').attr("data-hex")}`);
  $("#hex-text-four").text(`${$('#mp-four').attr("data-hex")}`);
  $("#hex-text-five").text(`${$('#mp-five').attr("data-hex")}`);

  $("#rgb-text-one").text(`${$('#mp-one').attr("data-rgb")}`);
  $("#rgb-text-two").text(`${$('#mp-two').attr("data-rgb")}`);
  $("#rgb-text-three").text(`${$('#mp-three').attr("data-rgb")}`);
  $("#rgb-text-four").text(`${$('#mp-four').attr("data-rgb")}`);
  $("#rgb-text-five").text(`${$('#mp-five').attr("data-rgb")}`);

})

// The Accordion

$(".row").on('click', function(){

    $(this).find(".accordion-content").slideToggle(300);

})

// The mega palette button and accordion

$(".button").on('click', function(){

   $(".mega-palette-container").slideToggle(250);

   var text = $('.button').text();
   $('.button').text(text == "show custom" ? "hide custom" : "show custom");


})

$(".code-button").on('click', function(){

$(".slide-toggle-container").slideToggle(300);


})


// A function I created to quickly allow me to calculate a blend between three values (here 'x'= r, g, or b)

function blender(x1,x2,x3) {

  let firstMultiplier = x1*x1;
  let secondMultiplier = x2*x2;
  let thirdMultiplier = x3*x3;
  let bigAddition = (firstMultiplier + secondMultiplier + thirdMultiplier)/3;
  let output = Math.floor(Math.sqrt(bigAddition));
  return output;
}


// FUNCTIONS!

// This one 'paints' each individual palette square from the sorted object colour values for each film still

function paint (objectName, className) {

$(className).each(function(){
  for (key in objectName) {

    if ($(this).data("still") == key) {

      for (i=0;i<5;i++){

      if($(this).data("id") == i) {
      $(this).css("background-color", `${objectName[key][i]}`);

      }
     }
    }

  }
});

}

// this function blends the stills' palettes and pushes them to a new 'blended' object

function blendPalette(inputObject, outputObject) {

var average_colours = [];

for(var i=0; i<5; i++) {
  var tempr = [];
  var tempg = [];
  var tempb = [];

  for(key in inputObject) {
    var converted = tinycolor(inputObject[key][i]);
    tempr.push(converted._r);
    tempg.push(converted._g);
    tempb.push(converted._b);
  }

  average_r = blender(tempr[0],tempr[1],tempr[2]);
  average_g = blender(tempg[0],tempg[1],tempg[2]);
  average_b = blender(tempb[0],tempb[1],tempb[2]);

  average_colours.push([average_r, average_g, average_b]);

}

outputObject.first = (average_colours[0]);
outputObject.second = (average_colours[1]);
outputObject.third = (average_colours[2]);
outputObject.fourth = (average_colours[3]);
outputObject.fifth = (average_colours[4]);

}

function applyBlend(objectName, idName) {

  $(idName).find('.one').css("background-color",`rgb(${objectName.first[0]},${objectName.first[1]},${objectName.first[2]})`);
  $(idName).find('.two').css("background-color",`rgb(${objectName.second[0]},${objectName.second[1]},${objectName.second[2]})`);
  $(idName).find('.three').css("background-color",`rgb(${objectName.third[0]},${objectName.third[1]},${objectName.third[2]})`);
  $(idName).find('.four').css("background-color",`rgb(${objectName.fourth[0]},${objectName.fourth[1]},${objectName.fourth[2]})`);
  $(idName).find('.five').css("background-color",`rgb(${objectName.fifth[0]},${objectName.fifth[1]},${objectName.fifth[2]})`);

}

// This places it back into a global object, and re-converts into hex, while also sorting by hue

//standalone

// megaObject.fox = sortColors([tinycolor(`rgb(${foxBlended.first[0]}, ${foxBlended.first[1]}, ${foxBlended.first[2]})`).toHexString(), tinycolor(`rgb(${foxBlended.second[0]}, ${foxBlended.second[1]}, ${foxBlended.second[2]})`).toHexString(), tinycolor(`rgb(${foxBlended.third[0]}, ${foxBlended.third[1]}, ${foxBlended.third[2]})`).toHexString(), tinycolor(`rgb(${foxBlended.fourth[0]}, ${foxBlended.fourth[1]}, ${foxBlended.fourth[2]})`).toHexString(), tinycolor(`rgb(${foxBlended.fifth[0]}, ${foxBlended.fifth[1]}, ${foxBlended.fifth[2]})`).toHexString()]);

function toMegaObject(blendedObject, newKey) {

megaObject[newKey] = sortColors([tinycolor(`rgb(${blendedObject.first[0]}, ${blendedObject.first[1]}, ${blendedObject.first[2]})`).toHexString(), tinycolor(`rgb(${blendedObject.second[0]}, ${blendedObject.second[1]}, ${blendedObject.second[2]})`).toHexString(), tinycolor(`rgb(${blendedObject.third[0]}, ${blendedObject.third[1]}, ${blendedObject.third[2]})`).toHexString(), tinycolor(`rgb(${blendedObject.fourth[0]}, ${blendedObject.fourth[1]}, ${blendedObject.fourth[2]})`).toHexString(), tinycolor(`rgb(${blendedObject.fifth[0]}, ${blendedObject.fifth[1]}, ${blendedObject.fifth[2]})`).toHexString()]);

}

// Randomise mood generator on initilise

function initRandom() {


    var tempArray = [];
    for (key in megaObject) {

      var randomNumber = Math.floor((Math.random() * 5));
      tempArray.push(megaObject[key][randomNumber]);

    }


    shuffle(tempArray);

    $('.output').each(function(){

      for (i=0;i<5;i++) {

      if ($(this).data("id") == i) {

          $(this).css("background-color", `${tempArray[i]}`);
          $(this).attr("data-HEX",tempArray[i]);

          var rgbTemp = tinycolor(tempArray[i]);
          $(this).attr("data-RGB",rgbTemp.toRgbString());

      }

      }

    })

    $(".c-one").css("background-color",`${$('#mp-one').attr("data-hex")}`);
    $(".c-two").css("background-color",`${$('#mp-two').attr("data-hex")}`);
    $(".c-three").css("background-color",`${$('#mp-three').attr("data-hex")}`);
    $(".c-four").css("background-color",`${$('#mp-four').attr("data-hex")}`);
    $(".c-five").css("background-color",`${$('#mp-five').attr("data-hex")}`);

    $("#hex-text-one").text(`${$('#mp-one').attr("data-hex")}`);
    $("#hex-text-two").text(`${$('#mp-two').attr("data-hex")}`);
    $("#hex-text-three").text(`${$('#mp-three').attr("data-hex")}`);
    $("#hex-text-four").text(`${$('#mp-four').attr("data-hex")}`);
    $("#hex-text-five").text(`${$('#mp-five').attr("data-hex")}`);

    $("#rgb-text-one").text(`${$('#mp-one').attr("data-rgb")}`);
    $("#rgb-text-two").text(`${$('#mp-two').attr("data-rgb")}`);
    $("#rgb-text-three").text(`${$('#mp-three').attr("data-rgb")}`);
    $("#rgb-text-four").text(`${$('#mp-four').attr("data-rgb")}`);
    $("#rgb-text-five").text(`${$('#mp-five').attr("data-rgb")}`);

}

// An array shuffle function - not my own: http://sedition.com/perl/javascript-fy.html

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// This just helps display a change we discussed in class: on load, open the first accordion, pin the first colour

function init() {

  $("#loadedOn").css("color","#B0D2DD");
  $("#loadedOn").addClass("typcn-pin").removeClass("typcn-pin-outline");
  $("#loadedOn").data("id","clicked");
  $(".palette").css("top","0px");
  initRandom();

}

init();
