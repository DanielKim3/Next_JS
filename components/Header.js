import Link from "next/link";

export default function Header() {
    return (    
        <header className='flex flex-row py-2 -ml-3 justify-between'>
            <div>
                <Link href="/">
                    <a className="btn btn-link">Caffe</a>    
                </Link>      
            </div>
            <div>
                <Link href="/introduce">
                    <a className="btn btn-link">Introduce</a>
                </Link>
                <Link href="/order">
                    <a className="btn btn-link">Order</a>
                </Link>                
                <Link href="/recruit">
                    <a className="btn btn-link">Recruit</a>
                </Link>
               <Link href="/contact-us">
                    <a className="btn btn-link">Contact us</a>
                </Link>
             </div>       
        </header>
  
    )
}