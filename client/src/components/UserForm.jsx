import { useState } from 'react'

function UserForm() {

  const [name, setName] = useState('')

  return (

    <div>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>User: {name}</h3>

    </div>

  )
}

export default UserForm