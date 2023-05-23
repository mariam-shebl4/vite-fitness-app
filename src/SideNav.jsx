import { Link } from "react-router-dom"

const SideNav = () => {
  return (
    <div>
      <aside className="aside">
                <div className="top-left">
                    <div className="logo"></div>
                    
                </div>
                <div className="side-bar">
                  
                    <Link to="/client">Clint</Link>

                    <Link to="/class">Class</Link>
                        
                    
<a  onClick={()=>history.back()}  style={{cursor:"pointer"}}>Back</a>
                    
                        
                    
                    
                    
                    
                    
                </div>

                
        </aside>
    </div>
  )
}

export default SideNav
