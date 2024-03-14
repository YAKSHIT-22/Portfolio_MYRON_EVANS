import { useEffect } from 'react'

const FrontBentoGrid4 = () => {

    const divData = [
        {
            id: 1,
            title: "First Title",
            desc: "First Description",
            imageUrl: "url('https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D')",
            borderColor: "#ff0000"
        },

        {
            id: 2,
            title: "Second Title",
            desc: "Second Description",
            imageUrl: "url('https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg')",
            borderColor: "#0000ff"
        },

        {
            id: 3,
            title: "Third Title",
            desc: "Third Description",
            imageUrl: "url('https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg')",
            borderColor: "#00ff00"
        },

        {
            id: 4,
            title: "Fourth Title",
            desc: "Fourth Description",
            imageUrl: "url('https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=')",
            borderColor: "#ffff00"
        },

        {
            id: 5,
            title: "Fifth Title",
            desc: "Fifth Description",
            imageUrl: "url('https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg')",
            borderColor: "#800080"
        },

        {
            id: 6,
            title: "Sixth Title",
            desc: "Sixth Description",
            imageUrl: "url('https://cdn.pixabay.com/photo/2018/04/12/18/13/sunset-3314275_1280.jpg')",
            borderColor: "#ffa500"
        }
        ,
        {
            id: 7,
            title: "Seventh Titele",
            desc: "Desc seven lorum posum",
            imageUrl: "url('https://t4.ftcdn.net/jpg/04/84/47/27/360_F_484472702_acpl3SZTBwb2Al4ZiW8VusICp7Utl8ed.jpg')",
            borderColor: ""
        }
        ,
        {
            id: 8,
            title: "Eidth Title",
            desc: " Lorun posum in the form of a string with the",
            imageUrl: "url('https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
            borderColor: ""
        }
        ,
        // {
        //     id: 9,
        //     title: "Nineth Title",
        //     desc: "linear interpolation between    colors and indices",
        //     imageUrl: "url('https://pixlr.com/images/index/ai-image-generator-two.webp')",
        //     borderColor: ""
        // }
        // ,
        // {
        //     id: 10,
        //     title: " Tenth Title",
        //     desc: " subtitle title for the first image generator  ",
        //     imageUrl: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRim43FOsSU9F-TXSSABOeBOKxC2UPRthwJRA&usqp=CAU')",
        //     borderColor: ""
        // }
        // ,
        // {
        //     id: 11,
        //     title: "Eleventh Title",
        //     desc: "  eleventh title for the  first time ",
        //     imageUrl: "url('https://avatars.mds.yandex.net/i?id=b507a2b8d9382967a186c654f1eeaa74-5262078-images-taas-consumers&n=27&h=480&w=480')",
        //     borderColor: ""
        // }
    ];



    // var bg_data_and_title = [
    //     {
    //         id: 1,
    //         title: "First Title",
    //         desc: "First Description",
    //         imgaeUrl: "",
    //         borderColor: "",  
    //     }
    // ]
    useEffect(() => {
        for (var i = 1; i <= 8; i++) {
            const AddBgAndBorder = document.getElementById(`div${i}`)
            console.log(AddBgAndBorder)
            AddBgAndBorder.style.backgroundImage = `${divData[i - 1].imageUrl}`
            AddBgAndBorder.style.border = `1.5px solid ${divData[i - 1].borderColor}`
        }
    })



    return (

        <div className='my-10 relative'>
            <div className='flex justify-center mt-2'>
                <div>
                    <div className='flex '>
                        <div className=' aspect-[169/70] w-[19.5vw] bg-sm-primary mx-2 rounded-xl bg-cover ' key={1} id="div1"></div>
                        <div className=' w-[9.3vw] aspect-square bg-sm-primary mx-2 rounded-xl bg-cover' key={2} id="div2"></div>
                    </div>
                    <div className='flex mt-4' >
                        <div>
                            <div className=' w-[9.3vw] aspect-[8/7] bg-sm-primary mx-2 rounded-xl bg-cover' key={3} id="div3"></div>
                            <div className=' w-[9.3vw] aspect-[8/7] bg-sm-primary mx-2 rounded-xl mt-4 bg-cover' key={4} id="div4"></div>
                        </div>
                        <div className=' w-[19.5vw] aspect-[53/47] bg-sm-primary mx-2 rounded-xl bg-cover' key={5} id="div5"></div>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div className='flex flex-col justify-center mt-4'>
                <div className='flex justify-center'>
                    <div className='w-[29.5vw] aspect-[99/40] bg-sm-primary  rounded-xl bg-cover' key={6} id="div6"></div>
                </div>
                <div className='flex justify-center'>
                    <div className=' w-[10.2vw] aspect-[9/6] bg-sm-primary  rounded-xl mt-4 bg-cover' key={7} id="div7"></div>
                    <div className=' w-[18.2vw] aspect-[27/8] bg-sm-primary pl-3 rounded-xl ml-4 mt-4 bg-cover' key={8} id="div8"></div>
                </div>
            </div>
        </div>


    )
}

export default FrontBentoGrid4