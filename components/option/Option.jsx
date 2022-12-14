import React from 'react'
import Image from 'next/image'

const Option = () => {
  return (
    <>
     <div className="elena-options">
          <div className="icon inOut">
            <i className="fa fa-cog fa-spin"></i>
          </div>
          <div className="single-option">
            <h4>طرح بندی را انتخاب کنید</h4>
            <div className="select-layout">
              <a className="full-width" value="full-width">
                تمام صفحه
              </a>
              <a className="boxed" value="boxed">
                جعبه دار
              </a>
            </div>
          </div>
          <div className="single-option">
            <h4>طرح پس زمینه</h4>
            <ul className="bg-pattern">
              <li className="bg-one">
                <a href="#">
                  <Image
                    width={400}
                    height={400}
                    src="/images/bg-1.png"
                    alt="#"
                  />
                </a>
              </li>
              <li className="bg-two">
                <a href="#">
                  <Image
                    width={200}
                    height={200}
                    src="/images/bg-2.png"
                    alt="#"
                  />
                </a>
              </li>
              <li className="bg-three">
                <a href="#">
                  <Image
                    width={412}
                    height={412}
                    src="/images/bg-3.png"
                    alt="#"
                  />
                </a>
              </li>
              <li className="bg-four">
                <a href="#">
                  <Image
                    width={410}
                    height={410}
                    src="/images/bg-4.png"
                    alt="#"
                  />
                </a>
              </li>
              <li className="bg-five">
                <a href="#">
                  <Image
                    width={200}
                    height={200}
                    src="/images/bg-5.png"
                    alt="#"
                  />
                </a>
              </li>
              <li className="bg-six">
                <a href="#">
                  <Image
                    width={350}
                    height={259}
                    src="/images/bg-6.png"
                    alt="#"
                  />
                </a>
              </li>
              <li className="bg-seven">
                <a href="#">
                  <Image
                    width={512}
                    height={512}
                    src="/images/bg-7.png"
                    alt="#"
                  />
                </a>
              </li>
              <li className="bg-eight">
                <a href="#">
                  <Image
                    width={400}
                    height={400}
                    src="/images/bg-8.png"
                    alt="#"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="single-option">
            <h4>انتخاب رنگ</h4>
            <span className="skin1"></span>
            <span className="skin2"></span>
            <span className="skin3"></span>
            <span className="skin4"></span>
          </div>
        </div>
    </>
  )
}

export default Option