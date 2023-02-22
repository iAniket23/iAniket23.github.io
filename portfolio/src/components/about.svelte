
<div class = "container">
    <b class = "second">About <i class = "word1">Me</i></b>
</div>

<main> 
    <p class = "info">
        Welcome to my website! I am a <i class = "edit2">full-stack developer</i> currently completing my undergraduate Bachelor's degree in Computer Science at the <i class = "edit">University of Alberta</i> in Edmonton, <i class = "edit">Canada</i>. I am passionate about using technology to solve real-world problems and improve people's lives.<br>
        <br>When I'm not working, you can usually find me reading <i class = "edit">books</i>, playing <i class = "edit">guitar</i>, or practicing <i class = "edit">taekwondo</i>. I also enjoy meeting new people and learning about their experiences and perspectives.
        I am an avid fan of motorsports and have recently started <i class = "edit">karting</i> as a hobby. I love following <i class = "edit">Formula 1</i> races and am looking forward to attending the <i class="edit2">Canadian Grand Prix in Montreal this summer</i>. <br>
        <br>If you'd like to learn more about my work and education, please check out my <a class="linkGithub" href="https://github.com/iAniket23">Github profile</a> or connect with me on <a class = "linkLinkedin" href="https://www.linkedin.com/in/ianiket23">LinkedIn</a>. Thank you for visiting my website and I look forward to connecting with you!
   </p>
</main>

<style>

.info{
    display: inline-block;
    text-align: justify;
    hyphens: auto;
    -webkit-hyphens: auto;
    word-spacing: -0.05em;
    font-size: 3vh;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: black;
    padding: 0 20vw;
}
.edit{
    color: blue;
    font-weight: bold;
}

.linkGithub{
    color: black;
    text-decoration: none;
}
.linkGithub:hover{
    color: orange;

}
.linkLinkedin{
    color: black;
    text-decoration: none;
   
}
.linkLinkedin:hover{
    color: orange;

}
.container{
  width: 100%;
  color: black;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.word1{
    font-style: normal;
    color: orange;
    font-weight: bold;
}
.second{
    
    text-align: center;
    display: inline;
    margin: 0 auto;
    overflow: hidden;
    color: blue;
    font-size: 10vh;
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