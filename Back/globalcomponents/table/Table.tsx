import DataTable, { createTheme }  from "react-data-table-component";
import testdata from './testdata.js';
import * as React from 'react';
import FilterComponent from './FilterComponent';


const columns:any = [
    {
      name: "Title",
      selector: "title",
      sortable: true
    },
    {
      name: "Directior",
      selector: "director",
      sortable: true
    },
    {
      name: "Runtime (m)",
      selector: "runtime",
      sortable: true,
      right: true
    }
  ];
  
createTheme('solarized', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#002b36',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  }, 'dark');

  
 

function Table(){

  const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);

  

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
    title="Movies"
    columns={columns}
    fixedHeader
    
    data={filteredItems}  
    pagination
    paginationResetDefaultPage={resetPaginationToggle}
    theme="solarized"
    subHeader
    subHeaderComponent={subHeaderComponentMemo}
    dense
    
  />

</div>)



}


export default Table;
