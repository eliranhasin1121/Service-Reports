import React from 'react';
import {Row,Col,Input,DatePicker} from 'antd';
import {NumberContainer,ReportNumberContainer} from './Header.styled';
export default function Header({counter}){

  function onDateChanged(date, dateString){
console.log({date,dateString})
  }

  return(
<Row style={{height:70}}>
  <Col span={10} style={{borderLeft:'2px solid'}}>LOGO</Col>
  <Col span={6} style={{borderLeft:'2px solid'}}>
    <ReportNumberContainer>
      <div style={{fontSize:18,fontWeight:'bold'}}>דו״ח שירות מספר:</div>
      <NumberContainer>{counter}</NumberContainer>
    </ReportNumberContainer>
  </Col>
<Col span={8}>
     <label htmlFor='date-field'>תאריך:</label>
      <DatePicker id={'date-field'} style={{marginRight:20}} onChange={onDateChanged}/>
</Col>
</Row>
  )
}