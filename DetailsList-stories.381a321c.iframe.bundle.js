"use strict";(self.webpackChunkfluent_ui_v9=self.webpackChunkfluent_ui_v9||[]).push([[6439],{"./stories/DetailsList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DetailsList:()=>DetailsList,DetailsListLoading:()=>DetailsListLoading,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_fluentui_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@fluentui/react/lib/components/DetailsList/ShimmeredDetailsList.js"),_fluentui_react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@fluentui/utilities/lib/selection/Selection.types.js"),_fluentui_react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@fluentui/react/lib/components/DetailsList/DetailsList.types.js"),_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@fluentui/react-skeleton/lib/components/Skeleton/Skeleton.js"),_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@fluentui/react-skeleton/lib/components/SkeletonItem/SkeletonItem.js"),_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@fluentui/react-table/lib/hooks/createColumn.js"),_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@fluentui/react-table/lib/components/TableCellLayout/TableCellLayout.js"),_fluentui_react_components__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@fluentui/react-table/lib/components/DataGrid/DataGrid.js"),_fluentui_react_components__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@fluentui/react-table/lib/components/DataGridHeader/DataGridHeader.js"),_fluentui_react_components__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/@fluentui/react-table/lib/components/DataGridRow/DataGridRow.js"),_fluentui_react_components__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/@fluentui/react-table/lib/components/DataGridHeaderCell/DataGridHeaderCell.js"),_fluentui_react_components__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/@fluentui/react-table/lib/components/DataGridBody/DataGridBody.js"),_fluentui_react_components__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./node_modules/@fluentui/react-table/lib/components/DataGridCell/DataGridCell.js"),date_fns_format__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/date-fns/format.js"),date_fns_locale__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/date-fns/locale/de.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_CompareGrid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/CompareGrid.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"FluentUI",component:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{})},formatOptionalDate=date=>date?(0,date_fns_format__WEBPACK_IMPORTED_MODULE_3__.GP)(date,"P",{locale:date_fns_locale__WEBPACK_IMPORTED_MODULE_4__.de}):"",useStyles=(0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.n)({shimmerRow:{display:"flex"},shimmerItem:{margin:"1.125rem 0.5rem"}}),DataGridSkeleton=({rows=10})=>{const styles=useStyles(),rowItems=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>new Array(rows).fill(0)),[rows]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.E,{children:rowItems.map(((_,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:styles.shimmerRow,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.H,{size:8,className:styles.shimmerItem}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.H,{size:8,className:styles.shimmerItem}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.H,{size:8,className:styles.shimmerItem})]},index)))})},DetailsListLoading=()=>{const v8Columns=[{key:"name",name:"Name",fieldName:"name",minWidth:100,maxWidth:180},{key:"email",name:"E-Mail-Adresse",fieldName:"email",minWidth:100,maxWidth:200},{key:"lastLogin",name:"Zuletzt angemeldet",fieldName:"zuletztAngemeldet",minWidth:100,maxWidth:170,onRender:(item,index,column)=>{const fieldName=null==column?void 0:column.fieldName;if(!item||void 0===fieldName)return null;const value=item[fieldName];return value&&"string"!=typeof value?formatOptionalDate(value):null}}],v9Columns=[(0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.r)({columnId:"name",renderHeaderCell:()=>"Name",renderCell:item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.D,{children:item.name})}),(0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.r)({columnId:"email",renderHeaderCell:()=>"E-Mail-Adresse",renderCell:item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.D,{children:item.email})}),(0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.r)({columnId:"lastLogin",renderHeaderCell:()=>"Zuletzt angemeldet",renderCell:item=>{var _item_zuletztAngemeldet;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.D,{children:formatOptionalDate(null!==(_item_zuletztAngemeldet=item.zuletztAngemeldet)&&void 0!==_item_zuletztAngemeldet?_item_zuletztAngemeldet:void 0)})}})],items=[];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CompareGrid__WEBPACK_IMPORTED_MODULE_2__.y,{v8Component:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.z,{enableShimmer:true,selectionMode:_fluentui_react__WEBPACK_IMPORTED_MODULE_11__.Qc.none,layoutMode:_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.ch.justified,items,columns:v8Columns}),v9Component:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_13__.z,{items,columns:v9Columns,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_14__.C,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_15__.r,{children:({renderHeaderCell})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_16__._,{children:renderHeaderCell()})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DataGridSkeleton,{})]})})},DetailsList=()=>{const v8Columns=[{key:"name",name:"Name",fieldName:"name",minWidth:100,maxWidth:180},{key:"email",name:"E-Mail-Adresse",fieldName:"email",minWidth:100,maxWidth:200},{key:"lastLogin",name:"Zuletzt angemeldet",fieldName:"zuletztAngemeldet",minWidth:100,maxWidth:170,onRender:(item,index,column)=>{const fieldName=null==column?void 0:column.fieldName;if(!item||void 0===fieldName)return null;const value=item[fieldName];return value&&"string"!=typeof value?formatOptionalDate(value):null}}],v9Columns=[(0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.r)({columnId:"name",renderHeaderCell:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.D,{truncate:!0,children:"Name"}),renderCell:item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.D,{truncate:!0,children:item.name})}),(0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.r)({columnId:"email",renderHeaderCell:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.D,{truncate:!0,children:"E-Mail-Adresse"}),renderCell:item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.D,{truncate:!0,children:item.email})}),(0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.r)({columnId:"lastLogin",renderHeaderCell:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.D,{truncate:!0,children:"Zuletzt angemeldet"}),renderCell:item=>{var _item_zuletztAngemeldet;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.D,{truncate:!0,children:formatOptionalDate(null!==(_item_zuletztAngemeldet=item.zuletztAngemeldet)&&void 0!==_item_zuletztAngemeldet?_item_zuletztAngemeldet:void 0)})}})],items=[{name:"John Smith",email:"john.smith@example.com",zuletztAngemeldet:new Date(2024,11,19)},{name:"Jane Doe",email:"jane.doe@example.com",zuletztAngemeldet:new Date(2024,10,15)},{name:"Alice Johnson",email:"alice.johnson@example.com",zuletztAngemeldet:new Date(2024,9,25)},{name:"Bob Brown",email:"bob.brown@example.com",zuletztAngemeldet:new Date(2024,8,10)},{name:"Charlie Davis",email:"charlie.davis@example.com",zuletztAngemeldet:new Date(2024,7,5)},{name:"Edward King",email:"edward.king@example.com",zuletztAngemeldet:new Date(2024,5,12)},{name:"Fiona Hill",email:"fiona.hill@example.com",zuletztAngemeldet:new Date(2024,4,30)},{name:"George Carter",email:"george.carter@example.com",zuletztAngemeldet:new Date(2024,3,18)},{name:"Hannah White",email:"hannah.white@example.com",zuletztAngemeldet:new Date(2024,2,1)}];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CompareGrid__WEBPACK_IMPORTED_MODULE_2__.y,{v8Component:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.z,{enableShimmer:false,selectionMode:_fluentui_react__WEBPACK_IMPORTED_MODULE_11__.Qc.none,layoutMode:_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.ch.justified,items,columns:v8Columns}),v9Component:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_13__.z,{items,columns:v9Columns,size:"medium",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_14__.C,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_15__.r,{children:({renderHeaderCell})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_16__._,{children:renderHeaderCell()})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_17__.V,{children:({item,rowId})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_15__.r,{children:({renderCell})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_18__.N,{children:renderCell(item)})},rowId)})]})})},__namedExportsOrder=["DetailsListLoading","DetailsList"];DetailsListLoading.parameters={...DetailsListLoading.parameters,docs:{...DetailsListLoading.parameters?.docs,source:{originalSource:'() => {\n  const v8Columns: IColumn[] = [{\n    key: "name",\n    name: "Name",\n    fieldName: "name",\n    minWidth: 100,\n    maxWidth: 180\n  }, {\n    key: "email",\n    name: "E-Mail-Adresse",\n    fieldName: "email",\n    minWidth: 100,\n    maxWidth: 200\n  }, {\n    key: "lastLogin",\n    name: "Zuletzt angemeldet",\n    fieldName: "zuletztAngemeldet",\n    minWidth: 100,\n    maxWidth: 170,\n    onRender: (item?: ListItem, index?: number, column?: IColumn) => {\n      const fieldName = column?.fieldName;\n      if (!item || fieldName === undefined) {\n        return null;\n      }\n      const value = item[fieldName as keyof ListItem];\n      if (!value || typeof value === "string") {\n        return null;\n      }\n      return formatOptionalDate(value);\n    }\n  }];\n  const v9Columns: TableColumnDefinition<ListItem>[] = [createTableColumn<ListItem>({\n    columnId: "name",\n    renderHeaderCell: () => "Name",\n    renderCell: item => <TableCellLayout>{item.name}</TableCellLayout>\n  }), createTableColumn<ListItem>({\n    columnId: "email",\n    renderHeaderCell: () => "E-Mail-Adresse",\n    renderCell: item => <TableCellLayout>{item.email}</TableCellLayout>\n  }), createTableColumn<ListItem>({\n    columnId: "lastLogin",\n    renderHeaderCell: () => "Zuletzt angemeldet",\n    renderCell: item => <TableCellLayout>\n          {formatOptionalDate(item.zuletztAngemeldet ?? undefined)}\n        </TableCellLayout>\n  })];\n  const loading = true;\n  const items: ListItem[] = [];\n  return <CompareGrid v8Component={<ShimmeredDetailsList enableShimmer={loading} selectionMode={SelectionMode.none} layoutMode={DetailsListLayoutMode.justified} items={items} columns={v8Columns} />} v9Component={<DataGrid items={items} columns={v9Columns}>\n          <DataGridHeader>\n            <DataGridRow>\n              {({\n          renderHeaderCell\n        }) => <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>}\n            </DataGridRow>\n          </DataGridHeader>\n          {loading ? <DataGridSkeleton /> : <DataGridBody<ListItem>>\n              {({\n        item,\n        rowId\n      }) => <DataGridRow<ListItem> key={rowId}>\n                  {({\n          renderCell\n        }) => <DataGridCell>{renderCell(item)}</DataGridCell>}\n                </DataGridRow>}\n            </DataGridBody>}\n        </DataGrid>} />;\n}',...DetailsListLoading.parameters?.docs?.source}}},DetailsList.parameters={...DetailsList.parameters,docs:{...DetailsList.parameters?.docs,source:{originalSource:'() => {\n  const v8Columns: IColumn[] = [{\n    key: "name",\n    name: "Name",\n    fieldName: "name",\n    minWidth: 100,\n    maxWidth: 180\n  }, {\n    key: "email",\n    name: "E-Mail-Adresse",\n    fieldName: "email",\n    minWidth: 100,\n    maxWidth: 200\n  }, {\n    key: "lastLogin",\n    name: "Zuletzt angemeldet",\n    fieldName: "zuletztAngemeldet",\n    minWidth: 100,\n    maxWidth: 170,\n    onRender: (item?: ListItem, index?: number, column?: IColumn) => {\n      const fieldName = column?.fieldName;\n      if (!item || fieldName === undefined) {\n        return null;\n      }\n      const value = item[fieldName as keyof ListItem];\n      if (!value || typeof value === "string") {\n        return null;\n      }\n      return formatOptionalDate(value);\n    }\n  }];\n  const v9Columns: TableColumnDefinition<ListItem>[] = [createTableColumn<ListItem>({\n    columnId: "name",\n    renderHeaderCell: () => <TableCellLayout truncate>{"Name"}</TableCellLayout>,\n    renderCell: item => <TableCellLayout truncate>{item.name}</TableCellLayout>\n  }), createTableColumn<ListItem>({\n    columnId: "email",\n    renderHeaderCell: () => <TableCellLayout truncate>{"E-Mail-Adresse"}</TableCellLayout>,\n    renderCell: item => <TableCellLayout truncate>{item.email}</TableCellLayout>\n  }), createTableColumn<ListItem>({\n    columnId: "lastLogin",\n    renderHeaderCell: () => <TableCellLayout truncate>{"Zuletzt angemeldet"}</TableCellLayout>,\n    renderCell: item => <TableCellLayout truncate>\n          {formatOptionalDate(item.zuletztAngemeldet ?? undefined)}\n        </TableCellLayout>\n  })];\n  const loading = false;\n  const items: ListItem[] = [{\n    name: "John Smith",\n    email: "john.smith@example.com",\n    zuletztAngemeldet: new Date(2024, 11, 19)\n  }, {\n    name: "Jane Doe",\n    email: "jane.doe@example.com",\n    zuletztAngemeldet: new Date(2024, 10, 15)\n  }, {\n    name: "Alice Johnson",\n    email: "alice.johnson@example.com",\n    zuletztAngemeldet: new Date(2024, 9, 25)\n  }, {\n    name: "Bob Brown",\n    email: "bob.brown@example.com",\n    zuletztAngemeldet: new Date(2024, 8, 10)\n  }, {\n    name: "Charlie Davis",\n    email: "charlie.davis@example.com",\n    zuletztAngemeldet: new Date(2024, 7, 5)\n  }, {\n    name: "Edward King",\n    email: "edward.king@example.com",\n    zuletztAngemeldet: new Date(2024, 5, 12)\n  }, {\n    name: "Fiona Hill",\n    email: "fiona.hill@example.com",\n    zuletztAngemeldet: new Date(2024, 4, 30)\n  }, {\n    name: "George Carter",\n    email: "george.carter@example.com",\n    zuletztAngemeldet: new Date(2024, 3, 18)\n  }, {\n    name: "Hannah White",\n    email: "hannah.white@example.com",\n    zuletztAngemeldet: new Date(2024, 2, 1)\n  }];\n  return <CompareGrid v8Component={<ShimmeredDetailsList enableShimmer={loading} selectionMode={SelectionMode.none} layoutMode={DetailsListLayoutMode.justified} items={items} columns={v8Columns} />} v9Component={<DataGrid items={items} columns={v9Columns} size="medium">\n          <DataGridHeader>\n            <DataGridRow>\n              {({\n          renderHeaderCell\n        }) => <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>}\n            </DataGridRow>\n          </DataGridHeader>\n          {loading ? <DataGridSkeleton /> : <DataGridBody<ListItem>>\n              {({\n        item,\n        rowId\n      }) => <DataGridRow<ListItem> key={rowId}>\n                  {({\n          renderCell\n        }) => <DataGridCell>{renderCell(item)}</DataGridCell>}\n                </DataGridRow>}\n            </DataGridBody>}\n        </DataGrid>} />;\n}',...DetailsList.parameters?.docs?.source}}}},"./stories/CompareGrid.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>CompareGrid});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const CompareGrid=({v8Component,v9Component})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{display:"flex",gap:"2rem",alignItems:"center"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{children:"@fluentui v8"}),v8Component]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{children:"@fluentui v9"}),v9Component]})]});CompareGrid.__docgenInfo={description:"",methods:[],displayName:"CompareGrid",props:{v8Component:{required:!0,tsType:{name:"ReactNode"},description:""},v9Component:{required:!0,tsType:{name:"ReactNode"},description:""}}}}}]);