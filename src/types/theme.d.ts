export interface Theme {
  appBackground: string
  appColor: string
  appDefaultStroke: string
  AppLogo: string
  appSkeletonFrom: string
  appSkeletonTo: string
  buttons: {
    alert: string
    alertColor: string
    disabled: string
    disabledColor: string
    alertHover: string
    primary: string
    primaryColor: string
    primaryHover: string
  }
  card: {
    alert: string
    background: string
    border: string
    success: string
    warning: string
  }
  textInput: {
    active: string
    activeColor: string
    borderColor: string
    disabled: string
    disabledBorderColor: string
    disabledColor: string
    placeholderColor: string
  }
  typography: {
    error: string
    subtitle: string
    success: string
  }
}
