import React from 'react'
import "./Home.css"
// import hero from "../Pic/hero.png"
// import HTML5 from "../Pic/HTML5.png"
// import CSS3 from "../Pic/CSS3.png"
// import Bootstrap from "../Pic/Bootstrap.png"
import JavaScript from "../Pic/JavaScript.png"
import React2 from "../Pic/React2.png"
import Azure from "../Pic/Azure.png"
// import Git from "../Pic/Git.png"
import { Typewriter } from 'react-simple-typewriter'


const Home = () => {
  return (
    <>
        <section className='hero' id='home'>
            <div className='container f_flex top'>
                <div className='left top'>
                    <h3>WELCOME TO MY WORLD</h3>
                    <h1> 
                        Hi, I'm <span>Mahsa</span>
                    </h1>
                    <h2>
                        a <span>
                         Web Developer & Cloud Engineer
                            {/* <Typewriter words={[' Web Developer. ', ' Cloud Engineer ']} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={200} /> */}
                        </span>
                    </h2>

                    <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                    
                    <div className='hero_btn d_flex'>
                        <div className='col_1'>
                            <h4>FIND WITH ME</h4>
                            <div className='button'>
                                <a href='https://www.linkedin.com/in/mahsa-haddadi/'>
                                    <button className='btn_shadow'>
                                        <i className='fab fa-linkedin-in'></i>
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className='col_1'>
                            <h4>BEST SKILL ON</h4>
                            <div className='btn-group'>
                                {/* <button className='btn_shadow'>
                                    <img src={HTML5} alt='' />
                                </button>
                                <button className='btn_shadow'>
                                    <img src={CSS3} alt='' />
                                </button> 
                                <button className='btn_shadow'>
                                    <img src={Bootstrap} alt='' />
                                </button>  */}
                                <button className='btn_shadow'>
                                    <img src={JavaScript} alt='' />
                                </button>
                                <button className='btn_shadow'>
                                    <img src={React2} alt='' />
                                </button>
                                <button className='btn_shadow'>
                                    <img src={Azure} alt='' />
                                </button>
                                {/* <button className='btn_shadow'>
                                    <img src={Git} alt='' />
                                </button> */}
                            </div>
                            
                        </div>
                    </div>
                </div>

                {/* <div className='right'>
                    <div src={hero} alt='' />
                </div> */}
            </div>

        </section>
    </>
  )
}

export default Home