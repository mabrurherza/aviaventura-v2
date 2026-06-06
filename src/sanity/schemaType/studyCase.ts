import { defineField, defineType } from "sanity";

export default defineType({
    name: 'studyCase',
    title: 'Case Studies',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Judul Case Study',
            type: 'string',
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            description: 'Paragraf kecil sebagai summary dari case study ini',
            type: 'text',
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
            validation: rule => rule.required()
        }),
        defineField({
            name: 'airline',
            title: 'Nama airline principal',
            type: 'string',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'airlineLogo',
            title: 'Gambar logo airline',
            type: 'image',
        }),
        defineField({
            name: 'since',
            title: 'Menjadi partner sejak tahun:',
            type: 'number',
            validation: rule => rule.required().min(2015).max(2050)
        }),
        defineField({
            name: 'office',
            title: 'Alamat kantor',
            type: 'text',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'images',
            title: 'Gambar gambar pendukung',
            type: 'array',
            of: [defineField({ name:'image', type: 'image' })]
        }),
        defineField({
            name: 'team',
            title: 'Team yang menjalankan office airline ini:',
            type: 'array',
            of: [
                defineField({
                    name: 'teamMember',
                    type: 'object',
                    fields: [
                        defineField({ name: 'nama', title: 'Nama', type: 'string' }),
                        defineField({ name: 'foto', title: 'Foto', type: 'image' }),
                        defineField({ name: 'position', title: 'Jabatan', type: 'string' }),
                        defineField({ name: 'linkedinUrl', title: 'URL Linkedin', type: 'url' })
                    ]
                })
            ]
        }),
        defineField({
            name: 'content',
            title: 'Isi/Konten berita',
            type: 'array',
            of: [defineField({ name: 'block', type: 'block' })],
            validation: rule => rule.required()
        })
    ]
})
