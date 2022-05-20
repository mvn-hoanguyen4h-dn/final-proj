import { Form, Modal, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import openNotificationWithIcon from "../../../components/animations";
import ProductForm from "../../../components/modules/ProductForm";
import ProductTable from "../../../components/modules/ProductTable";

function Management() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [productLink, setProductLink] = useState("");
  const [productList, setProductList] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );
  const [editingProduct, setEditingProduct] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [search, setSearch] = useState("");
  const [filterName, setFilterName] = useState(
    JSON.parse(localStorage.getItem("products"))
  );

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(productList));
  }, [productList]);

  useEffect(() => {
    const result = productList.filter((item) => {
      return item.name.toLowerCase().match(search.toLowerCase());
    });
    setFilterName(result);
  }, [search]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleFileChange = (e) => {
    var file = e.target.files[0];
    var fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function () {
      setProductLink(fileReader.result);
    };
  };

  const onFinish = (values) => {
    const index = Math.floor(Math.random() * 10000000);
    const newProduct = { ...values, productLink, id: index, key: index };
    const newProductList = [newProduct, ...productList];

    openNotificationWithIcon("success", "Added Product");
    setProductList(newProductList);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleDelete = (id) => {
    Modal.confirm({
      title: "Are you sure to delete this product ?",
      okText: "yes",
      okType: "danger",
      onOk: () => {
        setProductList((products) => {
          openNotificationWithIcon("success", "Deleted Product");
          return products.filter((product) => product.id !== id);
        });
      },
    });
  };

  const handleEdit = (item) => {
    setIsEditing(true);
    console.log(item);
  };

  return (
    <>
      {/* <Input onChange={(e) => setSearch(e.target.value)} /> */}
      <button onClick={showModal} className="btn-add">
        Add Product
      </button>
      <Modal
        className="manage-modal"
        title="Add Product"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <ProductForm
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          handleFileChange={handleFileChange}
        />
      </Modal>
      <ProductTable
        products={productList}
        setProductList={setProductList}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        productLink={productLink}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        editingProduct={editingProduct}
        setEditingProduct={setEditingProduct}
        filterName={filterName}
      />
    </>
  );
}

export default Management;
