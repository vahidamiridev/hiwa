import React from 'react'

const HeroSlider = () => {
  return (
    <>
      <section className="hero-slider style1">
        <div className="home-slider">
          {/* <!-- Single Slider --> */}
          <div
            className="single-slider"
            style={{
              backgroundImage: "url('/images/slider-image/slider-image1.jpg')",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-8 col-12">
                  <div className="welcome-text">
                    <div className="hero-text">
                      <h4>ما همیشه آماده کمک به شما هستیم</h4>
                      <h1>طراح خلاق ما در انتظار پروژه ها</h1>
                      <div className="p-text">
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است
                        </p>
                      </div>
                      <div className="button">
                        <a
                          href="contact.html"
                          className="bizwheel-btn theme-1 effect"
                        >
                          با ما همکاری کنید
                        </a>
                        <a
                          href="portfolio.html"
                          className="bizwheel-btn theme-2 effect"
                        >
                          نمایش نمونه کارها
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/ End Single Slider --> */}
          {/* <!-- Single Slider --> */}
          <div
            className="single-slider"
            style={{
              backgroundImage: "url('/images/slider-image/slider-image2.jpg')",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-8 col-12">
                  <div className="welcome-text">
                    <div className="hero-text">
                      <h4>وقت شما برای ما بسیار مهم است</h4>
                      <h1>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ
                      </h1>
                      <div className="p-text">
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است
                        </p>
                      </div>
                      <div className="button">
                        <a
                          href="blog.html"
                          className="bizwheel-btn theme-1 effect"
                        >
                          نمایش وبلاگ
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/ End Single Slider --> */}
          {/* <!-- Single Slider --> */}
          <div
            className="single-slider"
            style={{
              backgroundImage: "url('/images/slider-image/slider-image3.jpg')",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-8 col-12">
                  <div className="welcome-text">
                    <div className="hero-text">
                      <h4>تخصص ما در انتظار شما است</h4>
                      <h1>بهترین راه برای نمایندگی کسب و کار بعدی خود </h1>
                      <div className="p-text">
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است
                        </p>
                      </div>
                      <div className="button">
                        <a
                          href="team.html"
                          className="bizwheel-btn theme-2 effect"
                        >
                          رهبران ما
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/ End Single Slider --> */}
        </div>
      </section>
    </>
  )
}

export default HeroSlider
