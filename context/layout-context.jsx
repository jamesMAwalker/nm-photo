import React, { createContext, useState } from 'react'

const defaultValues = {
  layoutBG: '',
  setLayoutBG: () => {}
}

export const LayoutContext = createContext(defaultValues)

export const LayoutProvider = ({ children }) => {
  const [layoutBG, setLayoutBG] = useState(
    'layout/intense_girl_ejzhbr_acvcyi'
  )

  return (
    <LayoutContext.Provider
      value={{
        layoutBG,
        setLayoutBG
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
