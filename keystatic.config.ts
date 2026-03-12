import { config, fields, singleton, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'josebreviljr/personal-website',
  },
  ui: {
    navigation: {
      Bio: ['bio'],
      Experience: ['experience'],
    },
  },
  singletons: {
    bio: singleton({
      label: 'Bio',
      path: 'src/data/bio',
      schema: {
        heroLine1: fields.text({ label: 'Hero Heading Line 1' }),
        heroLine2: fields.text({ label: 'Hero Heading Line 2' }),
        paragraph1: fields.text({ label: 'Paragraph 1', multiline: true }),
        paragraph2: fields.text({ label: 'Paragraph 2', multiline: true }),
        paragraph3: fields.text({ label: 'Paragraph 3', multiline: true }),
        paragraph4: fields.text({ label: 'Paragraph 4', multiline: true }),
        email: fields.text({ label: 'Email' }),
        linkedinUrl: fields.text({ label: 'LinkedIn URL' }),
      },
    }),
  },
  collections: {
    experience: collection({
      label: 'Experience',
      slugField: 'title',
      path: 'src/content/experience/*',
      schema: {
        section: fields.select({
          label: 'Section',
          options: [
            { label: 'Education', value: 'education' },
            { label: 'Professional', value: 'professional' },
            { label: 'Leadership', value: 'leadership' },
            { label: 'Skills', value: 'skills' },
          ],
          defaultValue: 'professional',
        }),
        title: fields.slug({ name: { label: 'Title' } }),
        location: fields.text({ label: 'Location' }),
        subtitle: fields.text({ label: 'Subtitle (role + date range)' }),
        bullets: fields.array(
          fields.text({ label: 'Bullet point' }),
          { label: 'Bullet Points' }
        ),
        order: fields.number({ label: 'Display Order', defaultValue: 0 }),
      },
    }),
  },
});
