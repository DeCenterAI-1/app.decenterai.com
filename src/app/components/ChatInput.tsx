import React, { useState, useRef, useEffect } from 'react'

interface ChatInputProps {
  onSubmit?: (text: string) => void
  placeholder?: string
  className?: string
}

const ChatInput: React.FC<ChatInputProps> = ({
  onSubmit,
  placeholder = 'Type your message...',
  className = '',
}) => {
  const [text, setText] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Auto-resize effect
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto' // Reset the height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px` // Set new height based on scroll height
    }
  }, [text])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // If Enter is pressed without Shift, submit the text
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault() // Prevent the default Enter behavior (new line)
      handleSubmit() // Call the submit function
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const handleSubmit = () => {
    if (text.trim()) {
      onSubmit?.(text) // Call onSubmit if defined
      setText('') // Clear the input after submission
    }
  }

  return (
    <textarea
      ref={textareaRef}
      className={`chat-input p-2  rounded resize-none w-full min-h-full pt-7 outline-none   text-white focus:ring-0 ring-0 absolute bottom-0 left-0 right-0 max-h-[400px] overflow-hidden whitespace-pre-wrap ${className}`}
      placeholder={placeholder}
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      rows={1} // Start with 1 row
    />
  )
}

export default ChatInput
