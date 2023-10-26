import React from 'react';
import Button from './Button';

// const list = ["All", "Gaming", "Songs", "Live", "Cricket", "News", "Cooking", "Cartoons", "Movies", "Coding", "JavaScript"];

const ButtonList = () => {
  return (
    <div className='flex flex-wrap max-w-full overflow-x-auto'>
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Cricket" />
      <Button name="News" />
      <Button name="Cooking" />
      <Button name="Cartoons" />
      <Button name="Movies" />
      <Button name="programming" />
      <Button name="coding" />
      <Button name="Development" />
      <Button name="Popular" />
      {/* {
      list.map((item) => (
        <Button key={item.id} item={item} />
      ))
      } */}
    </div>
  )
}

export default ButtonList;