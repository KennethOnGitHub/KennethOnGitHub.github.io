<script>
    // import './reset.css'
    // import './styles.css'

    import { onMount } from "svelte";

    let now = new Date;
    const BIRTHDAY = new Date("June 6, 2007 00:00:00");

    $: timeSinceBirth = (now - BIRTHDAY) / 31536000000;
    $: formattedTimeSinceBirth = timeSinceBirth.toLocaleString('en-US', { maximumFractionDigits: 9, minimumFractionDigits: 9 });

    onMount(() => {
        const interval = setInterval(() => {
            now = new Date;
        }, 50) 
    })

</script>

<div class = "page">
    <div class = 'container'>
        <h1>Ken Knight</h1>
        <nav>
            <ul>
                <li><a href='#'>About Me</a></li>
                <li><a href='#'>Projects</a></li>
                <li><a href='/blog'>Blog</a></li>
                <li><a href='/contact'>Contact</a></li>
                <li><a href='#'>My Fashion Sense</a></li>
            </ul>
        </nav>
        <div class = 'right'>
            <p>
                I’m a {formattedTimeSinceBirth} year-old aspiring software developer studying Further Maths and Computer Science at Bexhill College.
            </p>
            <p>
                Keep it clean, efficient, and a little silly.
            </p>
        </div>
    </div>

</div>
<footer>
    <a href="https://youtube.com/">
        CV
    </a>

    <a href="https://youtube.com/">
        <img src = "/youtube.png" alt = 'Youtube'>
    </a>

    <a href="https://github.com/">
        <img src = "/github.png" alt = 'GitHub'>
    </a>

</footer>

<style>
    * {
        color: white;
    }

    div.page {
        background-image: linear-gradient(45deg, #52296a, #007d66);
        /* background-size: 40% 40%; */
        /* animation: bg-flow-anim 5s infinite; */
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
/* 
    .page::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(0.125turn, #52296A, #007D67);;
        filter: blur(8px);
        opacity: 1;
} */

    @keyframes bg-flow-anim {
        from {
            background-position: bottom left;
        }

        to {
            background-position: top right ;
        }
    }

    div.container {
        display: grid;
        width: 60%;
        height: fit-content;
        grid-template-columns: 1fr 2fr;
        grid-template-areas: 'title title'
        'left right';
    }

    h1 {
        grid-area: title;
        font-weight: normal;
        font-size: 9.5vw;
    }

    nav {
        grid-area: left;
    }

    ul {
        list-style-type: none;
        padding-left: 10px;
    }

    li a {
        text-decoration: none;
        font-size: 1.5vw;
        opacity: 70%; 
    }

    li a:hover {
        opacity: 100%;
        font-weight: bold;
    }

    .right {
        grid-area: right;
        font-size: 1vw;
    }

    footer {
        position: absolute;
        right:20px;
        bottom:20px;

        display: flex;
        align-items: center;
        gap: 10px;
    }

    footer img {
        width: 40px;
    }

    footer {
        font-size: 30px;
    }
</style>
