<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import Header from '$lib/Header.svelte';
	import './styles.css'

	import './prism-night-owl.css'

	function formatDate(inputDate) {
		//InputDate should be in form YYYY-MM-DD
		//Returns date in format DD (Month Written Out) YYYY

		const date = new Date(inputDate);

		const formatSettings = { day: '2-digit', month: 'long', year: 'numeric' };

		return new Intl.DateTimeFormat('en-GB', formatSettings).format(date);
	}
	const formattedDate = formatDate(data.date);

</script>



<Header currentPage = 'Blog'/>
<div class = "content">
	<div class = "post-header">
		<h1>{data.title}</h1>
		<time datetime={data.date}>{formattedDate}</time>
	</div>

	<svelte:component this={data.content} />
</div>


<style>
	.content {
		margin-top: 20px;
		display: grid;
		grid-template-columns: 70em;
		justify-content: center;
		gap: 17px;
	}

	h1 {
		font-weight: normal;
	}

	time {
		opacity: 50%;
	}
</style>