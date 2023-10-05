import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "5cefe103-1422-4fb1-8332-275706931ce3", // Get this from tina.io
  token: "d585ec447f11f4a398e79246c0151c94fcba8f42", // Get this from tina.io

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
  schema: {
    collections: [
      {
        name: "authors",
        label: "Autor",
        path: "data/authors",
        format: 'mdx',
        fields: [
          {
            type: "string",
            name: "name",
            label: "Nome",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "avatar",
            label: "Avatar",
            required: false,
          },
          {
            type: "string",
            name: "occupation",
            label: "Ocupação",
            required: false,
          },
          {
            type: "string",
            name: "company",
            label: "Empresa",
            required: false,
          },
          {
            type: "string",
            name: "email",
            label: "Email",
            required: false,
          },
          {
            type: "string",
            name: "twitter",
            label: "Twitter",
            required: false,
          },
          {
            type: "string",
            name: "linkedin",
            label: "Linkedin",
            required: false,
          },
          {
            type: "string",
            name: "github",
            label: "Github",
            required: false,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "blog",
        label: "Posts",
        path: "data/blog",
        format: 'mdx',
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titulo",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: false,
          },
          {
            type: "string",
            name: "tags",
            label: "tags",
            list: true,
            required: false,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Rascunho ?",
            required: true,
          },
          {
            type: "string",
            name: "summary",
            label: "Sumario",
            required: false,
          },
          {
            type: "string",
            name: "authors",
            label: "Autores",
            list: true,
            required: false,
          },
          {
            type: "image",
            name: "images",
            label: "Imagens",
            list:true,
            required: false,
          },
          {
            type: "string",
            name: "bibliography",
            label: "Bibliografia",
            required: false,
          },
          {
            type: "datetime",
            name: "lastmod",
            label: "Ultima mudança",
            required: false,
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: false,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
