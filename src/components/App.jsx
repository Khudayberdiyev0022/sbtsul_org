import React, { Fragment , useEffect} from 'react'
import { BrowserRouter as Router, Switch , Route,useLocation } from 'react-router-dom'
import {connect} from 'react-redux'

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
import Direktorat from './Tuzilma/Direktorat/Direktorat'
import OquvUslubiy from './Tuzilma/Bolimlar/OquvUslubiy/OquvUslubiy'
import Pictures from './Pictures/Pictures'
import Tarbiyaviy from './Tuzilma/Bolimlar/Tarbiyaviy/Tarbiyaviy'
import NewsCard from './Informations/Information'

import GrantAdd from './admin-dashboard/admin-add/GrantAdd'
import GrantDelete from './admin-dashboard/admin-add/GrantDelete'
import GrantEdit from './admin-dashboard/admin-add/GrantEdit'
import MessageAdd from './admin-dashboard/admin-add/MessageAdd'
import MessageDelete from './admin-dashboard/admin-add/MessageDelete'
import MessageEdit from './admin-dashboard/admin-add/MessageEdit'
import StudentAdd from './admin-dashboard/admin-add/StudentAdd'
import StudentDelete from './admin-dashboard/admin-add/StudentDelete'
import StudentEdit from './admin-dashboard/admin-add/StudentEdit'
import NewsAdd from './admin-dashboard/admin-add/NewsAdd'
import NewsDelete from './admin-dashboard/admin-add/NewsDelete'
import NewsEdit from './admin-dashboard/admin-add/NewsEdit'
import MainAdmin from './admin-dashboard/MainAdmin'

import NewsCardEng from '../componenttsENG/Informations/Information'
import NavbarEng from '../componenttsENG/Navbar/Navbar'
import NavbarMobileEng from '../componenttsENG/Navbar/NavbarMobile'
import HomeEng from '../componenttsENG/Home/Home'
import AboutEng from '../componenttsENG/About/About'
import ContactEng from '../componenttsENG/Contact/Contact'
import IlmiyKengashEng from '../componenttsENG/Faoliyat/IlmiyKengash/IlmiyKengash'
import FilialEng from '../componenttsENG/Filial/Filial'
import FooterEng from '../componenttsENG/Footer/Footer'
import QabulEng from '../componenttsENG/Qabul/Qabul'
import ArmEng from '../componenttsENG/Tuzilma/ARM/Arm'
import ATEng from '../componenttsENG/Tuzilma/Bolimlar/AT/AT'
import BuxgalteriyaEng from '../componenttsENG/Tuzilma/Bolimlar/Buxgalteriya/Buxgalteriya'
import DirektoratEng from '../componenttsENG/Tuzilma/Bolimlar/Direktorat/Direktorat'
import EkspluatatsiyaEng from '../componenttsENG/Tuzilma/Bolimlar/Ekspluatatsiya/Ekspluatatsiya'
import IkkinchiEng from '../componenttsENG/Tuzilma/Bolimlar/Ikkinchi/Ikkinchi'
import KadrlarEng from '../componenttsENG/Tuzilma/Bolimlar/Kadrlar/Kadrlar'
import KonselyariyaArxivEng from '../componenttsENG/Tuzilma/Bolimlar/KonselyariyaArxiv/KonselyariyaArxiv'
import MoliyaEng from '../componenttsENG/Tuzilma/Bolimlar/Moliya/Moliya'
import OquvUslubiyEng from '../componenttsENG/Tuzilma/Bolimlar/OquvUslubiy/OquvUslubiy'
import BolimlarEng from '../componenttsENG/Tuzilma/Bolimlar/Bolimlar'
import TarbiyaviyEng from '../componenttsENG/Tuzilma/Bolimlar/Tarbiyaviy/Tarbiyaviy'
import DekanatlarEng from '../componenttsENG/Tuzilma/Dekanatlar/Dekanatlar'
import TayyorlashEng from '../componenttsENG/Tuzilma/Dekanatlar/Tayyorlash'
import QaytaTayyorlashEng from '../componenttsENG/Tuzilma/Dekanatlar/QaytaTayyorlash'
import KafedraEng from '../componenttsENG/Tuzilma/Kafedralar/Kafedra'
import XususiyHuquqiyEng from '../componenttsENG/Tuzilma/Kafedralar/XususiyHuquq/XususiyHuquqiy'
import UmumtalimEng from '../componenttsENG/Tuzilma/Kafedralar/Umumtalim/Umumtalim'
import JinoyatHuquqEng from '../componenttsENG/Tuzilma/Kafedralar/JinoyatHuquq/JinoyatHuquq'
import JangovorEng from '../componenttsENG/Tuzilma/Kafedralar/Jangovor/Jangovor'
import DavlatHuquqiyEng from '../componenttsENG/Tuzilma/Kafedralar/DavlatHuquqiy/DavlatHuquqiy'
import RahbariyatEng from '../componenttsENG/Tuzilma/Rahbariyat/Rahbariyat'
import Home7Eng from '../componenttsENG/Home/HomeParts/Home7'
import KengashEng from '../componenttsENG/Tuzilma/Kengash/Kengash'


import NewsCardRus from '../componentsRUS/Informations/Information'
import NavbarRus from '../componentsRUS/Navbar/Navbar'
import NavbarMobileRus from '../componentsRUS/Navbar/NavbarMobile'
import HomeRus from '../componentsRUS/Home/Home'
import Home7Rus from '../componentsRUS/Home/HomeParts/Home7'
import AboutRus from '../componentsRUS/About/About'
import ContactRus from '../componentsRUS/Contact/Contact'
import IlmiyKengashRus from '../componentsRUS/Faoliyat/IlmiyKengash/IlmiyKengash'
import FilialRus from '../componentsRUS/Filial/Filial'
import FooterRus from '../componentsRUS/Footer/Footer'
import QabulRus from '../componentsRUS/Qabul/Qabul'
import ArmRus from '../componentsRUS/Tuzilma/ARM/Arm'
import ATRus from '../componentsRUS/Tuzilma/Bolimlar/AT/AT'
import BuxgalteriyaRus from '../componentsRUS/Tuzilma/Bolimlar/Buxgalteriya/Buxgalteriya'
import DirektoratRus from '../componentsRUS/Tuzilma/Bolimlar/Direktorat/Direktorat'
import EkspluatatsiyaRus from '../componentsRUS/Tuzilma/Bolimlar/Ekspluatatsiya/Ekspluatatsiya'
import IkkinchiRus from '../componentsRUS/Tuzilma/Bolimlar/Ikkinchi/Ikkinchi'
import KadrlarRus from '../componentsRUS/Tuzilma/Bolimlar/Kadrlar/Kadrlar'
import KonselyariyaArxivRus from '../componentsRUS/Tuzilma/Bolimlar/KonselyariyaArxiv/KonselyariyaArxiv'
import MoliyaRus from '../componentsRUS/Tuzilma/Bolimlar/Moliya/Moliya'
import OquvUslubiyRus from '../componentsRUS/Tuzilma/Bolimlar/OquvUslubiy/OquvUslubiy'
import TarbiyaviyRus from '../componentsRUS/Tuzilma/Bolimlar/Tarbiyaviy/Tarbiyaviy'
import BolimlarRus from '../componentsRUS/Tuzilma/Bolimlar/Bolimlar'
import DekanatlarRus from '../componentsRUS/Tuzilma/Dekanatlar/Dekanatlar'
import TayyorlashRus from '../componentsRUS/Tuzilma/Dekanatlar/Tayyorlash'
import QaytaTayyorlashRus from '../componentsRUS/Tuzilma/Dekanatlar/QaytaTayyorlash'
import DavlatHuquqiyRus from '../componentsRUS/Tuzilma/Kafedralar/DavlatHuquqiy/DavlatHuquqiy'
import JangovorRus from '../componentsRUS/Tuzilma/Kafedralar/Jangovor/Jangovor'
import JinoyatHuquqRus from '../componentsRUS/Tuzilma/Kafedralar/JinoyatHuquq/JinoyatHuquq'
import UmumtalimRus from '../componentsRUS/Tuzilma/Kafedralar/Umumtalim/Umumtalim'
import XususiyHuquqiyRus from '../componentsRUS/Tuzilma/Kafedralar/XususiyHuquq/XususiyHuquqiy'
import KafedraRus from '../componentsRUS/Tuzilma/Kafedralar/Kafedra'
import KengashRus from '../componentsRUS/Tuzilma/Kengash/Kengash'
import RahbariyatRus from '../componentsRUS/Tuzilma/Rahbariyat/Rahbariyat'
import Home1 from '../componentsRUS/Home/HomeParts/Home1'






function App(props) {
    console.log(props);
    const UzbRender = () => {
        return (
            <Fragment>
                <Router>
                    <ScrollToTop />
                    <Navbar />
                    <NavbarMobile />
                    <Home1 />
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
    
                        <Route path='/fotolavhalar'>
                            <Pictures />
                        </Route>
                        <Route path='/each/news/:id'>
                            <NewsCard />
                        </Route>
                        <Route path='/tarbiyaviy-ishlar-bolimi'>
                            <Tarbiyaviy />
                        </Route>
    
    
    
                    
    
    
                        <Route exact path='/admin'>
                            <MainAdmin />
                        </Route>
                        {/* quotas */}
                        <Route exact path='/admin/add/quotas'>
                            <GrantAdd />
                        </Route>
                        <Route exact path='/admin/edit/quotas'>
                            <GrantEdit />
                        </Route>
                        <Route exact path='/admin/delete/quotas'>
                            <GrantDelete />
                        </Route>
                        {/* messages */}
                        <Route exact path='/admin/add/messages'>
                            <MessageAdd />
                        </Route>
                        <Route exact path='/admin/edit/messages'>
                            <MessageEdit />
                        </Route>
                        <Route exact path='/admin/delete/messages'>
                            <MessageDelete />
                        </Route>
                        {/* students */}
                        <Route exact path='/admin/add/students'>
                            <StudentAdd />
                        </Route>
                        <Route exact path='/admin/edit/students'>
                            <StudentEdit />
                        </Route>
                        <Route exact path='/admin/delete/students'>
                            <StudentDelete />
                        </Route>
                        {/* news */}
                        <Route exact path='/admin/add/news'>
                            <NewsAdd />
                        </Route>
                        <Route exact path='/admin/edit/news'>
                            <NewsEdit />
                        </Route>
                        <Route exact path='/admin/delete/news'>
                            <NewsDelete />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </Fragment>
        )
    }
    const EngRender = () => {
        return (
            <Fragment>
                <Router>
                    <ScrollToTop />
                    <NavbarEng />
                    <NavbarMobileEng />
                    <Home1 />
                    <Switch>
                        <Route exact path='/eng'>
                            <HomeEng />
                        </Route>
                        <Route path='/eng/filial'>
                            <FilialEng />
                        </Route>
                        <Route path='/eng/tuzilma'>
                            <Home7Eng />
                        </Route>
                        <Route path='/eng/kengash'>
                            <KengashEng />
                        </Route>
                        <Route path='/eng/ilmiy-kengash'>
                            <IlmiyKengashEng />
                        </Route>
                        <Route path='/eng/kafedralar'>
                            <KafedraEng />
                        </Route>
                        <Route path='/eng/rahbariyat'>
                            <RahbariyatEng />
                        </Route>
                        <Route path='/eng/dx-fanlar-kafedrasi'>
                            <DavlatHuquqiyEng />
                        </Route>
                        <Route path='/eng/jh-fanlar-kafedrasi'>
                            <JinoyatHuquqEng />
                        </Route>
                        <Route path='/eng/u-fanlar-kafedrasi'>
                            <UmumtalimEng />
                        </Route>
                        <Route path='/eng/kjt-fanlar-kafedrasi'>
                            <JangovorEng />
                        </Route>
                        <Route path='/eng/xh-fanlar-kafedrasi'>
                            <XususiyHuquqiyEng />
                        </Route>
                        <Route path='/eng/bolimlar'>
                            <BolimlarEng />
                        </Route>
                        <Route path='/eng/mi-bolimi'>
                            <MoliyaEng />
                        </Route>
                        <Route path='/eng/at-bolimi'>
                            <ATEng />
                        </Route>
                        <Route path='/eng/ex-bolimi'>
                            <EkspluatatsiyaEng />
                        </Route>
                        <Route path='/eng/buxgalteriya-bolimi'>
                            <BuxgalteriyaEng />
                        </Route>
                        <Route path='/eng/ka-bolimi'>
                            <KonselyariyaArxivEng />
                        </Route>
                        <Route path='/eng/kadrlar-bolimi'>
                            <KadrlarEng />
                        </Route>
                        <Route path='/eng/ikkinchi-bolim'>
                            <IkkinchiEng />
                        </Route>
                        <Route path='/eng/ou-bolimi'>
                            <OquvUslubiyEng />
                        </Route>
                        <Route path='/eng/axborot-resurs-markazi'>
                            <ArmEng />
                        </Route>
                        <Route path='/eng/dekanatlar'>
                            <DekanatlarEng />
                        </Route>
                        <Route path='/eng/tayyorlash'>
                            <TayyorlashEng />
                        </Route>
                        <Route path='/eng/qayta-tayyorlash'>
                            <QaytaTayyorlashEng />
                        </Route>
                        <Route path='/eng/bizhaqimizda'>
                            <AboutEng />
                        </Route>
                        <Route path='/eng/qabul'>
                            <QabulEng />
                        </Route>
                        <Route path='/eng/aloqa'>
                            <ContactEng />
                        </Route>
                        <Route path='/eng/dekanatlar'>
                            <DekanatlarEng />
                        </Route>
                        <Route path='/eng/direktorat'>
                            <DirektoratEng />
                        </Route>
    
                        <Route path='/eng/fotolavhalar'>
                            <Pictures />
                        </Route>
                        <Route path='/eng/each/news/:id'>
                        <NewsCardEng />
                        </Route>
                        <Route path='/eng/tarbiyaviy-ishlar-bolimi'>
                            <TarbiyaviyEng />
                        </Route>
    
    
    
                    
    
    
                        <Route exact path='/admin'>
                            <MainAdmin />
                        </Route>
                        {/* quotas */}
                        <Route exact path='/admin/add/quotas'>
                            <GrantAdd />
                        </Route>
                        <Route exact path='/admin/edit/quotas'>
                            <GrantEdit />
                        </Route>
                        <Route exact path='/admin/delete/quotas'>
                            <GrantDelete />
                        </Route>
                        {/* messages */}
                        <Route exact path='/admin/add/messages'>
                            <MessageAdd />
                        </Route>
                        <Route exact path='/admin/edit/messages'>
                            <MessageEdit />
                        </Route>
                        <Route exact path='/admin/delete/messages'>
                            <MessageDelete />
                        </Route>
                        {/* students */}
                        <Route exact path='/admin/add/students'>
                            <StudentAdd />
                        </Route>
                        <Route exact path='/admin/edit/students'>
                            <StudentEdit />
                        </Route>
                        <Route exact path='/admin/delete/students'>
                            <StudentDelete />
                        </Route>
                        {/* news */}
                        <Route exact path='/admin/add/news'>
                            <NewsAdd />
                        </Route>
                        <Route exact path='/admin/edit/news'>
                            <NewsEdit />
                        </Route>
                        <Route exact path='/admin/delete/news'>
                            <NewsDelete />
                        </Route>
                    </Switch>
                    <FooterEng />
                </Router>
            </Fragment>
        )
    }
    const RusRender = () => {
        return (
            <Fragment>
                <Router>
                    <ScrollToTop />
                    <NavbarRus />
                    <NavbarMobileRus />
                    <Home1/>
                    <Switch>
                        <Route exact path='/rus'>
                            <HomeRus />
                        </Route>
                        <Route path='/rus/filial'>
                            <FilialRus />
                        </Route>
                        <Route path='/rus/tuzilma'>
                            <Home7Rus />
                        </Route>
                        <Route path='/rus/kengash'>
                            <KengashRus />
                        </Route>
                        <Route path='/rus/ilmiy-kengash'>
                            <IlmiyKengashRus />
                        </Route>
                        <Route path='/rus/kafedralar'>
                            <KafedraRus />
                        </Route>
                        <Route path='/rus/rahbariyat'>
                            <RahbariyatRus />
                        </Route>
                        <Route path='/rus/dx-fanlar-kafedrasi'>
                            <DavlatHuquqiyRus />
                        </Route>
                        <Route path='/rus/jh-fanlar-kafedrasi'>
                            <JinoyatHuquqRus />
                        </Route>
                        <Route path='/rus/u-fanlar-kafedrasi'>
                            <UmumtalimRus />
                        </Route>
                        <Route path='/rus/kjt-fanlar-kafedrasi'>
                            <JangovorRus />
                        </Route>
                        <Route path='/rus/xh-fanlar-kafedrasi'>
                            <XususiyHuquqiyRus />
                        </Route>
                        <Route path='/rus/bolimlar'>
                            <BolimlarRus />
                        </Route>
                        <Route path='/rus/mi-bolimi'>
                            <MoliyaRus />
                        </Route>
                        <Route path='/rus/at-bolimi'>
                            <ATRus />
                        </Route>
                        <Route path='/rus/ex-bolimi'>
                            <EkspluatatsiyaRus />
                        </Route>
                        <Route path='/rus/buxgalteriya-bolimi'>
                            <BuxgalteriyaRus />
                        </Route>
                        <Route path='/rus/ka-bolimi'>
                            <KonselyariyaArxivRus />
                        </Route>
                        <Route path='/rus/kadrlar-bolimi'>
                            <KadrlarRus />
                        </Route>
                        <Route path='/rus/ikkinchi-bolim'>
                            <IkkinchiRus />
                        </Route>
                        <Route path='/rus/ou-bolimi'>
                            <OquvUslubiyRus />
                        </Route>
                        <Route path='/rus/axborot-resurs-markazi'>
                            <ArmRus />
                        </Route>
                        <Route path='/rus/dekanatlar'>
                            <DekanatlarRus />
                        </Route>
                        <Route path='/rus/tayyorlash'>
                            <TayyorlashRus />
                        </Route>
                        <Route path='/rus/qayta-tayyorlash'>
                            <QaytaTayyorlashRus />
                        </Route>
                        <Route path='/rus/bizhaqimizda'>
                            <AboutRus />
                        </Route>
                        <Route path='/rus/qabul'>
                            <QabulRus />
                        </Route>
                        <Route path='/rus/aloqa'>
                            <ContactRus />
                        </Route>
                      
                        <Route path='/rus/direktorat'>
                            <DirektoratRus />
                        </Route>
    
                        <Route path='/rus/fotolavhalar'>
                            <Pictures />
                        </Route>
                        <Route path='/rus/each/news/:id'>
                        <NewsCardRus />
                        </Route>
                        <Route path='/rus/tarbiyaviy-ishlar-bolimi'>
                            <TarbiyaviyRus />
                        </Route>
    
    
    
                    
    
    
                        <Route exact path='/admin'>
                            <MainAdmin />
                        </Route>
                        {/* quotas */}
                        <Route exact path='/admin/add/quotas'>
                            <GrantAdd />
                        </Route>
                        <Route exact path='/admin/edit/quotas'>
                            <GrantEdit />
                        </Route>
                        <Route exact path='/admin/delete/quotas'>
                            <GrantDelete />
                        </Route>
                        {/* messages */}
                        <Route exact path='/admin/add/messages'>
                            <MessageAdd />
                        </Route>
                        <Route exact path='/admin/edit/messages'>
                            <MessageEdit />
                        </Route>
                        <Route exact path='/admin/delete/messages'>
                            <MessageDelete />
                        </Route>
                        {/* students */}
                        <Route exact path='/admin/add/students'>
                            <StudentAdd />
                        </Route>
                        <Route exact path='/admin/edit/students'>
                            <StudentEdit />
                        </Route>
                        <Route exact path='/admin/delete/students'>
                            <StudentDelete />
                        </Route>
                        {/* news */}
                        <Route exact path='/admin/add/news'>
                            <NewsAdd />
                        </Route>
                        <Route exact path='/admin/edit/news'>
                            <NewsEdit />
                        </Route>
                        <Route exact path='/admin/delete/news'>
                            <NewsDelete />
                        </Route>
                    </Switch>
                    <FooterRus />
                </Router>
            </Fragment>
        )
    }
    return(
        <Fragment>
            {
                props.language === 'UZB' && <UzbRender />
            }
            {
                props.language === 'ENG' && <EngRender />
            }
            {
                props.language === 'RUS' && <RusRender />
            }
        </Fragment>
    )


    
}

const mapStateToProps = state => {
    return{
        language: state.language
    }
}

export default connect(mapStateToProps, null)(App)
function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }