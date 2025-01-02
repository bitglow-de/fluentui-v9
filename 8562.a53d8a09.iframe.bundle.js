"use strict";(self.webpackChunkfluent_ui_v9=self.webpackChunkfluent_ui_v9||[]).push([[8562],{"./node_modules/@fluentui/react/lib/components/Icon/FontIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l8:()=>FontIcon,ne:()=>getIconContent});var tslib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Icon_styles__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@fluentui/react/lib/components/Icon/Icon.styles.js"),_Utilities__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@fluentui/utilities/lib/memoize.js"),_Utilities__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@fluentui/utilities/lib/properties.js"),_Utilities__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@fluentui/utilities/lib/css.js"),_Styling__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@fluentui/style-utilities/lib/index.js"),getIconContent=(0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.J9)((function(iconName){var _a=(0,_Styling__WEBPACK_IMPORTED_MODULE_2__.sW)(iconName)||{subset:{},code:void 0},code=_a.code,subset=_a.subset;return code?{children:code,iconClassName:subset.className,fontFamily:subset.fontFace&&subset.fontFace.fontFamily,mergeImageProps:subset.mergeImageProps}:null}),void 0,!0),FontIcon=function(props){var iconName=props.iconName,className=props.className,_a=props.style,style=void 0===_a?{}:_a,iconContent=getIconContent(iconName)||{},iconClassName=iconContent.iconClassName,children=iconContent.children,fontFamily=iconContent.fontFamily,mergeImageProps=iconContent.mergeImageProps,nativeProps=(0,_Utilities__WEBPACK_IMPORTED_MODULE_3__.G1)(props,_Utilities__WEBPACK_IMPORTED_MODULE_3__.vt),accessibleName=props["aria-label"]||props.title,containerProps=props["aria-label"]||props["aria-labelledby"]||props.title?{role:mergeImageProps?void 0:"img"}:{"aria-hidden":!0},finalChildren=children;return mergeImageProps&&"object"==typeof children&&"object"==typeof children.props&&accessibleName&&(finalChildren=react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,{alt:accessibleName})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("i",(0,tslib__WEBPACK_IMPORTED_MODULE_4__.Cl)({"data-icon-name":iconName},containerProps,nativeProps,mergeImageProps?{title:void 0,"aria-label":void 0}:{},{className:(0,_Utilities__WEBPACK_IMPORTED_MODULE_5__.A)(_Icon_styles__WEBPACK_IMPORTED_MODULE_6__.xD,_Icon_styles__WEBPACK_IMPORTED_MODULE_6__.xW.root,iconClassName,!iconName&&_Icon_styles__WEBPACK_IMPORTED_MODULE_6__.xW.placeholder,className),style:(0,tslib__WEBPACK_IMPORTED_MODULE_4__.Cl)({fontFamily},style)}),finalChildren)};(0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.J9)((function(iconName,className,ariaLabel){return FontIcon({iconName,className,"aria-label":ariaLabel})}))},"./node_modules/@fluentui/react/lib/components/Icon/Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var IconType,styled=__webpack_require__("./node_modules/@fluentui/utilities/lib/styled.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");!function(IconType){IconType[IconType.default=0]="default",IconType[IconType.image=1]="image",IconType[IconType.Default=1e5]="Default",IconType[IconType.Image=100001]="Image"}(IconType||(IconType={}));var Image=__webpack_require__("./node_modules/@fluentui/react/lib/components/Image/Image.js"),Image_types=__webpack_require__("./node_modules/@fluentui/react/lib/components/Image/Image.types.js"),classNamesFunction=__webpack_require__("./node_modules/@fluentui/utilities/lib/classNamesFunction.js"),properties=__webpack_require__("./node_modules/@fluentui/utilities/lib/properties.js"),FontIcon=__webpack_require__("./node_modules/@fluentui/react/lib/components/Icon/FontIcon.js"),getClassNames=(0,classNamesFunction.Z)({cacheSize:100}),IconBase=function(_super){function IconBase(props){var _this=_super.call(this,props)||this;return _this._onImageLoadingStateChange=function(state){_this.props.imageProps&&_this.props.imageProps.onLoadingStateChange&&_this.props.imageProps.onLoadingStateChange(state),state===Image_types.P6.error&&_this.setState({imageLoadError:!0})},_this.state={imageLoadError:!1},_this}return(0,tslib_es6.C6)(IconBase,_super),IconBase.prototype.render=function(){var _a=this.props,children=_a.children,className=_a.className,styles=_a.styles,iconName=_a.iconName,imageErrorAs=_a.imageErrorAs,theme=_a.theme,isPlaceholder="string"==typeof iconName&&0===iconName.length,isImage=!!this.props.imageProps||this.props.iconType===IconType.image||this.props.iconType===IconType.Image,iconContent=(0,FontIcon.ne)(iconName)||{},iconClassName=iconContent.iconClassName,iconContentChildren=iconContent.children,mergeImageProps=iconContent.mergeImageProps,classNames=getClassNames(styles,{theme,className,iconClassName,isImage,isPlaceholder}),RootType=isImage?"span":"i",nativeProps=(0,properties.G1)(this.props,properties.vt,["aria-label"]),imageLoadError=this.state.imageLoadError,imageProps=(0,tslib_es6.Cl)((0,tslib_es6.Cl)({},this.props.imageProps),{onLoadingStateChange:this._onImageLoadingStateChange}),ImageType=imageLoadError&&imageErrorAs||Image._,ariaLabel=this.props["aria-label"]||this.props.ariaLabel,accessibleName=imageProps.alt||ariaLabel||this.props.title,containerProps=!!(accessibleName||this.props["aria-labelledby"]||imageProps["aria-label"]||imageProps["aria-labelledby"])?{role:isImage||mergeImageProps?void 0:"img","aria-label":isImage||mergeImageProps?void 0:accessibleName}:{"aria-hidden":!0},finalIconContentChildren=iconContentChildren;return mergeImageProps&&iconContentChildren&&"object"==typeof iconContentChildren&&accessibleName&&(finalIconContentChildren=react.cloneElement(iconContentChildren,{alt:accessibleName})),react.createElement(RootType,(0,tslib_es6.Cl)({"data-icon-name":iconName},containerProps,nativeProps,mergeImageProps?{title:void 0,"aria-label":void 0}:{},{className:classNames.root}),isImage?react.createElement(ImageType,(0,tslib_es6.Cl)({},imageProps)):children||finalIconContentChildren)},IconBase}(react.Component),Icon_styles=__webpack_require__("./node_modules/@fluentui/react/lib/components/Icon/Icon.styles.js"),Icon=(0,styled.I)(IconBase,Icon_styles.$f,void 0,{scope:"Icon"},!0);Icon.displayName="Icon"},"./node_modules/@fluentui/react/lib/components/Icon/Icon.styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$f:()=>getStyles,xD:()=>MS_ICON,xW:()=>classNames});var classNames=(0,__webpack_require__("./node_modules/@fluentui/style-utilities/lib/index.js").l8)({root:{display:"inline-block",textDecoration:"inherit"},placeholder:["ms-Icon-placeHolder",{width:"1em"}],image:["ms-Icon-imageContainer",{overflow:"hidden"}]}),MS_ICON="ms-Icon",getStyles=function(props){var className=props.className,iconClassName=props.iconClassName,isPlaceholder=props.isPlaceholder,isImage=props.isImage,styles=props.styles;return{root:[isPlaceholder&&classNames.placeholder,classNames.root,isImage&&classNames.image,iconClassName,className,styles&&styles.root,styles&&styles.imageContainer]}}},"./node_modules/@fluentui/react/lib/components/Image/Image.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Image});var styled=__webpack_require__("./node_modules/@fluentui/utilities/lib/styled.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),classNamesFunction=__webpack_require__("./node_modules/@fluentui/utilities/lib/classNamesFunction.js"),properties=__webpack_require__("./node_modules/@fluentui/utilities/lib/properties.js"),Image_types=__webpack_require__("./node_modules/@fluentui/react/lib/components/Image/Image.types.js"),useIsomorphicLayoutEffect=__webpack_require__("./node_modules/@fluentui/utilities/lib/useIsomorphicLayoutEffect.js"),useMergedRefs=__webpack_require__("./node_modules/@fluentui/react-hooks/lib/useMergedRefs.js"),getClassNames=(0,classNamesFunction.Z)(),SVG_REGEX=/\.svg$/i;var ImageBase=react.forwardRef((function(props,forwardedRef){var frameElement=react.useRef(),imageElement=react.useRef(),_a=function useLoadState(props,imageElement){var onLoadingStateChange=props.onLoadingStateChange,onLoad=props.onLoad,onError=props.onError,src=props.src,_a=react.useState(Image_types.P6.notLoaded),loadState=_a[0],setLoadState=_a[1];(0,useIsomorphicLayoutEffect.E)((function(){setLoadState(Image_types.P6.notLoaded)}),[src]),react.useEffect((function(){loadState===Image_types.P6.notLoaded&&imageElement.current&&(src&&imageElement.current.naturalWidth>0&&imageElement.current.naturalHeight>0||imageElement.current.complete&&SVG_REGEX.test(src))&&setLoadState(Image_types.P6.loaded)})),react.useEffect((function(){null==onLoadingStateChange||onLoadingStateChange(loadState)}),[loadState]);var onImageLoaded=react.useCallback((function(ev){null==onLoad||onLoad(ev),src&&setLoadState(Image_types.P6.loaded)}),[src,onLoad]),onImageError=react.useCallback((function(ev){null==onError||onError(ev),setLoadState(Image_types.P6.error)}),[onError]);return[loadState,onImageLoaded,onImageError]}(props,imageElement),loadState=_a[0],onImageLoaded=_a[1],onImageError=_a[2],imageProps=(0,properties.G1)(props,properties.xM,["width","height"]),src=props.src,alt=props.alt,width=props.width,height=props.height,_b=props.shouldFadeIn,shouldFadeIn=void 0===_b||_b,shouldStartVisible=props.shouldStartVisible,className=props.className,imageFit=props.imageFit,role=props.role,maximizeFrame=props.maximizeFrame,styles=props.styles,theme=props.theme,loading=props.loading,coverStyle=function useCoverStyle(props,loadState,imageElement,frameElement){var previousLoadState=react.useRef(loadState),coverStyle=react.useRef();(void 0===coverStyle||previousLoadState.current===Image_types.P6.notLoaded&&loadState===Image_types.P6.loaded)&&(coverStyle.current=function computeCoverStyle(props,loadState,imageElement,frameElement){var imageFit=props.imageFit,width=props.width,height=props.height;if(void 0!==props.coverStyle)return props.coverStyle;if(loadState===Image_types.P6.loaded&&(imageFit===Image_types.N_.cover||imageFit===Image_types.N_.contain||imageFit===Image_types.N_.centerContain||imageFit===Image_types.N_.centerCover)&&imageElement.current&&frameElement.current){var desiredRatio=void 0;if(desiredRatio="number"==typeof width&&"number"==typeof height&&imageFit!==Image_types.N_.centerContain&&imageFit!==Image_types.N_.centerCover?width/height:frameElement.current.clientWidth/frameElement.current.clientHeight,imageElement.current.naturalWidth/imageElement.current.naturalHeight>desiredRatio)return Image_types.Aw.landscape}return Image_types.Aw.portrait}(props,loadState,imageElement,frameElement));return previousLoadState.current=loadState,coverStyle.current}(props,loadState,imageElement,frameElement),classNames=getClassNames(styles,{theme,className,width,height,maximizeFrame,shouldFadeIn,shouldStartVisible,isLoaded:loadState===Image_types.P6.loaded||loadState===Image_types.P6.notLoaded&&props.shouldStartVisible,isLandscape:coverStyle===Image_types.Aw.landscape,isCenter:imageFit===Image_types.N_.center,isCenterContain:imageFit===Image_types.N_.centerContain,isCenterCover:imageFit===Image_types.N_.centerCover,isContain:imageFit===Image_types.N_.contain,isCover:imageFit===Image_types.N_.cover,isNone:imageFit===Image_types.N_.none,isError:loadState===Image_types.P6.error,isNotImageFit:void 0===imageFit});return react.createElement("div",{className:classNames.root,style:{width,height},ref:frameElement},react.createElement("img",(0,tslib_es6.Cl)({},imageProps,{onLoad:onImageLoaded,onError:onImageError,key:"fabricImage"+props.src||"",className:classNames.image,ref:(0,useMergedRefs.a)(imageElement,forwardedRef),src,alt,role,loading})))}));ImageBase.displayName="ImageBase";var lib=__webpack_require__("./node_modules/@fluentui/style-utilities/lib/index.js"),getWindow=__webpack_require__("./node_modules/@fluentui/utilities/lib/dom/getWindow.js"),GlobalClassNames={root:"ms-Image",rootMaximizeFrame:"ms-Image--maximizeFrame",image:"ms-Image-image",imageCenter:"ms-Image-image--center",imageContain:"ms-Image-image--contain",imageCover:"ms-Image-image--cover",imageCenterContain:"ms-Image-image--centerContain",imageCenterCover:"ms-Image-image--centerCover",imageNone:"ms-Image-image--none",imageLandscape:"ms-Image-image--landscape",imagePortrait:"ms-Image-image--portrait"},Image=(0,styled.I)(ImageBase,(function(props){var className=props.className,width=props.width,height=props.height,maximizeFrame=props.maximizeFrame,isLoaded=props.isLoaded,shouldFadeIn=props.shouldFadeIn,shouldStartVisible=props.shouldStartVisible,isLandscape=props.isLandscape,isCenter=props.isCenter,isContain=props.isContain,isCover=props.isCover,isCenterContain=props.isCenterContain,isCenterCover=props.isCenterCover,isNone=props.isNone,isError=props.isError,isNotImageFit=props.isNotImageFit,theme=props.theme,classNames=(0,lib.Km)(GlobalClassNames,theme),ImageFitStyles={position:"absolute",left:"50% /* @noflip */",top:"50%",transform:"translate(-50%,-50%)"},window=(0,getWindow.z)(),supportsObjectFit=void 0!==window&&void 0===window.navigator.msMaxTouchPoints,fallbackObjectFitStyles=isContain&&isLandscape||isCover&&!isLandscape?{width:"100%",height:"auto"}:{width:"auto",height:"100%"};return{root:[classNames.root,theme.fonts.medium,{overflow:"hidden"},maximizeFrame&&[classNames.rootMaximizeFrame,{height:"100%",width:"100%"}],isLoaded&&shouldFadeIn&&!shouldStartVisible&&lib.lw.fadeIn400,(isCenter||isContain||isCover||isCenterContain||isCenterCover)&&{position:"relative"},className],image:[classNames.image,{display:"block",opacity:0},isLoaded&&["is-loaded",{opacity:1}],isCenter&&[classNames.imageCenter,ImageFitStyles],isContain&&[classNames.imageContain,supportsObjectFit&&{width:"100%",height:"100%",objectFit:"contain"},!supportsObjectFit&&fallbackObjectFitStyles,!supportsObjectFit&&ImageFitStyles],isCover&&[classNames.imageCover,supportsObjectFit&&{width:"100%",height:"100%",objectFit:"cover"},!supportsObjectFit&&fallbackObjectFitStyles,!supportsObjectFit&&ImageFitStyles],isCenterContain&&[classNames.imageCenterContain,isLandscape&&{maxWidth:"100%"},!isLandscape&&{maxHeight:"100%"},ImageFitStyles],isCenterCover&&[classNames.imageCenterCover,isLandscape&&{maxHeight:"100%"},!isLandscape&&{maxWidth:"100%"},ImageFitStyles],isNone&&[classNames.imageNone,{width:"auto",height:"auto"}],isNotImageFit&&[!!width&&!height&&{height:"auto",width:"100%"},!width&&!!height&&{height:"100%",width:"auto"},!!width&&!!height&&{height:"100%",width:"100%"}],isLandscape&&classNames.imageLandscape,!isLandscape&&classNames.imagePortrait,!isLoaded&&"is-notLoaded",shouldFadeIn&&"is-fadeIn",isError&&"is-error"]}}),void 0,{scope:"Image"},!0);Image.displayName="Image"},"./node_modules/@fluentui/react/lib/components/Image/Image.types.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var ImageFit,ImageCoverStyle,ImageLoadState;__webpack_require__.d(__webpack_exports__,{Aw:()=>ImageCoverStyle,N_:()=>ImageFit,P6:()=>ImageLoadState}),function(ImageFit){ImageFit[ImageFit.center=0]="center",ImageFit[ImageFit.contain=1]="contain",ImageFit[ImageFit.cover=2]="cover",ImageFit[ImageFit.none=3]="none",ImageFit[ImageFit.centerCover=4]="centerCover",ImageFit[ImageFit.centerContain=5]="centerContain"}(ImageFit||(ImageFit={})),function(ImageCoverStyle){ImageCoverStyle[ImageCoverStyle.landscape=0]="landscape",ImageCoverStyle[ImageCoverStyle.portrait=1]="portrait"}(ImageCoverStyle||(ImageCoverStyle={})),function(ImageLoadState){ImageLoadState[ImageLoadState.notLoaded=0]="notLoaded",ImageLoadState[ImageLoadState.loaded=1]="loaded",ImageLoadState[ImageLoadState.error=2]="error",ImageLoadState[ImageLoadState.errorLoaded=3]="errorLoaded"}(ImageLoadState||(ImageLoadState={}))},"./node_modules/@fluentui/utilities/lib/classNamesFunction.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>classNamesFunction});var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@fluentui/merge-styles/lib/Stylesheet.js"),_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@fluentui/merge-styles/lib/mergeStyleSets.js"),_rtl__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@fluentui/utilities/lib/rtl.js"),_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@fluentui/utilities/lib/dom/getWindow.js"),console=__webpack_require__("./node_modules/console-browserify/index.js"),MAX_CACHE_COUNT=50,DEFAULT_SPECIFICITY_MULTIPLIER=5,_memoizedClassNames=0,stylesheet=_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__.nr.getInstance();stylesheet&&stylesheet.onReset&&stylesheet.onReset((function(){return _memoizedClassNames++}));var retVal="__retval__";function classNamesFunction(options){void 0===options&&(options={});var windowMap=new Map,styleCalcCount=0,getClassNamesCount=0,currentMemoizedClassNames=_memoizedClassNames;return function(styleFunctionOrObject,styleProps){var _a;if(void 0===styleProps&&(styleProps={}),options.useStaticStyles&&"function"==typeof styleFunctionOrObject&&styleFunctionOrObject.__noStyleOverride__)return styleFunctionOrObject(styleProps);getClassNamesCount++;var shadowConfig=styleFunctionOrObject?styleFunctionOrObject.__shadowConfig__:void 0,key=shadowConfig&&shadowConfig.window?shadowConfig.window:"__default__";windowMap.has(key)||windowMap.set(key,new Map);var current=windowMap.get(key),theme=styleProps.theme,rtl=theme&&void 0!==theme.rtl?theme.rtl:(0,_rtl__WEBPACK_IMPORTED_MODULE_1__.jI)(),disableCaching=options.disableCaching;if(currentMemoizedClassNames!==_memoizedClassNames&&(currentMemoizedClassNames=_memoizedClassNames,windowMap.set(key,new Map),current=windowMap.get(key),styleCalcCount=0),options.disableCaching||(current=_traverseMap(windowMap.get(key),styleFunctionOrObject),current=_traverseMap(current,styleProps)),!disableCaching&&current[retVal]||(current[retVal]=void 0===styleFunctionOrObject?{}:(0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__.L)(["function"==typeof styleFunctionOrObject?styleFunctionOrObject(styleProps):styleFunctionOrObject],{shadowConfig:styleFunctionOrObject.__shadowConfig__,rtl:!!rtl,specificityMultiplier:options.useStaticStyles?DEFAULT_SPECIFICITY_MULTIPLIER:void 0}),disableCaching||styleCalcCount++),styleCalcCount>(options.cacheSize||MAX_CACHE_COUNT)){var win=(0,_dom__WEBPACK_IMPORTED_MODULE_3__.z)();(null===(_a=null==win?void 0:win.FabricConfig)||void 0===_a?void 0:_a.enableClassNameCacheFullWarning)&&(console.warn("Styles are being recalculated too frequently. Cache miss rate is ".concat(styleCalcCount,"/").concat(getClassNamesCount,".")),console.trace()),windowMap.get(key).clear(),styleCalcCount=0,options.disableCaching=!0}return current[retVal]}}function _traverseEdge(current,value){return value=function _normalizeValue(value){switch(value){case void 0:return"__undefined__";case null:return"__null__";default:return value}}(value),current.has(value)||current.set(value,new Map),current.get(value)}function _traverseMap(current,inputs){if("function"==typeof inputs)if(inputs.__cachedInputs__)for(var _i=0,_a=inputs.__cachedInputs__;_i<_a.length;_i++){current=_traverseEdge(current,_a[_i])}else current=_traverseEdge(current,inputs);else if("object"==typeof inputs)for(var propName in inputs)inputs.hasOwnProperty(propName)&&(current=_traverseEdge(current,inputs[propName]));return current}},"./node_modules/@fluentui/utilities/lib/shadowDom/hooks/useMergeStylesHooks.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useMergeStylesHooks});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),shadowConfig=__webpack_require__("./node_modules/@fluentui/merge-styles/lib/shadowConfig.js"),noop=function(){return!1},noopShadow=function(){return shadowConfig.ou},noopRootStylesheets=function(){return new Map},noopUndefined=function(){},MergeStylesDefaultContext=react.createContext({stylesheets:new Map,useAdoptedStylesheetEx:noop,useAdoptedStylesheet:noop,useShadowConfig:noopShadow,useMergeStylesShadowRootContext:noopUndefined,useHasMergeStylesShadowRootContext:noop,useMergeStylesRootStylesheets:noopRootStylesheets,useWindow:noopUndefined,useStyled:noopUndefined}),useMergeStylesHooks=function(){var ctx=react.useContext(MergeStylesDefaultContext);return{useAdoptedStylesheet:ctx.useAdoptedStylesheet,useAdoptedStylesheetEx:ctx.useAdoptedStylesheetEx,useShadowConfig:ctx.useShadowConfig,useMergeStylesShadowRootContext:ctx.useMergeStylesShadowRootContext,useHasMergeStylesShadowRootContext:ctx.useHasMergeStylesShadowRootContext,useMergeStylesRootStylesheets:ctx.useMergeStylesRootStylesheets,useWindow:ctx.useWindow,useStyled:ctx.useStyled}}},"./node_modules/@fluentui/utilities/lib/styled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>styled});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@fluentui/merge-styles/lib/concatStyleSetsWithProps.js"),_shadowDom_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@fluentui/utilities/lib/shadowDom/hooks/useMergeStylesHooks.js"),_customizations_useCustomizationSettings__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@fluentui/utilities/lib/customizations/useCustomizationSettings.js"),DefaultFields=["theme","styles"];function styled(Component,baseStyles,getProps,customizable,pure){var scope=(customizable=customizable||{scope:"",fields:void 0}).scope,_a=customizable.fields,fields=void 0===_a?DefaultFields:_a,Wrapped=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(props,forwardedRef){var styles=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),settings=(0,_customizations_useCustomizationSettings__WEBPACK_IMPORTED_MODULE_1__.m)(fields,scope),customizedStyles=settings.styles,rest=(settings.dir,(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Tt)(settings,["styles","dir"])),additionalProps=getProps?getProps(props):void 0,useStyled=(0,_shadowDom_index__WEBPACK_IMPORTED_MODULE_3__.A)().useStyled,cache=styles.current&&styles.current.__cachedInputs__||[],propStyles=props.styles;if(!styles.current||customizedStyles!==cache[1]||propStyles!==cache[2]){var concatenatedStyles=function(styleProps){return(0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_4__.p)(styleProps,baseStyles,customizedStyles,propStyles)};concatenatedStyles.__cachedInputs__=[baseStyles,customizedStyles,propStyles],concatenatedStyles.__noStyleOverride__=!customizedStyles&&!propStyles,styles.current=concatenatedStyles}return styles.current.__shadowConfig__=useStyled(scope),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cl)({ref:forwardedRef},rest,additionalProps,props,{styles:styles.current}))}));Wrapped.displayName="Styled".concat(Component.displayName||Component.name);var pureComponent=pure?react__WEBPACK_IMPORTED_MODULE_0__.memo(Wrapped):Wrapped;return Wrapped.displayName&&(pureComponent.displayName=Wrapped.displayName),pureComponent}},"./node_modules/@fluentui/utilities/lib/useIsomorphicLayoutEffect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>useIsomorphicLayoutEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),useIsomorphicLayoutEffect=(0,__webpack_require__("./node_modules/@fluentui/utilities/lib/dom/canUseDOM.js").S)()?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./node_modules/@griffel/react/__styles.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>__styles});var _griffel_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@griffel/core/__styles.esm.js"),_insertionFactory_esm_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@griffel/react/insertionFactory.esm.js"),_RendererContext_esm_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@griffel/react/RendererContext.esm.js"),_TextDirectionContext_esm_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@griffel/react/TextDirectionContext.esm.js");function __styles(classesMapBySlot,cssRules){const getStyles=(0,_griffel_core__WEBPACK_IMPORTED_MODULE_0__.X)(classesMapBySlot,cssRules,_insertionFactory_esm_js__WEBPACK_IMPORTED_MODULE_1__.A);return function useClasses(){const dir=(0,_TextDirectionContext_esm_js__WEBPACK_IMPORTED_MODULE_2__.m)(),renderer=(0,_RendererContext_esm_js__WEBPACK_IMPORTED_MODULE_3__.J)();return getStyles({dir,renderer})}}}}]);