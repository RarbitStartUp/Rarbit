import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { db } from '../../firebase'
import ShopCard from '../../components/shop/ShopCard'
import Header from '../../components/Header/Header'

export default function FBookmarksList() {
  const [bookmarks, setBookmarks] = useState([])

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'bookmarks'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setBookmarks(snapshot.docs)
        }
      ),
    [db]
  )

  console.log(bookmarks)

  return (
    <div>
      <Header />
      <div className="flex">
        <div className="mx-auto flex-col space-y-3">
          {bookmarks.map((bookmark) => (
            <Link href={'/bookmarks/' + bookmark.id} key={bookmark.id}>
              <a>
                <ShopCard
                  shopName={bookmark.data().shopName}
                  categories={bookmark.data().categories}
                  location={bookmark.data().location}
                  rewardPoints={bookmark.data().rewardPoints}
                  tokenAllocations={bookmark.data().tokenAllocations}
                  imagePath={bookmark.data().imagePath}
                  imagePath1={bookmark.data().imagePath1}
                  imagePath2={bookmark.data().imagePath2}
                  imagePath3={bookmark.data().imagePath3}
                  imagePath4={bookmark.data().imagePath4}
                  timestamp={bookmark.data().timestamp}
                  email={bookmark.data().email}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div className="h-20" />
    </div>
  )
}
