<main>
    <nav>
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">&#9776;</label>
        <div class = "nav-links">
            <a href="#Home">Home</a>
            <a href="#About">About</a>
            <a href="#Projects">Projects</a>
        </div>
    </nav>
</main>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #ffffff;
        font-size: 1rem;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    nav {
        display: flex;
        padding: 0.5rem 0rem;
        background-color: #1d1d1b;
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
        height: 2px;
        background: #ffffff;
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

    @media (max-width: 600px){
        nav{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
        }
        .nav-links{
            position: absolute;
            top: 40px;
            left: 0;
            width: 100%;
            height: 95%;
            background-color: #1d1d1b;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transform: translateX(-100%);
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