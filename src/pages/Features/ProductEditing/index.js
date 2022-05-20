import { Button, Form, Input, InputNumber, Select } from "antd";
import React, { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useParams, useHistory, NavLink } from "react-router-dom";
import openNotificationWithIcon from "../../../components/animations";

function ProductEditing() {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const [productUrl, setProductUrl] = useState("");

  const { id } = useParams();

  let history = useHistory();

  const currentProduct = products.find((item) => item.id === parseInt(id));

  const handleImageChange = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setProductUrl(reader.result);
    };
  };

  const onFinish = (values) => {
    currentProduct.name = values.name;
    currentProduct.ID = values.ID;
    currentProduct.price = values.price;
    currentProduct.category = values.category;
    currentProduct.quantity = values.quantity;

    currentProduct.productLink = productUrl
      ? productUrl
      : currentProduct.productLink;

    localStorage.setItem("products", JSON.stringify(products));
    openNotificationWithIcon("success", "Updated Product");
    history.push("/management");
  };

  console.log(products);
  return (
    <>
      <NavLink to="/management" className="back-item">
        <BsFillArrowLeftCircleFill />
      </NavLink>
      <Form
        className="edit-form"
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <h2 className="edit-title">Edit</h2>
        <Form.Item
          label="ID"
          name="ID"
          initialValue={currentProduct.ID}
          rules={[
            {
              required: true,
              message: "Please enter product ID",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          initialValue={currentProduct.name}
          rules={[
            {
              required: true,
              message: "Please enter product name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="input-edit"
          label="Image"
          name="image"
          rules={[
            {
              message: "Please add product image",
            },
          ]}
        >
          <Input
            classname="input-item input-file"
            type="file"
            value={currentProduct.productLink}
            onChange={handleImageChange}
          />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          initialValue={currentProduct.price}
          rules={[
            {
              required: true,
              message: "Please enter product price",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Category"
          name="category"
          initialValue={currentProduct.category}
          rules={[
            {
              required: true,
              message: "Please select product category",
            },
          ]}
        >
          <Select>
            <Select.Option value="Laptop & Macbook">
              Laptop & Macbook
            </Select.Option>
            <Select.Option value="TV - TV Screen">TV - TV Screen</Select.Option>
            <Select.Option value="Phone - Smart devices">
              Phone - Smart devices
            </Select.Option>
            <Select.Option value="Accessories">Accessories</Select.Option>
            <Select.Option value="Audio equipments">
              Audio equipments
            </Select.Option>
            <Select.Option value="Household appliances">
              Household appliances
            </Select.Option>
            <Select.Option value="Hi-End Gaming">Hi-End Gaming</Select.Option>
            <Select.Option value="Office equipment">
              Office equipment
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Quantity"
          name="quantity"
          initialValue={currentProduct.quantity}
          rules={[
            {
              required: true,
              message: "Please enter product price",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="button"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default ProductEditing;
