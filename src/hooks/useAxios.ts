import { useState, useEffect } from 'react'
import axios, { AxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie'

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/`,
})

export const usePost = <T, P>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<number | null>(null)

  const postData = async (postData: P, config?: AxiosRequestConfig) => {
    setData(null)
    setError(null)
    setLoading(true)
    try {
      const response = await axiosInstance({
        method: 'POST',
        url: endpoint,
        data: postData,
        headers: {
          'Content-Type': 'application/json',
          ...config?.headers,
        },
      })
      setData(response.data)
    } catch (err: any) {
      setError(err.response?.status || 500)
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, postData }
}

export const useGet = <T>(endpoint: string, config?: AxiosRequestConfig) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<number | null>(null)

  const getData = async () => {
    setError(null)
    setLoading(true)
    try {
      const response = await axiosInstance({
        method: 'GET',
        url: endpoint,
        headers: {
          Authorization: `Bearer ${Cookies.get('Authorization')}`,
          ...config?.headers,
        },
      })
      setData(response.data)
    } catch (err: any) {
      setError(err.response?.status || 500)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { data, loading, error }
}
