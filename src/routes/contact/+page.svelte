<script>
    import '../reset.css'
    import '../styles.css'
    import Header from '$lib/Header.svelte'
</script>

<div class = "page">
    <Header currentPage = "Contact"/>

    <div class = "content">
        <h1 class = "all-ears">I'm all ears...</h1>
        <h2 class = "email-me">Email me at</h2>
        <button>
            <a href="mailto:Kenneth.anhas@gmail.com">
                <img class = "mail-icon" src="./mail.png" alt="✉️"><h3 class="email">Kenny@KennethOnThe.Web</h3>
            </a>
        </button>


        <h4 class = "check-me">Also check me out on</h4>
        <div class = "platform-icon-container">
            <a href="https://github.com/KennethOnGitHub" target="_blank"> <img src="github.png" alt = "github"></a>
            <a href="https://youtube.com" target="_blank"> <img src="youtube.png" alt = "youtube"></a>
        </div>
    </div>
</div>

<style>
    .page {
        height: 100vh;
        overflow: hidden; 
        /* The overflow:hidden is a scuffed workaround, for some reason the page is growing beyond 100vh which causes an ugly scrollbar to appear. This does mean that the contact info is slightly low but ok ig */
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        justify-content: center;
        
    }

    .all-ears {
        font-size: 3em;
        padding-bottom: 0.5em;
    }

    .email-me {
        font-weight: normal;
        padding: 0.5em;
    }

    .mail-icon {
        width: 50px;
        margin: 5px;
    }

    .email {
        font-weight: normal;
    }

    button {
        background: linear-gradient(45deg, #52296a, #007d66);
        border-radius: 5px;
        border: none;
        filter: drop-shadow(-2px 7px 2px rgba(0,0,0,.3));;

        cursor: pointer;
    }

    button a {
        display: flex;
        align-items: center;
        padding: 10px;
        text-decoration: none;
    }

    .check-me {
        padding-top: 1.5em;
        padding-bottom: 1em;
        font-weight: normal;
    }

    .platform-icon-container {
        display: flex;
        gap: 2em;
    }

    .platform-icon-container img {
        height: 50px;
    }

    
</style>