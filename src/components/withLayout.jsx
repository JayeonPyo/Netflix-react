import React from 'react';
import Banner from "./Banner"





const withLayout = Page => {
return () => (
    <>

<Banner></Banner>
<Page></Page>
</>


);
};




export default withLayout;