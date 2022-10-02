import React, { useEffect, useState } from 'react'

import { search } from 'cloudinary/search'
import { calories_grid } from 'style-utils/calories'

import { grid, cell } from './calories.module.scss'
import { mapImageResources } from 'cloudinary/utils'
import { baseUrlPng } from 'cloudinary/base-url'

const Calories = ({ images }) => {
  const [collage, setCollage] = useState(images)

  return (
    <div className={grid}>
      {collage.map((photo, idx) => {
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
  )
}

export default Calories

export const getStaticProps = async () => {
  const { resources } = await search({
    expression: `folder=calories/collage-view`,
    max_results: 33,
    sort_by: [{ public_id: 'asc' }],
  })

  const images = mapImageResources(resources)

  return { props: { images } }
}
