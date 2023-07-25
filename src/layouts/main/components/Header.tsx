import React from 'react'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '@/store'
import Link from 'next/link'
import { Button } from 'antd'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const HeaderComponent = () => {
  const username = useAppSelector((state) => state.authUser.username)
  return (
    <header>
      <nav className="bg-[#12202F] text-white border-[#12202F] h-[7rem] flex items-center px-[7rem]">
        <div className="flex flex-wrap justify-between items-center w-full">
          {/* LEFT */}
          <div>
            <Link href="/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap text-[2rem]">NEXTJS BASE</span>
            </Link>
          </div>
          {/* CENTER */}
          <div className="justify-between items-center flex-1 ml-[5rem]">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#"
                  className="block text-white rounded bg-primary-700 p-0 hover:text-[#EF4230]"
                  aria-current="page"
                >
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="block text-white rounded bg-primary-700 p-0 hover:text-[#EF4230]">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="block text-white rounded bg-primary-700 p-0 hover:text-[#EF4230]">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="block text-white rounded bg-primary-700 p-0 hover:text-[#EF4230]">
                  Team
                </a>
              </li>
              <li>
                <Link href="/demo-redux" className="block text-white rounded bg-primary-700 p-0 hover:text-[#EF4230]">
                  Redux
                </Link>
              </li>
            </ul>
          </div>
          {/* RIGHT */}
          <div className="flex items-center">
            <Link href="#" className="mr-[1rem]">
              <Button type="primary" shape="round">
                SignUp
              </Button>
            </Link>
            <Link href="#">
              <Button type="primary" shape="round">
                SignIn
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default HeaderComponent
