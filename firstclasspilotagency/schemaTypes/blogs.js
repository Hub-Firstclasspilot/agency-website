import {defineField, defineType} from 'sanity'

export const blogTypes = defineType({
  name: 'blogs',
  title: 'Agency Blog',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'blogTitle',
      type: 'string',
    }),
    defineField({
      title: 'Info',
      name: 'blogInfo',
      type: 'string',
    }),
    defineField({
      title: 'Image',
      name: 'blogImage',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
        title: 'Link',
        name: 'blogLink',
        type: 'string',
      }),
  ],
})
