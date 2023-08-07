import Head from 'next/head'
import { Poppins } from 'next/font/google'

const font = Poppins({ weight: "400", subsets: ['latin'] })

type MainLayoutProps = {
  children: React.ReactNode,
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Head>
        {/* Change the title of web apps */}
        <title>NextJS Templates by rupawarna studio</title>
        <meta name="description" content="Developed by Slaash Creative Labs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <main className={font.className}>{children}</main>
    </>
  )
}