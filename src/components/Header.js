import React,{useState} from "react";
import "./Header.css"
import logo from "../Assets/logo.jpg"
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
        <Button htmlType="submit" onClick={()=>{localStorage.setItem("userLogIn",true); Navigate("/dash/createtour")}}
        
        >Log in</Button>
    </Form>
</Modal>

<div className="header-container"> 
<div className="logo-division">
    <img src= "https://i.pinimg.com/originals/bc/8e/76/bc8e764bece45d88dfb31c6fcabca83a.png"></img>
     </div>
     <div className="Navbar">
        <a href="/contact"> Sign in</a>
        <a href="#"onClick={()=> setVisible(true)}>Contack us</a>
        <a href="/Tours"> Tours </a>
         <a href="/aboutus"> About us</a>
         <a href="/home"> Home </a>
       
         
         </div>

</div>
</>
    )
}


export default Header;


