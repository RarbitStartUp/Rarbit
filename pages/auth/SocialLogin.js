import { useRouter } from 'next/router'
import SignIn from './SignIn'
import { getProviders, signIn } from 'next-auth/react'

// Server ( SSR )
export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}

export default function SocialLogin({ providers }) {
  const router = useRouter()

  const array = [
    {
      type: 'Twitter',
      icon: '/img/social/twitter.svg',
      //   provider: () => router.push('/Reward'),
    },
    {
      type: 'Google',
      icon: '/img/social/google.svg',
      //   provider: () => router.push('/Reward'),
      provider: () => {
        signIn('google', { callbackUrl: '/Reward' })
      },
      //   provider: () => {
      //     SignIn()
      //   },
    },
    {
      type: 'Meta',
      icon: '/img/social/facebook.svg',
      provider: () => signIn('facebook'),
    },
  ]

  return (
    <>
      <div className="mb-0 rounded-t px-6 pt-6">
        <div className="mb-3 text-center">
          <h6 className="text-sm font-bold text-gray-600">Sign in with</h6>
        </div>
        <div className="btn-wrapper text-center">
          {array.map((social) => (
            <button
              className="mr-2 mb-1 inline-flex items-center rounded bg-white px-2 py-2 text-xs font-bold uppercase text-gray-800 shadow outline-none hover:shadow-md focus:outline-none active:bg-gray-100"
              type="button"
              onClick={social.provider}
              //   onClick={SignIn}
            >
              <img alt={social.type} src={social.icon} />
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
