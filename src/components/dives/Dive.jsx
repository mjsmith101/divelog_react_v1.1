import React from 'react'

function Dive({ diveInfo }) {
  return (
    <>
      {/* Set up grid */}
      <div className="row g-2">
        {/* Columns on medium screens and up (col-md) */}
        <div className="col-md">
          <div className="card bg-light text-dark">
            <div className="card-body">
              <p id="diveNumber" className='card-text'>{`Dive Number: ${diveInfo.num}`}</p>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card bg-light text-dark">
            <div className="card-body">
              <p id="diveDate" className='card-text'>{`Date: ${diveInfo.date}`}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-2">
        <div className="col">
          <div className="card bg-light text-dark">
            <div className="card-body">
              <p id="diveLocation" className='card-text'>{`Location: ${diveInfo.location}`}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-2">
        {/* Columns on medium screens and up (col-md) */}
        <div className="col-md">
          <div className="card bg-light text-dark">
            <div className="card-body">
              <p id="psiStart" className='card-text'>{`psi Start: ${diveInfo.psiStart}`}</p>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card bg-light text-dark">
            <div className="card-body">
              <p id="psiEnd" className='card-text'>{`psi End: ${diveInfo.psiEnd}`}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-2">
        {/* Columns on medium screens and up (col-md) */}
        <div className="col-md">
          <div className="card bg-light text-dark">
            <div className="card-body">
              <p id="weight" className='card-text'>{`Weight: ${diveInfo.weight} lb`}</p>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card bg-light text-dark">
            <div className="card-body">
              <p id="airTemp" className='card-text'>{`Air Temperature: ${diveInfo.airTemp} Deg-f`}</p>
              <p id="surfaceTemp" className='card-text'>{`Surface Temperature: ${diveInfo.surfaceTemp} Deg-f`}</p>
              <p id="bottomTemp" className='card-text'>{`Bottom Temperature: ${diveInfo.bottomTemp} Deg-f`}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-2">
        {/* Columns on medium screens and up (col-md) */}
        <div className="col-md">
          <div className="card bg-light text-dark">
            <div className="card-body">
            <p id="depth" className='card-text'>{`Depth: ${diveInfo.depth} ft`}</p>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card bg-light text-dark">
            <div className="card-body">
              <p id="bottomTime" className='card-text'>{`Bottom Time: ${diveInfo.bottomTime} min`}</p>
              <p id="safetyStopTime" className='card-text'>{`Safety Stop Time: ${diveInfo.safetyStopTime} min`}</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Dive