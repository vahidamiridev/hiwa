import React from 'react'
import Image from 'next/image'

const ErrorArea = () => {
  return (
    <>
       <section className="error">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 offset-lg-1 col-md-6 col-12">
                  <div className="error-inner">
                    <h4>404</h4>
                    <h2>
                      صفحه <span>پیدا نشد</span>
                    </h2>
                    <p>
                      به نظر می رسد در این مکان چیزی پیدا نشده است. لطفا سعی
                      کنید از فرم جستجوی زیر چیزی پیدا کنید. یا به عقب بروید
                    </p>
                    <div className="button">
                      <a href="#" className="bizwheel-btn">
                        <i className="fa fa-long-arrow-left"></i>برگشت به خانه
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <Image
                    width={550}
                    height={267}
                    src="/images/error-img.png"
                    alt="#"
                  />
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default ErrorArea