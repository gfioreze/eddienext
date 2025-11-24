import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Eddie Portfolio',

  projectId: 'c4bd3r16',
  dataset: 'production',

  plugins: [
    structureTool(), // Use default structure
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
