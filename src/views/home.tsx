// @ts-ignore
import React, {useEffect, useState} from "react";
import Card from "../components/card/card";
import axios from "axios";


interface Data{
    id: number,
    title:string,
    body:string
}



/*const data: Data[] = [
    {
        id:1,
        title:'ijse',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate fugiat harum laudantium, officia possimus! Accusantium dignissimos facere fuga illo mollitia nemo non officiis, provident quisquam vitae! Exercitationem, fugiat, quo!'
    },
    {
        id:2,
        title:'JavaScript',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate fugiat harum laudantium, officia possimus! Accusantium dignissimos facere fuga illo mollitia nemo non officiis, provident quisquam vitae! Exercitationem, fugiat, quo!'
    },
    {
        id:3,
        title:'TypeScript',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate fugiat harum laudantium, officia possimus! Accusantium dignissimos facere fuga illo mollitia nemo non officiis, provident quisquam vitae! Exercitationem, fugiat, quo!'
    },
    {
        id:4,
        title:'Node Js',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate fugiat harum laudantium, officia possimus! Accusantium dignissimos facere fuga illo mollitia nemo non officiis, provident quisquam vitae! Exercitationem, fugiat, quo!'
    }
];*/
function Home ():JSX.Element{

    const [data, setData] = useState<Data[]>([]);



    const fetchData = (): void => {
       /* fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json()).then(result => {

            console.log(result);
            this.setState({data: result});
        }).catch(err => {
            console.log(err);
        })*/


        /*using axios*/
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response =>{
            console.log(response.data);
            setData(response.data);
        }).catch(err =>{
            console.log(err);
        })
    }

        useEffect(() =>{

            fetchData();
            console.log("called");

        },[]);


        return (
            <section>
                <div className={'grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-fit relative m-auto'}>
                    {
                        data.map((value) => {
                            return <Card title={value.title} content={value.body}/>
                        })
                    }
                </div>

            </section>
        );

}

export default Home;