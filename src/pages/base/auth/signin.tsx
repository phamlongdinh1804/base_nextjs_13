import React, { useRef } from 'react'
import Image from 'next/image'
import image from '@assets/images/image_1.png'

// import Button from '@/components/elements/Button'
// import TextBox from '@/components/elements/TextBox'
import { signIn } from 'next-auth/react'
import Layout from '@/layouts/main'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

export default function BaseLoginPage() {
  const userName = useRef('')
  const pass = useRef('')

  const onSubmit = async () => {
    const result = await signIn('credentials', {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: '/',
    })
  }
  const onFinish = async (values: any) => {
    await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: true,
      callbackUrl: '/',
    })
  }
  return (
    <>
      <div className={'flex flex-col justify-center items-center h-full w-full'}>
        <div className="flex justify-around w-full items-center h-full">
          <div>
            <Image src={image} width={500} height={500} alt="Picture of the author" />
          </div>
          <div className="shadow bg-white rounded-lg flex flex-col w-[30%] h-[50%] p-12 justify-center">
            <div>
              <h1 className="text-[2.5rem] font-bold mb-4">Login</h1>
            </div>
            <Form
              name="normal_login"
              className="w-full"
              initialValues={{
                email: '',
                password: '',
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Email!',
                  },
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <div className="flex flex-col">
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}
BaseLoginPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
