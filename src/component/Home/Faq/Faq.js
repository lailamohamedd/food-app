import React from 'react'
import './Faq.css'

const Faq = () => {
    const faqs = [
        { ask: 'Is Foodera Bread really baked fresh each day?', answer: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.' },
        { ask: ' Do you bake breads containing animal fats or products?', answer: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.' },
        { ask: 'Can I order your products online?', answer: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.' },
        { ask: 'When are you opening a shop near me?', answer: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.' }
      ];
  return (
    <div className='faq-main'>
        <div className="container">
            <div className="row">
                <div className="col-md-12 header text-center">
                    <h3>Frequently Asked Questions </h3>
                </div>
                {faqs.map((faq, index) => (
                    <div key={index} className='col-md-6 col-sm-6'>
                        <div className="faq">
                            <h4> <span>~</span>{faq.ask}</h4>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Faq
