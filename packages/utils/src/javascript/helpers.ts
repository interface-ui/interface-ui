/**
 *
 * @param func
 * @param delay
 * @returns
 */
function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

/**
 *
 * @param func
 * @param delay
 * @returns
 */
function throttle<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
  let lastCallTime = 0
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const currentTime = new Date().getTime()
    if (currentTime - lastCallTime >= delay) {
      func.apply(this, args)
      lastCallTime = currentTime
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
function on(
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
function off(
  element: { removeEventListener: (arg0: any, arg1: any, arg2: boolean) => void },
  event: any,
  handler: any,
  useCapture: any = false,
) {
  if (element && event && handler)
    element.removeEventListener(event, handler, useCapture)
}

export { debounce, throttle, on, off }
