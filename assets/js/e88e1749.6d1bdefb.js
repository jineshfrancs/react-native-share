"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[475],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),h=a,m=f["".concat(c,".").concat(h)]||f[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1576:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return f}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={id:"share-remote-file",title:"Share Remote PDF file"},c=void 0,s={unversionedId:"share-remote-file",id:"share-remote-file",title:"Share Remote PDF file",description:"When sharing a pdf file with base64, there are two current problems.",source:"@site/docs/share-remote-file.mdx",sourceDirName:".",slug:"/share-remote-file",permalink:"/react-native-share/docs/share-remote-file",draft:!1,editUrl:"https://github.com/react-native-community/react-native-share/edit/master/website/docs/share-remote-file.mdx",tags:[],version:"current",frontMatter:{id:"share-remote-file",title:"Share Remote PDF file"},sidebar:"someSidebar",previous:{title:"Testing",permalink:"/react-native-share/docs/testing"},next:{title:"Migrating to v4",permalink:"/react-native-share/docs/migrate-v3-to-v4"}},p={},f=[],u={toc:f},h="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(h,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When sharing a pdf file with base64, there are two current problems."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On WhatsApp base64 wont be recognized => nothing to share"),(0,o.kt)("li",{parentName:"ol"},"In the GmailApp the file extension is wrong (.dat).")),(0,o.kt)("p",null,'Therefore we use this "workaround" in order to handle pdf sharing for iOS Apps to mentioned Apps'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install react-native-fetch-blob"),(0,o.kt)("li",{parentName:"ol"},"Set a specific path in the RNFetchBlob configurations"),(0,o.kt)("li",{parentName:"ol"},"Download the PDF file to temp device storage"),(0,o.kt)("li",{parentName:"ol"},"Share the response's path() of the downloaded file directly")),(0,o.kt)("p",null,"Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"static sharePDFWithIOS(fileUrl, type) {\n  let filePath = null;\n  let file_url_length = fileUrl.length;\n  const configOptions = {\n    fileCache: true,\n    path:\n      DIRS.DocumentDir + (type === 'application/pdf' ? '/SomeFileName.pdf' : '/SomeFileName.png') // no difference when using jpeg / jpg / png /\n  };\n  RNFetchBlob.config(configOptions)\n    .fetch('GET', fileUrl)\n    .then(async resp => {\n      filePath = resp.path();\n      let options = {\n        type: type,\n        url: filePath // (Platform.OS === 'android' ? 'file://' + filePath)\n      };\n      await Share.open(options);\n      // remove the image or pdf from device's storage\n      await RNFS.unlink(filePath);\n    });\n}\n")),(0,o.kt)("p",null,"Nothing to do on Android. You can share the pdf file with base64"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"static sharePDFWithAndroid(fileUrl, type) {\n  let filePath = null;\n  let file_url_length = fileUrl.length;\n  const configOptions = { fileCache: true };\n  RNFetchBlob.config(configOptions)\n    .fetch('GET', fileUrl)\n    .then(resp => {\n      filePath = resp.path();\n      return resp.readFile('base64');\n    })\n    .then(async base64Data => {\n      base64Data = `data:${type};base64,` + base64Data;\n      await Share.open({ url: base64Data });\n      // remove the image or pdf from device's storage\n      await RNFS.unlink(filePath);\n    });\n}\n")))}m.isMDXComponent=!0}}]);