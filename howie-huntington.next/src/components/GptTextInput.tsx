'use client'

import TextareaAutosize from 'react-textarea-autosize';

const GptTextInput = () => {
  return (
    <TextareaAutosize 
        className="flex min-h-[50px] overflow-auto w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        maxRows={10}
        maxLength={5000}
    />
  )
}

export default GptTextInput