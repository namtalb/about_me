'use strict';

var friend = prompt('Am I your friend?');
console.log('am I your friend?:', friend);
friend = friend.toLowerCase();

if ((friend === 'y') || (friend === 'yes')){
  alert('Rock on Yo!');
}

var houseIsland = prompt('Is my house on an island?');
console.log('house on an island:', houseIsland);
houseIsland = houseIsland.toLowerCase();

if ((friend === 'y' || houseIsland  === 'n') || (friend === 'yes' || houseIsland === 'no')) {
  alert('You know so much!');
}

var seeingPlay = prompt('Are we seeing a play tonight?');
console.log('seeing a play:', seeingPlay);
seeingPlay = seeingPlay.toLowerCase();

if ((friend === 'y' || seeingPlay === 'y') || (friend === 'yes' || seeingPlay === 'yes')) {
  alert('well, what if we saw a good one?');
}

if ((friend === 'n' || houseIsland === 'n') || (friend === 'no' || houseIsland === 'no')) {
  alert('the sun will come out... tomorrow...');
}

var goldMined = prompt('is gold mined in Canada?');
console.log('gold is mined:', goldMined);
goldMined = goldMined.toLowerCase();

var mayIHelp = prompt('May I help you?');
console.log('May I help you:, mayIHelp');
mayIHelp = mayIHelp.toLowerCase();

if ((friend === 'n') || (friend === 'no')) {
  alert('well, peanuts');
}

if ((seeingPlay === 'y' || goldMined === 'n') || (seeingPlay === 'yes' || goldMined === 'no')) {
alert('we have so much in common!');
}

if ((mayIHelp === 'n' && goldMined === 'y') || (mayIHelp === 'no' && goldMined === 'yes')) {
  alert('then get after it!');
}
