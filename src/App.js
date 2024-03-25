import React from 'react';
import { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import {BpkButton} from '@skyscanner/backpack-web/bpk-component-button';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';
import BpkCalendarContainer from '@skyscanner/backpack-web/bpk-component-calendar';
import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';
import './App.css';
import STYLES from './App.scss';
export default function Example() {
  const [selected, setSelected] = useState(Date); 
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.  <button type="button" style={{
      color:"blue", background: "white", display: "flex", border: "2px solid blue", justifycontent:"flex-end" 
    }} onClick={() => alert('It works!')}>Continue</button> </p>; }
  return (
    <div style={{
      textAlign: "center" }}><h1><b> Flight  Schedule </b></h1>
    <DayPicker style={{
      display:"flex", fontweight:"bold", color:"#6f48eb"    }}
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer} />
    </div>
)}


