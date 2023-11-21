type DurationLevel =
  | 50
  | 100
  | 150
  | 200
  | 250
  | 300
  | 350
  | 400
  | 450
  | 500
  | 550
  | 600
  | 700
  | 800
  | 900
  | 1000

export type Duration = Record<DurationLevel, number>

type TransitionTimingFunctionKey =
  | 'easing-standard'
  | 'easing-linear'
  | 'easing-standard-accelerate'
  | 'easing-standard-decelerate'
  | 'easing-emphasized'

export type TransitionTimingFunction = Record<
  TransitionTimingFunctionKey,
  string
>

export type CreateTransition = (
  attrs: string[],
  options: { duration?: number; timingFunction?: string }
) => string

export interface Motion {
  create: CreateTransition
  duration: Duration
  timingFunction: TransitionTimingFunction
}
