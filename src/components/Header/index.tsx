import './style.css';

export function Header() {
  return (
    <header className='sticky'>
      <h2>Blog Legal!</h2>
      <nav id="blog-content">
        <div className='nav-option'>Home</div>
        <a href='https://github.com/get-Friday/blog-interface' className='nav-option' target={'_blank'} rel="noopener noreferrer">About</a>
      </nav>
    </header>
  )
}