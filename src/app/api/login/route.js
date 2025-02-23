
import { NextResponse } from 'next/server'
import mysql from 'mysql2/promise'
import { GetDBSettings } from '@/app/utils/getDBSettings'

let connectionParams = GetDBSettings()


export async function POST(request) {
  try {
    const { userInput, password} = await request.json();
    console.log(userInput, password)


    const connection = await mysql.createConnection(connectionParams)

    let query = 'SELECT * FROM users where username = ? or email = ? and password = ?'

    const values = [userInput, userInput, password]
    const [results, fields] = await connection.execute(query, values)

    let login = false
    
    if (results.length >= 1) {
      login = true
    }

    console.log(results)

    connection.end()

    const response = NextResponse.json({ login, results })

    const userData = {
      auth: true,
      id: results[0].id,
    };

    response.cookies.set('auth', JSON.stringify(userData), { httpOnly: true, secure: false, maxAge: 60 * 60 * 24 });
    return response;

    
  } catch (err) {
    console.error(err)
    console.error('ERROR: API - ', err.message)
    const response = {
      error: err.message,
      returnedStatus: 200,
    }
    return NextResponse.json(response, { status: 200 })
  }
}