
import React from "react";
import { Table,Space} from 'antd'
import allAvailableTours from "../../Assets/constants/tours.json"
import allAvailableUsers from "../../Assets/constants/users.json"
import {EyeOutlined, CheckOutlined, DeleteOutlined,CloseOutlined, EditOutlined} from '@ant-design/icons'


const Column = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Date scheduled',
        dataIndex: 'dateScheduled',
        key: 'dateScheduled',
    },
    {
        title: 'Due date',
        dataIndex: 'dueDate',
        key: 'dueDate',
    },
    {
        title: 'Seats',
        dataIndex: 'seats',
        key: 'seats',
    },
    {
        title: 'Price ($)',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a> <EyeOutlined /> </a>
                <a> <EditOutlined /> </a>
                <a> <DeleteOutlined /> </a>
            </Space>
        ),
    }
];

const Data = [
    {
        title: 'First name',
        dataIndex: 'firstname',
        key: 'firstname',
    },
    {
        title: 'Last name',
        dataIndex: 'lastname',
        key: 'lastname',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Phone number',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a style={{ color: "green" }}> <CheckOutlined /> </a>
                <a style={{ color: "red" }}> <CloseOutlined /> </a>

            </Space>
        ),

    }

];

const Alltours = () => {
    return (
        <>

            <Table columns={Column} dataSource={allAvailableTours} />
            <Table columns={Data} dataSource={allAvailableUsers} />
        </>
    )
}

export default Alltours;