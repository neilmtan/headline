import React from "react";
import './Landing.css';
import { Component } from "react";
import { Link } from 'react-router-dom';
import Navbar from "./blocks/Navbar.jsx";
import Header from "./blocks/Header.jsx";
import Subheader from "./blocks/Subheader.jsx";
import Image from "./blocks/Image.jsx";


class Landing extends Component {
    render() {
      return (
        <div className="whole">
            <Navbar link1="Headline" link1to="/" link2="Home" link2to="/" link3="Docs" link3to="https://github.com/neilmtan/headline/blob/master/README.md" link5="Get Started!" link5to="/editor"/>
            <Header title="Making news in web development" subtitle="The new way to create clean, responsive websites." image="https://lh3.googleusercontent.com/BGkhhqN1Kj84WoZeDmHG3cSmkjZDi5I2y73U_E708i2Sps_WOLr56X5YASXW4PjHpCXy5ToGW5TK0fvqexy-jS5PLDvEEK_2dL5cPNxApAsgS5-af8oShNXyiegbT2dQSdXGt_f9cpsrVR_8WwqQSGxUczmf-ITR-rwbF-zD_zUJLmCYItekri7cl1r-NWgGsthxn0ni3QjmutvTii_fqbn4Ls2_4tBUpcZq7pTgr8TZi_7E3LPVA2-zjglXulgvyO6gYsAAjOJ1b4lL6SrcFOY7Ms5Syfa7-lZ-jL5VJa6T6XcSDOrfSBINCM-QjW969gh63Wjlx7_fI454o7UtpxUtnryRz9QvZ7SE76HXfNFlQi2Y4Zp5qVawptixVogyqfTSyaeuM37JY10RtPMHJ2rzSJR2u0UWgT7aaGHj4vZZNKSV3hRhd9Ombnmkd49bBQe8jqmMRa6aRgUeb1zFapSjv35nPOsZICXeFtXCVj-pn7VQY47GJg7EbTd9y-z_uMFVg_rd8Z8Y_KaFLbQdvUGbM1tiv5JC6fRqvdWFS6FDt5T22g2dqXr2DqLzRkSs32YXjZPqpNU_V4Xz8397rsNpozgs_uI9p--mWPeidNTPrQc3TS1qmzIbwlKiAE-Six0CeyJjHfg4t1f7jFhR2NHdIJuOQqq2jhbLMMhJZSbqv206tkCasow_3Dan=s867-no   "/>
            <Subheader title="Make websites in seconds" subtitle="Use Headline, a quick and easy markdown-like language that creates sites in seconds." image="https://lh3.googleusercontent.com/hRDeU7Eh90OpC-kdUgWv3ESoi7U90UxO1IUMgAr9gdsXNBnPhP6enAY1FdjjJt3j9GWtKJy44E3VysMRA9eNEKPVlcDuQcYevaui-pZ2Vi7YG9hU1EmOqivbwWLKvXPByzaDknTvunoQqpB3iq4Kwp03GKPxhq72esuOY_aGzZtzoKPIb2THHhf57dNCONHXJyUpyah53usj98EYEZke91T907I09w53hcoFb43EuskMmdkYvBUm_Z6kioD3gLlX_a_rInyNDrVswuxEzLuBW3EiP9ydXtdd1VVLAf68RnxHtHiI3gUl6fnLorGo-m38ItLMCq7Zn0nrahky1o5p39PYuy8R0vn0z6HOmlK_TEfxPPwX1W-Z7lWjwW67DJmlbbwbrAjaKwW2ArvSBjHwL0bFtXY7sqmsvHV7J47TINy8Fw6AgU3-SU621D7yDQV2TnCzYbCB3MUbgoRtZjG1wjhEudAyN9RZ2vJdh06ncryVoA9a4mn_BAL7_9jMONsaNo_J-I9lmwIhlwsuJnYinbzCniQzJzEegakUGyoEs900vJRyRIqi4wX_RenOqDSi8SihH4ZiwuKDTAbmrWzlbGVCzJzRYcyjV2CiFi8k5fBUH4h-COdXPFAkEHTWUIOmOAqsIBMZHPwFHqXfILSw0Ks6wS5yp2FG7I0QFkqJLKNeTfx--9tXGdCAYahaKh3ciDSeGm4KzA58SFzZgj8oV8Bi_D1p_1xSqeYUzh-CORWZSoD20MhQOg=s794-no"/>
            <Subheader title="Online editor" subtitle="Use our in browser editor to make flawless, stunning websites. No software download required." image="https://lh3.googleusercontent.com/hRDeU7Eh90OpC-kdUgWv3ESoi7U90UxO1IUMgAr9gdsXNBnPhP6enAY1FdjjJt3j9GWtKJy44E3VysMRA9eNEKPVlcDuQcYevaui-pZ2Vi7YG9hU1EmOqivbwWLKvXPByzaDknTvunoQqpB3iq4Kwp03GKPxhq72esuOY_aGzZtzoKPIb2THHhf57dNCONHXJyUpyah53usj98EYEZke91T907I09w53hcoFb43EuskMmdkYvBUm_Z6kioD3gLlX_a_rInyNDrVswuxEzLuBW3EiP9ydXtdd1VVLAf68RnxHtHiI3gUl6fnLorGo-m38ItLMCq7Zn0nrahky1o5p39PYuy8R0vn0z6HOmlK_TEfxPPwX1W-Z7lWjwW67DJmlbbwbrAjaKwW2ArvSBjHwL0bFtXY7sqmsvHV7J47TINy8Fw6AgU3-SU621D7yDQV2TnCzYbCB3MUbgoRtZjG1wjhEudAyN9RZ2vJdh06ncryVoA9a4mn_BAL7_9jMONsaNo_J-I9lmwIhlwsuJnYinbzCniQzJzEegakUGyoEs900vJRyRIqi4wX_RenOqDSi8SihH4ZiwuKDTAbmrWzlbGVCzJzRYcyjV2CiFi8k5fBUH4h-COdXPFAkEHTWUIOmOAqsIBMZHPwFHqXfILSw0Ks6wS5yp2FG7I0QFkqJLKNeTfx--9tXGdCAYahaKh3ciDSeGm4KzA58SFzZgj8oV8Bi_D1p_1xSqeYUzh-CORWZSoD20MhQOg=s794-no"/>
            <Subheader title="Instantly export your site" subtitle="Download your site to your computer and instantly run it." image="https://lh3.googleusercontent.com/KbbofnvVJrQjiT2bhHQRvfa55DMExoKSQkhqATWkHVfGxJj319SHcMWdBmw94gRoE3NYyXc3Fyc5TCgdNMwNpHM22Bbz5Z-riZgBkevjpL94wgNevf7jmHC91CCuQb8_LdxhbgQ363IGon9WM-BK28s_Lu2YS2qnB0boCzI8FvGl40vkFP9rrw6XNC3M9fXPLeiLVKcybQldrAnO5zkoCNhJmK21vCkC8TmKvfoklnGx2fyRM0HVhJDJfKNKxjVEX8X4fTnKnhvuZr38I6AyWcpbGMezrtIQ0CRhC-y0JjQXHfJ3HcFmdqfofTgx2gpgxXCFqeZ8WRoJBm0z9PlrFIHcjPxxXfFLJM4gTS_sHkRPL8onrsL7aqjDBsd41slpBNe9SY5RP4U3UIXQ3JMPqoiCoZuO0GyjaEvM7Jj7GUEk5OJtlEBRU_aJeE1IVO3w8W4f6T18TWHvqknUGcmUSZsXWcBxY0XJqB-bxCVcNLObc8Q4gJfczSv46J7czSiVYYmSrEDICrtX9fuswwdpLltuZgwniE5iveW-GOmn3PStkUnMoayZO68ucOEmS1mCKMQAW0yuKtoztLmrCKt6mGnKukSK1oMDc4VDB_diSBdyKjStSpEA5RaxaS7e-dBvBNalQNAyqXxKYUmuDSdtg8FEl4oi0Qh3oJ57ZIWRfKhgeAWaYDdgne8Rip3X-pA8HF5nz076s4Exk8QyauwgorEGDeJtmv1MvBii8gNKAe5Zw5FW5gsG1w=s794-no"/>
            <Image title = "Ready to make your own? Start with our documentation and editor to get started." image="https://lh3.googleusercontent.com/Bk47plGyFnYozLKPOLkjBgSUbXDj9NbA2hUurSZFxThXns6ToNHlTyGYVQKuOT6XP1NH-r9eqXLKxTnqBAYiCnBmqIPAw4sRMS0Jl3wPhjiU2qO0R3bEhrrN0i4ExDLxk-jgY1QFAyezTbHdcEivckF9Hn01wcA579QFZnum6YHDIoApV5SU8aUhtr3NU4Jh9H9YTHZ7aIOaP6NEz2NHC1ER-PIdu8KsqxlccGxbxoAabyqbOIvzhM_kJ4X4X6H2cONLdhYiBN7w2acqW2WHmFyKBPTwvQYXSGU0E66snBRu4O7K7rYoSDf_lJbkmB7N_73Ri3WPX02lsrutji02UiG1PS_fxnkZ_3T6t_g8F4Haw6l2K66lEdBOPu2v2rVzNICDEG_GOHfBd8BeCZx6Kxp02aoHbe_J2y6sDRq0MEy8Emm9NHAgWSarclftuSmj2neENMb4A5yAeB6C2Zo3omkIuroVXlRW4_B5SFLLWriKWtmrbi66TnX1rTKURJIwB_n3OpzzcRV6c1oA1NCQPDRztiIglF7h1C-FT6gmY6lo7bmXy6DEJtOb32mApiHov2cklA-Xx7CTmsjbZWFjuts5QQA4pYUY9ia43a_ofhdu19X-kyMJyM9wrBAYyp4kWAchiCV1-6bGUE0H-hhqgyFpz9Tko9YEASkbBwF4ISk0jH1wge2N5LXy-1wm6XMhgO-5OYU1DybPnm9c1K9RP_rwLa94iVgLYSv7qx9EYVObNMAk4ehDyA=s794-no"/>
            




        </div>
  
      
      
      
      
      
      
      
      
      );
    }
}

export default Landing;
