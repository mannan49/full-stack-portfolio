import "./Header.css"
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h4>Hello I am</h4>
        <h1>Manan Nasir</h1>
        <h4 className='text-light'>Full Stack Developer</h4>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img className='me_img' src="https://res.cloudinary.com/dqmgf14ee/image/upload/v1756146654/portfolio/curemd_profile_without_bg_i8ifvg.png" alt="me" />
        </div>
        
        <a href="#contact" className='scroll_down'>Scroll Down</a>



      </div>
    </header>
  )
}

export default Header;