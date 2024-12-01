import React from 'react'

let data={
  "name": "John",
  "age": 30,
  "city": "New York"
}
const App = () => {
  return (
    <div className="bg-blue-400 p-6">
      <div>
        <ul className="text-white flex gap-3 justify-center">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div>
        {
          data.map((x)=>{
            <div>{x.age}</div>
          })
        }

      </div>
    </div>
  )
}

export default App