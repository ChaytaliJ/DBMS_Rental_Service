import React from 'react'
import './admin_options.css'
function admin_options() {

  const handleAddStaffs=()=>{
    window.location.replace('http://localhost:3000/staffadd')
  }

  const handleAddBranch=()=>{
    window.location.replace('http://localhost:3000/branchadd')
  }

  return (
    <div className='body'>
        <div className='block'>
            <div onClick={handleAddStaffs}>Add Staffs</div>
            <div onClick={handleAddBranch}>Add Branch</div>
        </div>
    </div>
  )
}

export default admin_options