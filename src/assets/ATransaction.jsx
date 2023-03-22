import React,{Component}from 'react'
import styled from 'styled-components';
import { useTable } from 'react-table';
import Tables from './Tables';
const ATransaction = () => {
  return (
    <Wrapper>
    <div>ATransaction</div>
    <Tables/>
    </Wrapper>
  )
}

const Wrapper = styled.section``;
export default ATransaction