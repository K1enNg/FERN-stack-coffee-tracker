
import React, {useState} from 'react'
import Modal from './Modal'
import Authentication from './Authentication'

const Layout = (props) => {
    const { children } = props

    const [showModal, setShowModal] = useState(false)

    const header = (
      <header>
        <div>
          <h1 className='text-gradient'>Kaffien</h1>
          <p>For Coffee Insasiate</p>
        </div>
        <button onClick={() => {setShowModal(true)}}>
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
        {showModal && (
          <Modal handleCloseModal={() => {setShowModal(false)}}>
            <Authentication/>
          </Modal>)}
        {header}
        <main>
          {children}
        </main>
        {footer}
    </>
  )
}

export default Layout