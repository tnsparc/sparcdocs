import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],  // Leave header empty to allow default hamburger behavior
  afterBody: [Component.GlobalStyles()],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
  Component.Flex({
    components: [
      { Component: Component.ClubLogo() },
      { Component: Component.Search() },
      {
        Component: Component.Flex({
          components: [
            { Component: Component.Darkmode() },
            { Component: Component.ReaderMode() },
          ],
          direction: "row",
          gap: "0.5rem",
        }),
      },
    ],
    direction: "column",
    gap: "1rem",
  }),
  Component.Explorer(),
],

  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.ClubLogo(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Flex({
      components: [
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
      direction: "row",
      gap: "1.0rem",
    }),
    Component.Explorer(),
  ],
  right: [],
}
