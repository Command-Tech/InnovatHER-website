import React from 'react'
import { Helmet } from 'react-helmet'

const Head = () => {
    return (
        <Helmet>
            <title>InnovatHER | Community Highlights</title>
            <meta name="description" content="Command Tech x Girl Genius Community Highlights Project." />

            {/* OpenGraph tags */}
            <meta property="og:url" content="https://innovather.vercel.app" />
            <meta property="og:title" content="InnovatHER | Community Highlights" />
            <meta property="og:description" content="Command Tech x Girl Genius Community Highlights Project." />

            {/* Twitter Card tags */}
            <meta name="twitter:title" content="Ella | Portfolio" />
            <meta name="twitter:description" content="Command Tech x Girl Genius Community Highlights Project." />
        </Helmet>
    )
}

export default Head