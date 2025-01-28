import axios from "axios"
// import { useState } from "react"

// const [photourl, setphotourl]= useState(null)
export const imageUpload = async imageData => {
    const formData = new FormData()
    // console.log("vai tumi kothay",import.meta.env.VITE_IMAGE_API)
    formData.append('image', imageData)
    const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API}`,
        formData
      )

    const photo = data.data.display_url
    // console.log("photo", photo)

    return photo
  }


export const saveHRUser = async user =>{
    // console.log(user, "tumi call korcho?")
}