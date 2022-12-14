const Breadcrumb = ({ titles }) => {
  return (
    <>
      <div
        className="breadcrumbs overlay"
        style={{
          backgroundImage: "url('images/breadcrumb.jpg')",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bread-inner">
                {/* <!-- Bread Menu --> */}
                <div className="bread-menu">
                  <ul>
                    <li>
                      <a href="index-2.html">خانه</a>
                    </li>
                    <li>
                      <a href="about.html">{titles.nameTitle}</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- Bread Title --> */}
                <div className="bread-title">
                  <h2>{titles.detailTitle}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Breadcrumb
