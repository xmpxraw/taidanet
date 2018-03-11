var $ = function (id) { return document.getElementById(id); };

/*判断是否有迅雷的插件*/

var XunLei = function () {

    var xl = $("xunlei_com_thunder_helper_plugin_d462f475-c18e-46be-bd10-327458d045bd");
    if (!xl == "") { xl.style.display = "none"; };
}

window.onscroll = function () {
    var W = document.body.clientWidth;
    if (W >= 980) {
        var scroll = document.body.scrollTop || document.documentElement.scrollTop;
        var topBtn = document.getElementById("gotoTopBtn");
        if (scroll > 100) {
            if (topBtn == null || topBtn == undefined) {
                topBtn = document.createElement("div");
                topBtn.id = "gotoTopBtn";
                topBtn.onclick = function () {
                    if (document.body.scrollTop) {
                        document.body.scrollTop = 0;
                    } else {
                        document.documentElement.scrollTop = 0;
                    }
                };
                document.body.appendChild(topBtn);
            }
        } else {
            if (topBtn != null && topBtn != undefined) {
                document.body.removeChild(topBtn);
            }
        }
    }
};



function SetPage() {
    var W = document.body.clientWidth;
    if (W > 1920) {
        document.body.style.fontSize = "20px";
        document.body.style.lineHeight = "30px";
    }
    else if (W <= 1920 && W > 1600) {
        document.body.style.fontSize = "18px";
        document.body.style.lineHeight = "28px";
    }
    else if (W <= 1600 && W >= 1240) {
        document.body.style.fontSize = "14px";
        document.body.style.lineHeight = "24px";
    }
    else {
        document.body.style.fontSize = "12px";
        document.body.style.lineHeight = "18px";
    }
};



/*屏幕小于980时小菜单的动作*/

var SrceenMax980 = function () {
    var m = $("Menu");
    var ml = $("MenuList");
    m.open = false;
    m.onclick = function () {
        if (!this.open) {
            ml.style.display = "block";
            m.style.background = "#00c9ff";
            m.open = true;

        } else {
            ml.style.display = "none";
            m.style.background = "#ffcc00";
            m.open = false;

        }
    }
}

var SrceenMax980Open = function () {
    var m = $("Menu");
    if (this.innerWidth <= 980) {
        var ml = $("MenuList");
        this.open = true;
        m.onclick();
    }
}


/*二维码点击放大*/

var QRcode = function () {

    var QR = $("QRcodeOn");
    var QRbig = $("QRcode");
    var off = $("offQR");
    QR.onclick = function () {
        QRbig.style.display = "table";
        setTimeout(function () { QRbig.style.opacity = "1" }, 100);
    }
    off.onclick = function () {
        QRbig.style.opacity = "0"
        setTimeout(function () { QRbig.style.display = "none"; }, 100);


    }
}


/*成功案例中ICE的更多*/

var ICE = function () {

    var More = $("More");
    var N = $("MoreNav");
    var O = $("off");
    More.onclick = function () {
        N.style.display = "block";
    }
    O.onclick = function () {
        N.style.display = "none";
    }
};



/*招聘页面的SlidDoor*/

var Slid = function () {
    var JMenu = $("JMenu").children;
    var con = $("Content").children;
    var Jleft = $("Jleft");
    var Jright = $("Jright");
    var MC = ["Mcontent1", "Mcontent2", "Mcontent3", "Mcontent4", "Mcontent5"];
    var LN = ["LeftNav1", "LeftNav2", "LeftNav3", "LeftNav4", "LeftNav5"]
    var ML = ["Mleft1", "Mleft2", "Mleft3", "Mleft4", "Mleft5"]

    var Pmc = null;
    var Cln = null;
    var ml = null;
    var cont = 5;
    var Page = 0;
    var IsClose = false;


    for (var i = 0; i < JMenu.length; i++) {
        JMenu[i].index = i;
        JMenu[i].onclick = function () {
            for (var k = 0; k < JMenu.length; k++) {
                RemoveClass(JMenu[k], "active");
                con[k].style.display = "none";
                Jleft.style.left = "34%";
                Jleft.style.display = "block";
                Jright.style.display = "none";
            }
            AddClass(this, "active");
            con[this.index].style.display = "block";
            Page = this.index;
            $(LN[Page]).children[0].click();
        }
    }




    for (var j = 0; j < cont; j++) {
        Cln = $(LN[j]).children;
        Pmc = $(MC[j]).children;
        ml = $(ML[j]);
        Pmc = $(MC[j]);
        Jleft.onclick = function () {
            var _ml = $(ML[Page]);
            var _Pmc = $(MC[Page]);
            _ml.style.left = "-28%";
            _Pmc.style.width = "94%"
            Jright.style.left = "6%";
            Jleft.style.display = "none";
            Jright.style.display = "block";
            IsClose = true;
        }

        Jright.onclick = function () {
            var _ml = $(ML[Page]);
            var _Pmc = $(MC[Page]);
            _ml.style.left = "0";
            _Pmc.style.width = "66%"
            Jleft.style.left = "34%";
            Jleft.style.display = "block";
            Jright.style.display = "none";
            IsClose = false;
        }
        for (var k = 0; k < Cln.length; k++) {
            Cln[k].index = k;
            Cln[k].onclick = function () {
                if (!IsClose) {
                    var _Cln = $(LN[Page]).children;
                    var _Pmc = $(MC[Page]).children;
                    for (var i = 0; i < _Cln.length; i++) {
                        _Cln[i].className = "";
                        _Pmc[i].style.display = "none";
                    }
                    AddClass(this, "active");
                    _Pmc[this.index].style.display = "block";
                }
            }
        }


    }
};

var JPointer = function () {
    var Jleft = $("Jleft");
    var Jright = $("Jright");
    Jleft.onclick = function () {
        var cn = $("Mleft");
        var cl = $("CList");

        cn.style.left = "-28%";
        cl.style.width = "94%"
        Jright.style.left = "6%";
        Jleft.style.display = "none";
        Jright.style.display = "block";
    }

    Jright.onclick = function () {
        var cn = $("Mleft");
        var cl = $("CList");
        cn.style.left = "0";
        cl.style.width = "66%"
        Jleft.style.left = "34%";
        Jleft.style.display = "block";
        Jright.style.display = "none";

    }
}



/*案例展示详情页的滑动门*/
var CaseList = function () {

    var CaseNav = $("CaseNav").children;
    var CList = $("CList").children;
    var Jleft = $("Jleft");
    var Jright = $("Jright");

    var cn = $("Mleft");
    var cl = $("CList");

    var IsClose = false;



    Jleft.onclick = function () {
        cn.style.left = "-28%";
        cl.style.width = "94%"
        Jright.style.left = "6%";
        Jleft.style.display = "none";
        Jright.style.display = "block";
        IsClose = true;
    }
    Jright.onclick = function () {
        cn.style.left = "0";
        cl.style.width = "66%"
        Jleft.style.left = "34%";
        Jleft.style.display = "block";
        Jright.style.display = "none";
        IsClose = false;

    }

    for (var i = 0; i < CaseNav.length; i++) {
        CaseNav[i].index = i;
        CaseNav[i].onclick = function () {
            if (!IsClose) {
                var cls = this.className;
                for (var k = 0; k < CaseNav.length; k++) {
                    if (k != this.index)
                        CaseNav[k].className = "";

                }
                if (cls != 'active') {
                    this.className = "active";
                    //获取id并显示内容
                    var newsId = this.getAttribute("nid");
                    var aim = this.getAttribute("aim");

                    ajaxGet("/Json/Handler.ashx?aim=" + aim + "&NewsId=" + newsId + "&t=" + new Date().getMilliseconds(), function (data) {
                        if (data != '') {
                            newsDat = (new Function("return " + data))();
                            if (newsDat.status) {
                                var n = newsDat.data;

                                document.getElementById("TiTle").innerHTML = n.ChineseTitle;
                                document.getElementById("ETitle").innerHTML = n.EnglishTitle;
                                document.getElementById("Time").innerHTML = n.day;
                                document.getElementById("yymm").innerHTML = n.moth;
                                document.getElementById("Main").innerHTML = n.Content;

                                var Mleft = document.getElementById("Mleft");
                                var CList = document.getElementById("CList");

                                CList.style.minHeight = Mleft.offsetHeight + "px";
                            }
                        }
                    });
                }
            }
        }



    }
    var Mleft = document.getElementById("Mleft");
    var CList = document.getElementById("CList");

    CList.style.minHeight = Mleft.offsetHeight + "px";
}




/*手机版客户认可的更多客户*/
var MlogoH = function () {
    var MLogo = $("MLogo");
    var HMlogo = $("HMlogo");
    var Himg = $("Himg");
    var LI = HMlogo.children;


    MLogo.onclick = function () {
        HMlogo.style.height = "auto";// ((LI.length / 3) * (Himg.height + 40)) + "px";
        //HMlogo.style.overflow = "hidden";height:auto;
        MLogo.style.display = "none";

    }
}


/*手机版招聘*/

var WapJob = function () {
    var WapJMenu = $("WapJMenu").children;
    var WapNr = $("WapNr").children;

    for (var i = 0; i < WapNr.length; i++) {
        WapJMenu[i].index = i;
        WapJMenu[i].onclick = function () {
            for (var k = 0; k < WapJMenu.length; k++) {
                RemoveClass(WapJMenu[k], "active");
                WapNr[k].style.display = "none";
            }
            AddClass(this, "active");
            WapNr[this.index].style.display = "block";
        }
    }

}



var RemoveClass = function (elem, RclassName) {
    var cla = elem.className;
    elem.className = cla.replace(" " + RclassName, "");
}

var AddClass = function (elem, NewClassName) {
    var cla = elem.className;
    elem.className = cla + " " + NewClassName;
}



/*首页Banner滑动特效*/

var banner = function () {
    var b = $("banner");
    var left = $("left");
    var right = $("right");
    var p = $("pic");
    var pList = $("pic").children;
    var t = $("target");
    var count = pList.length;
    var spanNum = [];
    var page = 0;
    var temple = document.createDocumentFragment()
    for (var i = 0; i < count; i++) {
        var span = document.createElement("span");
        i == 0 && (span.className = "active");
        temple.appendChild(span);
        spanNum.push(span);
    }
    t.appendChild(temple);

    for (var j = 0; j < count; j++) {
        spanNum[j].index = j;
        spanNum[j].onclick = function () {
            if (this.index != page) {
                this.className = "active";
                for (var k = 0; k < count; k++) {
                    if (this.index != k) {
                        spanNum[k].className = "";
                    }
                }
                Hide(page);
                page = this.index;
                Show(page);
            }
        }

    }

    var Hide = function (i) {
        pList[i].style.opacity = 0;
        setTimeout(function () {
            pList[i].style.display = "none";
        }, 200);
    };

    var Show = function (i) {
        pList[i].style.display = "block";
        setTimeout(function () {
            pList[i].style.opacity = 1;
        }, 20);
    }

    right.onclick = function () {
        if (page !== (count - 1)) {
            spanNum[page].className = "";
            Hide(page);
            page++;
            spanNum[page].className = "active";
            Show(page);
        } else {
            spanNum[page].className = "";
            Hide(page);
            Show(0);
            spanNum[0].className = "active";
            return page = 0;
        }

    }

    left.onclick = function () {
        if (page !== 0) {
            spanNum[page].className = "";
            Hide(page);
            page--;
            spanNum[page].className = "active";
            Show(page);
        } else {
            spanNum[0].className = "";
            Hide(page);
            Show(count - 1);
            spanNum[count - 1].className = "active";
            return page = count - 1;
        }

    }

    pList[0].style.display = "block";
    pList[0].style.opacity = 1;
    spanNum[0].click();
}

/*首页WapBanner滑动特效*/
var WapBanner = function () {
    var wt = $("Wtarget");
    var wp = $("Wpic").children;
    var Wright = $("W_right");
    var Wleft = $("W_left");
    var wcount = wp.length;
    var wspanNum = [];
    var wpage = 0;
    var fal = false;
    var wtemple = document.createDocumentFragment();
    for (var i = 0; i < wcount; i++) {
        var s = document.createElement("span");
        i == 0 && (s.className = "active");
        wtemple.appendChild(s);
        wspanNum.push(s);
    }
    wt.appendChild(wtemple);


    for (var j = 0; j < wcount; j++) {
        wspanNum[j].index = j;
        wspanNum[j].onclick = function () {
            if (this.index != wpage) {
                this.className = "active";
                for (var k = 0; k < wcount; k++) {
                    if (this.index != k) {
                        wspanNum[k].className = "";
                    }
                }
                Hide(wpage);
                wpage = this.index;
                Show(wpage);
            }
        }

    }


    var Hide = function (i) {
        wp[i].style.opacity = 0;
        setTimeout(function () {
            wp[i].style.display = "none";
        }, 200);
    };

    var Show = function (i) {
        wp[i].style.display = "block";
        setTimeout(function () {
            wp[i].style.opacity = 1;
        }, 20);
    }


    Wright.onclick = function () {
        if (wpage !== (wcount - 1)) {
            wspanNum[wpage].className = "";
            Hide(wpage);
            wpage++;
            wspanNum[wpage].className = "active";
            Show(wpage);
        } else {
            wspanNum[wpage].className = "";
            Hide(wpage);
            Show(0);
            wspanNum[0].className = "active";
            return wpage = 0;
        }
        fal = true;

    }

    Wleft.onclick = function () {
        if (wpage !== 0) {
            wspanNum[wpage].className = "";
            Hide(wpage);
            wpage--;
            wspanNum[wpage].className = "active";;
            Show(wpage);
        } else {
            wspanNum[0].className = "";
            Hide(wpage);
            Show(wcount - 1);
            wspanNum[wcount - 1].className = "active";
            return wpage = wcount - 1;
        }
        fal = true;

    }

    var auto = setInterval(function () {
        if (fal != false) {
            clearInterval(auto);
        }
        if (wpage !== (wcount - 1)) {
            wspanNum[wpage].className = "";
            Hide(wpage);
            wpage++;
            wspanNum[wpage].className = "active";
            Show(wpage);
        } else {
            wspanNum[wpage].className = "";
            Hide(wpage);
            Show(0);
            wspanNum[0].className = "active";
            return wpage = 0;
        }
    }, 5000);

    wp[0].style.display = "block";
    wp[0].style.opacity = 1;
    wspanNum[0].click();
}


var cw = function () {
    var wt = $("Wtarget");
    var clientWidth = document.body.clientWidth || document.documentElement.clientWidth;
    if (clientWidth > 400) {
        wt.style.display = "block";
    } else {
        wt.style.display = "none";
    }
}



/*导航栏的二级菜单*/

var cmenu = function () {
    var cm = ["Menu01", "Menu02", "Menu03", "Menu04", "Menu05"];
    var nav = $("Nav").children;
    var page = 0;
    for (var i = 0; i < cm.length; i++) {
        nav[i].index = i;
        nav[i].onmouseover = function (e) {
            e = window.event || e;
            e.stopPropagation ? (e.stopPropagation()) : (e.cancelBubble = true);
            page = this.index;
            $(cm[page]).style.display = "block";
            $(cm[page]).style.opacity = "1";

        }
        nav[i].onmouseout = function () {
            page = this.index;
            $(cm[page]).style.display = "none";

        }
    }
}



/*首页达生新闻的图片滑动门效果*/

var BImg = function (AboutImg, Aleft, Aright) {
    var BI = $(AboutImg).children;
    var Ipage = 0;
    var Icount = BI.length;
    var fal = false;
    var left = $(Aleft);
    var right = $(Aright);

    var Hide = function (Ipage) {
        BI[Ipage].style.opacity = 0;
        setTimeout(function () {
            BI[Ipage].style.display = "none";
        }, 200);
    };

    var Show = function (Ipage) {
        BI[Ipage].style.display = "block";
        setTimeout(function () {
            BI[Ipage].style.opacity = 1;
        }, 20);
    };

    left.onclick = function () {
        if (Icount > 1) {
            if (Ipage !== 0) {
                Hide(Ipage);
                Ipage--;
                Show(Ipage);
            } else {
                Hide(Ipage);
                Show(Icount - 1);
                return Ipage = Icount - 1;
            }
            fal = true;

        }
    }

    right.onclick = function () {
        if (Icount > 1) {
            if (Ipage !== (Icount - 1)) {
                Hide(Ipage);
                Ipage++;
                Show(Ipage);
            } else {
                Hide(Ipage);
                Show(0);
                return Ipage = 0;
            }
            fal = true;
        }
    }

    var auto = setInterval(function () {
        if (Icount > 1) {
            if (fal != false) {
                clearInterval(auto);
            }
            if (Ipage !== (Icount - 1)) {
                Hide(Ipage);
                Ipage++;
                Show(Ipage);
            } else {
                Hide(Ipage);
                Show(0);
                return Ipage = 0;
            }
        }
    }
    , 5000);

    BI[0].style.display = "block";
    BI[0].style.opacity = 1;

}




/*WAP首页达生新闻的图片滑动门效果*/

var WBImg = function () {
    var WBI = $("WAboutImg").children;
    var WIpage = 0;
    var WIcount = WBI.length;
    var Wfal = false;
    var Wleft = $("Wleft");
    var Wright = $("Wright");

    var WHide = function (WIpage) {
        WBI[WIpage].style.opacity = 0;
        setTimeout(function () {
            WBI[WIpage].style.display = "none";
        }, 200);
    };

    var WShow = function (WIpage) {
        WBI[WIpage].style.display = "block";
        setTimeout(function () {
            WBI[WIpage].style.opacity = 1;
        }, 20);
    };

    Wleft.onclick = function () {
        if (WIcount > 1) {
            if (WIpage !== 0) {
                WHide(WIpage);
                WIpage--;
                WShow(WIpage);
            } else {
                WHide(WIpage);
                WShow(WIcount - 1);
                return WIpage = WIcount - 1;
            }
            Wfal = true;
        }

    }

    Wright.onclick = function () {
        if (WIcount > 1) {
            if (WIpage !== (WIcount - 1)) {
                WHide(WIpage);
                WIpage++;
                WShow(WIpage);
            } else {
                WHide(WIpage);
                WShow(0);
                return WIpage = 0;
            }
            Wfal = true;
        }
    }

    var Wauto = setInterval(function () {
        if (WIcount > 1) {
            if (Wfal != false) {
                clearInterval(Wauto);
            }
            if (WIpage !== (WIcount - 1)) {
                WHide(WIpage);
                WIpage++;
                WShow(WIpage);
            } else {
                WHide(WIpage);
                WShow(0);
                return WIpage = 0;
            }
        }
    }, 5000);

    WBI[0].style.display = "block";
    WBI[0].style.opacity = 1;

}




/*新闻列表滑动加载更多*/


var newsDat = [];
var json = [];
/*ajaxGet("/Json/Handler.ashx?aim=NewsList&t=" + new Date().getMilliseconds(), function (data) {
    if (data != '') {
        newsDat = (new Function("return " + data))();
        if (newsDat.status) {
            json = newsDat.data;
        }
    }
});*/

var WapNewList = function () {
    var wnl = $("WapNewList");
    var wna = $("WapNewAN");
    var SetPage = 5;
    var conut = json.length;



    if (conut < SetPage) {
        var temple = document.createDocumentFragment();
        for (var i = 0; i < conut; i++) {
            var l = document.createElement("li");
            l.innerHTML = '<div class="Time">' + json[i].time[1] + '<span>' + json[i].time[0] + '</span>' + '</div>' + '<a href="' + json[i].URL + '">' + '<h2>' + json[i].Title + '</h2>' + '<div class="en">' + json[i].Subtitle + '</div>' + '<div class="nr">' + json[i].Author + '</div>' + '</a>';
            temple.appendChild(l);
        }
        wnl.appendChild(temple);
        wna.style.display = "none";
    } else {
        var temple = document.createDocumentFragment();
        for (var i = 0; i < SetPage; i++) {
            var l = document.createElement("li");
            l.innerHTML = '<div class="Time">' + json[i].time[1] + '<span>' + json[i].time[0] + '</span>' + '</div>' + '<a href="' + json[i].URL + '">' + '<h2>' + json[i].Title + '</h2>' + '<div class="en">' + json[i].Subtitle + '</div>' + '<div class="nr">' + json[i].Author + '</div>' + '</a>';
            temple.appendChild(l);
        }
        wnl.appendChild(temple);
        wna.style.display = "black";
    }
}

var NewMore = function () {
    var wnl = $("WapNewList");
    var wnlC = $("WapNewList").children;
    var wna = $("WapNewAN");
    var SetPage = wnlC.length;
    var conut = json.length;
    var marginBot = 0;

    if (document.compatMode === "CSS1Compat") {
        marginBot = document.documentElement.scrollHeight - (document.documentElement.scrollTop + document.body.scrollTop) - document.documentElement.clientHeight;
    } else {
        marginBot = document.body.scrollHeight - document.body.scrollTop - document.body.clientHeight;
    }
    if (marginBot <= 0) {
        if (conut < 5) {
            wna.style.display = "none";
        } else {
            if (!wnl == "" && wnlC.length < conut) {
                if (SetPage < conut && (conut - SetPage) > 5) {
                    var temple = document.createDocumentFragment();
                    for (var i = SetPage; i < (SetPage + 5) ; i++) {
                        var l = document.createElement("li");
                        l.innerHTML = '<div class="Time">' + json[i].time[1] + '<span>' + json[i].time[0] + '</span>' + '</div>' + '<a href="' + json[i].URL + '" target="_blank">' + '<h2>' + json[i].Title + '</h2>' + '<div class="en">' + json[i].Subtitle + '</div>' + '<div class="nr">' + json[i].Author + '</div>' + '</a>';
                        temple.appendChild(l);
                    }
                    wnl.appendChild(temple);
                    wna.style.display = "black";

                } else {
                    var temple = document.createDocumentFragment();
                    for (var i = SetPage; i < conut ; i++) {
                        var l = document.createElement("li");
                        l.innerHTML = '<div class="Time">' + json[i].time[1] + '<span>' + json[i].time[0] + '</span>' + '</div>' + '<a href="' + json[i].URL + '" target="_blank">' + '<h2>' + json[i].Title + '</h2>' + '<div class="en">' + json[i].Subtitle + '</div>' + '<div class="nr">' + json[i].Author + '</div>' + '</a>';
                        temple.appendChild(l);

                    }
                    wnl.appendChild(temple);
                    wna.style.display = "none";
                }

            }

        }

    }
}









