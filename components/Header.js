import Link from "next/link";

export default function Header() {
    return (
    <div className="container">
        <header className='flex flex-row p-4 justify-between'>
            <div>
                <Link href="/">
                    <a href="#none" className="btn btn-link">Caffe</a>    
                </Link>      
            </div>
            <div>
                <Link href="/introduce">
                    <a href="/introduce" className="btn btn-link">Introduce</a>
                </Link>
                <Link href="/order">
                    <a href="#none" className="btn btn-link">Order</a>
                </Link>
                <a href="#none" className="btn btn-link">Recruit</a> 
                <a href="#none" className="btn btn-link">Contact us</a> 
             </div>       
        </header>
    </div>
    )
}