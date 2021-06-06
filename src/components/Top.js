import { Header } from "semantic-ui-react"
import Gnb from "./Gnb"

export default function Top() {
    return (
        <div>
            <img src={'/images/인포로고.png'} alt='logo'/>
            <Header as="h1">부산판다</Header>
            <Gnb />
        </div>
    );
}