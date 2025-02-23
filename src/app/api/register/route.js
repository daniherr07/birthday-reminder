
import { NextResponse } from 'next/server'
import mysql from 'mysql2/promise'
import { GetDBSettings } from '@/app/utils/getDBSettings'

let connectionParams = GetDBSettings()


export async function POST(request) {
  try {
    const { username, email, bday, password, password2} = await request.json();
    

    if (password == password2) {
      const connection = await mysql.createConnection(connectionParams)

      let query = 'Insert into users (username, password, birthday, email) values (?,?,?,?)'
  
      const values = [username, password, bday, email]
      const [results, fields] = await connection.execute(query, values)
  
      connection.end()
  
      return NextResponse.json({ registered: true, results })
    } else {
      return NextResponse.json({ error: true, msj:"Error: Passwords do not match" })
    }



  } catch (err) {
    console.error(err)
    console.error('ERROR: API - ', err.message)
    const response = {
      error: err.message,
      returnedStatus: 200,
    }
    return NextResponse.json(response, { status: 200, error: true, msj:"There was an error, try again later" })
  }
}