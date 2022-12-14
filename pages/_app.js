import Script from 'next/script'

import '../styles/globals.css'
import '../styles/responsive.css'

import 'font-awesome/css/font-awesome.min.css'
import Layout from '../components/layout/Layout'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="/library/js/jquery-3.6.1.min.js" />
      <Script src="/library/js/jquery-migrate-3.0.0.js" />
      <Script src="/library/js/popper.min.js" />
      <Script src="/library/js/bootstrap.min.js" />
      <Script src="/library/js/modernizr.min.js" />
      <Script src="/library/js/scrollup.js" />
      <Script src="/library/js/jquery-fancybox.min.js" />
      <Script src="/library/js/cubeportfolio.min.js" />
      <Script src="/library/js/slicknav.min.js" />
      <Script src="/library/js/waypoints.min.js" />
      <Script src="/library/js/jquery.counterup.min.js" />
      <Script src="/library/js/slicknav.min.js" />
      <Script src="/library/js/owl-carousel.min.js" />
      <Script src="/library/js/easing.js" />
      <Script src="/library/js/theme-option.js" />
      <Script src="/library/js/magnific-popup.min.js" />
      <Script src="https://maps.google.com/maps/api/js?key=AIzaSyDGqTyqoPIvYxhn_Sa7ZrK5bENUWhpCo0w" />
      <Script src="js/gmap.min.html" />
      <Script src="js/map-script.html" />
      <Script src="/library/js/active.js" />
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
