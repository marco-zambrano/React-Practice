import { TwitterFollowCard } from "./TwitterFollowCard";
import './TwitterFollowCard.css';

export function App() {

    return (
        <section className="app">
            <TwitterFollowCard  
            userName={'leo'} 
            name={'Leonel'} 
            initialIsFollowing />

            <TwitterFollowCard  
            userName={'pepsi'} 
            name={'Pepsi Company'} 
            initialIsFollowing />

            <TwitterFollowCard  
            userName={'loemargett'} 
            name={'Leo Margett'} 
            initialIsFollowing={false} />

            <TwitterFollowCard  
            userName={'curry'} 
            name={'Stephen Curry'} 
            initialIsFollowing />
        </section>
    )
}