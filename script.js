let userName = 'Liz'
const userQuestion = 'Will I have good luck tomorrow?'
let randomNumber = Math.floor(Math.random() * 8)

userName ? console.log(`Hello, ${userName}!`)
: console.log('Hello!');

console.log(`You asked: ${userQuestion} Good question ${userName}!`);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'uh oh';
    break;
  case 1:
    eightBall = 'It is certain';
    break;
  case 2:
    eightBall = 'It is decidedly so';
    break;
  case 3:
    eightBall = 'Reply hazy try again';
    break;
  case 4:
    eightBall = 'Cannot predict now';
    break;
  case 5:
    eightBall = 'Do not count on it';
    break;
  case 6:
    eightBall = 'My sources say no';
    break;
  case 7:
    eightBall = 'Outlook not so good';
    break;
}

console.log(`The answer is ${eightBall}`);