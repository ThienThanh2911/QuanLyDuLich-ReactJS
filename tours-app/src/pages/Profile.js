import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import cookies from 'react-cookies'
import API, { endpoints } from '../API';
import { UserContext } from '../App';
import '../assets/css/profile.css'

export default function Profile(props) {
        const [p, setP] = useState([])
        const auth = useContext(UserContext)

        const handleSelectChange = (event) => {
            setGender(event.target.value)
        }

        const handleSelectChangeP = (event) => {
            setProvince(event.target.value)
        }
        let user = auth
        if (cookies.load("user") != null)
            user = cookies.load("user")
        const [firstname, setFirstname] = useState(user.first_name)
        const [lastname, setLastname] = useState(user.last_name)
        const [email, setEmail] = useState(user.email)
        const [phone, setPhone] = useState(user.phone)
        const [birth, setBirth] = useState(user.birth)
        const [gender, setGender] = useState(user.gender)
        //const [avatar, setAvatar] = useState(null)
        const [about, setAbout] = useState(user.about)
        const [street, setStreet] = useState(user.street)
        const [province, setProvince] = useState(user.province)
        const update_profile = async (event) => {
                    const formData = new FormData()
                    formData.append('username', user.username)
                    formData.append('password', user.password)
                    formData.append('id', user.id)
                    formData.append('first_name', firstname)
                    formData.append('last_name', lastname)
                    formData.append('email', email)
                    formData.append('phone', phone)
                    formData.append('birth', birth)
                    formData.append('about', about)
                    formData.append('street', street)
                    formData.append('province', province)
                    formData.append('gender', gender)
                    //formData.append('avatar', this.avatar.current.files[0])
                    console.log(endpoints['update-user'](user.id))
                    await API.patch(endpoints['update-user'](user.id), formData, {
                            headers: {
                                    'Content-Type': 'multipart/form-data'
                            }
                    
                    }).then((res) => {
                            console.info(res)
                    }).catch(err => console.error(err))
                    
            event.preventDefault()
        }

        useEffect(async () => {
            let res = await API.get(endpoints["province"])
            setP(res.data)
        }, [])



        let select = ''
        p.map(a => {if(a.id === user.province) select = <option selected value={a.id}>{a.name}</option>})

        let g = ''
        if (user.gender === 'MALE')
            g = 'Nam'
        g = 'Nữ'

        if (user != null)
            return (
                <div className="profile">
                <div className="container">
                    <div className="row gutters">
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="account-settings">
                                        <div className="user-profile">
                                            <div className="user-avatar">
                                                <img src="assets/images/avt.jpg" alt="Avatar" />
                                            </div>
                                            <h5 className="user-name">{user.username}</h5>
                                            <h6 className="user-email">{user.email}</h6>
                                        </div>
                                        <div className="about">
                                            <h5 className="mb-2 text-primary">About</h5>
                                            <p>{user.about}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                            <div className="card h-100">
                                <div className="card-body">
                                    <Form onSubmit={update_profile}>
                                    <div className="row gutters">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <h6 className="mb-3 text-primary">Personal Details</h6>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label for="lastName">Họ</label>
                                                <input type="text" className="form-control" id="lastName" placeholder={user.last_name} field={lastname} onChange={event =>  setLastname(event.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label for="firstName">Tên</label>
                                                <input type="text" className="form-control" id="firstName" placeholder={user.first_name} field={firstname} onChange={event =>  setFirstname(event.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label for="eMail">Email</label>
                                                <input type="email" className="form-control" id="eMail" placeholder={user.email} field={email} onChange={event =>  setEmail(event.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label for="username">Tên tài khoản</label>
                                                <input type="text" className="form-control" id="username" value={user.username} disabled />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label for="phone">Số điện thoại</label>
                                                <input type="text" className="form-control" id="phone" placeholder={user.phone} field={phone} onChange={event =>  setPhone(event.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label for="birth">Ngày sinh</label>
                                                <input type="date" className="form-control" id="birth" value={user.birth} field={birth} onChange={event =>  setBirth(event.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label for="gender">Giới tính</label>
                                                <select name="gender" className="custom-select" onChange={handleSelectChange} style={{background: "var(--input-color)", border: "1px solid  var(--border-color)", fontSize: ".825rem", color: "var(--inputtext-color)"}}>
                                                    <option selected>{g}</option>
                                                    <option value="MALE">Nam</option>
                                                    <option value="FEMALE">Nữ</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label for="avatar">Ảnh đại diện</label>
                                                <div className="form-control">
                                                    <input type="file" id="avatar" path="file" style={{color: "#596280"}} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="abour">Thông tin thêm về bạn</label>
                                        <input type="text" className="form-control" id="about" placeholder={user.about} field={about} onChange={event =>  setAbout(event.target.value)} />
                                    </div>
                                    <div className="row gutters">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <h6 className="mb-3 text-primary">Địa chỉ</h6>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label for="Street">Địa chỉ</label>
                                                <input type="name" className="form-control" id="Street" placeholder={user.street} field={street} onChange={event =>  setStreet(event.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label for="ciTy">Tỉnh thành</label>
                                                <select name="province" className="custom-select" onChange={handleSelectChangeP} style={{background: "var(--input-color)", border: "1px solid  var(--border-color)", fontSize: ".825rem", color: "var(--inputtext-color)"}}>
                                                    {select}
                                                    {p.map((t,i) => <option value={t.id} key={i} >{t.name}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                    </div><br></br>
                                    <div className="row gutters">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="text-right">
                                                <input value="Cập nhật" type="submit" id="submit" name="submit" className="btn btn-primary"/>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            )
}