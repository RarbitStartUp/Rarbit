import { FaPlay } from 'react-icons/fa'

function VoteButton() {
  return (
    <div>
      <div className="mt-10 flex flex-row ">
        <button
          onClick={() => router.push('../Vote')}
          className=" flex flex-row items-center justify-center  rounded-xl bg-[#5865F2] pt-2 pb-2 pl-6 pr-10 shadow-md shadow-[#5865f28a] duration-300 ease-linear hover:bg-[#424bb6] md:m-2"
        >
          <FaPlay className="animate-ping" size={10} color="#fff" />
          <h1 className="text-md flex pl-4 font-semibold text-white">
            Vote for more Reward Points
          </h1>
        </button>
      </div>
    </div>
  )
}

export default VoteButton
