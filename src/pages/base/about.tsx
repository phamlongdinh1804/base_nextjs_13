import Layout from '@/layouts/main'

export default function BaseAbout() {
  return (
    <>
      <div className="p-12">
        <p>Pages Router</p>
        <p>Tailwindcss</p>
        <p>Antd</p>
        <p>Redux</p>
        <p>Middleware</p>
        <p>Axios</p>
        <p>NextAuth</p>
        {/* <p>GraphQL</p> */}
        <p>React Hook Form</p>
        <p>Yup</p>
        <p>Multi Language i18n</p>
      </div>
    </>
  )
}
BaseAbout.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
