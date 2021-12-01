import React from "react";
import Dashlayout from "../../components/dashboardlayout";
import {Form,Input,DatePicker,Space, Button} from "antd";
const Createtour=()=>{

   const onFinish =(values)=>{
       console.log(values);

    }
    return( 
        

            <Form onFinish={onFinish}>
        <Form.Item name="title" label="Title" rules={[{required:true}]}>

            <Input/>

        </Form.Item>

        <Form.Item name="description" label="Description" rules={[{required:true}]}>

            <Input.TextArea/>
            
            </Form.Item>
<Space>

<Form.Item name="datescheduled" label="Date scheduled" rules={[{required:true}]}>
<DatePicker/>
</Form.Item>

<Form.Item name="duedate" label="Due date " rules={[{required:true}]}>
<DatePicker/>
</Form.Item>
</Space>

<br/>
<Space>

<Form.Item name= "seats" label="seats" rules={[{required:true}]}>
<Input/>
</Form.Item>

<Form.Item name="price" label="price($)" rules={[{required:true}]}>
<Input/>
</Form.Item>
</Space>
<Form.Item name="price" label="About tour" rules={[{required:true}]}>
<Input.TextArea/>
</Form.Item>
<Button htmlType="submit" type="primary">Register tour</Button>
</Form>
        
    )
}

export default Createtour;