import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

const postsDirectory = path.join(process.cwd(), 'posts')

/**
 * Get "all metadata" from markdown sources under the sub-folder.
 * 
 * @param {*} subFolder `string` The sub folder you want to get markdown files.
 * @returns array of metadata, including id, title, date
 */
export async function getAllPostsMetaOf(subFolder) {

  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory + '/' + subFolder)
  const allPostsData = await Promise.all(fileNames.map(async (fileName) => {

    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory + '/' + subFolder, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Create html description
    if ('description' in matterResult.data) {
      matterResult.data.descriptionHtml = await convertToHtml(matterResult.data.description)
    }

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  }))

  // Sort posts by larger priority < larger date
  return allPostsData.sort((a, b) => {
    const diffByPriority = comparePriority(a, b)

    if (diffByPriority == 0) {
      return compareDate(a, b)
    }

    return diffByPriority
  })
}

function comparePriority(a, b) {
  const aPriority = 'priority' ? a.priority : 0
  const bPriority = 'priority' ? b.priority : 0
  return - aPriority + bPriority
}

function compareDate(a, b) {
  return - a.date + b.date
}


/**
 *  Get "a single markdown file" matches under the sub folder and file name as
 *   - metadata by gray-matter.
 *   - rendered contents html by xxxx fix me.
 * 
 * @param {*} subFolder  `string` The sub folder you want to get markdown from. Eg, `common`
 * @param {*} id   `string` The file id (name without .md) you want to get. `abc` <- abc.md
 * @returns 
 */
export async function getSinglePostDataOf(subFolder, id) {

  // Read markdown file as string
  const fullPath = path.join(postsDirectory + '/' + subFolder, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)


  // Convert description to html
  if ('description' in matterResult.data) {
    matterResult.data.descriptionHtml = await convertToHtml(matterResult.data.description)
  }

  // Create html description
  const contentHtml = await convertToHtml(matterResult.content)

  return {
    id,
    contentHtml,
    ...matterResult.data
  }

}



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



async function convertToHtml(markdownContent) {
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .use(prism)
    // inline code
    .use(require('remark-prism'), {
      transformInlineCode: true,
    })
    .process(markdownContent)

  return processedContent.toString()
}
