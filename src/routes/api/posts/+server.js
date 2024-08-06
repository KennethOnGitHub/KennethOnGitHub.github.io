import { json } from '@sveltejs/kit';

async function getPosts() {
    let posts = [];

    const postFiles = import.meta.glob('/src/routes/blog/*.md', {eager: true}) //returns an object whose keys are the paths and the corresponding pair the the data from its import.

    for (const path in postFiles) {
        const file = postFiles[path];

        const slug = path.slice('/src/routes/blog/'.length, -'.md'.length)
        const metadata = file.metadata;

        posts.push({...metadata, slug})
    }

    return posts;
}

export async function GET() {
    return json(await getPosts())
}

//this API returns a JSON which has the info about all the posts