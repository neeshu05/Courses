import React from 'react'
import FilterButton from './FilterButton'
function Filter({item}) {
    const filter_container = {
        display:'flex',
        // widht:'100%',
        // flexStart:'intial',
        gap:'20px',
        // margin:'10px 500px',  
        flexWrap:'wrap',
        alignItem:'center',
        marginLeft:'33%',
        marginRight:'33%'   
    }

    function getCategory(CatergoryName){
        item(CatergoryName);
    }
  return (
    <div style = {filter_container} className='filter_container'>
        <FilterButton name = 'All' getCategory={getCategory}></FilterButton>
        <FilterButton name = 'Development' getCategory={getCategory}></FilterButton>
        <FilterButton name = 'Business' getCategory={getCategory}></FilterButton>
        <FilterButton name = 'Design' getCategory={getCategory}></FilterButton>
        <FilterButton name = 'Lifestyle' getCategory={getCategory}></FilterButton>
    </div>
  )
}

export default Filter