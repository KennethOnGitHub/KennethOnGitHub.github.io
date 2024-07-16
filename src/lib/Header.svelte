<script>
    const pages = ["Me", "Projects", "Blog", "Contact", "Fashion"]

    export let currentPage; //Passing in the name of the page makes for better readability when using <Header>
    const currentPageIndex = pages.indexOf(currentPage);
</script>


<header>
    <div class = "pageTitle">
        <a href="../">Ken Knight</a>/{currentPage}
    </div>

    <nav><ul>
        {#each pages as page, i}
            <li><a href = {"../" + page.toLowerCase()} class = {currentPage == page ? "highlight" : "nohighlight"}>{page}</a></li> 
            {#if i < pages.length - 1}
                <!-- <span class = "nohighlight">|</span> -->
                <span class = {i == currentPageIndex || i == currentPageIndex - 1 ? "highlight" : "nohighlight"}>|</span>
            {/if}
        {/each}

    </ul></nav>
</header>

<style>
    header {
        position: sticky;
        top: 0;
        width: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #0E6363;
        color: white;
        height: 60px;

        padding: 2em;
    }

    .pageTitle {
        font-weight: bold;
        font-size: 1.5em;
    }

    ul {
        display: flex;
        list-style: none;
        gap: 2em;
    }
    
    a {
        text-decoration: none;
        color: rgba(255, 255, 255);
    }

    .highlight {
        opacity: 100%;
        font-weight: bold;
    }

    .nohighlight {
        opacity: 50%;
    }

    a:hover {
        opacity: 100%;
    }


</style>