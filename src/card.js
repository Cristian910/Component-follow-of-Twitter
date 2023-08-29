import { useState } from 'react'

export function TwCard({username,children,initialIsFollowing}) {
  const [isFollowing,setIsFollowing] = useState(initialIsFollowing)
  
  const follow = isFollowing ?'siguiendo':'seguir'
  const btnclass = isFollowing?'following':''
  function changefollow() {
    setIsFollowing(!isFollowing)
  }
  return (
<article>
  <header>
    <img src={`https://unavatar.io/${username}`} alt={`foto de ${username}`} />
    <div className='txt'>
      <strong>{children}</strong>
      <span>@{username}</span>
    </div>
  </header>
  <aside>
    <button className={btnclass} onClick={changefollow}>
      <span className='txtfollow'>{follow}</span>
      <span className='isfollow'>dejar de seguir</span> 

    </button>
  </aside>
</article>
  );
}

export default TwCard;
