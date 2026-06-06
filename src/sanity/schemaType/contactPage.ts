import { defineField, defineType } from "sanity";

export default defineType({
    name: 'contactPage',
    title: 'Contact Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            hidden: ({ document }) => !document?.title
        }),
        defineField({
            name: 'contactInfo',
            title: 'Contact Information',
            type: 'object',
            fields: [
                defineField({ name: 'address', title: 'Alamat Kantor', type: 'text', description: 'Buat line break dengan koma (,)' }),
                defineField({ name: 'email', title: 'Email', type: 'array', of: [{ type: 'string' }] }),
                defineField({ name: 'phone', title: 'Phone Number', description: 'Tanpa (+6221)', type: 'array', of: [{ type: 'number' }] }),
            ],
        }),
    ],
});
