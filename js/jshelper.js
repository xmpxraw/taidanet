
/*



*/




function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";path=/";
}

function setCookie(name, value)		//cookies设置
{
    var argv = setCookie.arguments;
    var argc = setCookie.arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    if (expires != null) {
        var LargeExpDate = new Date();
        LargeExpDate.setTime(LargeExpDate.getTime() + (expires * 1000 * 3600 * 24));
    }
    document.cookie = name + "=" + escape(value) + ((expires == null) ? "" : ("; expires=" + LargeExpDate.toGMTString())) + ";path=/";
}

function getCookie(Name)			//cookies读取
{
    var search = Name + "="
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search)
        if (offset != -1) {
            offset += search.length
            end = document.cookie.indexOf(";", offset)
            if (end == -1) end = document.cookie.length
            return unescape(document.cookie.substring(offset, end))
        }
        else return ""
    }
}

function request(paras) {//获取Url参数
    var url = location.href;
    var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
    var paraObj = {}
    for (i = 0; j = paraString[i]; i++) {
        paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
    }
    var returnValue = paraObj[paras.toLowerCase()];
    if (typeof (returnValue) == "undefined") {
        return "";
    } else {
        return returnValue;
    }
}




// 字符串去除前后空格--------------------------------------------------------------

String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, '');
}

// 原生ajax---------------------------------------------------------------------------

function createxmlHttpRequest() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
        if (xmlhttp.overrideMimeType) {
            xmlhttp.overrideMimeType('text/xml');
        }
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
}

function ajaxGet(url, callback) {
    // 注意在传参数值的时候最好使用encodeURI处理一下，以防出现乱码
    var xmlHttp = createxmlHttpRequest(); 
    xmlHttp.open("GET", url);
    xmlHttp.send(null);
    xmlHttp.onreadystatechange = function () {
        if ((xmlHttp.readyState == 4) && (xmlHttp.status == 200)) {
            callback(xmlHttp.responseText);
        } else {
            //callback('');
        }
    }
}

function ajaxPost(url, data,callBack) {
    // 注意在传参数值的时候最好使用encodeURI处理一下，以防出现乱码
    var xmlHttp = createxmlHttpRequest();
    xmlHttp.open("POST", url);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlHttp.send(data);
    xmlHttp.onreadystatechange = function () {
        if ((xmlHttp.readyState == 4) && (xmlHttp.status == 200)) {            
            callBack(xmlHttp.responseText);
        } else {
            //callBack('');
        }
    };
}

//  xml 转换----------------------------------------------------------------------------------------------------------
//创建xml
function stringToXML(xmlString) {
    var xmlDoc;
    if (window.ActiveXObject) {
        xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
        if (!xmlDoc) xmldoc = new ActiveXObject("MSXML2.DOMDocument.3.0");
        xmlDoc.async = false;
        xmlDoc.loadXML(xmlString);
    } else if (document.implementation && document.implementation.createDocument) {
        //xmlDoc = document.implementation.createDocument('', '', null);  
        //xmlDoc.load(xmlFile);  
        var domParser = new DOMParser();
        xmlDoc = domParser.parseFromString(xmlString, 'text/xml');
    } else {
        return null;
    }
    return xmlDoc;
}

function xmlToString(xmlobject) {
    // for IE
    if (window.ActiveXObject) {
        return xmlobject.xml;
    }
    // for other browsers
    else {
        return new XMLSerializer().serializeToString(xmlobject);
    }
}
///<summary>
///创建表单
///<summary>
function createForm(action, method) {
    ///<summary>
    ///创建表单
    ///<summary>
    var form = document.createElement("form");
    form.method = method;
    form.enctype = "multipart/form-data";//可以发送文件
    form.action = action;
    return form;
}
//创建表单元素hidden
function createHiddenInput(form, name, value) {
    var h = document.createElement("input");
    h.type = 'hidden';
    h.name = name;
    h.value = value;
    form.appendChild(h);
}


//-------------------------------

function Post(url, data, callback) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
        if (xmlhttp.overrideMimeType) {
            xmlhttp.overrideMimeType('text/xml');
        }
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("POST", url);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send(data);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            callback(xmlhttp.responseText);
        }
    };
}




