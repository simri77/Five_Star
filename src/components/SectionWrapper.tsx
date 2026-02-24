import { Container } from 'react-bootstrap';
import React from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
}

function SectionWrapper({ title, children }: Props) {
  return (
    <section className="section-wrapper">
      <Container fluid="lg">
        <h2 className="section-title text-center">{title}</h2>
        {children}
      </Container>
    </section>
  );
}

export default SectionWrapper;