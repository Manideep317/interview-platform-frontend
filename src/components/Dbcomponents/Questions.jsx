import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navbar } from './Navbar';
export function Questions() {
    const companyName =  localStorage.getItem('currentCompany');
    const [questions, setQuestions] = useState([]);
    console.log(quest);
    useEffect(() => {
        if(companyName){

        axios.get(`http://localhost:3001/questions/bycompany/${companyName}`)
            .then(response => {
                setQuestions(response.data);
                console.log(questions);
            })
            .catch(error => console.error(error));
        }
    }, [companyName]);

    return (
        <>
            <div className="h-[60vh] bg-black">

            </div>
        </>
    )
}
