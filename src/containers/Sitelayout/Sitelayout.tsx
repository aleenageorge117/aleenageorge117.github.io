import React from 'react';
import RouteLists from '../../routes/RouteLists';

//COMPONENTS
import NavSidePanel from '../../components/NavSidePanel/NavSidePanel';
import Footer from '../../components/Footer/Footer';

// SCSS
import "./Sitelayout.scss";

const SiteLayout = () => {
    return (
        <div>
            <NavSidePanel />
            <RouteLists />
            {/* <Footer /> */}
        </div>
    );
}

export default SiteLayout;
