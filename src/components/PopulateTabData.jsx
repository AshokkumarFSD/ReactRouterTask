import NavTabs from "./NavTabs"
import SingleCard from "./SingleCard"

// Populate tab related data with active state
export default function TabData({ activeTab, displayData }) {
    return (
        <div>
            <NavTabs activeTab={activeTab}></NavTabs>
            <div className='card_coordinator'>
                {
                    displayData.map((val) => (
                        <SingleCard key={val.id} details={val}></SingleCard>
                    ))
                }
            </div>
        </div>
    )
}