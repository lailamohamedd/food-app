import React from 'react'
import './ExploreFood.css'
import Img1 from './../../../assets/01.jpg'
import Img2 from './../../../assets/02.jpg'
import Img3 from './../../../assets/03.jpg'

const ExploreFood = () => {
  const foods = [
    {
      img: Img1,
      title: 'Rainbow Vegetable Sandwich',
      desc: 'Time: 15 - 20 Minutes | Serves: 1',
      price: '$10.50',
      oldPrice: '$11.70'
    },
    {
      img: Img2,
      title: 'Rainbow Vegetable Sandwich',
      desc: 'Time: 15 - 20 Minutes | Serves: 1',
      price: '$10.50',
      oldPrice: '$11.70'
    },
    {
      img: Img3,
      title: 'Rainbow Vegetable Sandwich',
      desc: 'Time: 15 - 20 Minutes | Serves: 1',
      price: '$10.50',
      oldPrice: '$11.70'
    },
  ];
  return (
    <div className='explore'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
          <div className="header text-center">
            <h3>Explore Our Foods </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                live the blind texts. Separated they live in Bookmarksgrove.</p>
          </div>
          </div>
          {foods.map((food, index) => (
            <div key={index} className="col-md-4">
              <div className="card-product">
                <div className="img-wrap">
                  <img src={food.img} alt={food.title} />
                </div>
                <div className="info-wrap">
                  <h4 className="title">{food.title}</h4>
                  <p className="desc">{food.desc}</p>
                  <div className="price-wrap h3">
                    <span className="price-new">{food.price} </span>
                    <del className="price-old">{food.oldPrice}</del>
                  </div>
                </div>
                <div className="bottom-wrap">
                  <a href="#" className="btn">
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExploreFood
