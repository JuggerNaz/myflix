// pages/_app.js
import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <Head>
                    <title>myFlix</title>
                    <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,700,900&display=swap" rel="stylesheet" />
                </Head>
                <Component {...pageProps} />
                <style global jsx>{`
                body {
                    font-family: 'Nunito', sans-serif;
                    later-spacing: 0.5px;
                }
                `}</style>
            </Container>
        )
    }
}