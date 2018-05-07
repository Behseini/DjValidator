/*
 *DjValidator v1.0.0 is a jquery plugin for the validation of web forms, 
 *in a simple, fast and flexible way regardless of the web design framework.
 *
 * Copyright (C) 2017 David Esneyder Jerez Garnica
 * Contact: esneyderg357@gmail.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * See the GNU General Public license <http://www.gnu.org/licenses/gpl-3.0.html>.
 */
if("undefined"==typeof jQuery)throw new Error("DjValidator requires jQuery 1.8 or higher.");!function(a){function f(a){if(a.data("dj-validator-group"))return!0;var b=a.val();return null!=b&&""!=b&&!/^\s+$/.test(b)}function g(a,b){if(b.length<3)throw new Error("Error validating field '"+a.attr("name")+"', insufficient parameters.");if("*"==b[2]){if(!new RegExp("^\\S{"+b[1]+",}$").test(a.val()))return D(a,e.word_min.replace("$1",b[1])),!1}else if(!new RegExp("^\\S{"+b[1]+","+b[2]+"}$").test(a.val()))return D(a,e.word_between.replace("$1",b[1]).replace("$2",b[2])),!1;return!0}function h(a,b){if(b.length<3)throw new Error("Error validating field '"+a.attr("name")+"', insufficient parameters.");if("*"==b[2]){if(!new RegExp("^[a-záéíóúñçü ]{"+b[1]+",}$","i").test(a.val()))return D(a,e.atext_min.replace("$1",b[1])),!1}else if(!new RegExp("^[a-záéíóúñçü ]{"+b[1]+","+b[2]+"}$","i").test(a.val()))return D(a,e.atext_between.replace("$1",b[1]).replace("$2",b[2])),!1;return!0}function k(a,b){if(b.length<3)throw new Error("Error validating field '"+a.attr("name")+"', insufficient parameters.");if("*"==b[2]){if(!new RegExp("^[a-z0-9áéíóúñçü ]{"+b[1]+",}$","i").test(a.val()))return D(a,e.antext_min.replace("$1",b[1])),!1}else if(!new RegExp("^[a-z0-9áéíóúñçü ]{"+b[1]+","+b[2]+"}$","i").test(a.val()))return D(a,e.antext_between.replace("$1",b[1]).replace("$2",b[2])),!1;return!0}function l(a,b){if(b.length<3)throw new Error("Error validating field '"+a.attr("name")+"', insufficient parameters.");var c=a.val();if("*"==b[2]){if(c.length<b[1])return D(a,e.text_min.replace("$1",b[1])),!1}else if(c.length<b[1]||c.length>b[2])return D(a,e.text_between.replace("$1",b[1]).replace("$2",b[2])),!1;return!0}function m(a,b){if(b.length<3)throw new Error("Error validating field '"+a.attr("name")+"', insufficient parameters.");var c=a.val();if(!/^[+-]?\d+$/.test(c))return D(a,e.int_invalid),!1;if("*"==b[1]){if("*"==b[2])return!0;if(parseInt(c)>b[2])return D(a,e.int_max.replace("$1",b[2])),!1}else if("*"==b[2]){if(parseInt(c)<b[1])return D(a,e.int_min.replace("$1",b[1])),!1}else if(parseInt(c)<b[1]||parseInt(c)>b[2])return D(a,e.int_between.replace("$1",b[1]).replace("$2",b[2])),!1;return!0}function n(a,b){if(b.length<3)throw new Error("Error validating field '"+a.attr("name")+"', insufficient parameters.");var c=a.val();if(isNaN(c))return D(a,e.num_invalid),!1;if("*"==b[1]){if("*"==b[2])return!0;if(parseFloat(c)>b[2])return D(a,e.num_max.replace("$1",b[2])),!1}else if("*"==b[2]){if(parseFloat(c)<b[1])return D(a,e.num_min.replace("$1",b[1])),!1}else if(parseFloat(c)<b[1]||parseFloat(c)>b[2])return D(a,e.num_between.replace("$1",b[1]).replace("$2",b[2])),!1;return!0}function o(a,b){if(b.length<3)throw new Error("Error validating field '"+a.attr("name")+"', insufficient parameters.");var c=a.val();if("*"==b[2]){if(!new RegExp("^\\d{"+b[1]+",}$").test(c))return D(a,e.dig_min.replace("$1",b[1])),!1}else if(!new RegExp("^\\d{"+b[1]+","+b[2]+"}$").test(c))return D(a,e.dig_between.replace("$1",b[1]).replace("$2",b[2])),!1;return!0}function p(a,b){if(!File)return console.error("The 'file' validator requires javascript file api, the field  '"+a.attr("name")+"' was ignored."),!0;if(b.length<5)throw new Error("Error validating field '"+a.attr("name")+"', insufficient parameters.");var c=a[0].files;if("*"==b[2]){if(c.length<b[1])return D(a,e.file_min.replace("$1",b[1])),!1}else if(c.length<b[1]||c.length>b[2])return D(a,e.file_between.replace("$1",b[1]).replace("$2",b[2])),!1;if(b[5]){var d=b[5].split("|"),f=0==d.length;for(i=0;i<c.length;i++){for(f=!1,j=0;j<d.length;j++)c[i].type==d[j]&&(f=!0);if(!f)break}if(!f)return D(a,e.file_format),!1}for(i=0;i<c.length;i++){if("*"!=b[3]&&c[i].size/1024<b[3])return D(a,e.file_min_size.replace("$1",b[3])),!1;if("*"!=b[4]&&c[i].size/1024>b[4])return D(a,e.file_max_size.replace("$1",b[4])),!1}return!0}function q(a,b){if(b.length<2)throw new Error("Error validating field '"+a.attr("name")+"', insufficient parameters.");var c=a.val(),d=!1,f=c.substring(c.lastIndexOf(".")+1,c.length).toLowerCase(),g=b[1].split("|");for(ifile=0;ifile<g.length;ifile++)if(f==g[ifile].toLowerCase()){d=!0;break}return!!d||(validas=a.data("dj-validator").substring(a.data("dj-validator").indexOf(",")+1),D(a,e.file_ext.replace("$1",validas.replace(/\|/g,","))),!1)}function r(a,b){if(b.length<2)throw new Error("Error validating field '"+a.attr("name")+"', insufficient parameters.");return/^([a-z0-9_.-])+@(([a-z0-9-])+.)*([a-z0-9])+$/i.test(a.val())?!("*"!=b[1]&&a.val().length>b[1])||(D(a,e.email_max.replace("$1",b[1])),!1):(D(a,e.email),!1)}function s(a){return!!/^(\+?[0-9]{2,3}[- ]?)?[0-9]{5,12}$/.test(a.val())||(D(a,e.phone),!1)}function t(a,b){if(b.length<2)throw new Error("Error validating field '"+a.attr("name")+"', insufficient parameters.");return/^(https?|s?ftp)\:\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:\/~\+#]*[\w\-\@?^=%&amp;\/~\+#])?$/.test(a.val())?!("*"!=b[1]&&a.val().length>b[1])||(D(a,e.url_max.replace("$1",b[1])),!1):(D(a,e.url),!1)}function u(a,b){if(b.length<2)throw new Error("Error validating field '"+a.attr("name")+"', insufficient parameters.");return!!(b[2]?new RegExp(b[1],b[2]):new RegExp(b[1])).test(a.val())||(D(a,e.regexp),!1)}function v(b,c){if(c.length<3)throw new Error("Error validating field '"+b.attr("name")+"', insufficient parameters.");fs=a("input[data-dj-validator-group="+c[1]+"]");var d=!1;for(i=0;i<fs.length;i++)value=a(fs[i]).val(),null==value||""==value||/^\s+$/.test(value)||(d=!0);return 0==d&&D(b,e.or.replace("$1",c[2])),d}function w(b,c){if(c.length<3)throw new Error("Error validating field '"+b.attr("name")+"', insufficient parameters.");return b.val()==a("#"+c[1]).val()||(D(b,e.equal.replace("$1",c[2])),!1)}function x(b,c){if(c.length<3)throw new Error("Error validating field '"+b.attr("name")+"', insufficient parameters.");return b.val()!=a("#"+c[1]).val()||(D(b,e.not_equal.replace("$1",c[2])),!1)}function y(a,b){if(b.length<3)throw new Error("Error validating field '"+a.attr("name")+"', insufficient parameters.");var c=[],c=a.val();if("*"==b[2]){if(c.length<parseInt(b[1]))return D(a,e.multi_min.replace("$1",b[1])),!1}else if(c.length<parseInt(b[1])||c.length>parseInt(b[2]))return D(a,e.multi_between.replace("$1",b[1]).replace("$2",b[2])),!1;return!0}function z(a,b){if(b.length<2)throw new Error("Error validating field '"+a.attr("name")+"', insufficient parameters.");return 0!=window[b[1]](a)||(D(a,e.call),!1)}function A(b){var c=a("input[name="+b.attr("name")+"]");for(i=0;i<c.length;i++)if(a(c[i]).is(":checked"))return!0;return D(b,e.radio),!1}function B(b,c){if(c[1]){var d=a("input[data-dj-validator-group="+c[1]+"]"),f=0;for(i=0;i<d.length;i++)a(d[i]).is(":checked")&&f++;if("*"==c[3]){if(f<parseInt(c[2]))return D(b,e.check_multi_min.replace("$1",c[4]).replace("$2",c[2])),!1}else if(f<parseInt(c[2])||f>parseInt(c[3]))return D(b,e.check_multi_between.replace("$1",c[4]).replace("$2",c[2]).replace("$3",c[3])),!1;return!0}return!!b.is(":checked")||(D(b,e.check_single),!1)}function C(a,b){var c=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,d=/^((25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])$/;if(b[1])if("v6"==b[1]){if(!c.test(a.val()))return D(a,e.ip.replace("$1","IPv6")),!1}else{if("v4"!=b[1])throw new Error("Error validating field '"+a.attr("name")+"', invalid ip option.");if(!d.test(a.val()))return D(a,e.ip.replace("$1","IPv4")),!1}else if(!c.test(a.val())&&!d.test(a.val()))return D(a,e.ip.replace("$1","IP")),!1;return!0}function D(b,c){var e=b.data("dj-validator-msg");e&&(c=e),$new=a('<p class="dj-validator-msg" style="'+d+'">'+c+"</p>");var f=b.attr("type"),g=b.is(":visible");f&&("radio"==f||"checkbox"==f)||!g?$new.appendTo(b.parent()):$new.insertAfter(b),$new.fadeIn(1500)}function E(a){var d=!0;if(f(a)){var g=a.data("dj-validator");if(g){var h=g.split("&");for(j=0;j<h.length;j++){var i=h[j].split(","),k=b.indexOf(i[0]);if(-1==k)throw new Error("'"+i[0]+"' is not a valid DjValidator key.");d=!!c[k](a,i)&&d}}}else null!=a.attr("required")&&(D(a,e.required),d=!1);return d}function F(b){var c=!0;return b.find(".dj-validator-msg").remove(),b.find(":input").each(function(b,d){c=!!E(a(d))&&c}),c}var b=["word","atext","antext","text","int","num","dig","file","efile","email","phone","url","regexp","equal","nequal","or","multi","call","radio","check","ip"],c=[g,h,k,l,m,n,o,p,q,r,s,t,u,w,x,v,y,z,A,B,C],d="display:none; color:red; text-align:inherit; font:.9em fantasy bold italic;",e={required:"Required field.",word_min:"At least $1 characters with no spaces.",word_between:"Between $1 and $2 characters with no spaces.",atext_min:"At least $1 alphabetic characters.",atext_between:"Between $1 and $2 alphabetic characters.",antext_min:"At least $1 alphabetic characters or digits.",antext_between:"Between $1 and $2 alphabetic characters or digits.",text_min:"At least $1 characters.",text_between:"Between $1 and $2 characters.",int_invalid:"Invalid integer.",int_min:"The number must be greater than or equal to $1.",int_max:"The number must be less than or equal to $1",int_between:"The number must be between $1 and $2.",num_invalid:"Invalid real number.",num_min:"The number must be greater than or equal to $1.",num_max:"The number must be less than or equal to $1",num_between:"The number must be between $1 and $2.",dig_min:"At least $1 digits.",dig_between:"Between $1 and $2 digits.",file_min:"Select at least $1 files.",file_between:"Select between $1 and $2 files.",file_format:"Invalid file type.",file_min_size:"Files must be larger than $1 kb in size.",file_max_size:"Files must be less than $1 kb. in size",file_ext:"Valid file extensions: $1.",email:"Email not valid.",email_max:"Email must be less than $1 characters.",phone:"Invalid phone number.",url:"Invalid url.",url_max:"URL must be less than $1 characters",ip:"Invalid $1 address",regexp:"Invalid value.",or:"$1: At least one of these fields is required.",equal:"Must be equal to: $1.",not_equal:"Must be different from: $1.",multi_min:"Select at least $1 options",multi_between:"Select from $1 to $2 options.",call:"Invalid value.",radio:"Check an option.",check_single:"Check this option.",check_multi_min:"$1: Check at least $2 options.",check_multi_between:"$1: Check from $2 to $3 options."};a.fn.djValidator=function(b,c){if(b){if("validate"==b){if(this.length>1)throw new Error("The 'validate' option requires the selection of a single form, there are "+this.length+" selected.");return F(a(this))}if("callback"==b)return this.filter("form").each(function(){var b=a(this);b.attr("novalidate","novalidate"),b.find(":input").eq(0).focus(),b.submit(function(){if(1==F(b)){if(!c)throw new Error("The 'callback' option requires a function as a parameter.");c(b)}return!1})});if("field"==b)return a(this).parent().find(".dj-validator-msg").remove(),E(a(this));console.warn("Invalid option for DjValidator.")}return this.filter("form").each(function(){var b=a(this);b.attr("novalidate","novalidate"),b.find(":input").eq(0).focus(),b.submit(function(){return F(b)})})},a.addDjValidator=function(a,d,e){b.push(a),c.push(function(a,b){return 0!=e(a,b)||(D(a,d),!1)})},a.setDjValidatorStyle=function(a){d=a||"display:none; color:red; text-align:inherit; font:.9em fantasy bold italic;"},a.setDjValidatorLabels=function(a){e=a}}(jQuery);