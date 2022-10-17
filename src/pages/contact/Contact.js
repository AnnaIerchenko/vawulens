import './contact.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsTelegram} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, nesciunt.
      </Header>
      <section className='contact'>
        <div className='container contact__container'>
          <div className="contact__wrapper">
            <a href='mailto:sozvezdie_anna@mail.ru' target="_blank" rel="noreferrer noopener">
              <MdEmail />
            </a>
            <a href='http://t.me/anna_webworld' target="_blank" rel="noreferrer noopener">
              <BsTelegram />
            </a>
            <a href='https://wa.me/+79780782871' target="_blank" rel="noreferrer noopener">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact