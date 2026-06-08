import { defineField, defineType } from "sanity";

export default defineType({
    name: 'partnership',
    title: 'Partner Logo',
    description: 'Partnership or principle airline',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Partner Name',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Logo',
            type: 'image',
            options: { hotspot: true },
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
})
