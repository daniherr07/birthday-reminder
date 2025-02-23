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
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    bday: '',
    password: '',
    password2: '',
  })
  const [show, setShow] = useState({
    password1: false,
    password2: false,
  })

  const handleShow = (isFirst) => {

    if (isFirst) {
      setShow(prev => ({
        ...prev,
        password1: !show.password1
      }))
    } else{
      setShow(prev => ({
        ...prev,
        password2: !show.password2
      }))
    }

  }


  

  const handleSubmit = async () => {
    try {
      setLoading(true)
      const response = await fetch("api/register", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const result = await response.json()
      if (result.registered) {
        toast.success("Registered Succesfuly")
        router.push("/")
      } else if (result.error) {
        toast.error(result.msj)
      }
      setLoading(false)
    } catch (error) {
      
    }



  }

  console.log(formData)


  return (
    <div className={styles.page}>
      <div className={styles.welcome}>
        <p className={styles.letter} id={styles.letter1}>R</p>
        <p className={styles.letter} id={styles.letter2}>e</p>
        <p className={styles.letter} id={styles.letter3}>g</p>
        <p className={styles.letter} id={styles.letter4}>i</p>
        <p className={styles.letter} id={styles.letter5}>s</p>
        <p className={styles.letter} id={styles.letter6}>t</p>
        <p className={styles.letter} id={styles.letter7}>e</p>
        <p className={styles.letter} id={styles.letter8}>r</p>
      </div>

      <div className={styles.loginBox}>

        <div className={styles.formDiv}>
          <div className={styles.inputDiv}>
            <label htmlFor="username">Username </label>
            <input type="text" name="username" id="username" className={styles.input} onChange={(e) => handleChange(e, setFormData)} />
          </div>

          <div className={styles.inputDiv}>
            <label htmlFor="username">Email</label>
            <input type="email" name="email" id="email" className={styles.input} onChange={(e) => handleChange(e, setFormData)} />
          </div>

          <div className={styles.inputDiv}>
            <label htmlFor="username">Birthday</label>
            <input type="date" name="bday" id="bday" className={styles.input} onChange={(e) => handleChange(e, setFormData)} />
          </div>

          <div className={styles.inputDiv}>
            <label htmlFor="password">Password</label>
            <input type={show.password1 == true ? "text" : "password"} name="password" id="password" className={styles.input} onChange={(e) => handleChange(e, setFormData)}/>
            <Image src={show.password1 == true ? "/eye-close.svg" : "/eye-open.svg"} height={20} width={20} alt="eye-open" className={styles.eyeIcon} onClick={() => handleShow(true)}/>
          </div>

          <div className={styles.inputDiv}>
            <label htmlFor="password">Confirm Password</label>
            <input type={show.password2 == true ? "text" : "password"} name="password2" id="password2" className={styles.input} onChange={(e) => handleChange(e, setFormData)}/>
            <Image src={show.password2 == true ? "/eye-close.svg" : "/eye-open.svg"} height={20} width={20} alt="eye-open" className={styles.eyeIcon} onClick={() => handleShow(false)}/>
          </div>

          

        </div>  

        <input type="button" className={styles.submitButton} onClick={handleSubmit} disabled={loading} value={`${loading ? "Please Wait..." : "Start Now!"}`}/>

      </div>

      <div className={styles.otherOptions}>
            <Link href={"/login"}>Already have an account?</Link>
      </div>
    </div>
  );
}
