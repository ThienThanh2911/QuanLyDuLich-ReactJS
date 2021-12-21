import NumberFormat from "react-number-format"
import { Link } from "react-router-dom"
import React from 'react';

export default function PackagesCard(props) {
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
    return(
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
                        
                    </p>
                    
                    <ul className="social-icons">
                        <li><Link to={`/package-details/${props.tour.id}/`}>+ Xem thông tin chi tiết</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}