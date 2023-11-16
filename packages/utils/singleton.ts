const singleton = <T extends {}>(className: T) => {
  let instance: T
  const proxy = new Proxy(className, {
    construct(_target, args) {
      if (!instance) {
        instance = new (className as any)(...args)
      }
      return instance
    },
  })

  ;(proxy as any).prototype.constructor = proxy
  return proxy as T
}

export default singleton
