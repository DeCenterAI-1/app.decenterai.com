import React from 'react'

interface IProps {
  placeholder?: string
  className?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  id?: string
  name?: string
  error?: string
  rows?: number
  cols?: number
  [x: string]: any
}

const Textarea: React.FC<IProps> = ({
  placeholder = 'Enter text...',
  className = '',
  value,
  onChange,
  id,
  name,
  error,

  ...rest
}) => {
  return (
    <div className="textarea-wrapper h-full">
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        name={name}
        className={`h-full w-full border outline-none resize-none  flex items-center text-white p-2
          ${className} ${error ? 'border-red-500' : ''} 
          focus:ring-0 focus:ring-blue-0 `}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest} // Pass any additional props like disabled, maxlength etc.
      />
    </div>
  )
}

export default Textarea
