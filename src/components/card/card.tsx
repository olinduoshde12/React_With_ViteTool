import React from "react";

class Card extends React.Component<any, any>{
    render() {
        return (
            <div className={'w-72 p-5 border-solid border-2 m-5'}>
                <h1 className={'text-2xl font-bold'}>Learn TypeScript(+React)</h1>
                <p className={'my-5'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    At deserunt error, est eum, expedita illo iure magnam minus modi nemo
                    nihil nisi numquam omnis provident quo rem repellat suscipit veniam.</p>
                <button className={'bg-green-600 p-2 text-white'}>Read More....</button>
            </div>
        );
    }
}
export default Card;