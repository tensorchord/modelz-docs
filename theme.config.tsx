import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <img src="/logo.svg" style={{width: "140px"}} alt='modelz'/>,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="ModelZ" />      
      <meta property="og:description" content="Deploy your machine learning models effortlessly on a pay-as-you-go serverless infrastructure." />      
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    </>
  ),

  darkMode: false,

  chat: {
    link: 'https://discord.gg/F4WnzqmeNj',
  },
  docsRepositoryBase: 'https://github.com/tensorchord/modelz-docs/tree/main',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – ModelZ'
      }
    }
  },
  banner: {
    key: 'modelz-release',
    text: (
      <a href="https://cloud.modelz.ai" target="_blank" rel="noreferrer">
        🎉 ModelZ is in beta! Sign up now →
      </a>
    )
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    defaultMenuCollapseLevel: 3,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} TensorChord Inc.
        </p>
      </div>
    )
  }
}

export default config
