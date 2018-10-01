import { Component, OnInit , ViewChild} from '@angular/core';
import { GetPayrollByDateService } from '../../shared/payroll/get-payroll-by-date.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';
import "ag-grid-enterprise";
declare var $: any;
@Component({
  selector: 'app-payroll-center',
  templateUrl: './payroll-center.component.html',
  styleUrls: ['./payroll-center.component.css']
})
export class PayrollCenterComponent implements OnInit {
  //topOptions: GridOptions;
  private rowData: any[];
  private columnDefs;
  private paginationPageSize;
  private paginationNumberFormatter;
  private gridApi;
  private gridColumnApi;
  private gridApi2;
  private gridColumnApi2;


  private rowData1;
  private columnDefs1;
  private defaultColDef1;

  private rowData2;
  private columnDefs2;
  private defaultColDef2;
  private gridApi1;
  private detailCellRendererParams;
  private components;
  

  topOptions = {alignedGrids: []};
  bottomOptions = {alignedGrids: []};

  topOptions2 = {alignedGrids: []};
  bottomOptions2 = {alignedGrids: []};

    @ViewChild('topGrid') topGrid;
    @ViewChild('bottomGrid') bottomGrid;

  constructor(private getPayrollByDateService :GetPayrollByDateService,private http: HttpClient) {
    this.paginationPageSize = 4;
    this.paginationNumberFormatter = function(params) {
      return "[" + params.value.toLocaleString() + "]";
    };

    let params = new HttpParams();
    params = params.append('locationAliasId', "00000010");
    params = params.append('divisionAliasId', "00000001");

    http.get<any>('http://axdweb01:7002'+'/api/v2/Companies/00010029/Departments', {params: params}).subscribe((data : any[])=>{
      
       this.createClumns(data);   
    },
    (err : HttpErrorResponse)=>{
      // this.isLoginError = true;
    });
  

    this.components = { datePicker: getDatePicker() };

     this.topOptions.alignedGrids.push(this.bottomOptions);
     this.bottomOptions.alignedGrids.push(this.topOptions);

     this.topOptions2.alignedGrids.push(this.bottomOptions2);
     this.bottomOptions2.alignedGrids.push(this.topOptions2);

    this.detailCellRendererParams = {
      detailGridOptions: {
        columnDefs: [
          { field: "payrollRecordID" ,
          },
          { field: "taxName" },
          { field: "taxPaymentNumber" },
          {
            field: "taxDueDate",
            valueFormatter: "x.toLocaleString() + 's'"
          },
          { field: "taxRateCompany" }
        ],
        onFirstDataRendered(params) {
          params.api.sizeColumnsToFit();
        }
      },
      getDetailRowData: function(params) {
        params.successCallback(params.data.payrollTaxes);
      }
    };
    
    this.defaultColDef2 = {
      width: 185,
      editable: true
    };

    this.rowData2 = [
      {
        address: 1,
        country: 1,
        state:1,
        city: {id: 1, name:'NY'},
        country1: {id:1, name: 'Indian'},
        state1:{id :1,name:'Andhra Pradesh'}
      },
      {
        address: 2,
        country: 1,
        state:2,
        city: {id: 5, name:'LA'},
        country1: {id:1, name: 'Indian'},
        state1:{id:2, name: 'Madhya Pradesh'}
      },
      {
        address: 3,
        country: 2,
        state:3,
        city: {id: 9, name:'SC'},
        country1: {id:2, name: 'USA'},
        state1: {id:3, name: 'San Francisco'}
      },
      {
        address: 4,
        country: 3,
        state:5,
        city: {id: 15, name:'PA'},
        country1: {id:3, name: 'Australian'},
        state1: {id:5, name: 'New South Wales'},
      }
    ];

    this.columnDefs2 = [
      {
        field: 'name',
        editable: true,
        checkboxSelection: true
      },
      {
        headerName: "Address",
        field: "address",
    
      },
      {
        headerName: "Country",
        field: "country",
        cellEditor: "select",
        cellEditorParams:  {
          values: extractValues2(getCountries()),
          cellHeight: 50,
        },
        valueFormatter: function(params) {
          return lookupValue2(getCountries(), params.value);
        },
        valueParser: function(params) {
          return lookupKey2(getCountries(), params.newValue);
        },
        onCellValueChanged: function (params: any) {
          /**
           * because 'select' does not offer us the possibility to use 'key-value' as traditional,
           * we will use only values in 'select' and changed to 'id' when will be saved.
           */
           params.data.state=3;;
           var rowNode = this.gridApi.getRowNode(params.data.address);
           rowNode.setDataValue("state", 0);
        },
      },
      {
        headerName: "State",
        field: "state",
        cellEditor: "select",
        cellEditorParams: function(params) {
          var selectedCountry = params.data.country;
          var states=getStates();
          var value=extractValues2(states.filter(x=>{return x.country_id==selectedCountry}));

          return {values:value};
        },
        valueFormatter: function(params) {
          return lookupValue2(getStates(), params.value);
        },
        valueParser: function(params) {
          return lookupKey2(getStates(), params.newValue);
        },
      },
      {
        headerName: "city",
        field: "city",
        width:100,
        cellRenderer: (params) => params.data.city.name,
        editable: true,
        cellEditor: 'agRichSelectCellEditor',
        cellEditorParams: {
          cellHeight: 50,
            values: getCity(),
            cellRenderer: (params) => params.value.name
        }
      },
      {
        headerName: "country 1",
        field: "country1",
        width:100,
        cellRenderer: (params) => params.data.country1.name,
        editable: true,
        cellEditor: 'agRichSelectCellEditor',
        cellEditorParams: {
          cellHeight: 50,
            values: getCountries(),
            cellRenderer: (params) => params.value.name
        },
        onCellValueChanged: function (params: any) {
          var selectedCountry = params.data.country1.id;
          var selectedCity = params.data.state1.id;
          var allowedStates = getStates().filter(x=>{return x.country_id==selectedCountry});
          var cityMismatch = allowedStates.indexOf(selectedCity) < 0;
          if (cityMismatch) {
            params.node.setDataValue("state1", {id:-1,name:'-select-'});
          }
        }
      },
      {
        headerName: "state1",
        field: "state1",
        width:100,
        cellRenderer: (params) => params.data.state1.name,
        editable: true,
        cellEditor: 'agRichSelectCellEditor',
        cellEditorParams: function(params) {
        var allowedStates=getStates().filter(x=>{return x.country_id==params.data.country1.id});
        return{
          cellHeight: 30,
            values: allowedStates,
            formatValue:  function(value) {
              return value.name;
            }
         }
        }
      },
      {
        headerName: "rate",
        field: "rate",
        width:100,
        editable: true,

      }
    ]

   }

  ngOnInit() {
      
  }
  
  bottomData = [
    {
      employeeAliasID: 'Total',
      payDate: '15 - 61',
      payFrequency: 'Ireland',
      payNumber: '2020',
      netPay: '76',
      grossPay: '76',
      BasePayRate: '55',

    }
];

onPageSizeChanged(newPageSize) {
  // var value = document.getElementById("page-size").value;
  // this.gridApi.paginationSetPageSize(Number(value));
}
onGridReady(params) {
  this.gridApi = params.api;
  this.gridColumnApi = params.columnApi;
  this.getPayrollByDateService.getPayrollByDate().subscribe((data : any[])=>{
    this.rowData=data;    
  },
  (err : HttpErrorResponse)=>{
    // this.isLoginError = true;
  });

  setTimeout(function() {
    var rowCount = 0;
    params.api.forEachNode(function(node) {
      node.setExpanded(rowCount++ === 1);
    });
  }, 500);
}

onGridReady1(params) {
  this.gridApi1 = params.api;
  this.gridColumnApi = params.columnApi;
}

onGridReady2(params) {
  this.gridApi2 = params.api;
  this.gridColumnApi2 = params.columnApi;
}

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

  btSizeColsToFix() {
    this.topGrid.api.sizeColumnsToFit();
    console.log('btSizeColsToFix ');
  }

  createClumns(data){
    this.columnDefs = [
      {headerName: 'Payroll Id', field: 'employeeAliasID',
        cellRenderer: "agGroupCellRenderer" },
      {headerName: 'Payroll Date', field: 'payDate',editable: true,cellEditor: "datePicker"},
      {headerName: 'Deduction ID', field: 'deductions'},
      {headerName: 'Pay Frequency', field: 'payFrequency'},
      {headerName: 'Pay Number' , field: 'payNumber'},
      {headerName: 'Net Pay', field: 'netPay',editable: true},
      {headerName: 'Gross Pay', field: 'grossPay',editable: true},
      {headerName: 'Base Pay Rate', field: 'basePayRate',editable: true},
      {
        headerName: "Department",
        field: "departmentName",
        editable: true, 
        cellEditor: "select",
        cellEditorParams: { values: extractValues(data) },
        valueFormatter: function(params) {
          return lookupValue(data, params.value);
        },
        valueParser: function(params) {
          return lookupKey(data, params.newValue);
        }
      },
    ];
  }

  rowsSelected() {
    return this.gridApi1 && this.gridApi1.getSelectedRows().length > 0;
}
}
var carMappings = {
  tyt: "Toyota",
  frd: "Ford",
  prs: "Porsche",
  nss: "Nissan"
};
var colourMappings = {
  cb: "Cadet Blue",
  bw: "Burlywood",
  fg: "Forest Green"
};
function extractValues(data) {
  //return Object.keys(data);
  var dep=[];
  for (let d of data) {
    dep.push(d.aliasID);
  }
  return dep;
};
  //return Object.keys(mappings);
//}
 function lookupValue(array, key) {
   var value='';
   for (var i = 0; i < array.length; i++) {
    if (key && key.includes(array[i].aliasID)) {
        return array[i].name;
    }
  }
   //const result = data.filter(s => s.aliasID.includes(key))[0];
   //return result;
  //return mappings[key];
};
function lookupKey(array, name) {
  var value='';
   for (var i = 0; i < array.length; i++) {
    if (array[i].name === name) {
        return array[i].aliasID;
    }

}
}


// function extractValues1(mappings) {
//   return Object.keys(mappings);
// }
// function lookupValue1(mappings, key) {
//   return mappings[key];
// }
// function lookupKey1(mappings, name) {
//   for (var key in mappings) {
//     if (mappings.hasOwnProperty(key)) {
//       if (name === mappings[key]) {
//         return key;
//       }
//     }
//   }
// }
// function colorCellRenderer(params) {
//   return "<span style='color:" + removeSpaces(params.valueFormatted) + "'>" + params.valueFormatted + "</span>";
// }
// function currencyFormatter(params) {
//   var value = Math.floor(params.value);
//   if (isNaN(value)) return "";
//   return "\xA3" + value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
// }
// function numberValueSetter(params) {
//   if (isNaN(parseFloat(params.newValue)) || !isFinite(params.newValue)) {
//     return false;
//   }
//   params.data.price = params.newValue;
//   return true;
// }
// function removeSpaces(str) {
//   return str ? str.replace(/\s/g, "") : str;
// }

function getCountries() {
  return [
    {id:0, name: '-select-'},
    { id: 1, name: 'India' },
    { id: 2, name: 'USA' },
    { id: 3, name: 'Australia' }
  ];
}

function getStates() {
  return [
    {id:0, name: '-select-'},
    { id: 1, country_id: 1, name: 'Andhra Pradesh' },
    { id: 2, country_id: 1, name: 'Madhya Pradesh' },
    { id: 3, country_id: 2, name: 'San Francisco' },
    { id: 4, country_id: 2, name: 'Los Angeles' },
    { id: 5, country_id: 3, name: 'New South Wales' },
    { id: 6, country_id: 3, name: 'Victoria' },
  ]
}

function getCity() {
  return [
    {id:0, name: '-select-'},
    { id: 1, state_id: 1, name: 'Guntur' },
    { id: 2, state_id: 1, name: 'Vijayawada' },
    { id: 3, state_id: 1, name: 'Nellore' },
    { id: 4, state_id: 1, name: 'Kadapa' },
    { id: 5, state_id: 2, name: 'Warangal' },
    { id: 6, state_id: 2, name: 'Hyderabad' },
    { id: 7, state_id: 2, name: 'Karimnagar' },
    { id: 8, state_id: 2, name: 'Kadapa' },
    { id: 9, state_id: 3, name: 'SOMA' },
    { id: 10, state_id: 3, name: 'Richmond' },
    { id: 11, state_id: 3, name: 'Sunset' },
    { id: 12, state_id: 4, name: 'Burbank' },
    { id: 13, state_id: 4, name: 'Hollywood' },
    { id: 14, state_id: 5, name: 'Sunset' },
    { id: 15, state_id: 5, name: 'Burbank' },
    { id: 16, state_id: 5, name: 'Hollywood' },
    { id: 17, state_id: 6, name: 'Benalla' },
    { id: 18, state_id: 6, name: 'Melbourne' },
  ]
}

function extractValues2(data) {
  //return Object.keys(data);
  var dep=[];
  for (let d of data) {
    dep.push(d.id);
  }
  return dep;
};
  //return Object.keys(mappings);
//}
 function lookupValue2(array, key) {
   var value='';
   for (var i = 0; i < array.length; i++) {
    if (key && key==array[i].id) {
        return array[i].name;
    }
  }
   //const result = data.filter(s => s.aliasID.includes(key))[0];
   //return result;
  //return mappings[key];
};
function lookupKey2(array, name) {
  var value='';
   for (var i = 0; i < array.length; i++) {
    if (array[i].name === name) {
        return array[i].id;
    }

  }
}

function getDatePicker() {
  function Datepicker() {}
  Datepicker.prototype.init = function(params) {
    this.eInput = document.createElement("input");
    this.eInput.value = params.value;
    $(this.eInput).datepicker({ dateFormat: "dd/mm/yy" });
  };
  Datepicker.prototype.getGui = function() {
    return this.eInput;
  };
  Datepicker.prototype.afterGuiAttached = function() {
    this.eInput.focus();
    this.eInput.select();
  };
  Datepicker.prototype.getValue = function() {
    return this.eInput.value;
  };
  Datepicker.prototype.destroy = function() {};
  Datepicker.prototype.isPopup = function() {
    return false;
  };
  return Datepicker;
}