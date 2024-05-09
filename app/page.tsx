import axios from 'axios'
import client from '../db'

async function getUserDetails() {
  //const response = await axios.get('https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details')
  //const response = await axios.get('http://localhost:3000/api/user/')
  const userDetails = await client.user.findFirst({})
  return { name: userDetails?.username, email: userDetails?.username }
}

export default async function Home() {
  // fetch user details
  const userData = await getUserDetails()
  console.log(userData)
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userData?.name}</div>

          {userData?.email}
        </div>
      </div>
    </div>
  )
}
