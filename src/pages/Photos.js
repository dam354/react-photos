import React, { useContext } from 'react';
import { PicContext } from '../PicContext';
import Image from '../components/Image';
import { getClass } from '../utils';
const Photos = () => {
  const { allPics } = useContext(PicContext);
  console.log(allPics);
  const picsElement = allPics.map((img, index) => {
    return <Image key={img.id} className={getClass(index)} img={img}></Image>;
  });

  return <main className="photos">{picsElement}</main>;
};

export default Photos;
