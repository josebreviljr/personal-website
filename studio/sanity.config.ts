import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'default',
  title: 'Jose Brevil — Personal Website',
  projectId: 'r5rf35nk',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
