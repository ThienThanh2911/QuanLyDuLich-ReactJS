import React, { useState } from "react"
import { Form } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import API, { endpoints } from "../API";
import cookies from 'react-cookies'
import '../assets/css/change-password.css'

export default function SignIn(props) {
        const [username, setUsername] = useState(null)
        const [password, setPassword] = useState(null)
        const dispatch = useDispatch()

        const login = async (event) => {
            event.preventDefault()
            let res = await API.post(endpoints['login'], {
              'client_id': 'rUZJW651G38Kp5p37moVfN5ESnwWT0CF7CIpWxDO',
              'client_secret': 't2WmjliRlwdqNA4fJ8wCSC5WcAZ8TyDCPbAcdXKaSf7Vjm95xVQE9vXoi9hC4OVcVyVjNpze5oplcuqFZucgWZkphgfRsMwbFl07HJgjoAxq1vPDABHy0ea6CotLHVXH',
              'username': username,
              'password': password,
              'grant_type': 'password'
            })
        
            cookies.save("access_token", res.data.access_token)
        
            let user = await API.get(endpoints['current-user'], {
              headers: {
                  'Authorization': `Bearer ${cookies.load('access_token')}`
              }
            })
            cookies.save("user", user.data)
        
            dispatch({
              "type": "login",
              "payload": user.data
            })
          }
        if (cookies.load("user") != null)
            return <Redirect to="/" />
        else
            return (
                <>
                <div className="container">
                    <Form onSubmit={login}>
                        <div className="card card-small h-100">
                            <div className="card-body">
                                <div>
                                        <h6 className="mb-3 text-primary">Đăng Nhập</h6>
                                </div>
                                <div>
                                    <LoginForm id="username" type="text" label="Tài khoản" field={username} change={event =>  setUsername(event.target.value)} />
                                </div>
                                <div>
                                    <LoginForm id="password" type="password" label="Mật khẩu" field={password} change={event =>  setPassword(event.target.value)} />
                                </div><br></br>
                                <div className="row gutters">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                            <div className="text-left">
                                                <a href="signup" style={{fontSize: "12px"}}>Đăng ký tài khoản mới?</a>
                                            </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                            <div className="text-right">
                                                    <button type="submit" id="submit" name="submit" className="btn btn-primary">Đăng Nhập</button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
                </>
        )
}

class LoginForm extends React.Component {
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
