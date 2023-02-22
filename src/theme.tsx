import { ThemeConfig } from 'nextra'
import { useRouter } from 'next/router'

import Logo from './components/Logo'

const title = 'Yang Components'

const config: ThemeConfig = {
  logo: <Logo />,
  project: {
    link: 'https://github.com/MagnumGoYB/yang-components-site'
  },
  feedback: {
    content: '有疑问？给我反馈 →'
  },
  editLink: {
    text: '在 GitHub 上编辑本页 →'
  },
  toc: {
    title: '本页目录'
  },
  sidebar: {
    toggleButton: true
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: `%s | ${title}`
      }
    } else {
      return {
        titleTemplate: title
      }
    }
  }
}

export default config
