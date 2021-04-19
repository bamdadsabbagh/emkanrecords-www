import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '@/lib/gtag'

class EmkanDocument extends Document {

    render () {

        return (
            <Html lang="en">
                <Head>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{ '__html': `function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","${GA_TRACKING_ID}",{page_path:window.location.pathname});` }}/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )

    }

}

export default EmkanDocument