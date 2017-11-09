'use strict';

var developer;
var prospectiveJobSeeker;
var want;
var hats;
var Ohio;
var favNum;

var developer = prompt('Am I a developer?').toLowerCase();
console.log('Am I a developer?:', developer);
if ((developer === 'y') || (developer === 'yes')){
  alert('Nice work! Maybe you can guess a few more fun facts about me!');
} else if
   ((developer === 'n') || (developer === 'no'))
    alert('Incorrect! Maybe next time!');

var prospectiveJobSeeker = prompt('Am I looking for a job?').toLowerCase();
console.log('Am I looking for a job?:', prospectiveJobSeeker);
if ((prospectiveJobSeeker === 'y') || (prospectiveJobSeeker = 'yes')){
alert('wow, how\'d you know?!');
} else if
   ((prospectiveJobSeeker === 'n') || (prospectiveJobSeeker = 'no'))
    alert('wrong answer! ... but not exactly wrong, persay...');

var want = prompt('Do I know what I want?').toLowerCase();
if ((want === 'y') || (want = 'yes')){
alert('wow, you\'re good!! And thanks for your trust! For now, let\'s change the topic...');
} else if
   ((want === 'n') || (want = 'no'))
    alert('duh, I want to change the world, fool! For now, let\'s change the topic...');
    else
    alert('look \'man\', this isn\'t complicated- it\'s a yes\/no question. Let\'s change the topic...');

var hats = prompt('Do you know how many hats I own?').toLowerCase();
if ((hats === 'y') || (hats = 'yes')){
alert('ok, mr/mrs smarty pants, how many?');
} else if
   ((hats === 'n') || (hats = 'no')){
    alert('That\'s fair, I don\'t know how many hats you own either!')
  } else {
    alert('maybe that IS a silly question!')
  }

var Ohio = prompt('Am I from Ohio?').toLowerCase();
if ((Ohio === 'y') || (Ohio === 'yes')){
  alert('This is great! You\'re really getting to know me pretty well, huh?');
} else if
   ((Ohio === 'n') || (Ohio === 'no')){
    alert('c\'mon, I pretty much handed that one to you...');
  } else {
    alert('omg... These have all been yes\/no questions so far!... let\'s totally change this up:');
  }

for (var i=0; i<4; i++){
var favNum = prompt('What is my favorite number between 1 and 15? You get 4 tries or you\'re gonna get it...');
console.log(favNum[i]);
if(favNum === '12') {
  console.log('true', favNum);
  alert ('You\. Are\. Amazing\!')
  break;
} else if (favNum < 12) {
  console.log('too low', favNum);
  alert ('too low. Try again.')
} else if (favNum > 12) {
  console.log('too high', favNum);
  alert ('too high. Try again.')
} else {
  console.log('false', favNum);
  alert('that\'s just plain wrong');
}
}
var myStates = ['florida', 'california', 'pennsylvania', 'kentucky']
  while (userStates !== myStates[0] && userStates !== myStates[1] && userStates !== myStates[2] && userStates !== myStates[3]){
    var userStates = prompt('Guess which other states I\'ve visited!').toLowerCase();

  }
  console.log(mystates[i]);
