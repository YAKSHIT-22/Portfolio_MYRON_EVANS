import { useState } from 'react'

import logoutSvg from '../assets/svgs/Logout.svg'
import copySvg from '../assets/svgs/copy.svg'
import tickSvg from '../assets/svgs/tick.svg'

import Button from '../components/ui/Button.jsx'

const AffRefScreen = () => {
  const [isCopied, setIsCopied] = useState(false)
  const ammount = `$10`

  async function copyLink() {
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
    <div className=" flex flex-col items-center text-center">
      <div className="mb-10 items-center text-center">
        <h1 className="pb-5 text-section-heading"> Affiliate Referral</h1>
        <p className="text-body text-secondary">
          Please sign up to generate affiliate referral and earn money by
          referring clients to me.{' '}
        </p>
      </div>
      <div className=" flex flex-col items-center rounded-[2rem] bg-sm-primary">
        <div className={'mt-4 flex w-full items-start justify-end pr-14'}>
          <Button title={'Log Out'}>
            <img src={logoutSvg} />
          </Button>
        </div>

        <h1 className="pb-4 text-section-heading">Heres your affiliate link</h1>
        <div className="relative flex w-[54rem] justify-center rounded-[2rem] bg-primary px-14 py-4 shadow-xl">
          <p
            id={'referral_link'}
            className={'font-inter text-body text-secondary'}
          >
            refferal link
          </p>
          <button
            className="absolute right-5 flex items-center"
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
        <div className=" mx-16 my-10 flex h-[30rem] w-[54rem] flex-col items-center justify-center rounded-[2rem]  bg-secondary text-center">
          <h1 className="text-section-heading ">Account Balance</h1>
          <div className="inline-block w-fit border-b-2 border-solid  border-transparent bg-gradient-to-r  from-[#8D611D] to-[#B79766] bg-clip-text px-28 py-4 text-section-heading font-bold text-transparent [border-image:linear-gradient(to_top_right,#8D611D,#B79766)_30]">
            {ammount}
          </div>
          <div className="m-10 rounded-2xl border-2 border-[#8D611D] bg-[#FFCC99] bg-opacity-5 transition-colors hover:bg-opacity-10">
            <button className="inline-block border-4 border-double border-transparent bg-origin-border px-40 py-6">
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
