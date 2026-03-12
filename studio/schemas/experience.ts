import { defineType, defineField } from 'sanity';

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'section',
      title: 'Section',
      type: 'string',
      options: {
        list: [
          { title: 'Education', value: 'education' },
          { title: 'Professional', value: 'professional' },
          { title: 'Leadership & Activities', value: 'leadership' },
          { title: 'Skills & Certifications', value: 'skills' },
        ],
      },
    }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'subtitle', title: 'Subtitle (role + date range)', type: 'string' }),
    defineField({
      name: 'bullets',
      title: 'Bullet Points',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', initialValue: 0 }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'section' },
  },
});
