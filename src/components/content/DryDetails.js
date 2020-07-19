import React from 'react';
import {Row,Col,Input,Checkbox} from 'antd';
import {DryDetailsContainer,InputContainer} from './Content.styled';

export default function DryDetails(){
  return(
    <DryDetailsContainer>
      <Row>
        <Col span={6}>
      <InputContainer>
      <label style={{fontSize:18}} for={'customer'}>לקוח:</label>
      <Input style={{height:50,fontSize:18}} id={'customer'}/>
      </InputContainer>
      </Col>
          <Col span={6}>
      <InputContainer>
      <label style={{fontSize:18}} for={'department'}>מחלקה:</label>
      <Input style={{height:50,fontSize:18}} id={'department'}/>
      </InputContainer>
      </Col>
          <Col span={6}>
      <InputContainer>
      <label style={{fontSize:18}} for={'mosad'}>מוסד:</label>
      <Input style={{height:50,fontSize:18}} id={'mosad'}/>
      </InputContainer>
      </Col>
          <Col span={6}>
      <InputContainer>
      <label style={{fontSize:18}} for={'city'}>עיר:</label>
      <Input style={{height:50,fontSize:18}} id={'city'}/>
      </InputContainer>
      </Col>
      </Row>
      <Row>
        <Col span={6}>
      <InputContainer>
      <label style={{fontSize:18}} for={'model'}>מודל:</label>
      <Input style={{height:50,fontSize:18}} id={'model'}/>
      </InputContainer>
      </Col>
          <Col span={6}>
      <InputContainer>
      <label style={{fontSize:18}} for={'yazran'}>יצרן:</label>
      <Input style={{height:50,fontSize:18}} id={'yazran'}/>
      </InputContainer>
      </Col>
          <Col span={6}>
      <InputContainer>
      <label style={{fontSize:18}} for={'counter'}>מס׳ סידורי:</label>
      <Input style={{height:50,fontSize:18}} id={'counter'}/>
      </InputContainer>
      </Col>
          <Col span={6}>
      <InputContainer>
      <label style={{fontSize:18}} for={'order'}>מס' שירות:</label>
      <Input style={{height:50,fontSize:18}} id={'order'}/>
      </InputContainer>
      </Col>
      </Row>
       <Row>
        <Col span={12}>
      <InputContainer style={{display:'flex',justifyContent:'space-between',height:'100%'}} >
      <div>
        <Checkbox style={{paddingTop:20,paddingRight:20 ,fontSize:18}}>כיול - תעודה מס׳</Checkbox>
      </div>
      <div style={{display:'flex'}}>
        <Input maxLength={4} style={{direction:'ltr',fontSize:20,fontWeight:'bold'}}/>
        <label style={{width:140,fontSize:20,fontWeight:'bold',paddingTop:24}}>CER-18</label>
      </div>

      </InputContainer>
      </Col>
          <Col span={6}>
      <InputContainer>
      <label style={{fontSize:18}} for={'yazran'}>מס׳ פנימי:</label>
      <Input style={{height:50,fontSize:18}} id={'yazran'}/>
      </InputContainer>
      </Col>
          <Col span={6}>
      <InputContainer>
      <label style={{fontSize:18}} for={'counter'}>מס׳ הזמנה:</label>
      <Input style={{height:50,fontSize:18}} id={'counter'}/>
      </InputContainer>
      </Col>
      </Row>
    </DryDetailsContainer>
  )
}