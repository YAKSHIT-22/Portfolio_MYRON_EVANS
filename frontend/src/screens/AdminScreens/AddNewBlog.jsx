import { useEffect, useState } from 'react'

import { ColorPicker, useColor } from 'react-color-palette'
import BoxIcon from '../../components/Icons/BoxIcon'
// import "react-color-palette/lib/css/styles.css";
import TopRight from '../../assets/svgs/TopRight.svg'
import '../../../node_modules/react-color-palette/dist/css/rcp.css'
import upload from '../../assets/icons/upload.svg'

import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from '@tabler/icons-react'

import BentoGrid1 from '../../components/GridComps/BentoGrid1.jsx'
import BentoGrid2 from '../../components/GridComps/BentoGrid2.jsx'
import BentoGrid3 from '../../components/GridComps/BentoGrid3.jsx'
import BentoGrid4 from '../../components/GridComps/BentoGrid4.jsx'
import Modal from '../../components/ui/Modal.jsx'

const Skeleton = () => (
    <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800"></div>
)
const items = [
    {
        title: 'The Dawn of Innovation',
        description: 'Explore the birth of groundbreaking ideas and inventions.',
        header: <Skeleton />,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'The Digital Revolution',
        description: 'Dive into the transformative power of technology.',
        header: <Skeleton />,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'The Art of Design',
        description: 'Discover the beauty of thoughtful and functional design.',
        header: <Skeleton />,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'The Power of Communication',
        description:
            'Understand the impact of effective communication in our lives.',
        header: <Skeleton />,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'The Pursuit of Knowledge',
        description: 'Join the quest for understanding and enlightenment.',
        header: <Skeleton />,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'The Joy of Creation',
        description: 'Experience the thrill of bringing ideas to life.',
        header: <Skeleton />,
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'The Spirit of Adventure',
        description: 'Embark on exciting journeys and thrilling discoveries.',
        header: <Skeleton />,
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'The Power of Communication',
        description:
            'Understand the impact of effective communication in our lives.',
        header: <Skeleton />,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'The Pursuit of Knowledge',
        description: 'Join the quest for understanding and enlightenment.',
        header: <Skeleton />,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'The Joy of Creation',
        description: 'Experience the thrill of bringing ideas to life.',
        header: <Skeleton />,
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'The Spirit of Adventure',
        description: 'Embark on exciting journeys and thrilling discoveries.',
        header: <Skeleton />,
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'The Joy of Creation',
        description: 'Experience the thrill of bringing ideas to life.',
        header: <Skeleton />,
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'The Spirit of Adventure',
        description: 'Embark on exciting journeys and thrilling discoveries.',
        header: <Skeleton />,
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
]

const Hexcodes = [
    '#FF4F00',
    '#982424',
    '#f2f2f2', // Very light gray
    '#dfe4ea', // Light gray
    '#e7ecee', // Light blue-gray
    '#f0f8ff', // Light blue
    '#dcedfe',
    '#262626', // Very dark gray
    '#333333', // Dark gray
    '#595959', // Dark charcoal
    '#2C3E50', // Deep blue
    '#16A085',
]

const AddNewBlog = () => {

    const [open, setopen] = useState(false);


    const [ParentData, setParentData] = useState({
        colorOrder: [
            {
                color: 'Red',
                colorCode: `#FF5858`,
            },
            {
                color: 'blue',
                colorCode: `#A4FF9C`,
            },
            {
                color: 'green',
                colorCode: `#2A8CFF`,
            },
        ],
        startLabel: '1',
        bentoSelected: '1',
        bentoCotent: [
            {
                id: 1,
                title: '',
                desc: '',
                imgUrl: '',
            },
            {
                id: 2,
                title: '',
                desc: '',
                imgUrl: '',
            },
            {
                id: 3,
                title: '',
                desc: '',
                imgUrl: '',
            },
            {
                id: 4,
                title: '',
                desc: '',
                imgUrl: '',
            },
            {
                id: 5,
                title: '',
                desc: '',
                imgUrl: '',
            },
            {
                id: 6,
                title: '',
                desc: '',
                imgUrl: '',
            },
            {
                id: 7,
                title: '',
                desc: '',
                imgUrl: '',
            },
            {
                id: 8,
                title: '',
                desc: '',
                imgUrl: '',
            },
            {
                id: 9,
                title: '',
                desc: '',
                imgUrl: '',
            },
            {
                id: 10,
                title: '',
                desc: '',
                imgUrl: '',
            },
            {
                id: 11,
                title: '',
                desc: '',
                imgUrl: '',
            },
        ],
    })

    useEffect(() => {
        for (let i = 1; i <= 4; i++) {
            const borderColorDiv = document.getElementById(`BentoDiv${i}`)

            if (i == ParentData.bentoSelected) {
                if (borderColorDiv) {
                    borderColorDiv.style.border = '1px solid #8D611D'
                }
            } else {
                borderColorDiv.style.border = 'none'
            }
        }
        for (let j = 1; j <= 4; j++) {
            const bcDiv = document.getElementById(`Box${j}`)
            console.log(ParentData.startLabel)
            if (j == ParentData.startLabel) {
                if (bcDiv) {
                    console.log(bcDiv)
                    bcDiv.style.border = '1px solid #8D611D'

                }
            } else {
                bcDiv.style.border = ''
            }
        }
    }, [ParentData.bentoSelected, ParentData.startLabel])

    const [colorI, setColor] = useColor('hex', '#121212')
    const [dataJ, setdataJ] = useState([
        {
            color: 'Red',
            colorCode: `#FF5858`,
        },
        {
            color: 'blue',
            colorCode: `#A4FF9C`,
        },
        {
            color: 'green',
            colorCode: `#2A8CFF`,
        },
    ])
    const [BoxNum, setBoxNum] = useState(1)

    const handleInputchange = (key, newColor) => {
        setdataJ((prevData) =>
            prevData.map((item, index) =>
                index === key ? { ...item, color: newColor } : item,
            ),
        )
        setParentData((ParentData) => ({
            ...ParentData,
            colorOrder: dataJ,
        }))
    }

    const HandleOnClickBox = (event) => {
        // event.startPropagation();
        event.preventDefault()
        setParentData((ParentData) => ({
            ...ParentData,
            startLabel: event.target.ariaLabel,
        }))
    }

    const HandleOnClickBento = (event) => {
        event.preventDefault()
        setParentData((ParentData) => ({
            ...ParentData,
            bentoSelected: event.target.ariaLabel,
        }))
        console.log(event.target.ariaLabel)
    }

    const handleColorchange = (key) => {
        setdataJ((prevData) =>
            prevData.map((item, index) =>
                index === key ? { ...item, colorCode: colorI.hex } : item,
            ),
        )
    }
    const lenGrid = [1, 2, 3, 4];

    return (
        <div className="mx-12">
            <Modal open={open} onClose={() => setopen(false)} >
                
            </Modal>
            <div className="flex flex-col">
                <h1 className="text-section-heading"> Create new Blog Post</h1>
                <p className="text-base">
                    Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida
                    augue enim.
                </p>
                <div className="py-4">
                    <p className="text-base">Title</p>
                    <input
                        className="my-2 w-[100%] rounded-md border-[0.35px] border-white bg-sm-primary px-2  py-1 focus:outline-none"
                        type="text"
                        placeholder="Title Goes Here"
                    />
                </div>

                <div>
                    <p className="text-base"> Choose Colour</p>
                    <div className="flex">
                        <div className=" h-[21rem] w-52 overflow-hidden rounded-xl ">
                            <ColorPicker color={colorI} onChange={setColor} hideHSV dark />;
                        </div>
                        <div className="mx-8 h-[21rem] w-10/12 bg-secondary">
                            <h2 className="p-2">Swatches</h2>
                            {/* create buttons where on click whill change the hex code to  that div's hex code */}
                            <div className="flex flex-wrap">
                                {Hexcodes.map((codes, i) => (
                                    <div
                                        key={i}
                                        className={` z-1 relative m-2 aspect-square w-[6vw] rounded-sm`}
                                        onClick={(e) => {
                                            e.preventDefault()

                                            console.log(e.target.style.backgroundColor)
                                        }}
                                        style={{ backgroundColor: codes }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="my-4 space-x-3  ">
                        <h2>Color Order</h2>
                        <div className="flex justify-between  rounded-[1.5rem] bg-secondary p-2 px-9 py-5">
                            {/* create a function which changes the coulour code of the key of the input text to the current input text and store it in a oject*/}
                            {/* create a function which changes the box color icon to the current 'color' hex code */}
                            {dataJ.map((val, key) => (
                                <div className="flex " key={key}>
                                    <p className="m-auto">{`${key + 1}.`}</p>
                                    <input
                                        className="m-auto w-[5vw] flex-wrap border-none bg-secondary px-2 text-lg outline-none "
                                        placeholder={`${val.color}`}
                                        onChange={(e) => handleInputchange(key, e.target.value)}
                                        name={`${val.color}`}
                                    />
                                    <div
                                        className="px-4"
                                        onClick={() => {
                                            handleColorchange(key)
                                            val.colorCode = colorI.hex

                                            console.log(dataJ)
                                        }}
                                    >
                                        <BoxIcon hexi={val.colorCode} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="">
                        <p>Choose starting point</p>
                        {/* craete a sepcific function or state which takes the input of the last clicked div and id     use Aria Label*/}
                        <div className="flex flex-row flex-wrap gap-8">
                            <div
                                className="flex w-[11vw] flex-row justify-between rounded-xl bg-secondary px-4 pb-1"
                                aria-label="1"
                                onClick={(e) => HandleOnClickBox(e)}
                                id="Box1"
                            >
                                <h1 className="py-4 text-box-heading" aria-label="1">
                                    Top Right{' '}
                                </h1>
                                <img src={TopRight} className='relative size-9 my-auto' aria-label="1" />
                            </div>
                            <div
                                className="flex w-[11vw] flex-row justify-between rounded-xl bg-secondary px-4 pb-1"
                                aria-label="2"
                                onClick={(e) => HandleOnClickBox(e)}
                                id="Box2"
                            >
                                <h1 className="py-4 text-box-heading " aria-label="2">
                                    Top Left{' '}
                                </h1>
                                <img src={TopRight}
                                    className='relative size-9 my-auto'
                                    aria-label="2"

                                />
                            </div>
                            <div
                                className="flex w-[11vw] flex-row justify-between rounded-xl bg-secondary px-4 pb-1"
                                aria-label="3"
                                onClick={(e) => HandleOnClickBox(e)}
                                id="Box3"
                            >
                                <h1
                                    className="py-4 text-box-heading "
                                    aria-label="3"
                                >
                                    Bottom Right{' '}
                                </h1>
                                <img src={TopRight}
                                    className='relative size-9 my-auto' aria-label="3" />
                            </div>
                            <div
                                className="flex w-[11vw] flex-row justify-between rounded-xl bg-secondary px-4 pb-1"
                                aria-label="4"
                                onClick={(e) => HandleOnClickBox(e)}
                                id="Box4"
                            >
                                <h1 className="py-4 text-box-heading" aria-label="4">
                                    Bottom Left{' '}
                                </h1>
                                <img src={TopRight}
                                    className='relative size-9 my-auto' aria-label="4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5 bg-secondary p-2">
                <p> Choose your Box Template</p>
                <div className="my-4 flex flex-wrap justify-evenly gap-3">
                    {/* create a button or some extra space to select and set the border image using the top class inside the useEffect hook */}
                    <button
                        aria-label="1"
                        onClick={(e) => HandleOnClickBento(e)}
                        id="BentoDiv1"
                    >
                        <BentoGrid1 />
                    </button>
                    <button
                        aria-label="2"
                        onClick={(e) => HandleOnClickBento(e)}
                        id="BentoDiv2"
                    >
                        <BentoGrid2 />
                    </button>
                    <div
                        aria-label="3"
                        onClick={(e) => HandleOnClickBento(e)}
                        id="BentoDiv3"
                    >
                        <BentoGrid3 />
                    </div>
                    <div
                        aria-label="4"
                        onClick={(e) => HandleOnClickBento(e)}
                        id="BentoDiv4"
                    >
                        <BentoGrid4 />
                    </div>
                </div>
                {/* Get the text and all the title and store it in json object on Change according to Box Number add valudation on BOX number*/}
                <div className="flex justify-between pl-4 pr-7">
                    <div className="mx-5 flex w-7/12 flex-col">
                        <p>Select Box Number</p>
                        <input
                            className="my-1 h-9 w-full rounded-md border-[1px]  border-[#D4D4D4]  bg-sm-primary px-2  outline-none focus:outline-none"
                            name="BoxNumber"
                            onChange={() => {
                                setBoxNum(this.value)
                            }}
                            value={BoxNum}
                        />
                        <p className="mt-4">Title</p>
                        <input
                            className="my-1 h-9 w-full rounded-md border-[1px]  border-[#D4D4D4]  bg-sm-primary px-2  outline-none focus:outline-none"
                            onChange={(e) => {
                                e.preventDefault()
                                ParentData.bentoCotent[BoxNum - 1].title = e.target.value
                                console.log(ParentData.bentoCotent[BoxNum - 1])
                            }}
                            value={ParentData.bentoCotent[BoxNum - 1].title}
                        />
                        <p className="mt-4">Text Goes Here</p>
                        <textarea
                            className="my-1 h-44 w-full rounded-md border-[1px]  border-[#D4D4D4] bg-sm-primary  px-2   outline-none focus:outline-none"
                            onChange={(e) => {
                                e.preventDefault()
                                ParentData.bentoCotent[BoxNum - 1].desc = e.target.value
                            }}
                            value={ParentData.bentoCotent[BoxNum - 1].desc}
                        />
                    </div>
                    {/* DO the image upload on  ParentData.bentoConten[BoxNum-1].imgUrl*/}
                    <div className="flex h-96 w-[35rem] items-center justify-center rounded-xl border-[1px] border-[#D4D4D4] bg-sm-primary mb-4">
                        <img src={upload} />
                        <p>upload Image</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-5 justify-center mb-10'>
                <div className="flex justify-center">
                    <button className="mt-10  " onClick={() => setopen(true)}>
                        <div className="text-[#8D611D] w-64 rounded-md shadow-custom bg-primary border-[#8D611D] border-2 px-3 py-3 text-center font-rubik font-medium">
                            Preview
                        </div>
                    </button>
                </div>
                <div className="flex justify-center ">
                    <button className="mt-10">
                        <div className=" w-64 rounded-md bg-gradient px-3 py-3 text-center font-rubik font-medium">
                            Upload
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddNewBlog