import cookies from 'react-cookies'
import { useStore } from 'react-redux';
import React, { useEffect, useState } from 'react';
import API, { endpoints } from '../API';
import { Link } from 'react-router-dom';

export default function Header() {
        //Load User
        const store = useStore()
        const auth = store.getState()
        const [category, setCate] = useState([])

        useEffect(async () =>{
            let res = await API.get(endpoints["category"])
            setCate(res.data.results)
        }, [])
        const logout = () => {
            cookies.remove("user")
            cookies.remove("access_token")
        }

        let user = auth
        if (cookies.load("user") != null)
            user = cookies.load("user")
        let u = <>
                <a className="dropdown-toggle" data-toggle="dropdown" href="/#" role="button" aria-haspopup="true" aria-expanded="false">Tài khoản</a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="/signup">Đăng ký</a>
                    <a className="dropdown-item" href="/signin">Đăng nhập</a>
                </div>
                </>
        if (user != null)
            u = <>
                <a class="dropdown-toggle" data-toggle="dropdown" href="/#" role="button" aria-haspopup="true" aria-expanded="false">Chào, {user.username}!</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="/your-profile">Thông tin cá nhân</a>
                    <a class="dropdown-item" href="/#">Đổi mật khẩu</a>
                    <a class="dropdown-item" href="/" onClick={logout} >Đăng xuất</a>
                </div>
                </>
        return (
            <>
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row" style={{width:"110%"}}>
                        <div className="col-12">
                            <nav className="main-nav">
                                <a href="/" className="logo">TWIN<em> TOUR</em></a>
                                <ul className="nav">
                                    <li><a href="/" className="active">Trang chủ</a></li>
                                    <li className="dropdown">
                                        <a className="dropdown-toggle" data-toggle="dropdown" href="/#">Danh mục</a>
                                        <div className="dropdown-menu">
                                            {category.map(c => {
                                                let path = `/category/?category_id=${c.id}`
                                                return <Link className="dropdown-item" to={path}>{c.name}</Link>
                                            })}
                                        </div>
                                    </li>
                                    <li><a href="../../packages">Danh sách Tours</a></li>
                                    <li><a href="../../blog">Bài viết</a></li>
                                    <li><a href="../../contact">Liên hệ</a></li> 
                                    <li className="dropdown">
                                        <a className="dropdown-toggle" data-toggle="dropdown" href="/#">Giới thiệu</a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="../../about">Về chúng tôi</a>
                                            <a className="dropdown-item" href="../../membership">Thành viên</a>
                                            <a className="dropdown-item" href="../../terms">Điều khoản</a>
                                        </div>
                                    </li>
                                    <li className="dropdown">
                                        {u}
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            </>
        )
}