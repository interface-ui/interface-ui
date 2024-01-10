<script lang="ts" setup>
import '@core/drawer/src/index.less'
import { InDrawer, InButton, InTypography, InIconButton } from '@core'
import {
  ComponentDirections,
  componentDirections,
} from '@interface-ui/constants'
import { ref, shallowRef } from 'vue'
import LocalFireDepartment from '@interface-ui/icons/LocalFireDepartmentFilled'
import Apps from '@interface-ui/icons/AppsFilled'
import Code from '@interface-ui/icons/CodeFilled'
import Foundation from '@interface-ui/icons/FoundationFilled'
import Palette from '@interface-ui/icons/PaletteFilled'
import AddCircle from '@interface-ui/icons/AddCircleFilled'
import Stars from '@interface-ui/icons/StarsFilled'
import Menu from '@interface-ui/icons/MenuFilled'
import { styled } from '@interface-ui/theme'

const openTemporary = ref(false)
const openPersistent = ref(false)
// const open = ref(false)
const placement = ref<ComponentDirections>('top')
const onClick = (p: ComponentDirections) => {
  placement.value = p
  openTemporary.value = true
}
const list = shallowRef([
  { icon: LocalFireDepartment, text: 'Home' },
  { icon: Apps, text: 'Get Started' },
  { icon: Code, text: 'Develop' },
  { icon: Foundation, text: 'Foundations' },
  { icon: Palette, text: 'Styles' },
  { icon: AddCircle, text: 'Components' },
  { icon: Stars, text: 'Blogs' },
])

const Box = styled('div')`
  display: flex;
  position: relative;
  max-width: 45vw;
`
const DrawerHeader = styled('div')`
  height: 64px;
`
const AppBar = styled('header')(theme => ({
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  gap: '16px',
  boxShadow: theme.elevations[4],
  position: 'absolute',
  padding: '0 16px',
  backgroundColor: theme.schemes.primaryContainer,
  inset: '0',
  zIndex: theme.zIndex.appBar,
}))

// @ts-ignore
const MainSection = styled('main')(theme => ({
  flexGrow: 1,
  padding: '80px 16px 0',
  // marginLeft: '-250px',
  // ...(openPersistent.value && {
  //   transition: theme.motion.create(['margin'], {
  //     duration: theme.motion.duration[250],
  //     timingFunction: theme.motion.timingFunction['easing-linear'],
  //   }),
  //   marginLeft: 0,
  // }),
}))
</script>

<template>
  <!-- Temporary -->
  <div class="content">
    <in-button
      v-for="placement in componentDirections"
      :key="placement"
      variant="text"
      @click="onClick(placement)"
    >
      {{ placement }}
    </in-button>
  </div>
  <in-drawer
    :open="openTemporary"
    :placement="placement"
    @close="openTemporary = false"
    :backdrop="false"
  >
    <in-list
      :cs="{ width: ['top', 'bottom'].includes(placement) ? 'auto' : '250px' }"
    >
      <in-list-item v-for="item in list" :key="item.text">
        <template #leading="{ icon }">
          <component :is="item.icon" v-bind="icon" />
        </template>
        {{ item.text }}
      </in-list-item>
    </in-list>
  </in-drawer>

  <!-- Persistent -->
  <box>
    <app-bar>
      <in-icon-button @click="openPersistent = !openPersistent">
        <menu />
      </in-icon-button>
      <in-typography variant="title.medium" component="h1">
        Ea quis labore qui
      </in-typography>
    </app-bar>
    <in-drawer
      variant="persistent"
      :open="openPersistent"
      placement="left"
      @close="openPersistent = false"
      cs="flex: 0 0 auto; background-color: transparent"
    >
      <drawer-header />
      <in-list
        :cs="{ width: '250px', borderRadius: 0, background: 'transparent' }"
      >
        <in-list-item v-for="item in list" :key="item.text">
          <template #leading="{ icon }">
            <component :is="item.icon" v-bind="icon" />
          </template>
          {{ item.text }}
        </in-list-item>
      </in-list>
    </in-drawer>
    <main-section>
      <in-typography>
        Irure esse consequat nostrud aliqua id aute qui. Aliquip ipsum Lorem
        ipsum fugiat. Consequat fugiat fugiat nulla ullamco consequat do velit
        quis cillum aliquip. Culpa laboris deserunt occaecat ea officia. Nulla
        voluptate in veniam dolor proident nisi laborum sit dolore in ipsum
        proident id irure. Elit dolor dolor elit ullamco. Voluptate nostrud
        commodo do velit officia dolor sit et. Ex et quis consectetur pariatur
        elit in. Ex ullamco Lorem veniam laborum occaecat sint ullamco sit. Ad
        nisi deserunt do do. Id consectetur magna occaecat consequat adipisicing
        in do eu eu fugiat nostrud cupidatat enim. Anim Lorem amet dolor cillum
        deserunt do esse laborum irure adipisicing consequat Lorem. Voluptate
        exercitation minim et deserunt. Irure eiusmod ex et aute do laborum sunt
        ipsum excepteur sint ea deserunt reprehenderit id.
      </in-typography>
    </main-section>
  </box>
</template>
