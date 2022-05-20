import Image from 'next/image'
import { FaCommentDots } from 'react-icons/fa'
import { MdRedeem } from 'react-icons/md'
import CarouselCard from '../../pages/CarouselCard'
import { useRouter } from 'next/router'

export default function DiscountsCard({
  imagePath,
  imagePath1,
  discountName,
  rewardPointsGain,
}) {
  const router = useRouter()

  return (
    <div className="mt-3  flex h-[28rem] w-screen grid-cols-2 flex-col  rounded-2xl bg-white  shadow-lg duration-300 ease-linear dark:bg-slate-800 dark:shadow-slate-700 md:h-[25rem] md:w-[28rem] ">
      <div className=" relative h-full w-full  basis-2/3 rounded-2xl ">
        {/* <div className=" absolute z-10 rounded-tl-2xl rounded-br-2xl bg-[#5865F2] pl-8 pr-8 pb-2  pt-2 font-semibold text-white">
          <h1>NEW</h1>
        </div> */}
        <div className="relative h-full w-full rounded-2xl border-0 border-white">
          <CarouselCard imagePath={imagePath} imagePath1={imagePath1} />

          {/* {imagePath && (
            <Image
              src={imagePath}
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className=" rounded-2xl"
            />
          )} */}
        </div>
      </div>

      <div className=" mr-2 rounded-2xl ">
        <div className="mr-5 ml-5 flex max-w-6xl justify-between">
          <p className="mt-3 mr-2  mb-1 text-lg font-bold text-primary">
            {discountName}
          </p>
          {/* Icons Buttons */}
          <div className="mt-3 mr-1 flex flex-row items-center justify-end space-x-4">
            <button
              className=" flex flex-row items-center justify-center "
              onClick={() =>
                router.push('../../discountsAvailable/FDiscountsAvailableList')
              }
            >
              <FaCommentDots className=" h-6 w-6 text-icon hover:text-hover" />
            </button>
          </div>
        </div>

        <div className=" flex flex-row flex-wrap justify-between pt-1 pr-4 pl-5">
          <div className="flex flex-row items-center">
            <MdRedeem className="text-miniIcon" size={17} />
            <h1 className="pl-2 text-sm dark:text-white">
              {rewardPointsGain + ' reward points gained per consumption'}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
