import React, {useState} from 'react'
import './Bill.scss'
import dolar from '../../images/icon-dollar.svg'
import person from '../../images/icon-person.svg'

const BillComponent = () => {
  const [billInput, setBillInput] = useState(false)
  const [peopleInput, setPeopleInput] = useState(false)
  return (
    <div className="bill-container">

      <p className='b-title'>Bill</p>
      <div className={billInput ? "bill-input active" : "bill-input"} onClick={() => setBillInput(true)}>
        <img src={dolar} alt="dolar" />
        <input type="text" placeholder='0' className={billInput ? 'b-input active-i' :'b-input'}/>
      </div>

      <p className='b-title'>Select Tip %</p>
      <div className="bill-select-tip">
        <button className='bill-tip-btn'>5%</button>
        <button className='bill-tip-btn'>10%</button>
        <button className='bill-tip-btn'>15%</button>
        <button className='bill-tip-btn'>25%</button>
        <button className='bill-tip-btn'>50%</button>
        <button className='bill-tip-btn tip-custom'>Custom</button>
      </div>

      <p className='b-title'>Number of people</p>
      <div className={peopleInput ? "bill-input active" : "bill-input"} onClick={() => setPeopleInput(true)}>
        <img src={person} alt="person" />
        <input type="text" placeholder='0' className={peopleInput ? 'b-input active-i' :'b-input'}/>
      </div>

    </div>
  )
}

export default BillComponent