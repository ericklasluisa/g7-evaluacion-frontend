"use client";

import React from "react";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const { state, dispatch } = useAuth();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
  };

  return (
    <header className="px-8 py-5 bg-blue-600 flex justify-between text-white items-center">
      <h1 className="text-3xl font-bold">Gestión de Tareas</h1>
      {state.token && (
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <FaRegUserCircle size={30} />
            <span>{state.user?.username}</span>
          </div>
          <Link href="/" className="hover:text-gray-300" onClick={handleLogout}>
            Cerrar Sesión
          </Link>
        </div>
      )}
    </header>
  );
}
