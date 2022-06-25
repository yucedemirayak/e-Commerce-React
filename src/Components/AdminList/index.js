import React from "react";
import "antd/dist/antd.css";
import Styles from "./AdminList.module.scss";
import { List } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdmins } from "../../Services/Store/Admins/getAdmins";

const AdminList = () => {
  const dispatch = useDispatch();
  const adminList = useSelector((state) => state.admin.list);

  useEffect(() => {
    dispatch(getAdmins());
  }, [dispatch]);


  return (
    <List
      className={Styles.demo_loadmore_list}
      itemLayout="horizontal"
      dataSource={adminList}
      renderItem={(item) => (
        <List.Item
          actions={[
            <button className="btn border border-2 border-primary">Edit</button>,
            <button className="btn border border-2 border-danger">Delete</button>,
          ]}
        >
          <ul className="list-group w-100">
            <li className="list-group-item">
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Full Name : <span className="fw-normal">{item.fullName}</span>
                </div>
                <span className="fw-bold">
                  Email : <span className="fw-normal">{item.email}</span>
                </span>
                <br />
                <small className="fw-bold">Id : {item.id}</small>
              </div>
            </li>
          </ul>
        </List.Item>
      )}
    />
  );
};

export default AdminList;
