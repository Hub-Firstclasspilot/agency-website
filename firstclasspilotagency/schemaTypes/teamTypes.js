import { defineField, defineType } from 'sanity'

export const teamTypes = defineType({
    name: 'team',
    title: 'Agency Teams',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'teamRole',
            type: 'string',
        }),
        defineField({
            name: 'profile',
            type: 'image',
        }),
    ]
})