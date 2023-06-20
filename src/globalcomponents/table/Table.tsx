import DataTable, { createTheme }  from "react-data-table-component";
import testdata from './testdata.js';
import * as React from 'react';
import FilterComponent from './FilterComponent';

import { downloadXLS } from "./DownloadXLSX.js";
import { ExportComponent } from './ExportComponent';
import { Button } from "react-bootstrap";
import { RiMotorbikeFill } from "react-icons/ri";




  
 

function Table({handleNewBike}:any){

  const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);

  
const columns:any = [
  {
    name: "Nombre",
    selector: "firstName",
    sortable: true
  },
  {
    name: "Apellido",
    selector: "lastName",
    sortable: true
  },
  {
    name: "Sexo",
    selector: "sex",
    sortable: true,
  
  },
  {
  button: true,
  cell: (row:any) => (
    <Button className="btnBike" onClick={(e) => {
      handleNewBike()
    }}> <RiMotorbikeFill/> </Button>
  )
}
];

createTheme('solarized', {
  text: {
    primary: '#FFFFFF',
  
  },
  title:{
  default:'red'
  },
  background: {
    default: '#343C48'
  },
  context: {
    
    text: '#FFFFFF',
  },
  divider: {
    default: '#073642',
  },
  striped: {
    default:  '#343b45'
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
   
  },
}, 'dark');

  const actionsMemo = React.useMemo(() => <ExportComponent onExport={() => downloadXLS(filteredItems)} />, []);

	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={(e:any) => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);


  const filteredItems = testdata.filter(
    item =>
      JSON.stringify(item)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
  );

  return(<div className="App">
     
  <DataTable
    columns={columns}
    fixedHeader
    actions={actionsMemo}
    data={filteredItems}  
    pagination
    paginationResetDefaultPage={resetPaginationToggle}
    theme="solarized"
    subHeader
    subHeaderComponent={subHeaderComponentMemo}
    dense
    striped

    
  />

</div>)



}


export default Table;
