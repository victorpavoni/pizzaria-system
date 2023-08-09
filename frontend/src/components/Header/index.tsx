/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./styles.module.scss";

import { useContext } from "react";

import { FiLogOut } from "react-icons/fi";

import { AuthContext } from "../../contexts/AuthContext";

export function Header() {
  const { signOut } = useContext(AuthContext);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard" legacyBehavior>
          <img
            src="/logo.png"
            alt="Logo Sabor Pizzaria"
            width={190}
            height={45}
          />
        </Link>

        <nav className={styles.menuNav}>
          <Link href="/category" legacyBehavior>
            <a>Categoria</a>
          </Link>

          <Link href="/product" legacyBehavior>
            <a>Cardapio</a>
          </Link>

          <button onClick={signOut}>
            <FiLogOut color="#FFF" size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
}
