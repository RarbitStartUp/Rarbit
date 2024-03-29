// import Image from 'next/image'
import { useState } from 'react'
import Swipe from 'react-easy-swipe'
import { FaCommentDots, FaVoteYea } from 'react-icons/fa'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import {
  MdRoom,
  MdRedeem,
  MdBookmarks,
  MdOutlineGeneratingTokens,
} from 'react-icons/md'
import { useRouter } from 'next/router'
import CarouselDetail from '../Carousel/CarouselDetail'
import ImageGallery from '../ImageGallery'
import BackButtonDetailPage from '../BackButton/BackButtonDetailPage'

export default function ShopDetail({
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
  description,
}) {
  const router = useRouter()

  return (
    <div>
      <div className="fixed top-3 z-20 flex flex-row justify-between ">
        <BackButtonDetailPage />
      </div>

      {/* <div className="w-[20.5rem]basis-2/3 md:h-[20.5rem]border-2 mt-3 h-[30rem] rounded-2xl border-white shadow-md"> */}
      <CarouselDetail
        imagePath={imagePath}
        imagePath1={imagePath1}
        imagePath2={imagePath2}
        imagePath3={imagePath3}
        imagePath4={imagePath4}
      />
      <div>
        {/* {imagePath && (
          <Image
            src={imagePath}
            alt="thumbnail"
            width={600}
            height={400}
            // layout="fill"
            objectFit="cover"
            className="h-30 w-30"
          />
        )} */}
      </div>

      <div className="ml-5">
        {/* ShopName and Categories */}
        <div className="mr-5 flex max-w-6xl justify-between">
          {/* <p className="mt-3 mr-2 ml-2 mb-1 text-lg font-bold text-secondary">
            {categories}
          </p> */}
          <h1 className="text-md mb-1 mt-3 ml-2 mr-2  text-primary dark:text-white">
            {shopName}
          </h1>
          {/* Icons Buttons */}
          <div className="mt-2 mr-1 flex flex-row items-center justify-end space-x-4">
            <button
              className=" flex flex-row items-center justify-center "
              onClick={() =>
                router.push('../../discountsAvailable/FDiscountsAvailableList')
              }
            >
              <MdRedeem className=" h-5 w-5 text-icon hover:text-hover" />
            </button>
            <button
              className=" flex flex-row items-center justify-center "
              onClick={() => {}}
            >
              <FaCommentDots className="ml-2 h-5 w-5 text-icon hover:text-hover" />
            </button>
            <button
              className=" flex flex-row items-center justify-center "
              onClick={() => router.push('../Vote')}
            >
              <FaVoteYea className="ml-2 h-5 w-5 text-icon hover:text-hover" />
            </button>
            <button
              className=" flex flex-row items-center justify-center "
              onClick={() => {}}
            >
              <MdBookmarks className="ml-2 h-5 w-5 text-icon hover:text-hover" />
            </button>
          </div>
        </div>
        {/* <h1 className="text-md mb-1 mt-2 ml-2 mr-2  text-primary dark:text-white">
          {shopName}
        </h1> */}

        {/* Subtile Details */}
        <div className="flex-wrapspace-x-2 mt-2 flex flex-row">
          <div className="m-2 flex flex-row items-center">
            <MdRedeem size={20} className="text-miniIcon" />
            <h1 className="pl-1 text-sm dark:text-white">
              {rewardPoints + ' points'}
            </h1>
          </div>
          <div className="m-2 flex flex-row items-center">
            <MdOutlineGeneratingTokens size={20} className="text-miniIcon" />
            <h1 className="pl-1 text-sm dark:text-white">
              {tokenAllocations + ' % token'}
            </h1>
          </div>
          <div className="m-2 flex flex-row items-center">
            <MdRoom size={20} color="red" className="dark:text-white" />
            <h1 className="pl-1 text-sm dark:text-white">{location}</h1>
          </div>
        </div>

        {/* <p className="text-md m-2 font-bold text-third">Shop Description</p> */}
        <p className="m-2 text-sm text-slate-400 dark:text-white">
          {description}
        </p>
      </div>
      <ImageGallery
        imagePath={imagePath}
        imagePath1={imagePath1}
        imagePath2={imagePath2}
        imagePath3={imagePath3}
        imagePath4={imagePath4}
      />
    </div>
  )
}
