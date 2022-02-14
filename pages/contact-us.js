import { useState } from "react";
import Header from "../components/Header";

export default function ContactUs(){
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = (e) => {        
        e.preventDefault();

        console.log('input data', email, subject, content)
    }
    return(
       <div className="container">    
            <Header/>
            <h1 className="font-bold">Contact Us</h1>          

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="Form-label">이메일</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="subjectInput" className="Form-label">제목</label>
                    <input value={subject} onChange={e => setSubject(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="제목을 입력하세요"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="Form-label"></label>
                    <textarea value={content} onChange={e => setContent(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button className="btn btn-primary btn-lg">문의하기</button>
            </form>
       </div>
    )
}