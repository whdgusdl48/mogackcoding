import React,{useCallback} from 'react';
import NewsList from './NewsList';
import Categories from './Categories';
const App = () => {
  const [category,setCategory] = React.useState('all');
  const onSelect = useCallback((category) =>{
    return(
      setCategory(category)
    )
  },[]);
  return(
    <>
    <Categories onSelect={onSelect} category={category}/>
    <NewsList category={category} />
    </>
    
  )
}

export default App;
