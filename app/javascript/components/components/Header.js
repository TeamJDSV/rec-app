import React, { Component } from 'react'
import { Signupform } from './Signupform';
import { Signinform } from './Signinform';
import { Nav, NavItem, NavLink, Button, Modal, ModalBody, ModalHeader } from 'reactstrap'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signUpModal: false,
            signInModal: false,
            weatherAPI: {}
        };

        this.toggleSignUp = this.toggleSignUp.bind(this);
        this.toggleSignIn = this.toggleSignIn.bind(this);

    }

    toggleSignUp() {
        console.log(this.state.signUpModal);
        this.setState({
            signUpModal: !this.state.signUpModal
        });
    }

    toggleSignIn() {
        console.log(this.state.signInModal);
        this.setState({
            signInModal: !this.state.signInModal
        });
    }
    changeBackdrop(e) {
        let value = e.target.value;
        if (value !== 'static') {
            value = JSON.parse(value);
        }
        this.setState({ backdrop: value });
    }
    componentDidMount() {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=san diego&units=imperial&APPID=21b17ce1518a5be6b1097495053cb5eb")
            .then(response => response.json())
            .then(response => this.setState({
                weatherAPI: response

            }))

    }
    render() {
        const {
            logged_in,
            sign_out_route
        } = this.props
        const toggleClassNameSignUp = this.state.signUpModal ? 'nav-link is-active' : 'nav-link'
        const toggleClassNameSignIn = this.state.signInModal ? 'nav-link is-active' : 'nav-link'


        return (
            <header className="header">

                <Nav>
                    <img width="50px" height="50px" src="https://lh3.googleusercontent.com/D30h22DafCF95u51zYWed7G2Y6N2dtUENoYBadTlFCvo_uEMPHeywxISg71UKAUC3V4NpoIQeEfttO5t3GtgjBGTgSfXwwC5bFitbrlrA8f_NNCUgZLTNyw3VJaCig14bqL2-hVn=w2400" alt="" />
                    <div>
                        <Modal isOpen={this.state.signUpModal} toggle={this.toggleSignUp} >
                            <ModalHeader toggle={this.toggleSignUp}>SIGN UP</ModalHeader>
                            <ModalBody>
                                <Signupform csrfToken={this.props.csrfToken} />
                            </ModalBody>

                        </Modal>
                        <Modal isOpen={this.state.signInModal} toggle={this.toggleSignIn} >
                            <ModalHeader toggle={this.toggleSignIn}>SIGN IN</ModalHeader>
                            <ModalBody>
                                <Signinform csrfToken={this.props.csrfToken} />
                            </ModalBody>

                        </Modal>
                    </div>
                    <NavItem>
                        <NavLink href="/" className="nav-link">HOME</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/feed" className="nav-link">FEED</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/aboutus" className="nav-link">ABOUT US</NavLink>
                    </NavItem>
                </Nav>
                <div className="weather">
                    <span className='weather-temp'> {this.state.weatherAPI.main?.temp}</span>
                    {this.state.weatherAPI.weather && this.state.weatherAPI.weather[0]?.description}
                    <img width="50" height="50" src={`https://openweathermap.org/img/wn/${this.state.weatherAPI.weather && this.state.weatherAPI.weather[0].icon}@2x.png`} />
                </div>
                <Nav>
                    {logged_in &&
                        <NavItem>
                            <a href={sign_out_route} className="nav-link">LOG OUT</a>
                        </NavItem>
                    }
                    {!logged_in &&
                        <NavItem>
                            <Button className={toggleClassNameSignIn} onClick={this.toggleSignIn}>SIGN IN</Button>                         </NavItem>
                    }
                    {!logged_in &&
                        <NavItem>
                            <Button className={toggleClassNameSignUp} onClick={this.toggleSignUp}>SIGN UP</Button>
                        </NavItem>
                    }
                </Nav>

            </header>
        )
    }
}
export default Header