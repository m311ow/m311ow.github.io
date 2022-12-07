---
datetime: 2022-12-07T00:12:01Z
author: ""
title: Forestry CMS test post
slug: forestry-test
featured: true
draft: false
tags:
  - "test "
ogImage: ""
description: test description
---

# **This is just a test**

## With cool headings and all that

> Perhaps some ome quotes too?

And of course a list

- with
- some
- items
- and one **VERY important** item

This is weird

````js
    export default defineConfig({
      site: "https://yoursitename.co/",
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
    ```
````

```json
{ "json": true }
```

```ts
interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;
// This comment should not be included

// ---cut---
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}

let a = createLabel("typescript");
```

### Deployment test test test
