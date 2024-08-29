import { defineField, defineType } from 'sanity'

export const aboutTypes = defineType({
    name: 'about',
    title: 'Agency Info',
    type: 'document',
    fields: [
        defineField({
            name: 'header',
            type: 'string',
        }),
        defineField({
            name: 'aboutText',
            type: 'string',
        }),
        defineField({
            name: 'bannerImages',
            type: 'array',
            of: [{ type: 'image' }]
        }),
        defineField({
            name: 'subBannerImage',
            type: 'image',
        }),
        defineField({
            name: 'subHeader',
            type: 'string',
        }),
        defineField({
            name: 'subText',
            type: 'array',
            of: [{type: 'block'}]
        }),
        defineField({
            name: 'mission',
            type: 'string',
        }),
        defineField({
            name: 'vision',
            type: 'string',
        }),
        defineField({
            name: 'teams',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'team' }]
            }],
        }),
    ],
})