// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Webcam Image Classification using a pre-trained customized model and p5.js
This example uses p5 preload function to create the classifier
=== */

// Classifier Variable
let classifier;
// Model URL
let imageModelURL = "https://teachablemachine.withgoogle.com/models/lJbX_8oB-/";

// Video
let video;
let flippedVideo;
// To store the classification
let label = "loading...";
let complementaryButton;
let monochromaticButton;
let triadicButton;
let analogousButton;
let programState = 0; //1= complementary, 2=monochromatic, 3 = analogous, 4 = triadic

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + "model.json");
}

function setup() {
  // Create the video
  video = createCapture(VIDEO);
  video.size(550, 425);
  video.hide();
  var cnv = createCanvas(550, 445);
  cnv.parent("wrapper");
  var x = (windowWidth - width) / 1.8;
  var y = (windowHeight - height) / 6;
  cnv.position(x, y);
  flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
}

function draw() {
  if (programState == 0) {
    drawIntroScreen();
  } else if (programState == 1) {
    drawComplementaryColor();
  } else if (programState == 2) {
    drawMonochromaticColor();
  } else if (programState == 3) {
    drawAnalogousColor();
  } else if (programState == 4) {
    drawTriadicColor();
  }
}

function drawIntroScreen() {
  background(255);
}

function startComplementary() {
  programState = 1;
}

function startMonochromatic() {
  programState = 2;
}

function startAnalogous() {
  programState = 3;
}

function startTriadic() {
  programState = 4;
}

function drawComplementaryColor() {
  background(0);
  image(flippedVideo, 0, 0);

  let emoji = "Shades of Blue Violets";
  select("#goodmatch").style("background-color", "#4d1a7f");
  select("#anothermatch").style("background-color", "#8a2be2");
  if (label == "Red") {
    emoji = "Shades of Blue";
    select("#goodmatch").style("background-color", "#0998e0");
    select("#anothermatch").style("background-color", "#2c789e");
  } else if (label == "Black and White") {
    emoji = "Any, your best bet will be with a similar shade";
    select("#goodmatch").style("background-color", "#000000");
    select("#anothermatch").style("background-color", "#ffffff");
  } else if (label == "Blue") {
    emoji = "Reds";
    select("#goodmatch").style("background-color", "#9e2323");
    select("#anothermatch").style("background-color", "#ff0000");
  } else if (label == "Green") {
    emoji = "Mauve Pinks";
    select("#goodmatch").style("background-color", "#C77398");
    select("#anothermatch").style("background-color", "#a17188");
  }
  fill(125, 175, 255);
  textSize(25);
  textFont("Open Sans, sans-serif");
  text(emoji, width / 2.083, height - 425);
  textAlign(CENTER);

  fill(59, 114, 255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
}

function drawMonochromaticColor() {
  background(0);
  image(flippedVideo, 0, 0);

  let emoji = "All Shades of Orange";
  select("#goodmatch").style("background-color", "#ff8400");
  select("#anothermatch").style("background-color", "#a15300");
  if (label == "Red") {
    emoji = "All Shades of Red";
    select("#goodmatch").style("background-color", "#ff6363");
    select("#anothermatch").style("background-color", "#a10000");
  } else if (label == "Black and White") {
    emoji = "All Shades of Black or White";
    select("#goodmatch").style("background-color", "#000000");
    select("#anothermatch").style("background-color", "#ffffff");
  } else if (label == "Blue") {
    emoji = "All Shades of Blue";
    select("#goodmatch").style("background-color", "#00b3ff");
    select("#anothermatch").style("background-color", "#1900ff");
  } else if (label == "Green") {
    emoji = "All Shades of green";
    select("#goodmatch").style("background-color", "#81ff7a");
    select("#anothermatch").style("background-color", "#076102");
  }
  fill(125, 175, 255);
  textSize(25);
  textFont("Open Sans, sans-serif");
  text(emoji, width / 2.083, height - 425);
  textAlign(CENTER);

  fill(59, 114, 255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
}

function drawAnalogousColor() {
  background(0);
  image(flippedVideo, 0, 0);

  let emoji = "Shades of Reds or Yellows";
  select("#goodmatch").style("background-color", "#ffee00");
  select("#anothermatch").style("background-color", "#ff0000");
  if (label == "Red") {
    emoji = "Shades of Oranges or Pinks";
    select("#goodmatch").style("background-color", "#FFC0CB");
    select("#anothermatch").style("background-color", "#f5b942");
  } else if (label == "Black and White") {
    emoji = "Shades of Brown or Black";
    select("#goodmatch").style("background-color", "#D2691E");
    select("#anothermatch").style("background-color", "#000000");
  } else if (label == "Blue") {
    emoji = "Shades of Blue Greens or Blue Violets";
    select("#goodmatch").style("background-color", "#088F8F");
    select("#anothermatch").style("background-color", "#4d1a7f");
  } else if (label == "Green") {
    emoji = "Shades of Blue Greens or Yellow Greens";
    select("#goodmatch").style("background-color", "#088F8F");
    select("#anothermatch").style("background-color", "#9acd32");
  }
  fill(125, 175, 255);
  textSize(25);
  textFont("Open Sans, sans-serif");
  text(emoji, width / 2.083, height - 425);
  textAlign(CENTER);

  fill(59, 114, 255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
}

function drawTriadicColor() {
  background(0);
  image(flippedVideo, 0, 0);

  let emoji = "Shades of Mauves AND Blue Greens";
  select("#goodmatch").style("background-color", "#e0b0ff");
  select("#anothermatch").style("background-color", "#088F8F");
  if (label == "Red") {
    emoji = "Shades of Greens AND Violets";
    select("#goodmatch").style("background-color", "#228526");
    select("#anothermatch").style("background-color", "#8F00FF");
  } else if (label == "Black and White") {
    emoji = "Shades of Black and White";
    select("#goodmatch").style("background-color", "#000000");
    select("#anothermatch").style("background-color", "#ffffff");
  } else if (label == "Blue") {
    emoji = "Shades of Mauve Pinks AND Yellows";
    select("#goodmatch").style("background-color", "#C77398");
    select("#anothermatch").style("background-color", "#ded30d");
  } else if (label == "Green") {
    emoji = "Shades of Reds AND Violets";
    select("#goodmatch").style("background-color", "#e00909");
    select("#anothermatch").style("background-color", "#8F00FF");
  }
  fill(125, 175, 255);
  textSize(25);
  textFont("Open Sans, sans-serif");
  text(emoji, width / 2.083, height - 425);
  textAlign(CENTER);

  fill(59, 114, 255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video);
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  console.log(results);
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  // Classifiy again!
  classifyVideo();
}
