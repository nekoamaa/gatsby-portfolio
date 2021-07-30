import React from "react"
import { Link } from "gatsby"
import { Calendar } from 'react-feather'
import Img from "gatsby-image"
import { WorkPost, PostTitle, PostText, SmallText, ReadMore } from "../common"

function BlogPost({ node }) {
    const title = node.frontmatter.title || node.fields.slug
    return (
        <WorkPost key={node.fields.slug}>
            <div className="content">
                <header>
                    <Link to={node.fields.slug}>
                        <Img fluid={node.frontmatter.image.childImageSharp.fluid} title="work title" />
                    </Link>
                    <PostTitle>
                        <Link className="text-primary" style={{ boxShadow: `none` }} to={node.fields.slug}>
                            {title}
                        </Link>
                    </PostTitle>
                    <SmallText>
                        <Calendar className="align-middle text-primary" width="18" height="18" />
                        <span className="align-middle"> {node.frontmatter.date} </span>
                    </SmallText>
                </header>
                <PostText
                    dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                    }}
                />
                <Link to={node.fields.slug}>
                    <ReadMore className="lined-link"> read more &#8594; </ReadMore>
                </Link>
            </div>
        </WorkPost>
    )
}

export default BlogPost