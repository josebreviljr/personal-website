import { defineType, defineField } from 'sanity';

export const bio = defineType({
  name: 'bio',
  title: 'Bio',
  type: 'document',
  fields: [
    defineField({ name: 'heroLine1', title: 'Hero Heading Line 1', type: 'string' }),
    defineField({ name: 'heroLine2', title: 'Hero Heading Line 2', type: 'string' }),
    defineField({ name: 'paragraph1', title: 'Paragraph 1', type: 'text' }),
    defineField({ name: 'paragraph2', title: 'Paragraph 2', type: 'text' }),
    defineField({ name: 'paragraph3', title: 'Paragraph 3', type: 'text' }),
    defineField({ name: 'paragraph4', title: 'Paragraph 4', type: 'text' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'profilePhoto', title: 'Profile Photo', type: 'image' }),
    defineField({ name: 'resumePdf', title: 'Resume PDF', type: 'file', options: { accept: '.pdf' } }),
    defineField({
      name: 'resumePages',
      title: 'Resume Page Images (PNGs)',
      type: 'array',
      of: [{ type: 'image' }],
      description: 'Upload one image per page, in order.',
    }),
  ],
});
