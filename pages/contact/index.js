import Breadcrumb from '../../common/breadcrumb/Breadcrumb'
import ContactUs from '../../components/contact-page/contact-us/ContactUs'

function ContactPage() {
  return (
    <>
      <Breadcrumb
        titles={{ nameTitle: 'تماس با ما', detailTitle: 'آدرس ما' }}
      />
      <ContactUs />
    </>
  )
}

export default ContactPage
