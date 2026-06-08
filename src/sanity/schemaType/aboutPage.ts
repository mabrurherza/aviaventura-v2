import { defineField, defineType } from "sanity";

export default defineType({
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            hidden: ({ document }) => !document?.title,
        }),
        defineField({
            name: 'content',
            title: 'Konten About Us',
            type: 'object',
            fields: [
                defineField({ name: 'paragraph', title: 'Paragraf untuk About Us', type: 'text' }),
                defineField({ name: 'mainImage', title: 'Gambar team utuh', type: 'image' })
            ]
        }),
        defineField({
            name: 'statistics',
            title: 'Aviaventura dalam angka',
            type: 'object',
            description: 'Angka estimasi/kurang lebih',
            fields: [
                defineField({ name: 'airlines', title: 'Total airlines being handled', type: 'number' }),
                defineField({ name: 'experiences', title: 'Years of Experience', type: 'number' }),
                defineField({ name: 'events', title: 'Events hosted', type: 'number' }),
                defineField({ name: 'passengers', title: 'Passengers served', type: 'string' }),
                defineField({ name: 'partners', title: 'Travel agency partners', type: 'number' }),
            ]
        }),
         defineField({
            name: 'teamMembers',
            title: 'Team Members',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'name', title: 'Name', type: 'string' }),
                        defineField({ name: 'position', title: 'Position', type: 'string' }),
                        defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
                        defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
                    ],
                    preview: {
                        select: {
                            title: 'name',
                            subtitle: 'position',
                            media: 'photo',
                        },
                    },
                }
            ]
        }),

    ],
})
