import React from "react";
import styled from "styled-components";
import './Landing.css';
import { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <ul className="navbar-cont">
                    <li className="navbar-item"><a>Headline</a></li>
                    <li className="navbar-item active"><a>Home</a></li>
                    <li className="navbar-item"><a>About</a></li>
                    <li className="navbar-item"><a>Editor</a></li>
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
                        <h1 className="header-title">Headline</h1>
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
