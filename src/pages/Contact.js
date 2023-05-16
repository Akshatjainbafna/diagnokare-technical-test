import React, { useReducer, useState } from "react";
import Navbar from "../components/Navbar.component";

const allQueries = [];

const reducer = (state, action) => {
    switch (action.type) {
        case "submit":
            return [...state, action.data]
        default:
            return state;
    }
};

export default function Contact() {
    const [data, setData] = useState({ name: '', email: '', query: '' })
    const [queries, dispatch] = useReducer(reducer, allQueries)

    function submitForm(e) {
        e.preventDefault()
        dispatch({ type: 'submit', data: data })
        console.log(queries);
        alert('Form Submitted Successfully!@')
        setData({ name: '', email: '', query: '' })
    }
    return (
        <>
            <Navbar />
            <form className="m-5" onSubmit={submitForm}>
                <div className="mb-3">
                    <label htmlFor="nameSample" className="form-label">Name</label>
                    <input type="text" value={data.name} onChange={(e) => setData({ ...data, 'name': e.target.value })} className="form-control" name='name' id="nameSample" aria-describedby="nameHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="emailSample" className="form-label">Email address</label>
                    <input type="email" value={data.email} className="form-control" onChange={(e) => setData({ ...data, 'email': e.target.value })} name='email' id="emailSample" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="querySample" className="form-label">Query</label>
                    <input type="text" value={data.query} className="form-control" onChange={(e) => setData({ ...data, 'query': e.target.value })} name='query' id="querySample" aria-describedby="queryHelp" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}