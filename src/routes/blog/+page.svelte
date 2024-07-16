<script>
    import Header from "$lib/Header.svelte"
    //make a svelte component called post?

    //get the top posts
    //

</script>

<div class = "page">
    <Header currentPage = "Blog"/>

    <div class = "content">
        <!-- <div class = "highlighted-post">

        </div>
        <div class = "posts">

        </div>
 -->

    <a href="./blog/beemovie">Go to BEE NMIVUE</a>

    </div>

</div>


<style>
.page {
    height: 100vh;
    background-color: #292929;

}
a {
    position: relative;
    top: 100px;
    z-index: 99;
}
</style>
