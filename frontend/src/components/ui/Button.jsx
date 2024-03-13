import LeftArrowIcon from '../../assets/svgs/LeftArrowIcon.jsx'

export default function Button({ title, onClick, children, className }) {
  return (
    <button
      className={`group relative inline-flex h-10 items-center justify-center rounded-full bg-primary px-4 py-7 text-sm font-medium text-white transition-colors hover:bg-primary/90 ${className}`}
      onClick={onClick}
    >
      <span className="pr-12 text-sm font-medium">{title}</span>
      <div className="absolute right-0 flex items-center justify-center rounded-full bg-secondary px-4 py-4 group-hover:bg-secondary/90">
        {children ? children : <LeftArrowIcon />}
      </div>
    </button>
  )
}
