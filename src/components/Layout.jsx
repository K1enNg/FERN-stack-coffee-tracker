import React from 'react'

const Layout = (props) => {
    const { children } = props

    const header = (
      <header>
        <div>
          <h1 className='text-gradient'>Kaffien</h1>
          <p>For Coffee Insasiate</p>
        </div>
        <button>
          <p>Sign up free</p>
          <i className="fa-solid fa-mug-hot"></i>
        </button>
      </header>
    )

    const footer = (
      <footer>
        <p><span className='text-gradient'>Kaffien</span> was made by <a 
        href='https://www.linkedin.com/in/kien-nguyen-46bab22a1/'>Kien</a> using the <a
        href='http://www.fantacss.smoljames.com' target='_blank'>FantaCSS</a> design library</p>
      </footer>
    )
  return (
    <>
        {header}
        <main>
          {children}
        </main>
        {footer}
    </>
  )
}

export default Layout