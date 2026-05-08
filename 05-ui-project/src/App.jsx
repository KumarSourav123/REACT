import React from 'react'
import Section1 from './components/Section1/Section1'

const App = () => {

  const users = [
    {
      img:'https://i.pinimg.com/736x/38/bd/10/38bd10063fd5a79dadde2d5d1d3a0590.jpg', 
      color:'royalblue',
      tag:'Satisfied'
    },

    {
      img:'https://i.pinimg.com/webp70/736x/55/05/cf/5505cf93ae2968bae8f99edb61220fa3.webp', 
      color:'lightseagreen',
      tag:'Underserved'
    },
    
    {
      img:'https://i.pinimg.com/webp70/1200x/52/09/f6/5209f6863f1e5a4e552bdbbc30bf20fb.webp', 
      color:'pink', 
      tag:'UnderBanked'
    },
    
    {
      img:'https://i.pinimg.com/1200x/b5/9b/13/b59b13b72af2fe9e14b243689c629630.jpg', 
      color:'red',
      tag:'Undeserved'
    }
  ];
  return (
    <div>
      <Section1 users={users}/>
    </div>
  )
}

export default App
