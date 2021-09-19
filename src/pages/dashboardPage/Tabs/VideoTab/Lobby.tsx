import React from 'react'

interface Props {
  handleSubmit: any
}

const Lobby = ({ handleSubmit }: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      <button type='submit'>Join Call</button>
    </form>
  )
}

export default Lobby
