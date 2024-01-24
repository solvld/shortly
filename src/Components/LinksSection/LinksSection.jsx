import React, { useState, useEffect } from 'react';
import InputField from '../InputField/InputField';
import LinkCard from '../LinkCard/LinkCard';
import shortenUrlBitly from '../../shorterUrl';

function LinksSection() {
  const [linksList, setLinksList] = useState([]);
  const [shortLink, setShortLink] = useState('');
  const addLink = (newLink) => setLinksList((prev) => [newLink, ...prev]);

  useEffect(() => {
    if (linksList.length > 0) {
      const fetchData = async () => {
        try {
          const data = await shortenUrlBitly(linksList[0]);
          setShortLink(data);
          console.log(data);
        } catch (error) {
          console.error('Ошибка при получении данных:', error);
        }
      };
      fetchData();
    }
  }, [linksList]);
  return (
    <section className="px-20 bg-light-gray h-screen">
      <InputField addLink={addLink} />
      <div>
        {linksList.map((item) => (
          <LinkCard key={Date.now()} shortLink={shortLink}>
            {item}
          </LinkCard>
        ))}
      </div>
    </section>
  );
}

export default LinksSection;
