import Layout from '@/layouts/main'
import { store, RootState, AppDispatch } from '@/store'

import { updateUsername } from '@/store/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default function HomePage({ res }: any) {
  return (
    <>
      <div className="flex justify-center items-center h-full">
        <div className="font-medium text-[3rem]">Next.js 13 BASE: Pages Router With Tailwindcss, Antd, Redux</div>
      </div>
    </>
  )
}
HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
