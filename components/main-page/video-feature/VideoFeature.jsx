import React from 'react'
import Image from 'next/image'
const VideoFeature = () => {
  return (
    <>
    <section className="video-feature side overlay section-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="img-feature ">
                  <Image
                    width={800}
                    height={685}
                    src="/images/why-choose.jpg"
                    alt="Video Thumbnail"
                  />
                  <div className="video-play">
                    <a
                      href="https://www.youtube.com/watch?v=RLlPLqrw8Q4"
                      className="video video-popup mfp-iframe"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                    <div className="waves-block">
                      <div className="waves wave-1"></div>
                      <div className="waves wave-2"></div>
                      <div className="waves wave-3"></div>
                    </div>
                  </div>
                  <span>مشاهده در 2 دقیقه</span>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="features-main ">
                  <div className="title">
                    <h2>بهترین ویژگی های ما</h2>
                    <p>
                      استودیوی ما فقط در مورد طراحی گرافیک نیست. بیشتر از این
                      است ما خدمات ارتباطی ارائه می دهیم و مسئولیت آن نیز بر
                      عهده ما است
                    </p>
                  </div>
                  <div className="b-features">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                        {/* <!-- Single List Feature --> */}
                        <div className="single-list-feature">
                          <i className="fa fa-code"></i>
                          <h4>توسعه وب</h4>
                          <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ
                          </p>
                        </div>
                        {/* <!--/ End Single List Feature --> */}
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        {/* <!-- Single List Feature --> */}
                        <div className="single-list-feature">
                          <i className="fa fa-html5"></i>
                          <h4>طراحی خلاقانه</h4>
                          <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ
                          </p>
                        </div>
                        {/* <!--/ End Single List Feature --> */}
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        {/* <!-- Single List Feature --> */}
                        <div className="single-list-feature">
                          <i className="fa fa-newspaper-o"></i>
                          <h4>خدمات با کیفیت</h4>
                          <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ
                          </p>
                        </div>
                        {/* <!--/ End Single List Feature --> */}
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        {/* <!-- Single List Feature --> */}
                        <div className="single-list-feature">
                          <i className="fa fa-coffee"></i>
                          <h4>بدون دردسر</h4>
                          <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ
                          </p>
                        </div>
                        {/* <!--/ End Single List Feature --> */}
                      </div>
                    </div>
                  </div>
                  <div className="feature-btn">
                    <a href="contact.html" className="bizwheel-btn theme-2">
                      بیشتر دانستن
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>    
    </>
  )
}

export default VideoFeature