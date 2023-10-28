'use client'
import { useState, useEffect } from 'react'
import { Bubble } from '@typebot.io/nextjs'

const Typeboot = () => {
  const [isClient, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <Bubble
      typebot="lead-blog-yrre7nc"
      theme={{ button: { backgroundColor: '#FFFFFF', size: 'medium' } }}
    />
  )
}

export default Typeboot
