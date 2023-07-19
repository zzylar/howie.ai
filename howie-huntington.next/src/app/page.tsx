// root/src/app/page.tsx

import HomeBanner from '../components/HomeBanner'

export default function Home() {
  return (
    <>
      <section className="w-full flex-center flex-col bg-white ">
        {/* <h1 className="head_text text-center">Howie Huntington</h1> */}
        <HomeBanner />
      </section>
    </>
  )
}
