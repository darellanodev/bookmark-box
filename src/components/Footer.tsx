import React from 'react'

type FooterProps = {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`h-16 bg-black p-4 text-center ${className}`}>
      <a
        href="https://github.com/darellanodev/bookmark-box"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        github
      </a>
    </footer>
  )
}

export default Footer
