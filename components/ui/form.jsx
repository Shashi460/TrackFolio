"use client"

const Form = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  )
}

export { Form }
