



import { useState } from 'react'
import { Title } from './products.style'
function Products() {
  const [isName, setIsName] = useState(false)
  return (
    <>
      <Title isName = {isName}>Products</Title>
      <button className='bg-blue-700 text-white px-36' onClick={() => setIsName((prev) => !prev)}>Go</button>
    </>
  )
}

export default Products
