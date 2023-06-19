type ExportProps = {
    onExport: React.MouseEventHandler<HTMLButtonElement>;
  } & JSX.IntrinsicElements["button"];
  
  export const ExportComponent = ({ onExport, ...props }: ExportProps) => (
    <button {...props} onClick={onExport}>
      Export
    </button>
  );