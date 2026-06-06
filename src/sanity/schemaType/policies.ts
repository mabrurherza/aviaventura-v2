import { defineField, defineType } from "sanity";

export default defineType({
    name: 'policies',
    title: 'Policies',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'name', title: 'Policy Name', type: 'string' }),
        defineField({ name: 'number', title: 'Document Number', type: 'string' }),
        defineField({
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200,
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        }),
        defineField({
            name: 'content',
            title: 'Policy Content',
            type: 'array',
            of: [defineField({ name: 'block', type: 'block' })],
            validation: rule => rule.required()
        }),
        defineField({
            name: 'signature',
            title: 'Tanda Tangan basah',
            description: 'Tanda tangan jika ada. (dalam bentuk image)',
            type: 'image'
        }),
        defineField({
            name: 'pdf',
            title: 'PDF',
            description: 'Upload PDF jika ada',
            type: 'file',
            fields: [
                defineField({ name: 'description', type: 'string', title: 'Description' }),
            ]
        })
    ],
});
