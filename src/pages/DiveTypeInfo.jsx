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

      <div className="d-sm-flex align-items-center justify-content-between">
        <label style={radioStyle}>
          <input 
            type="radio" 
            name="diveType"  
            value="fresh"
            onClick={onChange}
          /> 
          Fresh
        </label>
        <label style={radioStyle}>
          <input 
            type="radio" 
            name="diveType"  
            value="salt"
            onClick={onChange}
          /> 
          Salt
        </label>
        <label style={radioStyle}>
          <input 
            type="radio" 
            name="diveType"  
            value="shore"
            onClick={onChange}
          /> 
          Shore
        </label>
        <label style={radioStyle}>
          <input 
            type="radio" 
            name="diveType"  
            value="boat"
            onClick={onChange}
          /> 
          Boat
        </label>
        <label style={radioStyle}>
          <input 
            type="radio" 
            name="diveType"  
            value="night"
            onClick={onChange}
          /> 
          Night
        </label>
        <label style={radioStyle}>
          <input 
            type="radio" 
            name="diveType"  
            value="deep"
            onClick={onChange}
          /> 
          Deep
        </label>
      </div>

      <h4 className="my-3">{diveSelectedHeading.length>0 ? diveSelectedHeading : ""}</h4>

      <div className="row g-3">
          {selectedDives.map((dive) => (<SelectedDive key={dive.num} dive={dive} />))}
      </div>
    </div>
  )
}

const radioStyle = {
  fontSize: '1.5rem'
}

export default DiveTypeInfo