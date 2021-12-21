import React from 'react';
import { Form } from 'react-bootstrap';
import API, { endpoints } from '../API';
import '../assets/css/signup.css'

class SignUp extends React.Component {
    constructor() {
            super()
            this.user = {
                    'first_name': '',
                    'last_name': '',
                    'email': '',
                    'username': '',
                    'password': '',
                    'confirm_password': '',
                    'phone': '',
                    'gender': '',
                    'about': '',
                    'role': 'USER'
            }
            this.avatar = React.createRef()
            this.state = {
                    'user': this.user
            }
    }
    change = (field, event) => {
        this.user[field] = event.target.value
        this.setState({
                'user': this.user
        })
    }

    handleSelectChange = (event) => {
        this.setState({
          gender: event.target.value
        })
      }

    register = (event) => {
        if(this.state.user.password === this.state.user.confirm_password) {
                const formData = new FormData()
                for (let k in this.state.user)
                        if (k !== 'confirm_password')
                                formData.append(k, this.state.user[k])

                formData.append('gender', this.state.gender)
                formData.append('avatar', this.avatar.current.files[0])
                API.post(endpoints['users'], formData, {
                        headers: {
                                'Content-Type': 'multipart/form-data'
                        }
                }).then(() => {
                        alert("Bạn đã đăng kí thành công !");
                }).catch(err => console.error(err))
        }

        event.preventDefault()
    }

    render() {
        return (
            <div className="signup">
                <div className="container">
                    <div className="card h-100">
                        <Form onSubmit={this.register}>
                            <div className="card-body">
                                    <div className="row gutters">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <h6 className="mb-3 text-primary">Thông tin cá nhân</h6>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <RegisterForm id="lastName" label="Họ" type="text" field={this.state.user.last_name} change={this.change.bind(this, 'last_name')} />
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <RegisterForm id="firstName" label="Tên" type="text" field={this.state.user.first_name} change={this.change.bind(this, 'first_name')} />
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                     <RegisterForm id="email" label="Email" type="email" field={this.state.user.email} change={this.change.bind(this, 'email')} />
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                     <RegisterForm id="username" label="Tài khoản" type="text" field={this.state.user.username} change={this.change.bind(this, 'username')} />
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                     <RegisterForm id="phone" label="Số điện thoại" type="text" field={this.state.user.phone} change={this.change.bind(this, 'phone')} />
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                     <RegisterForm id="about" label="Thông tin về bạn" type="text" field={this.state.user.about} change={this.change.bind(this, 'about')} />
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group" >
                                                        <label for="gender">Giới tính</label>
                                                        <select id="gender" className="custom-select" defaultValue={'MALE'} onClick={this.handleSelectChange} >
                                                                <option disabled value='MALE'>Giới tính của bạn là?</option>
                                                                <option value="MALE" >Nam</option>
                                                                <option value="FEMALE" >Nữ</option>
                                                        </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <Form.Group controlId={this.props.id}>
                                                        <Form.Label>Ảnh đại diện</Form.Label>
                                                        <Form.Control type='file' ref={this.avatar} />
                                                     </Form.Group>
                                            </div>
                                    </div>
                                    <div className="row gutters">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <h6 className="mb-3 text-primary">Mật khẩu</h6>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                     <RegisterForm id="password" label="Mật khẩu" type="password" field={this.state.user.password}  change={this.change.bind(this, 'password')} />
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                     <RegisterForm id="confirmPassword" label="Xác thực mật khẩu" type="password" field={this.state.user.confirm_password}  change={this.change.bind(this, 'confirm_password')} />
                                            </div>
                                    </div><br></br>
                                    <div className="row gutters">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div className="text-right">
                                                            <button type="submit" id="submit" name="submit" className="btn btn-primary">Đăng Ký</button>
                                                    </div>
                                            </div>
                                    </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

class RegisterForm extends React.Component {
        render() {
                return (
                        <Form.Group controlId={this.props.id}>
                                <Form.Label>{this.props.label}</Form.Label>
                                <Form.Control type={this.props.type} value={this.props.field}
                                        onChange={this.props.change} />
                        </Form.Group>
                )
        }
}

export default SignUp