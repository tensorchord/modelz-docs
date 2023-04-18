import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>Modelz</span>,
  chat: {
    link: 'https://discord.gg/F4WnzqmeNj',
  },
  docsRepositoryBase: 'https://github.com/tensorchord/modelz-docs/tree/main',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Modelz'
      }
    }
  },
  banner: {
    key: 'modelz-release',
    text: (
      <a href="https://forms.gle/pqhGRv8iwTRF3TsY7" target="_blank" rel="noreferrer">
        🎉 Modelz is in alpha. Fill the form to apply →
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
    defaultMenuCollapseLevel: 2,
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
