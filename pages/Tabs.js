import { Tab } from '@headlessui/react'

import { MdRedeem } from 'react-icons/md'
import { BiShoppingBag } from 'react-icons/bi'
import { RiBookMarkFill } from 'react-icons/ri'

import FShopsList from './shops/FShopsList'
import FDiscountsList from './discounts/FDiscountsList'
import FBookmarksList from './bookmarks/FBookmarksList'

import BottomTabsExplore from '../components/BottomTabs/BottomTabsExplore'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
  return (
    <div>
      <Tab.Group>
        <Tab.List className="static sticky top-0 z-20 mb-20 flex w-screen justify-around bg-white/100 md:justify-start ">
          <Tab
            className={({ selected }) =>
              classNames(
                'rounded-3xl py-2.5 text-sm  text-primary focus:outline-none ',
                selected
                  ? ' text-primary'
                  : 'text-slate-400 hover:text-primary '
              )
            }
          >
            <div className="my-1 mx-5 flex flex-row items-center justify-center">
              <BiShoppingBag className="mr-2" size={17} />
              Shops
            </div>
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'rounded-3xl py-2.5 text-sm leading-5 text-primary focus:outline-none ',
                selected ? ' text-primary' : 'text-slate-400 hover:text-primary'
              )
            }
          >
            <div className="my-1 mx-5 flex flex-row items-center justify-center">
              <MdRedeem className="mr-2" size={17} />
              Discounts
            </div>
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'rounded-3xl  py-2.5 text-sm  leading-5 text-primary focus:outline-none ',
                selected
                  ? ' text-primary '
                  : 'text-slate-400  hover:text-primary'
              )
            }
          >
            <div className="my-1 mx-5 flex flex-row items-center justify-center md:mx-5">
              <RiBookMarkFill className="mr-2" size={17} />
              Bookmarks
            </div>
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <FShopsList />
          </Tab.Panel>
          <Tab.Panel>
            <FDiscountsList />
          </Tab.Panel>
          <Tab.Panel>
            <FBookmarksList />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <BottomTabsExplore />
    </div>
  )
}

{
  /* <Tab
          className={({ selected }) =>
            classNames(
              ' rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
            )
          }
        ></Tab> */
}
