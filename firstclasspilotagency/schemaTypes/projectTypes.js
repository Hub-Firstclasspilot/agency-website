import { defineField, defineType } from 'sanity'

export const projectTypes = defineType({
  name: 'projects',
  title: 'Agency Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'projectTitle',
      type: 'string',
    }),
    defineField({
      name: 'group',
      type: 'string',
    }),
    defineField({
      name: 'shortInfo',
      type: 'string',
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'bannerImage',
      type: 'image',
    }),
    defineField({
      name: 'company',
      type: 'string',
    }),
    defineField({
      name: 'headquaters',
      type: 'string',
    }),
    defineField({
      name: 'founded',
      type: 'date',
    }),
    defineField({
      name: 'industries',
      type: 'string',
    }),
    defineField({
      name: 'revenue',
      type: 'string',
    }),
    defineField({
      name: 'size',
      type: 'string',
    }),
    defineField({
      name: 'website',
      type: 'url',
    }),
    defineField({
      name: 'roles',
      type: 'array',
      of: [{ type: 'string' }] // Corrected
    }),
    defineField({
      name: 'tools',
      type: 'array',
      of: [{ type: 'string' }] // Corrected
    }),
    defineField({
      name: 'durations',
      type: 'string',
    }),
    defineField({
      name: 'teams',
      type: 'array', // Teams should be an array if multiple teams can be referenced
      of: [{
        type: 'reference',
        to: [{ type: 'team' }] // Correctly references the 'team' document type
      }],
    }),
    defineField({
      name: 'projectDescription',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'projectImages',
      type: 'array',
      of: [{ type: 'image' }] // Corrected
    }),
  ],
})
