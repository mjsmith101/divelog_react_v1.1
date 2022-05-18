import { useState, useEffect, useContext } from 'react'
import DiveLogContext from '../context/divelog/DiveLogContext'
import SelectedDive from './SelectedDive'

function DiveTypeInfo() {
  const [diveType, setDiveType] = useState("");
  const [diveSelectedHeading, setDiveSelectedHeading] = useState("");
  const [selectedDives, setSelectedDives] = useState([]);

  const { diveData } = useContext(DiveLogContext);

  useEffect(() => {
    const getSelectedDives = async () => {
      console.log("In getSelectedDives - diveType: ", diveType)
      switch (diveType) {
        case "fresh":
          setDiveSelectedHeading("Fresh Water Dives");
          setSelectedDives( diveData.filter((dive) => {
            return dive.fresh === true;
          }) );
          break;
        case "salt":
          setDiveSelectedHeading("Salt Water Dives");
          setSelectedDives( diveData.filter((dive) => {
            return dive.salt === true;
          }) );
          break;
        case "shore":
          setDiveSelectedHeading("Shore Dives");
          setSelectedDives( diveData.filter((dive) => {
            return dive.shore === true;
          }) );
          break;
        case "boat":
          setDiveSelectedHeading("Boat Dives");
          setSelectedDives( diveData.filter((dive) => {
            return dive.boat === true;
          }) );
          break;
        case "night":
          setDiveSelectedHeading("Night Dives");
          setSelectedDives( diveData.filter((dive) => {
            return dive.night === true;
          }) );
          break;
        case "deep":
          setDiveSelectedHeading("Deep Dives");
          setSelectedDives( diveData.filter((dive) => {
            return dive.depth >= 60;
          }) );
          break;
        default:
          break;
      }
    }

    getSelectedDives()
  }, [diveType, diveData])

  const onChange = (e) => {
    setDiveType(e.target.value);
  }

  return (
    <div className=' container text-center p-3'>
      <h1>Dive Type Info</h1>

      <div className="d-sm-flex align-items-center justify-content-sm-between">
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="diveType" id="freshRadio" value="fresh" onClick={onChange} />
          <label className="form-check-label" for="freshRadio">
            Fresh
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="diveType" id="saltRadio" value="salt" onClick={onChange} />
          <label className="form-check-label" for="saltRadio">
            Salt
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="diveType" id="shoreRadio" value="shore" onClick={onChange} />
          <label className="form-check-label" for="shoreRadio">
            Shore
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="diveType" id="boatRadio" value="boat" onClick={onChange} />
          <label className="form-check-label" for="boatRadio">
            Boat
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="diveType" id="nightRadio" value="night" onClick={onChange} />
          <label className="form-check-label" for="nightRadio">
            Night
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="diveType" id="deepRadio" value="deep" onClick={onChange} />
          <label className="form-check-label" for="deepRadio">
            Deep
          </label>
        </div>
      </div>

      <h4 className="my-3">{diveSelectedHeading.length>0 ? diveSelectedHeading : ""}</h4>

      <div className="row g-2">
          {selectedDives.map((dive) => (<SelectedDive key={dive.num} dive={dive} />))}
      </div>
    </div>
  )
}

const radioStyle = {
  fontSize: '1.5rem'
}

export default DiveTypeInfo