import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import API, { endpoints } from '../API';
export default function Categories() {
    const [tours, setTours] = useState([])
    const location = useLocation()

    useEffect(async () => {
        let query = location.search
        let res = await API.get(`${endpoints['tours']}${query}`)
        setTours(res.data.results)
    }, [])

    return (
        <>
        <section className="section section-bg" id="call-to-action" style={{backgroundImage: "url(../../assets/images/banner-image-1-1920x500.jpg)"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="cta-content">
                                    <br></br>
                                    <br></br>
                                    <h2>Our <em>Tours</em></h2>
                                    <p>Danh sách các Tours sắp diễn ra và hiện vẫn còn cho phép đặt vé</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <h4>{}</h4>
                <section className="section" id="trainers">
                    <div className="container">
                        <br></br>
                        <br></br>
                        <div className="row">  
                            {tours.map(t => <ToursCard tour={t} />)}
                        </div>
                        <br></br>
                    </div>
                </section>
        </>
    )
}

function ToursCard(props) {
    let v = ''
        let c = ''
        if(props.tour.vehicle === "OTO") {
            v = 'Ô tô'
            c = 'fa fa-car'
        } else if(props.tour.vehicle === "PLANE") {
            v = 'Máy bay'
            c = 'fa fa-plane'
        } else {
            v = 'Du thuyền'
            c = 'fa fa-ship'
        }
    return (
                <div className="col-lg-4" key={props.tour.id}>
                    <div className="trainer-item">
                        <div className="image-thumb">
                            <img src={props.tour.photos} alt="test" />
                        </div>
                        <div className="down-content">
                            <div><NumberFormat value={props.tour.price_adult} displayType={'text'} thousandSeparator={true} /><sup style={{color:'#ed563b'}}>đ</sup>
                                <span className="float-right"></span>
                            </div>

                            <h4>{props.tour.name}</h4>
                                
                            <p>
                                <i className="fa fa-cube"></i> 20 đêm &nbsp;&nbsp;&nbsp;

                                <i className={c}></i> {v} &nbsp;&nbsp;&nbsp;

                                <i className="fa fa-star"></i> 5.0 &nbsp;&nbsp;&nbsp;<br></br>
                                {props.tour.tags.map((t,i) => <div class="badge badge-pill badge-secondary" style={{color:"white", marginRight:"5px"}} key={i}>{t.name}</div>)}
                            </p>
                            
                            <ul className="social-icons">
                                <li><Link to={`/package-details/${props.tour.id}/`}>+ Xem thông tin chi tiết</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
    )
}