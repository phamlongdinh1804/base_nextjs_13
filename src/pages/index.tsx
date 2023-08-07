import Layout from '@/layouts/main'
import Image from 'next/image'
import image_1 from '@assets/images/image_1.png'
import useTranslate from '../hooks/useTranslate'

export default function HomePage({ res }: any) {
  const t = useTranslate()

  return (
    <>
      <div className='flex flex-1 items-center justify-center'>
        <div>{t('home.title')}</div>
        <p>{t('home.content')}</p>
        <div>
          <Image src={image_1} width={500} height={500} alt='Picture of the author' />
        </div>
      </div>
    </>
  )
}
HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
