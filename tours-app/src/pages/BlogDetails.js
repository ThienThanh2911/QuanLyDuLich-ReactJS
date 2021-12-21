import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import API, { endpoints } from '../API';
export default function BlogDetails() {
    const [blog, setBlog] = useState([])
    const [user, setUser] = useState([])
    const { id } = useParams()

    useEffect(async () => {
        let res = await API.get(endpoints['blog-detail'](id))
        setBlog(res.data)
    }, [id])

    useEffect(async () => {
        let res = await API.get(endpoints["users"])
        setUser(res.data)
    })

    let username = ''
    user.map(u => {if(u.id === blog.user) username = u.name})
    console.log(username)

    return (
        <>
        <section className="section section-bg" id="call-to-action" style={{backgroundImage: "url(assets/images/banner-image-1-1920x500.jpg)"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="cta-content">
                            <br></br>
                            <br></br>
                            <h2>Single <em>blog post</em></h2>
                            <p>Chi tiết bài viết</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section" id="our-classes">
            <div className="container">
                <br></br>
                <br></br>
                <section className='tabs-content'>
                <article>
                    <h4>{ blog.name }</h4>

                    <p><i className="fa fa-user"></i> {username} &nbsp;|&nbsp; <i className="fa fa-calendar"></i> {blog.created_date} &nbsp;|&nbsp; <i className="fa fa-comments"></i>  15 comments</p>

                    <div><img src={blog.photo} alt="" /></div>

                    <br></br>

                    {blog.description}
                    
                    <ul className="social-icons">
                        <li /*</ul>tyle="color: var(--text-color)"*/>Share this:</li>
                        <li><a href="/#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="/#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="/#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="/#"><i className="fa fa-behance"></i></a></li>
                    </ul>
                </article>
                </section>

                <br></br>
                <br></br>
                <br></br>
                
                <section className='tabs-content'>
                    <div className="row">
                        <div className="col-md-8">
                            <h4>Comments</h4>
                            <ul className="features-items">
                                <li>
                                    <div className="feature-item" style={{marginBottom:"15px;"}}>
                                        <div className="left-icon">
                                            <img src="assets/images/features-first-icon.png" alt="First One" />
                                        </div>
                                        <div className="right-content">
                                            <h4>Thành <small>15.08.2021 10:10</small></h4>
                                            <p><em>"Bình luận 1 -------------------------------------------------------------------------------------------------------------------------------------------------------"</em></p>
                                        </div>
                                    </div>

                                    <div className="tabs-content">
                                        <div className="feature-item" style={{marginBottom:"15px;"}}>
                                            <div className="left-icon">
                                                <img src="assets/images/features-first-icon.png" alt="First One" />
                                            </div>
                                            <div className="right-content">
                                                <h4>Thành <small>15.08.2021 11:10</small></h4>
                                                <p><em>"Bình luận 2 - Reply --------------------------------------------------------------------------------------------------------------------------------------------------"</em></p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="feature-item" style={{marginBottom:"15px;"}}>
                                    <div className="left-icon">
                                        <img src="assets/images/features-first-icon.png" alt="second one" />
                                    </div>
                                    <div className="right-content">
                                        <h4>Thành <small>15.08.2021 12:10</small></h4>
                                        <p><em>"Bình luận 3 -------------------------------------------------------------------------------------------------------------------------------------------------------"</em></p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <h4>Leave a comment</h4>
                            
                            <div className="contact-form">
                                <form action="" method="post">
                                <div className="row">
                                    <div className="col-lg-12">
                                    <fieldset>
                                        <input name="name" type="text" id="name" placeholder="Your Name*" required="" />
                                    </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                    <fieldset>
                                        <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email*" required="" />
                                    </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                    <fieldset>
                                        <textarea name="message" rows="6" id="message" placeholder="Message" required=""></textarea>
                                    </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                    <fieldset>
                                        <button type="submit" id="form-submit" className="main-button">Submit</button>
                                    </fieldset>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
        </>
    )
}