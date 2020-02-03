import React ,{useState,useEffect}from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
    box-sizing : border-box;
    padding-bottom:3rem;
    width:768px;
    margin : 0 auto;
    margin-top : 2rem;
    @media screen and (max-width : 768px){
        width : 100%;
        padding-left : 1rem;
        padding-right : 1rem;
    }
    `;

const NewsList = ({category}) =>{
    const [data,setData] = React.useState(null);
    const [loading,setLoading] = React.useState(false);

    useEffect(()=>{
        const fetchData = async () =>{
            setLoading(true);
            try{
                const query = category === 'all' ? '' : `&category=${category}`;
                const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=ec5d9e337c8040f8a306c11791592485`,
                )
                setData(response.data.articles);
            }
            catch(e){
                console.log(e)
            }
            setLoading(false);
        };
        fetchData();
    },[category]);

    if(loading){
        return(
            <NewsListBlock>대기중....</NewsListBlock>
        )
    }

    if(!data){
        return null;
    }
    return(
        <NewsListBlock>
        {data.map((article) => {
                return(
                    <NewsItem article={article} />
                )
            }        
        )}
        </NewsListBlock>
    )
}

export default NewsList;