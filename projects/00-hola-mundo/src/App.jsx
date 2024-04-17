import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

    const formatUserName = (userName) => `@${userName}`

    return (
        <section className='App'>
            <TwitterFollowCard
                formatUserName={formatUserName}
                isFollowing userName={"JavierRemix"}
                name={"Javier Alburges"} />
            <TwitterFollowCard
                formatUserName={formatUserName}
                isFollowing={false}
                userName={"midudev"}
                name={"Miguel Angel"} />
            <TwitterFollowCard
                formatUserName={formatUserName}
                isFollowing={true}
                userName={"Wuanger"}
                name={"Wuanger Nuñes"} />
            <TwitterFollowCard
                formatUserName={formatUserName}
                isFollowing={false}
                userName={"Jose"}
                name={"Jose Lozano"} />
        </section>

    )

}