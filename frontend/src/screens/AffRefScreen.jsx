import { useState } from 'react'

import logoutSvg from '../assets/svgs/Logout.svg'
import copySvg from '../assets/svgs/copy.svg'
import tickSvg from '../assets/svgs/tick.svg'

import Button from '../components/ui/Button.jsx'

const AffRefScreen = () => {
  const [isCopied, setIsCopied] = useState(false)
  const ammount = `800.00`

  const innerWidth = window.innerWidth

  async function copyLink() {
    if (isCopied) {
      return
    }

    const copyText = document.getElementById('referral_link')

    try {
      await navigator.clipboard.writeText(copyText.innerText)
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 1000)
    } catch (e) {
      setIsCopied(false)
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center pt-12 text-center md:px-0 md:pb-20">
      <div className="mb-16 items-center px-6 text-center md:mb-10 md:px-0">
        <h1 className="pb-5 text-content-heading md:text-section-heading">
          Affiliate Referral
        </h1>
        <p className="text-cart-item-text text-secondary md:text-body">
          Please sign up to generate affiliate referral and earn money by
          referring clients to me.{' '}
        </p>
      </div>
      <div className="flex w-full flex-col items-center rounded-[2rem] bg-sm-primary">
        <div
          className={
            'mb-4 hidden w-full md:mt-4 md:flex md:items-start md:justify-end md:pr-14'
          }
        >
          <Button title={'Log Out'}>
            <img src={logoutSvg} />
          </Button>
        </div>

        <h1 className="px-6 pb-4 text-content-heading md:px-0 md:text-section-heading">
          Heres your affiliate link
        </h1>
        <div
          id={'parent_div'}
          className={'w-full max-w-4xl px-6 md:px-0'}
          onClick={copyLink}
        >
          <div className="relative flex w-full justify-center rounded-[2rem] bg-primary py-4 shadow-xl md:px-14">
            <p
              id={'referral_link'}
              className={'font-inter text-sm text-secondary md:text-body'}
            >
              {!isCopied || innerWidth >= 768 ? (
                <span>https://myronevans.com/jamesjones23124</span>
              ) : (
                <span className={'text-[#2a8cff]'}>Copied</span>
              )}
            </p>
            <button
              className="absolute right-5 top-5 hidden md:flex md:items-center"
              onClick={copyLink}
              disabled={isCopied}
            >
              {isCopied ? (
                <>
                  <img src={tickSvg} className={'mr-1'} />
                  <span className={'text-[#2a8cff]'}>Copied</span>
                </>
              ) : (
                <>
                  <img src={copySvg} className={'mr-1'} />
                  <span className={'text-[#2a8cff]'}>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
        <div className="mx-16 my-10 flex h-fit w-full max-w-4xl flex-col items-center justify-center bg-secondary pb-1 pt-12 text-center md:rounded-[2rem] md:py-12">
          <div className={'mb-6 flex w-full items-center justify-end pr-6'}>
            <Button title={'Log Out'} className={'md:hidden'}>
              <img src={logoutSvg} />
            </Button>
          </div>
          <h1 className="mb-4 text-content-heading md:mb-16 md:text-section-heading">
            Account Balance
          </h1>
          <div className={'w-full px-5'}>
            <div className="mx-auto inline-block w-full max-w-lg border-b-2 border-solid border-transparent bg-gradient-to-r from-[#8D611D] to-[#B79766] bg-clip-text py-4 text-center text-main-heading font-bold text-transparent [border-image:linear-gradient(to_top_right,#8D611D,#B79766)_30] md:px-28">
              ${ammount}
            </div>
          </div>
          <div className="m-10 rounded-2xl border-2 border-[#8D611D] bg-[#FFCC99] bg-opacity-5 transition-colors hover:bg-opacity-10">
            <button className="inline-block border-4 border-double border-transparent bg-origin-border px-10 py-6 md:px-40">
              <span
                className={
                  'bg-gradient-to-r from-[#8D611D] to-[#B79766] bg-clip-text text-body font-bold text-transparent'
                }
              >
                Withdraw Funds
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AffRefScreen
