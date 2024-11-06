import {defineField, defineType} from 'sanity'

export const serviceTypes = defineType({
  name: 'blogs',
  title: 'Your Blog List',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'blogTitle',
      type: 'string',
    }),
    defineField({
      title: 'Info',
      name: 'Blog Info',
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
  ],
})
