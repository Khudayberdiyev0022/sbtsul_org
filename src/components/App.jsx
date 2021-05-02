import React, { Fragment , useEffect} from 'react'
import { BrowserRouter as Router, Switch , Route,useLocation } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import NavbarMobile from './Navbar/NavbarMobile'
import Home from './Home/Home'
import Filial from './Filial/Filial'
import About from './About/About'
import Contact from './Contact/Contact'
import Arm from './Tuzilma/ARM/Arm'
import Kengash from './Tuzilma/Kengash/Kengash'
import Kafedra from './Tuzilma/Kafedralar/Kafedra'
import Umumtalim from './Tuzilma/Kafedralar/Umumtalim/Umumtalim'
import DavlatHuquqiy from './Tuzilma/Kafedralar/DavlatHuquqiy/DavlatHuquqiy'
import JinoyatHuquq from './Tuzilma/Kafedralar/JinoyatHuquq/JinoyatHuquq'
import XususiyHuquq from './Tuzilma/Kafedralar/XususiyHuquq/XususiyHuquqiy'
import Jangovor from './Tuzilma/Kafedralar/Jangovor/Jangovor'
import Bolimlar from './Tuzilma/Bolimlar/Bolimlar'
import Kadrlar from './Tuzilma/Bolimlar/Kadrlar/Kadrlar'
import Buxgalteriya from './Tuzilma/Bolimlar/Buxgalteriya/Buxgalteriya'
import KonselyariyaArxiv from './Tuzilma/Bolimlar/KonselyariyaArxiv/KonselyariyaArxiv'
import Moliya from './Tuzilma/Bolimlar/Moliya/Moliya'
import Footer from './Footer/Footer'
import Home7 from './Home/HomeParts/Home7'
import IlmiyKengash from './Faoliyat/IlmiyKengash/IlmiyKengash'
import AT from './Tuzilma/Bolimlar/AT/AT'
import Ekspluatatsiya from './Tuzilma/Bolimlar/Ekspluatatsiya/Ekspluatatsiya'
import Qabul from './Qabul/Qabul'
import Dekanatlar from './Tuzilma/Dekanatlar/Dekanatlar'
import Tayyorlash from './Tuzilma/Dekanatlar/Tayyorlash'
import QaytaTayyorlash from './Tuzilma/Dekanatlar/QaytaTayyorlash'
import Ikkinchi from './Tuzilma/Bolimlar/Ikkinchi/Ikkinchi'
import Rahbariyat from './Tuzilma/Rahbariyat/Rahbariyat'
import Direktorat from './Tuzilma/Bolimlar/Direktorat/Direktorat'
import OquvUslubiy from './Tuzilma/Bolimlar/OquvUslubiy/OquvUslubiy'
import Tarbiyaviy from './Tuzilma/Bolimlar/Tarbiyaviy/Tarbiyaviy'


function App() {
    return (
        <Fragment>
            <Router>
                <ScrollToTop />
                <Navbar />
                <NavbarMobile />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/filial'>
                        <Filial />
                    </Route>
                    <Route path='/tuzilma'>
                        <Home7 />
                    </Route>
                    <Route path='/kengash'>
                        <Kengash />
                    </Route>
                    <Route path='/ilmiy-kengash'>
                        <IlmiyKengash />
                    </Route>
                    <Route path='/kafedralar'>
                        <Kafedra />
                    </Route>
                    <Route path='/rahbariyat'>
                        <Rahbariyat />
                    </Route>
                    <Route path='/dx-fanlar-kafedrasi'>
                        <DavlatHuquqiy />
                    </Route>
                    <Route path='/jh-fanlar-kafedrasi'>
                        <JinoyatHuquq />
                    </Route>
                    <Route path='/u-fanlar-kafedrasi'>
                        <Umumtalim />
                    </Route>
                    <Route path='/kjt-fanlar-kafedrasi'>
                        <Jangovor />
                    </Route>
                    <Route path='/xh-fanlar-kafedrasi'>
                        <XususiyHuquq />
                    </Route>
                    <Route path='/bolimlar'>
                        <Bolimlar />
                    </Route>
                    <Route path='/mi-bolimi'>
                        <Moliya />
                    </Route>
                    <Route path='/at-bolimi'>
                        <AT />
                    </Route>
                    <Route path='/ex-bolimi'>
                        <Ekspluatatsiya />
                    </Route>
                    <Route path='/buxgalteriya-bolimi'>
                        <Buxgalteriya />
                    </Route>
                    <Route path='/ka-bolimi'>
                        <KonselyariyaArxiv />
                    </Route>
                    <Route path='/kadrlar-bolimi'>
                        <Kadrlar />
                    </Route>
                    <Route path='/tarbiyaviy-ishlar-bolimi'>
                        <Tarbiyaviy />
                    </Route>
                    <Route path='/ikkinchi-bolim'>
                        <Ikkinchi />
                    </Route>
                    <Route path='/ou-bolimi'>
                        <OquvUslubiy />
                    </Route>
                    <Route path='/axborot-resurs-markazi'>
                        <Arm />
                    </Route>
                    <Route path='/dekanatlar'>
                        <Dekanatlar/>
                    </Route>
                    <Route path='/tayyorlash'>
                        <Tayyorlash />
                    </Route>
                    <Route path='/qayta-tayyorlash'>
                        <QaytaTayyorlash />
                    </Route>
                    <Route path='/bizhaqimizda'>
                        <About />
                    </Route>
                    <Route path='/qabul'>
                        <Qabul />
                    </Route>
                    <Route path='/aloqa'>
                        <Contact />
                    </Route>
                    <Route path='/dekanatlar'>
                        <Dekanatlar />
                    </Route>
                    <Route path='/direktorat'>
                        <Direktorat />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </Fragment>
    )
}

export default App
function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }