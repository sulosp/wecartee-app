import React from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <div className="font-bold">
      <p>This is the product page</p>
      <Link to="/" className="underline">
        Go To Dashbaord
      </Link>
    </div>
  )
}
