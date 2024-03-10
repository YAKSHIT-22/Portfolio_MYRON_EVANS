import userIcon from '../assets/icons/userIcon.svg'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer
      className={
        'flex flex-col items-center justify-center border-t-2 border-golden pb-12 md:pt-0'
      }
    >
      <img
        src={userIcon}
        alt={'Myron Evans'}
        className={'size-52 md:size-72'}
      />
      <p className={'-mt-10 font-inter font-[14px] md:-mt-16'}>
        Copyright © {currentYear}
      </p>
    </footer>
  )
}

export default Footer
