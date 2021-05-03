export default {
    type: "document",
    name: "youtube",
    title: "Stand-alone Youtube Video",
    fields: [{
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        { type: "youtubeLink", name: 'youtube_video' },
        {
            title: 'Author(s)',
            name: 'authors',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'author' }] }, ]
        },
        {
            title: 'Tags',
            name: 'tags',
            type: 'tags',
        },
        {
            title: 'Is Hidden',
            name: 'isHidden',
            type: 'isHidden',
        },

    ],
    initialValue: { isHidden: true },
    preview: {
        select: {
            title: 'title'
        }
    }
}