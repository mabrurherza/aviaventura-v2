import { defineField, defineType } from "sanity";

export default defineType({
    name: 'page',
    type: 'document',
    title: 'Page',
    fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } }),
        defineField({ name: 'pageType', type: 'string', title: 'Page Type', options: { list: ['homepage', 'about', 'contact'] } }),
        defineField({
            name: 'contentSections',
            type: 'array',
            title: 'Content Sections',
            of: [
                { type: 'whySection' },
                { type: 'testimonialsSection' },
                { type: 'genericTextSection' },
            ],
        }),
    ],
});

export const whySection = defineType({
    name: 'whySection',
    type: 'object',
    title: 'Why Section',
    fields: [
        defineField({ name: 'title', type: 'string', title: 'Section Title' }),
        defineField({ name: 'description', type: 'text', title: 'Description' }),
    ],
});

export const testimonialsSection = defineType({
    name: 'testimonialsSection',
    type: 'object',
    title: 'Testimonials Section',
    fields: [
        defineField({ name: 'testimonials', type: 'array', of: [{ type: 'testimonial' }] }),
    ],
});

export const testimonial = defineType({
    name: 'testimonial',
    type: 'object',
    title: 'Testimonial',
    fields: [
        defineField({ name: 'quote', type: 'text', title: 'Quote' }),
        defineField({ name: 'author', type: 'string', title: 'Author' }),
        defineField({ name: 'role', type: 'string', title: 'Role / Company', description: 'Optional' }),
    ],
});

export const genericTextSection = defineType({
    name: 'genericTextSection',
    type: 'object',
    title: 'Generic Text Section',
    fields: [
        defineField({ name: 'heading', type: 'string', title: 'Heading' }),
        defineField({ name: 'body', type: 'text', title: 'Body' }),
    ],
});
