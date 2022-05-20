import { Form, Space, Table } from "antd";
import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";

function ProductTable({ products, handleDelete }) {
  const columns = [
    {
      title: "ID",
      dataIndex: "ID",
      key: "ID",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Image",
      dataIndex: "productLink",
      className: "product-img",
      key: "image",
      render: (productLink) => <img src={productLink} alt="product-image" />,
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (text) => <a>${text}</a>,
      key: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      filters: [
        {
          text: " Laptop & Macbook",
          value: " Laptop & Macbook",
        },
        {
          text: "TV - TV Screen",
          value: "TV - TV Screen",
        },
        {
          text: "Phone - Smart devices",
          value: "Phone - Smart devices",
        },
        {
          text: "Accessories",
          value: "Accessories",
        },
        {
          text: "Audio equipments",
          value: "Audio equipments",
        },
        {
          text: "Household appliances",
          value: "Household appliances",
        },
        {
          text: "Hi-End Gaming",
          value: "Hi-End Gaming",
        },
        {
          text: "Office equipment",
          value: "Office equipment",
        },
      ],
      onFilter: (value, record) => record.category.indexOf(value) === 0,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <NavLink to={`/management/${record.id}`}>
            <GrView className="view-btn action-btn" />
          </NavLink>
          <NavLink to={`/edit/${record.id}`}>
            <AiFillEdit className="edit-btn action-btn" />
          </NavLink>
          <MdDelete
            className="delete-btn action-btn"
            onClick={() => handleDelete(record.id)}
          />
        </Space>
      ),
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <>
      <Table columns={columns} onChange={onChange} dataSource={products} />
    </>
  );
}

export default ProductTable;
