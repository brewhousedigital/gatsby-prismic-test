import * as React from 'react'
import { graphql } from 'gatsby'


import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { HomepageBanner } from '../components/HomepageBanner'
import { MainContent } from '../components/MainContent'

const Homepage = ({data}) => {
    if(!data) return null;
    const doc = data.prismicHomepage.data;

    return(
        <Layout isHomepage>
            <Seo title="Home" />
            <HomepageBanner
                title={doc.banner_title.text}
                description={doc.banner_description.text}
                linkURL={doc.banner_link.url}
                linkLabel={doc.banner_link_label.text}
                backgroundURL={doc.banner_background.url} />
            <MainContent />
        </Layout>
    )
}

export const query = graphql`
query HomepageBanners {
    prismicHomepage {
        data {
            banner_title {text},
            banner_description {text},
            banner_link {url, type, uid},
            banner_link_label {text},
            banner_background {url}
        }
    }
}
`

export default Homepage