<main>
  <div class="container">
    <h1 class="first"><i class="word">Take</i><br>a look at my</h1>
    <h1 class="second">Resume</h1>
  </div>

  <div class="viewer">
    <object data="doc/resume.pdf#view=FitH" type="application/pdf" title="Aniket Mishra's resume">
      <p class="fallback">
        Your browser can't display PDFs inline.
        <a href="doc/resume.pdf">Open the resume</a>.
      </p>
    </object>
  </div>

  <p class="actions">
    <a href="doc/resume.pdf" download="Aniket_Mishra_Resume.pdf">Download PDF</a>
  </p>
</main>

<style>
  main {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }
  .container {
    width: 100%;
    color: black;
    text-align: center;
    padding: 1vh 0 3vh;
  }
  .word {
    font-style: normal;
    color: blue;
    font-size: 10vh;
  }
  .first {
    text-align: center;
    font-size: 4vh;
    margin-bottom: 0;
    margin-top: 0;
  }
  .second {
    text-align: center;
    display: inline;
    overflow: hidden;
    color: orange;
    font-size: 12vh;
    letter-spacing: 0;
    border-right: 0.1em solid orange;
    animation:
      typing 3s steps(30, end),
      blink-caret .75s step-start infinite;
  }
  @keyframes typing { from { width: 0 } to { width: 100% } }
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: orange; }
  }

  .viewer {
    max-width: 900px;
    margin: 3vh auto 0;
    padding: 0 4vw;
  }
  object {
    display: block;
    width: 100%;
    height: 85vh;
    min-height: 500px;
    background: white;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
  .fallback {
    padding: 2rem;
    text-align: center;
    color: black;
    font-size: 2vh;
  }
  .actions {
    text-align: center;
    margin-top: 2vh;
    font-size: 2vh;
  }
</style>
