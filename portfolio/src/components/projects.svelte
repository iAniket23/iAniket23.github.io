<main>
    <div class = "container">
        <h1 class = "first"><i class = "word">Let's</i><br>see some of my</h1>
        <h1 class = "second">Projects</h1>
      </div>
  </main>
  <div class = "allProjects">
    <div class = "p1">
      <div class = "demo">
      <section>
        <div class="toolbar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container2">
          <img src="img/p1.gif" alt="Avatar" style="width:100%">
        </div>
      </section>
    </div>
    
    <div class = "stickynotes">
            <h2>Project 1 - Toneteller</h2>
            <p>Toneteller is a web application and 
              chrome extension that uses machine learning 
              and artificial intelligence to perform sentiment 
              analysis on the text that a user has entered.<br>
              <br>My team and I developed this project during 
              a hackathon where it was awarded second place.<br><br>
              <a href="https://hackathon-hacked2023.github.io/DivineInspiration/">Website</a>
              &nbsp<a href="https://github.com/Hackathon-Hacked2023/DivineInspiration">Github</a>
              &nbsp<a href="https://devpost.com/software/toneteller">Devpost</a>
              </p>
    
      </div>
      </div>
  <div class = "p1">
    <div class = "stickynotes2">
      <h2>Project 2 - Experimenter</h2>
      <p>It is an Android app that simplifies experiment and test recording with 
        built-in patterns for Binomial and Non-Negative tests, and displays 
        locations through Google Map API.<br><br> The app allows in-depth analysis of experiment data. Overall, this app is a 
        valuable tool to efficiently conduct and analyze experiments on the go.<br><br>
        <a href="https://github.com/CMPUT301W21T21-H03/Experimenter">Github</a>
        </p>

</div>
  <div class = "demo">
  <section>
    <div class="toolbar">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container2">
      <img src="img/p2.gif" alt="Avatar" style="width:100%">
    </div>
  </section>
</div>
  </div>
  <i class = "final">More <i class = "word4">projects</i> will be added soon! </i>
</div>

  <style>
    .final{
      font-size: 2vh;
      font-weight: bold;
    }
    .word4{
      color: blue;
    }
    .allProjects{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin: 5vh 5vw;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
 .p1{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 5vh 5vw;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
h2 {
  font-weight: bold;
  font-size: 2vh;
}

p {
  font-size: 2vh;
}
.stickynotes{
  text-decoration:none;
  color:#000;
  background:#ffc;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  display:block;
  height:40vh;
  width:38vh;
  padding:1em;
  box-shadow: 5px 5px 7px rgba(33,33,33,.7);
  transform: rotate(-6deg);
  transition: transform .15s linear;
  align-items: center;
  color: black;
}
.stickynotes2{
  text-decoration:none;
  color:#000;
  background:#ffc;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  display:block;
  height:40vh;
  width:38vh;
  transform:rotate(4deg);
  position:relative;
  top:5px;
  background:#cfc;
  padding:1em;
  box-shadow: 5px 5px 7px rgba(33,33,33,.7);
  transition: transform .15s linear;
  align-items: center;
  color: black;
}
.demo {
    display: flex;
    align-items: center;
    justify-content: center;
}
.container2 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
section {
  background-color: white;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
.toolbar {
    background:#e6e4e6;
    padding: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
}
.toolbar span {
    width:10px;
    height:10px;
    border-radius:50%;
    background:#ff5f57;
    display: inline-block;
    margin-right: 5px;
}
.toolbar span:nth-child(2) {
    background:#ffbe2a;
}
.toolbar span:nth-child(3) {
    background:#25ca3f;
}

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
    font-size: 4vh;
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