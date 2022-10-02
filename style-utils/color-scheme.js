import ColorScheme from 'color-scheme'

export const genTestColors = (
  numColors,
  hue = 27,
  type = 'analogic',
  variation = 'soft'
) => {
  const scheme = new ColorScheme()

  scheme.from_hue(hue).scheme(type).variation(variation)

  const colors = scheme.colors()

  return Array.from({ length: numColors }, (_, idx) => {
    return colors[idx % colors.length]
  })
}

/*

+ Scheme Types:
  - mono
  - contrast
  - triade
  - tetrade
  - analogic
+ Scheme Variations:
  - pastel
  - soft
  - light
  - hard
  - pale

*/
