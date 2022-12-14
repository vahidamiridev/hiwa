import Breadcrumb from '../../common/breadcrumb/Breadcrumb'
import Faqs from '../../components/qa-page/faqs/Faqs'
import FaqBottom from '../../components/qa-page/faq-bottom/FaqBottom'

const QA = () => {
  return (
    <>
      <Breadcrumb
        titles={{ nameTitle: 'سوالات', detailTitle: 'سوالات پرسیده شده' }}
      />
      <Faqs />
      <FaqBottom />
    </>
  )
}

export default QA
