import PostList from "@components/organism/PostList"

export function createPostListProps(allPostsMeta, subFolder) {
  const props = {
    titleSet: {
      main: "Works",
      sub: "Experiences."
    },
    contents: <PostList
      allPostsMeta={allPostsMeta}
      subFolder={subFolder}
    />,
  }

  return props
}