import React, { useEffect, useReducer, useState } from "react";
import Navbar from "../components/Navbar.component";

const allQueries = [];

const reducer = (state = allQueries, action) => {
    switch (action.type) {
        case "submit":
            return [...state, action.data]
        default:
            return state;
    }
};

export default function Contact() {
    const [data, setData] = useState({name: '', email: '', query: ''})
    useEffect(() => console.log(data), [data])
    const [queries, dispatch] = useReducer(reducer, allQueries)
    function submitForm(e) {
        e.preventDefault()
        dispatch({ type: 'submit', data: data })
        alert('Form Submitted Successfully!@')
        setData({name: '', email: '', query: ''})
        console.log(queries);
    }
    return (
        <>
            <Navbar />
            <form className="m-5">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" value={data.name} onChange={(e) => setData({...data, 'name': e.target.value})} class="form-control" name='name' id="name" aria-describedby="nameHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" value={data.email} class="form-control" onChange={(e) => setData({...data, 'email': e.target.value})} name='email' id="email" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Query</label>
                    <input type="text" value={data.query} class="form-control" onChange={(e) => setData({...data, 'query': e.target.value})} name='query' id="query" aria-describedby="queryHelp" />
                </div>

                <button onClick={submitForm} type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    )
}