import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

/**
 * Get all markdowns' metadata (under the sub folder) using gray-matter.
 * 
 * @param {*} subFolder `string` The sub folder you want to get markdown files.
 * @returns array of metadata, including id, title, date
 */
export function getAllPostsMetaOf(subFolder) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory + '/' + subFolder)
  const allPostsData = (fileNames.map( (fileName) => {

    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory + '/' + subFolder, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    /*
      {
        id: 'test',
        title: 'When to Use Static Generation v.s. Server-side Rendering',
        date: '2020-01-02'
      }
    */
    return {
      id,
      ...matterResult.data
    }
  }))

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}


/**
 *  Get a specific markdown file matches the sub folder and file name as
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

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
  .use(html)
  .process(matterResult.content)
  const contentHtml = processedContent.toString()
  console.log(contentHtml)
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