export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(60),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Graphic Design', value: 'graphic-design'},
          {title: 'Videography', value: 'videography'},
          {title: 'Video Editing', value: 'video-editing'},
        ],
        layout: 'radio', // Makes it easier to select
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of the project',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true, // Enables cropping interface
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Important for SEO and accessibility',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'Optional: URL for video content (YouTube, Vimeo, etc.)',
    },
    {
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url',
      description: 'Optional: Link to live project or case study',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Mark as featured to highlight in portfolio',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'category',
    },
    prepare(selection) {
      const {title, media, subtitle} = selection
      return {
        title,
        media,
        subtitle: `Category: ${subtitle}`,
      }
    },
  },
}
