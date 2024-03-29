import Image from 'next/image'
import {
  MdRoom,
  MdBookmarks,
  MdRedeem,
  MdOutlineGeneratingTokens,
} from 'react-icons/md'
import { FaVoteYea, FaCommentDots } from 'react-icons/fa'
import { useRouter } from 'next/router'
import CarouselCard from '../Carousel/CarouselCard'
import Star from '../Lottie/Star'
import { Component } from 'react'

export default function ShopCard({
  shopName,
  location,
  rewardPoints,
  categories,
  tokenAllocations,
  imagePath,
  imagePath1,
  imagePath2,
  imagePath3,
  imagePath4,
}) {
  const router = useRouter()

  return (
    // set the parent Components (in other files maybe) to "static" to avoid padding exceed the screen width and made the screen movable, "w-screen" needs to be on the same layer of the padding "pxy-"
    <div className="relative w-screen px-2 md:pl-10 ">
      <div className="relative mt-3 flex h-[26rem] flex-col rounded-2xl bg-white shadow-lg  duration-300 ease-linear dark:bg-slate-800 dark:shadow-slate-700 md:h-[28rem] md:w-[25rem]  md:rounded-2xl ">
        {/* <div className="relative basis-1/3"> */}
        {/* <div className=" absolute z-30 rounded-tl-2xl rounded-br-2xl bg-[#5865F2] pl-8 pr-8 pb-2  pt-2 font-semibold text-white">
          <h1>NEW</h1>
        </div> */}
        <div className="absolute top-7 right-7 z-30 text-white">
          <button
            className="flex flex-row items-center justify-center "
            onClick={() => {}}
          >
            <MdBookmarks className="ml-2 h-6 w-6 text-white/50 hover:text-hover" />
          </button>
          {/* <Star /> */}
        </div>
        <div className=" flex flex-col">
          <CarouselCard
            imagePath={imagePath}
            imagePath1={imagePath1}
            imagePath2={imagePath2}
            imagePath3={imagePath3}
            imagePath4={imagePath4}
          />
          {/* {imagePath && (
            <Image
              src={imagePath}
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className="md:rounded-t-2xl"
            />
          )} */}
        </div>

        <div className="relative basis-1/3"></div>
        <div className="ml-5 mb-5">
          <div className="mr-2 rounded-2xl ">
            <div className="flex max-w-6xl justify-between">
              {/* <p className=" text-md mt-0 ml-2 mr-2 text-secondary">
                {categories}
              </p> */}
            </div>

            <h1 className="text-md mt-1 ml-2 mr-2 text-primary dark:text-white">
              {shopName}
            </h1>

            <div className=" flex flex-row flex-wrap space-x-2 pt-1 pr-4 pl-2">
              <div className="mt-2 flex flex-row items-center">
                <MdRedeem size={17} className="text-miniIcon" />
                <h1 className="pl-1 text-sm text-black dark:text-white">
                  {rewardPoints + ' points'}
                </h1>
              </div>
              <div className="mt-2 flex flex-row items-center">
                <MdOutlineGeneratingTokens
                  size={17}
                  className="text-miniIcon"
                />
                <h1 className="pl-1 text-sm text-black dark:text-white">
                  {tokenAllocations + '% token'}
                </h1>
              </div>
              <div className="mt-2 flex flex-row items-center">
                <MdRoom size={17} color="red" className=" dark:text-white" />
                <h1 className="pl-1 text-sm text-black dark:text-white">
                  {location}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
