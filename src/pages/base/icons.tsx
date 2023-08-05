import React from 'react'
import Layout from '@/layouts/main'
import * as Icons from '@/icons'

export default function IconPage() {
  const listIcons: any = Icons
  return (
    <>
      <div className='flex flex-1 flex-col py-8'>
        {Object.entries(listIcons).map(([componentName, Component]: any) => (
          <div key={componentName} className='component-wrapper flex items-center'>
            <div className='w-[5rem]'>
              <Component className='text-[4rem]' />
            </div>
            <div>{componentName}</div>
          </div>
        ))}
      </div>
    </>
  )
}
IconPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
