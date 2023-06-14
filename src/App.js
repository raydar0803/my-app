import React from 'react'

export const App = () => {
  return (
    <div classname = 'container'>
      <form classname = 'form-group'>
        <input type="file" className='form-group' required />
        <br></br>
        <button type = 'submit' className='btn-btn-submit btn-lg'>Upload</button>
      </form>
      <br />
      <br></br>
      <h4>View PDF</h4>
      <div className="pdf-container"></div>
    </div>
  )
}
export default App
