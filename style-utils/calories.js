// Grid Configurations

/*
  * Purpose
  # This file will eventually export an object that produces a grid that meets the needs of the number of photos in the 'calories' cloudinary folder. 
  
  + Basic Overview
  # 'blocks' are grid-template-area strings that correspond to specific design patterns. l1_r2v translates to one cell left, two cells stacked vertically right.
  # Each block styles a group of 3 cells.
    TODO: find a fn to perform an action for every 3 arr elements.
  # blocks2Grid will accept a number of cells to create, and an array of blocks to use. It then floors the cells to the nearest multiple of 3, and will return a string 'gridArea' that is readable by the gridTemplateAreas property.
  # To accomplish the above, the string will 
*/

// blocks
// const l1_r2v = ["'c1 c1 c2 c2' 'c1 c1 c3 c3'"]
const l2h_r1 = ["'c1 c1 c2 c2' 'c1 c1 c3 c3'"]
const blocks2GridArea = (blocks) => {
  const cells = Array.from({ length: 3 })
}


export const calories_grid = {
  // gridTemplateAreas: `${
  //   l1_r2v
  // }`,
  fn: blocks2GridArea,
  setNumCells: function(num) {
    this.numCells = num
  },
  numCells: 36
}
