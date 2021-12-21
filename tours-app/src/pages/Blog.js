import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API, { endpoints } from '../API';
export default function Blog() {
    const [blog, setBlog] = useState([])

    useEffect(async () => {
        let res = await API.get(endpoints['blog'])
        setBlog(res.data.results)
    }, [])

    return (
        <>
        <section className="section section-bg" id="call-to-action" style={{backgroundImage: "url(assets/images/banner-image-1-1920x500.jpg)"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="cta-content">
                            <br></br>
                            <br></br>
                            <h2>Danh sách <em>bài viết</em></h2>
                            <p>------------------------------</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section" id="our-classes">
            <div className="container">
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col-lg-8">
                        <section className='tabs-content'>
                            {blog.map(b =>
                            <article key={b.id}>
                                <img src="assets/images/blog-image-1-940x460.jpg" alt="" />
                                <h4>{b.name}</h4>

                                <p><i className="fa fa-user"></i> Thành &nbsp;|&nbsp; <i className="fa fa-calendar"></i> 15.08.2021 10:10 &nbsp;|&nbsp; <i className="fa fa-comments"></i>  15 comments</p>

                                <p>Nội dung Blog</p>
                                <div className="main-button">
                                    <Link to={`/blog-details/${b.id}/`}>Đọc thêm</Link>
                                </div><br></br>
                            </article>)}
                        </section>
                    </div>

                    <div className="col-lg-4">
                        <h5 className="h5" /*style={{color: "var(--text-color)"}}*/>Tìm kiếm</h5>
                        
                        <div className="contact-form">
                            <form id="search_form" name="gs" method="GET" action="#">
                                <input type="text" name="q" className="searchText" placeholder="Nhập từ khóa..." autocomplete="on" />
                            </form>
                        </div>

                        <h5 className="h5" /*style={{color: "var(--text-color)"}}*/>Tin tức gần đây</h5>

                        <ul>
                            <li>
                                <p><a href="blog-details">Blog số 1</a></p>
                                <small /*style={{color: "var(--text-color)"}}*/><i className="fa fa-user"></i> Thành &nbsp;|&nbsp; <i className="fa fa-calendar"></i> 15.08.2021 10:10</small>
                            </li>

                            <li><br></br></li>

                            <li>
                                <p><a href="blog-details">Blog số 2</a></p>
                                <small /*style={{color: "var(--text-color)"}}*/><i className="fa fa-user"></i> Thành &nbsp;|&nbsp; <i className="fa fa-calendar"></i> 15.08.2021 10:10</small>
                            </li>

                            <li><br></br></li>

                            <li>
                            <p><a href="blog-details">Blog số 3</a></p>

                            <small /*style={{color: "var(--text-color)"}}*/><i className="fa fa-user"></i> Thành &nbsp;|&nbsp; <i className="fa fa-calendar"></i> 15.08.2021 10:10</small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}