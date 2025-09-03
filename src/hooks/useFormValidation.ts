import { useState, useEffect } from 'react'
import { InputProps } from '@/types'

export const useFormValidation = (inputs: InputProps[]) => {
  const [formValues, setFormValues] = useState(
    inputs.map((item) => item.value || '')
  )
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    const isValid = inputs.every((input, index) => {
      const value = formValues[index]
if (input.required && !value) {
  return false
}

      if (input.type === 'email') {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(formValues[index]))
      }

      if (input.type === 'password') {
        return String(formValues[index]).length > 7
      }

      // Se não for email nem password, considera como válido (ou muda conforme sua lógica)
      return true
    })

    setFormValid(isValid)
  }, [formValues, inputs]) // Sempre reexecuta quando inputs ou formValues mudam

  const handleChange = (index: number, value: string) => {
    setFormValues((prevValues) => {
      const newValues = [...prevValues]
      newValues[index] = value
      return newValues
    })
  }

  return { formValues, setFormValues, formValid, handleChange }
}
