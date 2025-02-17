
import { NextResponse } from 'next/server'
import mysql from 'mysql2/promise'
import { GetDBSettings } from '@/app/utils/getDBSettings'

let connectionParams = GetDBSettings()


export async function POST(request) {
  try {
    const { username, password} = await request.json();
    console.log(username, password)


    const connection = await mysql.createConnection(connectionParams)

    let query = 'SELECT * FROM prueba where nombre = ? and password = ?'

    const values = [username, password]
    const [results, fields] = await connection.execute(query, values)

    let login = false
    
    if (results.length >= 1) {
      login = true
    }

    connection.end()

    return NextResponse.json({ login, results })
  } catch (err) {
    console.error('ERROR: API - ', err.message)
    const response = {
      error: err.message,
      returnedStatus: 200,
    }
    return NextResponse.json(response, { status: 200 })
  }
}