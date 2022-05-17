import React from 'react'

function SelectedDive({ dive }) {
  return (
    <>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column">
              <span className="card-text">{`Dive Number: ${dive.num}`}</span>
              <span className="card-text">{`Date: ${dive.date}`}</span>
              <span className="card-text">{`Location: ${dive.location}`}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SelectedDive