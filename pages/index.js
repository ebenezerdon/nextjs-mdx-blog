import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import styles from '../styles/Home.module.css'

export default function Home({ posts }) {
  console.log(posts)
  return (
    <div className={styles.container}>
      {posts.map((post, index) => (
        <h3 key={index}>{post.frontMatter.title}</h3>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))

  console.log(files)

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return { frontMatter }
  })

  return {
    props: {
      posts
    }
  }
}
