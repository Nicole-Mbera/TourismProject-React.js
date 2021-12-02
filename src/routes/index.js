import React from "react"
import Home from "../views/home";
import About from "../views/aboutus";
import Garelley from "../views/garelley";
import Createtour from "../views/Dashboard/Createtour";
import {
    Routes, Route, useLocation
}
    from "react-router-dom"
import Contactus from "../views/contactus";
import SignIn from "../views/signin";
import SignUp from "../views/signup";
import Tours from "../views/tours";
import Dashlayout from "../components/dashboardlayout";
import Alltours from "../views/Dashboard/alltours";

const isUserLogedIn = localStorage.getItem("userLogIn");

const Index = () => {

    const currentUrl = useLocation().pathname;

    return (
        <>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/aboutus' element={<About />} />
                <Route path='/garelley' element={<Garelley />} />
                <Route path='/contact' element={<Contactus />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/tours' element={<Tours />} />
            </Routes>
            {isUserLogedIn && currentUrl.includes("/dash") ? (
                <Dashlayout>
                    <Routes>
                        <Route path='/dash/createtour' element={<Createtour />} />
                        <Route path='/dash/alltours' element={< Alltours />} />
                    </Routes>



                </Dashlayout>
                ) : (
                <></>
            )
            }
        </>
    )
}
export default Index;