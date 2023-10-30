var gamePattern = [];
var userClicked = [];
var buttonColours = ["green", "blue", "red", "yellow"];
let level = 0;
var started = false;

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  // console.log(randomNumber);
  return randomNumber;
}

var randomNumberArray = nextSequence();
var randomChosenColour = buttonColours[randomNumberArray];
gamePattern.push(randomChosenColour);

$(document).keypress(function () {
  if (!started) {
    $("h1").text("Level  " + level);
    myFunction(randomChosenColour);
  }
});

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClicked.push(userChosenColour);

  // console.log(userClicked);

  let win = winningCase();

  if (win) {
    $("h1").text("Level  " + level);

    console.log("win");
    userClicked = [];
    var randomNumberArray = nextSequence();
    var randomChosenColour = buttonColours[randomNumberArray];
    myFunction(randomChosenColour);
    gamePattern.push(randomChosenColour);
  } else if (
    gamePattern[userClicked.length - 1] !==
      userClicked[userClicked.length - 1] &&
    gamePattern.length === userClicked.length
  ) {
    console.log("looser");
    // userClicked = [];
    // $(document).fadeOut(100).fadeIn(100);
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over!!!  Press Any key to Restart");
    var wrong=new Audio("./sounds/wrong.mp3");
    wrong.play()
    startOver();
  }
});

function winningCase() {
  if (
    gamePattern.length === userClicked.length &&
    gamePattern[userClicked.length - 1] === userClicked[userClicked.length - 1]
  ) {
    level = level + 1;
    return true;
  } else {
    return false;
  }
}
function startOver() {
  level = 0;
  started = false;
  gamePattern = [];
}

function myFunction(randomChosenColour) {
  switch (randomChosenColour) {
    case "green":
      $("#green").fadeOut(100).fadeIn(100);
      var green = new Audio("./sounds/green.mp3");
      green.play();
      break;
    case "red":
      $("#red").fadeOut(100).fadeIn(100);
      var red = new Audio("./sounds/red.mp3");
      red.play();
      break;

    case "yellow":
      $("#yellow").fadeOut(100).fadeIn(100);
      var yellow = new Audio("./sounds/yellow.mp3");
      yellow.play();
      break;
    case "blue":
      $("#blue").fadeOut(100).fadeIn(100);
      var blue = new Audio("./sounds/blue.mp3");
      blue.play();
      break;
    default:
      console.log(randomChosenColour);
  }
}
// console.log(gamePattern);
