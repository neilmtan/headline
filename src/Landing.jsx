import React from "react";
import "./Landing.css";
import { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./blocks/Navbar.jsx";
import Header from "./blocks/Header.jsx";
import Subheader from "./blocks/Subheader.jsx";
import Image from "./blocks/Image.jsx";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const codeString = '<div class="header">\n     <div class="header-text-cont">\n          <div class="header-text">\n               <h1 class="header-title">The old way to make a website</h1>\n               <p class="header-subtitle">A painfully slow method to creating websites. And this isn\'t even half the code you\'d need.</p>\n          </div>\n     </div>\n          <div class="header-image-cont">\n               <img class="header-image" src="./sademoji.png">\n          </div>\n</div>';
const headlineString = '# Header\n[title] Making a website has never been so easy\n[subtitle] Bruhhhhhhh';

class Landing extends Component {
  render() {
    return (
      <div className="whole">
        <div className="navbar">
          <ul className="navbar-cont">
        <Navbar link="Headline" linkto="/"/>
        <Navbar link="Home" linkto="/"/>
        <Navbar link="Docs" linkto="/"/>
        <Navbar link="Create an Account" linkto="/register"/>
        </ul>
      </div>
        {/* <div>
          <StyledFirebaseAuth
            // className={styles.firebaseUi}
            uiConfig={this.uiConfig}
            firebaseAuth={firebaseApp.auth()}
          />
        </div> */}

        <Header
          title="Websites for everyone"
          subtitle="The new way to create clean, responsive websites."
          image="https://lh3.googleusercontent.com/-GMdIekEhnjpbp5X_2VlGiDfMQ3Jx9-_OrDAIcOku3ZR-6-7PpzFROl-_-CWAIsF3Q1AMZYT9swj4yHuUW_I8KmzIjQxeZpgq1kPtcR4XOnGFf7e9FBpUoo8Xu7eqBEOJQaami69h0Fc6dyvbolZJ4rdQ92FH4X7Fcp8NCuVxLFHFh1cF8ZRrwCU3nZ6Bn78jv4bNl1TtkqpZwSdIc4PP0wtsZT-2xmcE4paH2XzhShaRVfU3meeN9d8hotkcXqqBQGBV__zrS07xdxeGhd2loCeMy1H0Ss4BqcQwOdXbhlPvQzTd-vLHJKaAhriLxv9B7tbofRm7BwEMVU2lIpazLgX5ZrpQ8YVLpdLQs3nJRlYmbTa9gboQ9CCoyZ50kPFUcNj8da-KUWN0x3ACfMH4hHwcghdaMBXzxDVjFBBLrEWAFQYXs0Rm1roBf3pmTo5_GYX1c67-HE21XY4K5SDyVOIoEWmOmDmg3kxsn0Di4JcsglBHv-EhRm3b8-zle6Ca2LGBMf79vpw_CPSFuNAoBu19VrVEIwZ6XcS8js5PWUYeZe6lFtOxhU2Nxfzpk80dz7AOXAvitHILcglTnUABACYWBylL9e3v_evR0uj0cYEqUGWIepUqCS6h1Qxq3v7iDtahhHghfFvCC0XXMoJdaKQqUIOB9MbkMBaubWPYFTEV5FBC2XrG6RSAEPSAM7GV8qQ2ZsfppXfXL2FCjYvO1NDTa8fXJpfMF0IJCOZLjZrjiC5CQ-QzA=s867-no"
        />
        <Subheader
          title="Make websites in seconds"
          subtitle="Use Headline, a quick and easy markdown-like language that creates sites in seconds."
          image="https://lh3.googleusercontent.com/hRDeU7Eh90OpC-kdUgWv3ESoi7U90UxO1IUMgAr9gdsXNBnPhP6enAY1FdjjJt3j9GWtKJy44E3VysMRA9eNEKPVlcDuQcYevaui-pZ2Vi7YG9hU1EmOqivbwWLKvXPByzaDknTvunoQqpB3iq4Kwp03GKPxhq72esuOY_aGzZtzoKPIb2THHhf57dNCONHXJyUpyah53usj98EYEZke91T907I09w53hcoFb43EuskMmdkYvBUm_Z6kioD3gLlX_a_rInyNDrVswuxEzLuBW3EiP9ydXtdd1VVLAf68RnxHtHiI3gUl6fnLorGo-m38ItLMCq7Zn0nrahky1o5p39PYuy8R0vn0z6HOmlK_TEfxPPwX1W-Z7lWjwW67DJmlbbwbrAjaKwW2ArvSBjHwL0bFtXY7sqmsvHV7J47TINy8Fw6AgU3-SU621D7yDQV2TnCzYbCB3MUbgoRtZjG1wjhEudAyN9RZ2vJdh06ncryVoA9a4mn_BAL7_9jMONsaNo_J-I9lmwIhlwsuJnYinbzCniQzJzEegakUGyoEs900vJRyRIqi4wX_RenOqDSi8SihH4ZiwuKDTAbmrWzlbGVCzJzRYcyjV2CiFi8k5fBUH4h-COdXPFAkEHTWUIOmOAqsIBMZHPwFHqXfILSw0Ks6wS5yp2FG7I0QFkqJLKNeTfx--9tXGdCAYahaKh3ciDSeGm4KzA58SFzZgj8oV8Bi_D1p_1xSqeYUzh-CORWZSoD20MhQOg=s794-no"
        />

        <div className="whole-code-compare">
        <h1>Focus less on fixing buggy code and more on writing great content for your website.</h1>
          <div className="code-block-cont">
            <SyntaxHighlighter className="code-block" language="markdown" style={docco}>
              {codeString}
            </SyntaxHighlighter>
            <p>Without Headline: 50 lines of code.</p>
          </div>
          <div className="code-block-cont">
            <SyntaxHighlighter className="code-block" language="markdown" style={docco}>
              {headlineString}
            </SyntaxHighlighter>
            <p>With Headline: 3 clean, understandable lines of code.</p>
          </div>
        </div>

        <Subheader
          title="Online editor"
          subtitle="Use our in browser editor to make flawless, stunning websites. No software download required."
          image="https://lh3.googleusercontent.com/hRDeU7Eh90OpC-kdUgWv3ESoi7U90UxO1IUMgAr9gdsXNBnPhP6enAY1FdjjJt3j9GWtKJy44E3VysMRA9eNEKPVlcDuQcYevaui-pZ2Vi7YG9hU1EmOqivbwWLKvXPByzaDknTvunoQqpB3iq4Kwp03GKPxhq72esuOY_aGzZtzoKPIb2THHhf57dNCONHXJyUpyah53usj98EYEZke91T907I09w53hcoFb43EuskMmdkYvBUm_Z6kioD3gLlX_a_rInyNDrVswuxEzLuBW3EiP9ydXtdd1VVLAf68RnxHtHiI3gUl6fnLorGo-m38ItLMCq7Zn0nrahky1o5p39PYuy8R0vn0z6HOmlK_TEfxPPwX1W-Z7lWjwW67DJmlbbwbrAjaKwW2ArvSBjHwL0bFtXY7sqmsvHV7J47TINy8Fw6AgU3-SU621D7yDQV2TnCzYbCB3MUbgoRtZjG1wjhEudAyN9RZ2vJdh06ncryVoA9a4mn_BAL7_9jMONsaNo_J-I9lmwIhlwsuJnYinbzCniQzJzEegakUGyoEs900vJRyRIqi4wX_RenOqDSi8SihH4ZiwuKDTAbmrWzlbGVCzJzRYcyjV2CiFi8k5fBUH4h-COdXPFAkEHTWUIOmOAqsIBMZHPwFHqXfILSw0Ks6wS5yp2FG7I0QFkqJLKNeTfx--9tXGdCAYahaKh3ciDSeGm4KzA58SFzZgj8oV8Bi_D1p_1xSqeYUzh-CORWZSoD20MhQOg=s794-no"
        />
        <Subheader
          title="Instantly export your site"
          subtitle="Download your site to your computer and instantly run it."
          image="https://lh3.googleusercontent.com/KbbofnvVJrQjiT2bhHQRvfa55DMExoKSQkhqATWkHVfGxJj319SHcMWdBmw94gRoE3NYyXc3Fyc5TCgdNMwNpHM22Bbz5Z-riZgBkevjpL94wgNevf7jmHC91CCuQb8_LdxhbgQ363IGon9WM-BK28s_Lu2YS2qnB0boCzI8FvGl40vkFP9rrw6XNC3M9fXPLeiLVKcybQldrAnO5zkoCNhJmK21vCkC8TmKvfoklnGx2fyRM0HVhJDJfKNKxjVEX8X4fTnKnhvuZr38I6AyWcpbGMezrtIQ0CRhC-y0JjQXHfJ3HcFmdqfofTgx2gpgxXCFqeZ8WRoJBm0z9PlrFIHcjPxxXfFLJM4gTS_sHkRPL8onrsL7aqjDBsd41slpBNe9SY5RP4U3UIXQ3JMPqoiCoZuO0GyjaEvM7Jj7GUEk5OJtlEBRU_aJeE1IVO3w8W4f6T18TWHvqknUGcmUSZsXWcBxY0XJqB-bxCVcNLObc8Q4gJfczSv46J7czSiVYYmSrEDICrtX9fuswwdpLltuZgwniE5iveW-GOmn3PStkUnMoayZO68ucOEmS1mCKMQAW0yuKtoztLmrCKt6mGnKukSK1oMDc4VDB_diSBdyKjStSpEA5RaxaS7e-dBvBNalQNAyqXxKYUmuDSdtg8FEl4oi0Qh3oJ57ZIWRfKhgeAWaYDdgne8Rip3X-pA8HF5nz076s4Exk8QyauwgorEGDeJtmv1MvBii8gNKAe5Zw5FW5gsG1w=s794-no"
        />
        <Subheader
          title="Ready to make your own?"
          subtitle="Start with our documentation and editor to get started."
          image="https://lh3.googleusercontent.com/Bk47plGyFnYozLKPOLkjBgSUbXDj9NbA2hUurSZFxThXns6ToNHlTyGYVQKuOT6XP1NH-r9eqXLKxTnqBAYiCnBmqIPAw4sRMS0Jl3wPhjiU2qO0R3bEhrrN0i4ExDLxk-jgY1QFAyezTbHdcEivckF9Hn01wcA579QFZnum6YHDIoApV5SU8aUhtr3NU4Jh9H9YTHZ7aIOaP6NEz2NHC1ER-PIdu8KsqxlccGxbxoAabyqbOIvzhM_kJ4X4X6H2cONLdhYiBN7w2acqW2WHmFyKBPTwvQYXSGU0E66snBRu4O7K7rYoSDf_lJbkmB7N_73Ri3WPX02lsrutji02UiG1PS_fxnkZ_3T6t_g8F4Haw6l2K66lEdBOPu2v2rVzNICDEG_GOHfBd8BeCZx6Kxp02aoHbe_J2y6sDRq0MEy8Emm9NHAgWSarclftuSmj2neENMb4A5yAeB6C2Zo3omkIuroVXlRW4_B5SFLLWriKWtmrbi66TnX1rTKURJIwB_n3OpzzcRV6c1oA1NCQPDRztiIglF7h1C-FT6gmY6lo7bmXy6DEJtOb32mApiHov2cklA-Xx7CTmsjbZWFjuts5QQA4pYUY9ia43a_ofhdu19X-kyMJyM9wrBAYyp4kWAchiCV1-6bGUE0H-hhqgyFpz9Tko9YEASkbBwF4ISk0jH1wge2N5LXy-1wm6XMhgO-5OYU1DybPnm9c1K9RP_rwLa94iVgLYSv7qx9EYVObNMAk4ehDyA=s794-no"
        />
      </div>
    );
  }
}

export default Landing;
