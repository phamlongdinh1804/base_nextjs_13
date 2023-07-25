import Layout from '@/layouts/main'
import { store, RootState, AppDispatch } from '@/store'

import { updateUsername } from '@/store/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default function Redux({ res }: any) {
  const username = useAppSelector((state) => state.authUser.username)
  const handleClickButton = () => {
    store.dispatch(updateUsername('test_user'))
  }
  return (
    <>
      <div>username: {username}</div>
      <div className="flex justify-center items-center">
        <button onClick={() => handleClickButton()}>Update Name</button>
      </div>
    </>
  )
}
Redux.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
