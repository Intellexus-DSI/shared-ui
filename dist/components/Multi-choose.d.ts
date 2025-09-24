interface Option {
    label: string;
    code: string;
}
interface MultiSelectCollectionsProps {
    options: Option[];
    label?: string;
}
export declare const MultiSelectCollections: React.FC<MultiSelectCollectionsProps>;
export {};
