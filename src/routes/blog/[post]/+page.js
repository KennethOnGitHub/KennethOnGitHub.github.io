
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const post = await import(`../${params.post}.md`);
    const { title, date} = post.metadata;
	const content = post.default;

    return {
        title,
        date,
        content,
    }

}