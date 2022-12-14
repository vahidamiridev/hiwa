import Image from 'next/image'

const Faqs = () => {
  return (
    <>
      <section className="faqs section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-12">
              <div className="faqs-main m-top-30">
                <div className="row">
                  <div className="col-12">
                    <div id="accordion" role="tablist">
                      {/* <!-- Single Faq --> */}
                      <div className="single-faq">
                        <div className="faq-heading" role="tab" id="faq1">
                          <h4 className="faq-title">
                            <a
                              data-toggle="collapse"
                              href="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              <i className="fa fa-pencil"></i>چگونه می توانم
                              تجارت آنلاین خود را شروع کنم؟
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          role="tabpanel"
                          aria-labelledby="faq1"
                          data-parent="#accordion"
                        >
                          <div className="faq-body">
                            <p>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                              صنعت چاپ، و با استفاده از طراحان گرافیک است،
                              چاپگرها و متون بلکه روزنامه و مجله در ستون و
                              سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                              مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                              کاربردی می باشد، کتابهای زیادی در شصت و سه درصد
                              گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را
                              می طلبد، تا با نرم افزارها شناخت بیشتری را برای
                              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
                              پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان
                              امید داشت که تمام و دشواری موجود در ارائه
                              راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                              مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                              سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                              استفاده قرار گیرد.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!--/ End Single Faq --> */}
                      {/* <!-- Single Faq --> */}
                      <div className="single-faq">
                        <div className="faq-heading" role="tab" id="faq2">
                          <h4 className="faq-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              href="#collapseTwo"
                              aria-expanded="true"
                              aria-controls="collapseTwo"
                            >
                              <i className="fa fa-pencil"></i> چگونه می توانم
                              تجارت آنلاین خود را شروع کنم؟
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          role="tabpanel"
                          aria-labelledby="faq2"
                          data-parent="#accordion"
                        >
                          <div className="faq-body">
                            <p>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                              صنعت چاپ، و با استفاده از طراحان گرافیک است،
                              چاپگرها و متون بلکه روزنامه و مجله در ستون و
                              سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                              مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                              کاربردی می باشد، کتابهای زیادی در شصت و سه درصد
                              گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را
                              می طلبد، تا با نرم افزارها شناخت بیشتری را برای
                              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
                              پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان
                              امید داشت که تمام و دشواری موجود در ارائه
                              راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                              مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                              سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                              استفاده قرار گیرد.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!--/ End Single Faq --> */}
                      {/* <!-- Single Faq --> */}
                      <div className="single-faq">
                        <div className="faq-heading" role="tab" id="faq3">
                          <h4 className="faq-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              href="#collapseThree"
                              aria-expanded="true"
                              aria-controls="collapseThree"
                            >
                              <i className="fa fa-pencil"></i>چگونه می توانم
                              تجارت آنلاین خود را شروع کنم؟
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          role="tabpanel"
                          aria-labelledby="faq3"
                          data-parent="#accordion"
                        >
                          <div className="faq-body">
                            <p>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                              صنعت چاپ، و با استفاده از طراحان گرافیک است،
                              چاپگرها و متون بلکه روزنامه و مجله در ستون و
                              سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                              مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                              کاربردی می باشد، کتابهای زیادی در شصت و سه درصد
                              گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را
                              می طلبد، تا با نرم افزارها شناخت بیشتری را برای
                              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
                              پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان
                              امید داشت که تمام و دشواری موجود در ارائه
                              راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                              مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                              سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                              استفاده قرار گیرد.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!--/ End Single Faq --> */}
                      {/* <!-- Single Faq --> */}
                      <div className="single-faq">
                        <div className="faq-heading" role="tab" id="faq4">
                          <h4 className="faq-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              href="#collapseFour"
                              aria-expanded="true"
                              aria-controls="collapseFour"
                            >
                              <i className="fa fa-pencil"></i>چگونه می توانم
                              تجارت آنلاین خود را شروع کنم؟
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseFour"
                          className="collapse"
                          role="tabpanel"
                          aria-labelledby="faq4"
                          data-parent="#accordion"
                        >
                          <div className="faq-body">
                            <p>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                              صنعت چاپ، و با استفاده از طراحان گرافیک است،
                              چاپگرها و متون بلکه روزنامه و مجله در ستون و
                              سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                              مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                              کاربردی می باشد، کتابهای زیادی در شصت و سه درصد
                              گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را
                              می طلبد، تا با نرم افزارها شناخت بیشتری را برای
                              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
                              پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان
                              امید داشت که تمام و دشواری موجود در ارائه
                              راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                              مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                              سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                              استفاده قرار گیرد.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!--/ End Single Faq --> */}
                      {/* <!-- Single Faq --> */}
                      <div className="single-faq">
                        <div className="faq-heading" role="tab" id="faq5">
                          <h4 className="faq-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              href="#collapseFive"
                              aria-expanded="true"
                              aria-controls="collapseFive"
                            >
                              <i className="fa fa-pencil"></i>چگونه می توانم
                              تجارت آنلاین خود را شروع کنم؟
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseFive"
                          className="collapse"
                          role="tabpanel"
                          aria-labelledby="faq5"
                          data-parent="#accordion"
                        >
                          <div className="faq-body">
                            <p>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                              صنعت چاپ، و با استفاده از طراحان گرافیک است،
                              چاپگرها و متون بلکه روزنامه و مجله در ستون و
                              سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                              مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                              کاربردی می باشد، کتابهای زیادی در شصت و سه درصد
                              گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را
                              می طلبد، تا با نرم افزارها شناخت بیشتری را برای
                              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
                              پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان
                              امید داشت که تمام و دشواری موجود در ارائه
                              راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                              مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                              سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                              استفاده قرار گیرد.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!--/ End Single Faq --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-12">
              <div className="faq-img m-top-30">
                <Image width={447} height={521} src="/images/faq.png" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Faqs
