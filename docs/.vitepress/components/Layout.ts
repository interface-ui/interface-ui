/* eslint-disable @typescript-eslint/indent */
import { defineComponent, h, onMounted, toRaw } from 'vue'
import { ThemeProvider, createTheme } from '@interface-ui/theme'
import theme from 'vitepress/theme'
import { inBrowser } from 'vitepress'
import TeamMember from '../components/team-member'

export default defineComponent({
  name: 'Layout',
  setup() {
    const uiTheme = createTheme()
    onMounted(() => {
      // eslint-disable-next-line @typescript-eslint/no-extra-semi
      ;(window as any).theme = toRaw(uiTheme.value)

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
      inBrowser
        ? h(ThemeProvider, { theme: uiTheme.value }, () =>
            h(theme.Layout, null, {
              'home-features-after': () => h(TeamMember),
            }),
          )
        : null
  },
})
