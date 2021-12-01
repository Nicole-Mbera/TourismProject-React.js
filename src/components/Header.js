import React,{useState} from "react";
import "./Header.css"
import logo from "../Assets/latest logo.jpg"
import { Modal, Form, Input,Button } from "antd";
import {useNavigate} from "react-router-dom";
const Header=()=>{

    const [Visible, setVisible]=useState(false);

    const[form]= Form.useForm();

    const onFinish=(values)=>
    console.log(values);


const Navigate= useNavigate ();

 return( 
    <> 
    <Modal 
    visible={Visible} 
    width="40%"
    onOk={()=> setVisible(false)}
    onCancel={()=>setVisible (false)}>

    <h1>Sign in form</h1>
    <Form onFinish={onFinish}>
        <Form.Item label="Email" name="email" rules={[{ required: false}]}>
            <Input type="email"/>
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: false}]}>
            <Input type="password"/>
        </Form.Item>
        <Button htmlType="submit" onclick={()=>{localStorage.setItem("userLogIn",true); Navigate("/dash/createtour")}}
        
        >Log in</Button>
    </Form>
</Modal>

<div className="header-container"> 
<div className="logo-division">
    <img src={logo} alt=""></img>
     </div>
     <div className="Navbar">
         <a href="/Createtour"> Createtour</a>
         <a href="/Tours"> Tours </a>
        <a href="#"onClick={()=> setVisible(true)}>Sign in</a>
         <a href="/contact"> Contact us</a>
         <a href="/aboutus"> About us</a>
         <a href="/home"> Home </a>
         
         </div>

</div>
</>
    )
}


export default Header;


