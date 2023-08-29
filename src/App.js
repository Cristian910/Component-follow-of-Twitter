import './App.css'
import { TwCard } from './card.js'

const users = [
    {userName :"CruzCafune",
    name:"cruzi",
    isFollowing:true
},
{userName :"VastySSJ",
name:"Vasty",
isFollowing:false
},
{userName :"asan_yf",
name:"Asan",
isFollowing:true
}
]

export function App () {
    return (
      <section className='App'>
      <span className='maybe'>Tal vez te guste</span>
      {users.map(({userName,name,isFollowing}) => 
        <TwCard 
            key={userName}
            username={userName}
            initialIsFollowing={isFollowing}
        >
            {name}
        </TwCard>
      )}
      </section>
    )
}