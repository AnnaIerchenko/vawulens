import Header from '../../components/Header'
import './about.css'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam neque sed nisi! Aperiam nesciunt explicabo soluta cumque officia id fugiat?
      </Header>
      <section className='about__story'>
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt='story'/>
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vel eum pariatur incidunt veniam saepe consequatur atque aperiam sequi accusantium!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iste delectus perferendis optio adipisci. Accusantium iusto repellendus id nam blanditiis!
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, molestias.
              
            </p>
          </div>
        </div>
      </section>

      <section className='about__Vision'>
        <div className="container about__vision-container">
        
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vel eum pariatur incidunt veniam saepe consequatur atque aperiam sequi accusantium!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iste delectus perferendis optio adipisci. Accusantium iusto repellendus id nam blanditiis!
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt='Vision'/>
          </div>
        </div>
      </section>

      <section className='about__mission'>
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt='mission'/>
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vel eum pariatur incidunt veniam saepe consequatur atque aperiam sequi accusantium!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iste delectus perferendis optio adipisci. Accusantium iusto repellendus id nam blanditiis!
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, molestias.
              
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About