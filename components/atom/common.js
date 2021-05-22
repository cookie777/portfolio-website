import styled from 'styled-components'
import { device } from '@styles/device'
import Image from 'next/image'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
/* Use `…/dist/cjs/…` if you’re not in ESM! */
import dark from '@styles/dark'

export const H1 = styled.h1`
  font-weight: 900;
  font-size: 24px;
  @media ${device.tablet} { 
    font-size: 32px;
  }
`
export const H2 = styled.h2`
  font-weight: 800;
  font-size: 18px;
  @media ${device.tablet} { 
    font-size: 24px;
  }
`

export const H3 = styled.h3`
  font-weight: 800;
  font-size: 16px;
  @media ${device.tablet} { 
    font-size: 18px;
  }
`
export const P = styled.p`
  font-weight: 400;
  font-size: 13px;
  @media ${device.tablet} { 
    font-size: 16px;
  }
`

export const Img = styled.img`
  max-width: 100%;
`

// const Wrapper = styled.div`
//   /* position: relative; */
//   max-width: 100px;
//   min-width: 100px;
// `

// const MDImage = (image) => {
//   return (
//     <Wrapper>
//       <Image src={image.src} alt={image.alt} layout='fill' />
//     </Wrapper>
//   )
// }

// export const Wrapper = styled.div`
//   overflow: auto;
//   max-width: 100%;
//   height: auto;
// `

export const Pre = styled.pre`
  overflow-x: auto !important;
  /* white-space: pre-wrap !important;
  display: inline-block !important;  */
  width: 100% !important;
`

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={dark}>
      {value}
    </SyntaxHighlighter>
  )
}


export const components = {
  p: P,
  h1: H1,
  h2: H2,
  h3: H3,
  img: Img,
  pre: (pre) => {
    return (
      // <Wrapper>
      <pre>
        {pre.children}
      </pre>
      // </Wrapper>
    )
  },
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        wrapLines={true}
        style={dark}
        language={match[1]}
        lineProps={lineNumber => ({
          style: { display: 'block' }
        })}
        // PreTag="div"
        children={String(children).replace(/\n$/, '')} {...props}
      />
    ) : (
      <code className={className} {...props} />

    )
  }
};


// https://github.com/vercel/next.js/discussions/18739#discussioncomment-344932 
//
//+
//
// p: (paragraph) => {
  //   const { node } = paragraph;
  //   console.log(node)
  //   if (node.children[0].tagName === "img") {
  //     const image = node.children[0].properties;
  //     return (
  //       <div style={{
  //         width: "300px"
  //       }}>
  //         <Image src={image.src} alt={image.alt} layout="fill" objectFit="none" />
  //       </div>

  //     );
  //   }

  //   return <p>{paragraph.children}</p>;
  // },
  // + for loop

  // .imageContainer {
  //   width: 100%;

  //   > div {
  //     position: unset !important;
  //   }

  //   .image {
  //     object-fit: contain;
  //     width: 100% !important;
  //     position: relative !important;
  //     height: unset !important;
  //     z-index: -1;
  //   }
  // }