import React from 'react'
import Layout from './components/Layout'
import Hero from './components/Hero'

const App = () => {

  const isAuthenticated = false
  return (
    <>
      <Layout>
        <Hero/>
      </Layout>
    </>
  )
}

export default App