import React from 'react'

const AddWidget = () => {
  function handleChange(event) {}

  return (
    <>
      <form>
        <select onChange={handleChange}>
          <option value="kanye">Kanye quote</option>
          <option value="news">News</option>
          <option value="spotify">Emo song of the day</option>
        </select>
      </form>
    </>
  )
}

export default AddWidget
