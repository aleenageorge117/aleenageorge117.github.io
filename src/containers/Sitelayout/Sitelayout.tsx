import React from 'react';
import RouteLists from '../../routes/RouteLists';

//COMPONENTS
import NavSidePanel from '../../components/NavSidePanel/NavSidePanel';

// SCSS
import "./Sitelayout.scss";

const SiteLayout = () => {
    return (
        <div>
            <NavSidePanel />
            <RouteLists />
        </div>
    );
}

export default SiteLayout;
