<main>
    <div class = "container">
        <h1 class = "second">Contact</h1>
        <h1 class = "third">Contact form is not available yet :( <br> 
                            Please send an email instead:   <a class="first" href="mailto: ianiket23@gmail.com">ianiket23@gmail.com</a></h1>

        
 
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
  color: #ffffff;
    text-decoration: none;
    border : 2px solid orange;}
.first:hover{
  color: orange;
    border : 2px solid white;
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
.third{
    text-align: center;
    font-size: 4vh;
    margin: auto;
    margin-bottom: 2%;
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