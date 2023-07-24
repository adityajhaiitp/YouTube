import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {AiOutlineMenu, AiOutlineSearch } from  "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { cacheResults } from '../utils/searchSlice';
import { toggleMenu } from '../utils/appSlice';
const Header = () => {
  const[searchQuery,setSearchQuery]=useState("");
  cont[suggestions,setSuggestions]=useState("");
  const searchCache=useSelector(store=>store.search);
  useEffect(()=> {
         //Api call
         // diff between Api calls is <200ms => decline Api call

    const timer=  setTimeout(()=>
    {
      if(searchCache[searchQuery])
      {
        setSuggestions(searchCache[searchQuery]);
      }
      else{
        getSearchSuggestions()},200);
      }
   
    return ()=>
    {
       clearTimeout(timer);
    };
  },[searchQuery]);

  const getSearchSuggestions=async()=>{
    const data =await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json=await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery]:json[1],
    }));

  };
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col px-5 py-2.5 shadow h-14' >
      <div className="flex col-span-1">
        <AiOutlineMenu className="h-8 cursor-pointer" onClick={()=> toggleMenuHandler()}/>
        <a href="/"> <img  className="h-8 mx-2"
            alt="youtube-logo"
            src={logo}
        /> 
        </a>

      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 h-[36px] border border-gray-200 py-2 px-5  rounded-l-full"
          value={searchQuery}
          type="text"
          onChange={(e)=>setSearchQuery(e.target.value)}
        />
        <button className="border border-gray-200 py-2 px-5 h-[36px] rounded-r-full bg-gray-100">
          <AiOutlineSearch className=''/>
        </button>
      </div>
      <div className="col-span-1">
        <FaUserCircle />
      </div>
    </div>
  )
}

export default Header