import React from 'react';
import GenericSearch from '../components/GenericSearch';

interface ContentItem {
  id: string;
  text: string;
}

const dummyContent: ContentItem[] = [
  { id: 'para1', text: "This is the first paragraph. It talks about react components and their usage." },
  { id: 'para2', text: "The second paragraph discusses state management in react applications." },
  { id: 'para3', text: "Here is the third paragraph, focusing on styling and Material-UI integration." },
  { id: 'para4', text: "Fourth paragraph talks about search functionality and filtering data." },
  { id: 'para5', text: "Fifth paragraph is about general web development concepts." },
];

const GenericSearchPage: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Generic Search Component Demo</h1>
      <GenericSearch content={dummyContent} label="Search Paragraphs" />
    </div>
  );
};

export default GenericSearchPage;
