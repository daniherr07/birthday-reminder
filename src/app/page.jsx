'use client'

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { handleChange } from "./utils/handleChange";


export default function Home() {

  const [formData]



  return (
    <div className={styles.page}>
      <div className={styles.loginBox}>

        <h1 className={styles.loginTitle}>Iniciar Sesión</h1>

        <div className={styles.userNameBox}>
          <label htmlFor="username">Usuario</label>
          <input type="text" name="username" id="username" className={styles.input}/>
        </div>

        <div className={styles.passwordBox}>
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" className={styles.input} />
        </div>

      </div>

    </div>
  );
}
