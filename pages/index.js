import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

const Home = ({ posts }) => {
  return (
    <div className="mt-5">
      {posts.map((post, index) => (
        <Link href={"/blog/" + post.slug}>
          <div className="card mb-3 pointer" key={index} style={{maxWidth: "540px"}}>
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{post.frontMatter.title}</h5>
                  <p className="card-text">{post.frontMatter.description}</p>
                  <p className="card-text">
                    <small className="text-muted">{post.frontMatter.date}</small>
                  </p>
                </div>
              </div>
              <div className="col-md-4 m-auto">
                <img src={post.frontMatter.thumbnailUrl} className="img-fluid rounded-start" alt="..." />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  return {
    props: {
      posts
    }
  }
}

export default Home
