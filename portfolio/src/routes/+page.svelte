<main>
    <div class = "container">
        <h1 class = "first">Hey, I'm</h1>
        <h1 class = "second">Aniket.</h1>
      </div>
</main>

<style>

.container{
  width: 100%;
  color: #ffffff;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.first{
    text-align: center;
    font-size: 15vw;
    margin-bottom: 0%;
    margin-top: 0%;
}
.second{
    text-align: center;
    display: inline;
    margin: 0 auto;
    overflow: hidden;
    color: orange;
    font-size: 12vw;
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