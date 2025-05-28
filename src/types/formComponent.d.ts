export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export type MessageProps = {
  msg: string
  type: 'error' | 'success'
}

export interface FormComponentProps {
  inputs: InputProps[]
  buttons: ButtonProps[]
  message?: MessageProps
}
