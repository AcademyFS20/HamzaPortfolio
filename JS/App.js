const txt = document.querySelector('.txt-animation');
console.log(txt);

var typewriter = new Typewriter(txt, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2000)
  .typeString('Hello friend')
  .pauseFor(1500)
  .typeString(', my name is Hamza')
  .pauseFor(200)
  .deleteChars(16)
  .typeString('i m a web developper')
  .pauseFor(250)
  .deleteChars(20)
  .typeString('<strong>Welcome to my <span style="color: #27ae60;">WEBSITE</span></strong>')
  .pauseFor(1000)
  .start();