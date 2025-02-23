'use client'

import {  useState } from "react";
import styles from "./page.module.css";
import { handleChange } from "../utils/handleChange";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    userInput: '',
    password: ''
  })

  const [show, setShow] = useState(false)


  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    try {
      setLoading(true)
      const response = await fetch("api/login", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const result = await response.json()
      if (result.login) {
        toast.success("Loggued Succesfully")
        router.push("/dashboard")
      } else {
        toast.error("Error: Username or password is incorrect")
        console.log("Usuario o contraseña incorrecto")
      }
      setLoading(false)
    } catch (error) {
      
    }



  }



  return (
    <div className={styles.page}>
      <div className={styles.welcome}>
        <p className={styles.letter} id={styles.letter1}>W</p>
        <p className={styles.letter} id={styles.letter2}>e</p>
        <p className={styles.letter} id={styles.letter3}>l</p>
        <p className={styles.letter} id={styles.letter4}>c</p>
        <p className={styles.letter} id={styles.letter5}>o</p>
        <p className={styles.letter} id={styles.letter6}>m</p>
        <p className={styles.letter} id={styles.letter7}>e</p>
        <div className={styles.space}></div>
        <p className={styles.letter} id={styles.letter8}>A</p>
        <p className={styles.letter} id={styles.letter9}>g</p>
        <p className={styles.letter} id={styles.letter10}>a</p>
        <p className={styles.letter} id={styles.letter11}>i</p>
        <p className={styles.letter} id={styles.letter12}>n</p>
        <p className={styles.letter} id={styles.letter13}>!</p>
      </div>

      <div className={styles.loginBox}>

        <div className={styles.formDiv}>
          <div className={styles.userNameBox}>
            <label htmlFor="username">Username or Email</label>
            <input type="text" name="userInput" id="userInput" className={styles.input} onChange={(e) => handleChange(e, setFormData)} />
          </div>

          <div className={styles.passwordBox}>
            <label htmlFor="password">Password</label>
            <input type={show == true ? "text" : "password"} name="password" id="password" className={styles.input} onChange={(e) => handleChange(e, setFormData)}/>
            <Image src={show == true ? "/eye-close.svg" : "/eye-open.svg"} height={20} width={20} alt="eye-open" className={styles.eyeIcon} onClick={() => setShow(!show)}/>
          </div>

        </div>



        

        <input type="button" className={styles.submitButton} onClick={handleSubmit} disabled={loading} value={`${loading ? "Loggin in..." : "Login"}`}/>

      </div>

      <div className={styles.otherOptions}>
            <Link href={"/reset-password"}>Forgot Password?</Link>
            <Link href={"/register"}>Create an account</Link>
      </div>
    </div>
  );
}
