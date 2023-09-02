import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-07-26',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)