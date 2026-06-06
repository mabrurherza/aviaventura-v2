// ./src/sanity/schemaTypes/homepage.ts
import { defineField, defineType } from "sanity";

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: ({ document }) => !document?.title,
    }),

    // 1. HERO SECTION
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', description: 'Judul besar pada bagian hero section', validation: rule => rule.required() }),
        defineField({ name: 'subParagraph', title: 'Sub Paragraph', type: 'text', description: 'Paragraph pendukung untuk judul', validation: rule => rule.required() }),
      ],
    }),

    // 2. HOW SECTION
    defineField({
      name: 'how',
      title: 'How AVIAVENTURA works',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'text', description: 'Heading besar untuk menjelaskan cara kerja Aviaventura', validation: rule => rule.required() }),
        defineField({ name: 'subParagraph', title: 'Sub Paragraph', type: 'text', description: 'Paragraph yang menjelaskan heading' }),
        defineField({
          name: 'hows',
          title: 'Points cara kerja Aviaventura',
          description: 'Poin singkat beberapa cara kerja Aviaventura',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'name', title: 'Point Name', type: 'string' }),
                defineField({ name: 'image', title: 'Gambar pelengkap', type: 'image' }),
                defineField({ name: 'description', title: 'Description', type: 'text' }),
              ],
            },
          ],
        }),
      ],
    }),

    // 3. WHY SECTION / DEDICATED TEAM
    defineField({
      name: 'dedicatedTeam',
      title: 'Dedicated Team Section',
      type: 'object',
      fields: [
        defineField({ name: 'subheading', title: 'Subheading', type: 'string', description: 'Judul kecil untuk section ini.', validation: rule => rule.required() }),
        defineField({ name: 'heading', title: 'Heading', type: 'string', description: 'Judul besar untuk section ini.', validation: rule => rule.required() }),
        defineField({ name: 'subParagraph', title: 'Sub Paragraph', type: 'text', description: 'Paragraph pendukung untuk judul section ini. (Boleh kosong)' }),
        defineField({
          name: 'advantages',
          title: 'Advantages',
          description: 'List value yang didapat ketika berpartner dengan AVIAVENTURA.',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),

    // 4. SERVICES SECTION
    defineField({
      name: 'servicesSection',
      title: 'Services Section',
      type: 'object',
      fields: [
        defineField({ name: 'subheading', title: 'Subheading', type: 'string', description: 'Judul kecil untuk section ini.', validation: rule => rule.required() }),
        defineField({ name: 'heading', title: 'Heading', type: 'string', description: 'Judul besar untuk section ini.', validation: rule => rule.required() }),
        defineField({ name: 'subParagraph', title: 'Sub Paragraph', type: 'text', description: 'Paragraph pendukung untuk judul section ini. (Boleh kosong)' }),
        defineField({
          name: 'services',
          title: 'Services',
          description: 'Klik untuk mengubah konten list of services.',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'name', title: 'Service Name', type: 'string' }),
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  fields: [defineField({ name: 'alt', type: 'string', title: 'Alt text' })],
                }),
                defineField({ name: 'icon', title: 'Service Icon', type: 'image' }),
                defineField({
                  name: 'activities',
                  title: 'Activities',
                  type: 'array',
                  of: [{ type: 'string' }],
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // 5. PARTNERSHIPS SECTION
    defineField({
      name: 'partnershipsSection',
      title: 'Local Travel Agent Partnerships Section',
      type: 'object',
      fields: [
        defineField({ name: 'subheading', title: 'Subheading', type: 'string', description: 'Judul kecil untuk section ini.', validation: rule => rule.required() }),
        defineField({ name: 'heading', title: 'Heading', type: 'string', description: 'Judul besar untuk section ini.', validation: rule => rule.required() }),
        defineField({ name: 'subParagraph', title: 'Sub Paragraph', type: 'text', description: 'Paragraph pendukung untuk judul section ini. (Boleh kosong)' }),
        defineField({
          name: 'partners',
          title: 'Partner Logos',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'agentName', title: 'Nama Agent', type: 'string' }),
                defineField({ name: 'agentLogo', title: 'Logo Agent', type: 'image' }),
              ],
            },
          ],
        }),
      ],
    }),

    // 6. EVENTS SECTION
    defineField({
      name: 'eventsSection',
      title: 'Events Section',
      description: 'Event-event yang rutin diselenggarakan oleh AVIAVENTURA',
      type: 'object',
      fields: [
        defineField({ name: 'subheading', title: 'Subheading', type: 'string', description: 'Judul kecil untuk section ini.', validation: rule => rule.required() }),
        defineField({ name: 'heading', title: 'Heading', type: 'string', description: 'Judul besar untuk section ini.', validation: rule => rule.required() }),
        defineField({ name: 'subParagraph', title: 'Sub Paragraph', type: 'text', description: 'Paragraph pendukung untuk judul section ini. (Boleh kosong)' }),
        defineField({
          name: 'events',
          title: 'Events',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Event Title', type: 'string', validation: rule => rule.required() }),
                defineField({ name: 'description', title: 'Event Description', type: 'text' }),
                defineField({
                  name: 'image',
                  title: 'Event Thumbnail Image',
                  type: 'image',
                  fields: [defineField({ name: 'caption', title: 'Caption', type: 'string' })],
                  validation: rule => rule.required(),
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
});
