import { Component, OnInit , ViewChild} from '@angular/core';
import { GetPayrollByDateService } from '../../shared/payroll/get-payroll-by-date.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';


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

  private rowData1;
  private columnDefs1;
  private defaultColDef1;
  topOptions = {alignedGrids: []};
  bottomOptions = {alignedGrids: []};

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

    http.get<any>('http://localhost:50877'+'/api/v2/Companies/00010029/Departments', {params: params}).subscribe((data : any[])=>{
      
       this.createClumns(data);   
    },
    (err : HttpErrorResponse)=>{
      // this.isLoginError = true;
    });
  

   
    //this.columnDefs.aggFunc = 'sum';

    // ];
    this.topOptions.alignedGrids.push(this.bottomOptions);
    this.bottomOptions.alignedGrids.push(this.topOptions);


    this.rowData1 = [
      {
        make: "tyt",
        exteriorColour: "fg",
        interiorColour: "bw",
        price: 35000
      },
      {
        make: "frd",
        exteriorColour: "bw",
        interiorColour: "cb",
        price: 32000
      },
      {
        make: "prs",
        exteriorColour: "cb",
        interiorColour: "fg",
        price: 72000
      },
      {
        make: "tyt",
        exteriorColour: "fg",
        interiorColour: "bw",
        price: 35000
      },
      {
        make: "frd",
        exteriorColour: "bw",
        interiorColour: "cb",
        price: 32000
      },
      {
        make: "prs",
        exteriorColour: "cb",
        interiorColour: "fg",
        price: 72000
      },
      {
        make: "tyt",
        exteriorColour: "fg",
        interiorColour: "bw",
        price: 35000
      },
      {
        make: "frd",
        exteriorColour: "bw",
        interiorColour: "cb",
        price: 32000
      },
      {
        make: "prs",
        exteriorColour: "cb",
        interiorColour: "fg",
        price: 72000
      },
      {
        make: "tyt",
        exteriorColour: "fg",
        interiorColour: "bw",
        price: 35000
      },
      {
        make: "frd",
        exteriorColour: "bw",
        interiorColour: "cb",
        price: 32000
      },
      {
        make: "prs",
        exteriorColour: "cb",
        interiorColour: "fg",
        price: 72000
      },
      {
        make: "tyt",
        exteriorColour: "fg",
        interiorColour: "bw",
        price: 35000
      },
      {
        make: "frd",
        exteriorColour: "bw",
        interiorColour: "cb",
        price: 32000
      },
      {
        make: "prs",
        exteriorColour: "cb",
        interiorColour: "fg",
        price: 72000
      },
      {
        make: "prs",
        exteriorColour: "cb",
        interiorColour: "fg",
        price: 72000
      },
      {
        make: "tyt",
        exteriorColour: "fg",
        interiorColour: "bw",
        price: 35000
      },
      {
        make: "frd",
        exteriorColour: "bw",
        interiorColour: "cb",
        price: 32000
      }
    ];
    this.columnDefs1 = [
      {
        headerName: "Make",
        field: "make",
        cellEditor: "select",
        cellEditorParams: { values: extractValues1(carMappings) },
        valueFormatter: function(params) {
          return lookupValue1(carMappings, params.value);
        },
        valueParser: function(params) {
          return lookupKey1(carMappings, params.newValue);
        }
      },
      {
        headerName: "Exterior Colour",
        field: "exteriorColour",
        cellEditor: "agRichSelectCellEditor",
        cellEditorParams: {
          values: extractValues1(colourMappings),
          cellRenderer: colorCellRenderer
        },
        filter: "agSetColumnFilter",
        filterParams: {
          values: extractValues1(colourMappings),
          cellRenderer: colorCellRenderer
        },
        valueFormatter: function(params) {
          return lookupValue1(colourMappings, params.value);
        },
        valueParser: function(params) {
          return lookupKey1(colourMappings, params.newValue);
        },
        cellRenderer: colorCellRenderer
      },
      {
        headerName: "Interior Colour",
        field: "interiorColour",
        cellEditor: "agTextCellEditor",
        cellEditorParams: { useFormatter: true },
        filter: "agSetColumnFilter",
        filterParams: {
          values: extractValues1(colourMappings),
          cellRenderer: colorCellRenderer
        },
        valueFormatter: function(params) {
          return lookupValue1(colourMappings, params.value);
        },
        valueParser: function(params) {
          return lookupKey1(colourMappings, params.newValue);
        },
        cellRenderer: colorCellRenderer
      },
      {
        headerName: "Retail Price",
        field: "price",
        colId: "retailPrice",

        valueGetter: function(params) {
          return params.data.price;
        },
        valueFormatter: currencyFormatter,
        valueSetter: numberValueSetter
      },
      {
        headerName: "Retail Price (incl Taxes)",
        editable: false,
        valueGetter: function(params) {
          return params.getValue("retailPrice") * 1.2;
        },
        valueFormatter: currencyFormatter
      }
    ];
    this.defaultColDef1 = {
      width: 185,
      editable: true
    };

   }

  ngOnInit() {
      
  }
  
  bottomData = [
    {
      payrollID: 'Total',
      payDate: '15 - 61',
      payFrequency: 'Ireland',
      payNumber: '2020',
      netPay: '76',
      grossPay: '76',
      BasePayRate: '55',

    }
];
// rowData = [
//     {make: 'Toyota', model: 'Celica', price: 35000},
//     {make: 'Ford', model: 'Mondeo', price: 32000},
//     {make: 'Porsche', model: 'Boxter', price: 72000}
// ];
onCellValueChanged(params: any) {
//   this.athleteService.save(params.data)
//                      .subscribe(
//                          savedAthlete => {
//                              console.log('Athlete Saved');
//                              this.setAthleteRowData();
//                          },
//                          error => console.log(error)
//                      )
}

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
      {headerName: 'Payroll Id', field: 'payrollID', suppressSizeToFit: true},
      {headerName: 'Payroll Date', field: 'payDate'},
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
  //const result = data.filter(s => s.name.includes(name))[0];
  //return result;
  // for (var key in mappings) {
  //   if (mappings.hasOwnProperty(key)) {
  //     if (name === mappings[key]) {
  //       return key;
  //     }
  //   }
  // }
}
}


function extractValues1(mappings) {
  return Object.keys(mappings);
}
function lookupValue1(mappings, key) {
  return mappings[key];
}
function lookupKey1(mappings, name) {
  for (var key in mappings) {
    if (mappings.hasOwnProperty(key)) {
      if (name === mappings[key]) {
        return key;
      }
    }
  }
}
function colorCellRenderer(params) {
  return "<span style='color:" + removeSpaces(params.valueFormatted) + "'>" + params.valueFormatted + "</span>";
}
function currencyFormatter(params) {
  var value = Math.floor(params.value);
  if (isNaN(value)) return "";
  return "\xA3" + value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
function numberValueSetter(params) {
  if (isNaN(parseFloat(params.newValue)) || !isFinite(params.newValue)) {
    return false;
  }
  params.data.price = params.newValue;
  return true;
}
function removeSpaces(str) {
  return str ? str.replace(/\s/g, "") : str;
}