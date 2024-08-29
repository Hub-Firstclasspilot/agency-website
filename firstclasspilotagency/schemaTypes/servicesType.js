import {defineField, defineType} from 'sanity'

export const serviceTypes = defineType({
  name: 'services',
  title: 'Agency Services',
  type: 'document',
  fields: [
    defineField({
      name: 'serviceTitle',
      type: 'string',
    }),
    defineField({
      name: 'serviceText',
      type: 'string',
    }),
    defineField({
      name: 'serviceImage',
      type: 'image',
    }),
  ],
})
