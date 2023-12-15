<script lang="ts" setup>
import '@fusion-ui-vue/components/src/drawer/src/index.less'
import {
  FnDrawer,
  FnButton,
  FnTypography,
  FnIconButton,
} from '@fusion-ui-vue/components'
import {
  ComponentDirections,
  componentDirections,
} from '@fusion-ui-vue/constants'
import { ref, shallowRef } from 'vue'
import {
  LocalFireDepartmentFilled,
  AppsFilled,
  CodeFilled,
  FoundationFilled,
  PaletteFilled,
  AddCircleFilled,
  StarsFilled,
  MenuFilled,
} from 'fusion-ui-iconify'
import { styled } from '@fusion-ui-vue/theme'

const openTemporary = ref(false)
const openPersistent = ref(false)
// const open = ref(false)
const placement = ref<ComponentDirections>('top')
const onClick = (p: ComponentDirections) => {
  placement.value = p
  openTemporary.value = true
}
const list = shallowRef([
  { icon: LocalFireDepartmentFilled, text: 'Home' },
  { icon: AppsFilled, text: 'Get Started' },
  { icon: CodeFilled, text: 'Develop' },
  { icon: FoundationFilled, text: 'Foundations' },
  { icon: PaletteFilled, text: 'Styles' },
  { icon: AddCircleFilled, text: 'Components' },
  { icon: StarsFilled, text: 'Blogs' },
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
    <fn-button
      v-for="placement in componentDirections"
      :key="placement"
      variant="text"
      @click="onClick(placement)"
    >
      {{ placement }}
    </fn-button>
  </div>
  <fn-drawer
    :open="openTemporary"
    :placement="placement"
    @close="openTemporary = false"
    :backdrop="false"
  >
    <fn-list
      :cs="{ width: ['top', 'bottom'].includes(placement) ? 'auto' : '250px' }"
    >
      <fn-list-item v-for="item in list" :key="item.text">
        <template #leading="{ icon }">
          <component :is="item.icon" v-bind="icon" />
        </template>
        {{ item.text }}
      </fn-list-item>
    </fn-list>
  </fn-drawer>

  <!-- Persistent -->
  <box>
    <app-bar>
      <fn-icon-button @click="openPersistent = !openPersistent">
        <menu-filled />
      </fn-icon-button>
      <fn-typography variant="title.medium" component="h1">
        Ea quis labore qui
      </fn-typography>
    </app-bar>
    <fn-drawer
      variant="persistent"
      :open="openPersistent"
      placement="left"
      @close="openPersistent = false"
      cs="flex: 0 0 auto; background-color: transparent"
    >
      <drawer-header />
      <fn-list
        :cs="{ width: '250px', borderRadius: 0, background: 'transparent' }"
      >
        <fn-list-item v-for="item in list" :key="item.text">
          <template #leading="{ icon }">
            <component :is="item.icon" v-bind="icon" />
          </template>
          {{ item.text }}
        </fn-list-item>
      </fn-list>
    </fn-drawer>
    <main-section>
      <fn-typography>
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
      </fn-typography>
    </main-section>
  </box>
</template>
