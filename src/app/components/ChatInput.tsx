import React, { useState } from 'react'

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
      onSubmit(text)
      setText('') // Clear the input after submission
    }
  }

  return (
    <textarea
      className={`chat-input h-full p-2 rounded resize-none w-full outline-none pt-8 ring-0 focus:ring-0 ${className}`}
      placeholder={placeholder}
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown} // Handle Enter and Shift + Enter
      rows={3}
      style={{ whiteSpace: 'pre-wrap' }} // Maintain line breaks
    />
  )
}

export default ChatInput
