import React from 'react'
import classNamees from './style.module.css'

const HeroAgency = () => {
  return (
    <section className="hero-agency">
    <div
      className="agency-inner overlay"
      style={{
        backgroundImage: 'url(/images/bg-agency.jpg)',
      }}
    >
      <div className="ageny-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              {/* <!-- Hero Text --> */}
              <div className="hero-text">
                <h4>ما خلاق و عالی هستیم</h4>
                <h1>
                  <span>بهترین </span> راه خلاقیت برای نمایندگی کسب و کار شما
                </h1>
                <div className="video-head">
                  <div className="video-play-main">
                    <a
                      href="https://www.youtube.com/watch?v=RLlPLqrw8Q4"
                      className="video video-popup mfp-iframe"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                  <div className="waves-block">
                    <div className="waves wave-1"></div>
                    <div className="waves wave-2"></div>
                    <div className="waves wave-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {/* <!-- Agency Feature --> */}
              <div className="agency-feature">
                <div className="a-feature">
                  <i className="fa fa-users"></i>
                  <h4>گردش کار کاربران</h4>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    و با استفاده از طراحان گرافیک است
                  </p>
                </div>
                <div className="a-feature">
                  <i className="fa fa-users"></i>
                  <h4>گردش کار کاربران</h4>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    و با استفاده از طراحان گرافیک است
                  </p>
                </div>
                <div className="a-feature">
                  <i className="fa fa-handshake-o"></i>
                  <h4>خدمات مشاوره</h4>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    و با استفاده از طراحان گرافیک است
                  </p>
                </div>
                <div className="a-feature">
                  <i className="fa fa-bullhorn"></i>
                  <h4>بازاریابی های اجتماعی</h4>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    و با استفاده از طراحان گرافیک است
                  </p>
                </div>
              </div>
              {/* <!--/ End Agency Feature --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
  )
}

export default HeroAgency
