const { slugify } = require('./src/util/utilityfunctions');
const authors = require('./src/util/authors');
const path = require('path')

exports.onCreateNode = ({ node, actions }) => {
    const  { createNodeField } = actions
    if (node.internal.type == 'MarkdownRemark'){
        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
            node,
            name: 'slug',
            value: slugFromTitle,
        })
    }
}

exports.createPages = async ({ actions, graphql}) => {
    const { createPage } = actions;
    const singlePostTemplate = path.resolve('src/templates/single_post.js')

     // Page templates
  const templates = {
    post: path.resolve('src/templates/single_post.js'),
  }

    const res = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (res.errors) return Promise.reject(res.errors)

  // Extracting all posts from res
  const posts = res.data.allMarkdownRemark.edges

  // Creating single post pages
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: templates.post,
      context: {
        // Passing slug for template to use to fetch the post
        slug: node.fields.slug,
        // Find author imageUrl from list of authors and pass it to single post template
        imageUrl: authors.find(x => x.name === node.frontmatter.author).imageUrl,
      },
    })
  })
}