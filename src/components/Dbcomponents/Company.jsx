import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import { Questions } from './Questions';

export function Company() {
  const [companies, setCompanies] = useState([]);
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/companies')
      .then(response => {setCompanies(response.data); console.log(companies);})
      .catch(error => console.error(error));
  }, []);

  const getQuestions = async (companyName) => {
    try {
      const response = await axios.get(`http://localhost:3001/questions/bycompany/${companyName}`);
      setQuestions(response.data);
      console.log(questions);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="pt-20 pl-20 pb-20 grid grid-cols-4 gap-y-4">
        {companies.map(company => (
          <div className="w-[300px] h-[300px] pt-4 flex justify-center items-center flex-col rounded-lg shadow-lg hover:shadow-xl" key={company?._id}>
            <div className="h-[280px] w-[200px] flex justify-center items-center">
            <img src={company.url} alt={company.name} className="" />
            </div>
            <button
              className='bg-black text-white px-4 py-2 font-medium text-lg hover:shadow-lg hover:scale-110 rounded-lg mt-6 mb-4'
              onClick={() => {
                navigate(`/questions`);
                getQuestions(company.name);
              }}
            >
              view questions
            </button>
          </div>
        ))}
      </div>

      
    </>
  );
}
