import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import callApi from '../utils/callApi';
import ErrorDialogue from '../utils/ErrorDialogue';
import Tables from './Tables'

const UTransaction = () => {

    const [transactions, setTransactions] = useState([])
    useEffect(() => {
      
        callApi('wallet/fetch_transactions').then(res=>{
            if(res.type === 'success'){
                res.data.transactions.map(tranasction=>{
                    tranasction.timestamp = new Date(tranasction.timestamp).toLocaleString()
                    if(tranasction.tType === 'Withdraw' || tranasction.tType === 'Event Registration'){
                        tranasction.amount = 0-tranasction.amount
                    }
                })
                setTransactions(res.data.transactions)
            }
        }).catch(err=>{
            ErrorDialogue()
        })

    }, [])
    
    return (
        <Wrapper>
        <div>UTransaction</div>
        <Tables data={transactions}/>
        </Wrapper>
    )
}
const Wrapper = styled.section``;
export default UTransaction