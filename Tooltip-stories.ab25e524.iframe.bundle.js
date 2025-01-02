"use strict";(self.webpackChunkfluent_ui_v9=self.webpackChunkfluent_ui_v9||[]).push([[7712],{"./stories/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Tooltip:()=>Tooltip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_storybook_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/theme.ts"),_fluentui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@fluentui/react/lib/components/Tooltip/TooltipHost.js"),_fluentui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@fluentui/react/lib/components/Tooltip/Tooltip.types.js"),_fluentui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@fluentui/react/lib/common/DirectionalHint.js"),_fluentui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@fluentui/react/lib/components/Button/DefaultButton/DefaultButton.js"),_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@fluentui/react-tooltip/lib/components/Tooltip/Tooltip.js"),_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@fluentui/react-button/lib/components/Button/Button.js"),_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@fluentui/react-icons/lib/icons/chunk-0.js"),_CompareGrid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/CompareGrid.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"FluentUI",component:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{})},Tooltip=()=>{const buttonColor=_storybook_theme__WEBPACK_IMPORTED_MODULE_1__.LU.colorNeutralBackground2,labelColor=_storybook_theme__WEBPACK_IMPORTED_MODULE_1__.LU.colorNeutralForeground2,tooltipContent="Die PZN befindet sich bereits in einem zurückgestellten Auftrag. Bitte schließen Sie diesen ab, bevor Sie die PZN erneut verwenden können";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CompareGrid__WEBPACK_IMPORTED_MODULE_2__.y,{v8Component:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__.S,{content:tooltipContent,id:"neuaufnahme-button",calloutProps:{gapSpace:0},delay:_fluentui_react__WEBPACK_IMPORTED_MODULE_4__.H.zero,directionalHint:_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.A.bottomAutoEdge,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react__WEBPACK_IMPORTED_MODULE_6__.Y,{disabled:!0,iconProps:{iconName:"circlePlus",styles:{root:{color:labelColor}}},styles:{root:{border:"none",padding:"8px 10px",backgroundColor:buttonColor},rootHovered:{backgroundColor:buttonColor},rootPressed:{backgroundColor:buttonColor},label:{color:labelColor,fontWeight:600}},children:"Neuaufnahme"})}),v9Component:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.m,{content:tooltipContent,relationship:"description",positioning:"below-start",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.$,{disabled:!0,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_9__.on3,{}),iconPosition:"before",children:"Neuaufnahme"})})})},__namedExportsOrder=["Tooltip"];Tooltip.parameters={...Tooltip.parameters,docs:{...Tooltip.parameters?.docs,source:{originalSource:'() => {\n  const buttonColor = tokens.colorNeutralBackground2;\n  const labelColor = tokens.colorNeutralForeground2;\n  const label = "Neuaufnahme";\n  const tooltipContent = "Die PZN befindet sich bereits in einem zurückgestellten Auftrag. Bitte schließen Sie diesen ab, bevor Sie die PZN erneut verwenden können";\n  return <CompareGrid v8Component={<V8TooltipHost content={tooltipContent} id="neuaufnahme-button" calloutProps={{\n    gapSpace: 0\n  }} delay={TooltipDelay.zero} directionalHint={DirectionalHint.bottomAutoEdge}>\n          <V8Button disabled iconProps={{\n      iconName: "circlePlus",\n      styles: {\n        root: {\n          color: labelColor\n        }\n      }\n    }} styles={{\n      root: {\n        border: "none",\n        padding: "8px 10px",\n        backgroundColor: buttonColor\n      },\n      rootHovered: {\n        backgroundColor: buttonColor\n      },\n      rootPressed: {\n        backgroundColor: buttonColor\n      },\n      label: {\n        color: labelColor,\n        fontWeight: 600\n      }\n    }}>\n            {label}\n          </V8Button>\n        </V8TooltipHost>} v9Component={<V9Tooltip content={tooltipContent} relationship="description" positioning="below-start">\n          <V9Button disabled icon={<AddFilled />} iconPosition="before">\n            {label}\n          </V9Button>\n        </V9Tooltip>} />;\n}',...Tooltip.parameters?.docs?.source}}}},"./stories/CompareGrid.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>CompareGrid});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const CompareGrid=({v8Component,v9Component})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{display:"flex",gap:"2rem",alignItems:"center"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{children:"@fluentui v8"}),v8Component]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{children:"@fluentui v9"}),v9Component]})]});CompareGrid.__docgenInfo={description:"",methods:[],displayName:"CompareGrid",props:{v8Component:{required:!0,tsType:{name:"ReactNode"},description:""},v9Component:{required:!0,tsType:{name:"ReactNode"},description:""}}}}}]);