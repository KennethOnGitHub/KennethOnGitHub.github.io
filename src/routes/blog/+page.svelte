<script>
    import Header from "$lib/Header.svelte"
    //make a svelte component called post?

    //get the top posts
    //
    export let data;

    console.log(data.posts)
</script>

<div class = "page">
    <Header currentPage = "Blog"/>

    <div class = "content">

        <ul>
            {#each data.posts as post}
            <li>
                <a href={`/blog/${post.slug}`}>
                    {#if post.thumbnail != undefined}
                        <img src={`/${post.thumbnail}`} alt={post.title} class = "thumbnail">
                    {/if}
                    <div>
                        <time datetime={post.date}>{post.date}</time><br>
                    
                        <h1>{post.title}</h1>
                        <p>{post.preview}</p>
                    </div>
                </a>
            </li>
            <hr>
            {/each}
        </ul>
    </div>

</div>


<style>
.page {
    height: 100vh;
    background-color: #292929;

}

time {
    opacity: 50%;
}

a {
    text-decoration: none;
    display: flex;
    border-radius: 7px;
    transition: background-color 100ms;
}

/* a:hover {
    background-color: #ffffff35;
} */

ul {
    padding: 0;
    /* ^^maybe the 0 padding hsould be added to css reset? */
    list-style: none;
}

.thumbnail {
    height: 150px;
}

hr {
    margin: 1em 0;
}



.content {
    padding: 2em;
}
</style>
