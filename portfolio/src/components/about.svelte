<main>
    <div class = "container">
        <h1 class = "first">About</h1>
    </div>
    <p class = "info">
        Welcome to my website! I am a <i class = "edit2">full-stack developer</i> currently completing my undergraduate Bachelor's degree in Computer Science at the <i class = "edit">University of Alberta</i> in Edmonton, <i class = "edit">Canada</i>. I am passionate about using technology to solve real-world problems and improve people's lives.<br>

        <br>When I'm not working, you can usually find me <i class = "edit">reading books</i>, playing <i class = "edit">guitar</i>, or <i class = "edit">practicing taekwondo</i>. I also enjoy meeting new people and learning about their experiences and perspectives.
        
        I am an avid fan of motorsports and have recently started <i class = "edit">karting</i> as a hobby. I love following <i class = "edit">Formula 1</i> races and am looking forward to attending the <i class="edit2">Canadian Grand Prix in Montreal this summer</i>. <br>
        
        <br>In addition to my academic and personal pursuits, I am also working on a <i class="edit">startup</i> that aims to <i class= "edit2">connect homemade cooks</i> and <i class = "edit2">small food services</i> with <i class = "edit2">university students</i>. Our goal is to <i class = "edit">provide students</i> who are far away from home with the <i class = "edit">home-cooked meals</i> they crave.
        
        If you'd like to learn more about my work and education, please check out my <a class="linkGithub" href="https://github.com/iAniket23">Github profile</a> or connect with me on <a class = "linkLinkedin" href="https://www.linkedin.com/in/ianiket23">LinkedIn</a>. Thank you for visiting my website and I look forward to connecting with you!
    </p>
</main>

<style>
.info{
    text-align: justify ;
    font-size: 1.8em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: #ffffff;
    padding: 0 10vw;
}
.edit{
    color: orange;
    font-weight: bold;
}
.edit2{
    color: #F5F5DC;
    font-weight: bold;
}
.linkGithub{
    color: #ffffff;
    text-decoration: none;
    border : 2px solid orange;
}
.linkGithub:hover{
    color: orange;
    border : 2px solid white;
}
.linkLinkedin{
    color: #ffffff;
    text-decoration: none;
    border : 2px solid orange;
}
.linkLinkedin:hover{
    color: orange;
    border : 2px solid white;
}
.container{
  width: 100%;
  color: #ffffff;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.first{
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