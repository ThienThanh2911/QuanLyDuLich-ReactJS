import React, { useContext, useEffect, useState } from 'react';
import Moment from 'react-moment';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import cookies from 'react-cookies';
import { Link } from 'react-router-dom';
import API, { endpoints } from '../API';
import { UserContext } from '../App';
export default function BlogDetails() {
    const [blog, setBlog] = useState([])
    const [comment, setComment] = useState([])
    const [commentContent, setContent] = useState([])
    const [changed, setChanged] = useState(1)
    const [rate, setRating] = useState(0)
    const auth = useContext(UserContext)
    const { id } = useParams()

    let user = auth
    if (cookies.load("user") != null)
      user = cookies.load("user")
    
    useEffect(async () => {
        try {
            let res = await API.get(endpoints['blog-detail'](id), {
                headers: {
                "Authorization": `Bearer ${cookies.load("access_token")}`
                }
            })
            setBlog(res.data)
            setRating(res.data.rate)
            console.info(blog)
        } catch (err) {
            console.error(err)
        }

        try{
            let res = await API.get(endpoints["blog-comment"](id))
            setComment(res.data)
          } catch (err) {
            console.error(err)
          }
    }, [changed])

    const addComment = async (event) => {
        event.preventDefault()
  
        try {
          let res = await API.post(endpoints['blog-add-comment'](id), {
            "content": commentContent
          }, {
            headers: {
              "Authorization": `Bearer ${cookies.load("access_token")}`
            }
          })
  
          comment.push(res.data)
          setComment(comment)
          setChanged(comment.length)
  
        } catch (err) {
          console.error(err)
        }
      }
  
      const saveRating = async (rate) => {
        try {
          let res = await API.post(endpoints['blog-rating'](id), {
            "rating": rate
          }, {
            headers: {
              "Authorization": `Bearer ${cookies.load("access_token")}`
            }
          })
          console.info(res.data)
        } catch (err) {
          console.error(err)
        }
      }
    
    let commentinput =  <div className="col-md-4" style={{width:"370px"}}>
                          <h4>Leave a comment</h4>
                          <div className="contact-form">
                          <div className="row">
                            <div className="col-lg-12">
                              <em><Link to="/signin">Đăng nhập</Link> để gửi bình luận</em>
                            </div>
                            </div>
                          </div>
                        </div>

    let rating = ""

    if (user != null && user != undefined) {
      commentinput = <div className="col-md-4">
                  <h4>Leave a comment</h4>
                  
                  <div className="contact-form">
                      <form onSubmit={addComment} method="post">
                        <div className="row">
                          <div className="col-lg-12">
                            <fieldset>
                              <input name="name" type="text" id="name" placeholder="Your name*" value={user.first_name} required="" disabled="true" />
                            </fieldset>
                          </div>
                          <div className="col-lg-12">
                            <fieldset>
                              <input name="email" type="text" id="email" placeholder="Your email*" value={user.email} required="" disabled="true" />
                            </fieldset>
                          </div>
                          <div className="col-lg-12">
                            <fieldset>
                              <textarea name="message" rows="6" id="message" placeholder="Message" required="" value={commentContent} onChange={(event) => setContent(event.target.value)}></textarea>
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
      
      rating =  <div className="container" style={{textAlign:"right"}}>
                  <Rating emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" initialRating={rate} onClick={saveRating} />
                </div>
    }
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

                    <p><i className="fa fa-user"></i> {blog.user} &nbsp;|&nbsp; <i className="fa fa-calendar"></i> {blog.created_date} &nbsp;|&nbsp; <i className="fa fa-comments"></i>  15 comments</p>

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
                
                {rating}
                <div className="container">
                    <section className='tabs-content'>
                        <div className="row">
                            <div className="col-md-8"  style={{width:"740px"}}>
                                <h4>Comments</h4>
                                <ul className="features-items">
                                {comment.map(c => <><li>
                                    <div className="feature-item" style={{ marginBottom: "15px" }}>
                                    <div className="left-icon">
                                        <img src="../../assets/images/features-first-icon.png" alt="First One" />
                                    </div>
                                    <div className="right-content">
                                        <h4>{c.creator.last_name} {c.creator.first_name}</h4>
                                        <p><em>{c.content}</em></p>
                                        <div><a href="/#"><i className="fa fa-thumbs-up"></i>Thích</a> | <a href="/#"><i className="fa fa-comment"></i>Trả lời</a>.<em> <Moment fromNow>{c.created_date}</Moment></em></div>
                                    </div>
                                    </div>
                                </li><br></br></>
                                )}
                                </ul>
                            </div>
                            {commentinput}
                            
                        </div>
                    </section>
                </div>
            </div>
        </section>
        </>
    )
}