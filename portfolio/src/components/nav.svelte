<script>
    // @ts-ignore
    import { scroll } from 'svelte-scrollto';
</script>
<main>
    <nav>
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">&#9776;</label>
        <div class = "nav-links">
            <a href= '/'>Home</a>
            <a href= '/#about' on:click|preventDefault={()=> scroll('/#about')}>About</a>
            <a href= '/projects'>Projects</a>
            <a href= '/#contact' on:click|preventDefault={()=> scroll('/#contact')}>Contact</a>
            <a href="https://drive.google.com/file/d/1DfntPfRUI0IjXP2bnUuAsTMDysqyYOtH/view?usp=sharing">Resume</a>
            <a href="https://www.linkedin.com/in/ianiket23">LinkedIn</a>
            <a href="https://github.com/iAniket23">Github</a>
            
        </div>
    </nav>
</main>

<style>
    *{  z-index: 2;
        scroll-behavior: smooth;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: white;
        font-size: 1.4rem;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    nav {
        width: 100%;
        position: fixed;
        display: flex;
        padding: 1rem 1rem;
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        background: rgba(0, 0, 0, 0.5);
        justify-content: flex-end;
    }
    .nav-links a{
        margin: 0 1rem;
        position: relative;
        text-decoration: none;
        
    }
    .nav-links a::after{
        content: "";
        position: absolute;
        left: 0;
        bottom: - 10px;
        width: 0;
       
    }
    .nav-links a:hover{
        color: #ffffff;
    }
    .nav-links a:hover::after{
        width: 100%;
        height: 3px;
        background: orange;
        transition: width .3s;
        bottom: -4px;
    }

    /* Hamburger menu */
    input[type="checkbox"]{
        display: none;
    }

    .hamburger{
        display: none;
        font-size: 2rem;
        user-select: none;
    }

    @media (max-width: 850px){
        nav{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            padding: 0rem 2rem;
        }
        .nav-links{
            position: absolute;
            top: 38px;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            flex-direction: column;
            justify-content: top;
            align-items: center;
            transform: translateX(-100%);
            z-index: 1;
            border: #ffffff 1px solid;
        }
        .nav-links a{
            font-size: 1.5rem;
            margin: 1rem;
            transition: color .3s;
        }
        input[type="checkbox"]:checked ~ .nav-links{
            transform: translateX(0);
        }
        .hamburger{
            display: flex;
            cursor: pointer;
        }
    }

</style>