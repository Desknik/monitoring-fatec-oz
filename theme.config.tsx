import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head:(
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Mentoria DSM - Fatec OZ" />
      <meta property="og:description" content="Blog com conteúdos das aulas de monitoria ministradas no curso de Desenvolvimento de Software na Fatec Osasco" />
      <link rel="apple-touch-icon" sizes="180x180" href="public\apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="public\favicon-16x16.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="public\favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
    </>
  ),
  logo: <h2 style={{fontWeight: 'bold'}}>Mentory 📖</h2>,
  project: {
    link: 'https://github.com/Desknik/Monitoring',
  },
  chat: {
    link: 'https://discord.gg/thtgt56wJc',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: '🧙‍♂️ Adagomir exists!',
  }

}


export default config
