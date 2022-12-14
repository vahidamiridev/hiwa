const SkillArea = () => {
  return (
    <>
      <section
        className="skill-area section-space"
        style={{
          backgroundImage: "url('images/skill-bg.jpg')",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-12">
              <div className="section-title  default text-left ">
                <div className="section-top">
                  <h1>
                    <span>مهارت های خلاقانه</span>
                    <b>مارک ها و محصولات اصلی ترین چیز است</b>
                  </h1>
                </div>
                <div className="section-bottom">
                  <div className="text">
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                  </div>
                </div>
              </div>
              <div className="skill-main">
                {/* <!-- Single Skill --> */}
                <div className="single-skill">
                  <div className="skill-info">
                    <h4>طراحی خلاقانه</h4>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="47"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        width: '70%;',
                      }}
                    >
                      <span className="percent">70%</span>
                    </div>
                  </div>
                </div>
                {/* <!--/ End Single Skill --> */}
                {/* <!-- Single Skill --> */}
                <div className="single-skill">
                  <div className="skill-info">
                    <h4>نمونه کارها</h4>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="47"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        width: '50%;',
                      }}
                    >
                      <span className="percent">50%</span>
                    </div>
                  </div>
                </div>
                {/* <!--/ End Single Skill --> */}
                {/* <!-- Single Skill --> */}
                <div className="single-skill">
                  <div className="skill-info">
                    <h4>فن آوری های مدرن</h4>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="47"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        width: '70%;',
                      }}
                    >
                      <span className="percent">70%</span>
                    </div>
                  </div>
                </div>
                {/* <!--/ End Single Skill --> */}
                {/* <!-- Single Skill --> */}
                <div className="single-skill">
                  <div className="skill-info">
                    <h4>آثار انیمیشن</h4>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="47"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        width: '70%;',
                      }}
                    >
                      <span className="percent">70%</span>
                    </div>
                  </div>
                </div>
                {/* <!--/ End Single Skill --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SkillArea
