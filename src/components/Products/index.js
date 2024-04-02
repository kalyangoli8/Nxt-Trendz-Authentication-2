// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'ja-cookie'

import Header from '../Header'

import './index.css'

const Products = () => {
  const accessTooken = Cookies.get('jwt_token')

  if (accessTooken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div classname="products-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          classname="products-img"
        />
      </div>
    </>
  )
}

export default Products
