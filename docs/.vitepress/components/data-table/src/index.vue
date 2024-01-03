<script lang="ts" setup>
import { ref } from 'vue'
import { InfoOutlined } from '@interface-ui/icons'
import { tableHeadersEn, tableHeadersZh } from './data-table'
import type { TableProps } from './types'
// import Info from '@interface-ui/icons/InfoOutlined.js'
import './table.less'

const props = defineProps<TableProps>()
const header =
  props.lang === 'en' ? tableHeadersEn[props.type] : tableHeadersZh[props.type]

const anchor = ref<HTMLElement | null>(null)
const typeData = ref<string[]>()
const onClick = (e, type) => {
  anchor.value = e.currentTarget
  typeData.value = type
}
</script>

<template>
  <div style="overflow-x: auto">
    <table class="data-table">
      <thead>
        <tr>
          <th v-for="tableHead in header" :key="tableHead.prop">
            {{ tableHead.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in $props.data" :key="data.name">
          <template v-for="tableHead in header" :key="tableHead.prop">
            <th v-if="tableHead.prop === 'name'">
              {{ data[tableHead.prop] || '-' }}
            </th>
            <td v-else>
              <template v-if="tableHead.prop === 'type'">
                <code>
                  {{ data[tableHead.prop] || '-' }}
                </code>
                <in-icon-button
                  v-if="data.options?.length"
                  size="small"
                  cs="margin-left: 8px"
                  @click="onClick($event, data.options)"
                >
                  <info-outlined />
                </in-icon-button>
              </template>
              <template v-else>
                {{ data[tableHead.prop] || '-' }}
              </template>
            </td>
          </template>
        </tr>
      </tbody>
    </table>

    <in-popover
      keep-mounted
      :anchor="anchor"
      :open="Boolean(anchor)"
      :placement="{ x: 'center' }"
      cs="padding: 8px 16px"
      @close="anchor = null"
    >
      <code class="type-code">
        {{ typeData?.join(' | ') }}
      </code>
    </in-popover>
  </div>
</template>
