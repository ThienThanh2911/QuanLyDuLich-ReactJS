import React from 'react';
class About extends React.Component {
    render() {
        return (
            <>
            <section className="section section-bg" id="call-to-action" style={{backgroundImage: "url(assets/images/banner-image-1-1920x500.jpg)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="cta-content">
                                <br></br>
                                <br></br>
                                <h2>Learn more <em>About Us</em></h2>
                                <p>Tìm hiểu thêm về chúng tôi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="our-classes">
                <div className="container">
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="row" id="tabs">
                    <div className="col-lg-4">
                        <ul>
                        <li><a href='#tabs-1'><i className="fa fa-soccer-ball-o"></i> Our Goals</a></li>
                        <li><a href='#tabs-2'><i className="fa fa-briefcase"></i> Our Work</a></li>
                        <li><a href='#tabs-3'><i className="fa fa-heart"></i> Our Passion</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-8">
                        <section className='tabs-content'>
                        <article id='tabs-1'>
                            <img src="assets/images/about-image-1-940x460.jpg" alt="" />
                            <h4>Our Goals</h4>

                            <p>Dòng 1</p>

                            <p>Dòng 2</p>

                            <p>Dòng 3</p>
                        
                            <p>Dòng 4</p>
                        </article>
                        <article id='tabs-2'>
                            <img src="assets/images/about-image-2-940x460.jpg" alt="" />
                            <h4>Our Work</h4>
                            <p>Dòng 1</p>
                            
                            <p>Dòng 2</p>

                            <p>Dòng 3</p>
                            
                            <p>Dòng 4</p>
                        </article>
                        <article id='tabs-3'>
                            <img src="assets/images/about-image-3-940x460.jpg" alt="" />
                            <h4>Our Passion</h4>
                            <p>Dòng 1</p>
                            
                            <p>Dòng 2</p>

                            <p>Dòng 3</p>
                            
                            <p>Dòng 4</p>
                        </article>
                        </section>
                    </div>
                    </div>
                </div>
            </section>

            <section className="section section-bg" id="call-to-action" style={{backgroundImage: "url(assets/images/banner-image-1-1920x500.jpg)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="cta-content">
                                <h2>Send us a <em>message</em></h2>
                                <p>Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris a nisi luctus imperdiet.</p>
                                <div className="main-button">
                                    <a href="contact">Contact us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}
export default About