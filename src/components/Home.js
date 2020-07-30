import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'In Theater'
        }
    }
    clicked(menu) {
        this.setState({
            active: menu,
          });
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="title">
                        <img className="img-responsive" src={'./head-img.jpg'} alt="img"/>
                    </div>
                </div>
                <div className="container">
                    <div className="menu">
                        <nav className="navbar navbar-expand-sm bg-light justify-content-center">
                            <ul className="navbar-nav menu-list">
                                <li className="nav-item list"><a className="nav-link active" href="/">In Theater</a> </li>
                                <li className="nav-item list"><a className="nav-link" href="/">Coming Soon</a></li>
                                <li className="nav-item list"><a className="nav-link" href="/">Chart</a></li>
                                <li className="nav-item list"><a className="nav-link" href="/">TV Series</a></li>
                                <li className="nav-item list"><a className="nav-link" href="/">Trailers</a></li>
                                <li className="nav-item list"><a className="nav-link" href="/">More</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <img className="img-film" src={'./film.jpg'} alt="film"/>
                            <div className="text-title">
                                <h4>THE SHALLOWS</h4>
                                <p>Action, Adventure, Sci-Fi</p>
                                <i className="fa fa-star"></i>&nbsp;<i className="fa fa-star"></i>&nbsp;<i className="fa fa-star"></i>
                            </div>
                        </div>
                        <div className="col-4">
                            <img className="img-film" src={'./film.jpg'} alt="film"/>
                            <div className="text-title">
                                <h4>THE SHALLOWS</h4>
                                <p>Action, Adventure, Sci-Fi</p>
                                <i className="fa fa-star"></i>&nbsp;<i className="fa fa-star"></i>&nbsp;<i className="fa fa-star"></i>
                            </div>
                        </div>
                        <div className="col-4">
                            <img className="img-film" src={'./film.jpg'} alt="film"/>
                            <div className="text-title">
                                <h4>THE SHALLOWS</h4>
                                <p>Action, Adventure, Sci-Fi</p>
                                <i className="fa fa-star"></i>&nbsp;<i className="fa fa-star"></i>&nbsp;<i className="fa fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;