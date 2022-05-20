import React from "react";
import useAuth from "../../hooks/useAuth";
import { FaSignOutAlt } from "react-icons/fa";

function Account() {
  const { logout } = useAuth();

  return (
    <div className="account-page">
      <div className="user-info">
        <img
          className="user-img"
          src="https://www.shareicon.net/data/512x512/2016/07/26/802031_user_512x512.png"
          alt="user-avatar"
        />
        <h4>baohoa_28</h4>
      </div>
      <button className="btn btn-log" onClick={() => logout()}>
        <FaSignOutAlt />
        <span>Logout</span>
      </button>
    </div>
  );
}

export default Account;
