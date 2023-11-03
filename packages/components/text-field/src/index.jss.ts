import type { ComponentStylingHook } from 'packages/hooks/types'
import { computed } from 'vue'
import { css, cx, useColor } from '@fusion-ui-vue/theme'
import type { TextFieldProps } from './text-field'

const useCss: ComponentStylingHook<TextFieldProps> = props => {
  const textFieldStyle = css`
    display: inline-flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
    min-width: 0px;
    color: var(--fn-text-field-color);
    width: fit-content;
    & .fn-text-field--input-wrapper {
      height: var(--fn-text-field-height);
      position: relative;
      display: inline-flex;
      flex-direction: row;
      border-radius: inherit;
      overflow: hidden;
      align-items: center;
      transition: background-color 0.2s ease 0s;
      & > .fn-text-field--start-adornment {
        margin-left: 12px;
      }
      & > .fn-text-field--end-adornment {
        margin-right: 12px;
      }
      & > .fn-text-field--start-adornment,
      & > .fn-text-field--end-adornment {
        display: inline-flex;
        font-size: 16px;
        color: var(--md-sys-color-on-surface-variant);
      }
    }
    & .fn-text-field__label {
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
      text-overflow: ellipsis;
      text-align: left;
      z-index: 1;
      transform-origin: left;
      max-width: calc(100% - 32px) !important;
      transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
        transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
        padding 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    }
    & .fn-text-field--border {
      position: absolute;
      pointer-events: none;
      width: 100%;
      margin: 0;
      inset: 0;
      overflow: hidden;
      border-style: solid;
      height: 100%;
    }
    &:focus-within {
      & .fn-text-field__label {
        color: var(--fn-text-field-color);
      }
    }
    & .fn-text-field__input {
      border: none;
      height: 100%;
      width: 100%;
      &:not([disabled]) {
        color: var(--md-sys-color-on-surface);
      }
      &::placeholder {
        opacity: 0;
        transition: opacity 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      }
    }
    &--border {
      position: absolute;
      pointer-events: none;
      width: 100%;
      margin: 0;
      overflow: hidden;
      border-style: solid;
      height: 100%;
    }
    &:has(:required) {
      & .fn-text-field__label::after,
      & legend::after {
        content: ' *';
        color: var(--md-sys-color-error);
      }
    }
    &[disabled] {
      color: var(--fn-sys-color-disabled-level-0);
      & > .fn-text-field__label {
        color: inherit;
      }
      & > .fn-text-field--supporting-text {
        opacity: var(--md-sys-state-disabled-state-layer-opacity);
      }
      & > .fn-text-field--input-wrapper {
        color: inherit;
      }
    }
  `
  const outlinedStyle = css`
    border-radius: var(--md-sys-shape-corner-extra-small-default-size);
    & .fn-text-field--border {
      border-width: 1px;
      border-color: var(--md-sys-color-outline);
      border-radius: inherit;
      height: 100%;
    }
    & fieldset.fn-text-field--border {
      inset: -5px 0 0;
      height: auto;
      padding: 0 8px;
      & legend {
        float: unset;
        width: auto;
        overflow: hidden;
        display: block;
        padding: 0;
        height: 11px;
        font-size: 0.75rem;
        visibility: hidden;
        max-width: 0;
        transition: max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
          padding 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
        white-space: nowrap;
      }
    }
    &:hover .fn-text-field--border {
      border-color: var(--md-sys-color-outline-hover);
    }
    & .fn-text-field__label {
      transform: translate(16px, calc((var(--fn-text-field-height) - 20px) / 2))
        scale(1);
    }
    & .fn-text-field--supporting-text {
      padding: 4px 16px 0;
    }
    &:focus-within {
      & .fn-text-field--border {
        border-width: 2px;
        border-color: var(--fn-text-field-color);
      }
    }
    &:focus-within,
    &.fn-text-field--content-within {
      & .fn-text-field__input::placeholder {
        opacity: 1;
      }
      & .fn-text-field__label {
        transform: translate(16px, -50%) scale(0.75);
      }
      & fieldset.fn-text-field--border legend {
        max-width: 100%;
        padding: 0 6px;
      }
    }
    & .fn-text-field__input {
      padding: 0 16px;
    }
    &[disabled] {
      & .fn-text-field--border,
      &:hover .fn-text-field--border {
        border-color: var(--fn-sys-color-disabled-level-1);
      }
    }
  `
  const filledStyle = css`
    & > .fn-text-field--input-wrapper {
      border-top-left-radius: var(
        --md-sys-shape-corner-extra-small-top-top-left
      );
      border-top-right-radius: var(
        --md-sys-shape-corner-extra-small-top-top-right
      );
      /**
        UPDATE NEEDED
        should use var(--md-sys-color-surface-container-heightest)
        @link https://m3.material.io/components/text-fields/specs
      */
      background-color: rgb(var(--md-sys-color-on-surface-rgb) / 0.04);
      &:hover {
        background-color: rgb(var(--md-sys-color-on-surface-rgb) / 0.08);
      }
    }
    & .fn-text-field__input {
      padding: calc(var(--fn-text-field-height) - 32px) 16px 8px;
    }
    &:focus-within,
    &.fn-text-field--content-within {
      & .fn-text-field__label {
        transform: translate(
            16px,
            var(--fn-text-fiedl-filled-standard-label-translateY)
          )
          scale(0.75);
      }
    }
    & .fn-text-field--input-wrapper {
      > .fn-text-field--start-adornment {
        padding-bottom: 8px;
        padding-top: calc(var(--fn-text-field-height) - 32px);
      }
    }
    & .fn-text-field__label {
      transform: translate(16px, calc((var(--fn-text-field-height) - 20px) / 2))
        scale(1);
    }
    & .fn-text-field--supporting-text {
      padding: 4px 16px 0;
    }
    & .fn-text-field--border {
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-bottom: 1px solid var(--md-sys-color-outline);
        pointer-events: none;
      }
      &::after {
        content: '';
        position: absolute;
        inset: 0;
        border-bottom: 2px solid var(--fn-text-field-color);
        transform: scaleX(0);
        transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      }
    }
    &:focus-within {
      & .fn-text-field__input::placeholder {
        opacity: 1;
      }
      & .fn-text-field--border::after {
        transform: scaleX(1) translateX(0);
      }
      & .fn-text-field--border::after {
        transform: scaleX(1) translateX(0);
      }
    }
    &:focus-within,
    &.fn-text-field--content-within {
      & .fn-text-field__input::placeholder {
        opacity: 1;
      }
    }
    &:hover .fn-text-field--border {
      border-color: var(--md-sys-color-outline-hover);
    }
    &[disabled] {
      & > .fn-text-field--input-wrapper {
        background-color: var(--fn-sys-color-disabled-level-1);
      }
    }
  `
  const standardStyle = css`
    & .fn-text-field__label {
      transform: translate(0, calc((var(--fn-text-field-height) - 20px) / 2))
        scale(1);
    }
    & .fn-text-field__input {
      padding: calc(var(--fn-text-field-height) - 32px) 0 8px;
    }
    &:focus-within,
    &.fn-text-field--content-within {
      & .fn-text-field__label {
        transform: translate(
            0,
            var(--fn-text-fiedl-filled-standard-label-translateY)
          )
          scale(0.75);
      }
    }
    & .fn-text-field--supporting-text {
      padding: 4px 0 0;
    }
    & .fn-text-field--input-wrapper {
      > .fn-text-field--start-adornment {
        margin-left: 0;
        margin-right: 8px;
      }
      > .fn-text-field--end-adornment {
        margin-right: 0;
        margin-left: 8px;
      }
      > .fn-text-field--start-adornment,
      > .fn-text-field--end-adornment {
        padding-bottom: 8px;
        margin-top: calc(var(--fn-text-field-height) - 32px);
      }
    }
    & .fn-text-field--border {
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-bottom: 1px solid var(--md-sys-color-outline);
        pointer-events: none;
      }
      &::after {
        content: '';
        position: absolute;
        inset: 0;
        border-bottom: 2px solid var(--fn-text-field-color);
        transform: scaleX(0);
        transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      }
    }
    &:focus-within {
      & .fn-text-field__input::placeholder {
        opacity: 1;
      }
      & .fn-text-field--border::after {
        transform: scaleX(1) translateX(0);
      }
      & .fn-text-field--border::after {
        transform: scaleX(1) translateX(0);
      }
    }
    &:focus-within,
    &.fn-text-field--content-within {
      & .fn-text-field__input::placeholder {
        opacity: 1;
      }
    }
    &:hover .fn-text-field--border {
      border-color: var(--md-sys-color-outline-hover);
    }
  `
  const smallStyle = css`
    --fn-text-field-height: 32px;
    --fn-text-fiedl-filled-standard-label-translateY: 0%;
    &.fn-text-field--filled,
    &.fn-text-field--standard {
      & .fn-text-field__input::placeholder {
        opacity: 1 !important;
      }
      & .fn-text-field__label {
        display: none;
      }
      & .fn-text-field__input {
        padding-bottom: 0;
      }
    }
  `
  const mediumStyle = css`
    --fn-text-field-height: 40px;
    --fn-text-fiedl-filled-standard-label-translateY: -50%;
    &.fn-text-field--filled {
      & .fn-text-field__input::placeholder {
        opacity: 1;
      }
      & .fn-text-field__label {
        display: none;
      }
    }
  `
  const largeStyle = css`
    --fn-text-field-height: 56px;
    --fn-text-fiedl-filled-standard-label-translateY: 10%;
  `
  const errorStyle = css`
    & .fn-text-field__label,
    & .fn-text-field--supporting-text {
      color: var(--md-sys-color-error);
    }
    & .fn-text-field--border,
    &:hover .fn-text-field--border {
      border-color: var(--md-sys-color-error);
      &::before {
        border-color: var(--md-sys-color-error);
      }
    }
  `

  return computed(() => {
    const $color = props.error
      ? useColor(props, null, 'var(--md-sys-color-error)')
      : useColor(props, 'color', 'var(--md-sys-color-primary)')

    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(
      css({ '--fn-text-field-color': $color.value }),
      textFieldStyle,
      { [outlinedStyle]: props.variant === 'outlined' },
      { [filledStyle]: props.variant === 'filled' },
      { [standardStyle]: props.variant === 'standard' },
      { [smallStyle]: props.size === 'small' },
      { [mediumStyle]: props.size === 'medium' },
      { [largeStyle]: props.size === 'large' },
      { [errorStyle]: props.error },
      styleFromCs
    )
  })
}

export default useCss
