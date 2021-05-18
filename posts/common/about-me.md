---
title: 'About me'
date: '2021-02-03'
---

"😊😊😊😊😊"   Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

<!-- ![alt text](https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg)
![alt text](https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg)
![alt text](https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg)
![alt text](https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg) -->

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

```js
const doc = getDocBySlug(params.slug);
```

```js
console.log("abc")
export function getAllPostIdsFrom(subFolder) {
  const fileNames = fs.readdirSync(postsDirectory + '/' + subFolder)

  // Returns an array that looks like this:
  /*
    [
      {
        params: {
          id: 'ssg-ssr'
        }
      },
      {
        params: {
          id: 'pre-rendering'
        }
      }
    ]
  */
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

```

```css
pre[class*="language-"],
code[class*="language-"] {
	color: #d4d4d4;
	font-size: 13px;
	text-shadow: none;
	font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace;
	direction: ltr;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	line-height: 1.5;
	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;
	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}
```
