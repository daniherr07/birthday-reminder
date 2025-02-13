
import { NextResponse } from 'next/server'
import mysql from 'mysql2/promise'
import { GetDBSettings } from '@/app/utils/getDBSettings'

let connectionParams = GetDBSettings()


export async function GET() {
  try {
    console.log("Hola mundo")

    const connection = await mysql.createConnection(connectionParams)

    let query = 'SELECT * FROM prueba where nombre = ? and password = ?'
    const [results, fields] = await connection.execute(query)
    console.log(results, fields)

    connection.end()

    return NextResponse.json({ fields: fields.map((f) => f.name), results })
  } catch (err) {
    console.error('ERROR: API - ', err.message)
    const response = {
      error: err.message,
      returnedStatus: 200,
    }
    return NextResponse.json(response, { status: 200 })
  }
}