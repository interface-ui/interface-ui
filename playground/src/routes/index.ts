import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/badge',
    name: 'Badge',
    component: () => import('../components/Badge.vue'),
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../components/Menu.vue'),
  },
  {
    path: '/avatar-group',
    name: 'AvatarGroup',
    component: () => import('../components/AvatarGroup.vue'),
  },
  {
    path: '/button-group',
    name: 'ButtonGroup',
    component: () => import('../components/ButtonGroup.vue'),
  },
  {
    path: '/switch',
    name: 'Switch',
    component: () => import('../components/Switch.vue'),
  },
  {
    path: '/text-field',
    name: 'TextField',
    component: () => import('../components/TextField.vue'),
  },
  {
    path: '/alert',
    name: 'Alert',
    component: () => import('../components/Alert.vue'),
  },
  {
    path: '/svg-icon',
    name: 'SvgIcon',
    component: () => import('../components/SvgIcon.vue'),
  },
  {
    path: '/button',
    name: 'Button',
    component: () => import('../components/Button.vue'),
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    component: () => import('../components/Checkbox.vue'),
  },
  {
    path: '/link',
    name: 'Link',
    component: () => import('../components/Link.vue'),
  },
  {
    path: '/fba',
    name: 'FBA',
    component: () => import('../components/FBA.vue'),
  },
  {
    path: '/card',
    name: 'Card',
    component: () => import('../components/Card.vue'),
  },
  {
    path: '/popover',
    name: 'Popover',
    component: () => import('../components/Popover.vue'),
  },
  {
    path: '/divider',
    name: 'Divider',
    component: () => import('../components/Divider.vue'),
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../components/List.vue'),
  },
  {
    path: '/breadcrumb',
    name: 'Breadcrumb',
    component: () => import('../components/Breadcrumb.vue'),
  },
  {
    path: '/chip',
    name: 'Chip',
    component: () => import('../components/Chip.vue'),
  },
  {
    path: '/dialog',
    name: 'Dialog',
    component: () => import('../components/Dialog.vue'),
  },
  {
    path: '/progress',
    name: 'Progress',
    component: () => import('../components/Progress.vue'),
  },
]

export default routes
