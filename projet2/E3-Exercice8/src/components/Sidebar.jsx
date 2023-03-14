import styled from 'styled-components';
const SidebarWrapper = styled.div`  
min-height: calc(100vh - 64px);
padding: 24px;` 
const Sidebar = () => {
  return <div className="sidebar"><SidebarWrapper></SidebarWrapper></div>;
};

export default Sidebar;
