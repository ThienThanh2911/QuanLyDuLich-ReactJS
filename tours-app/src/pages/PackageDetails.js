import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import API, { endpoints } from '../API';
import Moment from 'react-moment';
import cookies from 'react-cookies';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import Rating from 'react-rating';
import '../assets/css/style.css';

export default function PackageDetails() {
    const [tour, setTour] = useState([])
    const [comment, setComment] = useState([])
    const [commentContent, setContent] = useState([])
    const [views, setViews] = useState()
    const [changed, setChanged] = useState(1)
    const [rate, setRating] = useState(0)
    const auth = useContext(UserContext)
    const { id } = useParams();

    let user = auth
    if (cookies.load("user") != null)
      user = cookies.load("user")

    useEffect(async () => {
      try {
        let res = await API.get(endpoints["tour-detail"](id), {
          headers: {
            "Authorization": `Bearer ${cookies.load("access_token")}`
          }
        })
        setTour(res.data)
        setRating(res.data.rate)
      } catch (err) {
        console.error(err)
      }

      try{
        let res = await API.get(endpoints["tour-comment"](id))
        setComment(res.data)
      } catch (err) {
        console.error(err)
      }

      try {
        let res = await API.get(endpoints['tour-views'](id))
        setViews(res.data.views)
      } catch (err) {
          console.error(err)
      }

    }, [changed])
    const addComment = async (event) => {
      event.preventDefault()

      try {
        let res = await API.post(endpoints['tour-add-comment'](id), {
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
        let res = await API.post(endpoints['tour-rating'](id), {
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

    let v = ''
    if(tour.vehicle === "OTO") {
        v = '?? t??'
    } else if(tour.vehicle === "PLANE") {
        v = 'M??y bay'
    } else {
        v = 'Du thuy???n'
    }

    let commentinput =  <div className="col-md-4" style={{width:"370px"}}>
                          <h4>Leave a comment</h4>
                          <div className="contact-form">
                          <div className="row">
                            <div className="col-lg-12">
                              <em><Link to="/signin">????ng nh???p</Link> ????? g???i b??nh lu???n</em>
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
        <section className="section section-bg" id="call-to-action" style={{backgroundImage: "url(../../assets/images/banner-image-1-1920x500.jpg)"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="cta-content">
                        <br></br>
                        <br></br>
                        <h2><em>{ tour.name }</em></h2>
                        <p>Gi?? ti???n c???a chuy???n ??i</p>
                        <p><strong><em>{<NumberFormat value={tour.price_adult} displayType={'text'} thousandSeparator={true} />} ??</em></strong></p>
                        <p>L?????t xem: {views}</p>
                        <div className="main-button">
                          <a href="#/" data-toggle="modal" data-target="#exampleModal">?????t tour</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section" id="trainers">
        <div className="container">
            <br></br>
            <br></br>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="../../assets/images/package-image-1-1200x600.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="../../assets/images/1200x600-resolution-blue-solid-color-background.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="../../assets/images/package-image-1-1200x600.jpg" alt="Third slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            
            <br></br>
            <br></br>

            <div className="row" id="tabs">
              <div className="col-lg-4">
                <ul>
                  <li><a href='#tabs-1'><i className="fa fa-cog"></i> Chi ti???t</a></li>
                  <li><a href='#tabs-2'><i className="fa fa-gift"></i> Mi??u t??? chuy???n ??i</a></li>
                  <li><a href='#tabs-3'><i className="fa fa-plus-circle"></i> L???ch tr??nh &amp; Gi?? c???</a></li>
                  <li><a href='#tabs-4'><i className="fa fa-info-circle"></i> ??i???u kho???n</a></li>
                  <li><a href='#tabs-5'><i className="fa fa-map-marker"></i> B???n ?????</a></li>
                </ul>
              </div>
              <div className="col-lg-8">
                <section className='tabs-content' style={{width: "100%"}}>
                  <article id='tabs-1'>
                    <h4>Chi ti???t</h4>

                    <div className="row">
                       <div className="col-sm-6">
                            <label style={{color: "var(--text-color)"}}>Th???i ti???t</label>
                       
                            <p>Spring</p>
                       </div>

                       <div className="col-sm-6">
                            <label style={{color: "var(--text-color)"}}>S??? ng??y</label>
                       
                            <p> 20 nights</p>
                       </div>

                       <div className="col-sm-6">
                            <label style={{color: "var(--text-color)"}}>Ph????ng ti???n</label>
                       
                            <p>{v}</p>
                       </div>

                       <div className="col-sm-6">
                            <label style={{color: "var(--text-color)"}}>??i???m ?????n</label>
                       
                            <p>{tour.destination}</p>
                       </div>
                    </div>
                  </article>
                  <article id='tabs-2'>
                    <h4>Mi??u t??? chuy???n ??i</h4>
                    
                    <p>{tour.description}</p>
                    
                   </article>
                  <article id='tabs-3'>
                    <h4>L???ch tr??nh &amp; Gi?? c???</h4>

                    <div className="table-responsive">
                      <table width="100%" border="0" cellSpacing="0" cellPadding="0" className="table">
                         <thead>
                              <tr>
                                  <th style={{color: "var(--text-color)"}}>Chuy???n ??i</th>
                                   <th style={{color: "var(--text-color)"}}>T??? ng??y</th>
                                   <th style={{color: "var(--text-color)"}}>?????n ng??y</th>
                                   <th style={{color: "var(--text-color)"}}>Gi?? c???</th>
                              </tr>
                         </thead>
                         
                         <tbody>
                              <tr>
                                   <td></td>
                                   <td style={{color: "#7a7a7a"}}>{tour.start_date}</td>
                                   <td style={{color: "#7a7a7a"}}>{tour.finish_date}</td>
                                   <td style={{color: "#7a7a7a"}}>{tour.price_adult}</td>
                              </tr>
                         </tbody>
                      </table>
                    </div>
                  </article>
                  <article id='tabs-4'>
                    <h4>??i???u kho???n</h4>

                    <ul className="list-group list-group-no-border">
                      <li className="list-group-item" style={{margin:"0 0 -1px"}}>
                           <div className="row">
                                <div className="col-md-2 col-sm-3">
                                     <p>
                                          <strong>Th?? c??ng</strong>
                                     </p>
                                </div>
                                <div className="col-md-10 col-sm-9">
                                     <p>
                                          - Kh??ng cho ph??p mang theo
                                     </p>
                                </div>
                           </div>
                      </li>

                      <li className="list-group-item" style={{margin:"0 0 -1px"}}>
                           <div className="row">
                                <div className="col-md-2 col-sm-3">
                                     <p>
                                          <strong>Ch??nh s??ch</strong>
                                     </p>
                                </div>
                                <div className="col-md-10 col-sm-9">
                                     <div>
                                          <p>
                                            - Tr??? em t??? 10 tu???i tr??? l??n t??nh 100% gi?? tour.<br></br>
                                            - Tr??? em t??? 05 ??? 9 tu???i t??nh 75 % gi?? tour.<br></br>
                                            - Tr??? em d?????i 05 tu???i mi???n ph?? gi?? tour.<br></br>
                                          </p>
                                     </div>
                                </div>
                           </div>
                      </li>
                      
                      <li className="list-group-item" style={{margin:"0 0 -1px"}}>
                           <div className="row">
                                <div className="col-md-2 col-sm-3">
                                     <p>
                                          <strong>L??u ??</strong>
                                     </p>
                                </div>

                                <div className="col-md-10 col-sm-9">
                                     <div>
                                          <p>
                                            - Qu?? kh??ch n??n mang theo gi??y th??? thao, ????? d??ng g???n nh???, m??y ???nh.<br></br>
                                            - L???ch tr??nh tour c?? th??? thay ?????i nh??ng d???ch v??? kh??ng thay ?????i v?? v???n ?????m b???o c??c ??i???m th??m quan.<br></br>
                                            - N???u ch????ng tr??nh du l???ch b??? h???y b??? ho???c thay ?????i b???i m???t trong hai b??n v?? m???t l?? do b???t kh??? kh??ng (h???a ho???n, th???i ti???t, tai n???n, thi??n tai, chi???n tranh, ho??n v?? h???y chuy???n c???a c??c ph????ng ti???n v???n chuy???n c??ng c???ng???), th?? hai b??n s??? kh??ng ch???u b???t k??? ngh??a v??? b???i ho??n c??c t???n th???t ???? x???y ra v?? kh??ng ch???u b???t k??? tr??ch nhi???m ph??p l?? n??o. Tuy nhi??n m???i b??n c?? tr??ch nhi???m c??? g???ng t???i ??a ????? gi??p ????? b??n b??? thi???t h???i nh???m gi???m thi???u c??c t???n th???t g??y ra v?? l?? do b???t kh??? kh??ng.<br></br>
                                          </p>
                                     </div>
                                </div>
                           </div>
                      </li>
                    </ul>
                  </article>
                  <article id='tabs-5'>
                    <h4>B???n ?????</h4>

                    <img src="assets/images/map.jpg" className="img-fluid" alt="" />
                  </article>
                </section>
              </div>
            </div>
        </div>
    </section>
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
                                <div><a href="/#"><i className="fa fa-thumbs-up"></i>Th??ch</a> | <a href="/#"><i className="fa fa-comment"></i>Tr??? l???i</a>.<em> <Moment fromNow>{c.created_date}</Moment></em></div>
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
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Enquiry</h5>
            <button type="button" className="close" style={{color: "var(--text-color)"}} data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="contact-us">
            <div className="contact-form">
              <form action="#" id="contact">
                  <div className="row">
                       <div className="col-md-6">
                          <fieldset>
                            <input type="text" className="form-control" placeholder="Enter full name" required="" />
                          </fieldset>
                       </div>

                       <div className="col-md-6">
                          <fieldset>
                            <input type="text" className="form-control" placeholder="Enter email address" required="" />
                          </fieldset>
                       </div>
                  </div>

                  <div className="row">
                       <div className="col-md-6">
                          <fieldset>
                            <input type="text" className="form-control" placeholder="Enter phone" required="" />
                          </fieldset>
                       </div>

                       <div className="col-md-6">
                          <div className="row">
                             <div className="col-md-6">
                                <fieldset>
                                  <input type="text" className="form-control" placeholder="From date" required="" />
                                </fieldset>
                             </div>

                             <div className="col-md-6">
                                <fieldset>
                                  <input type="text" className="form-control" placeholder="To date" required="" />
                                </fieldset>
                             </div>
                          </div>
                        </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <div style={{color: "var(--text-color)"}}>Ng?????i l???n</div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-group">
                                 <span className="input-group-btn">
                                     <button type="button" className="btn btn-default btn-number" data-type="minus" data-field="quant[1]">
                                         <span className="fa fa-minus"></span>
                                     </button>
                                 </span>
                                 <input type="text" name="quant[1]" className="form-control input-number" defaultValue="1" min="1" max="30" style={{marginTop: "-5%", textAlign: "center"}} />
                                 <span className="input-group-btn">
                                     <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                         <span className="fa fa-plus"></span>
                                     </button>
                                 </span>
                             </div>
                            </div>
                        </div>
                     </div>
                      <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <div style={{color: "var(--text-color)"}}>Tr??? em</div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-group">
                                 <span className="input-group-btn">
                                     <button type="button" className="btn btn-default btn-number" data-type="minus" data-field="quant[2]">
                                         <span className="fa fa-minus"></span>
                                     </button>
                                 </span>
                                 <input type="text" name="quant[2]" className="form-control input-number" defaultValue="1" min="1" max="30" style={{marginTop: "-5%", textAlign: "center"}} />
                                 <span className="input-group-btn">
                                     <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[2]">
                                         <span className="fa fa-plus"></span>
                                     </button>
                                 </span>
                             </div>
                            </div>
                        </div>
                     </div>
                </div>
              </form>
           </div>
           </div>
          </div>
          <div className="modal-footer">
              <div className="inline mr-auto">
                  <span style={{color: "var(--text-color)"}}><b style={{fontSize: "20px"}}>Total Price</b> - 1.000.000 VND</span>
              </div>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-primary">Send Request</button>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}