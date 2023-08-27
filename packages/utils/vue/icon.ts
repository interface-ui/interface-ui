import type { Component } from 'vue'
import { definePropType } from './props'

export const iconPropType = definePropType<string | Component>([
  String,
  Object,
  Function,
])
