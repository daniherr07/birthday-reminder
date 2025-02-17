'use client'

import {  useState } from "react";
import styles from "./page.module.css";
import { handleChange } from "./utils/handleChange";


export default function Home() {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {

    setLoading(true)
    const response = await fetch("api/login", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    const result = await response.json()
    

    if (result.login) {
      console.log("Logueado exitosamente")
    } else {
      console.log("Usuario o contraseña incorrecto")
    }

    setLoading(false)


  }



  return (
    <div className={styles.page}>
      <div className={styles.loginBox}>

        <h1 className={styles.loginTitle}>Iniciar Sesión</h1>

        <div className={styles.userNameBox}>
          <label htmlFor="username">Usuario</label>
          <input type="text" name="username" id="username" className={styles.input} onChange={(e) => handleChange(e, setFormData)} />
        </div>

        <div className={styles.passwordBox}>
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" className={styles.input} onChange={(e) => handleChange(e, setFormData)}/>
        </div>

        <input type="button" className={styles.submitButton} onClick={handleSubmit} disabled={loading} value={`${loading ? "Accediendo..." : "Acceder"}`}/>

      </div>

    </div>
  );
}
