import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import axios from "axios"

function Home() {
    const [task, setTask] = useState([])

    useEffect(() => {
        axios.get("https://127.0.0.1:8000/api/todo").then(response => {
            console.log(response.data)
            setTask(response.data)
        })
    })

    return (
        <Container>
            
        </Container>
    )
}

export default Home

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
    padding: 20px;
`