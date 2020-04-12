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
                    <li className="navbar-item"><a href="https://github.com/neilmtan/headline/blob/master/README.md" target="_blank">Docs</a></li>
                    <li className="right navbar-item"><Link to="/editor">Get Started!</Link></li>
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
                        <h1 className="header-title">A website in seconds</h1>
                        <p className="header-subtitle">Headline is new markup language for building responsive websites in minutes.</p>
                    </div>
                </div>
                <div className="header-image-cont">
                    <img className="header-image" src="https://lh3.googleusercontent.com/UJO9hvqwhLTyQIyXLIYtiZw8DRcjKUwpWxIQv4DZX8phlY6ZacVU7ho6_vfxDoYuJbh9eBYZ0XT5Z69FqksQb7cO8UK_2m-egdVWDcUYjG6_041aWAcXVLNBU9Y7Dlsog3lZj4AP22LMAN4cBrs2JUTvwY-U2W_ZAWNK5R-mh7oW3udFAFrbYZ5RL1xs2E7hhCcwFKt1fHyoIYOQ3B4XFM5gm1Ae_54x6qvtqWqjjjWxHAMv3eLJmS5cU3olk3Ox3sCktxi9PgPtkonWiUAN_7-EhgBH5n_l_TUjHcSHNYiAO-Nj9_ACQKpNgK0L7-NsVhbyAIi3dqWyFeehkwtUa7hSEJxaX5FkpbJpzA2kIeGXpqz5G8fJaweJKROrQXQWHxtlzJR1rdzP4T_KeH_joLR00T5-DTOFVOGZoyAG7LjHXeY4jTApW-lXexgrx4UN43SCpT-FFTjIXKok9k0w_4QfERH7SiER4x2AqMpfP8xUBmaI0XKZRAGyfYuygwcldbSmaQOJlhZrURnheS0kJuka5nzIJjfHuXudtmeConjnmG-9LF8CBrNoLgWMG3lWjHSJUvF0litn9kv0JnW-MdfTGqunb5FrWh12bwa5-7fBm3AmwEz2TrSBSlLAUnH4trYFTfPnwAwBQqpEwf4J-fJNIXDYhT6X95uHi6CzUo-Lm2JvFn7FH3aDSbUF1VnzHQ-ZGyGNhpV6A7wYjlkXRxModVbE9mkyMge50gd85YTvMiF--AAWWQ=s794-no"></img>
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
                        <h2 className="subheader-title">{this.props.title}</h2>
                        <p className="subheader-subtitle">{this.props.subtitle}</p>
                    </div>
                </div>
                <div className="subheader-image-cont">
                    <img className="subheader-image" src={this.props.image}></img>
                </div>
            </div>
        );
    }
}

class SubheaderSplitLeft extends Component {
    render() {
        return (
            <div className="subheader">
                <div className="subheader-image-cont">
                    <img className="subheader-image" src={this.props.image}></img>
                </div>
                <div className="subheader-text-cont">
                    <div className="subheader-text">
                        <h2 className="subheader-title">{this.props.title}</h2>
                        <p className="subheader-subtitle">{this.props.subtitle}</p>
                    </div>
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
            <SubheaderSplitLeft title="Online editor" subtitle="Use our in browser editor to make flawless, stunning websites. No software download required." image="https://lh3.googleusercontent.com/hRDeU7Eh90OpC-kdUgWv3ESoi7U90UxO1IUMgAr9gdsXNBnPhP6enAY1FdjjJt3j9GWtKJy44E3VysMRA9eNEKPVlcDuQcYevaui-pZ2Vi7YG9hU1EmOqivbwWLKvXPByzaDknTvunoQqpB3iq4Kwp03GKPxhq72esuOY_aGzZtzoKPIb2THHhf57dNCONHXJyUpyah53usj98EYEZke91T907I09w53hcoFb43EuskMmdkYvBUm_Z6kioD3gLlX_a_rInyNDrVswuxEzLuBW3EiP9ydXtdd1VVLAf68RnxHtHiI3gUl6fnLorGo-m38ItLMCq7Zn0nrahky1o5p39PYuy8R0vn0z6HOmlK_TEfxPPwX1W-Z7lWjwW67DJmlbbwbrAjaKwW2ArvSBjHwL0bFtXY7sqmsvHV7J47TINy8Fw6AgU3-SU621D7yDQV2TnCzYbCB3MUbgoRtZjG1wjhEudAyN9RZ2vJdh06ncryVoA9a4mn_BAL7_9jMONsaNo_J-I9lmwIhlwsuJnYinbzCniQzJzEegakUGyoEs900vJRyRIqi4wX_RenOqDSi8SihH4ZiwuKDTAbmrWzlbGVCzJzRYcyjV2CiFi8k5fBUH4h-COdXPFAkEHTWUIOmOAqsIBMZHPwFHqXfILSw0Ks6wS5yp2FG7I0QFkqJLKNeTfx--9tXGdCAYahaKh3ciDSeGm4KzA58SFzZgj8oV8Bi_D1p_1xSqeYUzh-CORWZSoD20MhQOg=s794-no"/>
            <SubheaderSplit title="Instantly export your site" subtitle="Download your site to your computer and instantly run it." image="https://lh3.googleusercontent.com/KbbofnvVJrQjiT2bhHQRvfa55DMExoKSQkhqATWkHVfGxJj319SHcMWdBmw94gRoE3NYyXc3Fyc5TCgdNMwNpHM22Bbz5Z-riZgBkevjpL94wgNevf7jmHC91CCuQb8_LdxhbgQ363IGon9WM-BK28s_Lu2YS2qnB0boCzI8FvGl40vkFP9rrw6XNC3M9fXPLeiLVKcybQldrAnO5zkoCNhJmK21vCkC8TmKvfoklnGx2fyRM0HVhJDJfKNKxjVEX8X4fTnKnhvuZr38I6AyWcpbGMezrtIQ0CRhC-y0JjQXHfJ3HcFmdqfofTgx2gpgxXCFqeZ8WRoJBm0z9PlrFIHcjPxxXfFLJM4gTS_sHkRPL8onrsL7aqjDBsd41slpBNe9SY5RP4U3UIXQ3JMPqoiCoZuO0GyjaEvM7Jj7GUEk5OJtlEBRU_aJeE1IVO3w8W4f6T18TWHvqknUGcmUSZsXWcBxY0XJqB-bxCVcNLObc8Q4gJfczSv46J7czSiVYYmSrEDICrtX9fuswwdpLltuZgwniE5iveW-GOmn3PStkUnMoayZO68ucOEmS1mCKMQAW0yuKtoztLmrCKt6mGnKukSK1oMDc4VDB_diSBdyKjStSpEA5RaxaS7e-dBvBNalQNAyqXxKYUmuDSdtg8FEl4oi0Qh3oJ57ZIWRfKhgeAWaYDdgne8Rip3X-pA8HF5nz076s4Exk8QyauwgorEGDeJtmv1MvBii8gNKAe5Zw5FW5gsG1w=s794-no"/>
            <SubheaderSplitLeft title="Ready to make your own?" subtitle="Start with our documentation and editor to get started." image="https://lh3.googleusercontent.com/Bk47plGyFnYozLKPOLkjBgSUbXDj9NbA2hUurSZFxThXns6ToNHlTyGYVQKuOT6XP1NH-r9eqXLKxTnqBAYiCnBmqIPAw4sRMS0Jl3wPhjiU2qO0R3bEhrrN0i4ExDLxk-jgY1QFAyezTbHdcEivckF9Hn01wcA579QFZnum6YHDIoApV5SU8aUhtr3NU4Jh9H9YTHZ7aIOaP6NEz2NHC1ER-PIdu8KsqxlccGxbxoAabyqbOIvzhM_kJ4X4X6H2cONLdhYiBN7w2acqW2WHmFyKBPTwvQYXSGU0E66snBRu4O7K7rYoSDf_lJbkmB7N_73Ri3WPX02lsrutji02UiG1PS_fxnkZ_3T6t_g8F4Haw6l2K66lEdBOPu2v2rVzNICDEG_GOHfBd8BeCZx6Kxp02aoHbe_J2y6sDRq0MEy8Emm9NHAgWSarclftuSmj2neENMb4A5yAeB6C2Zo3omkIuroVXlRW4_B5SFLLWriKWtmrbi66TnX1rTKURJIwB_n3OpzzcRV6c1oA1NCQPDRztiIglF7h1C-FT6gmY6lo7bmXy6DEJtOb32mApiHov2cklA-Xx7CTmsjbZWFjuts5QQA4pYUY9ia43a_ofhdu19X-kyMJyM9wrBAYyp4kWAchiCV1-6bGUE0H-hhqgyFpz9Tko9YEASkbBwF4ISk0jH1wge2N5LXy-1wm6XMhgO-5OYU1DybPnm9c1K9RP_rwLa94iVgLYSv7qx9EYVObNMAk4ehDyA=s794-no"/>

            




        </div>
  
      
      
      
      
      
      
      
      
      );
    }
}

export default Landing;
