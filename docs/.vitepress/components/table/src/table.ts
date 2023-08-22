import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { off, on, throttle } from './util'

export const useTable = (props) => {
  /** Table 实例 */
  const bpTable = ref(null)

  /** columns 表头列表 */
  const columns = ref([])

  /** _table_width 表格所占的实际宽度 px */
  const _table_width = ref('')

  /** _remainder_col 在没有设定宽度时，可用于撑开剩余宽度的列数 */
  let _remainder_col = 0

  /** _fixed_width 固定宽度（包含自定义的宽和最小宽的总和） */
  let _fixed_width = 0

  /** _min_width_list 各列最小宽度数组 */
  let _min_width_list = []

  /** _col_width_list 表格各列宽度数组 */
  let _col_width_list = []

  /** _min_column_width 单列最小宽度 */
  const _min_column_width = 80

  /**
   * 初始化表头列表
   * @returns Array
   */
  const initColumns = () => {
    const el = bpTable.value
    const { cols } = props

    if (cols.length === 0 || cols.length > 99)
      return

    _fixed_width = 0
    _remainder_col = cols.length
    _min_width_list = []

    for (let i = 0; i < cols.length; i++) {
      const { width, minWidth } = cols[i]

      // 如果含有自定义的宽和最小宽，则需要单独处理这些列，使其不参与剩余宽度自适应当中
      if (width) {
        _fixed_width += Number(width)
        _remainder_col--
      }
      minWidth && _min_width_list.push(minWidth)
    }

    _table_width.value = el && el.offsetWidth - 6
    _col_width_list = getWidthList() || []

    columns.value = []
    for (let i = 0; i < cols.length; i++)
      columns.value.push({ ...props.cols[i], width: _col_width_list[i] })

    return columns.value
  }

  /**
   * 获取各列宽度，并组成一个数组
   * @returns Array width_list
   */
  function getWidthList() {
    const { cols } = props

    /** 各列宽度数组 */
    const width_list = []

    /** 自适应列宽 */
    let adapt_width = getAdaptWidth()

    /**
     * 当表格中含有设置最小宽度的列时，需要挨个比较自适应宽是否小于最小宽度
     * 如果小于，则重新设置各个值并重新计算自适应宽度
     */
    if (_min_width_list.length) {
      // _min_width_list.map((item, index) => {
      //   if (adapt_width > item) {
      //     _fixed_width += item
      //     _remainder_col--
      //     _min_width_list.splice(index, 1)
      //     adapt_width = getAdaptWidth()
      //   }
      // })
      _min_width_list.forEach((item, index) => {
        if (adapt_width > item) {
          _fixed_width += item
          _remainder_col--
          _min_width_list.splice(index, 1)
          adapt_width = getAdaptWidth()
        }
      })
    }

    for (let i = 0; i < cols.length; i++) {
      const { width, minWidth } = cols[i]

      // 设置成固定宽度
      // eslint-disable-next-line max-statements-per-line
      if (width) { width_list.push(width); continue }

      // 是否设置成最小宽度：当含有最小宽度属性并且最小宽度大于计算得出的最大列宽
      const hasMinWidth = minWidth && minWidth > adapt_width
      // eslint-disable-next-line max-statements-per-line
      if (hasMinWidth) { width_list.push(minWidth); continue }

      // 如果没有定义宽度和最小宽，则设置成自适应宽度或者最小预设宽度
      width_list.push(adapt_width < _min_column_width ? _min_column_width : adapt_width)
    }
    return width_list
  }

  /**
   * 根据表格实际宽度、已固定的列宽、以及剩余自适应列数，计算得出自适应列宽
   * @returns Number width
   */
  function getAdaptWidth() {
    const width = (_table_width.value - _fixed_width) / _remainder_col
    return Number(width).toFixed(2)
  }

  watch(() => props.cols, () => {
    initColumns()
  })

  onMounted(() => {
    nextTick(() => {
      initColumns()
      on(window, 'resize', throttle(() => initColumns(), 400))
    })
  })

  onBeforeUnmount(() => off(window, 'resize', () => initColumns()))

  return {
    initColumns,
    bpTable,
    _table_width,
    columns,
  }
}
