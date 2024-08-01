import { useNavigate } from "react-router-dom"

// To navigate separate component created
export default function NavTabs({ activeTab }) {

    const navigate = useNavigate();

    const tabData = [{
        tabId: 1,
        tabName: "All"
    },
    {
        tabId: 2,
        tabName: "Full Stack Development"
    },
    {
        tabId: 3,
        tabName: "Data Science"
    },
    {
        tabId: 4,
        tabName: "Cyber Security"
    },
    {
        tabId: 5,
        tabName: "Careers"
    }]

    // To handle the tab selection
    function handleTabSelection(item) {
        const tablId = item.tabId;
        if (tablId == 1) {
            navigate("/")
        }
        else if (tablId == 2) {
            navigate("/FullStackBlog")
        }
        else if (tablId == 3) {
            navigate("/DataScienceBlog")
        }
        else if (tablId == 4) {
            navigate("/CyberSecurityBlog")
        }
        else if (tablId == 5) {
            navigate("/CareersBlog")
        }
    }

    return (
        <div role="tablist" className="tabs tabs-bordered tabs-lg tab_container">
            {tabData.map((val) => (
                <SingleTab key={val.tabId} item={val} activeTab={activeTab} handleTabSelection={handleTabSelection}></SingleTab>
            ))}
        </div>
    )
}

// To display the single tab 
function SingleTab({ item, activeTab, handleTabSelection }) {
    const classStyle = (activeTab == item.tabId) ? "tab tab-active tab_text_selected" : "tab tab_text"
    return (
        <a role="tab" className={classStyle} onClick={() => handleTabSelection(item)}>{item.tabName}</a>
    )
}

