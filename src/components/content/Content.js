import React from 'react';
import {Row,Col} from 'antd';
import {ContentContainer} from './Content.styled';
import DryDetails from './DryDetails';
import Descriptions from './Descriptions';
export default function Contnet(){

  return(
    <ContentContainer>
      <DryDetails/>
      <Descriptions/>
    </ContentContainer>
  )

}