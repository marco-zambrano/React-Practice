import { TwitterFollowCard } from "./TwitterFollowCard";
import './App.css';

export function App() {
    const formatUserName = (userName) => `@${userName}`;

    return (
        <section className="app">
            <TwitterFollowCard  
            formatUserName={formatUserName} 
            userName={'leo'} 
            name={'Leonel'} 
            isFollowing />

            <TwitterFollowCard  
            formatUserName={formatUserName} 
            userName={'pepsi'} 
            name={'Pepsi Company'} 
            isFollowing />

            <TwitterFollowCard  
            formatUserName={formatUserName} 
            userName={'loemargett'} 
            name={'Leo Margett'} 
            isFollowing={false} />

            <TwitterFollowCard  
            formatUserName={formatUserName} 
            userName={'curry'} 
            name={'Stephen Curry'} 
            isFollowing />
        </section>
    )
}