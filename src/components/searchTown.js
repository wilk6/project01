import React, { useState } from "react"

export const SearchTown = ({ setTown }) => {
  const [town1, setTown1] = useState()
  return (
    <div className='Search'>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <label>
          <input
            type='text'
            placeholder='Miasto'
            onChange={(e) => {
              setTown1(e.target.value)
            }}
          />
        </label>
        <button
          type='submit'
          onClick={() => {
            setTown(town1)
          }}
        >
          Search
        </button>
      </form>
    </div>
  )
}
