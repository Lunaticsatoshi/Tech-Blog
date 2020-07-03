const { slugify } = require('./src/util/utilityfunctions');
const authors = require('./src/util/authors');
const path = require('path');
const _ = require('lodash')

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
    postList: path.resolve('src/templates/post-list.js'),
    tag: path.resolve('src/templates/tag-posts.js'),
    tagsPage: path.resolve('src/templates/tags-page.js'),
    authorPosts: path.resolve('src/templates/author-posts.js'),
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

  //Get The Tags
  let tags = [];
  _.each(posts, edge => {
    if (_.get(edge, 'node.frontmatter.tags')) {
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })

  let tagPostCounts = {} // { tech: 2, design: 1}
  tags.forEach(tag => {
    // 0 if it does not exist yet
    tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1;
  })

    // Remove duplicates tags
    tags = _.uniq(tags);

    //create the tags page
    createPage({
      path: '/tags',
      component: templates.tagsPage,
      context: {
        tags,
        tagPostCounts,
      },
    })

    //Create tags Page
    tags.forEach(tag => {
      createPage({
        path: `/tag/${_.kebabCase(tag)}`,
        component: templates.tag,
        context: {
          tag,
        },
      })
    })

    //create Posts per page for Pagination
    const postsPerPage = 2
    const numberOfPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numberOfPages }).forEach((_, index) => {
      const isFirstPage = index === 0
      const currentPage = index + 1
  
      // Skip the first page because of index.js
      if (isFirstPage) return
  
      createPage({
        path: `/page/${currentPage}`,
        component: templates.postList,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numberOfPages: numberOfPages,
          currentPage: currentPage,
        },
      })
    })

      // Creating the author pages
  authors.forEach(author => {
    createPage({
      path: `/author/${slugify(author.name)}`,
      component: templates.authorPosts,
      context: {
        authorName: author.name,
        imageUrl: author.imageUrl,
      },
    })
  })
}