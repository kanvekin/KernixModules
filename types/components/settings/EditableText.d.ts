interface EditableTextProps {
    value: string;
    onChange: (newValue: string) => void;
    className?: string;
}
export declare function EditableText({ value, onChange, className }: EditableTextProps): import("react").JSX.Element;
export {};
