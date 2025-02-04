import './TwitterFollowCard.css';

export function TwitterFollowCard ({userName, name, isFollowing, formatUserName}) {
    
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img src={`https://unavatar.io/x/${userName}`} alt={`El avatar de ${userName}`} className='tw-followCard-avatar'/>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
    
            <aside className='tw-followCard-aside'>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
        )
}