'use client'
// import { useState } from 'react'
import Image from 'next/image'
import classes from './header.module.css'
import Button from '@/components/ui/button/button'
import { useSession, signOut } from 'next-auth/react'

export default function Header () {
  const { data: session } = useSession()

  // const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    // setShowNavbar(!showNavbar)
  }

  return (
    <header className={classes.header}>
      {/* Left Section */}
      <div className={classes.menu}>
        <Image
          src="/icons/burger.svg"
          alt="Burger Button"
          width={25}
          height={25}
          priority
          onClick={handleShowNavbar}
        />
      </div>
      {/* Center Section */}
      <form className={classes.search}>
        <input
          type="text"
          placeholder="Search..."
          className="focus:outline-none focus:border-blue-500"
        />
        <button></button>
      </form>
      {/* Right Section */}
      <div className={classes.right}>
        {session?.user
          ? (
            <div>
              <img onClick={async () => {
                await signOut({
                  callbackUrl: '/'
                })
              }
              } src={session.user.image || ''} alt='user profile image' className='w-9 h-9 rounded-full border-2'/>
            </div>
            )
          : (
            <Button link="/login">
              Sign In
            </Button>
            )}
      </div>
    </header>
  )
}
