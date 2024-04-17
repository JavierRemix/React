export function TwitterFollowCard({ formatUserName, userName, name, isFollowing }) {

    const imagenSrc = `https://unavatar.io/${userName}`

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src={imagenSrc}
                    alt="El avatar de middudev" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}