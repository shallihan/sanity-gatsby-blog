export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "613b1d9de092cd98990e4da5",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-v1bu3gmb",
                  apiId: "e4c67973-bdbd-4925-983b-9e30fbf266f3",
                },
                {
                  buildHookId: "613b1d9d6a6eea96521c28ab",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-hkuxapnj",
                  apiId: "e67e1318-2689-4d79-96cb-19d0d404b444",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/shallihan/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-hkuxapnj.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
