export const config = {
    baseUrl: import.meta.env.VITE_BASE_URL
}

export const siteSeoBase = {
    title: 'SoTrade.One',
    description: 'Stock and Options trade log platform',
    keywords: 'stocks, options, stock market, trading',
    canonical: import.meta.env ? import.meta.env.VITE_SITE_URL : 'https://www.sotrade.one'
};

export const siteSeoOpenGraphBase = {
    title: 'SoTrade.One',
    description: 'Stock and Options trade log platform',
    url: import.meta.env ? import.meta.env.VITE_SITE_URL : '',
    type: 'website',
    images: [
        {
            url: 'https://www.sotrade.one/images/og-image.jpg',
            width: 850,
            height: 650,
            alt: 'Og Image Alt'
        }
    ]
};

export const siteSeoOpenGraphArticle = {
    type: 'article',
    article: {
        publishedTime: "2020-08-03T17:31:37Z",
        modifiedTime: "2020-08-20T09:31:37Z",
        expirationTime: "2025-12-21T17:31:37Z",
        section: "Section II",
        authors: [
          "https://www.example.com/authors/@firstnameA-lastnameA",
          "https://www.example.com/authors/@firstnameB-lastnameB",
        ],
        tags: ["Tag A", "Tag B", "Tag C"],
    }
}

export const siteSeoTwitter = {
    site: "@username",
    title: "Twitter Card Title",
    description: "Description of Twitter Card",
    image: "https://www.example.com/images/cover.jpg",
    imageAlt: "Alt text for the card!",
}
