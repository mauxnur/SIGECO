/**
 * Create Date/Time Picker (for ASP.NET Maker 2019)
 * @license (C) 2019 e.World Technology Ltd.
 */
ew.createDateTimePicker=function(e,t,a){if(t.indexOf("$rowindex$")>-1)return;var r=jQuery,i=ew.getElement(t,e),s=r(i),n="",o=ew.DATETIME_WITHOUT_SECONDS;if(s.data("DateTimePicker")||s.parent().data("DateTimePicker"))return;var c=function(e,t){if(e==5||e==9)return t?9:5;else if(e==6||e==10)return t?10:6;else if(e==7||e==11)return t?11:7;else if(e==12||e==15)return t?15:12;else if(e==13||e==16)return t?16:13;else if(e==14||e==17)return t?17:14;return e};var u=a.format;if(u>100){u-=100;o=true}if(u==0)u=ew.DATE_FORMAT_ID;else if(u==1)u=c(ew.DATE_FORMAT_ID,true);else if(u==2)u=c(ew.DATE_FORMAT_ID,false);switch(u){case 5:n="YYYY/MM/DD";break;case 6:n="MM/DD/YYYY";break;case 7:n="DD/MM/YYYY";break;case 9:n="YYYY/MM/DD HH:mm"+(o?"":":ss");break;case 10:n="MM/DD/YYYY HH:mm"+(o?"":":ss");break;case 11:n="DD/MM/YYYY HH:mm"+(o?"":":ss");break;case 12:n="YY/MM/DD";break;case 13:n="MM/DD/YY";break;case 14:n="DD/MM/YY";break;case 15:n="YY/MM/DD HH:mm"+(o?"":":ss");break;case 16:n="MM/DD/YY HH:mm"+(o?"":":ss");break;case 17:n="DD/MM/YY HH:mm"+(o?"":":ss");break}n=n.replace(/\//g,ew.DATE_SEPARATOR).replace(/:/g,ew.TIME_SEPARATOR);a.format=n;if(!a.locale)a.locale=ew.LANGUAGE_ID.toLowerCase();var l=r.isBoolean(a.inputGroup)?a.inputGroup:true;delete a.inputGroup;a.debug=a.debug||ew.DEBUG_ENABLED;var D={id:t,form:e,enabled:true,inputGroup:l,options:a};r(function(){r(document).trigger("datetimepicker",[D]);if(!D.enabled)return;if(D.inputGroup!==false){var e=r('<button type="button" class="btn btn-default"><i class="fa fa-calendar"></i></button>').addClass("datepickerbutton").css({"font-size":s.css("font-size"),height:s.outerHeight()}).click(function(){s.removeClass("is-invalid")});s.wrap('<div class="input-group date"></div>').after(r('<div class="input-group-append"></div>').append(e));s=s.parent()}if(D.options.locale&&moment.locale()!=D.options.locale){r.getScript(ew.PATH_BASE+"moment/locale/"+D.options.locale+".js",function(){moment.localeData().postformat=function(e){return e};s.datetimepicker(D.options)})}else{s.datetimepicker(D.options)}})};