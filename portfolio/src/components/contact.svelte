<main>
  <div class = "container">
      <h1 class = "first"><i class = "word">Get</i> in</h1>
      <h1 class = "second">Touch</h1>
    </div>
</main>

<style>

.container{
width: 100%;
color: black;
text-align: center;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
.word{
  font-style: normal;
  color: blue;
  font-size: 10vh;
}

.first{
  text-align: center;
  font-size: 6vh;
  margin-bottom: 0%;
  margin-top: 0%;
}
.second{
  text-align: center;
  display: inline;
  margin: 0 auto;
  overflow: hidden;
  color: orange;
  font-size: 12vh;
  letter-spacing: 0;
  border-right: 0.1em solid orange;
  animation: 
      typing 3s steps(30, end),
      blink-caret .75s step-start infinite;
}


/* The typing effect */
@keyframes typing {
from { width: 0 }
to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
from, to { border-color: transparent}
50% { border-color: orange; }
}

</style>