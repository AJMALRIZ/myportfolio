import React from 'react'
import {default as bin} from './images/banner-image.png'

function Main() {
  return (
    <section class="siteBanner">
      <div class="container">
        <div class="row">
          <div className="col-lg-6 col-md-12 siteTitle">
            <h3 class="titleText">Heyy</h3>
            <h1 className="title-text text-uppercase">I am Ajmal</h1>
            <h4 className="title-text text-uppercase">web developer</h4>
            <div className="siteButtons">
              <div className="d-flex flex-row flex-wrap">
                
                <button type='button' className='btn button primary-button mr-4'>me</button>
                <button type='button' className='btn button secondary-button'>mee</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <img src={bin} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main