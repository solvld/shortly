import React from 'react';
import InputField from '../InputField/InputField';
import LinkCard from '../LinkCard/LinkCard';

function LinksSection() {
  return (
    <section className="px-20 bg-light-gray h-screen">
      <InputField />
      <div>
        <LinkCard>http://input.field</LinkCard>
        <LinkCard>http://input.field</LinkCard>
        <LinkCard>http://input.field</LinkCard>
      </div>
    </section>
  );
}

export default LinksSection;
