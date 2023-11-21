import type {
  CreateTransition,
  Duration,
  Motion,
  TransitionTimingFunction,
} from './types'

const duration: Duration = {
  50: 50,
  100: 100,
  150: 150,
  200: 200,
  250: 250,
  300: 300,
  350: 350,
  400: 400,
  450: 450,
  500: 500,
  550: 550,
  600: 600,
  700: 700,
  800: 800,
  900: 900,
  1000: 1000,
}

const timingFunction: TransitionTimingFunction = {
  'easing-standard': 'cubic-bezier(0.2, 0, 0, 1)',
  'easing-linear': 'cubic-bezier(0, 0, 1, 1)',
  'easing-standard-accelerate': 'cubic-bezier(0.3, 0, 1, 1)',
  'easing-standard-decelerate': 'cubic-bezier(0, 0, 0, 1)',
  'easing-emphasized': 'cubic-bezier(0.2, 0, 0, 1)',
}

const create: CreateTransition = (attrs, option = {}) => {
  const { duration = 300, timingFunction = 'easing-standard' } = option
  return `${attrs
    .map(attr => `${attr} ${duration}ms ${timingFunction}`)
    .join(',')};`
}

const motion: Motion = {
  create,
  duration,
  timingFunction,
}

export default motion
