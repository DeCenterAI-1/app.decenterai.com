import React, { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  loading?: boolean
  ariaLabel?: string // Optional for better accessibility
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  type = 'button',
  onClick,
  loading = false,
  ariaLabel,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center gap-3 bg-primary_10 text-primary_1 font-semibold font-primaryArchivo text-sm py-2 px-4 rounded-full whitespace-nowrap ${className}`}
      aria-label={ariaLabel}
      disabled={loading} // Disable button when loading
    >
      {loading ? (
        <svg
          className="animate-spin h-5 w-5 text-primary_1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z"
          />
        </svg>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
