export const mapImageResources = (resources) => {
   return resources.map((rsc) => {
     return {
       id: rsc.asset_id,
       slug: rsc.public_id,
     }
   })
}