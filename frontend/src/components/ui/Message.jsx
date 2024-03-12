const Message = ({ message, severity }) => {
  return (
    <div
      className={`flex h-56 w-full items-center justify-center text-center font-mulish text-content-heading uppercase md:h-72 ${severity === 'error' ? 'text-red-500' : severity === 'warning' ? 'text-yellow-400' : 'text-secondary'}`}
    >
      {message}
    </div>
  )
}

export default Message
