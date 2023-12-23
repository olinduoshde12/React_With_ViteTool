import React from 'react';
import './App.css';
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Home from "./views/home";
import Login from "./views/login";
import Signup from "./views/signup";
import Editor from "./views/editor";
import MyArticles from "./views/my-articles";
import { BrowserRouter, Route, Routes } from "react-router-dom";


interface Props{
}

interface State {
    count:number;
}


class App extends React.Component<Props, State>{

    /*counstrucot complecity eka hide karanava*/
    state = {
        count:0,
    };


    up = ():void => {
        this.setState({count: this.state.count + 1});
    }


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
    /*        <div>
               <Header />
               {/!* <Home />*!/}
                <Login />
                {/!*<div className={'text-center m-5'}>
                    <div className={'text-2xl font-bold'}>{this.state.count}</div>
                    <br/>
                    <button className={'bg-green-600 text-white p-5'} onClick={this.up}>click</button>
                </div>*!/}
                <Footer />
{/!*
                {
                    this.state.count > 0 ? null: <Card title={"Hello"} content={"Lorem ipsum dolor sit amet."}/>
                }*!/}



            </div>*/
            <div>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/login"} element={<Login />}/>
                        <Route path={"/signup"} element={<Signup />}/>
                        <Route path={"/editor"} element={<Editor />}/>
                        <Route path={"/my-articles"} element={<MyArticles />}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </div>

        );
    }
}

export default App
