import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'ew1il7l4',
    dataset: 'production',
    apiVersion: '2024-08-05',
    useCdn: true,
    token: process.env.SANITY_TOKEN
})



const builder = new imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source);