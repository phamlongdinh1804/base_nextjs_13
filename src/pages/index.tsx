import Layout from '@/layouts/main'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button, Modal } from 'antd'
import { Spin } from 'antd'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const currentTime = new Date(Date.now())
    console.log(currentTime.toLocaleString())
  }, [])

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <div className="flex justify-center items-center">CONTENT</div>
    </>
  )
}
Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
