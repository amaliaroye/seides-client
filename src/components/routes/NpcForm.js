import React from 'react'
// this is supposed to be a dumb function!

const NpcForm = ({ npc, option, handleSubmit, handleChange, handleAdd }) => (
  <form onSubmit={handleSubmit} className='form'>
    <h2>New NPC</h2>
    <div>
      <label className='form-input label'>Name</label>
      <input
        placeholder='Name'
        name='name'
        value={npc.name}
        onChange={handleChange}
        className='form-input'
        type='text'
      />
    </div>

    <div>
      <label className='form-input label'>Points</label>
      <input
        placeholder='Points'
        name='points'
        value={npc.points}
        onChange={handleChange}
        className='form-input'
        type='text'
      />

      <div>
        <label className='form-input label'>Request</label>
        <input
          placeholder='Request'
          name='request'
          value={npc.request}
          onChange={handleChange}
          className='form-input'
          type='text'
        />
      </div>

      <div>
        <label className='form-input label'>Options</label>
        <input
          placeholder='Options'
          name='option'
          value={option}
          onChange={handleChange}
          className='form-input'
          type='text'
        />
        <button onClick={handleAdd} className='form-button inline'>
        ✚</button>
      </div>

    </div>
    <button type='submit' className='form-button'>Create New NPC</button>
  </form>
)

export default NpcForm
