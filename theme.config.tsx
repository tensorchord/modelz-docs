import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Modelz</span>,
  project: {
    link: 'https://modelz.ai',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/tensorchord/modelz-docs',
  footer: {
    text: '@TensorChord Inc.',
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
  },
}

export default config
