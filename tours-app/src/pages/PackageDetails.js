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
        v = 'Ô tô'
    } else if(tour.vehicle === "PLANE") {
        v = 'Máy bay'
    } else {
        v = 'Du thuyền'
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
        <section className="section section-bg" id="call-to-action" style={{backgroundImage: "url(../../assets/images/banner-image-1-1920x500.jpg)"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="cta-content">
                        <br></br>
                        <br></br>
                        <h2><em>{ tour.name }</em></h2>
                        <p>Giá tiền của chuyến đi</p>
                        <p><strong><em>{<NumberFormat value={tour.price_adult} displayType={'text'} thousandSeparator={true} />} đ</em></strong></p>
                        <p>Lượt xem: {views}</p>
                        <div className="main-button">
                          <a href="#/" data-toggle="modal" data-target="#exampleModal">Đặt tour</a>
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
                  <li><a href='#tabs-1'><i className="fa fa-cog"></i> Chi tiết</a></li>
                  <li><a href='#tabs-2'><i className="fa fa-gift"></i> Miêu tả chuyến đi</a></li>
                  <li><a href='#tabs-3'><i className="fa fa-plus-circle"></i> Lịch trình &amp; Giá cả</a></li>
                  <li><a href='#tabs-4'><i className="fa fa-info-circle"></i> Điều khoản</a></li>
                  <li><a href='#tabs-5'><i className="fa fa-map-marker"></i> Bản đồ</a></li>
                </ul>
              </div>
              <div className="col-lg-8">
                <section className='tabs-content' style={{width: "100%"}}>
                  <article id='tabs-1'>
                    <h4>Chi tiết</h4>

                    <div className="row">
                       <div className="col-sm-6">
                            <label style={{color: "var(--text-color)"}}>Thời tiết</label>
                       
                            <p>Spring</p>
                       </div>

                       <div className="col-sm-6">
                            <label style={{color: "var(--text-color)"}}>Số ngày</label>
                       
                            <p> 20 nights</p>
                       </div>

                       <div className="col-sm-6">
                            <label style={{color: "var(--text-color)"}}>Phương tiện</label>
                       
                            <p>{v}</p>
                       </div>

                       <div className="col-sm-6">
                            <label style={{color: "var(--text-color)"}}>Điểm đến</label>
                       
                            <p>{tour.destination}</p>
                       </div>
                    </div>
                  </article>
                  <article id='tabs-2'>
                    <h4>Miêu tả chuyến đi</h4>
                    
                    <p>{tour.description}</p>
                    
                   </article>
                  <article id='tabs-3'>
                    <h4>Lịch trình &amp; Giá cả</h4>

                    <div className="table-responsive">
                      <table width="100%" border="0" cellSpacing="0" cellPadding="0" className="table">
                         <thead>
                              <tr>
                                  <th style={{color: "var(--text-color)"}}>Chuyến đi</th>
                                   <th style={{color: "var(--text-color)"}}>Từ ngày</th>
                                   <th style={{color: "var(--text-color)"}}>Đến ngày</th>
                                   <th style={{color: "var(--text-color)"}}>Giá cả</th>
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
                    <h4>Điều khoản</h4>

                    <ul className="list-group list-group-no-border">
                      <li className="list-group-item" style={{margin:"0 0 -1px"}}>
                           <div className="row">
                                <div className="col-md-2 col-sm-3">
                                     <p>
                                          <strong>Thú cưng</strong>
                                     </p>
                                </div>
                                <div className="col-md-10 col-sm-9">
                                     <p>
                                          - Không cho phép mang theo
                                     </p>
                                </div>
                           </div>
                      </li>

                      <li className="list-group-item" style={{margin:"0 0 -1px"}}>
                           <div className="row">
                                <div className="col-md-2 col-sm-3">
                                     <p>
                                          <strong>Chính sách</strong>
                                     </p>
                                </div>
                                <div className="col-md-10 col-sm-9">
                                     <div>
                                          <p>
                                            - Trẻ em từ 10 tuổi trở lên tính 100% giá tour.<br></br>
                                            - Trẻ em từ 05 – 9 tuổi tính 75 % giá tour.<br></br>
                                            - Trẻ em dưới 05 tuổi miễn phí giá tour.<br></br>
                                          </p>
                                     </div>
                                </div>
                           </div>
                      </li>
                      
                      <li className="list-group-item" style={{margin:"0 0 -1px"}}>
                           <div className="row">
                                <div className="col-md-2 col-sm-3">
                                     <p>
                                          <strong>Lưu ý</strong>
                                     </p>
                                </div>

                                <div className="col-md-10 col-sm-9">
                                     <div>
                                          <p>
                                            - Quý khách nên mang theo giày thể thao, đồ dùng gọn nhẹ, máy ảnh.<br></br>
                                            - Lịch trình tour có thể thay đổi nhưng dịch vụ không thay đổi và vẫn đảm bảo các điểm thăm quan.<br></br>
                                            - Nếu chương trình du lịch bị hủy bỏ hoặc thay đổi bởi một trong hai bên vì một lý do bất khả kháng (hỏa hoạn, thời tiết, tai nạn, thiên tai, chiến tranh, hoãn và hủy chuyến của các phương tiện vận chuyển công cộng…), thì hai bên sẽ không chịu bất kỳ nghĩa vụ bồi hoàn các tổn thất đã xảy ra và không chịu bất kỳ trách nhiệm pháp lý nào. Tuy nhiên mỗi bên có trách nhiệm cố gắng tối đa để giúp đỡ bên bị thiệt hại nhằm giảm thiểu các tổn thất gây ra vì lý do bất khả kháng.<br></br>
                                          </p>
                                     </div>
                                </div>
                           </div>
                      </li>
                    </ul>
                  </article>
                  <article id='tabs-5'>
                    <h4>Bản đồ</h4>

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
                                <div style={{color: "var(--text-color)"}}>Người lớn</div>
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
                                <div style={{color: "var(--text-color)"}}>Trẻ em</div>
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