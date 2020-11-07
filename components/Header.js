import Link from 'next/link'
export default function Header () {
  return (
    <div className='header'>
      <Link href='/'>
        <a className='logo'>NextAuth.js</a>
      </Link>
            <a href="#"  className="btn-signin">Sign in</a>  
    </div>
  )
}