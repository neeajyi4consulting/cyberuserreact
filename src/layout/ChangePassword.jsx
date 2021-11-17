import React, { useState } from "react";
import AccountLoginImg from "../assets/img/Account-Login-img.jpg";
import CyberFratLogo from "../assets/img/Cyber-Frat-Logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { changePassword } from "../api";

export default function ChangePassword() {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const storedData = useSelector((state)=>state)
    const { user } = storedData;
    const currentUser = user?.currentUser;
    const handleChangePassword = async() =>{
        const data = new FormData();
        data.append("user_id", currentUser?.user_id)
        data.append("old_password", oldPassword)
        data.append("new_password", newPassword)
        data.append("confirm_password", confirmPassword)
        await changePassword(data)
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
  return (
        <div className="flex justify-center">
        <div class="w-full max-w-xs lg:h-screen ">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Old Password"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="New Password"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Confirm Password"/>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
    </div>
  </form>
</div>
        </div>
  );
}
