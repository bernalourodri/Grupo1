import Dashboard from "../components/Dashboard/Dashboard_c"
import Menu from "../components/Menu/Menu"
function Dashboard_c(){
    return(
        <div>
            <Menu />
            <Dashboard_c />
        </div> 
    )
}

export default Dashboard;