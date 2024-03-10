import userIcon from '../assets/icons/userIcon.svg'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer
      className={
        'flex flex-col items-center justify-center border-t-2 border-golden pb-5 md:pt-0'
      }
    >
      <img
        src={userIcon}
        alt={'Myron Evans'}
        className={'size-20 md:size-24'}
      />
      <p className={'-mt-4 font-inter text-[10px] md:-mt-6'}>
        Copyright © {currentYear}
      </p>
    </footer>
  )
}

export default Footer
