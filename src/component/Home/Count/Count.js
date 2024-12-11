import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faImage, faRocket, faSave } from '@fortawesome/free-solid-svg-icons'
import './Count.css'

const Count = () => {
  const counts = [
    { icon: faSave, number: '1286+', text: 'Savings' },
    { icon: faImage, number: '5786+', text: 'Photos' },
    { icon: faRocket, number: '1140+', text: 'Rockets' },
    { icon: faGlobe, number: '7110+', text: 'Globes' }
  ];
  return (
    <>
      <section className='counts'>
        <div className='container'>
          <div className='row'>
          {counts.map((item, index) => (
            <div key={index} className='col-md-3 mt-lg-0 mt-3'>
              <FontAwesomeIcon icon={item.icon} />
              <p>{item.number}</p>
              <h2>{item.text}</h2>
            </div>
          ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Count
