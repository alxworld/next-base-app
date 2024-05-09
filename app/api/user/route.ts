import { NextRequest, NextResponse } from 'next/server'
import client from '../../../db'

export async function GET() {
  const users = await client.user.findMany({}).then(users => {
    console.log(users)
  })
  return Response.json({})
}

export async function POST(req: NextRequest) {
  // Extract the bdoy from the request
  console.log('POST request')

  const reqBody = await req.json()
  console.log(reqBody)

  //console.log(reqBody.username, reqBody.password)
  // headers
  console.log(req.headers.get('Authorization'))
  console.log(req.headers.get('Content-Type'))
  // query params
  console.log(req.nextUrl.searchParams.get('name'))
  // insert into db via prisma client
  try {
    const dbResponse = await client.user.create({ data: { username: reqBody.username, password: reqBody.password } })
    console.log(dbResponse)
  } catch (e) {
    console.log(e)
    return NextResponse.json({ error: 'Error while inserting into db' })
  }

  return NextResponse.json({ username: reqBody.username, password: reqBody.password })
}
