import { Theme } from '@/types'

export const lightTheme: Theme = {
  appBackground: '#FFF ',
  appColor: '#000 ',
  appDefaultStroke: '#E0E0E0 ',
  appLogo: 'dnc-logo2.svg ',
  appSkeletonFrom: '#EEE ',
  appSkeletonTo: '#CCC ',

  buttons: {
    alert: '#E80000 ',
    alertColor: '#FFF ',
    disabled: '#D80000 ',
    disabledColor: '#CCC ',
    alertHover: '#666 ',
    primary: '#0C70F2 ',
    primaryColor: '#FFF ',
    primaryHover: '#0061DE ',
  },
  card: {
    alert: '#E80000 ',
    background: '#FFF ',
    border: '#E0E0E0 ',
    success: '#008000 ',
    warning: '#F7A300 ',
  },
  textInput: {
    active: '#FFF ',
    activeColor: '#000 ',
    borderColor: '#E0E0E0 ',
    disabled: '#EEE ',
    disabledBorderColor: '#E0E0E0 ',
    disabledColor: '#666 ',
    placeholderColor: '#666 ',
  },
  typography: {
    error: '#FF0202 ',
    subtitle: '#666 ',
    success: '#008000 ',
  },
}

export const darktheme: Theme = {
  appBackground: '#060B26 ',
  appColor: '#FFF ',
  appDefaultStroke: '#21497D ',
  appLogo: 'logo-dnc-black.svg ',
  appSkeletonFrom: '#060B26 ',
  appSkeletonTo: '#21497D ',

  buttons: {
    alert: '#E80000 ',
    alertColor: '#FFF ',
    disabled: '#313649 ',
    disabledColor: '#6D7B8E ',
    alertHover: '#666 ',
    primary: '#0C70F2 ',
    primaryColor: '#FFF ',
    primaryHover: '#0061DE ',
  },
  card: {
    alert: '#E80000 ',
    background: '#0F13535',
    border: '#21497D ',
    success: '#008000 ',
    warning: '#F7A300 ',
  },
  textInput: {
    active: '#0F1535 ',
    activeColor: '#FFF ',
    borderColor: '#21497D ',
    disabled: '#282D49 ',
    disabledBorderColor: '#2E3F55',
    disabledColor: '#58677C ',
    placeholderColor: '#89A7CE ',
  },
  typography: {
    error: '#FF0202 ',
    subtitle: '#89A7CE ',
    success: '#008000 ',
  },
}
