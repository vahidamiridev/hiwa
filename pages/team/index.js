import OurTeam from '../../components/team/our-tem/OurTeam'
import Breadcrumb from '../../common/breadcrumb/Breadcrumb'

const TeamPage = () => {
  return (
    <>
      <Breadcrumb titles={{ nameTitle: 'تیم ما', detailTitle: 'رهبران ما' }} />
      <OurTeam />
    </>
  )
}

export default TeamPage
