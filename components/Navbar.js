"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="navbar">
      <div className="container nav-content">
        <Link href="/" className="logo">INCARPALM S.A.</Link>
        <nav className="nav-links">
          <Link href="/mapa-capacidades">Mapa de capacidades</Link>
          <Link href="/capacidades">Módulos</Link>
          <Link href="/procesos">Proceso de pedidos</Link>
          <Link href="/dashboard">Dashboard</Link>
          {session ? (
            <button className="btn btn-primary" onClick={() => signOut()}>Salir</button>
          ) : (
            <button className="btn btn-primary" onClick={() => signIn("google")}>Login Google</button>
          )}
        </nav>
      </div>
    </header>
  );
}
