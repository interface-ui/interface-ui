export const generateId = (length = 7) =>
  (Math.random() + 1).toString(36).substring(length)
