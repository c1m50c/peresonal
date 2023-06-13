<style>
    .navbar {
        min-width: 100vw;
        position: fixed;
        top: 0;

        justify-content: center;
        display: flex;
    }
    
    .navbar ul {
        list-style: none;
        display: flex;
        gap: 1rem;
    }

    .navbar-button {
        color: rgb(248, 248, 248);
        text-decoration: none;
        text-align: center;
        opacity: 12.5%;

        font-size: 1.33rem;
        font-weight: 600;

        transition: color 300ms ease-in, opacity 300ms ease-in;
    }

    .navbar-button:hover {
        color: rgb(245, 177, 75);
        opacity: 100%;
    }
</style>


<nav class="navbar">
    <ul>
        <li>
            <a class="navbar-button" href="/">HOME</a>
        </li>
        <li>
            <a class="navbar-button" href="/blogs">BLOGS</a>
        </li>
        <li>
            <a class="navbar-button" href="/skills">SKILLS</a>
        </li>
        <li>
            <a class="navbar-button" href="/projects">PROJECTS</a>
        </li>
        <li>
            <a class="navbar-button" href="/contact">CONTACT</a>
        </li>
    </ul>
</nav>