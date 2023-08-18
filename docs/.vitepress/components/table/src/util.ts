/**
 * 判断是否为 null
 * @param {*} data
 * @returns
 */
export const isNull = (data: any) => !data && data !== 0

/**
 * 判断变量是否为字符串
 * @param {*} data
 * @returns {Boolean}
 */
export const isString = (data: any): boolean => typeof data === 'string'

/**
 * 空格处理
 * @param {String} str
 * @returns
 */
export const trim = (str: any) => (str || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')

/**
 * 将字符串转换成对象格式
 * @param {String} str
 * @returns {Object} null
 */
export const strToObject = (str: string): object => {
  let finalObj: object = {}
  try {
    finalObj = JSON.parse(str)
  }
  catch (e) {
    finalObj = {}
  }

  return finalObj
}

/**
 * 函数节流
 */
export const throttle = (fn: { apply: (arg0: any, arg1: IArguments) => void }, delay: number) => {
  let lastTime: number
  let timer: any
  delay = delay || 200
  return function () {
    // eslint-disable-next-line prefer-rest-params
    const args = arguments
    // 记录当前函数触发的时间
    const nowTime = Date.now()
    if (lastTime && nowTime - lastTime < delay) {
      clearTimeout(timer)
      timer = setTimeout(function () {
        // 记录上一次函数触发的时间
        lastTime = nowTime
        // 修正this指向问题
        fn.apply(this, args)
      }, delay)
    }
    else {
      lastTime = nowTime
      fn.apply(this, args)
    }
  }
}

/**
 * 新增事件监听
 * @param {*} element
 * @param {*} event
 * @param {*} handler
 * @param {*} useCapture
 */
export const on = function (
  element: { addEventListener: (arg0: any, arg1: any, arg2: boolean) => void },
  event: any,
  handler: any,
  useCapture: any = false,
) {
  if (element && event && handler)
    element.addEventListener(event, handler, useCapture)
}

/**
 * 移除事件监听
 * @param {*} element
 * @param {*} event
 * @param {*} handler
 * @param {*} useCapture
 */
export const off = function (
  element: { removeEventListener: (arg0: any, arg1: any, arg2: boolean) => void },
  event: any,
  handler: any,
  useCapture: any = false,
) {
  if (element && event && handler)
    element.removeEventListener(event, handler, useCapture)
}

/**
 * 判断是否为偶数
 * @param {*} num
 */
export const isEvnetNum = (num: any) => Number(num) % 2 === 0

/**
 * 将数值限制为整数
 * @param {*} v
 * @returns
 */
export const beInteger = (v: string) => {
  const val = `${v}`
  return val.replace(/\D/g, '')
}

/**
 * 警告提示处理
 * @param {String} module
 * @param {*} info
 */
export const warn = (module: any, info: string) => {
  // eslint-disable-next-line no-console
  console.warn(`[ A warning of fusion-ui ] - ${module}: ${info}`)
}

/**
 * 首字母大写
 * @param str
 * @returns
 */
export const firstToUpper = (str: string) => {
  return str.trim().toLowerCase().replace(str[0], str[0].toUpperCase())
}
