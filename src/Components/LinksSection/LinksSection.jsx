import React, { useState, useEffect } from 'react';
import InputField from '../InputField/InputField';
import LinkCard from '../LinkCard/LinkCard';
import shortenUrlBitly from '../InputField/shorterUrl';

function LinksSection() {
  const [linksList, setLinksList] = useState([])
  const [shortLink, setShortLink] = useState('')
  const addLink = (newLink) => setLinksList(prev => [newLink, ...prev]);

//setshort link записывает функцию промис, компонент Link не может принимать промис чдля рендера
  useEffect(() => {
    if(linksList.length > 0){
      async () => {
        const data = await shortenUrlBitly(linksList[0])
        setShortLink(data)
      }
    }
  },[linksList])
  return (
    <section className="px-20 bg-light-gray h-screen">
      <InputField addLink={addLink} />
      <div>
        {linksList.map((item) => (
          <LinkCard key={Date.now()} shortLink={shortLink} >{item}</LinkCard>
        ))}
      </div>
    </section>
  );
}

export default LinksSection;
