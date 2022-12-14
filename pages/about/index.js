import Breadcrumb from '../../common/breadcrumb/Breadcrumb'
import AboutUs from '../../components/about-page/about-us/AboutUs'
import SkillArea from '../../components/about-page/skill-area/SkillArea'

function AboutPage() {
  return (
    <>
      <div id="bg">
        <div id="page" className="site">
          <Breadcrumb
            titles={{ nameTitle: 'درباره ما', detailTitle: 'درباره شرکت' }}
          />
          <AboutUs />
          <SkillArea />
        </div>
      </div>
    </>
  )
}
export default AboutPage
