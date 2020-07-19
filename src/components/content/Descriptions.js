import React from 'react';
import {Input} from 'antd';
import {DescriptionsContainer,DescContainer} from './Content.styled';

const {TextArea} = Input;

export default function Descriptions(){

  return(
    <DescriptionsContainer>
      <DescContainer>
        <label>תיאור התקלה:</label>
        <TextArea style={{fontSize:18}} autoSize={{minRows:3,maxRows:7}}/>
      </DescContainer>
      <DescContainer>
        <label>תיאור הטיפול:</label>
        <TextArea style={{fontSize:18}} autoSize={{minRows:3,maxRows:7}}/>
      </DescContainer>
    </DescriptionsContainer>
  )
}