import React from 'react'
import Helmet from 'react-helmet'
import thumb01 from '../assets/images/thumbs/giveback.png'
import thumb02 from '../assets/images/thumbs/fitness.png'
import thumb03 from '../assets/images/thumbs/gameview.png'
import Resume from '../assets/Resume.pdf'
import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: "https://givebackvolunteer.herokuapp.com/",
    thumbnail: thumb01,
    caption: 'GiveBack',
    description: 'Web application focused on helping organizations and volunteers organize events.',
    tech: 'MongoDB, Mongoose, Express, React, Node, Material UI, SaSS, React Big Calendar',
    github: 'https://github.com/segwuonwu/GiveBack'
  },
  {
    id: '2',
    source: "https://ultimate-fitness-planner.herokuapp.com/",
    thumbnail: thumb02,
    caption: 'Fitness Planner',
    description: 'Web application focused on helping users plan out their workout exercises.',
    tech: 'Flask, oAuth (in Python), HTML, CSS, Bootstrap, postgress',
    github: 'https://github.com/segwuonwu/UltimateFitnessTracker'
  },
  {
    id: '3',
    source: "https://segwuonwu.github.io/Brick-Breaker/",
    thumbnail: thumb03,
    caption: 'Brick Breaker',
    description: 'Web application Break Breaker game.',
    tech: 'Javascript, HTML, CSS, Canvas',
    github: 'https://github.com/segwuonwu/Brick-Breaker'
  },
]

const HomeIndex = () => {
  const siteTitle = 'My Portfolio'
  const siteDescription = 'Site description'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              About Me
            </h2>
          </header>
          <p>
          I'm a recent graduate with a passion for learning and problem-solving which drives my interest in web development. My adaptability, perseverance and problem-solving methods have been developed from years of working with individuals with disabilities. I translate these valuable skills to my work environment, which allows me to offer unique and creative approaches to any project or challenge.
          </p>
        </section>

        <section id="two">
          <h2>
            Recent Project <small>(click for live view)</small> 
          </h2>
        
          <Gallery
            images={DEFAULT_IMAGES.map(
              ({ id, source, thumbnail, caption, description, tech, github }) => ({
                source,
                thumbnail,
                caption,
                description,
                tech,
                github,
              })
            )}
          />
        </section>

        <section id="three">
          <h2>Hard Skills</h2>
          <div className="row">
            <div className="3u 6u$(small)">
              <div className="labeled-icons">
                JavaScript<br/>Python<br/>Java<br/>React<br/>Node.js<br/>Gatsby.js<br/>Express
              </div>
            </div>
            <div className="3u 6u$(small)">
                <div className="labeled-icons">
                    CSS<br/>HTML<br/>EJS<br/>ES6<br/>JSX<br/>Git<br/>
                </div>
            </div>
            <div className="3u 6u$(small)">
                <div className="labeled-icons">
                    API<br/>Axios<br/>Fetch<br/>Bootstrap<br/>Materialize<br/>Heroku<br/>
                </div>
            </div>
            <div className="3u 6u$(small)">
                <div className="labeled-icons">
                    SQL<br/>PostgreSQL<br/>Sequelize<br/>MongoDB<br/>Mongoose<br/>Flask<br/>
                </div>
            </div>
        </div>
        </section>

        <section id="four">
          <h2>Get In Touch </h2>
          <h4>Lets build technology together...</h4>

          <div className="row">
            <div className="3u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h1>
                    <a href="https://linkedin.com/in/solomonegwuonwu" target="_blank" rel="noopener noreferrer" className="icon fa-linkedin"><span className="label">Linked In</span></a>
                  </h1>
                </li>
              </ul>
            </div>
            <div className="3u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h1>
                    <a  href="https://github.com/segwuonwu" target="_blank" rel="noopener noreferrer" className="icon fa-github"><span className="label">Github</span>
                    </a>
                  </h1>
                </li>
              </ul>
            </div>
            <div className="3u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h1>
                    <a href="mailto:segwuonwu@gmail.com" target="_blank" rel="noopener noreferrer" className="icon fa-envelope-o"><span className="label">Email</span>
                    </a>
                  </h1>
                </li>
              </ul>
            </div>
            <div className="3u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h1>
                      <a href={Resume} target="_blank" rel="noopener noreferrer" className="icon fa-file">
                        <span className="label">Resume</span></a>
                  </h1>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
