<script>
    import Header from "$lib/Header.svelte"
    //make a svelte component called post?

    //get the top posts
    //
    export let data;

</script>

<div class = "page">
    <Header currentPage = "Blog"/>

    <div class = "content">

        <ul>
            {#each data.posts as post}
            <li>
                <time datetime={post.date}>{post.date}</time><br>
                
                <a href={"/blog/" + post.slug}>{post.title}</a>
                <p>{post.preview}</p>
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
    font-size: xx-large;
    font-weight: bolder;
}
ul {
    padding: 0;
    /* ^^maybe the 0 padding hsould be added to css reset? */
    list-style: none;
}

hr {
    margin: 1em 0;
}

.content {
    padding: 2em;
}
</style>
