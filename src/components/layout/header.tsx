import React from "react";

class Header extends React.Component<any, any>{
    render() {
       return(
           <header>
               <nav className={'flex justify-between items-center bg-green-100 p-5'}>
                   <img  className={'w-[100px]'} src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt=""/>
                   <ul className={'flex gap-[4vw]'}>
                       <li>Articles</li>
                       <li>Your Articles</li>
                       <li>Write New Articles</li>
                       <li>Create An Account / Login</li>
                   </ul>
               </nav>
           </header>
       );
    }
}

export default Header;