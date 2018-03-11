$(function(){
//整体背景js控制开始
	var conHeight = $(window).height();
	$('.con').css('height',''+conHeight+'px');
	$(window).resize(function(){
		var conHeight = $(window).height();
		$('.con').css('height',''+conHeight+'px');
		
		//banner大小控制
		var myWidth = $(window).width();//'+myWidth+'
		$('page1 img').css('width',''+myWidth+'px');
		
		var myHeight = $(window).height();//'+myWidth+'
		$('page1 img').css('height',''+myHeight+'px');		
	});
	
	 var num = 0;
	$(document).mousewheel(function(event,delta){
		
		if(!$('.con').is(':animated')){
			if(delta == -1){
				num++;
				if(num > 4){
					num = 4;
				}
			}else if(delta == 1){
				num--;
				if(num < 0){
					num = 0;
				}
			}
			var bfb = num * -100;
			$('.con').css('-moz-transform','translateY('+bfb+'%)');
			$('.con').css('-webkit-transform','translateY('+bfb+'%)');
			$('.con').css('-ms-transform','translateY('+bfb+'%)');
			$('.con').css('-o-transform','translateY('+bfb+'%)');
			$('.yuanDian li').eq(num).addClass('current').siblings().removeClass('current');
			
			$('.navUl li').eq(num).addClass('nuCurrent').siblings().removeClass('nuCurrent');
			
			$('.con .page').eq(num).addClass('current').siblings().removeClass('current');
			  }
	});
	
	$('.yuanDian li').click(function(e) {
		$(this).addClass('current').siblings().removeClass('current');
		num = $(this).index();
		var bfb = num * -100;
		$('.con').css('-moz-transform','translateY('+bfb+'%)');
		$('.con').css('-ms-transform','translateY('+bfb+'%)');
		$('.con').css('-webkit-transform','translateY('+bfb+'%)');
		$('.con').css('-o-transform','translateY('+bfb+'%)');
		$('.con .page').eq(num).addClass('current').siblings().removeClass('current');
		$('.navUl li').eq($(this).index()).addClass('nuCurrent').siblings().removeClass('nuCurrent');	
	});
	
//整体背景js控制结束
	
//导航的控制
	$('.navUl li').click(function(e) {
		$(this).addClass('nuCurrent').siblings().removeClass('nuCurrent');
		$('.yuanDian li').eq($(this).index()).addClass('current').siblings().removeClass('current');
		num = $(this).index();
		var bfb = num * -100;
		$('.con').css('-moz-transform','translateY('+bfb+'%)');
		$('.con').css('-ms-transform','translateY('+bfb+'%)');
		$('.con').css('-webkit-transform','translateY('+bfb+'%)');
		$('.con').css('-o-transform','translateY('+bfb+'%)');
		$('.con .page').eq(num).addClass('current').siblings().removeClass('current');	
	})
//导航的结束
//bannner图控制自适应
	var myWidth = $(window).width();//'+myWidth+'
	$('page1 img').css('width',''+myWidth+'px');
	
	var myHeight = $(window).height();//'+myWidth+'
	$('page1 img').css('height',''+myHeight+'px');	
//bannner图控制自适应结束			

	
//小米呼吸灯轮播开始
	var timer01 = null;
	var num = 0;
	$('.page1 ul li:first').show();
	$('.page1 ol li').click(function(e) {
		
		$('.page1 ul li').eq(num).fadeOut();
		$('.page1 ul li').eq($(this).index()).fadeIn();
        $(this).addClass('pgolCurrent').siblings().removeClass('pgolCurrent');
		
		num = $(this).index();
		//$('.page1 ul li').eq($(this).index()).stop().fadeIn(500).siblings().fadeOut(100);
    });
	var timer01 = null;
	var myTimer = function(){
		num++;
		if (num > 3){
			num = 0;
		}
		$('.page1 ol li').eq(num).addClass('pgolCurrent').siblings().removeClass('pgolCurrent')
		$('.page1 ul li').eq(num).stop().fadeIn().siblings().fadeOut();
	};
	
	timer01 = setInterval(myTimer,3000);
	$('.page1 ol li').hover(function(e){
    	clearInterval(timer01);
	},function(){
		timer01 = setInterval(myTimer,3000);		
    });
//小米呼吸灯轮播结束

//第二页导航加一个音乐效果
		$('.nav02 ul li').mouseenter(function(e) {
			//鼠标滑过第几个li就播放第几个audio
			$('figure audio').eq($(this).index()).get(0).currentTime = 0;//多次触发的时候 把之前没支执行完的音乐恢复到0的位置
			$('figure audio').eq($(this).index()).get(0).play();			
        }); 
//第二页导航加一个音乐效果结束

//第二页第一个无缝滚动开始
		$('.pg2Up .pg2Up01').append($('.pg2Up .pg2Up01 li:eq(0),.pg2Up .pg2Up01 li:eq(1),.pg2Up .pg2Up01 li:eq(2),.pg2Up .pg2Up01 li:eq(3),.pg2Up .pg2Up01 li:eq(4)').clone(true));
		var timer02 = null;
		var num02 = 0;
		var fangXiang = -1;//全局变量 控制方向	
		var myTimer02 = function(){
			num02+=fangXiang;// num = num - 3;  '+num+'
			//如果num的值小于-1200 那么我们要让num的恢复到0
			if(num02 < -1680){
				num02 = 0;
			}else if(num02 > 0){
				num02 = -1680;
			}
			$('.pg2Up .pg2Up01').css('left',''+num02+'px');
		};
		
		timer02 = setInterval(myTimer02,30);
		
		$('.pg2Up .pg2Up01 li').hover(function(e) {
            $(this).siblings().stop().fadeTo(300,0.2);
			//清除定时器
			clearInterval(timer02);
        },function(){
			$(this).siblings().stop().fadeTo(300,1);
			//离开的时候再开启定时器
			clearInterval(timer02);
			timer02 = setInterval(myTimer02,30);
		});
//第二页第一个无缝滚动结束

//第二页第二个无缝滚动开始
		$('.pg2Up .pg2Up02').append($('.pg2Up .pg2Up02 li:eq(0),.pg2Up .pg2Up02 li:eq(1),.pg2Up .pg2Up02 li:eq(2),.pg2Up .pg2Up02 li:eq(3),.pg2Up .pg2Up02 li:eq(4)').clone(true));
		var timer04 = null;
		var num04 = 0;
		var fangXiang04 = 3;//全局变量 控制方向	
		var myTimer04 = function(){
			num04+=fangXiang04;// num = num - 3;  '+num+'
			//如果num的值小于-1200 那么我们要让num的恢复到0
			if(num04 < -1680){
				num04 = 0;
			}else if(num04 > 0){
				num04 = -1680;
			}
			$('.pg2Up .pg2Up02').css('left',''+num04+'px');
		};
		
		timer04 = setInterval(myTimer04,30);
		
		$('.pg2Up .pg2Up02 li').hover(function(e) {
            $(this).siblings().stop().fadeTo(300,0.2);
			//清除定时器
			clearInterval(timer04);
        },function(){
			$(this).siblings().stop().fadeTo(300,1);
			//离开的时候再开启定时器
			clearInterval(timer04);
			timer04 = setInterval(myTimer04,30);
		});
//第二页第二个无缝滚动结束
	$('.nav02 ul li, .pg2Up01 li').on('click', function (e) {
		var $target = $(e.currentTarget),
			targetIndex = $target.index()
		console.log($target.index())
		var inforArr = [{
			'title':'人事经理',
			'titleInfo':'招聘1人，专科及以上学历，人力资源、行政管理、劳动经济等相关专业；全面了解人力资源各模块工作，熟悉劳动法等；有较强的执行力、管理能力及职业素养，服务意识，团队合作精神；沟通能力强，工作风格成熟稳重。',
			'data':{
				1: '参与制定人力资源战略规划。',
				2: '组织制定行政管理规章制度及督促、检查制度的贯彻执行。',
				3: '负责本部门的信息资料档案管理工作。',
				4: '建立人事管理内部工作程序和工作标准，提高工作效率。',
				5: '制定符合公司发展并有激励性的薪酬激励体系。 ',
				6: '人员招聘，人事档案管理。 ',
				7: '劳动合同管理、签订。',
				8: '协助总经理处理公司公文、行政、人事工作。',
				9: '制定全面的考核体系及评价政策并组织实施，对各部门绩效评价过程进行监督，解决出现的问题，使评价体系落到实处，不断完善绩效管理体系。',
				10: '人际关系良好，具备较强的责任感和事业心。'
			}
		},
		{
			'title':'行政专员',
			'titleInfo':'招聘1人， 大专以上学历，行政管理、人力资源管理或相关专业； 熟练操作办公软件；熟悉行政管理工作，清楚行政管理的业务流程；组织沟通协调能力强，有原则，执行能力强，有亲和力，气质、形象佳，性格开朗、乐观；有过人事助理或行政工作经验者优先。',
			'data':{
				1: '负责公司的行政管理工作，做好各部门间的沟通、协调与工作落实；',
				2: '负责公司企业文化建设，组织和开展公司各项文体娱乐活动；',
				3: '负责公司员工考勤的管理与统计工作，固定资产及其他办公设备的管理工作；',
				4: '负责公司各类证件的办理、年审、续期、变更工作；',
				5: '完成上级交办的其它工作。'
			}
		},
		{
			'title':'营销策划',
			'titleInfo':'招聘1人，市场营销、设计、媒体管理等相关专业大学本科及以上学历；有营销策划经验、市场经验；具有敏锐的市场洞察力。能够熟练掌握市场策划整体运作流程的细节，优秀的公关能力、协调能力和组织能力；较强的判断与决策能力、逻辑推理和分析能力。',
			'data':{
				1: '参与制定项目总体营销推广策略及方案，适时反馈调整需求；',
				2: '根据项目定位、营销推广策略和招商配合要求，科学设计各类推广海报、文宣、pop、多媒体宣传片等，展开有效宣传推广；',
				3: '对全年形象进行把关，领导并审核设计、布置、美陈类相关事项；',
				4: '建立人事管理内部工作程序和工作标准，提高工作效率；',
				5: '审阅品牌及各项目公司广告设计稿件，并指导正确的推广思路和监督执行。'
			}
		},
		{
			'title':'财务',
			'titleInfo':'招聘人数1人，财会专业大专或以上学历，有会计从业资格证书；了解国家财经政策和会计、税务法规，熟悉银行结算业务；一年以上出纳工作经验。',
			'data':{
				1: '日常付款单据的整理；',
				2: '日常报销付款及公司各项收付款业务，资金账户网银操作（银行账户）；',
				3: '负责资金账户的开户、业务办理；',
				4: '负责财务相关资料的整理及归档；',
				5: '每月及时提供银行明细等资料； ',
				6: '编制各资金账户日记账； ',
				7: '负责每月工资的发放工作；',
				8: '负责开具发票，协助会计账务处理。'
			}
		},
		{
			'title':'出纳',
			'titleInfo':'招聘1人，本科及以上学历，财会相关专业；从事出纳工作2年以上，有一般纳税人企业、软件行业工作经验优先考虑；有会计从业资格证优先；有较强的责任心和使命感，具有较强的沟通、协调能力、执行和抗压能力、保密意识强，有团队精神。',
			'data':{
				1: '负责日常收支的管理和核对；',
				2: '登记现金及银行日记账，做到日清月结；',
				3: '负责公司订单的统计、审核及管理；',
				4: '负责记账凭证的编号、装订；',
				5: '负责开具票据及制作各项出纳报表；'
			}
		},
		{
			'title':'医生',
			'titleInfo':' 招聘人数2人 ，大专及以上学历，临床医学或肾脏病学专业，有医师初级或中级执业资格；具有二级以上医院工作经验；有肾内科或血透工作经验者优先；有血液透析进修证书者优先；注：如无血液透析进修证书，可安排三甲医院带薪进修3个月（进修期间只发基本工资）。',
			'data':{
				1: '负责透析患者的日常诊疗，做好透析患者的病例档案记录；',
				2: '掌握透析患者的病情，制定个性化的透析及综合治疗方案；',
				3: '评估透析效果，处理透析并发症。'
			}
		},
		{
			'title':'护士长',
			'titleInfo':'招聘人数1人，大专及以上学历，护理专业；主管护师或5年以上护师工作经验；具有二级以上医院工作经验，3年以上血液透析经验；具备一定的教学、管理能力。',
			'data':{
				1: '负责透析中心日常护理工作的组织和管理；',
				2: '负责中心护理人员的专业培训、团队建设等内部管理工作；',
				3: '参与并指导护士完成透析患者的护理工作。'
			}
		},
		{
			'title':'护士',
			'titleInfo':'招聘人数5人，大专及以上学历，具有护士资格证、执业证；具有两年以上护理工作经验；具有血液透析工作经验或血液透析进修证书者优先；注：如无血液透析进修证书，可安排三甲医院带薪进修3个月（进修期间只发基本工资）。',
			'data':{
				1: '在护士长、护理组长领导下实施分管病人的各项护理工作；',
				2: '落实各项护理工作流程、工作标准和技术规范；',
				3: '按要求完成病情观察及护理记录。'
			}
		},
		{
			'title':'血液净化中心工程师',
			'titleInfo':'大专及以上学历医疗器械专业毕业，具备机械和电子学知识及一定的医疗知识；具有血透室工作或者相关工作经验3年以上；熟悉血液净化室（中心）各医疗设备的性能、结构、工作原理和维修技术；有血透室工程师上岗培训资格证书者优先。',
			'data':{
				1: '负责血透室医疗仪器设备的管理工作；按需求负责仪器维修业务联系，保证所有仪器设备的完整，正常安全投入使用；',
				2: '负责制定医疗仪器设备的操作规范，指导和监督医护人员正确使用医疗仪器设备；',
				3: '负责血透室新采购设备仪器的验收及安装调试工作；',
				4: '制定仪器设备操作人员的培训计划（包括设备仪器的使用、日常保养、使用注意事项等）；',
				5: '负责设备器械台帐管理和填报，做到帐物相符、及时更新； ',
				6: '负责按规定具体办理仪器设备调拨、转让、报损、报废手续及帐目调整和资产处置工作； ',
				7: ' 做好年度专项计划的申购、设备管理和清产核资工作。'
			}
		}]

		var domStr = '';
		var domStr_info_item = '';
		console.log(inforArr[targetIndex].data)
		for (var i in inforArr[targetIndex].data) {
			domStr_info_item += '<p class="info_item">' + i + '.' + inforArr[targetIndex].data[i] +'</p>'
		}
		domStr = '<p class="title">'+ inforArr[targetIndex].title +'</p><p class="work">'+ inforArr[targetIndex].titleInfo +'</p>' + domStr_info_item
		$('.showWangye').fadeIn(300).find('.workInfoBox').html(domStr)
		console.log(domStr_info_item)

	})
//console
	console.log("                       (0 0)");
	console.log("   +-------------oOO----(_)----------------+");
	console.log("   |        	      欢迎光临              |");
	console.log("   |        	      泰达官网           |");
	console.log("   |   求职意向：详见人员招聘  |");
	console.log("   |   地址:宁夏银川市长城东路439号401    |");
	console.log("   |   电话:0951-410-6132                    |");
	console.log("   |   传真:0951-410-6202               |");
	console.log("   +--------------------------oOO----------+");
	console.log("                      |__|__|");
	console.log("                       || ||");
	console.log("                      ooO Ooo");
})









