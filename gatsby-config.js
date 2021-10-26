module.exports = {
    siteMetadata: {
        title: "My First Gatsby Site",
    },
    plugins: [
        "gatsby-plugin-image",
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                postCssPlugins: [
                    require("tailwindcss"),
                    require("./tailwind.config.js"),
                ],
            },
        },
        "gatsby-plugin-sharp",
    ],
};
