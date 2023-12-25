/* eslint-disable @typescript-eslint/indent */
import { defineComponent, h, onMounted, toRaw } from 'vue'
import { ThemeProvider, createTheme } from '@interface-ui/theme'
import theme from 'vitepress/theme'
import TeamMember from '../components/team-member'

export default defineComponent({
  name: 'Layout',
  setup() {
    const uiTheme = createTheme()
    onMounted(() => {
      window.theme = toRaw(uiTheme.value)

      const html = document.documentElement
      const toggleTheme = () => {
        if (html.classList.contains('dark')) {
          uiTheme.value.mode = 'dark'
        } else {
          uiTheme.value.mode = 'light'
        }
      }

      toggleTheme()

      const observer = new MutationObserver(() => {
        toggleTheme()
        observer.takeRecords()
      })

      observer.observe(html, {
        attributes: true,
        childList: false,
        subtree: false,
      })
    })

    return () =>
      typeof window === 'undefined'
        ? null
        : h(ThemeProvider, { theme: uiTheme.value }, () =>
            h(theme.Layout, null, {
              'home-features-after': () => h(TeamMember),
            })
          )
  },
})
