import React from 'react'

interface IProps {
  placeholder?: string
  className?: string
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  id?: string
  name?: string
  error?: string
}

const Input: React.FC<IProps> = ({
  placeholder = 'Enter text...',
  className = '',
  type = 'text',
  value,
  onChange,
  id,
  name,
  error,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={id}
      name={name}
      className={`h-full w-full border-none outline-none ring-0 hover:ring-0 bg-transparent text-white ${className} ${error ? 'border-red-500' : ''}`}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
    />
  )
}

export default Input
