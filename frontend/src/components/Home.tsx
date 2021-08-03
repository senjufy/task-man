import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import axios from "axios"
import Card from './Card'

function Home() {
    const [task, setTask] = useState<[]>([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/todo')
              .then(res => {
                if (res.status === 200) {
                    setTask(res.data)
                }
            })
    });

    return (
        <Container>
            {
                task.map((res: any) => (
                    <Card title={res.title} desc={res.description}/>
                ))
            }

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