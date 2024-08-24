import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },

  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "language",
        label: "Languages",
        path: "content/languages",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
          },
        ],
      },
      {
        name: "project",
        label: "Projects",
        path: "content/projects",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            label: "Language",
            name: "lang",
            type: "reference",
            collections: ["language"],
            required: true,
          },
          {
            type: "string",
            name: "link",
            label: "Link",
          },
          {
            type: "image",
            name: "image",
            label: "Main image",
            required: true,
          },
          {
            type: "image",
            name: "thumbnail",
            label: "Thumbnail",
            required: true,
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            isBody: true,
          },
        ],
      },
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            name: "blocks",
            label: "Blocks",
            type: "object",
            list: true,
            templates: [
              {
                name: "welcome_hero",
                label: "Welcome Hero",
                fields: [
                  {
                    name: "message",
                    label: "Message",
                    type: "rich-text",
                  },
                  {
                    name: "button_text",
                    label: "Button text",
                    type: "string",
                  },
                ],
              },
              {
                name: "about",
                label: "About",
                fields: [
                  {
                    name: "title",
                    label: "Title",
                    type: "string",
                  },
                  {
                    name: "body",
                    label: "Body",
                    type: "rich-text",
                  },
                  {
                    name: "nation",
                    label: "Born in",
                    type: "string",
                  },
                  {
                    name: "button_text",
                    label: "Button text",
                    type: "string",
                  },
                ],
              },
              {
                name: "services",
                label: "Services",
                fields: [
                  {
                    name: "title",
                    label: "Title",
                    type: "string",
                  },
                  {
                    name: "description",
                    label: "Description",
                    type: "rich-text",
                  },
                  {
                    type: "object",
                    name: "button",
                    label: "Button",
                    fields: [
                      {
                        type: "string",
                        name: "name",
                        label: "Name",
                        required: true,
                      },
                      {
                        type: "string",
                        name: "path",
                        label: "Path",
                        required: true,
                      },
                    ],
                  },
                  {
                    name: "services",
                    label: "Services",
                    type: "object",
                    list: true,
                    fields: [
                      {
                        type: "string",
                        name: "title",
                        label: "Title",
                        required: true,
                      },
                      {
                        type: "string",
                        name: "description",
                        label: "Description",
                      },
                      {
                        type: "image",
                        name: "image",
                        label: "Image",
                        required: true,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "nav_links",
        label: "Navbar links",
        path: "content/nav_links",
        format: "md",
        fields: [
          {
            type: "object",
            name: "links",
            label: "Links",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Name",
                required: true,
              },
              {
                type: "string",
                name: "path",
                label: "Path",
                required: true,
              },
            ],
          },
        ],
      },
    ],
  },
});
