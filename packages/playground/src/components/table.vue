<script>
export default {
  props: {
    columns: {
      type: Array,
      default() {
        return []
      },
    },
    data: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="col in columns">
          {{ col.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data">
        <td v-for="col in columns">
          {{ row[col.key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>

</style>
