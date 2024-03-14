const Message = ({ message, severity, className }) => {
  return (
    <div
      className={`flex h-56 w-full items-center justify-center text-center font-mulish text-content-heading uppercase md:h-72 ${severity === 'error' ? 'text-red-500' : severity === 'warning' ? 'text-yellow-400' : 'text-primary'} ${className}`}
    >
      {message}
    </div>
  )
}

export default Message
