import React from "react";

interface Props {
    title?:string,
    content?:string
}
interface State{

}

class Card extends React.Component<Props, any>{


    constructor(props) {
        super(props);
        this.state = {count: 0}
        console.log("Hello Constructor");
    }

    static getDerivedStateFromProps(Props,State){
        console.log("-----getDerivedStateFromProps");
        return null;
    }
    componentDidMount(): void {
        console.log("-----componentDidMount");
    }
    componentWillUnmount(): void {
        console.log("----componentWillUnmount");
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any):boolean {
        console.log("------componentDidUpdate")
        return true;
    }
    getSnapshotBeforeUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>): boolean {
        console.log("------------getSnapshotBeforeUpdate");
        return true;
    }

    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
        console.log("-----shouldComponentUpdate");
        return true;
    }

    render() {
        return (
            <div className={'w-72 p-5 border-solid border-2 m-5'}>
                <h1 className={'text-2xl font-bold'}>{this.props.title}</h1>
                <p className={'my-5'}>{this.props.content}</p>
                <button className={'bg-green-600 p-2 text-white'}>Read More....</button>
            </div>
        );
    }
}
export default Card;