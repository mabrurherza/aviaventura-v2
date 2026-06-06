import { defineField, defineType } from "sanity";

export const careerType = defineType({
    name: 'career',
    title: 'Career',
    type: 'document',
    fields: [
        defineField({
            name: 'jobTitle',
            title: 'Job Title',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'jobTitle',
                maxLength: 96,
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'department',
            title: 'Department',
            type: 'string',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            initialValue: 'On-site',
        }),
        defineField({
            name: 'employmentType',
            title: 'Employment Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Full-time', value: 'Full-time' },
                    { title: 'Part-time', value: 'Part-time' },
                    { title: 'Contract', value: 'Contract' },
                    { title: 'Internship', value: 'Internship' },
                ]
            }
        }),
        defineField({
            name: 'description',
            title: 'Job Description',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        defineField({
            name: 'requirements',
            title: 'Requirements',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            initialValue: 'open',
            options: {
                list: [
                    { title: 'Open', value: 'open' },
                    { title: 'Closed', value: 'closed' },
                ]
            }
        })
    ],
    preview: {
        select: {
            title: 'jobTitle',
            subtitle: 'department'
        }
    }
});
