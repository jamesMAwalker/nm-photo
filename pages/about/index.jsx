import { baseUrlPng } from 'cloudinary/base-url'
import React from 'react'

import { aboutText } from '@/data-lists/about-content.js'

import {
  about,
  blurbBlock,
  blurb,
  imgBlock,
  image,
  lattice,
} from './about.module.scss'

const About = () => {
  const { greeting, blurb_sections, closing } = aboutText

  return (
    <div className={about}>
      <section className={blurbBlock}>
        <div className={blurb}>
          <b>{greeting}</b>
          <p>
            {blurb_sections.map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </p>
          <b>
            <em>{closing}</em>
          </b>
        </div>
      </section>
      <section className={imgBlock}>
        <div className={lattice}>
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              style={{ gridArea: `c${i + 1}` }}
            />
          ))}
        </div>
        <div className={image}>
          <img
            src={baseUrlPng('layout/nisa--fade_qyxfpc')}
            alt='nishelle'
          />
        </div>
      </section>
    </div>
  )
}

export default About
