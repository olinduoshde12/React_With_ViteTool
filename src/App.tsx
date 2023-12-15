import React from 'react';
import './App.css';
import Card from "./components/card/card";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

class App extends React.Component<any, any>{
 /*   state = {
        count:0,
        visible:true
    };

    up = ():void => {
        this.setState({count: this.state.count + 1});
    }

    down = ():void => {
        this.setState({count: this.state.count - 1});
    }

    update = (type:String): void =>{
        switch (type) {
            case 'up':
                this.setState({count: this.state.count + 1});
                break;
            default:
                this.setState({count: this.state.count - 1});
                break;
        }
    }

 render() {
     return(
         <div className="m-5">
            <button className="inline bg-green-600 px-5" onClick={this.up}>+</button>
             <div className="inline mx-5 font-bold">{this.state.count}</div>
             <button className="inline bg-red-600 px-5" onClick={this.down}>-</button>
         </div>
     );
 }*/

    render() {
        return (
            <div>
               <Header />
                <section>
                    <div className={'grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-fit relative m-auto'}>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>

                </section>

                <Footer />

            </div>
        );
    }
}

export default App
