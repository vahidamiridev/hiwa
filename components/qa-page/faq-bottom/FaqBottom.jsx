

const FaqBottom = () => {
  return (
    <>
    	<div className="faq-bottom">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
						<div className="section-title default text-center">
							<div className="section-top">
								<h1><span>با ما تماس بگیرید</span><b>هنوز شانس ندارید؟</b></h1>
							</div>
							<div className="section-bottom">
								<div className="text">
									<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-12">
						{/* <!-- Contact Form --> */}
						<div className="contact-form-area faq-form m-top-30">
							<div className="form-inner">
								<div className="form-title">
									<h4>در تماس باشید</h4>
									<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
								</div>
								<form className="form" action="#" method="post">
									<div className="row">
										<div className="col-12">
											<div className="form-group">
												<div className="icon"><i className="fa fa-user"></i></div>
												<input type="text" name="user-name" placeholder="نام و نام خانوادگی"/>
											</div>
										</div>
										<div className="col-12">
											<div className="form-group">
												<div className="icon"><i className="fa fa-envelope"></i></div>
												<input type="email" name="email" placeholder="ایمیل را تایپ کنید"/>
											</div>
										</div>
										<div className="col-12">
											<div className="form-group">
												<div className="icon"><i className="fa fa-tag"></i></div>
												<input type="text" name="subject" placeholder="موضوع را تایپ کنید"/>
											</div>
										</div>
										<div className="col-12">
											<div className="form-group textarea">
												<div className="icon"><i className="fa fa-pencil"></i></div>
												<textarea type="textarea" placeholder="پیغام تو" rows="5"></textarea>
											</div>
										</div>
										<div className="col-12">
											<div className="form-group button">
												<button type="submit" className="bizwheel-btn theme-2">ارسال</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
						{/* <!--/ End contact Form --> */}
					</div>
				</div>
			</div>
		</div>
    </>
  )
}

export default FaqBottom