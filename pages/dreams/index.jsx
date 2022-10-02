import React, { useState } from 'react'

import { search } from 'cloudinary/search'
import { mapImageResources } from 'cloudinary/utils'
import { baseUrlPng } from 'cloudinary/base-url'

import { grid, cell } from './dreams.module.scss'

import { genTestColors } from 'style-utils/color-scheme'

const Dreams = ({ images }) => {
  const [collage, setCollage] = useState(images)
  const colors = genTestColors(images.length)

  return (
    <div>
      <div className={grid}>
        {[...collage, ...collage].map((photo, idx) => {
          return (
            <div
              key={idx}
              className={cell}
              style={{ gridArea: `c${idx + 1}` }}
            >
              <img src={baseUrlPng(photo.slug)} alt='' />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Dreams

export const getStaticProps = async () => {
  const { resources } = await search({
    expression: `folder=dreams/collage-view`,
    max_results: 7,
    sort_by: [{ public_id: 'asc' }],
  })

  const images = mapImageResources(resources)

  return { props: { images } }
}
