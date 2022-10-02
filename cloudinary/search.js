import { v2 as cld } from 'cloudinary'

export const search = async (options = {}) => {
  console.log('cld.search: ', cld.search);

  const params = { ...options }
  const paramString = Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join('&')

  const results = await fetch(
    // `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/search?${paramString}`,
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/search`,
    {
      method: 'POST',
      body:JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_API_KEY +
            ':' +
            process.env.CLOUDINARY_API_SECRET
        ).toString('base64')}`,
      },
    }
  ).then((r) => r.json())

  return results
}