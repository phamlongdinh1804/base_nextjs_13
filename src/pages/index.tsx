import Layout from '@/layouts/main'
import Image from 'next/image'
import image_1 from '@assets/images/image_1.png'

export default function HomePage({ res }: any) {
  return (
    <>
      <div className="flex justify-center items-center h-full">
        <div>
          <Image src={image_1} width={500} height={500} alt="Picture of the author" />
        </div>
      </div>
    </>
  )
}
HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
