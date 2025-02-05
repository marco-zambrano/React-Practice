import { useState } from "react";

export function TwitterFollowCard ({ userName, name, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    
    const btnText = isFollowing ? 'Following' : 'Follow';
    const btnClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img src={`https://unavatar.io/x/${userName}`} alt={`El avatar de ${userName}`} className='tw-followCard-avatar'/>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
    
            <aside className='tw-followCard-aside'>
                <button className={btnClassName} onClick={handleClick}>
                    {btnText}
                </button>
            </aside>
        </article>
        )
}