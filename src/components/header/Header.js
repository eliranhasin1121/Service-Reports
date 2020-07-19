import React from 'react';
import {Row,Col,Input,DatePicker} from 'antd';
import {NumberContainer,ReportNumberContainer,DateContainer,HeaderContainer} from './Header.styled';
export default function Header({counter}){

  function onDateChanged(date, dateString){
console.log({date,dateString})
  }

  return(
  <HeaderContainer>
<Row style={{height:70}}>
  <Col span={10} style={{borderLeft:'2px solid'}}>LOGO</Col>
  <Col span={6} style={{borderLeft:'2px solid'}}>
    <ReportNumberContainer>
      <div style={{fontSize:18,fontWeight:'bold'}}>דו״ח שירות מספר:</div>
      <NumberContainer>{counter}</NumberContainer>
    </ReportNumberContainer>
  </Col>
<Col span={8}>
<DateContainer>
     <label htmlFor='date-field' style={{fontSize:18,fontWeight:'bold'}}>תאריך:</label>
      <DatePicker  id={'date-field'} style={{marginRight:20,width:250}} onChange={onDateChanged}/>
</DateContainer>
</Col>
</Row>
</HeaderContainer>
  )
}