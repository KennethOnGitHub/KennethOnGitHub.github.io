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
                <a href={"/blog/" + post.slug}>{post.title}</a>
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
a {
    text-decoration: none;
    z-index: 99;
}
ul {
    padding: 0;
    /* ^^maybe the 0 padding hsould be added to css reset? */
    list-style: none;
}
</style>
