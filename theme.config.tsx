import type { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <strong>Knowledge Stack</strong>,
  project: {
    link: "https://github.com/knowledgestack/ks-docs",
  },
  docsRepositoryBase:
    "https://github.com/knowledgestack/ks-docs/tree/main/pages",
  footer: {
    content: <span>Knowledge Stack {new Date().getFullYear()}</span>,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Knowledge Stack Documentation" />
      <meta name="og:title" content="Knowledge Stack Docs" />
    </>
  ),
  sidebar: { defaultMenuCollapseLevel: 1 },
  toc: { backToTop: true },
  editLink: { content: "Edit this page on GitHub" },
  feedback: { content: null },
};

export default config;
