<main>
    <div class = "container">
        <h1 class = "second"><i class ="word1">My</i> Contact</h1>
        <p class="fourth"><span>Please send an email instead:<br><a class="fifth" href="mailto: ianiket23@gmail.com">ianiket23@gmail.com</a></span></p>
      </div>
</main>

<style>
.container{
  width: 100%;
  color: black;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
.word1{
    font-style: normal;
    color: blue;
    font-weight: bold;
}
.second{
    text-align: center;
    display: inline;
    margin: 0 auto;
    overflow: hidden;
    color: orange;
    font-size: 10vh;
    letter-spacing: 0;
    border-right: 0.1em solid orange;
    animation: 
        typing 3s steps(30, end),
        blink-caret .75s step-start infinite;
}

.fourth{
    text-align: center;
    margin-bottom: 2%;
    font-size: 2vh;
}
.fifth{
    text-align: center;
    margin-bottom: 2%;
    font-size: 2vh;
}
.fifth:hover{
    color: orange;
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