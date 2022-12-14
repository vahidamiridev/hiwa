import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <>
    <section className="services section-bg section-space">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title style2 text-center">
                  <div className="section-top">
                    <h1>
                      <span>خلاقیت</span>
                      <b>خدماتی که ما ارائه می دهیم</b>
                    </h1>
                    <h4>ما خدمات و پشتیبانی با کیفیت ارائه می دهیم ..</h4>
                  </div>
                  <div className="section-bottom">
                    <div className="text-style-two">
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                {/* <!-- Single Service --> */}
                <div className="single-service">
                  <div className="service-head">
                    <Image
                      width={555}
                      height={408}
                      src="/images/services/service-01.jpg"
                      alt="#"
                    />
                    <div className="icon-bg">
                      <i className="fa fa-handshake-o"></i>
                    </div>
                  </div>
                  <div className="service-content">
                    <h4>
                      <a href="service-business.html">استراتژی کسب و کار</a>
                    </h4>
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است
                    </p>
                    <a className="btn" href="service-business.html">
                      <i className="fa fa-arrow-circle-o-left"></i>مشاهده سرویس
                    </a>
                  </div>
                </div>
                {/* <!--/ End Single Service --> */}
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                {/* <!-- Single Service --> */}
                <div className="single-service">
                  <div className="service-head">
                    <Image
                      width={555}
                      height={408}
                      src="/images/services/service-02.jpg"
                      alt="#"
                    />
                    <div className="icon-bg">
                      <i className="fa fa-html5"></i>
                    </div>
                  </div>
                  <div className="service-content">
                    <h4>
                      <a href="service-develop.html">توسعه وب</a>
                    </h4>
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است
                    </p>
                    <a className="btn" href="service-develop.html">
                      <i className="fa fa-arrow-circle-o-left"></i>مشاهده سرویس
                    </a>
                  </div>
                </div>
                {/* <!--/ End Single Service --> */}
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                {/* <!-- Single Service --> */}
                <div className="single-service">
                  <div className="service-head">
                    <Image
                      width={555}
                      height={408}
                      src="/images/services/service-03.jpg"
                      alt="#"
                    />
                    <div className="icon-bg">
                      <i className="fa fa-cube"></i>
                    </div>
                  </div>
                  <div className="service-content">
                    <h4>
                      <a href="service-market.html">تحقیقات بازار</a>
                    </h4>
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است
                    </p>
                    <a className="btn" href="service-market.html">
                      <i className="fa fa-arrow-circle-o-left"></i>مشاهده سرویس
                    </a>
                  </div>
                </div>
                {/* <!--/ End Single Service --> */}
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Services