import { useState } from 'react';

const Alarm = () => {

  const d = new Date();
  let hourMin = d.getHours() +":";
  hourMin += ((d.getMinutes())<10?'0':'') + (d.getMinutes());

  const [hours, setHours] = useState('7');
  const [minutes, setMinutes] = useState('00');

  let currentMil = ((parseInt(hours)*60 + parseInt(minutes))*60000 - (d.getHours()*60 + d.getMinutes())*60000);
  console.log(currentMil);

  if(currentMil>0){
    setTimeout(myAlarm, currentMil);
    function myAlarm() {
      alert('ALARM GOING OFF!');
    }
  }

  return (
    <div>
      <p className='alarmText'>Set Alarm Below</p>
      <select 
        className="dropdown" 
        value={hours} 
        onChange={(e) => setHours(e.target.value)}
      >
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <select 
        className='dropdown' 
        value={minutes} 
        onChange={(e) => setMinutes(e.target.value)}
      >
        <option value="00">00</option>
        <option value="15">15</option>
        <option value="30">30</option>
        <option value="45">45</option>
      </select>
    </div>
  )
}

export default Alarm