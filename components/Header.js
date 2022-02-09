import Link from "next/link";

export default function Header() {
    return (    
        <header className='flex flex-row py-2 -ml-3 justify-between'>
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
  
    )
}