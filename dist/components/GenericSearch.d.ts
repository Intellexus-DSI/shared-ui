import React from 'react';
interface ContentItem {
    id: string;
    text: string;
}
interface GenericSearchProps {
    content: ContentItem[];
    label?: string;
}
export declare const GenericSearch: React.FC<GenericSearchProps>;
export default GenericSearch;
