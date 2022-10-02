import React from 'react'

import { baseUrlPng } from '../cloudinary/base-url'

import { bgImage } from '@/layout/layout.module.scss'

export default function Home() {
  return (
    <div className={bgImage}>
      <img
        src={baseUrlPng(
          'layout/intense_girl_ejzhbr_acvcyi',
          'good'
        )}
        alt=''
      />
    </div>
  )
}
