import React, { Component } from "react";
import { Signupform } from "../components/Signupform";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import { Link } from "react-router-dom";
const items = [
  {
    src: "https://d3nxoulyw7bc8u.cloudfront.net/images/venue/166/c4786b69-927f-443c-ad3f-2f1d79f3ec25.jpg",
  },
  {
    src: "https://d3nxoulyw7bc8u.cloudfront.net/images/venue/226/d4bd4585-7915-4460-946f-755739d3c863.jpg",
  },
  {
    src: "https://2.bp.blogspot.com/-H2ut46oCNsM/WtkI3G0nKkI/AAAAAAAAhe4/pa4fqLxa82YSEFQkVv7Vs0Vx--NKQS6xwCLcBGAs/s1600/intercontinental-san-diego-5324373088-2x1.jpeg",
  },
];
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }
  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
        </CarouselItem>
      );
    });

    return (
      <>
        <section>
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={this.goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={this.previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={this.next}
            />
          </Carousel>
        </section>
        <section className="layout-two-column">
          <div>
            <div className="signupform2">
              {!this.props.logged_in && (
                <Signupform csrfToken={this.props.csrfToken} />
              )}
            </div>
            {this.props.logged_in && (
              <div className="profile-img">
                <img
                  className="profile-img"
                  src="https://i1.sndcdn.com/avatars-si6VMrH1nO5JwyQe-jB5sJw-t500x500.jpg"
                  width="290"
                  height="300"
                />
                <h2>Welcome {this.props.current_user.email}</h2>{" "}
              </div>
            )}
          </div>

          <div className="limited-info">
            <div className="threecards">
              {this.props.logged_in && (
                <>
                  <Link to="/feed" className="home-card">
                    <div className="top-card">
                      <div className="time">
                        <h3>BigBodySam</h3>
                        <p>3 hours ago</p>
                      </div>
                      <h2>Enbrayer Concert @ Queen Bee's</h2>
                    </div>
                    <div className="gogglemaps">
                      <iframe
                        width="290"
                        height="200"
                        loading="lazy"
                        allowFullscreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps/embed/v1/place?key=nope&q=Petco+Park,San+Diego,CA`}
                      ></iframe>
                    </div>
                  </Link>
                  <Link to="/feed" className="home-card">
                    <div className="top-card">
                      <div className="time">
                        <h3>VicLastName</h3>
                        <p>2 days ago</p>
                      </div>
                      <h2>Hong Kong</h2>
                    </div>
                    <div className="gogglemaps">
                      <iframe
                        width="290"
                        height="200"
                        loading="lazy"
                        allowFullscreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps/embed/v1/place?key=nope&q=Petco+Park,San+Diego,CA`}
                      ></iframe>
                    </div>
                  </Link>
                  <Link to="/feed" className="home-card">
                    <div className="top-card">
                      <div className="time">
                        <h3>DarwinSP</h3>
                        <p>1 week ago</p>
                      </div>
                      <h2>Facebook HQ</h2>
                    </div>
                    <div className="gogglemaps">
                      <iframe
                        width="290"
                        height="200"
                        loading="lazy"
                        allowFullscreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps/embed/v1/place?key=nope&q=Petco+Park,San+Diego,CA`}
                      ></iframe>
                    </div>
                  </Link>
                </>
              )}
              {!this.props.logged_in && (
                <>
                  <a href={this.props.new_user_route} className="home-card">
                    <div className="top-card">
                      <div className="time">
                        <h3>BigBodySam</h3>
                        <p>3 hours ago</p>
                      </div>
                      <h2>Enbrayer Concert @ Queen Bee's</h2>
                    </div>
                    <div className="gogglemaps"></div>
                  </a>
                  <a href={this.props.new_user_route} className="home-card">
                    {" "}
                    <div className="top-card">
                      <div className="time">
                        <h3>VicLastName</h3>
                        <p>2 days ago</p>
                      </div>
                      <h2>Hong Kong</h2>
                    </div>
                    <div className="gogglemaps">GOGGLE MAPS</div>
                  </a>
                  <a href={this.props.new_user_route} className="home-card">
                    {" "}
                    <div className="top-card">
                      <div className="time">
                        <h3>DarwinSP</h3>
                        <p>1 week ago</p>
                      </div>
                      <h2>Facebook HQ</h2>
                    </div>
                    <div className="gogglemaps">GOGGLE MAPS</div>
                  </a>
                </>
              )}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
