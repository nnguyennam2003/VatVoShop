import React, { useState } from 'react'
import { addNewProduct } from '../../services/AdminService/products'

export default function ProductsManage() {
  const [name, setName] = useState("")
  const [newPrice, setNewPrice] = useState("")
  const [oldPrice, setOldPrice] = useState("")
  const [imageFile, setImageFile] = useState(null)
  const [version, setVersion] = useState("")

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return;

    const reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onload = () => {
      setImageFile(reader.result)
    }
  }

  const handleAddProduct = async (e) => {
    e.preventDefault()
    try {
      const res = await addNewProduct({ name: name, new_price: newPrice, old_price: oldPrice, image: imageFile, version: version })
      console.log(res)

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <div>
        <form onSubmit={handleAddProduct}>
          <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="text" placeholder='new price' value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
          <input type="text" placeholder='ole price' value={oldPrice} onChange={(e) => setOldPrice(e.target.value)} />
          <input type="file" onChange={handleFileChange} /><br />
          <input type="text" placeholder='version' value={version} onChange={(e) => setVersion(e.target.value)} />
          <button type='submit'>add</button>
        </form>
      </div>
    </div>
  )
}
