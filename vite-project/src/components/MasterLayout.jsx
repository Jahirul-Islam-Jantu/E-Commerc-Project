import React from 'react';
import PageNavbar from './PageNavbar';
import Footer from './Footer';

const MasterLayout = (props) => {
    return (
        <div>
            <PageNavbar />
           {props.children}
           <Footer />
        </div>
    );
};

export default MasterLayout;