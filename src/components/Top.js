import { Header } from "semantic-ui-react"
import Gnb from "./Gnb"

export default function Top() {
    return (
        <div>
            <div style={{ display: 'flex', paddingTop: 20 }}>
                <div style={{ flex: '100px 0 0'}}>
                    <img src={'/images/인포로고.png'} alt='logo' style={{ display: 'block', width: 80 }}/>
                </div>
                <Header as="h1">고경태</Header>
            </div>
            <Gnb />
        </div>
    );
}