import Layout from '@/layouts/main'
import { Alert, Button, Spin } from 'antd'
import { useState } from 'react'

export default function LoadingPage() {
  const [loadingFullScreen, setLoadingFullScreen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadingButton, setLoadingButton] = useState(false)
  const handleLoadingFullScreen = () => {
    setLoadingFullScreen(true)
    setTimeout(() => {
      setLoadingFullScreen(false)
    }, 2000)
  }
  const handleLoading = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }
  const handleButtonLoading = () => {
    setLoadingButton(true)
    setTimeout(() => {
      setLoadingButton(false)
    }, 2000)
  }
  return (
    <>
      <div className="p-12">
        <Button type="primary" shape="round" onClick={() => handleLoading()}>
          Loading
        </Button>
        <Button type="primary" shape="round" onClick={() => handleLoadingFullScreen()}>
          Loading fullscreen
        </Button>
        <Spin spinning={loadingFullScreen} wrapperClassName="loading-fullscreen">
          <div></div>
        </Spin>
        <Spin spinning={loading}>
          <div className="mt-12">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum soluta nostrum tempora ab ipsa quas maxime
              iusto quis! Dicta velit quo voluptatum expedita? Minus nulla, placeat fuga natus facere dolorum?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum soluta nostrum tempora ab ipsa quas maxime
              iusto quis! Dicta velit quo voluptatum expedita? Minus nulla, placeat fuga natus facere dolorum?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum soluta nostrum tempora ab ipsa quas maxime
              iusto quis! Dicta velit quo voluptatum expedita? Minus nulla, placeat fuga natus facere dolorum?
            </p>
          </div>
        </Spin>
        <Button type="primary" loading={loadingButton} onClick={() => handleButtonLoading()}>
          Button Loading
        </Button>
      </div>
    </>
  )
}
LoadingPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
