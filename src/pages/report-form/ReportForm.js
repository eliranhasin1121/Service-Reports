import React,{useState} from 'react';
import {Container} from './ReportForm.styled';
import Header from '../../components/header/Header';
export default function ReportForm(){

  return(
    <Container style={{direction:'rtl'}}>
      <Header counter={10}/>
    </Container>
  )

}
