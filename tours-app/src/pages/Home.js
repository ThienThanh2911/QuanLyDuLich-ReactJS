import React from 'react';

export default function Home() {
    return (
        <>
        <div className="main-banner" id="top">
            <video autoPlay muted loop id="bg-video">
                <source src="assets/images/video.mp4" type="video/mp4" />
            </video>

            <div className="video-overlay header-text">
                <div className="caption">
                    <h6>Chào mừng bạn đã tham gia</h6>
                    <h2><em>Khám phá</em> thế giới cùng chúng tôi!</h2>
                    <div className="main-button">
                        <a href="contact">Liên hệ ngay</a>
                    </div>
                </div>
            </div>
        </div>

        <section className="section" id="trainers">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-heading">
                            <h2>Tour <em>mới nhất</em></h2>
                            <img src="assets/images/line-dec.png" alt="" />
                            <p>Danh sách các chuyến đi nổi bật nhất</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="trainer-item">
                            <div className="image-thumb">
                                <img src="assets/images/product-1-720x480.jpg" alt="" />
                            </div>
                            <div className="down-content">
                                <span>
                                    300.000<sup>đ</sup>
                                </span>

                                <h4>Tour Miền Nam</h4>

                                <p>
                                    <i className="fa fa-calendar"></i> Mùa xuân &nbsp;&nbsp;&nbsp;

                                    <i className="fa fa-cube"></i> 20 đêm &nbsp;&nbsp;&nbsp;

                                    <i className="fa fa-plane"></i> Máy bay &nbsp;&nbsp;&nbsp;
                                </p>

                                <ul className="social-icons">
                                    <li><a href="package-details">+ Xem thông tin chi tiết</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="trainer-item">
                            <div className="image-thumb">
                                <img src="assets/images/product-2-720x480.jpg" alt="" />
                            </div>
                            <div className="down-content">
                                <span>
                                    300.000<sup>đ</sup>
                                </span>

                                <h4>Tour Miền Bắc</h4>

                                <p>
                                    <i className="fa fa-calendar"></i> Mùa đông &nbsp;&nbsp;&nbsp;

                                    <i className="fa fa-cube"></i> 20 đêm &nbsp;&nbsp;&nbsp;

                                    <i className="fa fa-plane"></i> Ô tô &nbsp;&nbsp;&nbsp;
                                </p>

                                <ul className="social-icons">
                                    <li><a href="package-details">+ Xem thông tin chi tiết</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="trainer-item">
                            <div className="image-thumb">
                                <img src="assets/images/product-3-720x480.jpg" alt="" />
                            </div>
                            <div className="down-content">
                                <span>
                                    300.000<sup>đ</sup>
                                </span>

                                <h4>Tour Miền Trung</h4>

                                <p>
                                    <i className="fa fa-calendar"></i> Mùa hè &nbsp;&nbsp;&nbsp;

                                    <i className="fa fa-cube"></i> 20 đêm &nbsp;&nbsp;&nbsp;

                                    <i className="fa fa-plane"></i> Du thuyền &nbsp;&nbsp;&nbsp;
                                </p>

                                <ul className="social-icons">
                                    <li><a href="package-details">+ Xem thông tin chi tiết</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <br></br>

                <div className="main-button text-center">
                    <a href="packages">Danh sách Tours</a>
                </div>
            </div>
        </section>

        <section className="section section-bg" id="schedule" style={{backgroundImage: "url(assets/images/about-fullscreen-1-1920x700.jpg)"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-heading dark-bg">
                            <h2>Thông tin <em>chi tiết</em></h2>
                            <img src="assets/images/line-dec.png" alt="" />
                            <p>Website quản lý du lịch IT82 - Thầy Dương Hữu Thành</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cta-content text-center">
                            <p>Châu Thiên Thành - 1851050130</p>

                            <p>Châu Thiên Tựu - 1851050179</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section" id="our-classes">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-heading">
                            <h2>Tin tức <em>mới nhất</em></h2>
                            <img src="assets/images/line-dec.png" alt="" />
                            <p>Danh sách các Blog</p>
                        </div>
                    </div>
                </div>
                <div className="row" id="tabs">
                <div className="col-lg-4">
                    <ul>
                    <li><a href='#tabs-1'>Blog số 1</a></li>
                    <li><a href='#tabs-2'>Blog số 2</a></li>
                    <li><a href='#tabs-3'>SBlog số 3</a></li>
                    <div className="main-rounded-button"><a href="blog.html">Đọc thêm</a></div>
                    </ul>
                </div>
                <div className="col-lg-8">
                    <section className='tabs-content'>
                    <article id='tabs-1'>
                        <img src="assets/images/blog-image-1-940x460.jpg" alt="" />
                        <h4>Blog số 1</h4>

                        <p><i className="fa fa-user"></i> Thành &nbsp;|&nbsp; <i className="fa fa-calendar"></i> 15.08.2021 10:10 &nbsp;|&nbsp; <i className="fa fa-comments"></i>  15 Bình luận</p>

                        <p>Nội dung Blog</p>
                        <div className="main-button">
                            <a href="blog-details">Đọc tiếp</a>
                        </div>
                    </article>
                    <article id='tabs-2'>
                        <img src="assets/images/blog-image-2-940x460.jpg" alt="" />
                        <h4>Blog số 2</h4>
                        <p><i className="fa fa-user"></i> Thành &nbsp;|&nbsp; <i className="fa fa-calendar"></i> 15.08.2021 10:10 &nbsp;|&nbsp; <i className="fa fa-comments"></i>  15 Bình luận</p>
                        <p>Nội dung Blog</p>
                        <div className="main-button">
                            <a href="blog-details">Đọc tiếp</a>
                        </div>
                    </article>
                    <article id='tabs-3'>
                        <img src="assets/images/blog-image-3-940x460.jpg" alt="" />
                        <h4>Blog số 3</h4>
                        <p><i className="fa fa-user"></i> Thành &nbsp;|&nbsp; <i className="fa fa-calendar"></i> 15.08.2021 10:10 &nbsp;|&nbsp; <i className="fa fa-comments"></i>  15 Bình luận</p>
                        <p>Nội dung Blog</p>
                        <div className="main-button">
                            <a href="blog-details">Đọc tiếp</a>
                        </div>
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
                            <h2>Liên hệ <em>chúng tôi</em></h2>
                            <p>Để được hỗ trợ nhanh chóng</p>
                            <div className="main-button">
                                <a href="contact">Liên hệ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section" id="features">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-heading">
                            <h2>Danh sách <em>thành viên</em></h2>
                            <img src="assets/images/line-dec.png" alt="waves" />
                            <p>-----------------------------------------</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <ul className="features-items">
                            <li className="feature-item">
                                <div className="left-icon">
                                    <img src="assets/images/features-first-icon.png" alt="First One" />
                                </div>
                                <div className="right-content">
                                    <h4>Thành</h4>
                                    <p><em>"Mã số sinh viên: 1851050130 ---------------------------------------------------------------------------------------------------------"</em></p>
                                </div>
                            </li>
                            <li className="feature-item">
                                <div className="left-icon">
                                    <img src="assets/images/features-first-icon.png" alt="second one" />
                                </div>
                                <div className="right-content">
                                    <h4>Tựu</h4>
                                    <p><em>"Mã số sinh viên: 1851050179 ---------------------------------------------------------------------------------------------------------"</em></p>
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
                                    <p><em>"Mã số sinh viên: 1851050130---------------------------------------------------------------------------------------------------------"</em></p>
                                </div>
                            </li>
                            <li className="feature-item">
                                <div className="left-icon">
                                    <img src="assets/images/features-first-icon.png" alt="training fifth" />
                                </div>
                                <div className="right-content">
                                    <h4>Tựu</h4>
                                    <p><em>"Mã số sinh viên: 1851050179---------------------------------------------------------------------------------------------------------"</em></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <br></br>

                <div className="main-button text-center">
                    <a href="membership">Đọc thêm</a>
                </div>
            </div>
        </section>
        </>
    )
}