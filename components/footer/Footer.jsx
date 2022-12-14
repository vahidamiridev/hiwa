import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
    <footer
          className="footer"
          style={{
            backgroundImage: "url('/images/map.png')",
          }}
        >
          {/* <!-- Footer Top --> */}
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                  {/* <!-- Footer About -->		 */}
                  <div className="single-widget footer-about widget">
                    <div className="logo">
                      <div className="img-logo">
                        <a className="logo" href="index-2.html">
                          <Image
                            width={173}
                            height={40}
                            className="img-responsive"
                            src="/images/logo2.png"
                            alt="logo"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="footer-widget-about-description">
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                      </p>
                    </div>
                    <div className="social">
                      {/* <!-- Social Icons --> */}
                      <ul className="social-icons">
                        <li>
                          <a className="facebook" href="#" target="_blank">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a className="twitter" href="#" target="_blank">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a className="linkedin" href="#" target="_blank">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a className="pinterest" href="#" target="_blank">
                            <i className="fa fa-pinterest-p"></i>
                          </a>
                        </li>
                        <li>
                          <a className="instagram" href="#" target="_blank">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="button">
                      <a href="#" className="bizwheel-btn">
                        درباره ما
                      </a>
                    </div>
                  </div>
                  {/* <!--/ End Footer About -->		 */}
                </div>
                <div className="col-lg-2 col-md-6 col-12">
                  {/* <!-- Footer Links -->		 */}
                  <div className="single-widget f-link widget">
                    <h3 className="widget-title">شرکت</h3>
                    <ul>
                      <li>
                        <a href="#">درباره ما</a>
                      </li>
                      <li>
                        <a href="#">خدمات ما</a>
                      </li>
                      <li>
                        <a href="#">نمونه کارها</a>
                      </li>
                      <li>
                        <a href="#">برنامه قیمت گذاری</a>
                      </li>
                      <li>
                        <a href="#">تماس با ما</a>
                      </li>
                    </ul>
                  </div>
                  {/* <!--/ End Footer Links -->			 */}
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  {/* <!-- Footer News --> */}
                  <div className="single-widget footer-news widget">
                    <h3 className="widget-title">صفحه وبلاگ</h3>
                    {/* <!-- Single News --> */}
                    <div className="single-f-news">
                      <div className="post-thumb">
                        <a href="#">
                          <Image
                            width={700}
                            height={530}
                            src="/images/blog/blog-3.jpg"
                            alt="#"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <p className="post-meta">
                          <time className="post-date">
                            <i className="fa fa-clock-o"></i>15 شهریور 1399
                          </time>
                        </p>
                        <h4 className="title">
                          <a href="blog-sngle.html">
                            ما بهترین خدمات مشاوره و خلاقیت را به شما ارائه می
                            دهیم
                          </a>
                        </h4>
                      </div>
                    </div>
                    {/* <!--/ End Single News --> */}
                    {/* <!-- Single News --> */}
                    <div className="single-f-news">
                      <div className="post-thumb">
                        <a href="#">
                          <Image
                            width={700}
                            height={530}
                            src="/images/blog/blog-4.jpg"
                            alt="#"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <p className="post-meta">
                          <time className="post-date">
                            <i className="fa fa-clock-o"></i>15 شهریور 1399
                          </time>
                        </p>
                        <h4 className="title">
                          <a href="blog-sngle.html">
                            ما بهترین خدمات مشاوره و خلاقیت را به شما ارائه می
                            دهیم
                          </a>
                        </h4>
                      </div>
                    </div>
                    {/* <!--/ End Single News --> */}
                  </div>
                  {/* <!--/ End Footer News -->			 */}
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  {/* <!-- Footer Contact -->		 */}
                  <div className="single-widget footer_contact widget">
                    <h3 className="widget-title">مخاطب</h3>
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    </p>
                    <ul className="address-widget-list">
                      <li className="footer-mobile-number">
                        <i className="fa fa-phone"></i>03532270057
                      </li>
                      <li className="footer-mobile-number">
                        <i className="fa fa-envelope"></i>setinco@gmail.com
                      </li>
                      <li className="footer-mobile-number">
                        <i className="fa fa-map-marker"></i>ساختمان خانه اوتارا
                      </li>
                    </ul>
                  </div>
                  {/* <!--/ End Footer Contact -->						 */}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
                  {/* <!-- Footer Newsletter --> */}
                  <div className="footer-newsletter">
                    <form action="#" method="post" className="newsletter-area">
                      <input type="email" placeholder="آدرس ایمیل شما" />
                      <button type="submit">ثبت نام</button>
                    </form>
                  </div>
                  {/* <!--/ End Footer Newsletter --> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Copyright --> */}
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="copyright-content">
                    {/* <!-- Copyright Text --> */}
                    <p>
                      © تمام حقوق  محفوظ است{' '}
                      <a target="_blank" href="#">
                       ibvvira.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/ End Copyright --> */}
        </footer>
    </>
  )
}

export default Footer