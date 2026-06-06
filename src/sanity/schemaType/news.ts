import { defineField, defineType } from "sanity";

export default defineType({
    name: 'news',
    title: 'Newsfeed',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Judul Berita',
            type: 'string',
            validation: rule => rule.required()
        }),
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
            name: 'thumbnail',
            title: 'Gambar Utama',
            type: 'image',
            validation: rule => rule.required(),
            fields: [
                defineField({
                    name: 'caption',
                    type: 'string',
                    title: 'Alternate text atau caption gambar thumbnail',
                }),
            ]
        }),
        defineField({
            name: 'excerpt',
            title: 'excerpt',
            description: 'Paragraph kecil untuk summary beritanya',
            type: 'text'
        }),
        defineField({
            name: 'images',
            title: 'Gambar gambar pendukung',
            type: 'array',
            of: [defineField({ type: 'image' })]
        }),
        defineField({
            name: 'content',
            title: 'Isi/Konten berita',
            type: 'array',
            of: [defineField({ type: 'block' })],
            validation: rule => rule.required()
        })
    ]
});
