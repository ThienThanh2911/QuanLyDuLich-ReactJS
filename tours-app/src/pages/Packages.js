import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router';
import API, { endpoints } from '../API';
import '../assets/css/search.css'
import PackagesCard from './PackagesCard';

export default function Packages() {
    const [tour, setTour] = useState([])
    const [count, setCount] = useState()
    const [q, setQ] = useState("")
    const [cate, setCate] = useState([])
    const [c, setC] = useState("")
    const location = useLocation()
    const history = useHistory()
    useEffect(() => {
        let loadTours = async () => {
            try {
                let page = location.search
                if (page === "")
                    page = `?page=1`
                let res = await API.get(`${endpoints['tours']}${page}`)
                setTour(res.data.results)
                setCount(res.data.count)
            } catch(err) {
                console.error(err)
            }
        }
        loadTours()
    }, [location.search])


    useEffect(() => {
        let loadCategory = async () => {
            try {
                let res = await API.get(`${endpoints['category']}`)
                setCate(res.data.results)
            } catch(err) {
                console.error(err)
            }
        }
        loadCategory()
    }, [])

    const handleSelectChange = (event) => {
        setC(event.target.value)
    }

    let tours = []
    for(let i = 0; i < Math.ceil(count/9); i++)
        tours.push(
            <li className="page-item"><Link className="page-link" to={"/packages/?page=" + (i + 1)}>{i + 1}</Link></li>
    )

    const search = (event) => {
        event.preventDefault()
        history.push(`../packages/?q=${q}&?category_id=${c}`)
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
                                <h2>Danh sách <em>chuyến đi</em></h2>
                                <p>Danh sách các chuyến đi sắp diễn ra và hiện vẫn còn cho phép đặt vé</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <div className="s007">
                <form method="post" onSubmit={search} >
                <div className="inner-form">
                <div className="basic-search">
                    <div className="input-field">
                    <div className="icon-wrap">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">
                        <path d="M18.869 19.162l-5.943-6.484c1.339-1.401 2.075-3.233 2.075-5.178 0-2.003-0.78-3.887-2.197-5.303s-3.3-2.197-5.303-2.197-3.887 0.78-5.303 2.197-2.197 3.3-2.197 5.303 0.78 3.887 2.197 5.303 3.3 2.197 5.303 2.197c1.726 0 3.362-0.579 4.688-1.645l5.943 6.483c0.099 0.108 0.233 0.162 0.369 0.162 0.121 0 0.242-0.043 0.338-0.131 0.204-0.187 0.217-0.503 0.031-0.706zM1 7.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5-6.5-2.916-6.5-6.5z"></path>
                        </svg>
                    </div>
                        <input id="search" type="text" name="kw" placeholder="Tìm kiếm..." value={q} onChange={(event) => setQ(event.target.value)} />
                    <div className="result-count">
                        <span>10 </span>kết quả</div>
                    </div>
                </div>
                <div className="advance-search">
                    <span className="desc">Tìm kiếm nâng cao</span>
                    <div className="row">
                        <div className="input-field">
                            <div className="input-select">
                                <select name="choices-single-defaul" id="cate" className="form-control input-price" onChange={handleSelectChange} style={{border: 0, backgroundColor: 'var(--card-color)'}}>
                                    {!cate ?<option placeholder="" value="">Danh mục</option>:
                                    <><option placeholder="" value="">Danh mục</option>{cate.map((c,i) => <option value={c.id} key={i} >{c.name}</option>)}</>
                                    }
                                    
                                    
                                </select>
                            </div>
                        </div>
                    <div className="input-field">
                        <input type="number" placeholder="MIN - 0" className="input-price" min="0" />
                    </div>
                    </div>
                    <div className="row second">
                    <div className="input-field">
                        <input type="date" placeholder="DATE - dd/mm/yy" className="input-price" />
                    </div>
                        <div className="input-field">
                            <input type="number" placeholder="MAX - 100.000.000" max="10000000" min="0" className="input-price" />
                        </div>
                    </div>
                    <div className="row third">
                    <div className="input-field">
                        <button type="submit" className="btn-search">Tìm kiếm</button>
                        <button className="btn-delete" id="delete">Xóa</button>
                    </div>
                    </div>
                </div>
                </div>
            </form>
            </div>
            <script src="resources/js/choices.js"></script>

            <section className="section" id="trainers">
                <div className="container">
                    <br></br>
                    <br></br>
                    <div className="row">  
                        {tour.map(t => <PackagesCard tour={t} />)}
                    </div>
                    <br></br>
                        
                    <nav>
                    <ul className="pagination pagination-lg justify-content-center">
                        {tours}
                    </ul>
                    </nav>

                </div>
            </section>
        </>
    )
}