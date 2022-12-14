import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <>
    <header className="header">
          {/* <!-- Topbar --> */}
          <div className="topbar">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-12">
                  {/* <!-- Top Contact --> */}
                  <div className="top-contact">
                    <div className="single-contact">
                      <i className="fa fa-phone"></i> تلفن : 03532270057
                    </div>
                    <div className="single-contact">
                      <i className="fa fa-envelope-open"></i>ایمیل :
                      setinco@gmail.com{' '}
                    </div>
                    <div className="single-contact">
                      <i className="fa fa-clock-o"></i>شروع : 8 تا 9 شب
                    </div>
                  </div>
                  {/* <!-- End Top Contact --> */}
                </div>
                <div className="col-lg-4 col-12">
                  <div className="topbar-right">
                    {/* <!-- Social Icons --> */}
                    <ul className="social-icons">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-dribbble"></i>
                        </a>
                      </li>
                    </ul>
                    {/* <!-- Right Bar --> */}
                    <div className="right-bar">
                      {/* <!-- Search Bar --> */}
                      <ul className="right-nav">
                        <li className="top-search">
                          <a href="#0">
                            <i className="fa fa-search"></i>
                          </a>
                        </li>
                        <li className="bar">
                          <a className="fa fa-bars"></a>
                        </li>
                      </ul>
                      {/* <!--/ End Search Bar --> */}
                      {/* <!-- Search Form --> */}
                      <div className="search-top">
                        <form action="#" className="search-form" method="get">
                          <input
                            type="text"
                            name="s"
                            value=""
                            placeholder="جستجو کنید"
                            onChange={()=>{}}
                          />
                          <button type="submit" id="searchsubmit">
                            <i className="fa fa-search"></i>
                          </button>
                        </form>
                      </div>
                      {/* <!--/ End Search Form --> */}
                    </div>
                    {/* <!--/ End Right Bar -->	 */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/ End Topbar --> */}
          {/* <!-- Middle Header --> */}
          <div className="middle-header">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="middle-inner">
                    <div className="row">
                      <div className="col-lg-2 col-md-3 col-12">
                        {/* <!-- Logo --> */}
                        <div className="logo">
                          {/* <!-- Image Logo --> */}
                          <div className="img-logo">
                            <a href="index-2.html">
                              <Image
                                width={173}
                                height={40}
                                src="/images/logo.png"
                                alt="#"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="mobile-nav"></div>
                      </div>
                      <div className="col-lg-10 col-md-9 col-12">
                        <div className="menu-area">
                          {/* <!-- Main Menu --> */}
                          <nav className="navbar navbar-expand-lg">
                            <div className="navbar-collapse">
                              <div className="nav-inner">
                                <div className="menu-home-menu-container">
                                  {/* <!-- Naviagiton --> */}
                                  <ul
                                    id="nav"
                                    className="nav main-menu menu navbar-nav"
                                  >
                                    <li className="icon-active">
                                      <a href="#">خانه</a>
                                      <ul className="sub-menu">
                                        <li>
                                          <a href="index-2.html">صفحه اصلی 1</a>
                                        </li>
                                        <li>
                                          <a href="index2.html">صفحه اصلی 2</a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li className="icon-active">
                                      <a href="#">خدمات ما</a>
                                      <ul className="sub-menu">
                                        <li>
                                          <a href="services.html">همه خدمات</a>
                                          بازاریابی
                                        </li>
                                        <li>
                                          <a href="service-business.html">
                                            استراتژی کسب و کار
                                          </a>
                                        </li>
                                        <li>
                                          <a href="service-develop.html">
                                            توسعه وب
                                          </a>
                                        </li>
                                        <li>
                                          <a href="service-market.html">
                                            تحقیقات بازار
                                          </a>
                                        </li>
                                        <li>
                                          <a href="service-advertise.html">
                                            نمونه تبلیغات
                                          </a>
                                        </li>
                                        <li>
                                          <a href="service-design.html">
                                            طراحی روند
                                          </a>
                                        </li>
                                        <li>
                                          <a href="service-marketing.html">
                                            بازاریابی دیجیتال
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li className="icon-active">
                                      <a href="#">نمونه کارها</a>
                                      <ul className="sub-menu">
                                        <li>
                                          <a href="portfolio.html">
                                            نمونه کارها
                                          </a>
                                        </li>
                                        <li>
                                          <a href="portfolio-single.html">
                                            جزئیات نمونه کار
                                          </a>
                                        </li>
                                        <li>
                                          <a href="portfolio-single-slider.html">
                                            نمونه کشویی نمونه کارها
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li className="icon-active">
                                      <a href="#">وبلاگ</a>
                                      <ul className="sub-menu">
                                        <li className="icon-active">
                                          <a href="#">طرح وبلاگ</a>
                                          <ul className="sub-menu">
                                            <li>
                                              <a href="blog-standard.html">
                                                وبلاگ استاندارد
                                              </a>
                                            </li>
                                            <li>
                                              <a href="blog-standard-sidebar.html">
                                                وبلاگ استاندارد کشوی
                                              </a>
                                            </li>
                                            <li>
                                              <a href="blog-grid.html">
                                                طرح شبکه بلاگ
                                              </a>
                                            </li>
                                            <li>
                                              <a href="blog-grid-sidebar.html">
                                                طرح شبکه بلاگ کشوی
                                              </a>
                                            </li>
                                          </ul>
                                        </li>
                                        <li className="icon-active">
                                          <a href="#">جزئیات وبلاگ</a>
                                          <ul className="sub-menu">
                                            <li>
                                              <a href="blog-single.html">
                                                جزئیات وبلاگ
                                              </a>
                                            </li>
                                            <li>
                                              <a href="blog-single-left.html">
                                                نوار کناری سمت چپ
                                              </a>
                                            </li>
                                            <li>
                                              <a href="blog-single-right.html">
                                                نوار کناری سمت راست
                                              </a>
                                            </li>
                                          </ul>
                                        </li>
                                      </ul>
                                    </li>
                                    <li className="icon-active">
                                      <a href="#">صفحات</a>
                                      <ul className="sub-menu">
                                        <li>
                                          <a href="about.html">درباره ما</a>
                                        </li>
                                        <li>
                                          <a href="team.html">تیم ما</a>
                                        </li>
                                        <li>
                                          <a href="pricing.html">
                                            برنامه قیمت گذاری
                                          </a>
                                        </li>
                                        <li>
                                          <a href="faqs.html">سوالات</a>
                                        </li>
                                        <li>
                                          <a href="404.html">404</a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="contact.html">تماس با ما</a>
                                    </li>
                                  </ul>
                                  {/* <!--/ End Naviagiton --> */}
                                </div>
                              </div>
                            </div>
                          </nav>
                          {/* <!--/ End Main Menu -->					 */}
                          <div className="right-button">
                            <a href="contact.html" className="bizwheel-btn">
                              دریافت قیمت
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/ End Middle Header --> */}
          {/* <!-- Sidebar Popup --> */}
          <div className="sidebar-popup">
            <div className="cross">
              <a className="btn">
                <i className="fa fa-close"></i>
              </a>
            </div>
            <div className="single-content">
              <h4>درباره ما</h4>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
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
              <div className="side-button">
                <a href="portfolio.html" className="bizwheel-btn theme-2 effect">
                  نمایش نمونه کارها
                </a>
              </div>
            </div>
            <div className="single-content">
              <h4>پیوندهای مهم</h4>
              <ul className="links">
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
                  <a href="#">وبلاگ و اخبار</a>
                </li>
                <li>
                  <a href="#">تماس با ما</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!--/ Sidebar Popup -->	 */}
        </header>
    </>
  )
}

export default Header