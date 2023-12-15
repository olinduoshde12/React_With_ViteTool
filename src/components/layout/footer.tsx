import React from "react";

class Footer extends React.Component<any, any>{
    render() {
        return(
            <footer className={'bg-teal-950 text-white p-5'}>
                <img  className={'w-[100px]'} src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt=""/>
                <ul className={'mt-5'}>
                    <li>123 , Colombo Road</li>
                    <li>+97 7535 346 6446</li>
                    <li>+94 776 6768 8686</li>
                    <li>oli123@gmail.com</li>
                </ul>
                <div className={'mt-5 text-center'}>CopyRight @ 2023 Blog LK</div>
            </footer>
        );
    }
}
export default Footer;