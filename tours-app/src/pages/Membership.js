import React from 'react';
class Membership extends React.Component {
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
                                <h2>Read our <em>Membership</em></h2>
                                <p>Danh sách các thành viên</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="features">
                <div className="container">
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="features-items">
                                <li className="feature-item">
                                    <div className="left-icon">
                                        <img src="assets/images/features-first-icon.png" alt="First One" />
                                    </div>
                                    <div className="right-content">
                                        <h4>Thành</h4>
                                        <p><em>"Mã số sinh viên: 1851050130---------------------------------------------------------------------------------------------------------"</em></p>
                                    </div>
                                </li>
                                <li className="feature-item">
                                    <div className="left-icon">
                                        <img src="assets/images/features-first-icon.png" alt="second one" />
                                    </div>
                                    <div className="right-content">
                                        <h4>Tựu</h4>
                                        <p><em>"Mã số sinh viên: 1851050179---------------------------------------------------------------------------------------------------------"</em></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul className="features-items">
                                <li className="feature-item">
                                    <div className="left-icon">
                                        <img src="assets/images/features-first-icon.png" alt="fourth muscle" />
                                    </div>
                                    <div className="right-content">
                                        <h4>Thành</h4>
                                        <p><em>"Mã số sinh viên: 1851050130 ---------------------------------------------------------------------------------------------------------"</em></p>
                                    </div>
                                </li>
                                <li className="feature-item">
                                    <div className="left-icon">
                                        <img src="assets/images/features-first-icon.png" alt="training fifth" />
                                    </div>
                                    <div className="right-content">
                                        <h4>Tựu</h4>
                                        <p><em>"Mã số sinh viên: 1851050179 ---------------------------------------------------------------------------------------------------------"</em></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}
export default Membership