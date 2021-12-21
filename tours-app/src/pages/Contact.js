import React from 'react';
class Contact extends React.Component {
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
                                <h2>Feel free to <em>Contact Us</em></h2>
                                <p>Cứ liên hệ hỗ trợ nếu cần</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="features">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading">
                                <h2>contact <em> info</em></h2>
                                <img src="assets/images/line-dec.png" alt="waves" />
                                
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="icon">
                                <i className="fa fa-phone"></i>
                            </div>

                            <h5><a href="/#">+84 969 700 703</a></h5>

                            <br></br>
                        </div>

                        <div className="col-md-4">
                            <div className="icon">
                                <i className="fa fa-envelope"></i>
                            </div>

                            <h5><a href="/#">contact@twintour.com</a></h5>

                            <br></br>
                        </div>

                        <div className="col-md-4">
                            <div className="icon">
                                <i className="fa fa-map-marker"></i>
                            </div>

                            <h5 /*style="color: var(--text-color)"*/>371 Nguyễn Kiệm</h5>

                            <br></br>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="contact-us" style={{marginTop: "0"}}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-xs-12">
                            <div id="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.401713428098!2d106.67419156296111!3d10.803619805641931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528e1f241211f%3A0xc9ef195798144b1f!2zxJDhuqFpIGjhu41jIE3hu58gVFAuSENN!5e0!3m2!1svi!2s!4v1629010769630!5m2!1svi!2s" title="Location" width="100%" height="600px" frameBorder="0" style={{border:"0"}} allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12">
                            <div className="contact-form section-bg" style={{backgroundImage: "url(assets/images/contact-1-720x480.jpg)"}}>
                                <form id="contact" action="" method="post">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                    <fieldset>
                                        <input name="name" type="text" id="name" placeholder="Your Name*" required="" />
                                    </fieldset>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                    <fieldset>
                                        <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email*" required="" />
                                    </fieldset>
                                    </div>
                                    <div className="col-md-12 col-sm-12">
                                    <fieldset>
                                        <input name="subject" type="text" id="subject" placeholder="Subject" />
                                    </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                    <fieldset>
                                        <textarea name="message" rows="6" id="message" placeholder="Message" required=""></textarea>
                                    </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                    <fieldset>
                                        <button type="submit" id="form-submit" className="main-button">Send Message</button>
                                    </fieldset>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}
export default Contact