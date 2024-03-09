import { PropTypes } from 'prop-types'
import BoxIcon from '../components/Icons/BoxIcon'
import blockS from '../assets/svgs/blockS.svg';
import { FrontBentoGrid, FrontBentoGridItem } from "../components/ui/Front-bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import BentoGrid1 from '../components/GridComps/BentoGrid1';
import FrontBentoGrid1 from '../components/FrontGridComps/FrontBentoGrid1';
import FrontBentoGrid2 from '../components/FrontGridComps/FrontBentoGrid2';
import FrontBentoGrid3 from '../components/FrontGridComps/FrontBentoGrid3';
import FrontBentoGrid4 from '../components/FrontGridComps/FrontBentoGrid4';


const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [


  {
    id: 1,
    title: "First Title",
    desc: "First Description",
    imageUrl: "url('https://example.com/image1.jpg')",
    borderColor: "#ff0000"
  },

  {
    id: 2,
    title: "Second Title",
    desc: "Second Description",
    imageUrl: "url('https://example.com/image2.jpg')",
    borderColor: "#0000ff"
  },

  {
    id: 3,
    title: "Third Title",
    desc: "Third Description",
    imageUrl: "url('https://example.com/image3.jpg')",
    borderColor: "#00ff00"
  },

  {
    id: 4,
    title: "Fourth Title",
    desc: "Fourth Description",
    imageUrl: "url('https://example.com/image4.jpg')",
    borderColor: "#ffff00"
  },

  {
    id: 5,
    title: "Fifth Title",
    desc: "Fifth Description",
    imageUrl: "url('https://example.com/image5.jpg')",
    borderColor: "#800080"
  },

  {
    id: 6,
    title: "Sixth Title",
    desc: "Sixth Description",
    imageUrl: "url('https://example.com/image6.jpg')",
    borderColor: "#ffa500"
  }
  ,
  {
    id: 7,
    title: "",
    desc: "",
    imageUrl: "",
    borderColor: ""
  }
  ,
  {
    id: 8,
    title: "",
    desc: "",
    imageUrl: "",
    borderColor: ""
  }
  ,
  {
    id: 9,
    title: "",
    desc: "",
    imageUrl: "",
    borderColor: ""
  }
  ,
  {
    id: 10,
    title: "",
    desc: "",
    imageUrl: "",
    borderColor: ""
  }
  ,
  {
    id: 11,
    title: "",
    desc: "",
    imageUrl: "",
    borderColor: ""
  }
];









function BlogScreen({ img, title, desc }) {
  const dataJ = [
    {
      color: 'Red',
      colourCode: `#f9444g`

    },
    {
      color: 'blue',
      colourCode: `#de0a26`

    },
    {
      color: 'green',
      colourCode: `#f01e2c`
    },
  ]
  return <section className='flex flex-col justify-center'>
    <div className=' flex flex-col justify-center  text-center p-14 '>
      <h1 className='self-center text-section-heading '> Bento Blog</h1>
      <p className='self-center w-3/4'>
        Bite-sized blog, a unique concept I thought of while designing this portfolio site, using the tri-color-coded uni-directional reading axis, follow the start point, color order pattern, and ordered direction of reading for a unique experience out of every issue (only on laptop or desktop). I upload every Sunday.
      </p>

    </div>
    <div className='bg-sm-primary w-3/4 self-center flex flex-col rounded-[2rem] px-12 py-4 gap-y-10'>
      <h2 className='text-content-heading'>Reading Instructions</h2>
      <div className='space-x-3 gap-10'>
        <h2 className='my-5'>Color Order</h2>
        <div className='bg-primary rounded-[1.5rem]  justify-between p-2 flex px-9 py-5 '>
          {dataJ.map((val, key) => (

            <div className='flex' key={key}>
              <h3 className='text-lg m-auto px-2'>1.{val.color}</h3>
              <BoxIcon hexi={val.colourCode} />
            </div>
          ))}


          {/* <div className='flex'>
            <h3 className='text-lg'>1.Red</h3>
            <img src={greenRect} alt='' />

          </div>
          <div className='flex'>
            <h3 className='text-lg'>1.Red</h3>
            <img src={blueRect} alt='' />

          </div> */}
        </div>
        <h2 className='mt-8'>Start Point</h2>

        <div className='bg-primary rounded-[1.5rem] w-[100%] px-6 flex justify-center items-center py-4 my-5 '>
          <h2 className='px-5'>Top Left</h2>
          <img src={blockS} />
        </div>



      </div>
    </div>
    <div className='Bento-blog-container mt-10'>
      <FrontBentoGrid4 />

    </div>
  </section>
}

export default BlogScreen


BlogScreen.prototype = {
  img: PropTypes.string,
  desc: PropTypes.string,
  title: PropTypes.string

}