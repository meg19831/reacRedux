import React from 'react'

const ItemList = () => {

    const users = [
        {
"id": 1,
"email": "george.bluth@reqres.in",
"first_name": "George",
"last_name": "Bluth",
"avatar": "https://reqres.in/img/faces/1-image.jpg"
},
{
"id": 2,
"email": "janet.weaver@reqres.in",
"first_name": "Janet",
"last_name": "Weaver",
"avatar": "https://reqres.in/img/faces/2-image.jpg"
},
{
"id": 3,
"email": "emma.wong@reqres.in",
"first_name": "Emma",
"last_name": "Wong",
"avatar": "https://reqres.in/img/faces/3-image.jpg"
},
{
"id": 4,
"email": "eve.holt@reqres.in",
"first_name": "Eve",
"last_name": "Holt",
"avatar": "https://reqres.in/img/faces/4-image.jpg"
},
    ]
  return (
    <div className='box' >
        {
        users.map((user, index)=>(
            <div key={index}>
                <img src ={user.avatar} alt = {user.avatar}/>
                <h2> firts name: {user.first_name} {user.last_name}</h2>


            </div>
        ))
        }
       
    </div>
  )
}

export default ItemList