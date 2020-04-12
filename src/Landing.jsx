import React from "react";
import './Landing.css';
import { Component } from "react";
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <ul className="navbar-cont">
                    <li className="navbar-item"><Link to="/">Headline</Link></li>
                    <li className="navbar-item active"><Link to="/">Home</Link></li>
                    <li className="navbar-item"><Link to="/parser">Parser</Link></li>
                    <li className="navbar-item"><Link to="/editor">Editor</Link></li>
                </ul>
            </div>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-text-cont">
                    <div className="header-text">
                        <h1 className="header-title">Make a website without code, in seconds</h1>
                        <p className="header-subtitle">A new Markdown-like syntax that produces clean, responsive websites in HTML and CSS.</p>
                    </div>
                </div>
                <div className="header-image-cont">
                    <img className="header-image" src="https://mango-finance.now.sh/static/media/HeaderLand.b7f38f84.png"></img>
                </div>
            </div>
        );
    }
}

class SubheaderSplit extends Component {
    render() {
        return (
            <div className="subheader">
                <div className="subheader-text-cont">
                    <div className="subheader-text">
                        <h2 className="subheader-title">Online editor</h2>
                        <p className="subheader-subtitle">No download required. Make websites on our simple online editor.</p>
                    </div>
                </div>
                <div className="subheader-image-cont">
                    <img className="subheader-image" src="https://mango-finance.now.sh/static/media/HeaderLand.b7f38f84.png"></img>
                </div>
            </div>
        );
    }
}

class A extends Component {
    render() {
        return (
            <div></div>
        );
    }
}

class Landing extends Component {
    render() {
      return (
        <div className="whole">
            <Navbar/>
            <Header/>
            <SubheaderSplit/>

            




        </div>
  
      
      
      
      
      
      
      
      
      );
    }
}

export default Landing;
