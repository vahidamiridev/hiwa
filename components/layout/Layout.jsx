import Header from '../header/Header'
import Footer from '../footer/Footer'
import PreLoader from '../../ui/preLoader/PreLoader'
import Option from '../option/Option'


const Layout = ({children}) => {
  return (
    <>
    <PreLoader />
    <Option />
    <Header/>
    {children}
    <Footer/>

    </>
  )
}

export default Layout