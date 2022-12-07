---
datetime: 2022-12-07T00:12:01Z
author: ''
title: Forestry CMS test post
slug: forestry-test
featured: true
draft: false
tags:
- 'test '
ogImage: ''
description: test description

---
# **This is just a test**

## With cool headings and all that

> Perhaps some ome quotes too?

And of course a list

* with
* some
* items
* and one **very important** item

    export default defineConfig({
      site: "https://yoursite.co/",
      integrations: [
        tailwind({
          config: {
            applyBaseStyles: false,
          },
        }),
        react(),
        sitemap(),
      ],
      markdown: {
        remarkPlugins: [
          remarkToc,
          [
            remarkCollapse,
            {
              test: "Table of contents",
            },
          ],
        ],
        shikiConfig: {
          theme: "one-dark-pro",
          wrap: true,
        },
        extendDefaultPlugins: true,
      },
    });