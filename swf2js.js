/**
 * @license
 * swf2js:
 *   licenses: MIT
 *   version: 0.7.8
 *   author: Toshiyuki Ienaga <ienaga@tvon.jp>
 *   homepage: https://swf2js.wordpress.com/
 *   copyright: Copyright (c) 2013 - 2017 Toshiyuki Ienaga.
 */
/*jshint bitwise: false*/
"swf2js"in window||function(t){"function"!=typeof Object.defineProperty&&(Object.defineProperty=function(t,e,i){return"value"in i&&(t[e]=i.value),"get"in i&&t.__defineGetter__(e,i.get),"set"in i&&t.__defineSetter__(e,i.set),t}),"function"!=typeof Object.defineProperties&&(Object.defineProperties=function(t,e){for(var i in e)e.hasOwnProperty(i)&&Object.defineProperty(t,i,e[i]);return t}),"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf=function(t){return t.__proto__}),"function"!=typeof Object.setPrototypeOf&&(Object.setPrototypeOf=function(t,e){return t.__proto__=e,t});/**
 * @constructor
 */
var e=function(){};/**
 * enable
 */
e.prototype.enable=function(){/**
     * properties
     */
Object.defineProperties(WebGLRenderingContext.prototype,{fillStyle:{get:function(){return this.getFillStyle()},set:function(t){this.setFillStyle(t)}},strokeStyle:{get:function(){return this.getStrokeStyle()},set:function(t){this.setStrokeStyle(t)}},lineWidth:{get:function(){return this.getLineWidth()},set:function(t){this.setLineWidth(t)}},lineCap:{get:function(){return this.getLineCap()},set:function(t){this.setLineCap(t)}},lineJoin:{get:function(){return this.getLineJoin()},set:function(t){this.setLineJoin(t)}},miterLimit:{get:function(){return this.getMiterLimit()},set:function(t){this.setMiterLimit(t)}}}),/**
     * @returns {*}
     */
WebGLRenderingContext.prototype.getFillStyle=function(){return null},/**
     * @param fillStyle
     */
WebGLRenderingContext.prototype.setFillStyle=function(t){},/**
     * @returns {*}
     */
WebGLRenderingContext.prototype.getStrokeStyle=function(){return null},/**
     * @param strokeStyle
     */
WebGLRenderingContext.prototype.setStrokeStyle=function(t){},/**
     * @returns {*}
     */
WebGLRenderingContext.prototype.getLineWidth=function(){return null},/**
     * @param lineWidth
     */
WebGLRenderingContext.prototype.setLineWidth=function(t){},/**
     * @returns {*}
     */
WebGLRenderingContext.prototype.getLineCap=function(){return null},/**
     * @param lineCap
     */
WebGLRenderingContext.prototype.setLineCap=function(t){},/**
     * @returns {*}
     */
WebGLRenderingContext.prototype.getLineJoin=function(){return null},/**
     * @param lineJoin
     */
WebGLRenderingContext.prototype.setLineJoin=function(t){},/**
     * @returns {*}
     */
WebGLRenderingContext.prototype.getMiterLimit=function(){return null},/**
     * @param miterLimit
     */
WebGLRenderingContext.prototype.setMiterLimit=function(t){},/**
     * @param x
     * @param y
     */
WebGLRenderingContext.prototype.moveTo=function(t,e){},/**
     * @param x
     * @param y
     */
WebGLRenderingContext.prototype.lineTo=function(t,e){},/**
     * @param cpx
     * @param cpy
     * @param x
     * @param y
     */
WebGLRenderingContext.prototype.quadraticCurveTo=function(t,e,i,o){},/**
     * @param cpx1
     * @param cpy1
     * @param cpx2
     * @param cpy2
     * @param x
     * @param y
     */
WebGLRenderingContext.prototype.bezierCurveTo=function(t,e,i,o,r,n){},/**
     * @param x
     * @param y
     * @param radius
     * @param startAngle
     * @param endAngle
     * @param anticlockwise
     */
WebGLRenderingContext.prototype.arc=function(t,e,i,o,r,n){},/**
     * beginPath
     */
WebGLRenderingContext.prototype.beginPath=function(){},/**
     * fill
     */
WebGLRenderingContext.prototype.fill=function(){},/**
     * stroke
     */
WebGLRenderingContext.prototype.stroke=function(){},/**
     * clip
     */
WebGLRenderingContext.prototype.clip=function(){}};var i,o=0,r=0;!function(t){"use strict";var o=t.Math,r=t.document,n=function(){};
// set global parameter
i=n,
// global parameters
n.prototype.$resizeId=0,n.prototype.$stages=[],n.prototype.$loadStages=[],n.prototype.$event=null,n.prototype.$keyEvent=null,
// OS
n.prototype.$navigator=t.navigator;var a=t.navigator.userAgent,s=a.indexOf("Android")>0,c=a.indexOf("iPhone")>0||a.indexOf("iPod")>0,h=!(!s&&!c);n.prototype.$isTouch=h,n.prototype.$isAndroid=s,n.prototype.$isAndroid4x=a.indexOf("Android 4.")>0,n.prototype.$isChrome=a.indexOf("Chrome")>0,
// event
n.prototype.$startEvent=h?"touchstart":"mousedown",n.prototype.$moveEvent=h?"touchmove":"mousemove",n.prototype.$endEvent=h?"touchend":"mouseup";
// Alpha Bug
var l=s,p=r.createElement("canvas");p.width=1,p.height=1;var u=p.getContext("2d");if(s){var f=u.createImageData(1,1),g=f.data;g[0]=128,g[3]=128,u.putImageData(f,0,0),l=255===(g=(f=u.getImageData(0,0,1,1)).data)[0]}n.prototype.$tmpContext=u,n.prototype.$isAlphaBug=l,
// shortcut
n.prototype.$document=r,n.prototype.$min=o.min,n.prototype.$max=o.max,n.prototype.$floor=o.floor,n.prototype.$ceil=o.ceil,n.prototype.$pow=o.pow,n.prototype.$random=o.random,n.prototype.$atan2=o.atan2,n.prototype.$sqrt=o.sqrt,n.prototype.$cos=o.cos,n.prototype.$sin=o.sin,n.prototype.$log=o.log,n.prototype.$abs=o.abs,n.prototype.$SQRT2=o.SQRT2,n.prototype.$LN2_2=o.LN2/2,n.prototype.$LOG1P=.29756328478758615,n.prototype.$PI=o.PI,n.prototype.$round=o.round,n.prototype.$Number=t.Number,n.prototype.$fromCharCode=t.String.fromCharCode,n.prototype.$isNaN=t.isNaN,n.prototype.$setTimeout=t.setTimeout,n.prototype.$clearTimeout=t.clearTimeout,n.prototype.$setInterval=t.setInterval,n.prototype.$clearInterval=t.clearInterval,n.prototype.$parseInt=t.parseInt,n.prototype.$Function=t.Function,n.prototype.$Date=new Date,n.prototype.$canBtoa=void 0!==t.btoa,n.prototype.$canArrayBuffer=void 0!==t.ArrayBuffer,n.prototype.$devicePixelRatio=t.devicePixelRatio||1,
// check XMLHttpRequest2
n.prototype.$canXHR2=void 0!==(new XMLHttpRequest).responseType;
// check WebGL
var d=r.createElement("canvas").getContext("webgl"),y=void 0!==t.WebGLRenderingContext&&null!==d;n.prototype.$canWebGL=!1,// TODO canWebGL
y&&(new e).enable(),
// check requestAnimationFrame
n.prototype.$requestAnimationFrame=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.setTimeout,
// JCT
n.prototype.$JCT11280=new t.Function('var a="zKV33~jZ4zN=~ji36XazM93y!{~k2y!o~k0ZlW6zN?3Wz3W?{EKzK[33[`y|;-~j^YOTz$!~kNy|L1$353~jV3zKk3~k-4P4zK_2+~jY4y!xYHR~jlz$_~jk4z$e3X5He<0y!wy|X3[:~l|VU[F3VZ056Hy!nz/m1XD61+1XY1E1=1y|bzKiz!H034zKj~mEz#c5ZA3-3X$1~mBz$$3~lyz#,4YN5~mEz#{ZKZ3V%7Y}!J3X-YEX_J(3~mAz =V;kE0/y|F3y!}~m>z/U~mI~j_2+~mA~jp2;~m@~k32;~m>V}2u~mEX#2x~mBy+x2242(~mBy,;2242(~may->2&XkG2;~mIy-_2&NXd2;~mGz,{4<6:.:B*B:XC4>6:.>B*BBXSA+A:X]E&E<~r#z+625z s2+zN=`HXI@YMXIAXZYUM8X4K/:Q!Z&33 3YWX[~mB`{zKt4z (zV/z 3zRw2%Wd39]S11z$PAXH5Xb;ZQWU1ZgWP%3~o@{Dgl#gd}T){Uo{y5_d{e@}C(} WU9|cB{w}bzvV|)[} H|zT}d||0~{]Q|(l{|x{iv{dw}(5}[Z|kuZ }cq{{y|ij}.I{idbof%cu^d}Rj^y|-M{ESYGYfYsZslS`?ZdYO__gLYRZ&fvb4oKfhSf^d<Yeasc1f&a=hnYG{QY{D`Bsa|u,}Dl|_Q{C%xK|Aq}C>|c#ryW=}eY{L+`)][YF_Ub^h4}[X|?r|u_ex}TL@YR]j{SrXgo*|Gv|rK}B#mu{R1}hs|dP{C7|^Qt3|@P{YVV |8&}#D}ef{e/{Rl|>Hni}R1{Z#{D[}CQlQ||E}[s{SG_+i8eplY[=[|ec[$YXn#`hcm}YR|{Ci(_[ql|?8p3]-}^t{wy}4la&pc|3e{Rp{LqiJ],] `kc(]@chYnrM`O^,ZLYhZB]ywyfGY~aex!_Qww{a!|)*lHrM{N+n&YYj~Z b c#e_[hZSon|rOt`}hBXa^i{lh|<0||r{KJ{kni)|x,|0auY{D!^Sce{w;|@S|cA}Xn{C1h${E]Z-XgZ*XPbp]^_qbH^e[`YM|a||+=]!Lc}]vdBc=j-YSZD]YmyYLYKZ9Z>Xcczc2{Yh}9Fc#Z.l{}(D{G{{mRhC|L3b#|xK[Bepj#ut`H[,{E9Yr}1b{[e]{ZFk7[ZYbZ0XL]}Ye[(`d}c!|*y`Dg=b;gR]Hm=hJho}R-[n}9;{N![7k_{UbmN]rf#pTe[x8}!Qcs_rs[m`|>N}^V})7{^r|/E}),}HH{OYe2{Skx)e<_.cj.cjoMhc^d}0uYZd!^J_@g,[[[?{i@][|3S}Yl3|!1|eZ|5IYw|1D}e7|Cv{OHbnx-`wvb[6[4} =g+k:{C:}ed{S]|2M]-}WZ|/q{LF|dYu^}Gs^c{Z=}h>|/i|{W]:|ip{N:|zt|S<{DH[p_tvD{N<[8Axo{X4a.^o^X>Yfa59`#ZBYgY~_t^9`jZHZn`>G[oajZ;X,i)Z.^~YJe ZiZF^{][[#Zt^|]Fjx]&_5dddW]P0C[-]}]d|y {C_jUql] |OpaA[Z{lp|rz}:Mu#]_Yf6{Ep?f5`$[6^D][^u[$[6^.Z8]]ePc2U/=]K^_+^M{q*|9tYuZ,s(dS{i=|bNbB{uG}0jZOa:[-]dYtu3]:]<{DJ_SZIqr_`l=Yt`gkTnXb3d@kiq0a`Z{|!B|}e}Ww{Sp,^Z|0>_Z}36|]A|-t}lt{R6pi|v8hPu#{C>YOZHYmg/Z4nicK[}hF_Bg|YRZ7c|crkzYZY}_iXcZ.|)U|L5{R~qi^Uga@Y[xb}&qdbd6h5|Btw[}c<{Ds53[Y7]?Z<|e0{L[ZK]mXKZ#Z2^tavf0`PE[OSOaP`4gi`qjdYMgys/?[nc,}EEb,eL]g[n{E_b/vcvgb.{kcwi`~v%|0:|iK{Jh_vf5lb}KL|(oi=LrzhhY_^@`zgf[~g)[J_0fk_V{T)}I_{D&_/d9W/|MU[)f$xW}?$xr4<{Lb{y4}&u{XJ|cm{Iu{jQ}CMkD{CX|7A}G~{kt)nB|d5|<-}WJ}@||d@|Iy}Ts|iL|/^|no|0;}L6{Pm]7}$zf:|r2}?C_k{R(}-w|`G{Gy[g]bVje=_0|PT{^Y^yjtT[[[l!Ye_`ZN]@[n_)j3nEgMa]YtYpZy].d-Y_cjb~Y~[nc~sCi3|zg}B0}do{O^{|$`_|D{}U&|0+{J3|8*]iayx{a{xJ_9|,c{Ee]QXlYb]$[%YMc*]w[aafe]aVYi[fZEii[xq2YQZHg]Y~h#|Y:thre^@^|_F^CbTbG_1^qf7{L-`VFx Zr|@EZ;gkZ@slgko`[e}T:{Cu^pddZ_`yav^Ea+[#ZBbSbO`elQfLui}.F|txYcbQ`XehcGe~fc^RlV{D_0ZAej[l&jShxG[ipB_=u:eU}3e8[=j|{D(}dO{Do[BYUZ0/]AYE]ALYhZcYlYP/^-^{Yt_1_-;YT`P4BZG=IOZ&]H[e]YYd[9^F[1YdZxZ?Z{Z<]Ba2[5Yb[0Z4l?]d_;_)a?YGEYiYv`_XmZs4ZjY^Zb]6gqGaX^9Y}dXZr[g|]Y}K aFZp^k^F]M`^{O1Ys]ZCgCv4|E>}8eb7}l`{L5[Z_faQ|c2}Fj}hw^#|Ng|B||w2|Sh{v+[G}aB|MY}A{|8o}X~{E8paZ:]i^Njq]new)`-Z>haounWhN}c#{DfZ|fK]KqGZ=:u|fqoqcv}2ssm}.r{]{nIfV{JW)[K|,Z{Uxc|]l_KdCb%]cfobya3`p}G^|LZiSC]U|(X|kBlVg[kNo({O:g:|-N|qT}9?{MBiL}Sq{`P|3a|u.{Uaq:{_o|^S}jX{Fob0`;|#y_@[V[K|cw[<_ }KU|0F}d3|et{Q7{LuZttsmf^kYZ`Af`}$x}U`|Ww}d]| >}K,r&|XI|*e{C/a-bmr1fId4[;b>tQ_:]hk{b-pMge]gfpo.|(w[jgV{EC1Z,YhaY^q,_G[c_g[J0YX]`[h^hYK^_Yib,` {i6vf@YM^hdOKZZn(jgZ>bzSDc^Z%[[o9[2=/YHZ(_/Gu_`*|8z{DUZxYt^vuvZjhi^lc&gUd4|<UiA`z]$b/Z?l}YI^jaHxe|;F}l${sQ}5g}hA|e4}?o{ih}Uz{C)jPe4]H^J[Eg[|AMZMlc}:,{iz}#*|gc{Iq|/:|zK{l&}#u|myd{{M&v~nV};L|(g|I]ogddb0xsd7^V})$uQ{HzazsgxtsO^l}F>ZB]r|{7{j@cU^{{CbiYoHlng]f+nQ[bkTn/}<-d9q {KXadZYo+n|l[|lc}V2{[a{S4Zam~Za^`{HH{xx_SvF|ak=c^[v^7_rYT`ld@]:_ub%[$[m](Shu}G2{E.ZU_L_R{tz`vj(f?^}hswz}GdZ}{S:h`aD|?W|`dgG|if{a8|J1{N,}-Ao3{H#{mfsP|[ bzn+}_Q{MT{u4kHcj_q`eZj[8o0jy{p7}C|[}l){MuYY{|Ff!Ykn3{rT|m,^R|,R}$~Ykgx{P!]>iXh6[l[/}Jgcg{JYZ.^qYfYIZl[gZ#Xj[Pc7YyZD^+Yt;4;`e8YyZVbQ7YzZxXja.7SYl[s]2^/Ha$[6ZGYrb%XiYdf2]H]kZkZ*ZQ[ZYS^HZXcCc%Z|[(bVZ]]:OJQ_DZCg<[,]%Zaa [g{C00HY[c%[ChyZ,Z_`PbXa+eh`^&jPi0a[ggvhlekL]w{Yp^v}[e{~;k%a&k^|nR_z_Qng}[E}*Wq:{k^{FJZpXRhmh3^p>de^=_7`|ZbaAZtdhZ?n4ZL]u`9ZNc3g%[6b=e.ZVfC[ZZ^^^hD{E(9c(kyZ=bb|Sq{k`|vmr>izlH[u|e`}49}Y%}FT{[z{Rk}Bz{TCc/lMiAqkf(m$hDc;qooi[}^o:c^|Qm}a_{mrZ(pA`,}<2sY| adf_%|}`}Y5U;}/4|D>|$X{jw{C<|F.hK|*A{MRZ8Zsm?imZm_?brYWZrYx`yVZc3a@f?aK^ojEd {bN}/3ZH]/$YZhm^&j 9|(S|b]mF}UI{q&aM]LcrZ5^.|[j`T_V_Gak}9J[ ZCZD|^h{N9{~&[6Zd{}B}2O|cv]K}3s}Uy|l,fihW{EG`j_QOp~Z$F^zexS`dcISfhZBXP|.vn|_HYQ|)9|cr]<`&Z6]m_(ZhPcSg>`Z]5`~1`0Xcb4k1{O!bz|CN_T{LR|a/gFcD|j<{Z._[f)mPc:1`WtIaT1cgYkZOaVZOYFrEe[}T$}Ch}mk{K-^@]fH{Hdi`c*Z&|Kt{if[C{Q;{xYB`dYIX:ZB[}]*[{{p9|4GYRh2ao{DS|V+[zd$`F[ZXKadb*A] Ys]Maif~a/Z2bmclb8{Jro_rz|x9cHojbZ{GzZx_)]:{wAayeDlx}<=`g{H1{l#}9i|)=|lP{Qq}.({La|!Y{i2EZfp=c*}Cc{EDvVB|;g}2t{W4av^Bn=]ri,|y?|3+}T*ckZ*{Ffr5e%|sB{lx^0]eZb]9[SgAjS_D|uHZx]dive[c.YPkcq/}db{EQh&hQ|eg}G!ljil|BO]X{Qr_GkGl~YiYWu=c3eb}29v3|D|}4i||.{Mv})V{SP1{FX}CZW6{cm|vO{pS|e#}A~|1i}81|Mw}es|5[}3w{C`h9aL]o{}p[G`>i%a1Z@`Ln2bD[$_h`}ZOjhdTrH{[j_:k~kv[Sdu]CtL}41{I |[[{]Zp$]XjxjHt_eThoa#h>sSt8|gK|TVi[Y{t=}Bs|b7Zpr%{gt|Yo{CS[/{iteva|cf^hgn}($_c^wmb^Wm+|55jrbF|{9^ q6{C&c+ZKdJkq_xOYqZYSYXYl`8]-cxZAq/b%b*_Vsa[/Ybjac/OaGZ4fza|a)gY{P?| I|Y |,pi1n7}9bm9ad|=d{aV|2@[(}B`d&|Uz}B}{`q|/H|!JkM{FU|CB|.{}Az}#P|lk}K{|2rk7{^8^?`/|k>|Ka{Sq}Gz}io{DxZh[yK_#}9<{TRdgc]`~Z>JYmYJ]|`!ZKZ]gUcx|^E[rZCd`f9oQ[NcD_$ZlZ;Zr}mX|=!|$6ZPZYtIo%fj}CpcN|B,{VDw~gb}@hZg`Q{LcmA[(bo`<|@$|o1|Ss}9Z_}tC|G`{F/|9nd}i=}V-{L8aaeST]daRbujh^xlpq8|}zs4bj[S`J|]?G{P#{rD{]I`OlH{Hm]VYuSYUbRc*6[j`8]pZ[bt_/^Jc*[<Z?YE|Xb|?_Z^Vcas]h{t9|Uwd)_(=0^6Zb{Nc} E[qZAeX[a]P^|_J>e8`W^j_Y}R{{Jp__]Ee#e:iWb9q_wKbujrbR}CY`,{mJ}gz{Q^{t~N|? gSga`V_||:#mi}3t|/I`X{N*|ct|2g{km}gi|{={jC}F;|E}{ZZjYf*frmu}8Tdroi{T[|+~}HG{cJ}DM{Lp{Ctd&}$hi3|FZ| m}Kr|38}^c|m_|Tr{Qv|36}?Up>|;S{DV{k_as}BK{P}}9p|t`jR{sAm4{D=b4pWa[}Xi{EjwEkI}3S|E?u=X0{jf} S|NM|JC{qo^3cm]-|JUx/{Cj{s>{Crt[UXuv|D~|j|d{YXZR}Aq}0r}(_{pJfi_z}0b|-vi)Z mFe,{f4|q`b{}^Z{HM{rbeHZ|^x_o|XM|L%|uFXm}@C_{{Hhp%a7|0p[Xp+^K}9U{bP}: tT}B|}+$|b2|[^|~h{FAby[`{}xgygrt~h1[li`c4vz|,7p~b(|mviN}^pg[{N/|g3|^0c,gE|f%|7N{q[|tc|TKA{LU}I@|AZp(}G-sz{F |qZ{}F|f-}RGn6{Z]_5})B}UJ{FFb2]4ZI@v=k,]t_Dg5Bj]Z-]L]vrpdvdGlk|gF}G]|IW}Y0[G| /bo|Te^,_B}#n^^{QHYI[?hxg{[`]D^IYRYTb&kJ[cri[g_9]Ud~^_]<p@_e_XdNm-^/|5)|h_{J;{kacVopf!q;asqd}n)|.m|bf{QW|U)}b+{tL|w``N|to{t ZO|T]jF}CB|0Q{e5Zw|k |We}5:{HO{tPwf_uajjBfX}-V_C_{{r~gg|Ude;s+}KNXH}! `K}eW{Upwbk%ogaW}9EYN}YY|&v|SL{C3[5s.]Y]I]u{M6{pYZ`^,`ZbCYR[1mNg>rsk0Ym[jrE]RYiZTr*YJ{Ge|%-lf|y(`=[t}E6{k!|3)}Zk} ][G{E~cF{u3U.rJ|a9p#o#ZE|?|{sYc#vv{E=|LC}cu{N8`/`3`9rt[4|He{cq|iSYxY`}V |(Q|t4{C?]k_Vlvk)BZ^r<{CL}#h}R+[<|i=}X|{KAo]|W<`K{NW|Zx}#;|fe{IMr<|K~tJ_x}AyLZ?{GvbLnRgN}X&{H7|x~}Jm{]-| GpNu0}.ok>|c4{PYisrDZ|fwh9|hfo@{H~XSbO]Odv]%`N]b1Y]]|eIZ}_-ZA]aj,>eFn+j[aQ_+]h[J_m_g]%_wf.`%k1e#Z?{CvYu_B^|gk`Xfh^M3`afGZ-Z|[m{L}|k3cp[it ^>YUi~d>{T*}YJ{Q5{Jxa$hg|%4`}|LAgvb }G}{P=|<;Ux{_skR{cV|-*|s-{Mp|XP|$G|_J}c6cM{_=_D|*9^$ec{V;|4S{qO|w_|.7}d0|/D}e}|0G{Dq]Kdp{}dfDi>}B%{Gd|nl}lf{C-{y}|ANZr}#={T~|-(}c&{pI|ft{lsVP}){|@u}!W|bcmB{d?|iW|:dxj{PSkO|Hl]Li:}VYk@|2={fnWt{M3`cZ6|)}|Xj}BYa?vo{e4|L7|B7{L7|1W|lvYO}W8nJ|$Vih|{T{d*_1|:-n2dblk``fT{Ky|-%}m!|Xy|-a{Pz}[l{kFjz|iH}9N{WE{x,|jz}R {P|{D)c=nX|Kq|si}Ge{sh|[X{RF{t`|jsr*fYf,rK|/9}$}}Nf{y!1|<Std}4Wez{W${Fd_/^O[ooqaw_z[L`Nbv[;l7V[ii3_PeM}.h^viqYjZ*j1}+3{bt{DR[;UG}3Og,rS{JO{qw{d<_zbAh<R[1_r`iZTbv^^a}c{iEgQZ<exZFg.^Rb+`Uj{a+{z<[~r!]`[[|rZYR|?F|qppp]L|-d|}K}YZUM|=Y|ktm*}F]{D;g{uI|7kg^}%?Z%ca{N[_<q4xC]i|PqZC]n}.bDrnh0Wq{tr|OMn6tM|!6|T`{O`|>!]ji+]_bTeU}Tq|ds}n|{Gm{z,f)}&s{DPYJ`%{CGd5v4tvb*hUh~bf]z`jajiFqAii]bfy^U{Or|m+{I)cS|.9k:e3`^|xN}@Dnlis`B|Qo{`W|>||kA}Y}{ERYuYx`%[exd`]|OyiHtb}HofUYbFo![5|+]gD{NIZR|Go}.T{rh^4]S|C9_}xO^i`vfQ}C)bK{TL}cQ|79iu}9a];sj{P.o!f[Y]pM``Jda^Wc9ZarteBZClxtM{LW}l9|a.mU}KX}4@{I+f1}37|8u}9c|v${xGlz}jP{Dd1}e:}31}%3X$|22i<v+r@~mf{sN{C67G97855F4YL5}8f{DT|xy{sO{DXB334@55J1)4.G9A#JDYtXTYM4, YQD9;XbXm9SX]IB^4UN=Xn<5(;(F3YW@XkH-X_VM[DYM:5XP!T&Y`6|,^{IS-*D.H>:LXjYQ0I3XhAF:9:(==.F*3F1189K/7163D,:@|e2{LS36D4hq{Lw/84443@4.933:0307::6D7}&l{Mx657;89;,K5678H&93D(H<&<>0B90X^I;}Ag1{P%3A+>><975}[S{PZE453?4|T2{Q+5187;>447:81{C=hL6{Me^:=7ii{R=.=F<81;48?|h8}Uh{SE|,VxL{ST,7?9Y_5Xk3A#:$%YSYdXeKXOD8+TXh7(@>(YdXYHXl9J6X_5IXaL0N?3YK7Xh!1?XgYz9YEXhXaYPXhC3X`-YLY_XfVf[EGXZ5L8BXL9YHX]SYTXjLXdJ: YcXbQXg1PX]Yx4|Jr{Ys4.8YU+XIY`0N,<H%-H;:0@,74/:8546I=9177154870UC]d<C3HXl7ALYzXFXWP<<?E!88E5@03YYXJ?YJ@6YxX-YdXhYG|9o{`iXjY_>YVXe>AYFX[/(I@0841?):-B=14337:8=|14{c&93788|di{cW-0>0<097/A;N{FqYpugAFT%X/Yo3Yn,#=XlCYHYNX[Xk3YN:YRT4?)-YH%A5XlYF3C1=NWyY}>:74-C673<69545v {iT85YED=64=.F4..9878/D4378?48B3:7:7/1VX[f4{D,{l<5E75{dAbRB-8-@+;DBF/$ZfW8S<4YhXA.(5@*11YV8./S95C/0R-A4AXQYI7?68167B95HA1*<M3?1/@;/=54XbYP36}lc{qzSS38:19?,/39193574/66878Yw1X-87E6=;964X`T734:>86>1/=0;(I-1::7ALYGXhF+Xk[@W%TYbX7)KXdYEXi,H-XhYMRXfYK?XgXj.9HX_SX]YL1XmYJ>Y}WwIXiI-3-GXcYyXUYJ$X`Vs[7;XnYEZ;XF! 3;%8;PXX(N3Y[)Xi1YE&/ :;74YQ6X`33C;-(>Xm0(TYF/!YGXg8 9L5P01YPXO-5%C|qd{{/K/E6,=0144:361:955;6443@?B7*7:F89&F35YaX-CYf,XiFYRXE_e{}sF 0*7XRYPYfXa5YXXY8Xf8Y~XmA[9VjYj*#YMXIYOXk,HHX40YxYMXU8OXe;YFXLYuPXP?EB[QV0CXfY{:9XV[FWE0D6X^YVP*$4%OXiYQ(|xp|%c3{}V`1>Y`XH00:8/M6XhQ1:;3414|TE|&o@1*=81G8<3}6<|(f6>>>5-5:8;093B^3U*+*^*UT30XgYU&7*O1953)5@E78--F7YF*B&0:%P68W9Zn5974J9::3}Vk|-,C)=)1AJ4+<3YGXfY[XQXmT1M-XcYTYZXCYZXEYXXMYN,17>XIG*SaS|/eYJXbI?XdNZ+WRYP<F:R PXf;0Xg`$|1GX9YdXjLYxWX!ZIXGYaXNYm6X9YMX?9EXmZ&XZ#XQ>YeXRXfAY[4 ;0X!Zz0XdN$XhYL XIY^XGNXUYS/1YFXhYk.TXn4DXjB{jg|4DEX]:XcZMW=A.+QYL<LKXc[vV$+&PX*Z3XMYIXUQ:ZvW< YSXFZ,XBYeXMM)?Xa XiZ4/EXcP3%}&-|6~:1(-+YT$@XIYRBC<}&,|7aJ6}bp|8)K1|Xg|8C}[T|8Q.89;-964I38361<=/;883651467<7:>?1:.}le|:Z=39;1Y^)?:J=?XfLXbXi=Q0YVYOXaXiLXmJXO5?.SFXiCYW}-;|=u&D-X`N0X^,YzYRXO(QX_YW9`I|>hZ:N&X)DQXP@YH#XmNXi$YWX^=!G6YbYdX>XjY|XlX^XdYkX>YnXUXPYF)FXT[EVTMYmYJXmYSXmNXi#GXmT3X8HOX[ZiXN]IU2>8YdX1YbX<YfWuZ8XSXcZU%0;1XnXkZ_WTG,XZYX5YSX Yp 05G?XcYW(IXg6K/XlYP4XnI @XnO1W4Zp-9C@%QDYX+OYeX9>--YSXkD.YR%Q/Yo YUX].Xi<HYEZ2WdCE6YMXa7F)=,D>-@9/8@5=?7164;35387?N<618=6>7D+C50<6B03J0{Hj|N9$D,9I-,.KB3}m |NzE0::/81YqXjMXl7YG; [.W=Z0X4XQY]:MXiR,XgM?9$9>:?E;YE77VS[Y564760391?14941:0=:8B:;/1DXjFA-564=0B3XlH1+D85:0Q!B#:-6&N/:9<-R3/7Xn<*3J4.H:+334B.=>30H.;3833/76464665755:/83H6633:=;.>5645}&E|Y)?1/YG-,93&N3AE@5 <L1-G/8A0D858/30>8<549=@B8] V0[uVQYlXeD(P#ID&7T&7;Xi0;7T-$YE)E=1:E1GR):--0YI7=E<}n9|aT6783A>D7&4YG7=391W;Zx<5+>F#J39}o/|cc;6=A050EQXg8A1-}D-|d^5548083563695D?-.YOXd37I$@LYLWeYlX<Yd+YR A$;3-4YQ-9XmA0!9/XLY_YT(=5XdDI>YJ5XP1ZAW{9>X_6R(XhYO65&J%DA)C-!B:97#A9;@?F;&;(9=11/=657/H,<8}bz|j^5446>.L+&Y^8Xb6?(CYOXb*YF(8X`FYR(XPYVXmPQ%&DD(XmZXW??YOXZXfCYJ79,O)XnYF7K0!QXmXi4IYFRXS,6<%-:YO(+:-3Q!1E1:W,Zo}Am|n~;3580534*?3Zc4=9334361693:30C<6/717:<1/;>59&:4}6!|rS36=1?75<8}[B|s809983579I.A.>84758=108564741H*9E{L{|u%YQ<%6XfH.YUXe4YL@,>N}Tv|ve*G0X)Z;/)3@A74(4P&A1X:YVH97;,754*A66:1 D739E3553545558E4?-?K17/770843XAYf838A7K%N!YW4.$T19Z`WJ*0XdYJXTYOXNZ 1XaN1A+I&Xi.Xk3Z3GB&5%WhZ1+5#Y[X<4YMXhQYoQXVXbYQ8XSYUX4YXBXWDMG0WxZA[8V+Z8X;D],Va$%YeX?FXfX[XeYf<X:Z[WsYz8X_Y]%XmQ(!7BXIZFX]&YE3F$(1XgYgYE& +[+W!<YMYFXc;+PXCYI9YrWxGXY9DY[!GXiI7::)OC;*$.>N*HA@{C|}&k=:<TB83X`3YL+G4XiK]i}(fYK<=5$.FYE%4*5*H*6XkCYL=*6Xi6!Yi1KXR4YHXbC8Xj,B9ZbWx/XbYON#5B}Ue}+QKXnF1&YV5XmYQ0!*3IXBYb71?1B75XmF;0B976;H/RXU:YZX;BG-NXj;XjI>A#D3B636N;,*%<D:0;YRXY973H5)-4FXOYf0:0;/7759774;7;:/855:543L43<?6=E,.A4:C=L)%4YV!1(YE/4YF+ F3%;S;&JC:%/?YEXJ4GXf/YS-EXEYW,9;E}X$}547EXiK=51-?71C%?57;5>463553Zg90;6447?<>4:9.7538XgN{|!}9K/E&3-:D+YE1)YE/3;37/:05}n<}:UX8Yj4Yt864@JYK..G=.(A Q3%6K>3(P3#AYE$-6H/456*C=.XHY[#S.<780191;057C)=6HXj?955B:K1 E>-B/9,;5.!L?:0>/.@//:;7833YZ56<4:YE=/:7Z_WGC%3I6>XkC*&NA16X=Yz2$X:Y^&J48<99k8}CyB-61<18K946YO4{|N}E)YIB9K0L>4=46<1K0+R;6-=1883:478;4,S+3YJX`GJXh.Yp+Xm6MXcYpX(>7Yo,/:X=Z;Xi0YTYHXjYmXiXj;*;I-8S6N#XgY}.3XfYGO3C/$XjL$*NYX,1 6;YH&<XkK9C#I74.>}Hd`A748X[T450[n75<4439:18A107>|ET}Rf<1;14876/Yb983E<5.YNXd4149>,S=/4E/<306443G/06}0&}UkYSXFYF=44=-5095=88;63844,9E6644{PL}WA8:>)7+>763>>0/B3A545CCnT}Xm|dv}Xq1L/YNXk/H8;;.R63351YY747@15YE4J8;46;.38.>4A369.=-83,;Ye3?:3@YE.4-+N353;/;@(X[YYD>@/05-I*@.:551741Yf5>6A443<3535;.58/86=D4753442$635D1>0359NQ @73:3:>><Xn?;43C14 ?Y|X611YG1&<+,4<*,YLXl<1/AIXjF*N89A4Z576K1XbJ5YF.ZOWN.YGXO/YQ01:4G38Xl1;KI0YFXB=R<7;D/,/4>;$I,YGXm94@O35Yz66695385.>:6A#5}W7n^4336:4157597434433<3|XA}m`>=D>:4A.337370?-6Q96{`E|4A}C`|Qs{Mk|J+~r>|o,wHv>Vw}!c{H!|Gb|*Ca5}J||,U{t+{CN[!M65YXOY_*B,Y[Z9XaX[QYJYLXPYuZ%XcZ8LY[SYPYKZM<LMYG9OYqSQYM~[e{UJXmQYyZM_)>YjN1~[f3{aXFY|Yk:48YdH^NZ0|T){jVFYTZNFY^YTYN~[h{nPYMYn3I]`EYUYsYIZEYJ7Yw)YnXPQYH+Z.ZAZY]^Z1Y`YSZFZyGYHXLYG 8Yd#4~[i|+)YH9D?Y^F~Y7|-eYxZ^WHYdYfZQ~[j|3>~[k|3oYmYqY^XYYO=Z*4[]Z/OYLXhZ1YLZIXgYIHYEYK,<Y`YEXIGZI[3YOYcB4SZ!YHZ*&Y{Xi3~[l|JSY`Zz?Z,~[m|O=Yi>??XnYWXmYS617YVYIHZ(Z4[~L4/=~[n|Yu{P)|];YOHHZ}~[o33|a>~[r|aE]DH~[s|e$Zz~[t|kZFY~XhYXZB[`Y}~[u|{SZ&OYkYQYuZ2Zf8D~[v}% ~[w3},Q[X]+YGYeYPIS~[y}4aZ!YN^!6PZ*~[z}?E~[{3}CnZ=~[}}EdDZz/9A3(3S<,YR8.D=*XgYPYcXN3Z5 4)~[~}JW=$Yu.XX~] }KDX`PXdZ4XfYpTJLY[F5]X~[2Yp}U+DZJ::<446[m@~]#3}]1~]%}^LZwZQ5Z`/OT<Yh^ -~]&}jx[ ~m<z!%2+~ly4VY-~o>}p62yz!%2+Xf2+~ly4VY-zQ`z (=] 2z~o2",C={" ":0,"!":1},c=34,i=2,p,s="",u=String.fromCharCode,t=u(12539);for(;++c<127;)C[u(c)]=c^39&&c^92?i++:0;i=0;for(;0<=(c=C[a.charAt(i++)]);)if(16===c)if((c=C[a.charAt(i++)])<87){if(86===c)c=1879;for(;c--;)s+=u(++p)}else s+=s.substr(8272,360);else if(c<86)s+=u(p+=c<51?c-16:(c-55)*92+C[a.charAt(i++)]);else if((c=((c-86)*92+C[a.charAt(i++)])*92+C[a.charAt(i++)])<49152)s+=u(p=c<40960?c:c|57344);else{c&=511;for(;c--;)s+=t;p=12539}return s')(),/**
     * @param audio
     * @param soundInfo
     */
n.prototype.$startSound=function(t,e){if(e.SyncStop)t.pause();else{if(e.HasLoops){t.loopCount=e.LoopCount;var i=function(){t.loopCount--,this.loopCount?(t.currentTime=0,e.HasInPoint&&(t.currentTime=e.InPoint),t.play()):t.removeEventListener("ended",i)};t.addEventListener("ended",i)}e.HasInPoint&&t.addEventListener("canplay",function(){this.currentTime=e.InPoint}),t.play()}},/**
     * resize
     */
n.prototype.$resize=function(){this.$clearTimeout.call(null,this.$resizeId),this.$resizeId=this.$setTimeout.call(null,this.$resizeExecute,300)},/**
     * resize execute
     */
n.prototype.$resizeExecute=function(){var t=i.prototype.$stages;for(var e in t)if(t.hasOwnProperty(e)){var o=t[e];o.isLoad&&o.resize()}},/**
     * @param a
     * @param b
     * @returns {[]}
     */
n.prototype.$multiplicationColor=function(t,e){return[+t[0]*e[0],+t[1]*e[1],+t[2]*e[2],+t[3]*e[3],+(t[0]*e[4]+t[4]),+(t[1]*e[5]+t[5]),+(t[2]*e[6]+t[6]),+(t[3]*e[7]+t[7])]},/**
     * @param a
     * @param b
     * @returns []
     */
n.prototype.$multiplicationMatrix=function(t,e){return[+(t[0]*e[0]+t[2]*e[1]),+(t[1]*e[0]+t[3]*e[1]),+(t[0]*e[2]+t[2]*e[3]),+(t[1]*e[2]+t[3]*e[3]),+(t[0]*e[4]+t[2]*e[5]+t[4]),+(t[1]*e[4]+t[3]*e[5]+t[5])]},/**
     * @param color
     * @param data
     * @returns {{R: number, G: number, B: number, A: number}}
     */
n.prototype.$generateColorTransform=function(t,e){return{R:0|this.$max(0,this.$min(t.R*e[0]+e[4],255)),G:0|this.$max(0,this.$min(t.G*e[1]+e[5],255)),B:0|this.$max(0,this.$min(t.B*e[2]+e[6],255)),A:+this.$max(0,this.$min(255*t.A*e[3]+e[7],255))/255}},/**
     * @param int
     * @param alpha
     * @returns {{R: number, G: number, B: number, A: number}}
     */
n.prototype.$intToRGBA=function(t,e){return e=e||100,{R:(16711680&t)>>16,G:(65280&t)>>8,B:255&t,A:e/100}},/**
     * @param rgb
     * @returns {Number}
     */
n.prototype.$toColorInt=function(t){return"number"==typeof t?t:this.$colorStringToInt(t)},/**
     * @param {Number} r
     * @param {Number} g
     * @param {Number} b
     * @returns {Number}
     */
n.prototype.$rgbToInt=function(t,e,i){return(t<<16)+(e<<8)+i},/**
     * @param str
     * @returns {string}
     */
n.prototype.$colorStringToInt=function(t){var e=this.$cacheStore.getCanvas().getContext("2d");e.fillStyle=t;var i="0x"+e.fillStyle.substr(1);
// destroy
return this.$cacheStore.destroy(e),i},/**
     * @param ctx
     * @param color
     * @returns {*}
     */
n.prototype.$generateImageTransform=function(t,e){var i=t.canvas,o=0|i.width,r=0|i.height,n=t.getImageData(0,0,o,r),a=n.data,s=+e[0],c=+e[1],h=+e[2],l=+e[3],p=+e[4],u=+e[5],f=+e[6],g=+e[7],d=o*r|0;if(d>0)for(var y=0,v=0;y<d;){var b=0|a[v],m=0|a[v=v+1|0],S=0|a[v=v+1|0],A=0|a[v=v+1|0];a[(v=v+1|0)-4]=0|this.$max(0,this.$min(b*s+p,255)),a[v-3]=0|this.$max(0,this.$min(m*c+u,255)),a[v-2]=0|this.$max(0,this.$min(S*h+f,255)),a[v-1]=+this.$max(0,this.$min(A*l+g,255)),y=y+1|0}return t.putImageData(n,0,0),t},/**
     * @param event
     */
n.prototype.$keyUpAction=function(t){
// cache
i.prototype.$keyEvent=t;
// execute
var e=i.prototype.$keyClass,o=e.onKeyUp;"function"==typeof o&&o.apply(e,[t])},/**
     * @param event
     */
n.prototype.$keyDownAction=function(t){var e,o,r;i.prototype.$keyEvent=t;var n=i.prototype.$keyClass,a=0|n.getCode(),s=n.onKeyDown;"function"==typeof s&&s.apply(n,[t]);var c=i.prototype.$stages;for(var h in c)if(c.hasOwnProperty(h)){var l=c[h],p=l.keyDownEventHits;if(o=0|p.length)for(e=0;e<o;){var u=p[e];e=e+1|0,l.executeEventAction(u.as,u.mc)}var f=l.buttonHits;if(o=f.length){var g=!1;for(e=o;e;)if((r=e-1)in f){var d=f[r];if(e=e-1|0,d){var y=d.button;if(y){var v=y.getActions();if(v&&0|v.length){for(var b in v)if(v.hasOwnProperty(b)){var m=v[b],S=0|m.CondKeyPress;switch(S){case 1:// left arrow
S=37;break;case 2:// right arrow
S=39;break;case 3:// home
S=36;break;case 4:// end
S=35;break;case 5:// insert
S=45;break;case 6:// delete
S=46;break;case 14:// up arrow
S=38;break;case 15:// down arrow
S=40;break;case 16:// page up
S=33;break;case 17:// page down
S=34;break;case 18:// tab
S=9;break;case 19:// escape
S=27}if(S===a){l.buttonAction(d.parent,m.ActionScript),l.touchRender(),g=!0;break}}if(g)break}}}}else e=e-1|0}}},/**
     * resize event
     */
t.addEventListener("resize",function(){i.prototype.$resize()}),/**
     * unload event
     */
t.addEventListener("unload",function(){i.prototype.$stages=void 0,i.prototype.$loadStages=void 0})}(t);var n=function(){},a=function(t){this.movieClip=t,this.variables={}};/**
 *
 * @param name
 * @returns {*}
 */
a.prototype.getProperty=function(t){return this.variables[t]},/**
 * @param name
 * @param value
 */
a.prototype.setProperty=function(t,e){this.variables[String(t)]=e},/**
 * @param int
 * @param alpha
 * @returns {{R: number, G: number, B: number, A: number}}
 */
a.prototype.intToRGBA=function(t,e){return e=e||100,{R:(16711680&t)>>16,G:(65280&t)>>8,B:255&t,A:e/100}},/**
 * @param offset
 */
a.prototype.setRGB=function(t){var e=this,i=e.movieClip;if(i instanceof bt){t|=0;var o=e.intToRGBA(t),r=i.getOriginColorTransform();if(r){var n=[o.R,o.G,o.B,255*o.A,0,0,0,0],a=i.cloneArray(n),s=i.multiplicationColor(r,a);i.setColorTransform(s)}}},/**
 * @returns {*[]|*}
 */
a.prototype.getTransform=function(){var t=this.movieClip;if(t instanceof bt)return t.getColorTransform()},/**
 * @param obj
 */
a.prototype.setTransform=function(t){var e=this.movieClip;if(e instanceof bt){var i=e.getOriginColorTransform(),o=[t.rb,t.gb,t.bb,t.ab,t.ra,t.ga,t.ba,t.aa],r=e.cloneArray(o),n=e.multiplicationColor(i,r);e.setColorTransform(n)}};/**
 * @constructor
 */
var s=function(){this.variables={}};/**
 *
 * @param name
 * @returns {*}
 */
s.prototype.getVariable=function(t){return this.variables[t]},/**
 * @param name
 * @param value
 * @returns {*}
 */
s.prototype.setVariable=function(t,e){this.variables[t]=e},/**
 * @param name
 * @returns {*}
 */
s.prototype.getProperty=function(t){return this.variables[t]},/**
 * @param name
 * @param value
 */
s.prototype.setProperty=function(t,e){this.variables[t]=e};/**
 * @constructor
 */
var c=function(){this.variables={},this._listeners=[]};(/**
 * util
 */
c.prototype=Object.create(i.prototype)).constructor=c,/**
 * properties
 */
Object.defineProperties(c.prototype,{onKeyDown:{get:function(){return this.getProperty("onKeyDown")},set:function(t){this.setProperty("onKeyDown",t)}},onKeyUp:{get:function(){return this.getProperty("onKeyUp")},set:function(t){this.setProperty("onKeyUp",t)}}}),/**
 * @type {number}
 */
c.prototype.BACKSPACE=8,c.prototype.CAPSLOCK=20,c.prototype.CONTROL=17,c.prototype.DELETEKEY=46,c.prototype.DOWN=40,c.prototype.END=35,c.prototype.ENTER=13,c.prototype.ESCAPE=27,c.prototype.HOME=36,c.prototype.INSERT=45,c.prototype.LEFT=37,c.prototype.PGDN=34,c.prototype.PGDN=34,c.prototype.PGUP=33,c.prototype.RIGHT=39,c.prototype.SHIFT=16,c.prototype.SPACE=32,c.prototype.TAB=9,c.prototype.UP=38,/**
 * @param name
 * @returns {*}
 */
c.prototype.getProperty=function(t){return this.variables[t]},/**
 * @param name
 * @param value
 */
c.prototype.setProperty=function(t,e){this.variables[String(t)]=e},/**
 *
 * @param listener
 * @returns {boolean}
 */
c.prototype.addListener=function(t){var e=t.onKeyDown;e&&(this.onKeyDown=e);var i=t.onKeyUp;return i&&(this.onKeyUp=i),!0},/**
 * @param code
 * @returns {boolean}
 */
c.prototype.isDown=function(t){return this.getCode()===t},/**
 * @returns {*}
 */
c.prototype.getCode=function(){if(!this.$keyEvent)return null;var t=0|this.$keyEvent.keyCode;if(96<=t&&t<=105)switch(0|t-96){case 0:t=48;break;case 1:t=49;break;case 2:t=50;break;case 3:t=51;break;case 4:t=52;break;case 5:t=53;break;case 6:t=54;break;case 7:t=55;break;case 8:t=56;break;case 9:t=57}return t},i.prototype.$keyClass=new c;/**
 * @constructor
 */
var h=function(){var t=this;t.xmlHttpRequest=new XMLHttpRequest,t.variables={},t.target=t,t.events={onData:void 0,onLoad:void 0}};/**
 * properties
 */
Object.defineProperties(h.prototype,{onData:{get:function(){return this.getProperty("onData")},set:function(t){this.setProperty("onData",t)}},onLoad:{get:function(){return this.getProperty("onLoad")},set:function(t){this.setProperty("onLoad",t)}}}),/**
 * @param name
 * @returns {*}
 */
h.prototype.getProperty=function(t){return this.variables[t]},/**
 * @param name
 * @param value
 */
h.prototype.setProperty=function(t,e){this.variables[String(t)]=e},/**
 * @param url
 * @returns {boolean}
 */
h.prototype.load=function(t){var e=this,i=e.xmlHttpRequest;i.open("GET",t,!0),i.onreadystatechange=function(){if(4===i.readyState){var t=decodeURIComponent(i.responseText);e.decode(t);var o=e.onData;"function"==typeof o&&o.apply(t,[t]);var r;switch(i.status){case 200:case 304:return"function"==typeof(r=e.onLoad)&&r.apply(t,[!0]),!0;default:return"function"==typeof(r=e.onLoad)&&r.apply(t,[!1]),!1}}},i.send(null)},/**
 * @param url
 * @param target
 * @param method
 * @returns {boolean}
 */
h.prototype.send=function(t,e,i){var o=this,r=o.xmlHttpRequest,n=i?i.toUpperCase():"GET";return r.open(n,t,!0),"POST"===n&&r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),e instanceof h&&(o.target=e),r.send(o.toString()),!0},/**
 * @param url
 * @param target
 * @param method
 * @returns {boolean}
 */
h.prototype.sendAndLoad=function(t,e,i){var o=this;return o.send(t,e,i),o.load(t)},/**
 * @param header
 * @param headerValue
 */
h.prototype.addRequestHeader=function(t,e){var i=this.xmlHttpRequest;if(t instanceof Array)for(var o=t.length,r=0;r<o;)i.setRequestHeader(t[r++],e[r++]);else i.setRequestHeader(t,e)},/**
 * @param queryString
 */
h.prototype.decode=function(t){for(var e=this.variables,i=t.split("&"),o=i.length,r=0;r<o;r++){var n=i[r].split("=");n.length<1||(e[String(n[0])]=n[1])}},/**
 * @returns {number}
 */
h.prototype.getBytesLoaded=function(){return 1},/**
 * @returns {number}
 */
h.prototype.getBytesTotal=function(){return 1},/**
 * @returns {string}
 */
h.prototype.toString=function(){var t=this.variables,e=[];for(var i in t)t.hasOwnProperty(i)&&(e[e.length]=i+"="+t[i]);return e.join("&")};/**
 * @constructor
 */
var l=function(){this.events={}};/**
 * @returns {undefined}
 */
l.prototype.show=function(){},/**
 * @returns {undefined}
 */
l.prototype.hide=function(){},/**
 * @param listener
 */
l.prototype.addListener=function(t){var e=this;if(t&&"object"==typeof t)for(var i=["onMouseDown","onMouseMove","onMouseUp"],o=t.variables,r=0;r<5;r++){var n=i[r];"function"==typeof t[n]?e.events[n]=t[n]:o&&"function"==typeof o[n]&&(e.events[n]=o[n])}return!0},/**
 * @param listener
 */
l.prototype.removeListener=function(t){var e=this;if(t&&"object"==typeof t)for(var i=["onMouseDown","onMouseMove","onMouseUp"],o=0;o<5;o++){var r=i[o],n=t.variables;("function"==typeof t[r]||n&&"function"==typeof n[r])&&(e.events[r]=void 0)}return!0};/**
 * @constructor
 */
var p=function(){this.events={onLoadStart:void 0,onLoadProgress:void 0,onLoadComplete:void 0,onLoadInit:void 0,onLoadError:void 0}};/**
 * @param url
 * @param target
 * @returns {boolean}
 */
p.prototype.loadClip=function(t,e){if(!t||!e)return!1;var i=this,o=i.events,r=new XMLHttpRequest;r.open("GET",t,!0),isXHR2?r.responseType="arraybuffer":r.overrideMimeType("text/plain; charset=x-user-defined");var n=o.onLoadProgress;n||(n=i.onLoadProgress),"function"==typeof n&&(r.onprogress=function(t){n.apply(i,[e,t.loaded,t.total])});var a=o.onLoadComplete;return a||(a=i.onLoadComplete),"function"==typeof a&&(r.onloadend=function(t){var o=t.currentTarget.status;200===o&&a.apply(i,[e,o])}),r.onreadystatechange=function(){if(4===r.readyState){var n=r.status,a=o.onLoadStart;switch(a||(a=i.onLoadStart),"function"==typeof a&&(r.onloadstart=function(){a.apply(i,[e])}),n){case 200:case 304:var s=e.getDisplayObject("_root").getStage(),c=isXHR2?r.response:r.responseText,h=new kt;loadStages[h.getId()]=h,e._url=t,e.reset(),e.setLoadStage(h),h.setParent(e),h.parse(c,t),h.stop();
// onLoadInit
var l=o.onLoadInit;if(l||(l=i.onLoadInit),"function"==typeof l){var p=function(t,e,i){return function(){return t.apply(e,[i])}}(l,i,e);e.events.load=[p]}e.addActions(s);break;default:var u=o.onLoadError;u||(u=i.onLoadError),"function"==typeof u&&u.apply(i,[e,"error",n])}}},r.send(null),!0},/**
 * @param listener
 * @returns {boolean}
 */
p.prototype.addListener=function(t){var e=this;if(t&&"object"==typeof t)for(var i=["onLoadStart","onLoadProgress","onLoadComplete","onLoadInit","onLoadError"],o=t.variables,r=0;r<5;r++){var n=i[r];"function"==typeof t[n]?e.events[n]=t[n]:o&&"function"==typeof o[n]&&(e.events[n]=o[n])}return!0},/**
 * @param listener
 * @returns {boolean}
 */
p.prototype.removeListener=function(t){var e=this;if(t&&"object"==typeof t)for(var i=["onLoadStart","onLoadProgress","onLoadComplete","onLoadInit","onLoadError"],o=0;o<5;o++){var r=i[o],n=t.variables;("function"==typeof t[r]||n&&"function"==typeof n[r])&&(e.events[r]=void 0)}return!0},/**
 * @param target
 * @returns {{bytesLoaded: number, bytesTotal: number}}
 */
p.prototype.getProgress=function(t){return{bytesLoaded:0,bytesTotal:0}};/**
 * @constructor
 */
var u=function(){};(/**
 * util
 */
u.prototype=Object.create(i.prototype)).constructor=u;/**
 * @constructor
 */
var f=function(){this.matrix=[1,0,0,1,0,0],this.colorTransform=[1,1,1,1,0,0,0,0],this.filters=null,this.blendMode="normal"};/**
 * @param src
 * @returns {Array}
 */
f.prototype.cloneArray=function(t){for(var e=[],i=0|t.length,o=0;o<i;)e[o]=t[o],o=0|o+1;return e},/**
 * @param blendMode
 * @returns {String}
 */
f.prototype.getBlendName=function(t){var e=null;switch(t){case 1:case"normal":e="normal";break;case 2:case"layer":e="layer";break;case 3:case"multiply":e="multiply";break;case 4:case"screen":e="screen";break;case 5:case"lighten":e="lighten";break;case 6:case"darken":e="darken";break;case 7:case"difference":e="difference";break;case 8:case"add":e="add";break;case 9:case"subtract":e="subtract";break;case 10:case"invert":e="invert";break;case 11:case"alpha":e="alpha";break;case 12:case"erase":e="erase";break;case 13:case"overlay":e="overlay";break;case 14:case"hardlight":e="hardlight"}return e},/**
 * @returns {PlaceObject}
 */
f.prototype.clone=function(){var t=new f;return t.setMatrix(this.getMatrix()),t.setColorTransform(this.getColorTransform()),t.setFilters(this.getFilters()),t.setBlendMode(this.getBlendMode()),t},/**
 * @returns {*}
 */
f.prototype.getMatrix=function(){return this.matrix},/**
 * @param matrix
 */
f.prototype.setMatrix=function(t){this.matrix=this.cloneArray(t)},/**
 * @returns {*}
 */
f.prototype.getColorTransform=function(){return this.colorTransform},/**
 * @param colorTransform
 */
f.prototype.setColorTransform=function(t){this.colorTransform=this.cloneArray(t)},/**
 * @returns {*}
 */
f.prototype.getFilters=function(){return this.filters},/**
 * @param filters
 */
f.prototype.setFilters=function(t){this.filters=t},/**
 * @returns {string}
 */
f.prototype.getBlendMode=function(){return this.blendMode},/**
 * @param blendMode
 */
f.prototype.setBlendMode=function(t){this.blendMode=this.getBlendName(t)};/**
 * @constructor
 */
var g=function(){this.data=null,this.name=null};/**
 * @param name
 * @returns {SharedObject}
 */
g.prototype.getLocal=function(e){this.name=e;var i=t.localStorage.getItem(e);return i=i?JSON.parse(i):{},this.data=i,this},/**
 * flush
 */
g.prototype.flush=function(){return t.localStorage.setItem(this.name,JSON.stringify(this.data)),!0};/**
 * @constructor
 */
var d=function(){this.ignoreWhite=!1,this.loaded=!1,this.status=0,this.variables={}};/**
 * properties
 */
Object.defineProperties(d.prototype,{onData:{get:function(){return this.getProperty("onData")},set:function(t){this.setProperty("onData",t)}},onLoad:{get:function(){return this.getProperty("onLoad")},set:function(t){this.setProperty("onLoad",t)}}}),/**
 * @param name
 * @returns {*}
 */
d.prototype.getProperty=function(t){return this.variables[t]},/**
 * @param name
 * @param value
 */
d.prototype.setProperty=function(t,e){this.variables[String(t)]=e},/**
 * @param url
 */
d.prototype.load=function(t){var e=this;t=""+t;var i=new XMLHttpRequest;i.open("GET",t,!0),i.onreadystatechange=function(){if(4===(0|i.readyState)){var t=i.responseXML,o=e.onData;"function"==typeof o&&o.apply(t,[t]);var r;switch(0|i.status){case 200:case 304:return"function"==typeof(r=e.onLoad)&&r.apply(t,[!0]),!0;default:return"function"==typeof(r=e.onLoad)&&r.apply(t,[!1]),!1}}},i.send(null)},/**
 * @param url
 * @param target
 * @param method
 */
d.prototype.send=function(t,e,i){var o=i?i.toUpperCase():"GET";e&&console.log(e);var r=new XMLHttpRequest;return r.open(o,t,!0),r.send(null),!0},/**
 * @param url
 * @param resultXML
 */
d.prototype.sendAndLoad=function(t,e){return this.send(t),this.load(e)};/**
 * @constructor
 */
var y=function(){this.target={},this.bubbles=!0,this.cancelable=!0,this.currentTarget={},this.eventPhase=0};/**
 * @type {string}
 */
y.prototype.ACTIVATE="activate",y.prototype.CLICK="press",y.prototype.CONTEXT_MENU="contextMenu",y.prototype.DOUBLE_CLICK="doubleClick",y.prototype.MIDDLE_CLICK="middleClick",y.prototype.MIDDLE_MOUSE_DOWN="middleMouseDown",y.prototype.MIDDLE_MOUSE_UP="middleMouseUp",y.prototype.MOUSE_DOWN="mouseDown",y.prototype.MOUSE_MOVE="mouseMove",y.prototype.MOUSE_OUT="rollOut",// mouseOut TODO
y.prototype.MOUSE_OVER="rollOver",// mouseOver TODO
y.prototype.MOUSE_UP="mouseUp",y.prototype.MOUSE_WHEEL="mouseWheel",y.prototype.RIGHT_CLICK="rightClick",y.prototype.RIGHT_MOUSE_DOWN="rightMouseDown",y.prototype.RIGHT_MOUSE_UP="rightMouseUp",y.prototype.ROLL_OUT="rollOut",y.prototype.ROLL_OVER="rollOver";/**
 * @param message
 * @constructor
 */
var v=function(t){this.type=t,this.target=null,y.call(this)};(/**
 * extends
 * @type {EventDispatcher}
 */
v.prototype=Object.create(y.prototype)).constructor=v,
// set
i.prototype.$clipEvent=new v;/**
 * @param type
 * @param bubbles
 * @param cancelable
 * @param mouseTarget
 * @param contextMenuOwner
 * @constructor
 */
var b=function(){this.events={},this.isLoad=!1,this.active=!1};(/**
 * util
 */
b.prototype=Object.create(u.prototype)).constructor=b,/**
 * properties
 */
Object.defineProperties(b.prototype,{onEnterFrame:{get:function(){return this.getOnEvent("onEnterFrame")},set:function(t){this.setOnEvent("onEnterFrame",t)}},onPress:{get:function(){return this.getOnEvent("onPress")},set:function(t){this.setOnEvent("onPress",t)}},onRelease:{get:function(){return this.getOnEvent("onRelease")},set:function(t){this.setOnEvent("onRelease",t)}},onReleaseOutside:{get:function(){return this.getOnEvent("onReleaseOutside")},set:function(t){this.setOnEvent("onReleaseOutside",t)}},onRollOver:{get:function(){return this.getOnEvent("onRollOver")},set:function(t){this.setOnEvent("onRollOver",t)}},onRollOut:{get:function(){return this.getOnEvent("onRollOut")},set:function(t){this.setOnEvent("onRollOut",t)}},onData:{get:function(){return this.getOnEvent("onData")},set:function(t){this.setOnEvent("onData",t)}},onMouseDown:{get:function(){return this.getOnEvent("onMouseDown")},set:function(t){this.setOnEvent("onMouseDown",t)}},onMouseUp:{get:function(){return this.getOnEvent("onMouseUp")},set:function(t){this.setOnEvent("onMouseUp",t)}},onMouseMove:{get:function(){return this.getOnEvent("onMouseMove")},set:function(t){this.setOnEvent("onMouseMove",t)}},onDragOut:{get:function(){return this.getOnEvent("onDragOut")},set:function(t){this.setOnEvent("onDragOut",t)}},onDragOver:{get:function(){return this.getOnEvent("onDragOver")},set:function(t){this.setOnEvent("onDragOver",t)}},onKeyDown:{get:function(){return this.getOnEvent("onKeyDown")},set:function(t){this.setOnEvent("onKeyDown",t)}},onKeyUp:{get:function(){return this.getOnEvent("onKeyUp")},set:function(t){this.setOnEvent("onKeyUp",t)}},onLoad:{get:function(){return this.getOnEvent("onLoad")},set:function(t){this.setOnEvent("onLoad",t)}},onUnLoad:{get:function(){return this.getOnEvent("onUnLoad")},set:function(t){this.setOnEvent("onUnLoad",t)}}}),/**
 * @param {string} type
 * @returns {function}
 */
b.prototype.getOnEvent=function(t){return this.variables[t]},/**
 * @param {string} type
 * @param {function} as
 */
b.prototype.setOnEvent=function(t,e){this.variables[t]=e},/**
 * @param type
 * @param listener
 * @param useCapture
 * @param priority
 * @param useWeakReference
 */
b.prototype.addEventListener=function(t,e,i,o,r){var n=this.events;t in n||(n[t]=[]);var a=n[t];a[a.length]=e},/**
 * @param event
 * @param stage
 */
b.prototype.dispatchEvent=function(t,e){var i=t.type;if(this.hasEventListener(i)){var o=this.events[i];t.target=this,this.setActionQueue(o,e,[t])}},/**
 * @param type
 * @returns {boolean}
 */
b.prototype.hasEventListener=function(t){return t in this.events},/**
 * @param type
 * @param listener
 * @param useCapture
 */
b.prototype.removeEventListener=function(t,e,i){if(this.hasEventListener(t))for(var o=this.events[t],r=0|o.length,n=0;n<r;){if(o[n]===e){o.slice(n,0);break}n=0|n+1}},/**
 * @param type
 */
b.prototype.willTrigger=function(t){return this.hasEventListener(t)},/**
 * @param as
 * @param stage
 * @param args
 */
b.prototype.setActionQueue=function(t,e,i){var o=e.actions;o[o.length]={as:t,mc:this,args:i}};/**
 * @param redMultiplier
 * @param greenMultiplier
 * @param blueMultiplier
 * @param alphaMultiplier
 * @param redOffset
 * @param greenOffset
 * @param blueOffset
 * @param alphaOffset
 * @constructor
 */
var m=function(t,e,i,o,r,n,a,s){
// default
this._colorTransform=[1,1,1,1,0,0,0,0],
// init
this.redMultiplier=t,this.greenMultiplier=e,this.blueMultiplier=i,this.alphaMultiplier=o,this.redOffset=r,this.greenOffset=n,this.blueOffset=a,this.alphaOffset=s};(/**
 * extends
 */
m.prototype=Object.create(u.prototype)).constructor=m,/**
 * properties
 */
Object.defineProperties(m.prototype,{redMultiplier:{get:function(){return this._colorTransform[0]},set:function(t){!this.$isNaN(t)&&-1<=t&&1>=t&&(this._colorTransform[0]=t)}},greenMultiplier:{get:function(){return this._colorTransform[1]},set:function(t){!this.$isNaN(t)&&-1<=t&&1>=t&&(this._colorTransform[1]=t)}},blueMultiplier:{get:function(){return this._colorTransform[2]},set:function(t){!this.$isNaN(t)&&-1<=t&&1>=t&&(this._colorTransform[2]=t)}},alphaMultiplier:{get:function(){return this._colorTransform[3]},set:function(t){!this.$isNaN(t)&&-1<=t&&1>=t&&(this._colorTransform[3]=t)}},redOffset:{get:function(){return this._colorTransform[4]},set:function(t){!this.$isNaN(t)&&-256<t&&256>t&&(this._colorTransform[4]=0|t)}},greenOffset:{get:function(){return this._colorTransform[5]},set:function(t){!this.$isNaN(t)&&-256<t&&256>t&&(this._colorTransform[5]=0|t)}},blueOffset:{get:function(){return this._colorTransform[6]},set:function(t){!this.$isNaN(t)&&-256<t&&256>t&&(this._colorTransform[6]=0|t)}},alphaOffset:{get:function(){return this._colorTransform[7]},set:function(t){!this.$isNaN(t)&&-256<t&&256>t&&(this._colorTransform[7]=0|t)}},color:{get:function(){return this.getColor()},set:function(t){this.setColor(t)}},rgb:{get:function(){return this.getColor()},set:function(t){this.setColor(t)}}}),/**
 * @returns {Number}
 */
m.prototype.getColor=function(){return this.$rgbToInt(this.redOffset,this.greenOffset,this.blueOffset)},/**
 *
 * @param value
 * @returns void
 */
m.prototype.setColor=function(t){var e="number"==typeof t?this.$intToRGBA(t):this.$intToRGBA(this.$colorStringToInt(t));this.redOffset=e.R,this.greenOffset=e.G,this.blueOffset=e.B,this.redMultiplier=0,this.greenMultiplier=0,this.blueMultiplier=0},/**
 * @returns {ColorTransform}
 */
m.prototype.clone=function(){return new m(this.redMultiplier,this.greenMultiplier,this.blueMultiplier,this.alphaMultiplier,this.redOffset,this.greenOffset,this.blueOffset,this.alphaOffset)},/**
 * @param {ColorTransform} second
 * @returns void
 */
m.prototype.concat=function(t){this._colorTransform=this.$multiplicationColor(this._colorTransform,t._colorTransform)},/**
 * @returns {string}
 */
m.prototype.toString=function(){return"(redMultiplier="+this.redMultiplier+", greenMultiplier="+this.greenMultiplier+", blueMultiplier="+this.blueMultiplier+", alphaMultiplier="+this.alphaMultiplier+", redOffset="+this.redOffset+", greenOffset="+this.greenOffset+", blueOffset="+this.blueOffset+", alphaOffset="+this.alphaOffset+")"};/**
 * @param a
 * @param b
 * @param c
 * @param d
 * @param tx
 * @param ty
 * @constructor
 */
var S=function(t,e,i,o,r,n){
// default
this.identity(),
// init
this.a=t,this.b=e,this.c=i,this.d=o,this.tx=r,this.ty=n};(/**
 * extends
 */
S.prototype=Object.create(u.prototype)).constructor=S,/**
 * properties
 */
Object.defineProperties(S.prototype,{a:{get:function(){return this._matrix[0]},set:function(t){this.$isNaN(t)||(this._matrix[0]=t)}},b:{get:function(){return this._matrix[1]},set:function(t){this.$isNaN(t)||(this._matrix[1]=t)}},c:{get:function(){return this._matrix[2]},set:function(t){this.$isNaN(t)||(this._matrix[2]=t)}},d:{get:function(){return this._matrix[3]},set:function(t){this.$isNaN(t)||(this._matrix[3]=t)}},tx:{get:function(){return this._matrix[4]/20},set:function(t){this.$isNaN(t)||(this._matrix[4]=20*t)}},ty:{get:function(){return this._matrix[5]/20},set:function(t){this.$isNaN(t)||(this._matrix[5]=20*t)}}}),/**
 * @returns {Matrix}
 */
S.prototype.clone=function(){return new S(this.a,this.b,this.c,this.d,this.tx,this.ty)},/**
 * @param {Matrix} m
 * @returns void
 */
S.prototype.concat=function(t){this._matrix=this.$multiplicationMatrix(t._matrix,this._matrix)},/**
 * @param {number} column
 * @param {Vector3D} vector3D
 * @returns void
 */
S.prototype.copyColumnFrom=function(t,e){},/**
 * @param {number} column
 * @param {Vector3D} vector3D
 * @returns void
 */
S.prototype.copyColumnTo=function(t,e){},/**
 * @param {Matrix} sourceMatrix
 * @returns void
 */
S.prototype.copyFrom=function(t){},/**
 * @param {number} row
 * @param {Vector3D} vector3D
 * @returns void
 */
S.prototype.copyRowFrom=function(t,e){},/**
 * @param {number} row
 * @param {Vector3D} vector3D
 * @returns void
 */
S.prototype.copyRowTo=function(t,e){},/**
 * @param {number} scaleX
 * @param {number} scaleY
 * @param {number} rotation
 * @param {number} tx
 * @param {number} ty
 * @returns void
 */
S.prototype.createBox=function(t,e,i,o,r){this.identity(),this.scale(t,e),this.rotate(i),this.translate(o,r)},/**
 * @param {number} width
 * @param {number} height
 * @param {number} rotation
 * @param {number} tx
 * @param {number} ty
 * @returns void
 */
S.prototype.createGradientBox=function(t,e,i,o,r){this.identity(),this.scale(t/1638.4,e/1638.4),this.rotate(i),this.translate(t/2+o,e/2+r)},/**
 * @param {Point} point
 * @returns {Point}
 */
S.prototype.deltaTransformPoint=function(t){var e=new S;e.translate(t.x,t.y);var i=this.clone();return i.tx=0,i.ty=0,e.concat(i),new x(e.tx,e.ty)},/**
 * @returns void
 */
S.prototype.identity=function(){this._matrix=[1,0,0,1,0,0]},/**
 * @returns void
 */
S.prototype.invert=function(){for(var t=1,e=[[this.a,this.c],[this.b,this.d]],i=0;i<2;){for(var o=0;o<2;){if(i<o)for(var r=e[o][i]/e[i][i],n=0;n<2;)e[o][n]=e[o][n]-e[i][n]*r,n=n+1|0;o=o+1|0}i=i+1|0}for(i=0;i<2;)t*=e[i][i],i=i+1|0;this.a=this.a/t,this.b=-this.b/t,this.c=-this.c/t,this.d=this.d/t,this.tx=-this.tx/t,this.ty=-this.ty/t},/**
 * @param {number} rotation
 * @returns void
 */
S.prototype.rotate=function(t){var e=this.$atan2(this.b,this.a),i=this.$atan2(-this.c,this.d),o=this.$sqrt(this.a*this.a+this.b*this.b),r=this.$sqrt(this.c*this.c+this.d*this.d);i=i+t-e,e=t,this.a=o*this.$cos(e),this.c=-o*this.$sin(e),this.b=r*this.$sin(i),this.d=r*this.$cos(i);var n=this.a*this.tx+this.c*this.ty,a=this.b*this.tx+this.d*this.ty;this.tx=n,this.ty=a},/**
 * @param {number} sx
 * @param {number} sy
 * @returns void
 */
S.prototype.scale=function(t,e){var i=this.$atan2(this.b,this.a),o=this.$atan2(-this.c,this.d);this.a=t*this.$cos(i),this.c=-t*this.$sin(i),this.b=e*this.$sin(o),this.d=e*this.$cos(o)},/**
 * @param {number} aa
 * @param {number} ba
 * @param {number} ca
 * @param {number} da
 * @param {number} txa
 * @param {number} tya
 * @returns void
 */
S.prototype.setTo=function(t,e,i,o,r,n){this.a=t,this.b=e,this.c=i,this.d=o,this.tx=r,this.ty=n},/**
 * @returns {string}
 */
S.prototype.toString=function(){return"(a="+this.a+", b="+this.b+", c="+this.c+", d="+this.d+", tx="+this.tx+", ty="+this.ty+")"},/**
 * @param {Point} point
 * @returns {Point}
 */
S.prototype.transformPoint=function(t){var e=new S;return e.translate(t.x,t.y),e.concat(this),new x(e.tx,e.ty)},/**
 * @param {number} dx
 * @param {number} dy
 * @returns void
 */
S.prototype.translate=function(t,e){this.tx=this.tx+t,this.ty=this.ty+e};/**
 * @param v
 * @constructor
 */
var A=function(t){this._v=null};(/**
 * extends
 */
A.prototype=Object.create(u.prototype)).constructor=A;/**
 * @constructor
 */
var I=function(){};I.AXIS_ANGLE="axisAngle",I.EULER_ANGLES="eulerAngles",I.QUATERNION="quaternion",(/**
 * extends
 */
I.prototype=Object.create(u.prototype)).constructor=I;/**
 * @constructor
 */
var C=function(){};(/**
 * extends
 */
C.prototype=Object.create(u.prototype)).constructor=C;/**
 * @param x
 * @param y
 * @constructor
 */
var x=function(t,e){
// default
this._x=0,this._y=0,
// init
this.x=t,this.y=e};/**
 * util
 */
x.prototype=Object.create(u.prototype),x.prototype.constructor=x,/**
 * properties
 */
Object.defineProperties(x.prototype,{x:{get:function(){return this._x/20},set:function(t){this.$isNaN(t)||(this._x=20*t)}},y:{get:function(){return this._y/20},set:function(t){this.$isNaN(t)||(this._y=20*t)}},length:{get:function(){return this.$sqrt(this.$pow(this.x,2)+this.$pow(this.y,2))},set:function(){}}}),/**
 * @param {Point} v
 * @returns {Point}
 */
x.prototype.add=function(t){return new x(this.x+t.x,this.y+t.y)},/**
 * @returns {Point}
 */
x.prototype.clone=function(){return new x(this.x,this.y)},/**
 * @param sourcePoint
 * @returns void
 */
x.prototype.copyFrom=function(t){this.x=t.x,this.y=t.y},/**
 * @param {Point} pt1
 * @param {Point} pt2
 * @returns {number}
 */
x.distance=function(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))},/**
 *
 * @param {Point} toCompare
 * @returns {boolean}
 */
x.prototype.equals=function(t){return this.x===t.x&&this.y===t.y},/**
 * @param {Point} pt1
 * @param {Point} pt2
 * @param {number} f
 * @returns {Point}
 */
x.interpolate=function(t,e,i){var o=t.x+(e.x-t.x)*i,r=t.y+(o-t.x)*((e.y-t.y)/(e.x-t.x));return new x(o,r)},/**
 * @param {number} thickness
 * @returns void
 */
x.prototype.normalize=function(t){var e=this.length,i=(e-t)/e;this.x=this.x-this.x*i,this.y=this.y-this.y*i},/**
 * @param {number} dx
 * @param {number} dy
 * @returns {Point}
 */
x.prototype.offset=function(t,e){this.x=this.x+t,this.y=this.y+e},/**
 * @param {number} len
 * @param {number} angle
 * @returns {Point}
 */
x.polar=function(t,e){var i=t*Math.cos(e),o=t*Math.sin(e);return new x(i,o)},/**
 * @param {number} xa
 * @param {number} ya
 * @returns void
 */
x.prototype.setTo=function(t,e){this.x=t,this.y=e},/**
 * @param {Point} v
 * @returns {Point}
 */
x.prototype.subtract=function(t){return new x(this.x-t.x,this.y-t.y)},/**
 * @returns {string}
 */
x.prototype.toString=function(){return"(x="+this.x+", y="+this.y+")"};/**
 * @param x
 * @param y
 * @param width
 * @param height
 * @constructor
 */
var _=function(t,e,i,o){
// default
this._x=0,this._y=0,this._width=0,this._height=0,
// init
this.x=t||0,this.y=e||0,this.width=i||0,this.height=o||0};(/**
 * extends
 */
_.prototype=Object.create(u.prototype)).constructor=_,/**
 * properties
 */
Object.defineProperties(_.prototype,{bottom:{get:function(){return this.$abs(this.y)+this.height},set:function(t){this.height=+(t-this.y)}},bottomRight:{get:function(){return new x(this.right,this.bottom)},set:function(t){this.right=t.x,this.bottom=t.y}},height:{get:function(){return this._height/20},set:function(t){this._height=20*t}},left:{get:function(){return this.x},set:function(t){this.width=+(this.right-t),this.x=t}},right:{get:function(){return+(this.$abs(this.x)+this.width)},set:function(t){this.width=+(t-this.x)}},size:{get:function(){return new x(this.width,this.height)},set:function(t){this.width=t.x,this.height=t.y}},top:{get:function(){return this.y},set:function(t){this.height=+(this.bottom-t),this.y=t}},topLeft:{get:function(){return new x(this.x,this.y)},set:function(t){this.left=t.x,this.top=t.y}},width:{get:function(){return this._width/20},set:function(t){this._width=20*t}},x:{get:function(){return this._x/20},set:function(t){this._x=20*t}},y:{get:function(){return this._y/20},set:function(t){this._y=20*t}}}),/**
 * @returns {Rectangle}
 */
_.prototype.clone=function(){return new _(this.x,this.y,this.width,this.height)},/**
 * @param {number} x
 * @param {number} y
 * @returns {boolean}
 */
_.prototype.contains=function(t,e){return this.x<=t&&this.y<=e&&this.right>t&&this.bottom>e},/**
 * @param {Point} point
 * @returns {boolean}
 */
_.prototype.containsPoint=function(t){return this.x<=t.x&&this.y<=t.y&&this.right>t.x&&this.bottom>t.y},/**
 *
 * @param {Rectangle} rect
 * @returns {boolean}
 */
_.prototype.containsRect=function(t){return this.x<=t.x&&this.y<=t.y&&this.right>=t.right&&this.bottom>=t.bottom},/**
 * @param {Rectangle} sourceRect
 * @returns void
 */
_.prototype.copyFrom=function(t){this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height},/**
 * @param {Rectangle} toCompare
 * @returns {boolean}
 */
_.prototype.equals=function(t){return this.x===t.x&&this.y===t.y&&this.width===t.width&&this.height===t.height},/**
 * @param {number} dx
 * @param {number} dy
 * @returns void
 */
_.prototype.inflate=function(t,e){this.x=+(this.x-t),this.width=+(this.width+2*t),this.y=+(this.y-e),this.height=+(this.height+2*e)},/**
 * @param {Point} point
 * @returns void
 */
_.prototype.inflatePoint=function(t){this.x=+(this.x-t.x),this.width=+(this.width+2*t.x),this.y=+(this.y-t.y),this.height=+(this.height+2*t.y)},/**
 * @param {Rectangle} toIntersect
 * @returns {Rectangle}
 */
_.prototype.intersection=function(t){var e=+this.$max(this.x,t.x),i=+this.$max(this.y,t.y),o=+(+this.$min(this.right,t.right)-e),r=+(+this.$min(this.bottom,t.bottom)-i);return o>0&&r>0?new _(e,i,o,r):new _},/**
 * @param {Rectangle} toIntersect
 * @returns {boolean}
 */
_.prototype.intersects=function(t){var e=+this.$max(this.x,t.x),i=+this.$max(this.y,t.y),o=+this.$min(this.right,t.right),r=+(+this.$min(this.bottom,t.bottom)-i);return+(o-e)>0&&r>0},/**
 * @returns {boolean}
 */
_.prototype.isEmpty=function(){return this.width<=0||this.height<=0},/**
 *
 * @param {number} dx
 * @param {number} dy
 * @returns void
 */
_.prototype.offset=function(t,e){this.x=+(this.x+t),this.y=+(this.y+e)},/**
 * @param {Point} point
 * @returns void
 */
_.prototype.offsetPoint=function(t){this.x=+(this.x+t.x),this.y=+(this.y+t.y)},/**
 * @returns void
 */
_.prototype.setEmpty=function(){this.x=0,this.y=0,this.width=0,this.height=0},/**
 *
 * @param {number} xa
 * @param {number} ya
 * @param {number} widtha
 * @param {number} heighta
 * @returns void
 */
_.prototype.setTo=function(t,e,i,o){this.x=t,this.y=e,this.width=i,this.height=o},/**
 * @returns {string}
 */
_.prototype.toString=function(){return"(x="+this.x+", y="+this.y+", w="+this.width+", h="+this.height+")"},/**
 * @param {Rectangle} toUnion
 * @returns {Rectangle}
 */
_.prototype.union=function(t){switch(!0){case this.isEmpty():return t.clone();case t.isEmpty():return this.clone();default:return new _(this.$min(this.x,t.x),this.$min(this.y,t.y),this.$max(this.right,t.right),this.$max(this.bottom,t.bottom))}};/**
 * @constructor
 */
var T=function(){this._colorTransform=null,this._matrix=null,this._matrix3D=new A,this._perspectiveProjection=new C,this._pixelBounds=new _};(/**
 * util
 */
T.prototype=Object.create(u.prototype)).constructor=T,/**
 * properties
 */
Object.defineProperties(T.prototype,{colorTransform:{get:function(){return null===this._colorTransform?[1,1,1,1,0,0,0,0]:this._colorTransform},set:function(t){t instanceof m&&(this._colorTransform=t.clone())}},matrix:{get:function(){return null===this._matrix?[1,0,0,1,0,0]:this._matrix},set:function(t){t instanceof S&&(this._matrix=t.clone())}},matrix3D:{get:function(){return this._matrix3D},set:function(t){t instanceof A&&(this._matrix3D=t)}},perspectiveProjection:{get:function(){return this._perspectiveProjection},set:function(t){t instanceof C&&(this._perspectiveProjection=t)}},pixelBounds:{get:function(){return this._pixelBounds},set:function(){}},concatenatedColorTransform:{get:function(){},set:function(){}},concatenatedMatrix:{get:function(){},set:function(){}}}),/**
 * @param {DisplayObject} relativeTo
 * @returns {Matrix3D}
 */
T.prototype.getRelativeMatrix3D=function(t){
// todo
return new A};/**
 * @param percent
 * @param mat
 * @param pos
 * @param at
 * @param up
 * @constructor
 */
var k=function(t,e,i,o,r){this._percent=0,this._mat=null,this._pos=null,this._at=null,this._up=null};(/**
 * extends
 */
k.prototype=Object.create(u.prototype)).constructor=k;/**
 * @param x
 * @param y
 * @param z
 * @param w
 * @constructor
 */
var O=function(t,e,i,o){this._x=0,this._y=0,this._z=0,this._w=0};(/**
 * extends
 */
O.prototype=Object.create(u.prototype)).constructor=O;/**
 * @param requestedLocaleIDName
 * @param initialMode
 * @constructor
 */
var M=function(){};M.MATCHING="matching",M.SORTING="sorting",(/**
 * extends
 */
M.prototype=Object.create(u.prototype)).constructor=M;/**
 * @param requestedLocaleIDName
 * @constructor
 */
var B=function(){};B.FORMAT="format",B.STANDALONE="standalone",(/**
 * extends
 */
B.prototype=Object.create(u.prototype)).constructor=B;/**
 * @constructor
 */
var w=function(){};w.prototype.FULL="full",w.prototype.LONG_ABBREVIATION="longAbbreviation",w.prototype.SHORT_ABBREVIATION="shortAbbreviation";/**
 * @constructor
 */
var F=function(){};F.CUSTOM="custom",F.LONG="long",F.MEDIUM="medium",F.NONE="none",F.SHORT="short",(/**
 * extends
 */
F.prototype=Object.create(u.prototype)).constructor=F;/**
 * @constructor
 */
var U=function(){};U.BUFFER_OVERFLOW_ERROR="bufferOverflowError",U.ERROR_CODE_UNKNOWN="errorCodeUnknown",U.ILLEGAL_ARGUMENT_ERROR="illegalArgumentError",U.INDEX_OUT_OF_BOUNDS_ERROR="indexOutOfBoundsError",U.INVALID_ATTR_VALUE="invalidAttrValue",U.INVALID_CHAR_FOUND="invalidCharFound",U.MEMORY_ALLOCATION_ERROR="memoryAllocationError",U.NO_ERROR="noError",U.NUMBER_OVERFLOW_ERROR="numberOverflowError",U.PARSE_ERROR="parseError",U.PATTERN_SYNTAX_ERROR="patternSyntaxError",U.PLATFORM_API_FAILED="platformAPIFailed",U.TRUNCATED_CHAR_FOUND="truncatedCharFound",U.UNEXPECTED_TOKEN="unexpectedToken",U.UNSUPPORTED_ERROR="unsupportedError",U.USING_DEFAULT_WARNING="usingDefaultWarning",U.USING_FALLBACK_WARNING="usingFallbackWarning",(/**
 * extends
 */
U.prototype=Object.create(u.prototype)).constructor=U;/**
 * @param name
 * @constructor
 */
var P=function(){};P.ARABIC_INDIC=1632,P.BALINESE=6992,P.BENGALI=2534,P.CHAM=43600,P.DEVANAGARI=2406,P.EUROPEAN=48,P.EXTENDED_ARABIC_INDIC=1776,P.FULL_WIDTH=65296,P.GUJARATI=2790,P.GURMUKHI=2662,P.KANNADA=3302,P.KAYAH_LI=43264,P.KHMER=6112,P.LAO=3792,P.LEPCHA=7232,P.LIMBU=6470,P.MALAYALAM=3430,P.MONGOLIAN=6160,P.MYANMAR=4160,P.MYANMAR_SHAN=4240,P.NEW_TAI_LUE=6608,P.NKO=1984,P.OL_CHIKI=7248,P.ORIYA=2918,P.OSMANYA=66720,P.SAURASHTRA=43216,P.SUNDANESE=7088,P.TAMIL=3046,P.TELUGU=3174,P.THAI=3664,P.TIBETAN=3872,P.VAI=42528,(/**
 * extends
 */
P.prototype=Object.create(u.prototype)).constructor=P;/**
 * @param requestedLocaleIDName
 * @constructor
 */
var $=function(){};(/**
 * util
 */
$.prototype=Object.create(u.prototype)).constructor=$,/**
 * @param inner
 * @param knockout
 * @param hideObject
 * @returns {*}
 */
$.prototype.filterOperation=function(t,e,i){return e?t?"source-in":"source-out":i?t?"source-in":"copy":t?"source-atop":"destination-over"},/**
 * @param ctx
 * @param color
 * @param inner
 * @param strength
 * @returns {*}
 */
$.prototype.coatOfColor=function(t,e,i,o){var r,n,a=t.canvas,s=t.getImageData(0,0,a.width,a.height),c=0,h=0|e.R,l=0|e.G,p=0|e.B,u=s.data,f=0|u.length;if(i)for(;c<f;)255!==(n=0|u[r=c+3|0])?(u[c]=0|h,u[c+1]=0|l,u[c+2]=0|p,u[r]=255-n|0):u[r]=0,c=c+4|0;else for(;c<f;)0!==(n=0|u[r=c+3|0])&&(u[c]=0|h,u[c+1]=0|l,u[c+2]=0|p,u[r]=0|n),c=c+4|0;if(t.putImageData(s,0,0),o>0)for(c=1;c<o;)c=c+1|0,t.drawImage(t.canvas,0,0);return t},/**
 * clone
 */
$.prototype.clone=function(){var t=[];for(var e in this)this.hasOwnProperty(e)&&(t[t.length]=this[e]);var i=this;switch(0|this.filterId){case 0:// DropShadowFilter
i=new(Function.prototype.bind.apply(j,t));break;case 1:// BlurFilter
i=new(Function.prototype.bind.apply(Y,t));break;case 2:// GlowFilter
i=new(Function.prototype.bind.apply(G,t));break;case 3:// BevelFilter
i=new(Function.prototype.bind.apply(L,t));break;case 4:// GradientGlowFilter
i=new(Function.prototype.bind.apply(V,t));break;case 5:// ConvolutionFilter
i=new(Function.prototype.bind.apply(R,t));break;case 6:// ColorMatrixFilter
i=new(Function.prototype.bind.apply(N,t));break;case 7:// GradientBevelFilter
i=new(Function.prototype.bind.apply(Z,t))}return i};/**
 * @constructor
 */
var L=function(){$.call(this),this.filterId=3,
// default
this._distance=4,this._angle=45,this._highlightColor=16777215,this._highlightAlpha=1,this._shadowColor=0,this._shadowAlpha=1,this._blurX=4,this._blurY=4,this._strength=1,this._quality=1,this._type="inner",this._knockout=!1;var t=arguments;this.distance=t[0],this.angle=t[1],this.highlightColor=t[2],this.highlightAlpha=t[3],this.shadowColor=t[4],this.shadowAlpha=t[5],this.blurX=t[6],this.blurY=t[7],this.strength=t[8],this.quality=t[9],this.type=t[10],this.knockout=t[11]};/**
 * extends
 * @type {BitmapFilter}
 */
L.prototype=Object.create($.prototype),L.prototype.constructor=L,/**
 * properties
 */
Object.defineProperties(L.prototype,{distance:{get:function(){return this._distance},set:function(t){this.$isNaN(t)||(this._distance=t)}},angle:{get:function(){return this._angle},set:function(t){!this.$isNaN(t)&&0<=t&&360>=t&&(this._angle=t%360)}},highlightColor:{get:function(){return this._highlightColor},set:function(t){t&&(this._highlightColor=this.$toColorInt(t))}},highlightAlpha:{get:function(){return this._highlightAlpha},set:function(t){!this.$isNaN(t)&&0<=t&&1>=t&&(this._highlightAlpha=t)}},shadowColor:{get:function(){return this._shadowColor},set:function(t){t||(this._shadowColor=this.$toColorInt(t))}},shadowAlpha:{get:function(){return this._shadowAlpha},set:function(t){!this.$isNaN(t)&&0<=t&&1>=t&&(this._shadowAlpha=t)}},blurX:{get:function(){return this._blurX},set:function(t){!this.$isNaN(t)&&0<=t&&256>t&&(this._blurX=t)}},blurY:{get:function(){return this._blurY},set:function(t){!this.$isNaN(t)&&0<=t&&256>t&&(this._blurY=t)}},strength:{get:function(){return this._strength},set:function(t){!this.$isNaN(t)&&0<=t&&256>=t&&(this._strength=t)}},quality:{get:function(){return this._quality},set:function(t){!this.$isNaN(t)&&0<t&&16>t&&(this._quality=t)}},type:{get:function(){return this._type},set:function(t){if("string"==typeof t)switch(t){case"inner":case"outer":case"full":this._type=t}}},knockout:{get:function(){return this._knockout},set:function(t){"boolean"==typeof t&&(this._knockout=t)}}}),/**
 * @param cache
 * @param colorTransform
 * @param stage
 * @returns {*}
 */
L.prototype.render=function(t,e,i){var o,r,n=this.angle,a=this.shadowColor,s=this.shadowAlpha,c=this.highlightColor,h=this.highlightAlpha,l=this.blurX,p=this.blurY,u=this.strength,f=this.quality,g=this.knockout,d=this.type,y=+n*this.$PI/180,v=new Y(l,p,f).render(t,e,i),b=v.canvas,m=v._offsetX,S=v._offsetY,A=this.$cacheStore.getCanvas();A.width=0|b.width,A.height=0|b.height;var I=A.getContext("2d");I.drawImage(b,0,0),o=this.$intToRGBA(a),r=this.$generateColorTransform(o,e),I=this.coatOfColor(I,r,!1,u);
// highlight
var C=this.$cacheStore.getCanvas();C.width=b.width,C.height=b.height;var x=C.getContext("2d");x.drawImage(b,0,0),o=this.$intToRGBA(c),r=this.$generateColorTransform(o,e),x=this.coatOfColor(x,r,!1,u);var _=t._offsetX,T=t._offsetY,k=b.width+_|0,O=b.height+T|0,M=this.distance,B=i.getScale(),w=0|this.$ceil(this.$cos(y)*M*B*i.ratio),F=0|this.$ceil(this.$sin(y)*M*B*i.ratio),U=m+this.$abs(w),P=S+this.$abs(F);k=k+2*this.$abs(w)|0,O=O+2*this.$abs(F)|0;var $=this.$cacheStore.getCanvas();$.width=0|k,$.height=0|O;var L=$.getContext("2d");g||L.drawImage(t.canvas,U,P),u<1&&(L.globalAlpha=+L.globalAlpha*u);var E=this.$cacheStore.getCanvas();E.width=0|k,E.height=0|O;var D=E.getContext("2d");D.setTransform(1,0,0,1,this.$abs(w),this.$abs(F)),D.globalCompositeOperation="xor",
// highlight
D.globalAlpha=h,D.drawImage(x.canvas,_-w,T-F),
// shadow
D.globalAlpha=s,D.drawImage(I.canvas,_+w,T+F);var N,R="inner"===d||"full"===d,X="outer"===d||"full"===d;return R&&X?N="source-over":R?(L.drawImage(t.canvas,U,P),N=this.filterOperation(!0,g)):X&&(N="destination-over"),L.globalCompositeOperation=N,L.drawImage(D.canvas,0,0),!R&&X&&g&&(L.globalCompositeOperation="destination-out",L.drawImage(t.canvas,U,P)),L._offsetX=+(_+U),L._offsetY=+(T+P),this.$cacheStore.destroy(v),this.$cacheStore.destroy(x),this.$cacheStore.destroy(I),this.$cacheStore.destroy(D),L};/**
 * @constructor
 */
var E=function(){};E.LOW=1,E.MEDIUM=2,E.HIGH=3,(/**
 * extends
 */
E.prototype=Object.create(u.prototype)).constructor=E;/**
 * @constructor
 */
var D=function(){};D.FULL="full",D.INNER="inner",D.OUTER="outer",(/**
 * extends
 */
D.prototype=Object.create(u.prototype)).constructor=D;/**
 * @constructor
 */
var Y=function(){$.call(this),this.filterId=1,
// default
this._blurX=4,this._blurY=4,this._quality=1;var t=arguments;this.blurX=t[0],this.blurY=t[1],this.quality=t[2]};/**
 * extends
 * @type {BitmapFilter}
 */
Y.prototype=Object.create($.prototype),Y.prototype.constructor=Y,/**
 * properties
 */
Object.defineProperties(Y.prototype,{blurX:{get:function(){return this._blurX},set:function(t){!this.$isNaN(t)&&0<=t&&256>t&&(this._blurX=+t)}},blurY:{get:function(){return this._blurY},set:function(t){!this.$isNaN(t)&&0<=t&&256>t&&(this._blurY=+t)}},quality:{get:function(){return this._quality},set:function(t){0<t&&16>t&&(this._quality=0|t)}}}),/**
 * @param cache
 * @param colorTransform
 * @param stage
 * @returns {*}
 */
Y.prototype.render=function(t,e,i){var o=this.blurX,r=this.blurY;if(!o&&!r)return t;var n=t.canvas,a=this.$cacheStore.getCanvas();a.width=0|n.width,a.height=0|n.height;var s=a.getContext("2d");s.drawImage(n,0,0),s._offsetX=+t._offsetX,s._offsetY=+t._offsetY;var c=i.getScale(),h=0|this.quality,l=2*[.5,1.05,1.35,1.55,1.75,1.9,2,2.1,2.2,2.3,2.5,3,3,3.5,3.5][h-1],p=0|this.$ceil(o*l*c*i.ratio),u=0|this.$ceil(r*l*c*i.ratio),f=s.canvas,g=0|this.$ceil(f.width+2*p+1),d=0|this.$ceil(f.height+2*u+1),y=this.$cacheStore.getCanvas();y.width=g,y.height=d;var v=y.getContext("2d"),b=p,m=u;v._offsetX=+(p+s._offsetX),v._offsetY=+(u+s._offsetY),v.drawImage(f,b,m);for(var S=v.getImageData(0,0,g,d),A=S.data,I=b>>1,C=m>>1,x=[1,171,205,293,57,373,79,137,241,27,391,357,41,19,283,265,497,469,443,421,25,191,365,349,335,161,155,149,9,278,269,261,505,245,475,231,449,437,213,415,405,395,193,377,369,361,353,345,169,331,325,319,313,307,301,37,145,285,281,69,271,267,263,259,509,501,493,243,479,118,465,459,113,446,55,435,429,423,209,413,51,403,199,393,97,3,379,375,371,367,363,359,355,351,347,43,85,337,333,165,327,323,5,317,157,311,77,305,303,75,297,294,73,289,287,71,141,279,277,275,68,135,67,133,33,262,260,129,511,507,503,499,495,491,61,121,481,477,237,235,467,232,115,457,227,451,7,445,221,439,218,433,215,427,425,211,419,417,207,411,409,203,202,401,399,396,197,49,389,387,385,383,95,189,47,187,93,185,23,183,91,181,45,179,89,177,11,175,87,173,345,343,341,339,337,21,167,83,331,329,327,163,81,323,321,319,159,79,315,313,39,155,309,307,153,305,303,151,75,299,149,37,295,147,73,291,145,289,287,143,285,71,141,281,35,279,139,69,275,137,273,17,271,135,269,267,133,265,33,263,131,261,130,259,129,257,1],_=[0,9,10,11,9,12,10,11,12,9,13,13,10,9,13,13,14,14,14,14,10,13,14,14,14,13,13,13,9,14,14,14,15,14,15,14,15,15,14,15,15,15,14,15,15,15,15,15,14,15,15,15,15,15,15,12,14,15,15,13,15,15,15,15,16,16,16,15,16,14,16,16,14,16,13,16,16,16,15,16,13,16,15,16,14,9,16,16,16,16,16,16,16,16,16,13,14,16,16,15,16,16,10,16,15,16,14,16,16,14,16,16,14,16,16,14,15,16,16,16,14,15,14,15,13,16,16,15,17,17,17,17,17,17,14,15,17,17,16,16,17,16,15,17,16,17,11,17,16,17,16,17,16,17,17,16,17,17,16,17,17,16,16,17,17,17,16,14,17,17,17,17,15,16,14,16,15,16,13,16,15,16,14,16,15,16,12,16,15,16,17,17,17,17,17,13,16,15,17,17,17,16,15,17,17,17,16,15,17,17,14,16,17,17,16,17,17,16,15,17,16,14,17,16,15,17,16,17,17,16,17,15,16,17,14,17,16,15,17,16,17,13,17,16,17,17,16,17,14,17,16,17,16,17,16,17,9],T=0|x[I],k=0|_[I],O=0|x[C],M=0|_[C],B=0,w=0,F=0,U=0,P=0,$=0,L=0,E=0,D=0,Y=0,N=0,R=0,X=0,H=0,j=I+I+1|0,G=C+C+1|0,Z=0|S.width,V=0|S.height,W=Z-1|0,z=V-1|0,q=I+1|0,K=C+1|0,J={r:0,b:0,g:0,a:0},Q={r:0,b:0,g:0,a:0},tt=J,et=1;et<j;)et=et+1|0,tt=tt.n={r:0,b:0,g:0,a:0};tt.n=J;var it=Q;for(et=1;et<G;)et=et+1|0,it=it.n={r:0,b:0,g:0,a:0};it.n=Q;for(var ot=null;h>0;){h=h-1|0,$=0,P=0;var rt=0|T,nt=0|k;for(w=V+1|0;w>-1;){for(w=w-1|0,L=q*(N=0|A[P])|0,E=q*(R=0|A[P+1])|0,D=q*(X=0|A[P+2])|0,Y=q*(H=0|A[P+3])|0,tt=J,et=q;et>-1;)et=et-1|0,tt.r=0|N,tt.g=0|R,tt.b=0|X,tt.a=0|H,tt=tt.n;for(et=1;et<q;)F=P+((W<et?W:et)<<2)|0,et=et+1|0,L=L+(tt.r=A[F])|0,E=E+(tt.g=A[F+1])|0,D=D+(tt.b=A[F+2])|0,Y=Y+(tt.a=A[F+3])|0,tt=tt.n;for(ot=J,B=0;B<Z;)A[P]=L*rt>>>nt,A[P=P+1|0]=E*rt>>>nt,A[P=P+1|0]=D*rt>>>nt,A[P=P+1|0]=Y*rt>>>nt,P=P+1|0,F=$+((F=B+I+1)<W?F:W)<<2,L=L-(ot.r-(ot.r=A[F]))|0,E=E-(ot.g-(ot.g=A[F+1]))|0,D=D-(ot.b-(ot.b=A[F+2]))|0,Y=Y-(ot.a-(ot.a=A[F+3]))|0,ot=ot.n,B=B+1|0;$=$+Z|0}for(rt=O,nt=M,B=0;B<Z;){for(L=K*(N=A[P=B<<2|0])|0,E=K*(R=A[P+1])|0,D=K*(X=A[P+2])|0,Y=K*(H=A[P+3])|0,it=Q,et=0;et<K;)it.r=0|N,it.g=0|R,it.b=0|X,it.a=0|H,it=it.n,et=et+1|0;for(U=Z,et=1;et<=C;)P=U+B<<2,L=L+(it.r=A[P])|0,E=E+(it.g=A[P+1])|0,D=D+(it.b=A[P+2])|0,Y=Y+(it.a=A[P+3])|0,it=it.n,et<z&&(U=U+Z|0),et=et+1|0;if(P=B,ot=Q,h>0)for(w=0;w<V;)A[(F=P<<2)+3]=H=Y*rt>>>nt,H>0?(A[F]=L*rt>>>nt|0,A[F+1]=E*rt>>>nt|0,A[F+2]=D*rt>>>nt|0):(A[F]=0,A[F+1]=0,A[F+2]=0),F=B+((F=w+K)<z?F:z)*Z<<2,L=L-(ot.r-(ot.r=A[F]))|0,E=E-(ot.g-(ot.g=A[F+1]))|0,D=D-(ot.b-(ot.b=A[F+2]))|0,Y=Y-(ot.a-(ot.a=A[F+3]))|0,ot=ot.n,P=P+Z|0,w=w+1|0;else for(w=0;w<V;)A[(F=P<<2)+3]=H=Y*rt>>>nt,H>0?(H=255/H,A[F]=(L*rt>>>nt)*H|0,A[F+1]=(E*rt>>>nt)*H|0,A[F+2]=(D*rt>>>nt)*H|0):(A[F]=0,A[F+1]=0,A[F+2]=0),F=B+((F=w+K)<z?F:z)*Z<<2,L=L-(ot.r-(ot.r=A[F]))|0,E=E-(ot.g-(ot.g=A[F+1]))|0,D=D-(ot.b-(ot.b=A[F+2]))|0,Y=Y-(ot.a-(ot.a=A[F+3]))|0,ot=ot.n,P=P+Z|0,w=w+1|0;B=B+1|0}}return v.putImageData(S,0,0),this.$cacheStore.destroy(s),v};/**
 * @constructor
 */
var N=function(){$.call(this),this.filterId=6,
// default
this._matrix=null,this.matrix=arguments[0]};/**
 * extends
 * @type {BitmapFilter}
 */
N.prototype=Object.create($.prototype),N.prototype.constructor=N,/**
 * properties
 */
Object.defineProperties(N.prototype,{matrix:{get:function(){return this._matrix},set:function(t){t instanceof Array&&20===t.length&&(this._matrix=t)}}}),/**
 * @param cache
 * @param colorTransform
 * @param stage
 * @returns {*}
 */
N.prototype.render=function(t,e,i){var o=this.matrix;if(!o)return t;var r=t.canvas,n=0|r.width,a=0|r.height,s=this.$cacheStore.getCanvas();s.width=n,s.height=a;var c=s.getContext("2d");c.drawImage(r,0,0);for(var h,l,p,u,f=c.getImageData(0,0,n,a),g=f.data,d=g.length,y=o[0],v=o[1],b=o[2],m=o[3],S=o[4],A=o[5],I=o[6],C=o[7],x=o[8],_=o[9],T=o[10],k=o[11],O=o[12],M=o[13],B=o[14],w=o[15],F=o[16],U=o[17],P=o[18],$=o[19],L=0;L<d;)h=0|g[L],l=0|g[L+1],p=0|g[L+2],u=0|g[L+3],g[L]=h*y+l*v+p*b+u*m+S|0,g[L+1]=h*A+l*I+p*C+u*x+_|0,g[L+2]=h*T+l*k+p*O+u*M+B|0,g[L+3]=h*w+l*F+p*U+u*P+$|0,L=L+4|0;return c.putImageData(f,0,0),c._offsetX=+t._offsetX,c._offsetY=+t._offsetY,this.$cacheStore.destroy(t),c};/**
 * @constructor
 */
var R=function(){$.call(this),this.filterId=5,
// default
this._matrixX=0,this._matrixY=0,this._matrix=null,this._divisor=1,this._bias=0,this._preserveAlpha=!0,this._clamp=!0,this._color=0,this._alpha=0;var t=arguments;this.matrixX=t[0],this.matrixY=t[1],this.matrix=t[2],this.divisor=t[3],this.bias=t[4],this.preserveAlpha=t[5],this.clamp=t[6],this.color=t[7],this.alpha=t[8]};/**
 * extends
 * @type {BitmapFilter}
 */
R.prototype=Object.create($.prototype),R.prototype.constructor=R,/**
 * properties
 */
Object.defineProperties(R.prototype,{matrixX:{get:function(){return this._matrixX},set:function(t){this.$isNaN(t)||(this._matrixX=t)}},matrixY:{get:function(){return this._matrixY},set:function(t){this.$isNaN(t)||(this._matrixY=t)}},matrix:{get:function(){return this._matrix},set:function(t){t instanceof Array&&(this._matrix=t)}},divisor:{get:function(){return this._divisor},set:function(t){this.$isNaN(t)||(this._divisor=t)}},bias:{get:function(){return this._bias},set:function(t){this.$isNaN(t)||(t=t>255?255:-255>t?-255:t,this._bias=t)}},preserveAlpha:{get:function(){return this._preserveAlpha},set:function(t){"boolean"==typeof t&&(this._preserveAlpha=t)}},clamp:{get:function(){return this._clamp},set:function(t){"boolean"==typeof t&&(this._clamp=t)}},color:{get:function(){return this._color},set:function(t){t&&(this._color=this.$toColorInt(t))}},alpha:{get:function(){return this._alpha},set:function(t){!this.$isNaN(t)&&0<=t&&1>=t&&(this._alpha=t)}}}),/**
 * @param cache
 * @param colorTransform
 * @param stage
 * @returns {*}
 */
R.prototype.render=function(t,e,i){var o=this.bias,r=this.matrix,n=this.divisor,a=this.preserveAlpha,s=t.canvas,c=0|s.width,h=0|s.height,l=t.getImageData(0,0,c,h).data,p=this.matrixX,u=this.matrixY,f=u/2|0,g=this.$cacheStore.getCanvas();g.width=c,g.height=h;for(var d=g.getContext("2d"),y=d.createImageData(c,h),v=y.data,b=0;b<h;){for(var m=b*c,S=0;S<c;){for(var A=m+S<<2,I=0,C=0,x=0,_=0,T=0;T<u;){for(var k=0;k<p;){var O=this.$min(h-1,this.$max(0,b+T-f))*c+this.$min(c-1,this.$max(0,S+k-f))<<2,M=T*u+k;I=I+l[O]*r[M]|0,C=C+l[O+1]*r[M]|0,x=x+l[O+2]*r[M]|0,_=a?0:_+l[O+3]*r[M]|0,k=k+1|0}T=T+1|0}C=C/n|0,x=x/n|0,I=(I=I/n|0)>255?255:I<0?0:I,C=C>255?255:C<0?0:C,x=x>255?255:x<0?0:x,_=a?l[A+3]:(_=(_=_/n|0)>255?255:_<0?0:_)+o|0,v[A]=I+o|0,v[A+1]=C+o|0,v[A+2]=x+o|0,v[A+3]=_,S=S+1|0}b=b+1|0}var B=0;if(!this.clamp){B=2,c=c+4|0,h=h+4|0,
// resize
g.width=c,g.height=h,d=g.getContext("2d");
// execute
var w=this.$intToRGBA(this.color,100*this.alpha),F=this.$generateColorTransform(w,e);d.strokeStyle="rgba("+F.R+", "+F.G+", "+F.B+", "+F.A+")",d.moveTo(0,0),d.lineTo(c,0),d.lineTo(c,h),d.lineTo(0,h),d.lineTo(0,0),d.stroke()}return d.putImageData(y,B,B),d=this.$generateImageTransform(d,e),d._offsetX=t._offsetX+B,d._offsetY=t._offsetY+B,d};/**
 * @constructor
 */
var X=function(){$.call(this),
// default
this._alpha=0,this._color=0,this._componentX=0,this._componentY=0,this._mapBitmap=null,this._mapPoint=null,this._mode="wrap",this._scaleX=0,this._scaleY=0;var t=arguments;this.mapBitmap=t[0],this.mapPoint=t[1],this.componentX=t[2],this.componentY=t[3],this.scaleX=t[4],this.scaleY=t[5],this.mode=t[6],this.color=t[7],this.alpha=t[8]};(/**
 * extends
 * @type {BitmapFilter}
 */
X.prototype=Object.create($.prototype)).constructor=X,/**
 * properties
 */
Object.defineProperties(X.prototype,{mapBitmap:{get:function(){return this._mapBitmap},set:function(t){this._mapBitmap=t}},mapPoint:{get:function(){return this._mapPoint},set:function(t){this._mapPoint=t}},componentX:{get:function(){return this._componentX},set:function(t){this.$isNaN(t)||(this._componentX=t)}},componentY:{get:function(){return this._componentY},set:function(t){this.$isNaN(t)||(this._componentY=t)}},scaleX:{get:function(){return this._scaleX},set:function(t){this.$isNaN(t)||(this._scaleX=t)}},scaleY:{get:function(){return this._scaleY},set:function(t){this.$isNaN(t)||(this._scaleY=t)}},mode:{get:function(){return this._mode},set:function(t){this._mode=t}},color:{get:function(){return this._color},set:function(t){this.$isNaN(t)||(this._color=t)}},alpha:{get:function(){return this._alpha},set:function(t){this.$isNaN(t)||(this._alpha=t)}}}),/**
 * @param cache
 * @param colorTransform
 * @param stage
 * @returns {*}
 */
X.prototype.render=function(t,e,i){return t};/**
 * @constructor
 */
var H=function(){};H.CLAMP="clamp",H.COLOR="color",H.IGNORE="ignore",H.WRAP="wrap",(/**
 * extends
 */
H.prototype=Object.create(u.prototype)).constructor=H;/**
 * @constructor
 */
var j=function(){$.call(this),this.filterId=0,
// default
this._distance=4,this._angle=45,this._color=0,this._alpha=1,this._blurX=4,this._blurY=4,this._strength=1,this._quality=1,this._inner=!1,this._knockout=!1,this._hideObject=!1;var t=arguments;this.distance=t[0],this.angle=t[1],this.color=t[2],this.alpha=t[3],this.blurX=t[4],this.blurY=t[5],this.strength=t[6],this.quality=t[7],this.inner=t[8],this.knockout=t[9],this.hideObject=t[10]};/**
 * extends
 * @type {BitmapFilter}
 */
j.prototype=Object.create($.prototype),j.prototype.constructor=j,/**
 * properties
 */
Object.defineProperties(j.prototype,{distance:{get:function(){return this._distance},set:function(t){this.$isNaN(t)||(this._distance=t)}},angle:{get:function(){return this._angle},set:function(t){!this.$isNaN(t)&&0<=t&&360>=t&&(this._angle=t%360)}},color:{get:function(){return this._color},set:function(t){t&&(this._color=this.$toColorInt(t))}},alpha:{get:function(){return this._alphae},set:function(t){!this.$isNaN(t)&&0<=t&&1>=t&&(this._alphae=t)}},blurX:{get:function(){return this._blurX},set:function(t){!this.$isNaN(t)&&0<=t&&256>t&&(this._blurX=t)}},blurY:{get:function(){return this._blurY},set:function(t){!this.$isNaN(t)&&0<=t&&256>t&&(this._blurY=t)}},strength:{get:function(){return this._strength},set:function(t){!this.$isNaN(t)&&0<=t&&256>t&&(this._strength=t)}},quality:{get:function(){return this._quality},set:function(t){0<t&&16>t&&(this._quality=t)}},inner:{get:function(){return this._inner},set:function(t){"boolean"==typeof t&&(this._inner=t)}},knockout:{get:function(){return this._knockout},set:function(t){"boolean"==typeof t&&(this._knockout=t)}},hideObject:{get:function(){return this._hideObject},set:function(t){"boolean"==typeof t&&(this._hideObject=t)}}}),/**
 * @param cache
 * @param colorTransform
 * @param stage
 */
j.prototype.render=function(t,e,i){var o=this.strength;if(o<=0)return t;var r=this.quality,n=this.inner,a=+this.angle*this.$PI/180,s=this.blurX,c=this.blurY,h=new Y(s,c,r).render(t,e,i),l=this.$intToRGBA(this.color),p=this.$generateColorTransform(l,e);h=this.coatOfColor(h,p,n,o);
// synthesis
var u=t._offsetX,f=t._offsetY,g=h._offsetX,d=h._offsetY,y=h.canvas,v=y.width+u|0,b=y.height+f|0,m=this.distance,S=i.getScale(),A=0|this.$ceil(this.$cos(a)*m*S*i.ratio),I=0|this.$ceil(this.$sin(a)*m*S*i.ratio);v=v+this.$abs(A)|0,b=b+this.$abs(I)|0;var C=g,x=d,_=0,T=0;A<0?C=C-A|0:A>0&&(_=0|A),I<0?x=x-I|0:I>0&&(T=0|I);var k=this.$cacheStore.getCanvas();k.width=0|v,k.height=0|b;var O=k.getContext("2d");O.drawImage(t.canvas,C,x),O.globalAlpha=this.alpha,o<1&&(O.globalAlpha=+O.globalAlpha*o);var M=this.knockout,B=this.hideObject;if(O.globalCompositeOperation=this.filterOperation(n,M,B),n){var w=this.$cacheStore.getCanvas();w.width=v,w.height=b;var F=w.getContext("2d");
// back
F.fillStyle="rgba("+l.R+","+l.G+","+l.B+","+l.A+")",F.fillRect(0,0,v,b),
// mask
F.globalCompositeOperation="destination-out",F.fillStyle="black",F.fillRect(u+_,f+T,y.width,y.height),F.globalCompositeOperation="source-over",F.drawImage(y,u+_,f+T),O.drawImage(F.canvas,0,0),this.$cacheStore.destroy(F)}else O.drawImage(y,u+_,f+T);return O._offsetX=+(u+C),O._offsetY=+(f+x),this.$cacheStore.destroy(h),O};/**
 * @constructor
 */
var G=function(){$.call(this),this.filterId=2,
// default
this._color=16711680,this._alpha=1,this._blurX=6,this._blurY=6,this._strength=2,this._quality=1,this._inner=!1,this._knockout=!1;var t=arguments;this.color=t[0],this.alpha=t[1],this.blurX=t[2],this.blurY=t[3],this.strength=t[4],this.quality=t[5],this.inner=t[6],this.knockout=t[7]};/**
 * extends
 * @type {BitmapFilter}
 */
G.prototype=Object.create($.prototype),G.prototype.constructor=G,/**
 * properties
 */
Object.defineProperties(G.prototype,{color:{get:function(){return this._color},set:function(t){t&&(this._color=this.$toColorInt(t))}},alpha:{get:function(){return this._alpha},set:function(t){!this.$isNaN(t)&&0<=t&&1>=t&&(this._alpha=+t)}},blurX:{get:function(){return this._blurX},set:function(t){!this.$isNaN(t)&&0<=t&&256>t&&(this._blurX=+t)}},blurY:{get:function(){return this._blurY},set:function(t){!this.$isNaN(t)&&0<=t&&256>t&&(this._blurY=+t)}},strength:{get:function(){return this._strength},set:function(t){!this.$isNaN(t)&&0<=t&&256>t&&(this._strength=+t)}},quality:{get:function(){return this._quality},set:function(t){!this.$isNaN(t)&&0<t&&16>t&&(this._quality=0|t)}},inner:{get:function(){return this._inner},set:function(t){"boolean"==typeof t&&(this._inner=t)}},knockout:{get:function(){return this._knockout},set:function(t){"boolean"==typeof t&&(this._knockout=t)}}}),/**
 * @param cache
 * @param colorTransform
 * @param stage
 * @returns {*}
 */
G.prototype.render=function(t,e,i){var o=this.strength;if(o<=0)return t;var r=new Y(this.blurX,this.blurY,this.quality).render(t,e,i),n=r.canvas.width+t._offsetX|0,a=r.canvas.height+t._offsetY|0,s=this.$intToRGBA(this.color),c=this.$generateColorTransform(s,e);r=this.coatOfColor(r,c,this.inner,o);var h=this.$cacheStore.getCanvas();h.width=n,h.height=a;var l=h.getContext("2d");return l.drawImage(t.canvas,r._offsetX,r._offsetY),l.globalAlpha=this.alpha,o<1&&(l.globalAlpha=+l.globalAlpha*o),l.globalCompositeOperation=this.filterOperation(this.inner,this.knockout),l.drawImage(r.canvas,t._offsetX,t._offsetY),l._offsetX=+(t._offsetX+r._offsetX),l._offsetY=+(t._offsetY+r._offsetY),this.$cacheStore.destroy(r),l};/**
 * @constructor
 */
var Z=function(){$.call(this),this.filterId=7,
// default
this._distance=4,this._angle=45,this._colors=null,this._alphas=null,this._ratios=null,this._blurX=4,this._blurY=4,this._strength=1,this._quality=1,this._type="inner",this._knockout=!1;var t=arguments;this.distance=t[0],this.angle=t[1],this.colors=t[2],this.alphas=t[3],this.ratios=t[4],this.blurX=t[5],this.blurY=t[6],this.strength=t[7],this.quality=t[8],this.type=t[9],this.knockout=t[10]};/**
 * extends
 * @type {BitmapFilter}
 */
Z.prototype=Object.create($.prototype),Z.prototype.constructor=Z,/**
 * properties
 */
Object.defineProperties(Z.prototype,{distance:{get:function(){return this._distance},set:function(t){this.$isNaN(t)||(this._distance=t)}},angle:{get:function(){return this._angle},set:function(t){!this.$isNaN(t)&&0<=t&&360>=t&&(this._angle=t%360)}},colors:{get:function(){return this._colors},set:function(t){t instanceof Array&&(this._colors=t)}},alphas:{get:function(){return this._alphas},set:function(t){t instanceof Array&&(this._alphas=t)}},ratios:{get:function(){return this._ratios},set:function(t){t instanceof Array&&(this._ratios=t)}},blurX:{get:function(){return this._blurX},set:function(t){!this.$isNaN(t)&&0<=t&&256>t&&(this._blurX=t)}},blurY:{get:function(){return this._blurY},set:function(t){!this.$isNaN(t)&&0<=t&&256>t&&(this._blurY=t)}},strength:{get:function(){return this._strength},set:function(t){!this.$isNaN(t)&&0<=t&&256>=t&&(this._strength=t)}},quality:{get:function(){return this._quality},set:function(t){!this.$isNaN(t)&&0<t&&16>t&&(this._quality=t)}},type:{get:function(){return this._type},set:function(t){if("string"==typeof t)switch(t){case"inner":case"outer":case"full":this._type=t}}},knockout:{get:function(){return this._knockout},set:function(t){"boolean"==typeof t&&(this._knockout=t)}}}),/**
 * @param cache
 * @param colorTransform
 * @param stage
 * @returns {*}
 */
Z.prototype.render=function(t,e,i){var o,r,n,a,s,c,h,l,p,u=this.angle,f=this.blurX,g=this.blurY,d=this.strength,y=this.quality,v=this.knockout,b=this.type,m=+u*this.$PI/180,S=new Y(f,g,y).render(t,e,i);if(d>0)for(r=1;r<d;)r=r+1|0,S.drawImage(S.canvas,0,0);var A=S.canvas,I=S._offsetX,C=S._offsetY,x=t._offsetX,_=t._offsetY,T=A.width+x|0,k=A.height+_|0,O=this.distance,M=i.getScale(),B=0|this.$ceil(this.$cos(m)*O*M*i.ratio),w=0|this.$ceil(this.$sin(m)*O*M*i.ratio),F=I+this.$abs(B),U=C+this.$abs(w);T=T+2*this.$abs(B)|0,k=k+2*this.$abs(w)|0;var P=this.$cacheStore.getCanvas();P.width=0|T,P.height=0|k;var $=P.getContext("2d");v||$.drawImage(t.canvas,F,U),d<1&&($.globalAlpha=+$.globalAlpha*d);
// gradient
var L=this.ratios,E=this.colors,D=this.alphas,N=this.$cacheStore.getCanvas();N.width=512,N.heigth=1;var R=N.getContext("2d");for(n=R.createLinearGradient(0,0,511,0),o=L.length,r=0;r<o;)a=this.$intToRGBA(E[r],100*D[r]),s="rgba("+(a=this.$generateColorTransform(a,e)).R+","+a.G+","+a.B+","+a.A+")",
// set
n.addColorStop(L[r],s),r=r+1|0;R.fillStyle=n,R.fillRect(0,0,512,1),h=(c=R.getImageData(0,0,512,1)).data;
// shadow
var X=this.$cacheStore.getCanvas();X.width=0|T,X.height=0|k;var H=X.getContext("2d");for(H.setTransform(1,0,0,1,this.$abs(B),this.$abs(w)),H.globalCompositeOperation="source-out",
// highlight
H.drawImage(A,x-B,_-w),
// shadow
H.drawImage(A,x+B,_+w),r=0,o=(l=(c=H.getImageData(0,0,T,k)).data).length;r<o;)(p=4*(256-l[r+3])|0)&&(l[r]=h[p],l[r+1]=h[p+1],l[r+2]=h[p+2]),r=r+4|0;H.putImageData(c,0,0);
// highlight
var j=this.$cacheStore.getCanvas();j.width=0|T,j.height=0|k;var G=j.getContext("2d");for(G.setTransform(1,0,0,1,this.$abs(B),this.$abs(w)),G.globalCompositeOperation="source-out",
// shadow
G.drawImage(A,x+B,_+w),
// highlight
G.drawImage(A,x-B,_-w),r=0,o=(l=(c=G.getImageData(0,0,T,k)).data).length;r<o;)(p=4*(255+l[r+3])|0)&&(l[r]=h[p],l[r+1]=h[p+1],l[r+2]=h[p+2]),r=r+4|0;G.putImageData(c,0,0);var Z=this.$cacheStore.getCanvas();Z.width=0|T,Z.height=0|k;var V=Z.getContext("2d");V.globalCompositeOperation="xor",
// highlight
V.drawImage(G.canvas,0,0),
// shadow
V.drawImage(H.canvas,0,0);var W,z="inner"===b||"full"===b,q="outer"===b||"full"===b;return z&&q?W="source-over":z?($.drawImage(t.canvas,F,U),W=this.filterOperation(!0,v)):q&&(W="destination-over"),$.globalCompositeOperation=W,$.drawImage(V.canvas,0,0),!z&&q&&v&&($.globalCompositeOperation="destination-out",$.drawImage(t.canvas,F,U)),$._offsetX=+(x+F),$._offsetY=+(_+U),this.$cacheStore.destroy(S),this.$cacheStore.destroy(G),this.$cacheStore.destroy(H),this.$cacheStore.destroy(V),$};/**
 * @constructor
 */
var V=function(){$.call(this),this.filterId=4,
// default
this._distance=4,this._angle=45,this._colors=null,this._alphas=null,this._ratios=null,this._blurX=4,this._blurY=4,this._strength=1,this._quality=1,this._type="inner",this._knockout=!1;var t=arguments;this.distance=t[0],this.angle=t[1],this.colors=t[2],this.alphas=t[3],this.ratios=t[4],this.blurX=t[5],this.blurY=t[6],this.strength=t[7],this.quality=t[8],this.type=t[9],this.knockout=t[10]};/**
 * extends
 * @type {BitmapFilter}
 */
V.prototype=Object.create($.prototype),V.prototype.constructor=V,/**
 * properties
 */
Object.defineProperties(V.prototype,{distance:{get:function(){return this._distance},set:function(t){this.$isNaN(t)||(this._distance=t)}},angle:{get:function(){return this._angle},set:function(t){!this.$isNaN(t)&&0<=t&&360>=t&&(this._angle=t%360)}},colors:{get:function(){return this._colors},set:function(t){t instanceof Array&&(this._colors=t)}},alphas:{get:function(){return this._alphas},set:function(t){t instanceof Array&&(this._alphas=t)}},ratios:{get:function(){return this._ratios},set:function(t){t instanceof Array&&(this._ratios=t)}},blurX:{get:function(){return this._blurX},set:function(t){!this.$isNaN(t)&&0<=t&&256>t&&(this._blurX=t)}},blurY:{get:function(){return this._blurY},set:function(t){!this.$isNaN(t)&&0<=t&&256>t&&(this._blurY=t)}},strength:{get:function(){return this._strength},set:function(t){!this.$isNaN(t)&&0<=t&&256>t&&(this._strength=t)}},quality:{get:function(){return this._quality},set:function(t){0<t&&16>t&&(this._quality=t)}},type:{get:function(){return this._type},set:function(t){if("string"==typeof t)switch(t){case"inner":case"outer":case"full":this._type=t}}},knockout:{get:function(){return this._knockout},set:function(t){"boolean"==typeof t&&(this._knockout=t)}}}),/**
 * @param cache
 * @param colorTransform
 * @param stage
 * @returns {*}
 */
V.prototype.render=function(t,e,i){var o=this.strength;if(!o)return t;
// gradient
var r=this.ratios,n=this.colors,a=this.alphas,s=this.$cacheStore.getCanvas();s.width=256,s.heigth=1;for(var c=s.getContext("2d"),h=c.createLinearGradient(0,0,255,0),l=r.length,p=0;p<l;){var u=this.$intToRGBA(n[p],100*a[p]),f="rgba("+(u=this.$generateColorTransform(u,e)).R+","+u.G+","+u.B+","+u.A+")";
// set
h.addColorStop(r[p],f),p=p+1|0}c.fillStyle=h,c.fillRect(0,0,256,1);var g=c.getImageData(0,0,256,1),d=g.data,y=this.angle,v=this.blurX,b=this.blurY,m=this.quality,S=this.knockout,A=this.type,I=new Y(v,b,m).render(t,e,i);if(o>0)for(p=1;p<o;)p=p+1|0,I.drawImage(I.canvas,0,0);
// synthesis
var C=t._offsetX,x=t._offsetY,_=I._offsetX,T=I._offsetY,k=I.canvas,O=(g=I.getImageData(0,0,k.width,k.height)).data;p=0,l=O.length;for(var M;p<l;)(M=4*O[p+3]|0)&&(O[p]=d[M],O[p+1]=d[M+1],O[p+2]=d[M+2]),p=p+4|0;I.putImageData(g,0,0),k=I.canvas;var B=+y*this.$PI/180,w=this.distance,F=i.getScale(),U=0|this.$ceil(this.$cos(B)*w*F*i.ratio),P=0|this.$ceil(this.$sin(B)*w*F*i.ratio),$=k.width+C|0,L=k.height+x|0;$=$+this.$abs(U)|0,L=L+this.$abs(P)|0;var E=_,D=T,N=0,R=0;U<0?E=E-U|0:U>0&&(N=0|U),P<0?D=D-P|0:P>0&&(R=0|P);var X=this.$cacheStore.getCanvas();X.width=0|$,X.height=0|L;var H=X.getContext("2d");S||H.drawImage(t.canvas,E,D),H.globalAlpha=this.alpha,o<1&&(H.globalAlpha=+H.globalAlpha*o);var j,G="inner"===A||"full"===A,Z="outer"===A||"full"===A;return G&&Z?j="source-over":G?(H.drawImage(t.canvas,E,D),j=this.filterOperation(!0,S)):Z&&(j="destination-over"),H.globalCompositeOperation=j,H.drawImage(k,C+N,x+R),!G&&Z&&S&&(H.globalCompositeOperation="destination-out",H.drawImage(t.canvas,E,D)),H._offsetX=+(C+E),H._offsetY=+(x+D),this.$cacheStore.destroy(I),H};/**
 * @constructor
 */
var W=function(t){$.call(this),
// default
this._bottomExtension=0,this._leftExtension=0,this._rightExtension=0,this._shader=t,this._topExtension=0};(/**
 * extends
 * @type {BitmapFilter}
 */
W.prototype=Object.create($.prototype)).constructor=W,/**
 * properties
 */
Object.defineProperties(W.prototype,{topExtension:{get:function(){return this._topExtension},set:function(t){this.$isNaN(t)||(this._topExtension=t)}},leftExtension:{get:function(){return this._leftExtension},set:function(t){this.$isNaN(t)||(this._leftExtension=t)}},rightExtension:{get:function(){return this._rightExtension},set:function(t){this.$isNaN(t)||(this._rightExtension=t)}},bottomExtension:{get:function(){return this._bottomExtension},set:function(t){this.$isNaN(t)||(this._bottomExtension=t)}},shader:{get:function(){return this._shader},set:function(t){this._shader=t}}}),/**
 * @param cache
 * @param colorTransform
 * @param stage
 * @returns {*}
 */
W.prototype.render=function(t,e,i){return t};/**
 * @constructor
 */
var z=function(){},q=function(){b.call(this),this.initialize()};(/**
 * extends
 * @type {EventDispatcher}
 */
q.prototype=Object.create(b.prototype)).constructor=q,/**
 * properties
 */
Object.defineProperties(q.prototype,{accessibilityProperties:{value:new z},alpha:{get:function(){return this.getAlpha()/100},set:function(t){this.setAlpha(100*t)}},_alpha:{get:function(){return this.getAlpha()},set:function(t){this.setAlpha(t)}},name:{get:function(){return this.getName()},set:function(t){this.setName(t)}},_name:{get:function(){return this.getName()},set:function(t){this.setName(t)}},blendMode:{get:function(){return this.getBlendMode()},set:function(t){this.setBlendMode(t)}},filters:{get:function(){return this.getFilters()},set:function(t){this.setFilters(t)}},_visible:{get:function(){return this.getVisible()},set:function(t){this.setVisible(t)}},visible:{get:function(){return this.getVisible()},set:function(t){this.setVisible(t)}},_rotation:{get:function(){return this.getRotation()},set:function(t){this.setRotation(t)}},rotation:{get:function(){return this.getRotation()},set:function(t){this.setRotation(t)}},_height:{get:function(){return this.getHeight()},set:function(t){this.setHeight(t)}},height:{get:function(){return this.getHeight()},set:function(t){this.setHeight(t)}},_width:{get:function(){return this.getWidth()},set:function(t){this.setWidth(t)}},width:{get:function(){return this.getWidth()},set:function(t){this.setWidth(t)}},_x:{get:function(){return this.getX()},set:function(t){this.setX(t)}},x:{get:function(){return this.getX()},set:function(t){this.setX(t)}},_y:{get:function(){return this.getY()},set:function(t){this.setY(t)}},y:{get:function(){return this.getY()},set:function(t){this.setY(t)}},_xscale:{get:function(){return this.getXScale()},set:function(t){this.setXScale(t)}},scaleX:{get:function(){return this.getXScale()},set:function(t){this.setXScale(t)}},_yscale:{get:function(){return this.getYScale()},set:function(t){this.setYScale(t)}},scaleY:{get:function(){return this.getYScale()},set:function(t){this.setYScale(t)}},_xmouse:{get:function(){return this.getXMouse()},set:function(){}},mouseX:{get:function(){return this.getXMouse()},set:function(){}},_ymouse:{get:function(){return this.getYMouse()},set:function(){}},mouseY:{get:function(){return this.getYMouse()},set:function(){}},mask:{get:function(){return this.getMask()},set:function(t){this.setMask(t)}},enabled:{get:function(){return this.getEnabled()},set:function(t){this.setEnabled(t)}},_parent:{get:function(){return this.getParent()},set:function(t){this.setParent(t)}},parent:{get:function(){return this.getParent()},set:function(t){this.setParent(t)}}}),/**
 * @type {PlaceObject}
 */
q.prototype.PlaceObject=new f,/**
 * initialize
 */
q.prototype.initialize=function(){
// common
this.instanceId=r++,this.characterId=0,this.tagType=0,this.ratio=0,this.isMask=!1,this.clipDepth=0,this.isClipDepth=!1,this.stageId=0,this.loadStageId=null,this.variables={},this.buttonStatus="up",this.removeFlag=!1,this.parentId=null,this._sprite=null,
// properties
this.__visible=!0,this.__name=null,this._url=null,this._focusrect=1,this._soundbuftime=null,this._totalframes=1,this._level=0,this._depth=null,this._framesloaded=0,this._target="",this._lockroot=void 0,this._enabled=!0,this._blendMode=null,this._filters=null,this._filterCacheKey=null,this._mask=null,this._matrix=null,this._colorTransform=null,this._extend=!1,this.transform=new T,
// avm2
this.avm2=null},/**
 * @returns {string}
 */
q.prototype.toString=function(){return"_level0"+this.getTarget().split("/").join(".")},/**
 * @param bounds
 * @param matrix
 * @param object
 * @returns {{xMin: Number, xMax: number, yMin: Number, yMax: number}}
 */
q.prototype.boundsMatrix=function(t,e,i){var o=this.$Number.MAX_VALUE,r=-o,n=-o,a=o,s=o;i&&(a=+i.xMin,r=+i.xMax,s=+i.yMin,n=+i.yMax);var c=+(t.xMax*e[0]+t.yMax*e[2]+e[4]),h=+(t.xMax*e[0]+t.yMin*e[2]+e[4]),l=+(t.xMin*e[0]+t.yMax*e[2]+e[4]),p=+(t.xMin*e[0]+t.yMin*e[2]+e[4]),u=+(t.xMax*e[1]+t.yMax*e[3]+e[5]),f=+(t.xMax*e[1]+t.yMin*e[3]+e[5]),g=+(t.xMin*e[1]+t.yMax*e[3]+e[5]),d=+(t.xMin*e[1]+t.yMin*e[3]+e[5]);return r=+this.$max(this.$max(this.$max(this.$max(r,c),h),l),p),a=+this.$min(this.$min(this.$min(this.$min(a,c),h),l),p),n=+this.$max(this.$max(this.$max(this.$max(n,u),f),g),d),s=+this.$min(this.$min(this.$min(this.$min(s,u),f),g),d),{xMin:a,xMax:r,yMin:s,yMax:n}},/**
 * @param src
 * @returns {Array}
 */
q.prototype.cloneArray=function(t){for(var e=0,i=[],o=0|t.length;e<o;)i[e]=t[e],e=e+1|0;return i},/**
 * @param blendMode
 * @returns {String}
 */
q.prototype.getBlendName=function(t){var e=null;switch(t){case 1:case"normal":e="normal";break;case 2:case"layer":e="layer";break;case 3:case"multiply":e="multiply";break;case 4:case"screen":e="screen";break;case 5:case"lighten":e="lighten";break;case 6:case"darken":e="darken";break;case 7:case"difference":e="difference";break;case 8:case"add":e="add";break;case 9:case"subtract":e="subtract";break;case 10:case"invert":e="invert";break;case 11:case"alpha":e="alpha";break;case 12:case"erase":e="erase";break;case 13:case"overlay":e="overlay";break;case 14:case"hardlight":e="hardlight"}return e},/**
 * @param stage
 */
q.prototype.setStage=function(t){this.stageId=t.getId(),
// SimpleButton
"SimpleButton"===this.getClassName()&&(this.getSprite("up").setStage(t),this.getSprite("down").setStage(t),this.getSprite("hit").setStage(t),this.getSprite("over").setStage(t)),t.setInstance(this)},/**
 * @returns {*}
 */
q.prototype.getStage=function(){return this.getLoadStage()||this.getParentStage()},/**
 * @returns {*}
 */
q.prototype.getParentStage=function(){var t=0|this.stageId;return this.$stages[t]||this.$loadStages[t]},/**
 * @returns {*}
 */
q.prototype.getLoadStage=function(){var t=this.loadStageId;if(t)return this.$stages[t]||this.$loadStages[t]},/**
 * @param stage
 */
q.prototype.setLoadStage=function(t){this.loadStageId=null,t&&(t.setInstance(this),this.loadStageId=t.getId())},/**
 * @returns {number}
 */
q.prototype.getCharacterId=function(){return this.characterId},/**
 * @param characterId
 */
q.prototype.setCharacterId=function(t){this.characterId=0|t},/**
 * @returns {number}
 */
q.prototype.getTagType=function(){return this.tagType},/**
 * @param tagType
 */
q.prototype.setTagType=function(t){this.tagType=0|t},/**
 * @returns {number}
 */
q.prototype.getRatio=function(){return this.ratio},/**
 * @param ratio
 */
q.prototype.setRatio=function(t){this.ratio=0|t},/**
 * @returns {*}
 */
q.prototype.getParent=function(){var t=this.parentId;if(null!==t){t|=0;var e,i=this.getLoadStage();return i&&(e=i.getInstance(t)),e||(e=(i=this.getParentStage()).getInstance(t)),e}},/**
 * @param parent
 */
q.prototype.setParent=function(t){t instanceof J&&t.setInstance(this),this.parentId=t.instanceId},/**
 * @returns {*}
 */
q.prototype.getParentSprite=function(){if(this._sprite)return this.getStage().getInstance(this._sprite)},/**
 * @param sprite
 */
q.prototype.setParentSprite=function(t){this._sprite=0|t.instanceId},/**
 * @returns {*}
 */
q.prototype.getButtonStatus=function(){return this.buttonStatus},/**
 * @param status
 */
q.prototype.setButtonStatus=function(t){this.buttonStatus=t},/**
 * @returns {*}
 */
q.prototype.getMask=function(){return this._mask},/**
 * @param obj
 */
q.prototype.setMask=function(t){var e=this._mask;e&&(e.isMask=!1),t.isMask=!0,this._mask=t},/**
 * @returns {*}
 */
q.prototype.getEnabled=function(){return this._enabled},/**
 * @param enabled
 */
q.prototype.setEnabled=function(t){this._enabled=t},/**
 * @returns {boolean}
 */
q.prototype.getButtonMode=function(){return this._buttonMode},/**
 * @param buttonMode
 */
q.prototype.setButtonMode=function(t){this._buttonMode=t},/**
 * @returns {string}
 */
q.prototype.getTarget=function(){return this._target},/**
 * @param target
 */
q.prototype.setTarget=function(t){this._target=t},/**
 * @param path
 * @returns {{scope: DisplayObject, target: *}}
 */
q.prototype.splitPath=function(t){var e,i=this,o=t,r="";if("string"==typeof t){switch(!0){case-1!==t.indexOf("::"):i=this,o=t;break;case-1!==t.indexOf(":"):r=(e=t.split(":"))[0],o=e[1];break;case-1!==t.indexOf("."):o=(e=t.split(".")).pop(),r+=e.join(".")}if(r){var n=this.getDisplayObject(r);n&&(i=n)}}return{scope:i,target:o}},/**
 * @param name
 * @param parse
 * @returns {undefined}
 */
q.prototype.getProperty=function(t,e){var i=this,o=t;if(!1!==e){var r=this.splitPath(t);i=r.scope,o=r.target}if(!i.removeFlag){var n;switch("string"==typeof o?o.toLowerCase():o){case 0:case"_x":n=i.getX();break;case 1:case"_y":n=i.getY();break;case 2:case"_xscale":n=i.getXScale();break;case 3:case"_yscale":n=i.getYScale();break;case 4:case"_currentframe":i instanceof bt&&(n=i.getCurrentFrame());break;case 5:case"_totalframes":i instanceof bt&&(n=i.getTotalFrames());break;case 6:case"_alpha":n=i.getAlpha();break;case 7:case"_visible":n=i.getVisible();break;case 8:case"_width":n=i.getWidth();break;case 9:case"_height":n=i.getHeight();break;case 10:case"_rotation":n=i.getRotation();break;case 11:case"_target":n=i.getTarget();break;case 12:case"_framesloaded":n=i._framesloaded;break;case 13:case"_name":n=i.getName();break;case 14:case"_droptarget":i instanceof bt&&(n=i.getDropTarget());break;case 15:case"_url":n=i._url;break;case 16:case"_highquality":n=0,n="high"===i.getDisplayObject("_root").getStage().quality?1:0;break;case 17:case"_focusrect":n=i._focusrect;break;case 18:case"_soundbuftime":n=i._soundbuftime;break;case 19:case"_quality":n=i.getDisplayObject("_root").getStage().quality;break;case 20:case"_xmouse":n=i.getXMouse();break;case 21:case"_ymouse":n=i.getYMouse();break;case"text":case"htmltext":if(i instanceof Lt){var a=i.getVariable("variable");n=a?i.getParent().getProperty(a):i.getVariable("text")}else n=i.getVariable(o);break;case"$version":n="swf2js 8,0,0";break;case"enabled":n=i.getEnabled();break;case"blendmode":n=i.getBlendMode();break;case"sharedobject":n=new g;break;case"key":n=this.$keyClass;break;case"mouse":n=i.getDisplayObject("_root").getStage().mouse;break;default:void 0===(n=i.getVariable(o,e))&&o!==t&&(n=i.getGlobalVariable(t))}return n}},/**
 * @param name
 * @param value
 * @param parse
 */
q.prototype.setProperty=function(t,e,i){var o,r=this,n=t;if(!1!==i){var a=r.splitPath(t);r=a.scope,n=a.target}switch("string"==typeof n?n.toLowerCase():n){case 0:case"_x":r.setX(e);break;case 1:case"_y":r.setY(e);break;case 2:case"_xscale":r.setXScale(e);break;case 3:case"_yscale":r.setYScale(e);break;case 4:case"_currentframe":case 5:case"_totalframes":case 15:case"_url":case 20:case"_xmouse":case 21:case"_ymouse":case 11:case"_target":case 12:case"_framesloaded":case 14:case"_droptarget":
// readonly
break;case 6:case"_alpha":r.setAlpha(e);break;case 7:case"_visible":r.setVisible(e);break;case 8:case"_width":r.setWidth(e);break;case 9:case"_height":r.setHeight(e);break;case 10:case"_rotation":r.setRotation(e);break;case 13:case"_name":r.setName(e);break;case 16:case"_highquality":o=r.getDisplayObject("_root").getStage(),e&&(o.quality="high",o.setRatio());break;case 17:case"_focusrect":r._focusrect=e;break;case 18:case"_soundbuftime":r._soundbuftime=e;break;case 19:case"_quality":(o=r.getDisplayObject("_root").getStage()).quality=e.toLowerCase(),o.setRatio();break;case"text":case"htmltext":if(r instanceof Lt){var s=r.getVariable("variable");s?r.getParent().setProperty(s,e):r.setVariable("text",e);var c=r.input;c&&(c.value=e)}else r.setVariable(n,e);break;case"blendmode":r.setBlendMode(e);break;case"enabled":r.setEnabled(e);break;case"filters":r.setFilters(e);break;default:r.setVariable(n,e)}},/**
 * @returns {number}
 */
q.prototype.getDepth=function(){var t=this._depth;return(null!==t?t:this.getLevel())-16384},/**
 * @param depth
 * @param swapDepth
 * @param swapMc
 */
q.prototype.setDepth=function(t,e,i){var o=this.getParent(),r=this._depth,n=null!==r?r:this.getLevel(),a=o.getTotalFrames()+1;i?(this._depth=e,i._depth=t):this._depth=t;for(var s=o.container,c=this.instanceId,h=1;h<a;h++){h in s||(s[h]=[]);var l=s[h];i?(n in l&&l[n]===c&&(l[t]=i.instanceId),e in l&&l[e]===i.instanceId&&(l[e]=c)):n in l&&!(n in l&&l[n]===c)||(delete l[n],l[t]=c),s[h]=l}this.setController(!1,!1,!1,!1),i&&i.setController(!1,!1,!1,!1)},/**
 * @returns {number}
 */
q.prototype.getX=function(){var t=this.getMatrix();return t?t[4]/20:void 0},/**
 * @param x
 */
q.prototype.setX=function(t){if(t=+t,!this.$isNaN(t)){var e=this.getMatrix(),i=this.cloneArray(e);i[4]=20*t,this.setMatrix(i)}},/**
 * @returns {*}
 */
q.prototype.getY=function(){var t=this.getMatrix();return t?t[5]/20:void 0},/**
 * @param y
 */
q.prototype.setY=function(t){if(t=+t,!this.$isNaN(t)){var e=this.getMatrix(),i=this.cloneArray(e);i[5]=20*t,this.setMatrix(i)}},/**
 * @returns {*}
 */
q.prototype.getXScale=function(){var t=this.getMatrix(),e=100*this.$sqrt(t[0]*t[0]+t[1]*t[1]);return 0<t[0]?e:-e},/**
 * @param xscale
 */
q.prototype.setXScale=function(t){if(t=+t,!this.$isNaN(t)){var e=this.getMatrix(),i=this.cloneArray(e),o=this.$atan2(i[1],i[0]);t/=100,i[0]=t*this.$cos(o),i[1]=t*this.$sin(o),this.setMatrix(i)}},/**
 * @returns {*}
 */
q.prototype.getYScale=function(){var t=this.getMatrix(),e=100*this.$sqrt(t[2]*t[2]+t[3]*t[3]);return 0>t[3]&&(e*=-1),e},/**
 * @param yscale
 */
q.prototype.setYScale=function(t){if(t=+t,!this.$isNaN(t)){var e=this.getMatrix(),i=this.cloneArray(e),o=this.$atan2(-i[2],i[3]);t/=100,i[2]=-t*this.$sin(o),i[3]=t*this.$cos(o),this.setMatrix(i)}},/**
 * @returns {number}
 */
q.prototype.getAlpha=function(){var t=this.getColorTransform();return 100*(t[3]+t[7]/255)},/**
 * @param alpha
 */
q.prototype.setAlpha=function(t){if(t=+t,!this.$isNaN(t)){var e=this.getColorTransform(),i=this.cloneArray(e);i[3]=t/100,i[7]=0,this.setColorTransform(i)}},/**
 * @returns {number}
 */
q.prototype.getVisible=function(){return this.getStage().getVersion()>4?this.__visible:this.__visible?1:0},/**
 * @param visible
 */
q.prototype.setVisible=function(t){"boolean"==typeof t?this.__visible=t:(t=+t,this.$isNaN(t)||(this.__visible=!!t))},/**
 * @returns {number}
 */
q.prototype.getLevel=function(){return this._level},/**
 * @param level
 */
q.prototype.setLevel=function(t){this._level=t},/**
 * @returns {null}
 */
q.prototype.getName=function(){return this.__name},/**
 * @param name
 */
q.prototype.setName=function(t){this.__name=t},/**
 * @returns {number}
 */
q.prototype.getRotation=function(){var t=this.getMatrix(),e=180*this.$atan2(t[1],t[0])/this.$PI;switch(e){case-90.00000000000001:e=-90;break;case 90.00000000000001:e=90}return e},/**
 * @param rotation
 */
q.prototype.setRotation=function(t){if(t=+t,!this.$isNaN(t)){var e=this.getMatrix(),i=this.cloneArray(e),o=this.$atan2(i[1],i[0]),r=this.$atan2(-i[2],i[3]),n=this.$sqrt(i[0]*i[0]+i[1]*i[1]),a=this.$sqrt(i[2]*i[2]+i[3]*i[3]);r+=(t*=this.$PI/180)-o,o=t,i[0]=n*this.$cos(o),i[1]=n*this.$sin(o),i[2]=-a*this.$sin(r),i[3]=a*this.$cos(r),this.setMatrix(i)}},/**
 * @returns {number}
 */
q.prototype.getWidth=function(){var t=this.getMatrix(),e=this.getBounds(t);return this.$abs(e.xMax-e.xMin)},/**
 * @param width
 */
q.prototype.setWidth=function(t){if(t=+t,!this.$isNaN(t)){var e=this.getOriginMatrix(),i=this.getBounds(e),o=this.$abs(i.xMax-i.xMin),r=t*e[0]/o;this.$isNaN(r)&&(r=0),e=this.getMatrix();var n=this.cloneArray(e);n[0]=r,this.setMatrix(n)}},/**
 * @returns {number}
 */
q.prototype.getHeight=function(){var t=this.getMatrix(),e=this.getBounds(t);return this.$abs(e.yMax-e.yMin)},/**
 * @param height
 */
q.prototype.setHeight=function(t){if(t=+t,!this.$isNaN(t)){var e=this.getOriginMatrix(),i=this.getBounds(e),o=+this.$abs(i.yMax-i.yMin),r=+t*e[3]/o;this.$isNaN(r)&&(r=0),e=this.getMatrix();var n=this.cloneArray(e);n[3]=r,this.setMatrix(n)}},/**
 * @returns {*}
 */
q.prototype.getXMouse=function(){var t=this.$event;if(!t)return null;var e=this.getDisplayObject("_root").getStage(),i=this.$document.getElementById(e.getName()).getBoundingClientRect(),o=this.$document.body.scrollLeft+i.left,r=0;r=this.$isTouch?t.changedTouches[0].pageX:t.pageX;for(var n=this,a=this.getMatrix();;){var s=n.getParent();if(!s)break;a=this.$multiplicationMatrix(s.getMatrix(),a),n=s}return r=+(r-o),r=+r/e.getScale(),r=+(r-a[4]/20)},/**
 * @returns {*}
 */
q.prototype.getYMouse=function(){var t=this.$event;if(!t)return null;var e=this.getDisplayObject("_root").getStage(),i=this.$document.getElementById(e.getName()).getBoundingClientRect(),o=this.$document.body.scrollTop+i.top,r=0;r=this.$isTouch?t.changedTouches[0].pageY:t.pageY;for(var n=this,a=this.getMatrix();;){var s=n.getParent();if(!s)break;a=this.$multiplicationMatrix(s.getMatrix(),a),n=s}return r=+(r-o),r=+r/e.getScale(),r=+(r-a[5]/20)},/**
 * @param name
 * @param parse
 * @returns {*}
 */
q.prototype.getVariable=function(e,i){if(void 0===e)return e;var o=this.variables;if(o){if(e in o)return o[e];var r=this.getStage(),n=r.getVersion();if(n<7)for(var a in o)if(o.hasOwnProperty(a)&&a.toLowerCase()===e.toLowerCase())return o[a];var s;if(n>4){var c=o.registerClass;if(c&&"object"==typeof c&&e in c)return c[e];if(this instanceof bt&&(s=this.getDisplayObject(e,i)))return s;
// avm2
var h=this.getCharacterId(),l=r.symbols[h];if(l){for(var p=l.split("."),u=p.pop(),f=p.length,g=r.avm2,d=0;d<f;)g=g[p[d]],d=d+1|0;if(s=g[u][e])return s}if(s=r.getGlobal().getVariable(e))return s;if("MovieClip"===this.getClassName()&&"flash"===e)return this.flash;if(e in t)return t[e]}}},/**
 * @param name
 * @param value
 */
q.prototype.setVariable=function(t,e){var i=this.variables;if(t+="",this.getStage().getVersion()<7){var o=t.toLowerCase();for(var r in i)if(i.hasOwnProperty(r)&&r.toLowerCase()===o)return void(this.variables[r]=e)}this.variables[t]=e},/**
 * @param path
 * @returns {*}
 */
q.prototype.getGlobalVariable=function(t){var e=this.getStage(),i=e.getVersion();if(!(i<5)){var o=null;-1!==t.indexOf(".")&&(o=t.split("."));var r;if(o)for(var n=e.getGlobal().variables,a=o.length,s=0;s<a;){var c=o[s];if(s=s+1|0,i<7){for(var h in n)if(n.hasOwnProperty(h)&&h.toLowerCase()===c.toLowerCase()){r=n[h];break}}else r=n[c];if(!r)break;n=r}return r}},/**
 * @param path
 * @param parse
 * @returns {*}
 */
q.prototype.getDisplayObject=function(t,e){var i,o,r,n=this,a=this.getStage(),s=a.getParent();if(!this._lockroot){for(;;){if(!(r=s.getParent()))break;s=r}a=s.getStage()}
// param
switch(r=n.getParent(),
// string
t+=""){case"_root":return s;case"this":return this;case"_global":return a.getGlobal();case"_parent":return r||void 0}var c=1,h=[t];if(!1!==e)switch(!0){case-1!==t.indexOf("/"):c=0|(h=t.split("/")).length,""===h[0]&&(n=s);break;case-1!==t.indexOf("."):c=0|(h=t.split(".")).length,"_root"===h[0]&&(n=s);break;case"_level"===t.substr(0,6):var l=t.substr(6);if(0==(l=+l))return s;if(r||(r=a.getParent()),i=r.getTags(),l in i){var p=0|i[l];if((o=a.getInstance(p))instanceof bt)return o}return}for(var u=a.getVersion(),f=0;f<c;){var g=h[f];f=f+1|0;var d=0;switch(g){case"":break;case"_root":n=s;break;case"this":n=this;break;case"_parent":if(!(r=n.getParent()))return;n=r;break;case"..":if(!(n=n.getParent()))return;break;default:if(!(i=n.getTags()))return;if(!(0|i.length))return;for(var y in i)if(i.hasOwnProperty(y)){var v=0|i[0|y];if((o=n.getStage().getInstance(v))&&!o.removeFlag){var b=o.getName();if(b)if(u<7){if(b.toLowerCase()===g.toLowerCase()){n=o,d=1;break}}else if(b===g){n=o,d=1;break}}}if(!d)return}}return n},/**
 * @param ctx
 * @param matrix
 * @param colorTransform
 * @param stage
 * @param visible
 */
q.prototype.preRender=function(t,e,i,o,r){var n,a,s,c,h,l,p,u;this.isLoad=!0;var f="",g=t,d=e;this.getMask()&&this.renderMask(t,o);
// filter and blend
var y=!1,v=!1;if(r&&!o.clipMc){var b=this.getFilters();y=b&&b.length;
// blend
var m=this.getBlendMode();v=m&&"normal"!==m}
// filter or blend
var S,A;if(y||v){a=this.$multiplicationMatrix(o.getMatrix(),e);var I,C=1;switch(this.getClassName()){case"Shape":case"StaticText":I=this.getBounds(),s=+this.$sqrt(a[0]*a[0]+a[1]*a[1]),c=+this.$sqrt(a[2]*a[2]+a[3]*a[3]);break;default:C=20,I=this.getBounds(e),s=+o.getScale()*o.ratio,c=+o.getScale()*o.ratio}h=+I.xMin,l=+I.yMin,p=+I.xMax,u=+I.yMax;var x=0|this.$abs(this.$ceil((p-h)*s)),_=0|this.$abs(this.$ceil((u-l)*c)),T=this.$cacheStore.getCanvas();T.width=x,T.height=_,(n=T.getContext("2d"))._offsetX=0,n._offsetY=0;var k=[1,0,0,1,+-h*C,+-l*C],O=[e[0],e[1],e[2],e[3],e[4],e[5]];"Shape"===this.getClassName()&&(O[4]=0,O[5]=0),g=n,d=this.$multiplicationMatrix(k,O),S=+h*s,A=+l*c}
// graphics
return r&&(f+=this.renderGraphics(g,d,i,o)),{preCtx:g,preMatrix:d,isFilter:y,isBlend:v,rMatrix:a,cacheKey:f,xMin:S,yMin:A}},/**
 * @param ctx
 * @param matrix
 * @param colorTransform
 * @param stage
 * @param obj
 */
q.prototype.postRender=function(t,e,i,o,r){var n=r.preCtx,a=r.isFilter,s=r.cacheKey;a&&s&&(n=this.renderFilter(n,i,o,s));var c=r.xMin,h=r.yMin;"Shape"===this.getClassName()&&(c+=r.rMatrix[4],h+=r.rMatrix[5]),n&&(c-=n._offsetX,h-=n._offsetY),this.renderBlend(t,n,c,h,a)},/**
 * @param ctx
 * @param matrix
 * @param colorTransform
 * @param stage
 * @returns {string}
 */
q.prototype.renderGraphics=function(t,e,i,o){var r="";if("graphics"in this){var n=this.graphics;n.isDraw&&(r=n.render(t,e,i,o))}return r},/**
 * @param ctx
 * @param stage
 */
q.prototype.renderMask=function(t,e){var i=this.getMask();if(i){
// star
e.clipMc=!0,t.save(),t.beginPath();for(var o=i,r=[1,0,0,1,0,0];;){var n=o.getParent();if(!n.getParent())break;r=this.$multiplicationMatrix(n.getMatrix(),r),o=n}i.render(t,r,[1,1,1,1,0,0,0,0],e,!0),
// clip
t.clip(),
// end
e.clipMc=!1}},/**
 * @param filters
 * @returns {string}
 */
q.prototype.getFilterKey=function(t){for(var e=[],i=t.length,o=0;o<i;){var r=t[o];o=o+1|0;for(var n in r)if(r.hasOwnProperty(n)){var a=r[n];a instanceof Array&&(a=a.join("_")),e[e.length]=a}}return e.join("_")},/**
 * @param ctx
 * @param colorTransform
 * @param stage
 * @param cacheKey
 * @returns {*}
 */
q.prototype.renderFilter=function(t,e,i,o){var r=this.getFilters();if(i.clipMc||!r||!r.length||0===t.canvas.width||0===t.canvas.height)return t;o+="_"+this.getFilterKey(r);var n,a="Filter_"+this.instanceId;if(this._filterCacheKey===o&&(n=this.$cacheStore.getCache(a)),!n){var s=0|r.length,c=0;for((n=t)._offsetX=0,n._offsetY=0;c<s;){var h=r[c];c=c+1|0,n=h.render(n,e,i)}this._filterCacheKey=o,this.$cacheStore.setCache(a,n)}return this.$cacheStore.destroy(t),n},/**
 * @param ctx
 * @param cache
 * @param xMin
 * @param yMin
 * @param isFilter
 */
q.prototype.renderBlend=function(t,e,i,o,r){var n=this.getBlendMode(),a="source-over",s=e.canvas,c=s.width,h=s.height;switch(e.setTransform(1,0,0,1,0,0),n){case"multiply":a="multiply";break;case"screen":a="screen";break;case"lighten":a="lighten";break;case"darken":a="darken";break;case"difference":a="difference";break;case"add":a="lighter";break;case"subtract":e.globalCompositeOperation="difference",e.fillStyle="rgb(255,255,255)",e.fillRect(0,0,c,h),e.globalCompositeOperation="darken",e.fillStyle="rgb(255,255,255)",e.fillRect(0,0,c,h),a="color-burn";break;case"invert":e.globalCompositeOperation="difference",e.fillStyle="rgb(255,255,255)",e.fillRect(0,0,c,h),e.globalCompositeOperation="lighter",e.fillStyle="rgb(255,255,255)",e.fillRect(0,0,c,h),a="difference";break;case"alpha":a="source-over";break;case"erase":a="destination-out";break;case"overlay":a="overlay";break;case"hardlight":a="hard-light"}s=e.canvas,t.globalAlpha=1,t.globalCompositeOperation=a,t.setTransform(1,0,0,1,0,0),t.drawImage(s,i,o,s.width,s.height),t.globalCompositeOperation="source-over",r||this.$cacheStore.destroy(e)},/**
 * @returns {*}
 */
q.prototype.getOriginMatrix=function(){return this.getController().getMatrix()},/**
 * @returns []
 */
q.prototype.getMatrix=function(){return this._matrix||this.getOriginMatrix()},/**
 * @param matrix
 */
q.prototype.setMatrix=function(t){this._matrix=t,this.setController(!0,!1,!1,!1)},/**
 * @returns {*}
 */
q.prototype.getOriginColorTransform=function(){return this.getController().getColorTransform()},/**
 * @returns []
 */
q.prototype.getColorTransform=function(){return this._colorTransform||this.getOriginColorTransform()},/**
 * @param colorTransform
 */
q.prototype.setColorTransform=function(t){this._colorTransform=t,this.setController(!1,!0,!1,!1)},/**
 * @returns {string}
 */
q.prototype.getOriginBlendMode=function(){return this.getController().getBlendMode()},/**
 * @returns {string}
 */
q.prototype.getBlendMode=function(){return this._blendMode||this.getOriginBlendMode()},/**
 * @param blendMode
 */
q.prototype.setBlendMode=function(t){var e=this.getBlendName(t);e&&(this._blendMode=e,this.setController(!1,!1,!1,!0))},/**
 * @returns {Array}
 */
q.prototype.getOriginFilters=function(){return this.getController().getFilters()},/**
 * @returns {Array}
 */
q.prototype.getFilters=function(){return this._filters||this.getOriginFilters()},/**
 * @param filters
 */
q.prototype.setFilters=function(t){this._filterCacheKey=null,this._filters=t,this.setController(!1,!1,!0,!1)},/**
 * @param isMatrix
 * @param isColorTransform
 * @param isFilters
 * @param isBlend
 */
q.prototype.setController=function(t,e,i,o){if(!t){var r=this._matrix;r||(r=this.getMatrix(),this._matrix=this.cloneArray(r))}if(!e){var n=this._colorTransform;n||(n=this.getColorTransform(),this._colorTransform=this.cloneArray(n))}if(!i){var a=this._filters;a||(null===(a=this.getFilters())&&(a=[]),this._filters=a)}o||this._blendMode||(this._blendMode=this.getBlendMode())},/**
 * @returns {PlaceObject}
 */
q.prototype.getController=function(){if(null===this.parentId)return this.PlaceObject;var t=this.getParentSprite();t||(t=this.getParent());var e=0;"MovieClip"===t.getClassName()&&(e=0|t.getCurrentFrame());var i=0|this.getLevel(),o=0|t.instanceId,r=this.getParentStage(),n=r.getPlaceObject(o,i,e);return n||(r=this.getLoadStage())&&(n=r.getPlaceObject(o,i,e)),n||new f},/**
 * reset
 */
q.prototype.reset=function(){if(this.active=!1,this.isMask=!1,this._matrix=null,this._colorTransform=null,this._filters=null,this._blendMode=null,this._depth=null,this.setVisible(!0),this.setEnabled(!0),this.setButtonStatus("up"),"TextField"===this.getClassName()){if(this.inputActive){this.inputActive=!1,this.input.onchange=null;var t=this.getStage(),e=this.$document.getElementById(t.getName());if(e){var i=this.$document.getElementById(this.getTagName());if(i)try{e.removeChild(i)}catch(t){}}}this.variables.text=this.initialText}},/**
 * trace
 */
q.prototype.trace=function(){for(var e=["[trace]"],i=arguments.length,o=0;o<i;)e[e.length]=arguments[o],o=o+1|0;console.log.apply(t,e)};/**
 * @constructor
 */
var K=function(){this._mouseEnabled=!0,q.call(this)};(/**
 * extends
 * @type {DisplayObject}
 */
K.prototype=Object.create(q.prototype)).constructor=K,/**
 * properties
 */
Object.defineProperties(q.prototype,{mouseEnabled:{get:function(){return this.getMouseEnabled()},set:function(t){this.setMouseEnabled(t)}}}),/**
 * @returns {boolean}
 */
K.prototype.getMouseEnabled=function(){return this._mouseEnabled},/**
 * @param mouseEnabled
 */
K.prototype.setMouseEnabled=function(t){this._mouseEnabled=t};/**
 * @constructor
 */
var J=function(){if(K.call(this),this._mouseChildren=!0,this._tabChildren=!0,this._textSnapshot=new Yt,this._numChildren=0,this.soundId=null,this.soundInfo=null,this.container=[],"MovieClip"===this.getClassName())for(var t=this.getTotalFrames()+1|0,e=1;e<t;)this.container[e]=[],e=e+1|0;this.instances=[],this.isSwap=!1};/**
 * extends
 * @type {InteractiveObject}
 */
J.prototype=Object.create(K.prototype),J.prototype.constructor=J,/**
 * properties
 */
Object.defineProperties(J.prototype,{mouseChildren:{get:function(){return this.getMouseChildren()},set:function(t){this.setMouseChildren(t)}},textSnapshot:{get:function(){return this.getTextSnapshot()},set:function(){}},numChildren:{get:function(){return this.getNumChildren()},set:function(){}},tabChildren:{get:function(){return this.getTabChildren()},set:function(t){this.setTabChildren(t)}}}),/**
 * @returns {boolean}
 */
J.prototype.getMouseChildren=function(){return this._mouseChildren},/**
 * @param mouseChildren
 */
J.prototype.setMouseChildren=function(t){this._mouseChildren=t},/**
 * @returns {TextSnapshot}
 */
J.prototype.getTextSnapshot=function(){return this._textSnapshot},/**
 * @returns {number}
 */
J.prototype.getNumChildren=function(){return this._numChildren},/**
 * @returns {boolean}
 */
J.prototype.getTabChildren=function(){return this._tabChildren},/**
 * @param tabChildren
 */
J.prototype.setTabChildren=function(t){this._tabChildren=t},/**
 * @returns {Array}
 */
J.prototype.getContainer=function(){return this.container},/**
 * @returns {Array}
 */
J.prototype.getInstances=function(){return this.instances},/**
 * @param instance
 */
J.prototype.setInstance=function(t){var e=this.getInstances(),i=0|t.instanceId;i in e||(e[i]=1)},/**
 * @param instance
 */
J.prototype.deleteInstance=function(t){delete this.instances[0|t.instanceId]},/**
 * @param child
 * @param depth
 * @returns {DisplayObject}
 */
J.prototype.addChild=function(t,e){if(t instanceof q){void 0===e&&(e=this._numChildren);var i=this.getStage();t.setParent(this),t.setStage(i),t.setLevel(e);var o=this.getContainer(),r=1,n=new f,a=this.instanceId;if("MovieClip"===this.getClassName())for(var s=this.getTotalFrames()+1|0;r<s;)r in o||(o[r]=[]),i.setPlaceObject(n,a,e,r),o[r][e]=t.instanceId,r=r+1|0;else i.setPlaceObject(n,a,e,r),o[e]=t.instanceId;this._numChildren=this._numChildren+1|0}return t},/**
 * @param child
 * @param depth
 * @returns {DisplayObject}
 */
J.prototype.addChildAt=function(t,e){return this.addChild(t,e)},/**
 *
 * @param depth
 * @returns {DisplayObject}
 */
J.prototype.getChildAt=function(t){var e=this.getContainer(),i=e;return 16384>t&&(t=t+16384|0),"MovieClip"===this.getClassName()&&(i=e[this.getCurrentFrame()]),i[t]},/**
 * @param name
 * @return {DisplayObject}
 */
J.prototype.getChildByName=function(t){var e=this.getContainer(),i=e;"MovieClip"===this.getClassName()&&(i=e[this.getCurrentFrame()]);var o;for(var r in i)if(i.hasOwnProperty(r)){var n=i[r];if(n.getName()===t){o=n;break}}return o},/**
 * @param child
 * @returns {number}
 */
J.prototype.getChildIndex=function(t){var e;return t instanceof q&&(e=t.getLevel()-16384),e},/**
 * @param child
 * @return {DisplayObject}
 */
J.prototype.removeChild=function(t){var e,i=this.getContainer();if("MovieClip"===this.getClassName())for(var o=this.getTotalFrames()+1|0,r=1;r<o;)if(r in i){var n=i[r];for(e in n)if(n.hasOwnProperty(e)){if(n[e]===t.instanceId){delete i[r][e];break}r=r+1|0}else r=r+1|0;r=r+1|0}else r=r+1|0;else for(e in i)if(i.hasOwnProperty(e)&&i[e].instanceId===t.instanceId){delete i[e];break}return t&&(this.deleteInstance(t),this._numChildren=this._numChildren-1|0),t},/**
 * @param depth
 * @returns {*}
 */
J.prototype.removeChildAt=function(t){var e=this.getContainer(),i=e;16384>t&&(t=t+16384|0);var o;if("MovieClip"===this.getClassName())for(var r=this.getTotalFrames(),n=1;n<r;)n in e&&t in(i=e[n])?(o=i[t],delete e[n][t],n=n+1|0):n=n+1|0;else o=i[t],delete i[t];return o&&(this._numChildren=this._numChildren-1|0),o},/**
 * @param depth
 * @param obj
 */
J.prototype.addTag=function(t,e){this.container[t]=e.instanceId,this._numChildren=this._numChildren+1|0},/**
 * startSound
 */
J.prototype.startSound=function(){var t=this.soundId;if(t){var e=this.getStage().sounds[t];if(e){var i=this.$document.createElement("audio");i.onload=function(){this.load(),this.preload="auto",this.autoplay=!1,this.loop=!1},i.src=e.base64,this.$startSound(i,this.soundInfo)}}},/**
 * reset
 */
J.prototype.reset=function(){var t=this.container;if(t.length){var e=this.getStage();for(var i in t)if(t.hasOwnProperty(i)){var o=t[i];e.getInstance(o).reset()}}this.isMask=!1,this._depth=null,this._matrix=null,this._colorTransform=null,this._filters=null,this._blendMode=null,this.mouseEnabled=!0},/**
 * @param matrix
 * @param stage
 * @param visible
 * @param mask
 */
J.prototype.setHitRange=function(t,e,i,o){var r=0|this.$min(this.getVisible(),i);if(this.getEnabled()&&1===r){var n=e.buttonHits,a=this.variables,s=this.events;if(void 0!==s.press||void 0!==s.release||void 0!==s.releaseOutside||void 0!==s.rollOver||void 0!==s.rollOut||void 0!==s.dragOver||void 0!==s.dragOut||void 0!==a.onPress||void 0!==a.onRelease||void 0!==a.onRollOver||void 0!==a.onReleaseOutside||void 0!==a.onRollOut||void 0!==a.onDragOver||void 0!==a.onDragOut){var c=this.$multiplicationMatrix(t,this.getMatrix()),h=this.getBounds(c);n[n.length]={xMax:+h.xMax,xMin:+h.xMin,yMax:+h.yMax,yMin:+h.yMin,parent:this,matrix:this.cloneArray(t)}}}},/**
 *
 * @param name
 * @param depth
 * @returns {MovieClip}
 */
J.prototype.createMovieClip=function(t,e){var i=new bt;return i=this.addChild(i,e),t&&i.setName(t),i},/**
 * @param name
 * @param depth
 * @returns {Sprite}
 */
J.prototype.createSprite=function(t,e){var i=new Q;return i=this.addChild(i,e),t&&i.setName(t),i},/**
 * @param name
 * @param depth
 * @returns {SimpleButton}
 */
J.prototype.createButton=function(t,e){var i=new _t;return i=this.addChild(i,e),t&&i.setName(t),i},/**
 * @param name
 * @param width
 * @param height
 * @param depth
 * @returns {TextField}
 */
J.prototype.createText=function(t,e,i,o){var r=new Lt(t,o,e,i);return(r=this.addChild(r,o)).setInitParams(),t&&r.setName(t),r.size=12,r},/**
 * @returns {Shape}
 */
J.prototype.createShape=function(t){var e=new xt;return this.addChild(e,t),e};/**
 * @constructor
 */
var Q=function(){J.call(this),this.touchPointID=0,this._buttonMode=!1,this._useHandCursor=!1,this._dropTarget=null,this._hitArea=null,this._graphics=new pt,this._soundTransform=new Rt};/**
 * extends
 * @type {DisplayObjectContainer}
 */
Q.prototype=Object.create(J.prototype),Q.prototype.constructor=Q,/**
 * properties
 */
Object.defineProperties(Q.prototype,{graphics:{get:function(){return this.getGraphics()},set:function(){}},hitArea:{get:function(){return this.getHitArea()},set:function(t){this.setHitArea(t)}},buttonMode:{get:function(){return this.getButtonMode()},set:function(t){this.setButtonMode(t)}},soundTransform:{get:function(){return this._soundTransform},set:function(){}},useHandCursor:{get:function(){return this.getUseHandCursor()},set:function(t){this.setUseHandCursor(t)}},dropTarget:{get:function(){return this.getDropTarget()},set:function(){this.setDropTarget()}}}),/**
 * @returns {string}
 */
Q.prototype.getClassName=function(){return"Sprite"},/**
 * @returns {Graphics}
 */
Q.prototype.getGraphics=function(){return this._graphics},/**
 * @returns {DisplayObject}
 */
Q.prototype.getHitArea=function(){return this._hitArea},/**
 * @param displayObject
 */
Q.prototype.setHitArea=function(t){this._hitArea=t},/**
 * @returns {boolean}
 */
Q.prototype.getUseHandCursor=function(){return this._useHandCursor},/**
 * @param useHandCursor
 */
Q.prototype.setUseHandCursor=function(t){this._useHandCursor=t},/**
 * startTouchDrag
 */
Q.prototype.startTouchDrag=function(t,e,i){this.startDrag(e)},/**
 * @param touchPointID
 */
Q.prototype.stopTouchDrag=function(t){this.stopDrag()},/**
 * startDrag
 */
Q.prototype.startDrag=function(){var t=arguments,e=t[0],i=t[1],o=t[2],r=t[3],n=t[4],a=this.getDisplayObject("_root").getStage(),s=0,c=0;e||(s=this.getXMouse(),c=this.getYMouse()),a.dragMc=this,a.dragRules={startX:s,startY:c,left:i,top:o,right:r,bottom:n},this.setDropTarget()},/**
 * stopDrag
 */
Q.prototype.stopDrag=function(){var t=this.getDisplayObject("_root").getStage();t.dragMc=null,t.dragRules=null,this.setDropTarget()},/**
 * executeDrag
 */
Q.prototype.executeDrag=function(){var t=this.getDisplayObject("_root").getStage().dragRules,e=t.startX,i=t.startY,o=t.left,r=t.top,n=t.right,a=t.bottom,s=this.getX(),c=this.getY(),h=this.getXMouse(),l=this.getYMouse(),p=s+(h-=e),u=c+(l-=i);null===o||void 0===o?(this.setX(p),this.setY(u)):(o=+o,r=+r,a=+a,
// x
(n=+n)<p?this.setX(n):p<o?this.setX(o):this.setX(p),
// y
a<u?this.setY(a):u<r?this.setY(r):this.setY(u))},/**
 *
 * @returns {null|*}
 */
Q.prototype.getDropTarget=function(){return this._droptarget},/**
 * setDropTarget
 */
Q.prototype.setDropTarget=function(){this._droptarget=null;var t=this.getDisplayObject("_root"),e=t.getStage(),i=this.getParent();i||(i=e.getParent());var o=t.getXMouse(),r=t.getYMouse(),n=i.getTags();for(var a in n)if(n.hasOwnProperty(a)){var s=n[a];if(s!==this.instanceId){var c=e.getInstance(s);if(c instanceof bt&&c.hitTest(o,r)){this._droptarget=c;break}}}},/**
 * @returns {Array}
 */
Q.prototype.getTags=function(){return this.getContainer()},/**
 * @param ctx
 * @param matrix
 * @param colorTransform
 * @param stage
 * @param visible
 */
Q.prototype.render=function(t,e,i,o,r){if(this.removeFlag)return"";
// sound
if(this.isLoad=!0,o.doneTags.unshift(this),"MovieClip"===this.getClassName()&&!this.soundStopFlag){var n=this.getSounds();if(void 0!==n)for(var a=0|n.length,s=0;s<a;s++)if(s in n){var c=n[s];this.startSound(c)}}
// matrix & colorTransform
var h=this.$multiplicationMatrix(e,this.getMatrix()),l=this.$multiplicationColor(i,this.getColorTransform()),p=0|this.$min(this.getVisible(),r),u=this.preRender(t,h,l,o,r),f=u.cacheKey,g=u.preCtx,d=u.preMatrix,y=[],v=this.getTags();if(0|v.length){var b=this.getStage();for(var m in v)if(v.hasOwnProperty(m)){var S=0|v[m],A=b.getInstance(S);if(A){for(
// mask end
var I=0|y.length,C=0;C<I;){if(m>y[C]){y.splice(C,1),t.restore();break}C=C+1|0}
// mask
if(
// mask start
A.isClipDepth&&(t.save(),t.beginPath(),y[y.length]=0|A.clipDepth,"MovieClip"===A.getClassName()&&(o.isClipDepth=!0)),1===p&&A.setHitRange(h,o,r,I),!A.isMask){if(A.isClipDepth)switch(0){case d[0]:d[0]=1e-14;break;case d[3]:d[3]=1e-14}f+=A.render(g,d,l,o,p),o.isClipDepth&&(g.clip(),o.isClipDepth=!1)}}}}
// post render
return(y.length||this.getMask())&&t.restore(),(u.isFilter||u.isBlend)&&(u.cacheKey=f,this.postRender(t,h,l,o,u)),f},/**
 * initFrame
 */
Q.prototype.initFrame=function(){},/**
 * @param stage
 * @param clipEvent
 */
Q.prototype.putFrame=function(t,e){this.active=!0,this.dispatchEvent(e,t)},/**
 * @param stage
 */
Q.prototype.addActions=function(t){var e=this.getStage(),i=this.getTags();if(i.length)for(var o in i)if(i.hasOwnProperty(o)){var r=i[o],n=e.getInstance(r);n&&n.addActions(t)}},/**
 * @param ctx
 * @param matrix
 * @param stage
 * @param x
 * @param y
 * @returns {boolean}
 */
Q.prototype.renderHitTest=function(t,e,i,o,r){var n=this.getStage(),a=this.getTags(),s=a.length,c=!1,h=this.$multiplicationMatrix(e,this.getMatrix());if(s)for(var l in a)if(a.hasOwnProperty(l)){var p=a[l];if(c=n.getInstance(p).renderHitTest(t,h,i,o,r))return c}var u=this.graphics;return u.isDraw?u.renderHitTest(t,h,i,o,r):c},/**
 * @param mc
 * @returns {{xMin: *, xMax: number, yMin: *, yMax: number}}
 */
Q.prototype.getRect=function(t){t||(t=this);var e=t.getBounds(t.getOriginMatrix()),i=this.graphics.maxWidth/20/2;return{xMin:e.xMin+i,xMax:e.xMax-i,yMin:e.yMin+i,yMax:e.yMax-i}},/**
 * @param matrix
 * @returns {{}}
 */
Q.prototype.getBounds=function(t){if(t instanceof bt)return t.getBounds(t.getOriginMatrix());var e=this.getTags(),i=0,o=0,r=0,n=0,a=this.graphics,s=a.isDraw;if(s){var c=a.maxWidth/2,h=this.boundsMatrix(a.bounds,t),l=t?20:1;r=+(h.xMin-c)/l,i=+(h.xMax+c)/l,n=+(h.yMin-c)/l,o=+(h.yMax+c)/l}var p=0|e.length,u=this.getStage();if(p){if(!s){var f=this.$Number.MAX_VALUE;i=-f,o=-f,r=f,n=f}for(var g in e)if(e.hasOwnProperty(g)){var d=0|e[g],y=u.getInstance(d);if(y&&!y.isClipDepth){var v=t?this.$multiplicationMatrix(t,y.getMatrix()):y.getMatrix(),b=y.getBounds(v);b&&(r=+this.$min(r,b.xMin),i=+this.$max(i,b.xMax),n=+this.$min(n,b.yMin),o=+this.$max(o,b.yMax))}}}return{xMin:r,xMax:i,yMin:n,yMax:o}},/**
 * @param ctx
 * @param matrix
 * @param stage
 * @param x
 * @param y
 * @returns {*}
 */
Q.prototype.hitCheck=function(t,e,i,o,r){if(!this.getEnabled()||!this.getVisible()||!this.getMouseEnabled())return!1;var n,a=!1,s=this.$multiplicationMatrix(e,this.getMatrix()),c=this.getTags();if(0|c.length){var h=this.getStage();c.reverse();for(var l in c)if(c.hasOwnProperty(l)){var p=c[l],u=h.getInstance(p);switch(u.getClassName()){case"Shape":case"StaticText":case"TextField":a=u.renderHitTest(t,s,i,o,r);break;default:a=u.hitCheck(t,s,i,o,r)}if(a){if(n=a,"object"!=typeof a){var f=this.events;void 0===f.press&&void 0===f.release&&void 0===f.releaseOutside&&void 0===f.rollOver&&void 0===f.rollOut&&void 0===f.dragOver&&void 0===f.dragOut||(i.isHit=a,n={parent:this})}return c.reverse(),n}}c.reverse()}var g=this.graphics;return g.isDraw&&(a=g.renderHitTest(t,s,i,o,r))&&(n={parent:this}),n};/**
 * @constructor
 */
var tt=function(){};tt.ACTIONSCRIPT2=2,tt.ACTIONSCRIPT3=3,(/**
 * extends
 */
tt.prototype=Object.create(u.prototype)).constructor=tt;/**
 * @constructor
 */
var et=function(t,e,i){
// init
this._bitmapData=t||null,this._pixelSnapping=e||"auto",this._smoothing=i||!1};(/**
 * extends
 */
et.prototype=Object.create(q.prototype)).constructor=et,/**
 * properties
 */
Object.defineProperties(et.prototype,{bitmapData:{get:function(){return this._bitmapData},set:function(t){this._bitmapData=t}},pixelSnapping:{get:function(){return this._pixelSnapping},set:function(t){this._pixelSnapping=t}},smoothing:{get:function(){return this._smoothing},set:function(t){this._smoothing=t}}});/**
 * @param width
 * @param height
 * @param transparent
 * @param fillColor
 * @constructor
 */
var it=function(t,e,i,o){this._width=0|t,this._height=0|e,this._transparent="boolean"!=typeof i||i,this._fillColor="number"==typeof o?o:4294967295,this._rect=new _(0,0,this._width,this._height)};(/**
 * extends
 */
it.prototype=Object.create(u.prototype)).constructor=it,/**
 * properties
 */
Object.defineProperties(it.prototype,{width:{get:function(){return this._width},set:function(){}},height:{get:function(){return this._height},set:function(){}},transparent:{get:function(){return this._transparent},set:function(){}},rect:{get:function(){return this._rect},set:function(){}}}),/**
 * @param {BitmapData} sourceBitmapData
 * @param {Rectangle} sourceRect
 * @param {Point} destPoint
 * @param {BitmapFilter} filter
 * @returns void
 */
it.prototype.applyFilter=function(t,e,i,o){},/**
 * @returns {BitmapData}
 */
it.prototype.clone=function(){return new it},/**
 *
 * @param {Rectangle} rect
 * @param {ColorTransform} colorTransform
 */
it.prototype.colorTransform=function(t,e){},/**
 * @param {BitmapData} otherBitmapData
 * @returns {object}
 */
it.prototype.compare=function(t){return{}},/**
 *
 * @param {BitmapData} sourceBitmapData
 * @param {Rectangle} sourceRect
 * @param {Point} destPoint
 * @param {number} sourceChannel
 * @param {number} destChannel
 * @returns void
 */
it.prototype.copyChannel=function(t,e,i,o,r){},/**
 * @param {BitmapData} sourceBitmapData
 * @param {Rectangle} sourceRect
 * @param {Point} destPoint
 * @param {BitmapData} alphaBitmapData
 * @param {Point} alphaPoint
 * @param {boolean} mergeAlpha
 * @returns void
 */
it.prototype.copyPixels=function(t,e,i,o,r,n){},/**
 * @returns void
 */
it.prototype.dispose=function(){},/**
 * @param {BitmapData} source
 * @param {Matrix} matrix
 * @param {ColorTransform} colorTransform
 * @param {string} blendMode
 * @param {Rectangle} clipRect
 * @param {boolean} smoothing
 * @returns void
 */
it.prototype.draw=function(t,e,i,o,r,n){},/**
 * @param {Rectangle} rect
 * @param {number} color
 * @returns void
 */
it.prototype.fillRect=function(t,e){},/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} color
 * @returns void
 */
it.prototype.floodFill=function(t,e,i){},/**
 * @param {Rectangle} sourceRect
 * @param {BitmapFilter} filter
 * @returns Rectangle
 */
it.prototype.generateFilterRect=function(t,e){return new _},/**
 * @param {number} mask
 * @param {number} color
 * @param {boolean} findColor
 * @returns {Rectangle}
 */
it.prototype.getColorBoundsRect=function(t,e,i){return new _},/**
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
it.prototype.getPixel=function(t,e){return 0},/**
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
it.prototype.getPixel32=function(t,e){return 0},/**
 * @param {Rectangle} rect
 * @returns {Array}
 */
it.prototype.getPixels=function(t){return[]},/**
 * @param rect
 * @returns {Vector}
 */
it.prototype.getVector=function(t){return new n},/**
 * @param {Rectangle} hRect
 * @returns {Vector}
 */
it.prototype.histogram=function(t){return new n},/**
 * @param {Point} firstPoint
 * @param {number} firstAlphaThreshold
 * @param {object} secondObject
 * @param {Point} secondBitmapDataPoint
 * @param {number} secondAlphaThreshold
 * @returns {boolean}
 */
it.prototype.hitTest=function(t,e,i,o,r){return!0},/**
 * @returns void
 */
it.prototype.lock=function(){},/**
 * @param {BitmapData} sourceBitmapData
 * @param {Rectangle} sourceRect
 * @param {Point} destPoint
 * @param {number} redMultiplier
 * @param {number} greenMultiplier
 * @param {number} blueMultiplier
 * @param {number} alphaMultiplier
 * @returns void
 */
it.prototype.merge=function(t,e,i,o,r,n,a){},/**
 * @param {number} randomSeed
 * @param {number} low
 * @param {number} high
 * @param {number} channelOptions
 * @param {boolean} grayScale
 * @returns void
 */
it.prototype.noise=function(t,e,i,o,r){},/**
 * @param {BitmapData} sourceBitmapData
 * @param {Rectangle} sourceRect
 * @param {Point} destPoint
 * @param {array} redArray
 * @param {array} greenArray
 * @param {array} blueArray
 * @param {array} alphaArray
 * @returns void
 */
it.prototype.paletteMap=function(t,e,i,o,r,n,a){},/**
 * @param {number} baseX
 * @param {number} baseY
 * @param {number} numOctaves
 * @param {number} randomSeed
 * @param {boolean} stitch
 * @param {boolean} fractalNoise
 * @param {number} channelOptions
 * @param {boolean} grayScale
 * @param {array} offsets
 * @returns void
 */
it.prototype.perlinNoise=function(t,e,i,o,r,n,a,s,c){},/**
 * @param {BitmapData} sourceBitmapData
 * @param {Rectangle} sourceRect
 * @param {Point} destPoint
 * @param {number} randomSeed
 * @param {number} numPixels
 * @param {number} fillColor
 * @returns {number}
 */
it.prototype.pixelDissolve=function(t,e,i,o,r,n){return 0},/**
 * @param {number} x
 * @param {number} y
 * @returns void
 */
it.prototype.scroll=function(t,e){},/**
 * @param {number} x
 * @param {number} y
 * @param {number} color
 * @returns void
 */
it.prototype.setPixel=function(t,e,i){},/**
 * @param {number} x
 * @param {number} y
 * @param {number} color
 * @returns void
 */
it.prototype.setPixel32=function(t,e,i){},/**
 * @param {Rectangle} rect
 * @param {array} inputByteArray
 * @returns void
 */
it.prototype.setPixels=function(t,e){},/**
 * @param {Rectangle} rect
 * @param {Vector} inputVector
 * @returns void
 */
it.prototype.setVector=function(t,e){},/**
 * @param {BitmapData} sourceBitmapData
 * @param {Rectangle} sourceRect
 * @param {Point} destPoint
 * @param {string} operation
 * @param {number} threshold
 * @param {number} color
 * @param {number} mask
 * @param {boolean} copySource
 * @returns {number}
 */
it.prototype.threshold=function(t,e,i,o,r,n,a,s){return 0},/**
 * @param {Rectangle} changeRect
 * @returns void
 */
it.prototype.unlock=function(t){};/**
 * @constructor
 */
var ot=function(){};ot.ALPHA=8,ot.BLUE=4,ot.GREEN=2,ot.RED=1,(/**
 * extends
 */
ot.prototype=Object.create(u.prototype)).constructor=ot;/**
 * @constructor
 */
var rt=function(){};rt.COLORSPACE_4_2_0="4:2:0",rt.COLORSPACE_4_2_2="4:2:2",rt.COLORSPACE_4_4_4="4:4:4",rt.COLORSPACE_AUTO="auto",(/**
 * extends
 */
rt.prototype=Object.create(u.prototype)).constructor=rt;/**
 * @constructor
 */
var nt=function(){};nt.ADD="add",nt.ALPHA="alpha",nt.DARKEN="darken",nt.DIFFERENCE="difference",nt.ERASE="erase",nt.HARDLIGHT="hardlight",nt.INVERT="invert",nt.LAYER="layer",nt.LIGHTEN="lighten",nt.MULTIPLY="multiply",nt.NORMAL="normal",nt.OVERLAY="overlay",nt.SCREEN="screen",nt.SHADER="shader",nt.SUBTRACT="subtract",(/**
 * extends
 */
nt.prototype=Object.create(u.prototype)).constructor=nt;/**
 * @constructor
 */
var at=function(){};at.NONE="none",at.ROUND="round",at.SQUARE="square",(/**
 * extends
 */
at.prototype=Object.create(u.prototype)).constructor=at;/**
 * @constructor
 */
var st=function(){};st.DEFAULT="default",st.OFF="off",st.ON="on",(/**
 * extends
 */
st.prototype=Object.create(u.prototype)).constructor=st;/**
 * @constructor
 */
var ct=function(){};ct.DEFAULT_OFF="defaultOff",ct.DEFAULT_ON="defaultOn",ct.UNSUPPORTED="unsupported",(/**
 * extends
 */
ct.prototype=Object.create(u.prototype)).constructor=ct;/**
 * @param name
 * @param frame
 * @constructor
 */
var ht=function(t,e){
// init
this._name=t,this._frame=e};(/**
 * extends
 */
ht.prototype=Object.create(u.prototype)).constructor=ht,/**
 * properties
 */
Object.defineProperties(ht.prototype,{name:{get:function(){return this._name},set:function(){}},frame:{get:function(){return this._frame},set:function(){}}}),/**
 * @returns {string}
 */
ht.prototype.toString=function(){return"[object FrameLabel]"};/**
 * @constructor
 */
var lt=function(){};lt.LINEAR="linear",lt.RADIAL="radial",(/**
 * extends
 */
lt.prototype=Object.create(u.prototype)).constructor=lt;/**
 * @constructor
 */
var pt=function(){
// init
this.clear(),
// properties
this.$cache=!1};/**
 * extends
 */
pt.prototype=Object.create(u.prototype),pt.prototype.constructor=pt,/**
 * @type {number}
 */
pt.prototype.MOVE_TO=0,/**
 * @type {number}
 */
pt.prototype.CURVE_TO=1,/**
 * @type {number}
 */
pt.prototype.LINE_TO=2,/**
 * @type {number}
 */
pt.prototype.CUBIC=3,/**
 * @type {number}
 */
pt.prototype.ARC=4,/**
 * @type {number}
 */
pt.prototype.FILL_STYLE=5,/**
 * @type {number}
 */
pt.prototype.STROKE_STYLE=6,/**
 * @type {number}
 */
pt.prototype.FILL=7,/**
 * @type {number}
 */
pt.prototype.STROKE=8,/**
 * @type {number}
 */
pt.prototype.LINE_WIDTH=9,/**
 * @type {number}
 */
pt.prototype.LINE_CAP=10,/**
 * @type {number}
 */
pt.prototype.LINE_JOIN=11,/**
 * @type {number}
 */
pt.prototype.MITER_LIMIT=12,/**
 * @type {number}
 */
pt.prototype.BEGIN_PATH=13,/**
 * @param {BitmapData} bitmap
 * @param {Matrix} matrix
 * @param {boolean} repeat
 * @param {boolean} smooth
 * @returns void
 */
pt.prototype.beginBitmapFill=function(t,e,i,o){},/**
 * @param rgb
 * @param alpha
 * @returns {Graphics}
 */
pt.prototype.beginFill=function(t,e){"string"==typeof t&&(t=this.$colorStringToInt(t)),t|=0,e=+e,this.$isNaN(e)?e=100:e*=100;var i=this.getFillRecodes();
// beginPath
this.isFillDraw||(i[i.length]=[this.BEGIN_PATH]);
// Fill Style
var o=this.$intToRGBA(t,e);
// on
return i[i.length]=[this.FILL_STYLE,o.R,o.G,o.B,o.A],this.addCacheKey(t,e),this.isFillDraw=!0,this.isDraw=!0,this},/**
 *
 * @param {string} type
 * @param {array} colors
 * @param {array} alphas
 * @param {array} ratios
 * @param {Matrix} matrix
 * @param {string} spreadMethod
 * @param {string} interpolationMethod
 * @param {number} focalPointRatio
 * @returns void
 */
pt.prototype.beginGradientFill=function(t,e,i,o,r,n,a,s){},/**
 * @param {Shader} shader
 * @param {Matrix} matrix
 * @returns void
 */
pt.prototype.beginShaderFill=function(t,e){},/**
 * @returns {Graphics}
 */
pt.prototype.clear=function(){var t=this.$Number.MAX_VALUE;return this.bounds={xMin:t,xMax:-t,yMin:t,yMax:-t},this.maxWidth=0,this.command=null,this.isDraw=!1,this.isFillDraw=!1,this.isLineDraw=!1,this.cacheKey="",this.fillRecodes=[],this.lineRecodes=[],this},/**
 *
 * @param {Graphics} sourceGraphics
 * @returns {Graphics}
 */
pt.prototype.copyFrom=function(t){return new pt},/**
 * @param {number} cp1x
 * @param {number} cp1y
 * @param {number} cp2x
 * @param {number} cp2y
 * @param {number} x
 * @param {number} y
 * @returns {Graphics}
 */
pt.prototype.cubicCurveTo=function(t,e,i,o,r,n){if(this.isFillDraw||this.isLineDraw){t*=20,e*=20,i*=20,o*=20,r*=20,n*=20,this.setBounds(r,n),this.setBounds(t,e),this.setBounds(i,o),this.addCacheKey(t,e,i,o,r,n);var a=[this.CUBIC,t,e,i,o,r,n];if(this.isFillDraw){var s=this.getFillRecodes();s[s.length]=a}if(this.isLineDraw){var c=this.getLineRecodes();c[c.length]=a}}return this},/**
 * @param {number} cx
 * @param {number} cy
 * @param {number} dx
 * @param {number} dy
 * @returns {Graphics}
 */
pt.prototype.curveTo=function(t,e,i,o){if(this.isFillDraw||this.isLineDraw){t*=20,e*=20,i*=20,o*=20,this.setBounds(t,e),this.setBounds(i,o),this.addCacheKey(t,e,i,o);var r=[this.CURVE_TO,t,e,i,o];if(this.isFillDraw){var n=this.getFillRecodes();n[n.length]=r}if(this.isLineDraw){var a=this.getLineRecodes();a[a.length]=r}}return this},/**
 * @param {number} x
 * @param {number} y
 * @param {number} radius
 * @returns {Graphics}
 */
pt.prototype.drawCircle=function(t,e,i){if(this.isFillDraw||this.isLineDraw){t*=20,e*=20,i*=20,this.setBounds(t-i,e-i),this.setBounds(t+i,e+i),this.addCacheKey(t,e,i);var o=[this.ARC,t,e,i];if(this.isFillDraw){var r=this.getFillRecodes();r[r.length]=o}if(this.isLineDraw){var n=this.getLineRecodes();n[n.length]=o}}return this},/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @returns {Graphics}
 */
pt.prototype.drawEllipse=function(t,e,i,o){if(this.isFillDraw||this.isLineDraw){var r=+i/2,n=+o/2,a=+(t+r),s=+(e+n),c=+(t+i),h=+(e+o),l=4/3*(this.$SQRT2-1),p=+l*r,u=+l*n;this.moveTo(a,e),this.cubicCurveTo(a+p,e,c,s-u,c,s),this.cubicCurveTo(c,s+u,a+p,h,a,h),this.cubicCurveTo(a-p,h,t,s+u,t,s),this.cubicCurveTo(t,s-u,a-p,e,a,e)}return this},/**
 * @param {Vector} graphicsData
 * @returns void
 */
pt.prototype.drawGraphicsData=function(t){},/**
 * @param {Vector} commands
 * @param {Vector} data
 * @param {string} winding
 * @returns void
 */
pt.prototype.drawPath=function(t,e,i){},/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @returns {Graphics}
 */
pt.prototype.drawRect=function(t,e,i,o){return(this.isFillDraw||this.isLineDraw)&&(this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+o),this.lineTo(t,e+o),this.lineTo(t,e)),this},/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {number} ellipseWidth
 * @param {number} ellipseHeight
 * @returns {Graphics}
 */
pt.prototype.drawRoundRect=function(t,e,i,o,r,n){if(this.isFillDraw||this.isLineDraw){var a=+r/2,s=+n/2,c=4/3*(this.$SQRT2-1),h=+c*a,l=+c*s,p=+(t+a),u=+(t+i),f=+(u-a),g=+(e+s),d=+(e+o),y=+(d-s);this.moveTo(p,e),this.lineTo(f,e),this.cubicCurveTo(f+h,e,u,g-l,u,g),this.lineTo(u,y),this.cubicCurveTo(u,y+l,f+h,d,f,d),this.lineTo(p,d),this.cubicCurveTo(p-h,d,t,y+l,t,y),this.lineTo(t,g),this.cubicCurveTo(t,g-l,p-h,e,p,e)}return this},/**
 * @param {Vector} vertices
 * @param {Vector} indices
 * @param {Vector} uvtData
 * @param {string} culling
 * @returns {Graphics}
 */
pt.prototype.drawTriangles=function(t,e,i,o){var r=t.length;if(r&&r%3==0){var n=0,a=0;if(e){if((r=e.length)&&r%3==0)for(n=0;n<r;){var s=e[n];0===a?this.moveTo(t[s],t[s+1]):this.lineTo(t[s],t[s+1]),++a%3==0&&(a=0),n=n+1|0}}else for(n=0;n<r;)0===a?this.moveTo(t[n++],t[n]):this.lineTo(t[n++],t[n]),++a%3==0&&(a=0),n=n+1|0}return this},/**
 * @returns {Graphics}
 */
pt.prototype.endFill=function(){if(this.isFillDraw){var t=this.getFillRecodes();t[t.length]=[this.FILL]}return this.isFillDraw=!1,this},/**
 * @param {BitmapData} bitmap
 * @param {Matrix} matrix
 * @param {boolean} repeat
 * @param {boolean} smooth
 * @returns void
 */
pt.prototype.lineBitmapStyle=function(t,e,i,o){},/**
 * @param {string} type
 * @param {array} colors
 * @param {array} alphas
 * @param {array} ratios
 * @param {Matrix} matrix
 * @param {string} spreadMethod
 * @param {string} interpolationMethod
 * @param {number} focalPointRatio
 * @returns void
 */
pt.prototype.lineGradientStyle=function(t,e,i,o,r,n,a,s){},/**
 * @param {Shader} shader
 * @param {Matrix} matrix
 * @returns void
 */
pt.prototype.lineShaderStyle=function(t,e){},/**
 * @param {number} width
 * @param {number} rgb
 * @param {number} alpha
 * @param {boolean} pixelHinting
 * @param {string} noScale
 * @param {string} capsStyle
 * @param {string} jointStyle
 * @param {number} miterLimit
 * @returns {Graphics}
 */
pt.prototype.lineStyle=function(t,e,i,o,r,n,a,s){var c=this.getLineRecodes();if(t=+t,this.$isNaN(t)){if(this.isLineDraw){this.isLineDraw=!1,c[c.length]=[this.STROKE];for(var h=0|c.length,l=this.getFillRecodes(),p=0;p<h;)l[l.length]=c[p],p=p+1|0;this.lineRecodes=[]}}else{void 0===e&&(e=0),"string"==typeof e&&(e=this.$colorStringToInt(e)),n||(n="round"),a||(a="round"),e|=0,i=+i,this.$isNaN(i)?i=100:i*=100;var u=this.$intToRGBA(e,i);t<.5&&(t+=.2),t*=20,this.maxWidth=this.$max(this.maxWidth,t),this.isLineDraw&&(c[c.length]=[this.STROKE]),c[c.length]=[this.BEGIN_PATH],c[c.length]=[this.STROKE_STYLE,u.R,u.G,u.B,u.A],c[c.length]=[this.LINE_WIDTH,t],c[c.length]=[this.LINE_CAP,n],c[c.length]=[this.LINE_JOIN,a],this.addCacheKey(e,i),this.isLineDraw=!0,this.isDraw=!0}return this},/**
 * @param x
 * @param y
 * @returns {Graphics}
 */
pt.prototype.lineTo=function(t,e){if((this.isFillDraw||this.isLineDraw)&&(t*=20,e*=20,this.setBounds(t,e),this.addCacheKey(t,e)),this.isFillDraw){var i=this.getFillRecodes();i[i.length]=[this.LINE_TO,t,e]}if(this.isLineDraw){var o=this.getLineRecodes();o[o.length]=[this.LINE_TO,t,e]}return this},/**
 * @param x
 * @param y
 * @returns {Graphics}
 */
pt.prototype.moveTo=function(t,e){if((this.isFillDraw||this.isLineDraw)&&(t*=20,e*=20,this.setBounds(t,e),this.addCacheKey(t,e)),this.isFillDraw){var i=this.getFillRecodes();i[i.length]=[this.MOVE_TO,t,e]}if(this.isLineDraw){var o=this.getLineRecodes();o[o.length]=[this.MOVE_TO,t,e]}return this},/**
 * @returns {string}
 */
pt.prototype.toString=function(){return"[object Graphics]"},/**
 * @returns {string}
 */
pt.prototype.getClassName=function(){return"Graphics"},/**
 * @returns {Array}
 */
pt.prototype.getFillRecodes=function(){return this.fillRecodes},/**
 * @returns {Array}
 */
pt.prototype.getLineRecodes=function(){return this.lineRecodes},/**
 * @returns {Array}
 */
pt.prototype.getCommand=function(){return this.command},/**
 * @param command
 */
pt.prototype.setCommand=function(t){this.command=t},/**
 * @returns {string}
 */
pt.prototype.getCacheKey=function(){return this.cacheKey},/**
 * @returns {string}
 */
pt.prototype.addCacheKey=function(){var t=arguments,e="",i=0|t.length;if(i)for(var o=0;o<i;)e=e+"_"+t[o],o=o+1|0;this.cacheKey=this.cacheKey+e},/**
 * @returns {*}
 */
pt.prototype.getBounds=function(){return this.bounds},/**
 * @param x
 * @param y
 */
pt.prototype.setBounds=function(t,e){var i=this.bounds;i.xMin=this.$min(i.xMin,t),i.xMax=this.$max(i.xMax,t),i.yMin=this.$min(i.yMin,e),i.yMax=this.$max(i.yMax,e)},/**
 * @param ctx
 * @param matrix
 * @param colorTransform
 * @param stage
 * @returns {*}
 */
pt.prototype.render=function(t,e,i,o){var r="";if(!(i[3]+i[7]/255))return r;var n=this.$multiplicationMatrix(o.getMatrix(),e),a=+this.$sqrt(n[0]*n[0]+n[1]*n[1]),s=+this.$sqrt(n[2]*n[2]+n[3]*n[3]);a=+this.$pow(this.$SQRT2,this.$ceil(this.$log(a)/this.$LN2_2-this.$LOG1P)),s=+this.$pow(this.$SQRT2,this.$ceil(this.$log(s)/this.$LN2_2-this.$LOG1P));var c=this.maxWidth,h=c/2,l=this.getBounds(),p=+l.xMax,u=+l.xMin,f=+l.yMax,g=+l.yMin,d=0|this.$abs(this.$ceil((p-u+c)*a)),y=0|this.$abs(this.$ceil((f-g+c)*s));if(d<=0||y<=0)return r;var v,b,m=o.clipMc||this.isClipDepth;if(!m){var S=this.$cacheStore;if(r=S.generateKey(0,[a,s],i),r+=this.getCacheKey(),!(v=S.getCache(r))&&o.getWidth()>d&&o.getHeight()>y&&S.size>d*y){(b=S.getCanvas()).width=d,b.height=y;var A=[a,0,0,s,(-u+h)*a,(-g+h)*s];(v=b.getContext("2d")).setTransform(A[0],A[1],A[2],A[3],A[4],A[5]),v=this.executeRender(v,this.$min(a,s),i,!1),S.setCache(r,v)}}if(v){b=v.canvas;var I=[1/a,0,0,1/s,u-h,g-h],C=this.$multiplicationMatrix(n,I);t.setTransform(C[0],C[1],C[2],C[3],C[4],C[5]),this.$isAndroid4x&&!this.$isChrome?(t.fillStyle=o.context.createPattern(v.canvas,"no-repeat"),t.fillRect(0,0,d,y)):t.drawImage(b,0,0,d,y)}else t.setTransform(n[0],n[1],n[2],n[3],n[4],n[5]),this.executeRender(t,this.$min(n[0],n[3]),i,m);return r+"_"+n[4]+"_"+n[5]},/**
 * @param ctx
 * @param minScale
 * @param colorTransform
 * @param isClip
 */
pt.prototype.executeRender=function(t,e,i,o){var r=this.getFillRecodes(),n=this.getLineRecodes().length;if(r.length||n){var a=this.getCommand();
// rendering
switch(
// build command
null===a&&(a=this.buildCommand(),this.setCommand(a)),t.beginPath(),a(t,i,o),!0){case o:t.clip();break;default:this.isFillDraw&&t.fill(),this.isLineDraw&&t.stroke()}}return t.strokeStyle="rgba(0,0,0,1)",t.fillStyle="rgba(0,0,0,1)",t.globalAlpha=1,t},/**
 * @param ctx
 * @param matrix
 * @param stage
 * @param x
 * @param y
 * @returns {boolean}
 */
pt.prototype.renderHitTest=function(t,e,i,o,r){var n=this.getCommand();
// build command
null===n&&(n=this.buildCommand(),this.setCommand(n));var a=this.$multiplicationMatrix(i.getMatrix(),e);t.setTransform(a[0],a[1],a[2],a[3],a[4],a[5]),t.beginPath(),n(t,[1,1,1,1,0,0,0,0],!0);var s=t.isPointInPath(o,r);return s||("isPointInStroke"in t&&(s=t.isPointInStroke(o,r)),s)},/**
 * @returns {*}
 */
pt.prototype.buildCommand=function(){var t=this.getFillRecodes(),e=this.getLineRecodes(),i=e.length;if(i){for(var o=0;o<i;)t[t.length]=e[o],o=o+1|0;
// reset
this.lineRecodes=[]}return this.$vtc.buildCommand(t)};/**
 * @param bitmapData
 * @param matrix
 * @param repeat
 * @param smooth
 * @constructor
 */
var ut=function(){};ut.CUBIC_CURVE_TO=6,ut.CURVE_TO=3,ut.LINE_TO=2,ut.MOVE_TO=1,ut.NO_OP=0,ut.WIDE_LINE_TO=5,ut.WIDE_MOVE_TO=4,(/**
 * extends
 */
ut.prototype=Object.create(u.prototype)).constructor=ut;/**
 * @constructor
 */
var ft=function(){};ft.EVEN_ODD="evenOdd",ft.NON_ZERO="nonZero",(/**
 * extends
 */
ft.prototype=Object.create(u.prototype)).constructor=ft;/**
 * @param shader
 * @param matrix
 * @constructor
 */
var gt=function(){};gt.LINEAR_RGB="linearRGB",gt.RGB="rgb",(/**
 * extends
 */
gt.prototype=Object.create(u.prototype)).constructor=gt;/**
 * @param quality
 * @constructor
 */
var dt=function(){};dt.BEVEL="bevel",dt.MITER="miter",dt.ROUND="round",(/**
 * extends
 */
dt.prototype=Object.create(u.prototype)).constructor=dt;/**
 * @constructor
 */
var yt=function(){};yt.HORIZONTAL="horizontal",yt.NONE="none",yt.NORMAL="normal",yt.VERTICAL="vertical",(/**
 * extends
 */
yt.prototype=Object.create(u.prototype)).constructor=yt;/**
 * @constructor
 */
var vt=function(){J.call(this)};(/**
 * extends
 * @type {DisplayObjectContainer}
 */
vt.prototype=Object.create(J.prototype)).constructor=vt;/**
 * @constructor
 */
var bt=function(){Q.call(this),this._currentframe=1,this.removeTags=[],this.actions=[],this.labels=[],
// flag
this.stopFlag=!1,this.isAction=!0,
// clip
this.isClipDepth=!1,this.clipDepth=0,
// sound
this.sounds=[],this.soundStopFlag=!1};/**
 * extends
 * @type {Sprite}
 */
bt.prototype=Object.create(Q.prototype),bt.prototype.constructor=bt,/**
 * @returns {string}
 */
bt.prototype.getClassName=function(){return"MovieClip"},/**
 * @param name
 * @param stage
 */
bt.prototype.dispatchOnEvent=function(t,e){var i=this.variables[t];i&&this.setActionQueue(i,e)},/**
 * @param name
 * @param depth
 * @returns {MovieClip}
 */
bt.prototype.createEmptyMovieClip=function(t,e){var i=this.getStage();if(t){var o=this.getDisplayObject(t);o||(o=new bt),e+=16384,o.setName(t),o.setLevel(e),o.setParent(this),o.setStage(i);for(var r=this.getContainer(),n=this.getTotalFrames()+1,a=new f,s=this.instanceId,c=1;c<n;)c in r||(r[c]=[]),r[c][e]=o.instanceId,i.setPlaceObject(a,s,e,c),c=0|c+1;return o}},/**
 * @param name
 * @param depth
 * @param x
 * @param y
 * @param width
 * @param height
 * @returns {TextField}
 */
bt.prototype.createTextField=function(t,e,i,o,r,n){16384>e&&(e+=16384);var a=new Lt(t,e,r,n);a.setX(i),a.setY(o),a.setParent(this),a.setStage(this.getStage()),a.setInitParams();var s=this.getContainer();for(var c in s)s.hasOwnProperty(c)&&(s[c][e]=a.instanceId);return a},/**
 * @param r
 * @param g
 * @param b
 */
bt.prototype.setBackgroundColor=function(t,e,i){this.getStage().setBackgroundColor(t,e,i)},/**
 * play
 */
bt.prototype.play=function(){this.stopFlag=!1},/**
 * stop
 */
bt.prototype.stop=function(){this.stopFlag=!0},/**
 * @param frame
 */
bt.prototype.gotoAndPlay=function(t){if("string"==typeof t){var e=this.getLabel(t);e&&(t=e)}"number"==typeof(t|=0)&&t>0&&(this.setNextFrame(t),this.play())},/**
 * @param frame
 */
bt.prototype.gotoAndStop=function(t){if("string"==typeof t){var e=this.getLabel(t);e&&(t=e)}"number"==typeof(t|=0)&&t>this.getTotalFrames()&&(t=this.getTotalFrames(),this.isAction=!1),t>0&&(this.setNextFrame(t),this.stop())},/**
 * stopAllSounds
 */
bt.prototype.stopAllSounds=function(){var t=this.getStage(),e=t.loadSounds,i=0|e.length;if(i)for(var o=function(){this.removeEventListener("pause",o),this.currentTime=0,this.loop=!1},r=0;r<i;)if(r in e){var n=e[r];n.addEventListener("pause",o),n.pause(),r=0|r+1}t.loadSounds=[]},/**
 * @param url
 * @param target
 * @param SendVarsMethod
 * @returns {number}
 */
bt.prototype.loadMovie=function(t,e,i){var o=this.getStage(),r=null;if(e||(e=this.getName(),r=this),!r)if("string"==typeof e&&"_level"===e.substr(0,6)&&(e=+e.substr(6)),"number"==typeof e){var n=o.getParent();n||(n=o.getParent());var a=n.getTags();r=a[e]}else r=this.getDisplayObject(e);if(r){this.unloadMovie(r);var s=new XMLHttpRequest,c=t,h=null;if(2===i){var l=t.split("?");l[1]&&(h=l[1]),c=l[0],s.open("POST",c,!0),s.setRequestHeader("Content-Type","application/x-www-form-urlencoded")}else s.open("GET",c,!0);this.$canXHR2?s.responseType="arraybuffer":s.overrideMimeType("text/plain; charset=x-user-defined");var p=this;s.onreadystatechange=function(){var i=s.readyState,n=s.status;if(4===i)switch(n){case 200:case 304:var a=p.getDisplayObject("_root").getStage(),h=p.$canXHR2?s.response:s.responseText,l=new kt;p.$loadStages[l.getId()]=l,r.reset(),r._url=t,l.setParent(r),r.setLoadStage(l),l.parse(h,c),l.stop(),(0===e||"number"!=typeof e&&!r.getParent())&&(o.stop(),l.setId(o.getId()),l.setName(o.getName()),l.backgroundColor=o.backgroundColor,l.initCanvas(),l.loadStatus=2,l.loadEvent(),delete loadStages[l.getId()],stages[o.getId()]=l,o=null);var u=r.variables.onData;"function"==typeof u&&l.executeEventAction(u,r);var f=p.$clipEvent;f.type="data",r.dispatchEvent(f,a),r.addActions(a)}},s.send(h)}},/**
 * @param target
 * @returns {number}
 */
bt.prototype.unloadMovie=function(t){var e=null;if(t instanceof bt)e=t;else if(!(e=this.getDisplayObject(t)))return 0;
// delete
e.reset(),e.setLoadStage(null),e.setStage(this.getStage()),e.container=[],e.actions=[],e.instances=[],e.labels=[],e.sounds=[],e.removeTags=[],e._totalframes=1,e._url=null,e._lockroot=void 0;var i=e.getStage();delete this.$loadStages[i.getId()]},/**
 * @param url
 * @param target
 * @param method
 * @returns {*}
 */
bt.prototype.getURL=function(t,e,i){if("string"==typeof t){var o=t.substr(0,9);if("FSCommand"===o){o=t.split(":").pop();var r=arguments[1];void 0===r&&(r="");var n=this.getStage();return n.abc.flash.system.fscommand.apply(n,[o,r])}}if(e&&"string"==typeof e)switch(e.toLowerCase()){case"_self":case"_blank":case"_parent":case"_top":break;case"post":case"get":e="_self",i="GET";break;default:return i||(i="GET"),this.loadMovie(t,e,i),0}
// form
if("POST"===i){var a=this.$document.createElement("form");a.action=t,a.method=i,e&&(a.target=e);var s=t.split("?");if(s.length>1)for(var c=s[1].split("&"),h=c.length,l=encodeURI,p=0;p<h;){var u=c[p].split("=");p=0|p+1;var f=this.$document.createElement("input");f.type="hidden",f.name=u[0],f.value=l(u[1]||""),a.appendChild(f)}this.$document.body.appendChild(a),a.submit()}else t=t.replace(/'/g,"\\'"),new this.$Function("location.href = '"+t+"';")()},/**
 * @param url
 * @param target
 * @param method
 */
bt.prototype.loadVariables=function(t,e,i){var o=this,r=o;if(e&&(r=o.getDisplayObject(e)),r){var n=new XMLHttpRequest,a=null;if("POST"===i){var s=t.split("?");s[1]&&(a=s[1]),n.open(i,s[0],!0),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded")}else n.open("GET",t,!0);n.onreadystatechange=function(){if(4===n.readyState)switch(n.status){case 200:case 304:for(var t=decodeURIComponent(n.responseText).split("&"),e=t.length,i=0;i<e;i++){var a=t[i].split("=");r.setVariable(a[0],a[1])}var s=o.getDisplayObject().getStage(),c=o.getStage(),h=r.variables.onData;"function"==typeof h&&c.executeEventAction(h,r),clipEvent.type="data",r.dispatchEvent(clipEvent,s)}},n.send(a)}},/**
 * @returns {boolean}
 */
bt.prototype.hitTest=function(){var t=arguments[0],e=0,i=0,o=!1;if(!(t instanceof bt||(e=arguments[0],i=arguments[1],o=arguments[2],e&&i)))return!1;var r=this.getHitBounds(),n=r.xMax,a=r.xMin,s=r.yMax,c=r.yMin;if(t instanceof bt){var h=t.getHitBounds(),l=h.xMax,p=h.xMin,u=h.yMax,f=h.yMin;return l>a&&u>c&&n>p&&s>f}if(e>=a&&e<=n&&i>=c&&i<=s){if(o){for(var g=[1,0,0,1,0,0],d=this;;){var y=d.getParent();if(!y.getParent())break;g=this.$multiplicationMatrix(y.getMatrix(),g),d=y}var v=this.getDisplayObject("_root").getStage(),b=v.hitContext,m=v.getScale();return e*=m,i*=m,i*=this.$devicePixelRatio,e*=this.$devicePixelRatio,this.renderHitTest(b,g,v,e,i)}return!0}return!1},/**
 * @returns {{xMin: *, xMax: *, yMin: *, yMax: *}}
 * @returns {*}
 */
bt.prototype.getHitBounds=function(){for(var t=this,e=t,i=t.getMatrix(),o=t.multiplicationMatrix;;){var r=e.getParent();if(!r.getParent())break;i=o(r.getMatrix(),i),e=r}return t.getBounds(i)},/**
 * @param depth
 * @returns {*}
 */
bt.prototype.getInstanceAtDepth=function(t){var e=this,i=e.getParent();return i||(i=e.getDisplayObject("_root")),t+=16384,i.getTags()[t]},/**
 * swapDepths
 */
bt.prototype.swapDepths=function(){var t=this,e=arguments[0],i=0,o=t.getParent();if(o){var r=o.getTags();if(e instanceof bt){if(o===e.getParent()){i=t.getDepth()+16384;var n=e.getDepth()+16384;t.setDepth(i,n,e)}}else if(i=arguments[0],this.$isNaN(i)&&(i=o.getNextHighestDepth()),16384>i&&(i+=16384),i in r){var a=r[i];if(a!==t.instanceId){var s=t.getStage().getInstance(a);t.swapDepths(s)}}else t.setDepth(i,null,null)}},/**
 * @param id
 * @param name
 * @param depth
 * @param object
 * @returns {*}
 */
bt.prototype.attachMovie=function(t,e,i,o){var r=null,n=this;_isNaN(i)&&(i=n.getNextHighestDepth()),i<16384&&(i+=16384);var a=n.getDisplayObject(e);a&&a.removeMovieClip();var s=n.getStage(),c=s.exportAssets;if(t in c){var h=c[t],l=s.getCharacter(h);if(l){(r=new bt).setStage(s),r.setParent(n),r.setCharacterId(h),r.setLevel(i),r.setName(e),r.setTarget(n.getTarget()+"/"+e);
// init action
var p=s.initActions[h];"function"==typeof p&&(r.active=!0,p.apply(r),r.reset());
// registerClass
var u=s.registerClass[h];u&&(r.variables.registerClass=new u),new qt(s,null).build(l,r);for(var g=new f,d=n.instanceId,y=n.getTotalFrames()+1,v=n.getContainer(),b=1;b<y;b++)b in v||(v[b]=[]),v[b][i]=r.instanceId,s.setPlaceObject(g,d,i,b);if(o)for(var m in o)o.hasOwnProperty(m)&&r.setProperty(m,o[m]);var S=n.getDisplayObject("_root").getStage();r.addActions(S)}}return r},/**
 * @returns {number}
 */
bt.prototype.getNextHighestDepth=function(){var t=0,e=this.getContainer();for(var i in e)if(e.hasOwnProperty(i)){var o=e[i];t=_max(t,o.length)}return 16384>t&&(t=0),t},/**
 * @returns {*}
 */
bt.prototype.getBytesLoaded=function(){var t=this.getStage(),e=t.bitio;return e?e.byte_offset:t.fileSize},/**
 * @returns {number|*|fileLength}
 */
bt.prototype.getBytesTotal=function(){return this.getStage().fileSize},/**
 * updateAfterEvent
 */
bt.prototype.updateAfterEvent=function(){this.getDisplayObject("_root").getStage().touchRender()},/**
 * @returns {*}
 */
bt.prototype.duplicateMovieClip=function(){var t,e,i=this,o=i.getDisplayObject("_root").getStage(),r=arguments[0],n=arguments[1],a=arguments[2],s=i.getDisplayObject(n);!s&&o.getVersion()>4&&(r=arguments[0],a=arguments[1],_isNaN(a)&&((t=i.getParent())||(t=o.getParent()),a=t.getNextHighestDepth()),e=arguments[2],s=i),16384>a&&(a+=16384);var c;if(s&&0!==s.getCharacterId()){o=s.getStage(),(t=s.getParent())||(t=o.getParent());var h=o.getCharacter(s.characterId),l=new qt(o);if(h instanceof Array)(c=new bt).setStage(o),c.setParent(t),c.setLevel(a),c.setTotalFrames(s.getTotalFrames()),c.setCharacterId(s.characterId),l.build(h,c);else{var p={CharacterId:s.characterId,Ratio:0,Depth:a};c=l.buildObject(p,t)}c.setName(r),s._matrix&&(c._blendMode=s._blendMode,c._filters=s._filters,c._matrix=i.cloneArray(s._matrix),c._colorTransform=i.cloneArray(s._colorTransform));for(var u=t.getTotalFrames()+1,f=t.getContainer(),g=t.instanceId,d=o.placeObjects[g],y=s.getLevel(),v=1;v<u;v++)if(v in f||(f[v]=[]),f[v][a]=c.instanceId,v in d){var b=d[v][y];b&&(v in d||(d[v]=[]),d[v][a]=b.clone())}if(e)for(var m in e)e.hasOwnProperty(m)&&c.setProperty(m,e[m]);c.addActions(o)}return c},/**
 * @param name
 */
bt.prototype.removeMovieClip=function(t){var e=this,i=e;if("string"==typeof t){var o=e.getDisplayObject(t);o&&(i=o)}var r=i.getDepth()+16384,n=i.getLevel();if(i instanceof bt&&r>=16384){i.reset(),i.removeFlag=!0;for(var a=i.getParent(),s=a.getContainer(),c=i.instanceId,h=a.getTotalFrames()+1;--h;)if(h in s){var l=s[h];r in l&&l[r]===c&&delete s[h][r],r!==n&&16384>n&&(n in l||(l[n]=c))}}},/**
 * initFrame
 */
bt.prototype.initFrame=function(){this.active=!0;var t=this.getStage(),e=this.getTags();if(e.length){e.reverse();for(var i in e)if(e.hasOwnProperty(i)){var o=e[i],r=t.getInstance(o);r&&r.initFrame()}e.reverse()}var n=t.initActions[this.getCharacterId()];"function"==typeof n&&n.apply(this)},/**
 * @param stage
 * @param clipEvent
 */
bt.prototype.putFrame=function(t,e){var i,o=this.getStage();if(!this.stopFlag&&this.active){var r=0|this.getCurrentFrame(),n=0|this.getTotalFrames();n>1&&(this.isLoad&&(i=this.getTags(),r=r+1|0),r>n&&(r=1,this.resetCheck()),this.setCurrentFrame(r),this.remove(t),this.isAction=!0,this.soundStopFlag=!1)}if(this.removeFlag)return 0;if(this.active=!0,i){this.isSwap&&this.resetSwap();var a=this.getTags();if(a.length&&a.toString()!==i.toString())for(var s in a)if(a.hasOwnProperty(s)){var c=a[s];if(!(s in i&&c===i[s])){var h=o.getInstance(c);h&&"MovieClip"===h.getClassName()&&t.newTags.unshift(h)}}}if(this.isLoad){if(e.type="enterFrame",this.dispatchEvent(e,t),this.dispatchOnEvent("onEnterFrame",t),this.addTouchEvent(t),this.isAction){this.isAction=!1;var l=this.getActions(this.getCurrentFrame());l&&this.setActionQueue(l,t)}}else{
// init action
var p=o.initActions[this.getCharacterId()];"function"==typeof p&&p.apply(this)}},/**
 * nextFrame
 */
bt.prototype.nextFrame=function(){var t=this,e=t.getCurrentFrame();e++,t.setNextFrame(e),t.stop()},/**
 * prevFrame
 */
bt.prototype.prevFrame=function(){var t=0|this.getCurrentFrame();t=t-1|0,this.setNextFrame(t),this.stop()},/**
 * @returns {number}
 */
bt.prototype.getCurrentFrame=function(){return this._currentframe},/**
 * @param frame
 */
bt.prototype.setCurrentFrame=function(t){this._currentframe=0|t},/**
 * @param frame
 */
bt.prototype.setNextFrame=function(t){if(t>0&&this.getCurrentFrame()!==t){this.isAction=!0,t>this.getTotalFrames()&&(t=0|this.getTotalFrames(),this.isAction=!1);var e,i,o,r,n,a=this.$max(t,this.getCurrentFrame())+1|0,s=0|this.$min(t,this.getCurrentFrame()),c=[],h=this.getStage(),l=this.getTags(),p=this.getTags(t),u=0|this.$max(l.length,p.length);if(u)for(o=0;o<u;)if(i=o in l?0|l[o]:0,n=o in p?0|p[o]:0,i||n){if(i&&n){if(i===n){c[i]=!0,o=o+1|0;continue}e=h.getInstance(i),r=h.getInstance(n),e.reset(),r.reset(),c[i]=!0,c[n]=!0}else i?((e=h.getInstance(i)).reset(),c[i]=!0):n&&((r=h.getInstance(n)).reset(),c[n]=!0);o=o+1|0}else o=o+1|0;if(c.length)for(var f=s;f<a;){var g=this.getTags(f);if(g.length){f=f+1|0;for(o in g)g.hasOwnProperty(o)&&((i=0|g[0|o])in c||(c[i]=!0,(e=h.getInstance(i)).reset()))}else f=f+1|0}this.setCurrentFrame(t),this.soundStopFlag=!1;var d=this.getDisplayObject("_root").getStage();this.addActions(d)}},/**
 * @returns {number}
 */
bt.prototype.getTotalFrames=function(){return this._totalframes},/**
 * @param frame
 */
bt.prototype.setTotalFrames=function(t){this._totalframes=0|t,this._framesloaded=0|t},/**
 * addLabel
 * @param frame
 * @param name
 */
bt.prototype.addLabel=function(t,e){e+="",this.labels[e.toLowerCase()]=0|t},/**
 * @param name
 * @returns {*}
 */
bt.prototype.getLabel=function(t){return t+="",this.labels[t.toLowerCase()]},/**
 * @param frame
 * @param obj
 */
bt.prototype.addSound=function(t,e){t in this.sounds||(this.sounds[t]=[]),this.sounds[t].push(e)},/**
 * @returns {*}
 */
bt.prototype.getSounds=function(){return this.sounds[0|this.getCurrentFrame()]},/**
 * @param sound
 */
bt.prototype.startSound=function(t){var e=this.getStage(),i=0|t.SoundId,o=e.getCharacter(i);if(!o)return 0;var r=o.SoundInfo;this.$startSound(t.Audio,r),this.soundStopFlag=!0},/**
 * @param frame
 * @returns {*}
 */
bt.prototype.getTags=function(t){return this.container[t||this.getCurrentFrame()]||[]},/**
 * @param frame
 * @param tags
 */
bt.prototype.setRemoveTag=function(t,e){for(var i=[],o=0|e.length,r=0;r<o;){var n=e[r];r=r+1|0,i[n.Depth]=1}this.removeTags[t]=i},/**
 * @param frame
 * @returns {*}
 */
bt.prototype.getRemoveTags=function(t){return this.removeTags[t]},/**
 * @param stage
 */
bt.prototype.remove=function(t){var e=this.getRemoveTags(this.getCurrentFrame());if(e){var i=this.getStage(),o=this.getCurrentFrame()-1|0,r=this.getTags(o);for(var n in r)if(r.hasOwnProperty(n)){var a=0|r[n],s=i.getInstance(a);if(s)if("MovieClip"===s.getClassName()){if(!((s.getDepth()+16384|0)in e))continue;var c=this.$clipEvent;c.type="unload",this.dispatchEvent(c,t),s.reset()}else{if(!(n in e))continue;s.reset()}}}},/**
 * resetCheck
 */
bt.prototype.resetCheck=function(){var t=this.getStage(),e=this.getInstances();for(var i in e)if(e.hasOwnProperty(i)){var o=t.getInstance(i);o&&(o.getRatio()||o.removeFlag)&&o.reset()}},/**
 * resetSwap
 */
bt.prototype.resetSwap=function(){for(var t=this,e=t.getStage(),i=t.getTags(),o=t.getTotalFrames()+1,r=1;r<o;r++){var n=t.getTags(r),a=n.length;if(a){var s=[];for(var c in n)if(n.hasOwnProperty(c)){var h=n[c|=0],l=e.getInstance(h);l?l.active||l.getLevel()!==c&&(l.getLevel()in i||(l._depth=null,s[l.getLevel()]=h),delete n[c]):delete n[c]}if(a=s.length)for(var p in s)s.hasOwnProperty(p)&&(n[p]=s[p])}}t.isSwap=!1},/**
 * reset
 */
bt.prototype.reset=function(){var t=this.getStage(),e=this.getInstances();for(var i in e)if(e.hasOwnProperty(i)){var o=t.getInstance(i);"MovieClip"===o.getClassName()&&o.getDepth()>=0?(o.removeMovieClip(),o.getDepth()<0&&(o.removeFlag=!1)):o.reset()}var r=this.getParent();r&&this.getLevel()!==this.getDepth()+16384&&(r.isSwap=!0),this.play(),this.setCurrentFrame(1),this.clear(),this.initParams(),this.variables={}},/**
 * init
 */
bt.prototype.initParams=function(){this.active=!1,this.removeFlag=!1,this.isLoad=!1,this.isMask=!1,this.isAction=!0,this.soundStopFlag=!1,this._droptarget=null,this._depth=null,this._mask=null,this._matrix=null,this._colorTransform=null,this._filters=null,this._blendMode=null,this.buttonStatus="up",this.mouseEnabled=!0,this.setVisible(!0),this.setEnabled(!0)},/**
 * @param stage
 */
bt.prototype.addTouchEvent=function(t){var e=this.events,i=t.moveEventHits,o=t.downEventHits,r=t.upEventHits,n=t.keyDownEventHits;for(var a in e)if(e.hasOwnProperty(a)){var s=e[a];switch(a){case"mouseDown":o[o.length]={as:s,mc:this};break;case"mouseMove":i[i.length]={as:s,mc:this};break;case"mouseUp":r[r.length]={as:s,mc:this};break;case"keyDown":this.$isTouch?o[o.length]={as:s,mc:this}:n[n.length]={as:s,mc:this};break;case"keyUp":r[r.length]={as:s,mc:this}}}var c=this.variables;c.onMouseDown&&(o[o.length]={mc:this}),c.onMouseMove&&(i[i.length]={mc:this}),c.onMouseUp&&(r[r.length]={mc:this})},/**
 * @param script
 * @returns {*}
 */
bt.prototype.createActionScript=function(t){return function(t,e){var i=new Gt([],e.constantPool,e.register,e.initAction);return i.cache=e.cache,i.scope=t,function(){return i.reset(),i.variables.this=this,i.execute(t)}}(this,t)},/**
 * @param script
 * @param parent
 */
bt.prototype.createActionScript2=function(t,e){return function(t,e,i){return function(){var o=new Gt([],e.constantPool,e.register,e.initAction);// todo
return o.parentId=e.id,o.cache=e.cache,o.scope=t,o.parent=i||null,o.register.length&&o.initVariable(arguments),o.variables.this=this,o.execute(t)}}(this,t,e)},/**
 * addFrameScript
 */
bt.prototype.addFrameScript=function(){for(var t=arguments,e=t.length,i=0;i<e;){var o=t[i],r=t[i=i+1|0];if(i=i+1|0,o="string"==typeof o?0|this.getLabel(o):o+1|0,(o|=0)>0&&this.getTotalFrames()>=o){var n=this.actions;if(o in n||(n[o]=[]),r){var a=0|n[o].length;n[o][a]=r}else n[o]=[]}}},/**
 * @param stage
 */
bt.prototype.addActions=function(t){this.active=!0;var e=this.getStage();if(this.isAction){if(this.isAction=!1,!this.isLoad){
// as3
this.buildAVM2();
// registerClass
var i=e.registerClass[this.getCharacterId()];"function"==typeof i&&(this.variables.registerClass=new i);
// clipEvent
var o=this.$clipEvent;
// initialize
o.type="initialize",this.dispatchEvent(o,t),
// construct
o.type="construct",this.dispatchEvent(o,t),
// load
o.type="load",this.dispatchEvent(o,t);var r=this.variables.onLoad;"function"==typeof r&&this.setActionQueue(r,t),this.addTouchEvent(t)}var n=this.getActions(this.getCurrentFrame());n&&this.setActionQueue(n,t)}var a=this.getTags();if(a.length)for(var s in a)if(a.hasOwnProperty(s)){var c=0|a[s],h=e.getInstance(c);h&&h.addActions(t)}},/**
 * @param frame
 * @returns {*}
 */
bt.prototype.getActions=function(t){return this.actions[t]},/**
 * @param frame
 * @param actionScript
 */
bt.prototype.setActions=function(t,e){var i=this.actions;t in i||(i[t]=[]);var o=i[t].length;i[t][o]=this.createActionScript(e)},/**
 * @param frame
 * @param action
 */
bt.prototype.overWriteAction=function(t,e){if("string"==typeof t){var i=this.getLabel(t);i&&(t=i)}(t|=0)>0&&this.getTotalFrames()>=t&&(this.actions[t]=[e])},/**
 * @param frame
 * @param action
 */
bt.prototype.addAction=function(t,e){if("string"==typeof t){var i=this.getLabel(t);i&&(t=i)}if((t|=0)>0&&this.getTotalFrames()>=t){var o=this.actions;t in o||(o[t]=[]);var r=o[t].length;o[t][r]=e}},/**
 * @param frame
 */
bt.prototype.executeActions=function(t){var e=this.getActions(t);if(e)for(var i=0|e.length,o=0;o<i;){var r=e[o];o=o+1|0,r.apply(this)}},/**
 * ASSetPropFlags
 */
bt.prototype.ASSetPropFlags=function(){},/**
 * @param rgb
 * @param alpha
 */
bt.prototype.beginFill=function(t,e){this.getGraphics().beginFill(t,e)},/**
 * @param width
 * @param rgb
 * @param alpha
 * @param pixelHinting
 * @param noScale
 * @param capsStyle
 * @param jointStyle
 * @param miterLimit
 */
bt.prototype.lineStyle=function(t,e,i,o,r,n,a,s){this.getGraphics().lineStyle(t,e,i,o,r,n,a,s)},/**
 * @param dx
 * @param dy
 */
bt.prototype.moveTo=function(t,e){this.getGraphics().moveTo(t,e)},/**
 * @param dx
 * @param dy
 */
bt.prototype.lineTo=function(t,e){this.getGraphics().lineTo(t,e)},/**
 * @param cx
 * @param cy
 * @param dx
 * @param dy
 */
bt.prototype.curveTo=function(t,e,i,o){this.getGraphics().curveTo(t,e,i,o)},/**
 * clear
 */
bt.prototype.clear=function(){this.getGraphics().clear()},/**
 * endFill
 */
bt.prototype.endFill=function(){this.getGraphics().endFill()},/**
 * buildAVM2
 */
bt.prototype.buildAVM2=function(){return};/**
 * @param fastCompression
 * @constructor
 */
var mt=function(){};mt.ALWAYS="always",mt.AUTO="auto",mt.NEVER="never",(/**
 * extends
 */
mt.prototype=Object.create(u.prototype)).constructor=mt;/**
 * @constructor
 */
var St=function(){};St.FLASH1=1,St.FLASH10=10,St.FLASH11=11,St.FLASH12=12,St.FLASH2=2,St.FLASH3=3,St.FLASH4=4,St.FLASH5=5,St.FLASH6=6,St.FLASH7=7,St.FLASH8=8,St.FLASH9=9,(/**
 * extends
 */
St.prototype=Object.create(u.prototype)).constructor=St;/**
 * @param name
 * @param labels
 * @param numFrames
 * @constructor
 */
var At=function(t,e,i){
// default
this._name=t,this._labels=e,this._numFrames=i};(/**
 * extends
 */
At.prototype=Object.create(u.prototype)).constructor=At,/**
 * properties
 */
Object.defineProperties(At.prototype,{labels:{get:function(){return this._labels},set:function(){}},name:{get:function(){return this._name},set:function(){}},numFrames:{get:function(){return this._numFrames},set:function(){}}}),/**
 * @returns {string}
 */
At.prototype.toString=function(){return"[object Scene]"},/**
 * @param {string} name
 * @param {number} frame
 * @returns void
 */
At.prototype.$addLabel=function(t,e){this._labels[this._labels.length]=new ht(t,e)};/**
 * @param code
 * @constructor
 */
var It=function(){};It.BOOL="bool",It.BOOL2="bool2",It.BOOL3="bool3",It.BOOL4="bool4",It.FLOAT="float",It.FLOAT2="float2",It.FLOAT3="float3",It.FLOAT4="float4",It.INT="int",It.INT2="int2",It.INT3="int3",It.INT4="int4",It.MATRIX2X2="matrix2x2",It.MATRIX3X3="matrix3x3",It.MATRIX4X4="matrix4x4",(/**
 * extends
 */
It.prototype=Object.create(u.prototype)).constructor=It;/**
 * @constructor
 */
var Ct=function(){};Ct.FAST="fast",Ct.FULL="full",(/**
 * extends
 */
Ct.prototype=Object.create(u.prototype)).constructor=Ct;/**
 * @constructor
 */
var xt=function(){q.call(this),this.data=null,this._graphics=new pt;var t=this.$Number.MAX_VALUE;this.setBounds({xMin:t,xMax:-t,yMin:t,yMax:-t})};/**
 * extends
 * @type {DisplayObject}
 */
xt.prototype=Object.create(q.prototype),xt.prototype.constructor=xt,/**
 * properties
 */
Object.defineProperties(xt.prototype,{graphics:{get:function(){return this.getGraphics()},set:function(){}}}),/**
 * dummy
 */
xt.prototype.addActions=function(){},xt.prototype.initFrame=function(){},xt.prototype.setHitRange=function(){},/**
 * @returns {string}
 */
xt.prototype.getClassName=function(){return"Shape"},/**
 * @param stage
 * @param clipEvent
 */
xt.prototype.putFrame=function(t,e){this.active=!0,this.dispatchEvent(e,t)},/**
 * @returns {Graphics}
 */
xt.prototype.getGraphics=function(){return this._graphics},/**
 * @returns []
 */
xt.prototype.getData=function(){return this.data},/**
 * @param data
 */
xt.prototype.setData=function(t){this.data=t},/**
 * @returns {{}}
 */
xt.prototype.getBounds=function(t){var e,i,o=this.graphics,r=o.isDraw;if(t){e=this.boundsMatrix(this.bounds,t),r&&(i=this.boundsMatrix(o.getBounds(),t),e.xMin=+this.$min(i.xMin,e.xMin),e.xMax=+this.$max(i.xMax,e.xMax),e.yMin=+this.$min(i.yMin,e.yMin),e.yMax=+this.$max(i.yMax,e.yMax));for(var n in e)if(e.hasOwnProperty(n)){var a=+e[n];e[n]=+a/20}}else e=this.bounds,r&&(i=o.getBounds(),e.xMin=+this.$min(i.xMin,e.xMin),e.xMax=+this.$max(i.xMax,e.xMax),e.yMin=+this.$min(i.yMin,e.yMin),e.yMax=+this.$max(i.yMax,e.yMax));return e},/**
 * @param bounds
 */
xt.prototype.setBounds=function(t){this.bounds=t},/**
 * @returns {boolean}
 */
xt.prototype.isMorphing=function(){var t=this.getTagType();return 46===t||84===t},/**
 * @param ctx
 * @param matrix
 * @param colorTransform
 * @param stage
 * @param visible
 * @returns {*}
 */
xt.prototype.render=function(t,e,i,o,r){o.doneTags.unshift(this);
// colorTransform
var n=this.$multiplicationColor(i,this.getColorTransform()),a=this.$min(this.getVisible(),r),s=+(n[3]+n[7]/255),c=o.clipMc||o.isClipDepth;if(!(c||s&&a))return"";
// matrix
var h=this.$multiplicationMatrix(e,this.getMatrix()),l=this.preRender(t,h,n,o,a),p=l.cacheKey,u=null,f=this.$multiplicationMatrix(o.getMatrix(),l.preMatrix),g=this.isClipDepth||c;if(g)0===f[0]&&(f[0]=1e-14),0===f[3]&&(f[3]=1e-14),t.setTransform(f[0],f[1],f[2],f[3],f[4],f[5]),this.executeRender(t,+this.$min(f[0],f[3]),n,g,o);else{var d=+this.$sqrt(f[0]*f[0]+f[1]*f[1]),y=+this.$sqrt(f[2]*f[2]+f[3]*f[3]);d=+this.$pow(this.$SQRT2,this.$ceil(this.$log(d)/this.$LN2_2-this.$LOG1P)),y=+this.$pow(this.$SQRT2,this.$ceil(this.$log(y)/this.$LN2_2-this.$LOG1P));var v=this.getBounds(),b=+v.xMax,m=+v.xMin,S=+v.yMax,A=+v.yMin,I=0|this.$abs(this.$ceil((b-m)*d)),C=0|this.$abs(this.$ceil((S-A)*y));if(I<=0||C<=0)return p;var x,_=this.getStage(),T=this.getCharacterId()+"_"+_.getId();if(this.isMorphing()&&(T=T+"_"+this.getRatio()),p=this.$cacheStore.generateKey(T,[d,y],n),!(u=this.$cacheStore.getCache(p))&&o.getWidth()>I&&o.getHeight()>C&&this.$cacheStore.size>I*C){(x=this.$cacheStore.getCanvas()).width=I,x.height=C;var k=[d,0,0,y,-m*d,-A*y];(u=x.getContext("2d")).setTransform(k[0],k[1],k[2],k[3],k[4],k[5]),u=this.executeRender(u,+this.$min(d,y),n,g,o),this.$cacheStore.setCache(p,u)}var O=l.preCtx;if(u){x=u.canvas;var M=[1/d,0,0,1/y,m,A],B=this.$multiplicationMatrix(f,M);O.setTransform(B[0],B[1],B[2],B[3],B[4],B[5]),this.$isAndroid4x&&!this.$isChrome?(O.fillStyle=o.context.createPattern(u.canvas,"no-repeat"),O.fillRect(0,0,I,C)):O.drawImage(x,0,0,I,C)}else O.setTransform(f[0],f[1],f[2],f[3],f[4],f[5]),this.executeRender(O,+this.$min(f[0],f[3]),n,g,o)}
// post render
return p+="_"+f[4]+"_"+f[5],(l.isFilter||l.isBlend)&&(l.cacheKey=p,this.postRender(t,e,n,o,l)),p},/**
 * @param ctx
 * @param matrix
 * @param stage
 * @param x
 * @param y
 * @returns {boolean}
 */
xt.prototype.renderHitTest=function(t,e,i,o,r){var n=this.$multiplicationMatrix(e,this.getMatrix()),a=this.graphics;if(a.isDraw)return a.renderHitTest(t,n,i,o,r);if(!this.getData())return!1;var s=this.$multiplicationMatrix(i.getMatrix(),n);t.setTransform(s[0],s[1],s[2],s[3],s[4],s[5]);for(var c=this.$min(s[0],s[3]),h=this.getData(),l=0|h.length,p=!1,u=0;u<l;){var f=h[u],g=f.obj,d=void 0!==g.Width;if(t.beginPath(),(0,f.cmd)(t),d&&(t.lineWidth=this.$max(g.Width,1/c),t.lineCap="round",t.lineJoin="round"),p=t.isPointInPath(o,r))return p;if("isPointInStroke"in t&&(p=t.isPointInStroke(o,r)))return p;u=u+1|0}return p},/**
 * @param ctx
 * @param minScale
 * @param colorTransform
 * @param isClipDepth
 * @param stage
 * @returns {*}
 */
xt.prototype.executeRender=function(t,e,i,o,r){var n=this.getData();if(!n)return t;for(var a,s,c,h=r.clipMc||r.isClipDepth,l=0,p=0|n.length;l<p;){var u=n[l];l=l+1|0;var f=u.obj,g=f.HasFillFlag?f.FillType:f,d=u.cmd,y=void 0!==f.Width;if(o){if(y)continue;d(t)}else{t.beginPath(),d(t);var v=0|g.fillStyleType;switch(v){case 0:a=g.Color,s="rgba("+(a=this.$generateColorTransform(a,i)).R+","+a.G+","+a.B+","+a.A+")",y?(t.strokeStyle=s,t.lineWidth=+this.$max(f.Width,1/e),t.lineCap="round",t.lineJoin="round",t.stroke()):(t.fillStyle=s,t.fill());break;
// gradient
case 16:case 18:case 19:var b=g.gradientMatrix,m=0|g.fillStyleType;if(16!==m)t.save(),t.transform(b[0],b[1],b[2],b[3],b[4],b[5]),s=t.createRadialGradient(0,0,0,0,0,16384);else{var S=this.linearGradientXY(b);s=t.createLinearGradient(S[0],S[1],S[2],S[3])}for(var A=g.gradient.GradientRecords,I=0|A.length,C=0;C<I;){var x=A[C];a=x.Color;var _="rgba("+(a=this.$generateColorTransform(a,i)).R+","+a.G+","+a.B+","+a.A+")";s.addColorStop(x.Ratio,_),C=C+1|0}y?(t.strokeStyle=s,t.lineWidth=this.$max(f.Width,1/e),t.lineCap="round",t.lineJoin="round",t.stroke()):(t.fillStyle=s,t.fill()),16!==m&&t.restore();break;
// bitmap
case 64:case 65:case 66:case 67:var T,k,O=this.getStage(),M=0|g.bitmapId,B=g.bitmapMatrix,w=64===v||66===v?"repeat":"no-repeat",F=this.$cacheStore.generateKey(M+"_"+O.getId()+"_"+w,void 0,i),U=this.$cacheStore.getCache(F);if(void 0===U){if(!(U=O.getCharacter(M)))break;if(1!==i[0]||1!==i[1]||1!==i[2]||i[4]||i[5]||i[6]){var P=U.canvas;if(T=0|P.width,k=0|P.height,T>0&&k>0){(c=this.$cacheStore.getCanvas()).width=T,c.height=k;var $=c.getContext("2d");$.drawImage(U.canvas,0,0,T,k,0,0,T,k),U=this.$generateImageTransform($,i),this.$cacheStore.setCache(F,U)}}else t.globalAlpha=+this.$max(0,this.$min(255*i[3]+i[7],255))/255}U&&(t.save(),T=0|(c=U.canvas).width,k=0|c.height,T>0&&k>0&&(65===v||67===v?(t.clip(),t.transform(B[0],B[1],B[2],B[3],B[4],B[5]),t.drawImage(c,0,0,T,k,0,0,T,k)):(t.fillStyle=r.context.createPattern(c,w),t.transform(B[0],B[1],B[2],B[3],B[4],B[5]),t.fill())),t.restore())}}}if(o&&!h&&(t.clip(),this.$isAndroid&&this.$isChrome)){c||(c=t.canvas);var L=0|c.width,E=0|c.height,D=this.$tmpContext,Y=D.canvas;c=t.canvas,Y.width=L,Y.height=E,D.drawImage(c,0,0,L,E,0,0,L,E),t.save(),t.setTransform(1,0,0,1,0,0),t.beginPath(),t.clearRect(0,0,L+1,E+1),t.drawImage(Y,0,0,L,E,0,0,L,E),t.restore(),D.setTransform(1,0,0,1,0,0),D.clearRect(0,0,L+1,E+1)}return t.strokeStyle="rgba(0,0,0,1)",t.fillStyle="rgba(0,0,0,1)",t.globalAlpha=1,t},/**
 * @param m
 * @returns {*[]}
 */
xt.prototype.linearGradientXY=function(t){var e=+(-16384*t[0]-16384*t[2]+t[4]),i=+(16384*t[0]-16384*t[2]+t[4]),o=+(-16384*t[0]+16384*t[2]+t[4]),r=+(-16384*t[1]-16384*t[3]+t[5]),n=+(16384*t[1]-16384*t[3]+t[5]),a=+(o-e),s=+(+(-16384*t[1]+16384*t[3]+t[5])-r),c=+this.$sqrt(a*a+s*s);switch(!0){case c:a=+a/c,s=+s/c;break;default:a=0,s=0}var h=+((i-e)*a+(n-r)*s);return[+(e+h*a),+(r+h*s),i,n]},/**
 * @returns {string}
 */
xt.prototype.toString=function(){return"[object Shape]"};/**
 * @constructor
 */
var _t=function(){K.call(this),this._downState=new Q,this._hitState=new Q,this._overState=new Q,this._upState=new Q,this.actions=[]};/**
 * extends
 * @type {InteractiveObject}
 */
_t.prototype=Object.create(K.prototype),_t.prototype.constructor=_t,/**
 * properties
 */
Object.defineProperties(_t.prototype,{downState:{get:function(){return this.getSprite("down")},set:function(t){this.setSprite("down",t)}},hitState:{get:function(){return this.getSprite("hit")},set:function(t){this.setSprite("hit",t)}},overState:{get:function(){return this.getSprite("over")},set:function(t){this.setSprite("over",t)}},upState:{get:function(){return this.getSprite("up")},set:function(t){this.setSprite("up",t)}}}),/**
 * @returns {string}
 */
_t.prototype.getClassName=function(){return"SimpleButton"},/**
 *
 * @returns {Array|ActionScript|*|actions}
 */
_t.prototype.getActions=function(){return this.actions},/**
 * @param actions
 */
_t.prototype.setActions=function(t){this.actions=t},/**
 * @param status
 */
_t.prototype.setButtonStatus=function(t){this.getButtonStatus()!==t&&this.buttonReset(t),this.buttonStatus=t},/**
 * @param status
 * @returns {*}
 */
_t.prototype.getSprite=function(t){return t||(t=this.buttonStatus),t+="State",this["_"+t]},/**
 * @param status
 * @param sprite
 */
_t.prototype.setSprite=function(t,e){var i=this.getStage(),o=0;switch(t){case"down":o=1;break;case"hit":o=2;break;case"over":o=3;break;case"up":o=4}i.setPlaceObject(new f,this.instanceId,o,0),e.setParent(this),e.setLevel(o),e.setStage(i);var r=e.getContainer();for(var n in r)if(r.hasOwnProperty(n)){var a=r[n];i.getInstance(a).setParentSprite(e)}this["_"+(t+="State")]=e},/**
 * @param matrix
 * @param status
 * @returns {{xMin: number, xMax: number, yMin: number, yMax: number}}
 */
_t.prototype.getBounds=function(t,e){var i=0,o=0,r=0,n=0,a=this.getSprite(e).getContainer();if(0|a.length){var s=this.getStage(),c=this.$Number.MAX_VALUE;i=-c,o=-c,r=c,n=c;for(var h in a)if(a.hasOwnProperty(h)){var l=0|a[h],p=s.getInstance(l);if(p&&!p.isClipDepth){var u=t?this.$multiplicationMatrix(t,p.getMatrix()):p.getMatrix(),f=p.getBounds(u,e);f&&(r=+this.$min(r,f.xMin),i=+this.$max(i,f.xMax),n=+this.$min(n,f.yMin),o=+this.$max(o,f.yMax))}}}return{xMin:r,xMax:i,yMin:n,yMax:o}},/**
 * @param status
 */
_t.prototype.buttonReset=function(t){var e=this.getSprite().getContainer(),i=this.getSprite(t).getContainer(),o=this.getStage();for(var r in e)if(e.hasOwnProperty(r)){var n=0|e[r];if(!(r in i&&n===i[r])){var a=o.getInstance(n);a&&a.reset()}}},/**
 * @param matrix
 * @param stage
 * @param visible
 * @param mask
 */
_t.prototype.setHitRange=function(t,e,i,o){var r=0|this.$min(this.getVisible(),i);if(!this.clipDepth&&this.getEnabled()&&1===r){var n=e.buttonHits;
// enter
if(this.$isTouch){var a=this.getActions(),s=0|a.length;if(s)for(var c=0;c<s;){var h=a[c];13===h.CondKeyPress&&(n[n.length]={button:this,xMin:0,xMax:0|e.getWidth(),yMin:0,yMax:0|e.getHeight(),CondKeyPress:0|h.CondKeyPress,parent:this.getParent()}),c=c+1|0}}var l="hit",p=this.getSprite(l),u=p.getContainer(),f=0|u.length;if(0===f&&(l="up",u=(p=this.getSprite(l)).getContainer()),f=0|u.length){var g=this.$multiplicationMatrix(t,this.getMatrix()),d=this.getBounds(g,l);d&&(n[n.length]={button:this,xMin:+d.xMin,xMax:+d.xMax,yMin:+d.yMin,yMax:+d.yMax,CondKeyPress:0,parent:this.getParent(),matrix:this.cloneArray(t)})}}},/**
 * @param ctx
 * @param matrix
 * @param colorTransform
 * @param stage
 * @param visible
 */
_t.prototype.render=function(t,e,i,o,r){
// return "";
// colorTransform
var n=this.$multiplicationColor(i,this.getColorTransform()),a=this.$multiplicationMatrix(e,this.getMatrix()),s=this.$min(this.getVisible(),r),c=this.preRender(t,a,n,o,s),h=this.getSprite(),l=this.$multiplicationMatrix(c.preMatrix,h.getMatrix()),p=this.$multiplicationColor(n,h.getColorTransform());s=this.$min(h.getVisible(),r);var u=c.cacheKey;
// post render
return u+=h.render(c.preCtx,l,p,o,s),(c.isFilter||c.isBlend)&&(c.cacheKey=u,this.postRender(t,e,i,o,c)),u},/**
 * @param ctx
 * @param matrix
 * @param stage
 * @param x
 * @param y
 * @returns {boolean}
 */
_t.prototype.renderHitTest=function(t,e,i,o,r){var n=this.getSprite("hit"),a=n.getContainer(),s=0|a.length;if(!s)return!1;var c=this.$multiplicationMatrix(e,this.getMatrix()),h=this.$multiplicationMatrix(c,n.getMatrix());if(s){var l=this.getStage();for(var p in a)if(a.hasOwnProperty(p)){var u=0|a[p],f=l.getInstance(u);if(f){var g=f.renderHitTest(t,h,i,o,r);if(g)return g}}}return!1},/**
 * @param ctx
 * @param matrix
 * @param stage
 * @param x
 * @param y
 * @returns {*}
 */
_t.prototype.hitCheck=function(t,e,i,o,r){var n=this.getSprite("hit"),a=n.getContainer(),s=a.length;if(!s)return!1;var c=this.$multiplicationMatrix(e,this.getMatrix()),h=this.$multiplicationMatrix(c,n.getMatrix()),l=!1,p=!1;if(s){var u=this.getStage();a.reverse();for(var f in a)if(a.hasOwnProperty(f)){var g=a[f],d=u.getInstance(g);switch(d.getClassName()){case"Shape":case"StaticText":case"TextField":p=d.renderHitTest(t,h,i,o,r);break;default:p=d.hitCheck(t,h,i,o,r)}if(p){if(l=p,"object"!=typeof p){var y=this.events;void 0===y.press&&void 0===y.release&&void 0===y.releaseOutside&&void 0===y.rollOver&&void 0===y.rollOut&&void 0===y.dragOver&&void 0===y.dragOut||(i.isHit=p,l={parent:this.getParent(),button:this})}return a.reverse(),l}}a.reverse()}return!1},/**
 * @see MovieClip.addActions
 */
_t.prototype.addActions=function(t){var e=this.getSprite().getContainer();if(0|e.length){var i=this.getStage();for(var o in e)if(e.hasOwnProperty(o)){var r=e[o],n=i.getInstance(r);void 0!==n&&n.addActions(t)}}},/**
 * Dummy
 * @returns {undefined}
 */
_t.prototype.getTags=function(){},_t.prototype.initFrame=function(){};/**
 * @constructor
 */
var Tt=function(){};Tt.PAD="pad",Tt.REFLECT="reflect",Tt.REPEAT="repeat",(/**
 * extends
 */
Tt.prototype=Object.create(u.prototype)).constructor=Tt;/**
 * @constructor
 */
var kt=function(){this.id=o++,this.name="swf2js_"+this.id,this.intervalId=0,this.frameRate=0,this.fileSize=0,this.stopFlag=!0,
// options
this.optionWidth=0,this.optionHeight=0,this.callback=null,this.tagId=null,this.FlashVars={},this.quality="medium",// low = 0.25, medium = 0.8, high = 1.0
this.bgcolor=null,
// event
this.mouse=new l,
// params
this.context=null,this.canvas=null,this.preContext=null,this.hitContext=null,this.matrix=[1,0,0,1,0,0],this._matrix=[1,0,0,1,0,0],this._colorTransform=[1,1,1,1,0,0,0,0],this.characters=[],this.initActions=[],this.exportAssets=[],this.packages=[],this.registerClass=[],this.buttonHits=[],this.downEventHits=[],this.moveEventHits=[],this.upEventHits=[],this.keyDownEventHits=[],this.keyUpEventHits=[],this.sounds=[],this.loadSounds=[],this.videos=[],this.actions=[],this.instances=[],this.placeObjects=[],this.fonts=[],this.isAction=!0,this._global=new s,this.touchObj=null,this.touchStatus="up",this.overObj=null,this.touchEndAction=null,this.imgUnLoadCount=0,this.scale=1,this.ratio=1,this.baseWidth=0,this.baseHeight=0,this.width=0,this.height=0,this.isHit=!1,this.isTouchEvent=!1,this.isLoad=!1,this.jpegTables=null,this.backgroundColor="transparent",this.version=8,this.loadStatus=0,this.isClipDepth=!1,this.clipDepth=0,this.clipMc=!1,this.dragMc=null,this.dragRules=null,this.scaleMode="showAll",this.align="",this.avm2=new Wt(this),this.abc=new Wt(this),this.symbols=[],this.abcFlag=!1,
// render
this.doneTags=[],this.newTags=[];
// init
var t=new bt;t.setStage(this),this.setParent(t)};/**
 * util
 */
kt.prototype=Object.create(i.prototype),kt.prototype.constructor=kt,/**
 * @returns {number}
 */
kt.prototype.getId=function(){return this.id},/**
 * @param id
 */
kt.prototype.setId=function(t){this.id=t},/**
 * @returns {*}
 */
kt.prototype.getParent=function(){return this.parent},/**
 * @param parent
 */
kt.prototype.setParent=function(t){this.parent=t},/**
 * @returns {number|*}
 */
kt.prototype.getVersion=function(){return this.version},/**
 * @param version
 */
kt.prototype.setVersion=function(t){this.version=t},/**
 *
 * @returns {string}
 */
kt.prototype.getBackgroundColor=function(){return this.backgroundColor},/**
 * @param r
 * @param g
 * @param b
 */
kt.prototype.setBackgroundColor=function(t,e,i){this.backgroundColor="rgb("+t+","+e+","+i+")"},/**
 * @returns {Array}
 */
kt.prototype.getGlobal=function(){return this._global},/**
 * play
 */
kt.prototype.play=function(){this.stopFlag=!1;this.intervalId=this.$setInterval.call(null,function(t){var e=t.$requestAnimationFrame;return function(){e(function(){t.isLoad&&!t.stopFlag&&t.nextFrame()},0)}}(this),this.getFrameRate())},/**
 * stop
 */
kt.prototype.stop=function(){this.stopFlag=!0,this.$clearInterval.call(null,this.intervalId)},/**
 * @returns {*}
 */
kt.prototype.getName=function(){return this.name},/**
 * @param name
 */
kt.prototype.setName=function(t){this.name=t},/**
 * @param options
 */
kt.prototype.setOptions=function(t){"object"==typeof t&&(this.optionWidth=t.width||this.optionWidth,this.optionHeight=t.height||this.optionHeight,this.callback=t.callback||this.callback,this.tagId=t.tagId||this.tagId,this.FlashVars=t.FlashVars||this.FlashVars,this.quality=t.quality||this.quality,this.bgcolor=t.bgcolor||this.bgcolor),this.setRatio()},/**
 * view ratio
 */
kt.prototype.setRatio=function(){
// quality
switch(this.quality){case"medium":this.ratio=.8*this.$devicePixelRatio;break;case"high":this.ratio=this.$devicePixelRatio;break;case"low":this.ratio=.5*this.$devicePixelRatio}},/**
 * @returns {number}
 */
kt.prototype.getBaseWidth=function(){return this.baseWidth},/**
 * @param baseWidth
 */
kt.prototype.setBaseWidth=function(t){this.baseWidth=t},/**
 *
 * @returns {number}
 */
kt.prototype.getBaseHeight=function(){return this.baseHeight},/**
 * @param baseHeight
 */
kt.prototype.setBaseHeight=function(t){this.baseHeight=t},/**
 *
 * @returns {number}
 */
kt.prototype.getWidth=function(){return this.width},/**
 * @param width
 */
kt.prototype.setWidth=function(t){t<0&&(t*=-1),this.width=t},/**
 * @returns {number}
 */
kt.prototype.getHeight=function(){return this.height},/**
 * @param height
 */
kt.prototype.setHeight=function(t){t<0&&(t*=-1),this.height=t},/**
 * @returns {number}
 */
kt.prototype.getScale=function(){return this.scale},/**
 * @param scale
 */
kt.prototype.setScale=function(t){this.scale=t},/**
 * @returns {*}
 */
kt.prototype.getMatrix=function(){return this.matrix},/**
 * @param matrix
 */
kt.prototype.setMatrix=function(t){this.matrix=t},/**
 * @param id
 * @returns {*}
 */
kt.prototype.getCharacter=function(t){return this.characters[t]},/**
 * @param id
 * @param obj
 */
kt.prototype.setCharacter=function(t,e){this.characters[t]=e},/**
 * @param id
 * @returns {*}
 */
kt.prototype.getInstance=function(t){return this.instances[0|t]},/**
 * @param instance
 */
kt.prototype.setInstance=function(t){this.instances[0|t.instanceId]=t},/**
 * @param instanceId
 * @param depth
 * @param frame
 * @returns {*}
 */
kt.prototype.getPlaceObject=function(t,e,i){var o=this.placeObjects;if(!(t in o))return null;var r=o[t];if(!(i in r))return null;var n=r[i];return e in n?n[e]:null},/**
 * @param placeObject
 * @param instanceId
 * @param depth
 * @param frame
 */
kt.prototype.setPlaceObject=function(t,e,i,o){var r=this.placeObjects;e in r||(r[e]=[]),o in r[e]||(r[e][o]=[]),r[e][o][i]=t},/**
 * @param instanceId
 * @param depth
 * @param frame
 */
kt.prototype.copyPlaceObject=function(t,e,i){var o=this.getPlaceObject(t,e,i-1);this.setPlaceObject(o,t,e,i)},/**
 * @param instanceId
 */
kt.prototype.removePlaceObject=function(t){delete this.placeObjects[t]},/**
 * @returns {number}
 */
kt.prototype.getFrameRate=function(){return this.frameRate},/**
 * @param fps
 */
kt.prototype.setFrameRate=function(t){this.frameRate=16},/**
 * loadStatus CountUp
 */
kt.prototype.loadEvent=function(){switch(this.loadStatus){case 2:this.resize(),this.loadStatus++;break;case 3:if(!this.isLoad||!this.stopFlag||this.imgUnLoadCount>0)break;this.loadStatus++,this.loaded()}if(4!==this.loadStatus){var t=function(t){return function(){t.loadEvent()}}(this);this.$setTimeout.call(null,t,0)}},/**
 * @param data
 * @param url
 */
kt.prototype.parse=function(t,e){this.isLoad=!1;var i=new zt,o=new qt(this,i);this.$canXHR2?i.setData(new Uint8Array(t)):i.generate(t);var r=this.getParent();if(r._url=r._url?r._url:location.href,this.setSwfHeader(i,o)){
// parse
var n=o.parse(r);
// mc reset
r.container=[];for(var a=1,s=r.getTotalFrames()+1;a<s;)r.container[a]=[],a=0|a+1;r.instances=[],
// build
o.build(n,r);var c=e.split("?")[1];if(c)for(var h=c.split("&"),l=h.length;l;){var p=h[l=0|l-1].split("=");p.length>1&&r.setVariable(p[0],p[1])}
// FlashVars
var u=this.FlashVars;for(var f in u)u.hasOwnProperty(f)&&r.setVariable(f,u[f])}this.isLoad=!0},/**
 * @param bitio
 * @param swftag
 * @returns {boolean}
 */
kt.prototype.setSwfHeader=function(t,e){var i=t.data;
// image
switch(!0){case 137===i[0]&&80===i[1]&&78===i[2]&&71===i[3]&&13===i[4]&&10===i[5]&&26===i[6]&&10===i[7]:// PNG
case 71===i[0]&&73===i[1]&&70===i[2]:// GIF
case 255===i[0]&&216===i[1]:// JPEG
case 66===i[0]&&77===i[1]:// BMP
return this.parseImage(),!1}
// signature
var o=t.getHeaderSignature(),r=t.getVersion();this.setVersion(r);
// file size
var n=t.getUI32();switch(this.fileSize=n,o){case"FWS":// No ZIP
break;case"CWS":// ZLIB
t.deCompress(n,"ZLIB");break;case"ZWS":// TODO LZMA
t.deCompress(n,"LZMA")}var a=e.rect(),s=t.getUI16()/256;t.getUI16();// frameCount
var c=0|this.$ceil((a.xMax-a.xMin)/20),h=0|this.$ceil((a.yMax-a.yMin)/20);return this.setBaseWidth(c),this.setBaseHeight(h),this.setFrameRate(s),!this.tagId||this.optionWidth||this.optionHeight||(this.optionWidth=c,this.optionHeight=h),this.loadStatus+=1,!0},/**
 * parseJPEG
 */
kt.prototype.parseImage=function(){var t=this,e=t.$document.createElement("img");e.addEventListener("load",function(){var e=0|this.width,i=0|this.height,o=t.$cacheStore.getCanvas();o.width=e,o.height=i;var r=o.getContext("2d");r.drawImage(this,0,0,e,i),t.setCharacter(1,r);var n=20*e|0,a=20*i|0;t.setBaseWidth(e),t.setBaseHeight(i);var s={ShapeRecords:[{FillStyle1:1,StateFillStyle0:0,StateFillStyle1:1,StateLineStyle:0,StateMoveTo:0,StateNewStyles:0,isChange:!0},{AnchorX:n,AnchorY:0,ControlX:0,ControlY:0,isChange:!1,isCurved:!1},{AnchorX:n,AnchorY:a,ControlX:0,ControlY:0,isChange:!1,isCurved:!1},{AnchorX:0,AnchorY:a,ControlX:0,ControlY:0,isChange:!1,isCurved:!1},{AnchorX:0,AnchorY:0,ControlX:0,ControlY:0,isChange:!1,isCurved:!1},0],fillStyles:{fillStyleCount:1,fillStyles:[{bitmapId:1,bitmapMatrix:[20,0,0,20,0,0],fillStyleType:65}]},lineStyles:{lineStyleCount:0,lineStyles:[]}},c={xMin:0,xMax:n,yMin:0,yMax:a},h=t.$vtc.convert(s);t.setCharacter(2,{tagType:22,data:h,bounds:c});var l=t.getParent(),p=new xt;p.setParent(l),p.setStage(t),p.setData(h),p.setTagType(22),p.setCharacterId(2),p.setBounds(c),p.setLevel(1),l.container[1]=[],l.container[1][1]=p.instanceId;var u=new f;t.setPlaceObject(u,p.instanceId,1,1),t.init()}),e.src=this.getParent()._url},/**
 * resize
 */
kt.prototype.resize=function(){var e=this.$document.getElementById(this.getName());if(!e)return 0;var i=this.optionWidth,o=this.optionHeight,r=this.$document.documentElement,n=this.$max(r.clientWidth,t.innerWidth||0),a=this.$max(r.clientHeight,t.innerHeight||0),s=e.parentNode;"BODY"!==s.tagName&&(n=s.offsetWidth,a=s.offsetHeight);var c=i>0?i:n,h=o>0?o:a,l=this.getBaseWidth(),p=this.getBaseHeight(),u=+this.$min(c/l,h/p),f=l*u,g=p*u;if(f!==this.getWidth()||g!==this.getHeight()){
// div
var d=e.style;d.width=f+"px",d.height=g+"px",d.top=0,d.left=c/2-f/2+"px",f*=this.$devicePixelRatio,g*=this.$devicePixelRatio,this.setScale(u),this.setWidth(f),this.setHeight(g);
// main
var y=this.context.canvas;y.width=f,y.height=g;
// pre
var v=this.preContext.canvas;v.width=f,v.height=g;
// hit canvas
var b=this.hitContext.canvas;
// tmp
if(b.width=f,b.height=g,this.$isAndroid&&this.$isChrome){var m=this.$tmpContext.canvas;m.width=f,m.height=g}var S=this.getParent(),A=u*this.ratio/20;this.setMatrix(S.cloneArray([A,0,0,A,0,0]))}},/**
 * loaded
 */
kt.prototype.loaded=function(){
// reset
this.buttonHits=[],this.downEventHits=[],this.moveEventHits=[],this.upEventHits=[],this.keyDownEventHits=[],this.keyUpEventHits=[],this.actions=[],
// DOM
this.deleteNode();var e=this,o=this.$document.getElementById(this.getName());if(o){var r=this.getParent();r.initFrame(),r.addActions(this),this.executeAction();
// callback
var n=this.callback;"function"==typeof n&&n.call(t,r),
// set backgroundColor
this.bgcolor&&(this.backgroundColor=this.bgcolor),
// renders
this.render(),this.renderMain();var a=this.context.canvas;
// load sound
if(this.$isTouch){var s=this.loadSounds;if(0|s.length){var c=function(){a.removeEventListener(e.$startEvent,c);for(var t in s)s.hasOwnProperty(t)&&s[t].load()};a.addEventListener(this.$startEvent,c)}}a.addEventListener(this.$startEvent,function(t){i.prototype.$event=t,e.touchStart(t)}),a.addEventListener(this.$moveEvent,function(t){i.prototype.$event=t,e.touchMove(t)}),a.addEventListener(this.$endEvent,function(t){i.prototype.$event=t,e.touchEnd(t)}),o.appendChild(a),this.play()}},/**
 * deleteNode
 */
kt.prototype.deleteNode=function(t){var e=this.$document.getElementById(t||this.getName());if(e){var i=e.childNodes;if(i.length)for(var o in i)i.hasOwnProperty(o)&&e.removeChild(i[o])}},/**
 * nextFrame
 */
kt.prototype.nextFrame=function(){this.downEventHits=[],this.moveEventHits=[],this.upEventHits=[],this.keyDownEventHits=[],this.keyUpEventHits=[];
// mouse event
var t=this.getParent(),e=this.mouse.events,i=e.onMouseDown;i&&(this.downEventHits[this.downEventHits.length]={as:i,mc:t});var o=e.onMouseMove;o&&(this.moveEventHits[this.moveEventHits.length]={as:o,mc:t});var r=e.onMouseUp;r&&(this.upEventHits[this.upEventHits.length]={as:r,mc:t}),stats.begin(),this.putFrame(),this.addActions(),this.executeAction(),this.render(),this.renderMain(),stats.end()},/**
 * putFrame
 */
kt.prototype.putFrame=function(){this.newTags=[];var t=this.doneTags,e=0|t.length;if(e){var i=this.$clipEvent;i.type="enterFrame";for(var o=0;o<e;){var r=t[o];o=o+1|0,r.putFrame(this,i)}}},/**
 * addActions
 */
kt.prototype.addActions=function(){var t=this.newTags,e=0|t.length;if(e)for(var i=0;i<e;){var o=t[i];i=i+1|0,o.addActions(this)}},/**
 * render
 */
kt.prototype.render=function(){this.buttonHits=[],this.doneTags=[];var t=this.preContext;
// reset
t.globalCompositeOperation="source-over",t.setTransform(1,0,0,1,0,0);
// background color
var e=this.getBackgroundColor();switch(e){case"transparent":case!1:
// pre clear
var i=t.canvas;t.clearRect(0,0,i.width+1,i.height+1),this.context.clearRect(0,0,i.width+1,i.height+1);break;default:t.fillStyle=e,t.fillRect(0,0,this.getWidth()+1,this.getHeight()+1)}this.getParent().render(t,this._matrix,this._colorTransform,this,!0)},/**
 * executeAction
 */
kt.prototype.executeAction=function(){if(this.isAction&&this.actions.length){this.isAction=!1;for(var t=0;t<this.actions.length;){var e=this.actions[t];t=t+1|0;var i=e.mc,o=e.args||[];if(i.active){var r=e.as;switch(typeof r){case"function":r.apply(i,o);break;default:for(var n=0|r.length,a=0;a<n;)if(a in r){var s=r[a];switch(a=a+1|0,typeof s){case"function":s.apply(i,o)}}}}}}
// reset
this.actions=[],this.isAction=!0},/**
 * @param mc
 * @param as
 */
kt.prototype.buttonAction=function(t,e){this.downEventHits=[],this.moveEventHits=[],this.upEventHits=[],this.keyDownEventHits=[],this.keyUpEventHits=[],e.execute(t),this.executeAction()},/*
 * main canvas
 */
kt.prototype.renderMain=function(){var t=this.preContext.canvas,e=t.width,i=t.height;if(e>0&&i>0){var o=this.context;o.setTransform(1,0,0,1,0,0),o.drawImage(t,0,0,e,i)}},/**
 * reset
 */
kt.prototype.reset=function(){this.instanceId=0;
// new MovieClip
var t=new bt;t.reset(),t.setStage(this),
// reset
this.parent=t,this.characters=[],this.instances=[],this.buttonHits=[],this.downEventHits=[],this.moveEventHits=[],this.upEventHits=[],this.keyDownEventHits=[],this.keyUpEventHits=[],this.sounds=[],this.loadSounds=[],this.actions=[]},/**
 * init
 */
kt.prototype.init=function(){var e,i=this.$document,o=this.$stages;if(this.getId()in o){var r=this.tagId;if(r){if("loading"===i.readyState){var n=this,a=function(){t.removeEventListener("DOMContentLoaded",a),n.init()};return t.addEventListener("DOMContentLoaded",a),0}var s=i.getElementById(r);if(!s)return alert("Not Found Tag ID:"+r),0;(e=i.getElementById(this.getName()))?this.deleteNode():((e=i.createElement("div")).id=this.getName(),s.appendChild(e))}else i.body.insertAdjacentHTML("beforeend","<div id='"+this.getName()+"'></div>")}(e=i.getElementById(this.getName()))&&(this.initStyle(e),this.loading()),this.canvas||this.initCanvas(),this.loadStatus+=1,this.loadEvent()},/**
 * @param div
 */
kt.prototype.initStyle=function(e){var i=e.style;
// set css
i.position="relative",i.top="0",i.backgroundColor="transparent",i.overflow="hidden",i["-webkit-backface-visibility"]="hidden";var o,r,n=e.parentNode,a=this.optionWidth,s=this.optionHeight;"BODY"===n.tagName?(o=a>0?a:t.innerWidth,r=s>0?s:t.innerHeight):(o=a>0?a:n.offsetWidth,r=s>0?s:n.offsetHeight),i.width=o+"px",i.height=r+"px",i["-webkit-user-select"]="none"},/**
 * init canvas
 */
kt.prototype.initCanvas=function(){var e,o=this,r=o.$document.createElement("canvas");r.width=1,r.height=1,
// set css
(e=r.style).zIndex=0,e.position="absolute",e.top=0,e.left=0,e.zoom=100/o.ratio+"%",e["-webkit-tap-highlight-color"]="rgba(0,0,0,0)",e.MozTransformOrigin="0 0",e.MozTransform="scale("+1/o.ratio+")",o.$isAndroid&&r.addEventListener("touchcancel",function(){o.touchEnd(o.$event)}),o.$isTouch||(t.addEventListener("keydown",o.$keyDownAction),t.addEventListener("keyup",o.$keyUpAction),t.addEventListener("keyup",function(t){i.prototype.$keyEvent=t,o.touchEnd(t)})),
// main canvas
o.context=r.getContext("2d"),o.context.imageSmoothingEnabled=!1,o.canvas=r;
// pre canvas
var n=o.$document.createElement("canvas");n.width=1,n.height=1,o.preContext=n.getContext("2d"),o.preContext.imageSmoothingEnabled=!1;
// hit canvas
var a=o.$document.createElement("canvas");a.width=1,a.height=1,o.hitContext=a.getContext("2d"),o.hitContext.imageSmoothingEnabled=!1},/**
 * loading
 */
kt.prototype.loading=function(){var t=this.$document.getElementById(this.getName()),e=this.getName()+"_loading",i="<style>";i+="#"+e+" {\n",i+="position: absolute;\n",i+="top: 50%;\n",i+="left: 50%;\n",i+="margin: -24px 0 0 -24px;\n",i+="width: 50px;\n",i+="height: 50px;\n",i+="border-radius: 50px;\n",i+="border: 8px solid #dcdcdc;\n",i+="border-right-color: transparent;\n",i+="box-sizing: border-box;\n",i+="-webkit-animation: "+e+" 0.8s infinite linear;\n",i+="animation: "+e+" 0.8s infinite linear;\n",i+="} \n",i+="@-webkit-keyframes "+e+" {\n",i+="0% {-webkit-transform: rotate(0deg);}\n",i+="100% {-webkit-transform: rotate(360deg);}\n",i+="} \n",i+="@keyframes "+e+" {\n",i+="0% {transform: rotate(0deg);}\n",i+="100% {transform: rotate(360deg);}\n",i+="} \n",i+="</style>",t.innerHTML=i;var o=this.$document.createElement("div");o.id=e,
// append
t.appendChild(o)},/**
 * @param url
 * @param options
 */
kt.prototype.reload=function(e,i){return this.stop(),4===this.loadStatus&&this.deleteNode(),this.loadStatus=0,this.isLoad=!1,this.reset(),t.swf2js.load(e,{optionWidth:i.optionWidth||this.optionWidth,optionHeight:i.optionHeight||this.optionHeight,callback:i.callback||this.callback,tagId:i.tagId||this.tagId,FlashVars:i.FlashVars||this.FlashVars,quality:i.quality||this.quality,bgcolor:i.bgcolor||this.bgcolor,stage:this})},/**
 * @param url
 * @param frame
 * @param width
 * @param height
 * @returns {*}
 */
kt.prototype.output=function(t,e,i,o){if(!this.isLoad||this.stopFlag){var r=function(t,e,i,o,r){return function(){t.output(e,i,o,r)}}(this,t,e,i,o);return this.$setTimeout.call(null,r,500)}this.stop(),e=e||1,i=i||this.getWidth(),o=o||this.getHeight();
// resize
var n=this.getParent();n.reset(),n.gotoAndStop(e),i===this.getWidth()&&o===this.getHeight()||(this.optionWidth=i,this.optionHeight=o,this.resize()),
// action
n.addActions();
// backgroundColor
var a=this.preContext.canvas;a.style.backgroundColor=this.backgroundColor,
// render
this.render();
// output
var s=new XMLHttpRequest;s.open("POST",t,!0),s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.onreadystatechange=function(){if(4===(0|s.readyState))switch(0|s.status){case 200:case 304:console.log("OUTPUT SUCCESS");break;default:alert(s.statusText)}};var c=a.toDataURL();s.send("data="+encodeURIComponent(c))},/**
 * @param event
 */
kt.prototype.hitCheck=function(e){this.isHit=!1;var i=this.buttonHits,o=0|i.length;if(!o)return 0;var r=this.$document.getElementById(this.getName()).getBoundingClientRect(),n=t.pageXOffset+r.left,a=t.pageYOffset+r.top,s=0,c=0;if(this.$isTouch){var h=e.changedTouches[0];s=h.pageX,c=h.pageY}else s=e.pageX,c=e.pageY;s-=n,c-=a;var l=this.getScale();s/=l,c/=l;var p=this.hitContext,u=p.canvas,f=u.width,g=u.height,d=s*l*this.ratio,y=c*l*this.ratio;if(this.abcFlag){var v=this.getParent();p.setTransform(1,0,0,1,0,0),p.clearRect(0,0,f,g);var b=v.hitCheck(p,[1,0,0,1,0,0],this,d,y);return"object"==typeof b&&b}for(var m=o;m;){var S=m-1|0;if(S in i){var A=i[S];if(m=m-1|0,void 0!==A){var I=!1;if(s>=A.xMin&&s<=A.xMax&&c>=A.yMin&&c<=A.yMax){var C=A.matrix;if(C){var x=A.parent,_=A.button;p.setTransform(1,0,0,1,0,0),p.clearRect(0,0,f,g),I=_?_.renderHitTest(p,C,this,d,y):x.renderHitTest(p,C,this,d,y)}else I=!0}if(I)return e.preventDefault(),this.isHit=!0,A}}else m=m-1|0}return 0},/**
 * @param actions
 * @param caller
 * @param event
 */
kt.prototype.executeEventAction=function(t,e,i){var o=i||[];if(t){if("function"==typeof t)t.apply(e,o);else{var r=0|t.length;if(r)for(var n=0;n<r;){var a=t[n];n=n+1|0,"function"==typeof a&&a.apply(e,o)}}this.executeAction()}},/**
 * @param event
 */
kt.prototype.touchStart=function(t){if("up"===this.touchStatus){this.touchStatus="down",this.isHit=!1,this.isTouchEvent=!0,this.touchEndAction=null;var e,i,o=this.downEventHits,r=0|o.length;if(r){t.preventDefault();for(var n=0;n<r;){var a=o[n];n=n+1|0,e=a.mc,(i=a.as)||(i=e.variables.onMouseDown),this.executeEventAction(i,a.mc)}this.downEventHits=[]}var s=this.hitCheck(t);this.isHit&&((e=s.parent).active&&(e.setButtonStatus("down"),"TextField"!==e.getClassName()?this.executePress(e,s):this.appendTextArea(e,s)),null===this.touchObj&&(this.touchObj=s))}},/**
 * @param mc
 * @param hitObj
 */
kt.prototype.executePress=function(t,e){var i,o,r,n,a,s=!1,c=new v;i=t.events;var h=this.$isTouch;h&&((n=i.rollOver)&&(c.type="rollOver",c.target=t,s=!0,this.executeEventAction(n,t,[c])),"function"==typeof(a=t.variables.onRollOver)&&(s=!0,this.executeEventAction(a,t))),(o=(i=t.events).press)&&(c.type="press",c.target=t,s=!0,this.executeEventAction(o,t,[c])),"function"==typeof(r=t.variables.onPress)&&(s=!0,this.executeEventAction(r,t));var l=e.button;if(l){i=l.events,h&&((n=i.rollOver)&&(c.type="rollOver",c.target=l,this.executeEventAction(n,l,[c])),"function"==typeof(a=l.variables.onRollOver)&&this.executeEventAction(a,l)),l.setButtonStatus("down"),h&&this.executeButtonAction(l,t,"CondIdleToOverUp");var p=l.getActions(),u=0|p.length;if(u)for(var f=this.touchObj,g=0;g<u;)if(g in p){var d=p[g];if(d.CondOverDownToOverUp&&null===f)this.touchEndAction=d.ActionScript,g=g+1|0;else{
// enter
var y=0|d.CondKeyPress;13!==e.CondKeyPress||e.CondKeyPress===y?(h?(13===y||y>=48&&y<=57||d.CondOverUpToOverDown)&&this.buttonAction(t,d.ActionScript):d.CondOverUpToOverDown&&this.buttonAction(t,d.ActionScript),g=g+1|0):g=g+1|0}}else g=g+1|0;(o=i.press)&&(c.type="press",c.target=l,this.executeEventAction(o,l,[c])),"function"==typeof(r=l.variables.onPress)&&this.executeEventAction(r,l),l.getSprite().startSound(),l.addActions(this),this.executeAction(),s=!0}s&&this.touchRender()},/**
 * @param textField
 * @param hitObj
 */
kt.prototype.appendTextArea=function(t,e){t.inputActive=!0;var i=this.$document.getElementById(t.getTagName());if(!i){var o;i=t.input;var r=t.getProperty("variable");r&&void 0===(o=t.getParent().getProperty(r))&&(o=t.getVariable("text")),void 0!==o&&(i.value=o);var n=t.getVariable("maxChars");if(n&&(i.maxLength=n),t.getVariable("border")){i.style.border="1px solid black";var a=t.getVariable("backgroundColor");i.style.backgroundColor="rgba("+a.R+","+a.G+","+a.B+","+a.A+")"}var s=this.getScale(),c=e.xMin,h=e.yMin,l=e.xMax-c,p=e.yMax-h;i.style.left=this.$ceil(c*s)-3+"px",i.style.top=this.$ceil(h*s)-3+"px",i.style.width=this.$ceil(l*s)+6+"px",i.style.height=this.$ceil(p*s)+6+"px";var u=this.$document.getElementById(this.getName());if(u){u.appendChild(i),i.focus();this.$setTimeout.call(null,function(t){return function(){t.focus()}}(i),10)}}},/**
 * @param event
 */
kt.prototype.touchMove=function(t){var e,i,o,r,n,a,s,c,h,l,p,u=this.overObj,f=this.moveEventHits,g=new v,d=0|f.length;if(d){t.preventDefault();for(var y=0;y<d;){var b=f[y];e=b.mc,(i=b.as)||(i=e.variables.onMouseMove),this.executeEventAction(i,e),y=y+1|0}this.moveEventHits=[]}var m=this.$isTouch;if(!m||m&&this.isTouchEvent){var S=null,A=this.touchObj;(A||"up"===this.touchStatus)&&(S=this.hitCheck(t));var I=!1;if(!m){var C=this.canvas;this.isHit||A?C.style.cursor=S?"pointer":"auto":C.style.cursor="auto"}A?(o=A.button,(e=A.parent).active&&(this.overObj=S,S&&S.parent.instanceId===e.instanceId&&S.button===o?("up"===e.getButtonStatus()&&(e.setButtonStatus("down"),(r=e.events.dragOver)&&(g.type="dragOver",g.target=e,I=!0,this.executeEventAction(r,e,[g])),"function"==typeof(n=e.variables.onDragOver)&&(I=!0,this.executeEventAction(n,e))),o&&"up"===o.getButtonStatus()&&(o.setButtonStatus("down"),o.getSprite().startSound(),(r=o.events.dragOver)&&(g.type="dragOver",g.target=o,I=!0,this.executeEventAction(r,o,[g])),"function"==typeof(n=o.variables.onDragOver)&&(I=!0,this.executeEventAction(n,o)),o.addActions(this),this.executeAction())):("down"===e.getButtonStatus()&&((a=e.events.dragOut)&&(g.type="dragOut",g.target=e,I=!0,this.executeEventAction(a,e,[g])),"function"==typeof(s=e.variables.onDragOut)&&(I=!0,this.executeEventAction(s,e))),e.setButtonStatus("up"),o&&"down"===o.getButtonStatus()&&(o.setButtonStatus("up"),(a=o.events.dragOut)&&(g.type="dragOut",g.target=o,I=!0,this.executeEventAction(a,o,[g])),"function"==typeof(s=o.variables.onDragOut)&&(I=!0,this.executeEventAction(s,o)),o.addActions(this),this.executeAction())))):S?(u&&(o=u.button)&&o!==S.button&&(e=u.parent).active&&(o.setButtonStatus("up"),this.executeButtonAction(o,e,"CondOverUpToIdle")),o=S.button,e=S.parent,!m&&e.active&&(u&&u.parent===e||((c=e.events.rollOver)&&(g.type="rollOver",g.target=e,I=!0,this.executeEventAction(c,e,[g])),"function"==typeof(h=e.variables.onRollOver)&&(I=!0,this.executeEventAction(h,e)))),o&&(o.setButtonStatus("over"),o.getSprite().startSound(),m||u&&u.button===o||(I=!0,this.executeButtonAction(o,e,"CondIdleToOverUp"),(c=o.events.rollOver)&&(g.type="rollOver",g.target=o,I=!0,this.executeEventAction(c,o,[g])),"function"==typeof(h=o.variables.onRollOver)&&this.executeEventAction(h,o)),o.addActions(this),this.executeAction()),this.overObj=S):"up"===this.touchStatus&&(this.overObj=null),
// RollOut
!A&&u&&(o=u.button,(e=u.parent).active&&(S&&S.parent===e||(e.setButtonStatus("up"),(l=e.events.rollOut)&&(g.type="rollOut",g.target=e,I=!0,this.executeEventAction(l,e,[g])),"function"==typeof(p=e.variables.onRollOut)&&(I=!0,this.executeEventAction(p,e))),!o||S&&S.button===o||(o.setButtonStatus("up"),this.executeButtonAction(o,e,"CondOverUpToIdle"),(l=o.events.rollOut)&&(g.type="rollOut",g.target=o,I=!0,this.executeEventAction(l,o,[g])),"function"==typeof(p=o.variables.onRollOut)&&(I=!0,this.executeEventAction(p,o)),o.addActions(this),this.executeAction()))),I&&this.touchRender()}var x=this.dragMc;x&&(t.preventDefault(),x.executeDrag(),this.isHit=!0)},/**
 * @param event
 */
kt.prototype.touchEnd=function(t){var e,i,o,r,n,a,s,c=this.$isTouch,h=new v,l=this.touchObj;l&&(e=l.button)&&e.setButtonStatus("up");var p=this.upEventHits,u=0|p.length;if(u){t.preventDefault();for(var f=0;f<u;){var g=p[f];i=g.mc,(o=g.as)||(o=i.variables.onMouseUp),this.executeEventAction(o,g.mc),f=f+1|0}this.upEventHits=[]}var d=this.hitCheck(t);this.dragMc&&(d=l,this.isHit=!0);var y=!1;if(l){if((i=l.parent).setButtonStatus("up"),e=l.button,this.isHit){var b=this.touchEndAction;if(i.active&&(i===d.parent&&(null!==b&&(y=!0,this.buttonAction(i,b)),(r=i.events.release)&&(y=!0,h.type="release",h.target=i,this.executeEventAction(r,i,[h])),"function"==typeof(n=i.variables.onRelease)&&(y=!0,this.executeEventAction(n,i))),e)){e===d.button&&((r=e.events.release)&&(h.type="release",h.target=e,this.executeEventAction(r,e,[h])),"function"==typeof(n=e.variables.onRelease)&&this.executeEventAction(n,e));var m="up";c||d&&d.button===e&&(m="over"),e.setButtonStatus(m),e.getSprite("hit").startSound(),e.addActions(this),this.executeAction(),y=!0}}!i.active||d&&i===d.parent||((a=i.events.releaseOutside)&&(y=!0,h.type="releaseOutside",h.target=i,this.executeEventAction(a,i,[h])),"function"==typeof(s=i.variables.onReleaseOutside)&&(y=!0,this.executeEventAction(s,i))),!e||d&&e===d.button||(y=!0,(a=e.events.releaseOutside)&&(h.type="releaseOutside",h.target=e,this.executeEventAction(a,e,[h])),"function"==typeof(s=e.variables.onReleaseOutside)&&this.executeEventAction(s,e),e.setButtonStatus("up"),e.addActions(this),this.executeAction())}if(this.isHit=!1,this.isTouchEvent=!1,this.touchObj=null,this.touchStatus="up",c||(this.hitCheck(t),this.canvas.style.cursor=this.isHit?"pointer":"auto"),d){var S,A;i=d.parent,l&&i===l.parent||((S=i.events.rollOver)&&(y=!0,h.type="rollOver",h.target=i,this.executeEventAction(S,i,[h])),"function"==typeof(A=i.variables.onRollOver)&&(y=!0,this.executeEventAction(A,i))),(e=d.button)&&(l&&e===l.button||((S=e.events.rollOver)&&(y=!0,h.type="rollOver",h.target=e,this.executeEventAction(S,e,[h])),"function"==typeof(A=e.variables.onRollOver)&&(y=!0,this.executeEventAction(A,e))))}y&&(t.preventDefault(),this.touchRender()),this.$keyEvent=null},/**
 * @param button
 * @param mc
 * @param status
 */
kt.prototype.executeButtonAction=function(t,e,i){var o=t.getActions();if(o.length)for(var r in o)if(o.hasOwnProperty(r)){var n=o[r];n[i]&&this.buttonAction(e,n.ActionScript)}},/**
 * touchRender
 */
kt.prototype.touchRender=function(){this.render(),this.renderMain()};/**
 * @constructor
 */
var Ot=function(){};Ot.BOTTOM="B",Ot.BOTTOM_LEFT="BL",Ot.BOTTOM_RIGHT="BR",Ot.LEFT="L",Ot.RIGHT="R",Ot.TOP="T",Ot.TOP_LEFT="TL",Ot.TOP_RIGHT="TR",(/**
 * extends
 */
Ot.prototype=Object.create(u.prototype)).constructor=Ot;/**
 * @constructor
 */
var Mt=function(){};Mt.FULL_SCREEN="fullScreen",Mt.FULL_SCREEN_INTERACTIVE="fullScreenInteractive",Mt.NORMAL="normal",(/**
 * extends
 */
Mt.prototype=Object.create(u.prototype)).constructor=Mt;/**
 * @constructor
 */
var Bt=function(){};Bt.BEST="best",Bt.HIGH="high",Bt.HIGH_16X16="16x16",Bt.HIGH_16X16_LINEAR="16x16linear",Bt.HIGH_8X8="8x8",Bt.HIGH_8X8_LINEAR="8x8linear",Bt.LOW="low",Bt.MEDIUM="medium",(/**
 * extends
 */
Bt.prototype=Object.create(u.prototype)).constructor=Bt;/**
 * @constructor
 */
var wt=function(){};wt.EXACT_FIT="exactFit",wt.NO_BORDER="noBorder",wt.NO_SCALE="noScale",wt.SHOW_ALL="showAll",(/**
 * extends
 */
wt.prototype=Object.create(u.prototype)).constructor=wt;/**
 * @constructor
 */
var Ft=function(){};Ft.NEGATIVE="negative",Ft.NONE="none",Ft.POSITIVE="positive",(/**
 * extends
 */
Ft.prototype=Object.create(u.prototype)).constructor=Ft;/**
 * @constructor
 */
var Ut=function(){};Ut.HTML_FORMAT="air:html",Ut.RICH_TEXT_FORMAT="air:rtf",Ut.TEXT_FORMA="air:text",(/**
 * extends
 */
Ut.prototype=Object.create(u.prototype)).constructor=Ut;/**
 * @constructor
 */
var Pt=function(){};Pt.CLONE_ONLY="cloneOnly",Pt.CLONE_PREFERRED="clonePreferred",Pt.ORIGINAL_ONLY="originalOnly",Pt.ORIGINAL_PREFERRED="originalPreferred",(/**
 * extends
 */
Pt.prototype=Object.create(u.prototype)).constructor=Pt;/**
 * @constructor
 */
var $t=function(){q.call(this),this.data=null,this.records=[]};(/**
 * extends
 * @type {DisplayObject}
 */
$t.prototype=Object.create(q.prototype)).constructor=$t,/**
 * dummy
 */
$t.prototype.initFrame=function(){},$t.prototype.addActions=function(){},$t.prototype.setHitRange=function(){},/**
 * @returns {string}
 */
$t.prototype.getClassName=function(){return"StaticText"},/**
 * @returns {{}}
 */
$t.prototype.getBounds=function(t){if(t){var e=this.boundsMatrix(this.bounds,t);for(var i in e)if(e.hasOwnProperty(i)){var o=+e[i];e[i]=+o/20}return e}return this.bounds},/**
 * @param bounds
 */
$t.prototype.setBounds=function(t){this.bounds=t},/**
 * @returns {Array}
 */
$t.prototype.getRecords=function(){return this.records},/**
 * @param record
 */
$t.prototype.addRecord=function(t){var e=this.getRecords();e[e.length]=t},/**
 * @param ctx
 * @param matrix
 * @param colorTransform
 * @param stage
 * @param visible
 * @return {*}
 */
$t.prototype.render=function(t,e,i,o,r){
// colorTransform
var n=this.$multiplicationColor(i,this.getColorTransform()),a=this.$min(this.getVisible(),r),s=+(n[3]+n[7]/255),c=o.clipMc||o.isClipDepth;if(!(c||s&&a))return 0;
// matrix
var h=this.$multiplicationMatrix(e,this.getMatrix()),l=this.preRender(t,h,n,o,r),p=this.$multiplicationMatrix(o.getMatrix(),l.preMatrix),u=+this.$sqrt(p[0]*p[0]+p[1]*p[1]),f=+this.$sqrt(p[2]*p[2]+p[3]*p[3]);u=+this.$pow(this.$SQRT2,this.$ceil(this.$log(u)/this.$LN2_2-this.$LOG1P)),f=+this.$pow(this.$SQRT2,this.$ceil(this.$log(f)/this.$LN2_2-this.$LOG1P));
// render
var g=this.getBounds(),d=+g.xMax,y=+g.xMin,v=+g.yMax,b=+g.yMin,m=0|this.$abs(this.$ceil((d-y)*u)),S=0|this.$abs(this.$ceil((v-b)*f)),A=this.isClipDepth||c;if(m>0&&S>0){var I,C=this.getCharacterId()+"_"+this.getStage().getId(),x=this.$cacheStore.generateKey(C,[u,f],n),_=this.$cacheStore.getCache(x);if(!_&&!A&&o.getWidth()>m&&o.getHeight()>S&&this.$cacheStore.size>m*S){(I=this.$cacheStore.getCanvas()).width=m,I.height=S;var T=[u,0,0,f,-y*u,-b*f];(_=I.getContext("2d")).setTransform(T[0],T[1],T[2],T[3],T[4],T[5]),_=this.executeRender(_,T,n,!1,!1),this.$cacheStore.setCache(x,_)}if(_){I=_.canvas;var k=this.$multiplicationMatrix(p,[1/u,0,0,1/f,y,b]);t.setTransform(k[0],k[1],k[2],k[3],k[4],k[5]),this.$isAndroid4x&&!this.$isChrome?(t.fillStyle=o.context.createPattern(_.canvas,"no-repeat"),t.fillRect(0,0,m,S)):t.drawImage(I,0,0,m,S)}else t.setTransform(p[0],p[1],p[2],p[3],p[4],p[5]),this.executeRender(t,p,n,A,c);return x+="_"+p[4]+"_"+p[5],(l.isFilter||l.isBlend)&&(l.cacheKey=x,this.postRender(t,e,n,o,l)),x}return null},/**
 * @param ctx
 * @param matrix
 * @param colorTransform
 * @param isClipDepth
 * @param stageClip
 * @returns {*}
 */
$t.prototype.executeRender=function(t,e,i,o,r){var n=this.getRecords(),a=0|n.length;if(!a)return t;for(var s=0;s<a;){var c=n[s];s=s+1|0;var h=c.getData(),l=0|h.length;if(l){var p=this.$multiplicationMatrix(e,c.getMatrix());t.setTransform(p[0],p[1],p[2],p[3],p[4],p[5]);var u=c.getColor();u=this.$generateColorTransform(u,i),t.fillStyle="rgba("+u.R+","+u.G+","+u.B+","+u.A+")";for(var f=0;f<l;){var g=h[f].cmd;o?g(t):(t.beginPath(),g(t),t.fill()),f=f+1|0}}}return o&&!r&&t.clip(),t.globalAlpha=1,t},/**
 * @param ctx
 * @param matrix
 * @param stage
 * @param x
 * @param y
 * @returns {boolean}
 */
$t.prototype.renderHitTest=function(t,e,i,o,r){var n=this.getRecords(),a=0|n.length;if(!a)return!1;for(var s=!1,c=this.$multiplicationMatrix(e,this.getMatrix()),h=this.$multiplicationMatrix(i.getMatrix(),c),l=0;l<a;){var p=n[l];l=l+1|0;var u=p.getData(),f=0|u.length;if(f){var g=this.$multiplicationMatrix(h,p.getMatrix());t.setTransform(g[0],g[1],g[2],g[3],g[4],g[5]);for(var d=0;d<f;){var y=u[d].cmd;if(t.beginPath(),y(t),s=t.isPointInPath(o,r))return s;d=d+1|0}}}return s};/**
 * @constructor
 */
var Lt=function(t,e,i,o){K.call(this),t&&this.setName(t),e&&this.setLevel(e),void 0===i&&(i=0),i*=20,void 0===o&&(o=0),o*=20,this.fontId=0,this.input=null,this.inputActive=!1,this.span=null,this.bounds={xMin:0,xMax:i,yMin:0,yMax:o}};/**
 * extends
 * @type {InteractiveObject}
 */
Lt.prototype=Object.create(K.prototype),Lt.prototype.constructor=Lt,/**
 * properties
 */
Object.defineProperties(Lt.prototype,{text:{get:function(){return this.variables.text},set:function(t){this.variables.text=t}},htmlText:{get:function(){return this.variables.text},set:function(t){this.variables.text=t}},size:{get:function(){return this.variables.size},set:function(t){this.variables.size=t}},font:{get:function(){return this.variables.font},set:function(t){this.variables.font=t}},type:{get:function(){return this.variables.type},set:function(t){this.variables.type=t,"input"===t&&this.setInputElement()}},multiline:{get:function(){return this.variables.multiline},set:function(t){this.variables.multiline=t,t&&(this.wordWrap=t),"input"===this.type&&this.setInputElement()}},wordWrap:{get:function(){return this.variables.wordWrap},set:function(t){this.variables.wordWrap=t,"input"===this.type&&this.setInputElement()}},border:{get:function(){return this.variables.border},set:function(t){this.variables.border=t}},borderColor:{get:function(){return this.variables.borderColor},set:function(t){"string"==typeof t&&(t=this.$colorStringToInt(t)),t=this.$intToRGBA(t),this.variables.borderColor=t}},background:{get:function(){return this.variables.background},set:function(t){this.variables.background=t}},backgroundColor:{get:function(){return this.variables.backgroundColor},set:function(t){"string"==typeof t&&(t=this.$colorStringToInt(t)),t=this.$intToRGBA(t),this.variables.backgroundColor=t}},textColor:{get:function(){return this.variables.textColor},set:function(t){"string"==typeof t&&(t=this.$colorStringToInt(t)),t=this.$intToRGBA(t),this.variables.textColor=t}},align:{get:function(){return this.variables.align},set:function(t){this.variables.align=t}},autoSize:{get:function(){return this.variables.autoSize},set:function(t){this.variables.autoSize=t}},onChanged:{get:function(){return this.variables.onChanged},set:function(t){this.variables.onChanged=t}}}),/**
 * @returns {string}
 */
Lt.prototype.getClassName=function(){return"TextField"},/**
 * @param int
 * @param alpha
 * @returns {{R: number, G: number, B: number, A: number}}
 */
Lt.prototype.intToRGBA=function(t,e){return e=e||100,{R:(16711680&t)>>16,G:(65280&t)>>8,B:255&t,A:e/100}},/**
 * setInitParams
 */
Lt.prototype.setInitParams=function(){var t={};t.antiAliasType=null,t.autoSize="none",t.background=0,t.backgroundColor={R:255,G:255,B:255,A:1},t.border=0,t.borderColor={R:0,G:0,B:0,A:1},t.condenseWhite=0,t.html=0,t.password=0,t.embedFonts=0,t.gridFitType="none",t.maxChars=null,t.mouseWheelEnabled=0,t.multiline=0,t.selectable=0,t.sharpness=0,t.textColor=0,t.thickness=0,t.type="dynamic",t.wordWrap=0,t.text="";for(var e in t)t.hasOwnProperty(e)&&this.setProperty(e,t[e]);this.setTextFormat(new Et)},/**
 * @returns {string}
 */
Lt.prototype.getTagName=function(){return"__swf2js_input_element_"+this.instanceId},/**
 * @param format
 */
Lt.prototype.setTextFormat=function(t){for(var e in t)t.hasOwnProperty(e)&&this.setProperty(e,t[e])},/**
 * @returns {*}
 */
Lt.prototype.getBounds=function(t){if(t){var e=this.boundsMatrix(this.bounds,t);for(var i in e)if(e.hasOwnProperty(i)){var o=+e[i];e[i]=+o/20}return e}return this.bounds},/**
 * @param bounds
 */
Lt.prototype.setBounds=function(t){this.bounds=t},/**
 * InputElemen
 */
Lt.prototype.setInputElement=function(){var t=this.variables,e=this.getDisplayObject("_root").getParentStage(),i=this.$document.createElement("textarea"),o=t.multiline,r=t.align,n=this.initialText;n||(n=t.text),i.onkeypress=null,o||(i.onkeypress=function(t){if(13===t.keyCode)return!1});var a=i.style;if(a.position="absolute",a.webkitBorderRadius="0px",a.padding="1px",a.margin="0px",a.webkitAppearance="none",a.resize="none",a.border="none",a.overflow="hidden",a.backgroundColor="transparent",a.zIndex=2147483647,a.textAlign=r,i.value=n,"string"!=typeof n){for(var s="",c=0|n.length,h=0;h<c;)s+=n[h].innerText,h+1!==c&&(s+="\n"),h=0|h+1;i.value=s}i.id=this.getTagName();var l=this;i.onblur=function(t,e,i){return function(){e.setProperty("text",i.value),e.inputActive=!1;var o=l.$document.getElementById(t.getName());if(o){var r=l.$document.getElementById(e.getTagName());if(r)try{o.removeChild(r)}catch(t){}}}}(e,this,i),this.input=i},/**
 * @param matrix
 * @param stage
 * @param visible
 * @param mask
 */
Lt.prototype.setHitRange=function(t,e,i,o){var r=this.variables.type,n=0|this.$min(this.getVisible(),i);if("input"===r&&1===n){var a=e.buttonHits,s=this.$multiplicationMatrix(t,this.getMatrix()),c=this.getBounds(s);a[a.length]={xMax:+c.xMax,xMin:+c.xMin,yMax:+c.yMax,yMin:+c.yMin,parent:this}}},/**
 * @param ctx
 * @param matrix
 * @param colorTransform
 * @param stage
 * @param visible
 */
Lt.prototype.render=function(t,e,i,o,r){o.doneTags.unshift(this);
// return "";
// colorTransform
var n=this.$multiplicationColor(i,this.getColorTransform()),a=this.$min(this.getVisible(),r),s=o.clipMc||o.isClipDepth,c=n[3]+n[7]/255;if(!(s||c&&a))return 0;
// matrix
var h=this.$multiplicationMatrix(e,this.getMatrix()),l=this.preRender(t,h,n,o,r),p=l.preCtx,u=l.preMatrix,f=this.$multiplicationMatrix(o.getMatrix(),u);p.setTransform(f[0],f[1],f[2],f[3],f[4],f[5]);var g=[],d=this.variables,y=d.text,v=d.variable;if(v&&void 0===(y=this.getParent().getProperty(v))&&(y=d.text),"number"==typeof y&&(y+=""),d.html&&"string"==typeof y){-1!==y.indexOf("<sbr />")&&(y=y.replace(new RegExp("<sbr />","gi"),"\n")),-1!==y.indexOf("<b>")&&(y=(y=y.replace(new RegExp("<b>","gi"),"")).replace(new RegExp("</b>","gi"),""));var b=this.$document.createElement("span");b.innerHTML=y;var m=b.getElementsByTagName("p"),S=m.length;if(S){for(var A=[],I=0;I<S;I++)A[I]=m[I];y=A}else y=b.innerText}p.textBaseline="top",void 0===y&&(y="");var C,x,_,T=this.getBounds(),k=T.xMax,O=T.xMin,M=T.yMax,B=T.yMin,w=this.$abs(this.$ceil(k-O)),F=this.$abs(this.$ceil(M-B)),U=o.getScale(),P=d.autoSize,$=d.wordWrap,L="string"==typeof y?y.split("\n"):y,E=0|L.length,D=0,Y=0,N=!1,R="string"==typeof P?P.toLowerCase():P;switch(R){default:case"none":case!1:case 0:D=w,Y=F;break;case!0:case 1:case"left":case"center":case"right":N=!0}var X=this.getStage().getCharacter(this.fontId);if(N)if(d.embedFonts){var H=X.CodeTable,j=X.FontAdvanceTable,G=this.fontScale;for(D=0,Y=X.FontAscent*G+d.leading,C=0;C<E;)if(x=L[C],C=0|C+1,"string"!=typeof x){var Z=x.firstChild;D=this.getDomWidth(Z,H,j)}else for(var V=0|x.length,W=0;W<V;){var z=H.indexOf(x[W].charCodeAt(0));W=0|W+1,-1!==z&&(D=0|j[z]*G+D)}}else{var q=20*d.size+d.leading;if(Y=T.yMin+80,$){for(D=w,C=0;C<E;)if(x=L[C],C=0|C+1,"string"==typeof x){_=p.measureText(x);var K=this.$ceil(20*_.width);K>w&&(Y+=this.$ceil(this.$ceil(K/w)*q))}}else for(C=0;C<E;)x=L[C],C=0|C+1,"string"==typeof x&&(_=p.measureText(x),D=this.$max(D,this.$ceil(20*_.width)),Y+=q);D|=0}var J=40;switch(R){case"center":J=this.$ceil((this.$max(D,w)-this.$min(D,w))/2);break;case"right":J=this.$ceil(this.$max(D,w)-this.$min(D,w))}if(w=D,F=Y,w>0&&F>0){var Q,tt=this.isClipDepth||s,et=O,it=B;if(this._matrix){et=-O,it=-B;var ot=this.$multiplicationMatrix(u,[1,0,0,1,O,B]);f=this.$multiplicationMatrix(o.getMatrix(),ot),p.setTransform(f[0],f[1],f[2],f[3],f[4],f[5])}d.border&&!tt&&(p.beginPath(),p.rect(et-J,it,w,F),Q=this.$generateColorTransform(d.borderColor,n),g[g.length]=Q,p.strokeStyle="rgba("+Q.R+","+Q.G+","+Q.B+","+Q.A+")",p.lineWidth=this.$min(20,1/this.$min(f[0],f[3])),p.globalAlpha=1,p.fillStyle="rgba(0,0,0,0)",d.background&&(Q=this.$generateColorTransform(d.backgroundColor,n),g[g.length]=Q,p.fillStyle="rgba("+Q.R+","+Q.G+","+Q.B+","+Q.A+")"),p.fill(),p.stroke());var rt=d.textColor,nt=rt;"number"==typeof rt&&(nt=this.$intToRGBA(rt,100));var at="rgba("+(Q=this.$generateColorTransform(nt,n)).R+","+Q.G+","+Q.B+","+Q.A+")";g[g.length]=at,p.fillStyle=at;
// font type
var st="";
// italic
d.italic&&(st+="italic "),
// bold
d.bold&&(st+="bold ");var ct=st+d.size+"px "+d.font;if(g[g.length]=ct.replace(/ /g,"_"),p.font=ct,null!==this.input){var ht=this.input,lt=this.$ceil(d.size*U*this.$min(u[0],u[3]));ht.style.font=st+lt+"px "+d.font,ht.style.color="rgba("+Q.R+","+Q.G+","+Q.B+","+Q.A+")";var pt=d.onChanged;if(pt&&!ht.onchange){ht.onchange=function(t,e,i,o){return function(){i.active&&(i.setProperty("text",o.value),e.apply(i,arguments),t.executeAction())}}(o,pt,this,ht)}}y&&!tt&&(p.save(),p.beginPath(),p.rect(et-J,it,w,F-40),p.clip(),!1===this.inputActive&&(d.embedFonts?this.renderOutLine(p,X,L,f,et-J,w,at):this.renderText(p,L,f,st,at)),p.restore(),p.globalAlpha=1),g[g.length]=y.replace(/ /g,"_"),g[g.length]=this.getCharacterId();var ut=this.$cacheStore.generateKey(g.join("_"),f,n);return l.cacheKey=ut,(l.isFilter||l.isBlend)&&this.postRender(t,e,n,o,l),ut}return null},/**
 * @param ctx
 * @param fontData
 * @param splitData
 * @param matrix
 * @param offset
 * @param width
 * @param fillStyle
 */
Lt.prototype.renderOutLine=function(t,e,i,o,r,n,a){for(var s,c,h=this.variables,l=this.fontScale,p=(e.FontAscent+e.FontDescent)*l,u=h.rightMargin*l,f=h.leftMargin*l,g=h.indent*l,d=h.align,y="",v=e.CodeTable,b=e.GlyphShapeTable,m=e.FontAdvanceTable,S=e.FontAscent*l,A=S,I=h.wordWrap,C=h.multiline,x=this.getBounds(),_=this.$ceil(x.xMax-x.xMin)-f-u,T=0|i.length,k=0;k<T;){var O=i[k];k=0|k+1;var M,B=r,w=0,F=0;if("string"!=typeof O){if(!(M=O.firstChild))continue;w=0|this.getDomWidth(M,v,m),y=O.innerText,d=h.align,O.align&&(d=O.align)}else for(F=(y=O).length,s=0;s<F;)c=v.indexOf(y[s].charCodeAt(0)),s=0|s+1,-1!==c&&(w=0|m[c]*l+w);var U=B="right"===d?0|B+n-u-w-40:"center"===d?0|B+g+f+40+(n-g-f-u-w)/2:0|B+g+f+40,P=0;if("string"!=typeof O){var $={XOffset:B,YOffset:S,cacheXOffset:U,cacheYOffset:A,wordWidth:P,addXOffset:0,size:M.size,areaWidth:_,matrix:o};this.renderDomOutLine(t,M,$,a,v,m,b)}else for(s=0;s<F;s++)if(-1!==(c=v.indexOf(y[s].charCodeAt(0)))){var L=m[c]*l;I&&C&&P+L>_&&(B=U,S+=A,P=0);var E=this.$multiplicationMatrix(o,[l,0,0,l,B,S]);t.setTransform(E[0],E[1],E[2],E[3],E[4],E[5]),this.renderGlyph(b[c],t),B+=L,P+=L}S+=p}},/**
 * @param ctx
 * @param child
 * @param gridData
 * @param fillStyle
 * @param CodeTable
 * @param FontAdvanceTable
 * @param GlyphShapeTable
 */
Lt.prototype.renderDomOutLine=function(t,e,i,o,r,n,a){var s=this.variables,c=s.wordWrap,h=s.multiline,l=this.getStage().fonts[e.face],p=r,u=n,f=a,g=o;l&&(p=l.CodeTable,u=l.FontAdvanceTable,f=l.GlyphShapeTable),e.color&&(g=e.color),e.size&&(i.size=e.size);for(var d=e.childNodes,y=d.length,v=0;v<y;v++){var b=d[v];if(b instanceof HTMLFontElement)this.renderDomOutLine(t,b,i,g,p,u,f);else{var m,S=i.size/1024,A=b.nodeValue;if(!A)continue;for(var I=A.length,C=0;C<I;C++){var x=A[C],_=p.indexOf(x.charCodeAt(0));if(-1===_){if(-1===(_=r.indexOf(x.charCodeAt(0))))continue;g=o,i.addXOffset=n[_]*S,m=a}else i.addXOffset=u[_]*S,m=f;c&&h&&i.wordWidth+i.addXOffset>i.areaWidth&&(i.XOffset=i.cacheXOffset,i.YOffset+=i.cacheYOffset,i.wordWidth=0);var T=[S,0,0,S,i.XOffset,i.YOffset],k=this.$multiplicationMatrix(i.matrix,T);t.setTransform(k[0],k[1],k[2],k[3],k[4],k[5]),t.fillStyle=g,this.renderGlyph(m[_],t),i.XOffset+=i.addXOffset,i.wordWidth+=i.addXOffset}}}},/**
 * @param child
 * @param CodeTable
 * @param FontAdvanceTable
 * @returns {number}
 */
Lt.prototype.getDomWidth=function(t,e,i){var o=this.fontScale,r=0,n=this.getStage().fonts[t.face],a=e,s=i;n&&(a=n.CodeTable,s=n.FontAdvanceTable);for(var c=t.childNodes,h=c.length,l=0;l<h;){var p=c[l];if(l=0|l+1,p instanceof HTMLFontElement)r=0|r+(0|this.getDomWidth(p,a,s));else{var u=p.nodeValue;if(!u)continue;for(var f=u.length,g=0;g<f;){var d=u[g];g=0|g+1;var y=a.indexOf(d.charCodeAt(0));if(-1===y){if(-1===(y=e.indexOf(d.charCodeAt(0))))continue;r=0|i[y]*o+r}else r=0|s[y]*o+r}}}return r},/**
 * @param records
 * @param ctx
 */
Lt.prototype.renderGlyph=function(t,e){t.data||(t.data=this.$vtc.convert(t));for(var i=t.data,o=0|i.length,r=0;r<o;){var n=i[r];r=0|r+1;var a=n.cmd;e.beginPath(),a(e),e.fill()}},/**
 * @param ctx
 * @param splitData
 * @param matrix
 * @param fontType
 * @param fillStyle
 */
Lt.prototype.renderText=function(t,e,i,o,r,n){var a=this.variables,s=a.wordWrap,c=a.multiline,h=a.leading/20,l=a.rightMargin/20,p=a.leftMargin/20,u=a.indent/20,f=a.align,g=this.getBounds(),d=g.xMax/20,y=g.xMin/20,v=this.$ceil(d-y),b=[20*i[0],20*i[1],20*i[2],20*i[3],i[4],i[5]],m=this.$sqrt(b[0]*b[0]+b[1]*b[1]),S=this.$sqrt(b[2]*b[2]+b[3]*b[3]),A=this.$max(m,S);t.setTransform(A,b[1],b[2],A,b[4],b[5]);var I=y,C=g.yMin/20+2;"right"===f?(t.textAlign="end",I+=v-l-2):"center"===f?(t.textAlign="center",I+=p+u+(v-p-u-l)/2):I+=2+p+u;var x=(g=this.getBounds(b)).xMax-g.xMin-(p-l)*m;x/=A;for(var _=a.size,T=0|e.length,k=0;k<T;){var O="",M=e[k];if(k=0|k+1,""!==(O="string"!=typeof M?M.innerText:M)){var B=t.measureText(O).width;if("string"==typeof M)if(s||c)if(B>x)for(var w=0|O.length,F="",U=2*A,P=0;P<w;){var $=O[P],L=t.measureText($);U+=L.width,F+=$;var E=O[P+1];E&&(U+=(L=t.measureText(E)).width),U>x||P+1===w?(t.fillText(F,I,C,this.$ceil(U)),U=2*A,F="",C=C+h+_):E&&(U-=L.width),P=0|P+1}else t.fillText(O,I,C,B),C=C+h+_;else t.fillText(O,I,C,B),C=C+h+_;else{var D=M.firstChild,Y={startDx:I,dx:I,cloneDy:C,dy:C,color:r,fontType:o,fillStyle:r,size:_,scale:A,originSize:_,txtTotalWidth:B,areaWidth:x,joinWidth:0,joinTxt:"",offset:0,offsetArray:[]};if(0===Y.offsetArray.length&&this.offsetDomText(t,D,Y),
// reset
Y.dx=I,Y.dy=C,Y.cloneDy=C,Y.size=_,Y.joinWidth=0,Y.joinTxt="",Y.offset=0,Y.offsetArray.length>0){var N=Y.offsetArray[0];N&&(Y.dy+=N,Y.cloneDy=Y.dy)}this.renderDomText(t,D,Y),C=Y.dy}}else C+=h+_}},/**
 * @param ctx
 * @param child
 * @param gridData
 */
Lt.prototype.offsetDomText=function(t,e,i){var o=this.variables,r=o.wordWrap,n=o.multiline,a=o.leading/20;if(e.face&&(i.face=e.face),e.size){var s=0|e.size,c=i.originSize-s;if(c)if(i.dy+=c,c>0)i.dy-=4;else{var h=i.offsetArray,l=i.offset,p=h[l];h[l]=p?this.$max(p,~c):~c,i.dy+=6}i.size=s}for(var u=e.childNodes,f=u.length,g=0;g<f;g++){var d=u[g];if(d instanceof HTMLFontElement)this.offsetDomText(t,d,i);else{var y=d.nodeValue;if(r&&n)if(i.txtTotalWidth>i.areaWidth)for(var v=y.length,b=0;b<v;b++){var m=t.measureText(y[b]);i.joinWidth+=m.width,i.joinTxt+=y[b];var S=i.joinWidth>i.areaWidth;(S||b+1===v)&&(i.dx+m.width>i.areaWidth&&(i.dx=i.startDx,i.dy+=a+i.size,i.cloneDy=i.dy,i.joinWidth=2*i.scale,S=!1,i.offset++),i.joinTxt="",S&&(i.dx=i.startDx,i.joinWidth=22*i.scale,i.dy+=a+i.size,i.cloneDy=i.dy,i.offset++))}else i.dy+=a+i.size,i.cloneDy=i.dy,i.offset++;else i.dy+=a+i.size,i.cloneDy=i.dy,i.offset++;var A=t.measureText(y);i.dx+=A.width,i.size=i.originSize,i.dy=i.cloneDy}}},/**
 * @param ctx
 * @param child
 * @param gridData
 */
Lt.prototype.renderDomText=function(t,e,i){var o=this.variables,r=o.wordWrap,n=o.multiline,a=o.leading/20;if(e.face&&(i.face=e.face),e.color&&(i.color=e.color),e.size){var s=0|e.size,c=0|i.originSize-s;c&&(i.dy+=c,c>0?i.dy-=4:i.dy+=8),i.size=s}for(var h,l=e.childNodes,p=l.length,u=0;u<p;u++){var f=l[u];if(f instanceof HTMLFontElement)this.renderDomText(t,f,i);else{t.fillStyle=i.color,t.font=i.fontType+i.size+"px "+i.face;for(var g=f.nodeValue.split("\n"),d=g.length,y=0;y<d;y++){i.dx=i.startDx;var v=g[y];if(r&&n)if(i.txtTotalWidth>i.areaWidth)for(var b=v.length,m=0;m<b;m++){var S=t.measureText(v[m]);i.joinWidth+=S.width,i.joinTxt+=v[m];var A=i.joinWidth>i.areaWidth;(A||m+1===b)&&(i.dx+S.width>i.areaWidth&&(A=0,i.joinWidth=i.size,i.dx=i.startDx,i.offset++,i.dy+=a+i.size,i.offsetArray.length>0&&(h=i.offsetArray[i.offset])&&(i.dy+=h),i.cloneDy=i.dy),t.fillText(i.joinTxt,i.dx,i.dy,_ceil(i.joinWidth)),i.joinTxt="",A&&(i.dx=i.startDx,i.joinWidth=i.size,i.offset++,i.dy+=a+i.size,i.offsetArray.length>0&&(h=i.offsetArray[i.offset])&&(i.dy+=h),i.cloneDy=i.dy))}else t.fillText(v,i.dx,i.dy,_ceil(i.txtTotalWidth)),i.offset++,i.dy+=a+i.size,i.offsetArray.length>0&&(h=i.offsetArray[i.offset])&&(i.dy+=h),i.cloneDy=i.dy;else t.fillText(v,i.dx,i.dy,_ceil(i.txtTotalWidth)),i.offset++,i.dy+=a+i.size,i.offsetArray.length>0&&(h=i.offsetArray[i.offset])&&(i.dy+=h),i.cloneDy=i.dy;var I=t.measureText(v);i.dx+=I.width,i.color=i.fillStyle,i.size=i.originSize,i.dy=i.cloneDy}}}},/**
 * @param stage
 * @param clipEvent
 */
Lt.prototype.putFrame=function(t,e){this.active=!0,!1===this.inputActive&&this.dispatchEvent(e,t)},/**
 * @param ctx
 * @param matrix
 * @param stage
 * @param x
 * @param y
 * @returns {boolean}
 */
Lt.prototype.renderHitTest=function(t,e,i,o,r){var n=this.getBounds(),a=n.xMax,s=n.xMin,c=n.yMax,h=n.yMin,l=this.$ceil(a-s),p=this.$ceil(c-h),u=this.$multiplicationMatrix(e,this.getMatrix()),f=this.$multiplicationMatrix(i.getMatrix(),u);if(t.setTransform(f[0],f[1],f[2],f[3],f[4],f[5]),this._matrix){s=-s,h=-h;var g=this.$multiplicationMatrix(u,[1,0,0,1,s,h]),d=this.$multiplicationMatrix(i.getMatrix(),g);t.setTransform(d[0],d[1],d[2],d[3],d[4],d[5])}return t.beginPath(),t.rect(s,h,l,p),t.isPointInPath(o,r)},
// dummy
Lt.prototype.initFrame=function(){},Lt.prototype.addActions=function(){},Lt.prototype.getTags=function(){};/**
 * @constructor
 */
var Et=function(){this.align="left",this.font="'HiraKakuProN-W3', 'sans-serif'",this.size=8,this.color={R:0,G:0,B:0,A:1},this.bold=0,this.italic=0,this.underline=0,this.bullet=0,this.kerning=0,this.blockIndent=0,this.indent=0,this.leading=80,this.leftMargin=0,this.rightMargin=0,this.letterSpacing=0,this.tabStops=[],this.url=null,this.target=null},Dt=function(){this.color=null,this.matrix=null};/**
 * @returns {*}
 */
Dt.prototype.getColor=function(){return this.color},/**
 * @param color
 */
Dt.prototype.setColor=function(t){this.color=t},/**
 * @returns {*}
 */
Dt.prototype.getMatrix=function(){return this.matrix},/**
 * @param matrix
 */
Dt.prototype.setMatrix=function(t){this.matrix=t},/**
 * @returns {Array}
 */
Dt.prototype.getData=function(){return this.data},/**
 * @param data
 */
Dt.prototype.setData=function(t){this.data=t};/**
 * @constructor
 */
var Yt=function(){this.charCount=0};/**
 * @param beginIndex
 * @param textToFind
 * @param caseSensitive
 */
Yt.prototype.findText=function(t,e,i){},/**
 * @param beginIndex
 * @param endIndex
 */
Yt.prototype.getSelected=function(t,e){},/**
 * @param includeLineEndings
 */
Yt.prototype.getSelectedText=function(t){},Yt.prototype.getText=function(t,e,i){},/**
 * @param beginIndex
 * @param endIndex
 */
Yt.prototype.getTextRunInfo=function(t,e){},/**
 * @param x
 * @param y
 * @param maxDistance
 */
Yt.prototype.hitTestTextNearPos=function(t,e,i){},/**
 * @param hexColor
 */
Yt.prototype.setSelectColor=function(t){},/**
 * @param beginIndex
 * @param endIndex
 * @param select
 */
Yt.prototype.setSelected=function(t,e,i){};/**
 * @constructor
 */
var Nt=function(){this.variables={},this.sounds=[],this.volume=100,this.pan=0,this.transform={ll:100,lr:100,rl:100,rr:100},this.isStreamin=!1,this.movieClip=null};/**
 * properties
 */
Object.defineProperties(Nt.prototype,{onLoad:{get:function(){return this.getProperty("onLoad")},set:function(t){this.setProperty("onLoad",t)}},onSoundComplete:{get:function(){return this.getProperty("onSoundComplete")},set:function(t){this.setProperty("onSoundComplete",t)}}}),/**
 * @param name
 * @returns {*}
 */
Nt.prototype.getProperty=function(t){return this.variables[t]},/**
 * @param name
 * @param value
 */
Nt.prototype.setProperty=function(t,e){this.variables[String(t)]=e},/**
 * @param currentTime
 * @param loopCount
 */
Nt.prototype.start=function(t,e){var i,o=this.sounds;for(var r in o)o.hasOwnProperty(r)&&((i=o[r]).load(),t&&i.addEventListener("canplay",function(t,e){return function(){t.currentTime=e}}(i,t)),"number"==typeof e&&e>0&&(i.loopCount=e,i.addEventListener("ended",function(t,e){return function(){var i=e.volume;t.loopCount--,t.loopCount>0&&(t.volume=i/100,t.currentTime=0,t.play());var o=e.onSoundComplete;o&&o.apply(e,[!0])}}(i,this))),i.play())},/**
 * stop
 */
Nt.prototype.stop=function(t){var e,i=this.sounds;if(t)(e=i[t])&&e.pause();else for(var o in i)i.hasOwnProperty(o)&&(e=i[o]).pause()},/**
 * @param url
 * @param bool
 */
Nt.prototype.loadSound=function(t,e){this.isStreamin=e;var i=this.sounds,o=this.$document.createElement("audio");o.src=t,i[0]=o;var r=function(t,e){return function(){t.load(),t.preload="auto",t.autoplay=!1,t.loop=!1;var i=e.onLoad;"function"==typeof i&&i.apply(e,[!0])}}(o,this);o.addEventListener("canplaythrough",r);var n=function(t,e){return function(){var t=e.onLoad;"function"==typeof t&&t.apply(e,[!1])}}(0,this);o.addEventListener("error",n)},/**
 * @param id
 */
Nt.prototype.attachSound=function(t){var e=this.sounds;if(!(t in e)){var i=this.movieClip.getStage(),o=i.exportAssets;if(t in o){var r=o[t],n=i.sounds[r];if(n){var a=this.$document.createElement("audio");a.onload=function(){this.load(),this.preload="auto",this.autoplay=!1,this.loop=!1},a.src=n.base64,e[t]=a}}}},/**
 *
 * @returns {number}
 */
Nt.prototype.getVolume=function(){return this.volume},/**
 *
 * @param volume
 */
Nt.prototype.setVolume=function(t){var e=this.sounds;this.volume=t;for(var i in e)e.hasOwnProperty(i)&&(e[i].volume=t/100)},/**
 * @returns {number|*}
 */
Nt.prototype.getPan=function(){return this.pan},/**
 * @param pan
 */
Nt.prototype.setPan=function(t){this.pan=t},/**
 * @param object
 */
Nt.prototype.setTransform=function(t){var e=this.transform;for(var i in t)if(t.hasOwnProperty(i))switch(i){case"ll":case"lr":case"rl":case"rr":e[i]=t[i]}},/**
 * @returns {{ll: number, lr: number, rl: number, rr: number}|*}
 */
Nt.prototype.getTransform=function(){return this.transform},/**
 * @returns {number}
 */
Nt.prototype.getBytesLoaded=function(){return 1},/**
 * @returns {number}
 */
Nt.prototype.getBytesTotal=function(){return 1};/**
 * @constructor
 */
var Rt=function(){this._leftToLeft=0,this._leftToRight=1,this._pan=0,this._rightToLeft=0,this._rightToRight=1,this._volume=1};/**
 * properties
 */
Object.defineProperties(Rt.prototype,{leftToLeft:{get:function(){return this.getLeftToLeft()},set:function(t){this.setLeftToLeft(t)}},leftToRight:{get:function(){return this.getLeftToRight()},set:function(t){this.setLeftToRight(t)}},pan:{get:function(){return this.getPan()},set:function(t){this.setPan(t)}},rightToLeft:{get:function(){return this.getRightToLeft()},set:function(t){this.setRightToLeft(t)}},rightToRight:{get:function(){return this.getRightToRight()},set:function(t){this.setRightToRight(t)}},volume:{get:function(){return this.getVolume()},set:function(t){this.setVolume(t)}}}),/**
 * @returns {number}
 */
Rt.prototype.getLeftToLeft=function(){return this._leftToLeft},/**
 * @param leftToLeft
 */
Rt.prototype.setLeftToLeft=function(t){this._leftToLeft=0|t},/**
 * @returns {number}
 */
Rt.prototype.getLeftToRight=function(){return this._leftToRight},/**
 * @param leftToRight
 */
Rt.prototype.setLeftToRight=function(t){this._leftToRight=0|t},/**
 * @returns {number}
 */
Rt.prototype.getPan=function(){return this._pan},/**
 * @param pan
 */
Rt.prototype.setPan=function(t){this._pan=0|t},/**
 * @returns {number}
 */
Rt.prototype.getRightToLeft=function(){return this._rightToLeft},/**
 * @param rightToLeft
 */
Rt.prototype.setRightToLeft=function(t){this._rightToLeft=0|t},/**
 * @returns {number}
 */
Rt.prototype.getRightToRight=function(){return this._rightToRight},/**
 * @param rightToRight
 */
Rt.prototype.setRightToRight=function(t){this._rightToRight=0|t},/**
 * @returns {number}
 */
Rt.prototype.getVolume=function(){return this._volume},/**
 * @param volume
 */
Rt.prototype.setVolume=function(t){this._volume=0|t},/**
 * @param vol
 * @param panning
 */
Rt.prototype.SoundTransform=function(t,e){this.volume=0|t,this.pan=0|e};/**
 * @constructor
 */
var Xt=function(t){this._url=t,this._authenticate=!0,this._cacheResponse=!0,this._contentType="_application/x-www-form-urlencoded",this._data=null};/**
 * properties
 */
Object.defineProperties(d.prototype,{url:{get:function(){return this.getURL()},set:function(t){this.setURL(t)}},contentType:{get:function(){return this.getContentType()},set:function(t){this.setContentType(t)}},authenticate:{get:function(){return this.getAuthenticate()},set:function(t){this.setAuthenticate(t)}}}),/**
 * @returns {string}
 */
Xt.prototype.getURL=function(){return this._url},/**
 *  @param url
 */
Xt.prototype.setURL=function(t){this._url=t},/**
 * @returns {string}
 */
Xt.prototype.getContentType=function(){return this._contentType},/**
 * @param contentType
 */
Xt.prototype.setContentType=function(t){this._contentType=t},/**
 * @returns {boolean}
 */
Xt.prototype.getAuthenticate=function(){return this._authenticate},/**
 * @param authenticate
 */
Xt.prototype.setAuthenticate=function(t){this._authenticate=t};/**
 * @constructor
 */
var Ht=function(){};Ht.LANDSCAPE="landscape",Ht.PORTRAIT="portrait",(/**
 * extends
 */
Ht.prototype=Object.create(u.prototype)).constructor=Ht;/**
 * @param source
 * @constructor
 */
var jt=function(){};jt.ELEMENT_NODE=1,jt.TEXT_NODE=3,(/**
 * extends
 */
jt.prototype=Object.create(u.prototype)).constructor=jt;/**
 * @param data
 * @param constantPool
 * @param register
 * @param initAction
 * @constructor
 */
var Gt=function(t,e,i,o){this.cache=[],this.params=[],this.constantPool=e||[],this.register=i||[],this.variables={},this.initAction=!!o,this.scope=null,this.parent=null,this.arg=null,this.version=7,this.superClass=null,t.length&&this.initialize(t),this.initParam()};/**
 * util
 */
Gt.prototype=Object.create(i.prototype),Gt.prototype.constructor=Gt,/**
 * reset
 */
Gt.prototype.reset=function(){this.arg=null,this.variables={},this.initParam()},/**
 * initParam
 */
Gt.prototype.initParam=function(){for(var t=this.register,e=[],i=0|t.length,o=0;o<i;){var r=t[o];e[r.register]=null===r.name?r.value:r.name,o=0|o+1}this.params=e},/**
 * @param values
 */
Gt.prototype.initVariable=function(t){this.arg=t;for(var e=this.register,i=0|e.length,o=this.variables,r=0,n=0;n<i;){var a=e[n];n=0|n+1,null!==a.name&&(o[a.name]=t[r],r=0|r+1)}this.variables=o,this.initParam()},/**
 * @returns {{}}
 */
Gt.prototype.getSuperClass=function(){var t=this.superClass;if(!t){var e=this.parent;e&&(t=e.getSuperClass())}return t},/**
 * @param name
 * @param value
 */
Gt.prototype.setVariable=function(t,e){var i=!1;if(t in this.variables&&(this.variables[t]=e,i=!0),!i){var o=this.parent;o&&(i=o.setVariable(t,e))}return i},/**
 * @param name
 * @returns {*}
 */
Gt.prototype.getVariable=function(t){var e,i;switch(t){case"this":e=this.variables.this;break;case"arguments":e=this.arg;break;default:void 0===(e=this.variables[t])&&(i=this.parent)&&(e=i.getVariable(t))}return e},/**
 * @param value
 * @returns {string}
 */
Gt.prototype.valueToString=function(t){return"string"!=typeof t&&(t+=""),t},/**
 * @param str
 * @param mc
 * @returns {*}
 */
Gt.prototype.stringToObject=function(t,e){var i=this.getVariable(t);return void 0===i&&(i=e.getProperty(t)),i},/**
 * @param data
 */
Gt.prototype.initialize=function(t){var e,i,o,r,n,a=!1,s={},c=0,h=0,l=[],p=[],u=0,f=new zt;f.setData(t);var g=new zt,d=t.length;for(this.initParam();f.byte_offset<d;){var y=f.byte_offset;if(s={},u>0&&u===f.byte_offset)u=0,s.actionCode=148,s.Size=0,l[l.length]=s;else{var v=f.getUI8();s.actionCode=v;var b=null;switch(v>=128&&(n=f.getUI16(),b=f.getData(n),g.setData(b),g.setOffset(0,0)),v){
// GotoFrame
case 129:s.frame=0|g.getUI16()+1;break;
// WaitForFrame
case 138:s.frame=g.getUI16(),s.skipCount=g.getUI8();break;
// SetTarget
case 139:s.targetName=g.getDataUntil("\0");break;
// GoToLabel
case 140:s.label=g.getDataUntil("\0");break;case 131:var m=b.length-1,S=[[]];for(h=0,c=0;c<m;){var A=this.$fromCharCode(b[c]);0!==b[c=0|c+1]?S[h]+=A:S[h=0|h+1]=[]}var I=S[0];if("string"==typeof I){var C=I.split("?");if(2 in C){I=C[0],I+="?"+C[1];var x=0|C.length;for(c=2;c<x;)I+="&"+C[c],c=0|c+1}}s.url=I,s.target=S[1];break;
// Push
case 150:for(o=[];g.byte_offset<n;)switch(g.getUI8()){case 0:// String
o[o.length]=String(g.getDataUntil("\0"));break;case 1:// Float
o[o.length]=g.getFloat32();break;case 2:// null
o[o.length]=null;break;case 3:// undefined
o[o.length]=void 0;break;case 4:// RegisterNumber
o[o.length]={key:g.getUI8()};break;case 5:// Boolean
o[o.length]=!!g.getUI8();break;case 6:// Double
o[o.length]=g.getFloat64();break;case 7:// Integer
o[o.length]=g.getUI32();break;case 8:// Constant8
o[o.length]=this.constantPool[g.getUI8()];break;case 9:// Constant16
o[o.length]=this.constantPool[g.getUI16()]}s.values=o;break;
// If
case 157:
// Jump
case 153:s.offset=f.byte_offset+f.toSI16LE(b);break;
// GetURL2
case 154:s.LoadVariablesFlag=g.getUIBits(1),// 0=none, 1=LoadVariables
s.LoadTargetFlag=g.getUIBits(1),// 0=web,  1=Sprite
g.getUIBits(4),// Reserved
s.SendVarsMethod=g.getUIBits(2);// 0=NONE, 1=GET, 2=POST
break;
// GoToFrame2
case 159:g.getUIBits(6),// Reserved
s.SceneBiasFlag=g.getUIBit(),s.PlayFlag=g.getUIBit(),// 0=stop, 1=play
1===s.SceneBiasFlag&&(s.SceneBias=g.getUI16());break;
// WaitForFrame2
case 141:s.skipCount=g.getUI8();break;
// ConstantPool
case 136:var _=g.getUI16(),T=[];if(_>0)for(;_;)_=0|_-1,T[T.length]=g.getDataUntil("\0");s.constantPool=T,this.constantPool=T;break;
// ActionDefineFunction
case 155:if(s.FunctionName=g.getDataUntil("\0"),r=g.getUI16(),i=[],r>0)for(h=1;r;)r=0|r-1,i[i.length]={register:h,name:g.getDataUntil("\0"),value:null};e=f.getData(g.getUI16()),s.ActionScript=new Gt(e,this.constantPool,i,this.initAction);break;
// ActionWith
case 148:s.Size=g.getUI16(),u=s.Size+f.byte_offset;break;
// ActionStoreRegister
case 135:s.RegisterNumber=g.getUI8();break;
// SWF 7 ***********************************
// ActionDefineFunction2
case 142:i=[],o=[],s.FunctionName=g.getDataUntil("\0"),r=g.getUI16();var k=g.getUI8();for(s.PreloadParentFlag=g.getUIBits(1),s.PreloadRootFlag=g.getUIBits(1),s.SuppressSuperFlag=g.getUIBits(1),s.PreloadSuperFlag=g.getUIBits(1),s.SuppressArgumentsFlag=g.getUIBits(1),s.PreloadArgumentsFlag=g.getUIBits(1),s.SuppressThisFlag=g.getUIBits(1),s.PreloadThisFlag=g.getUIBits(1),g.getUIBits(7),// Reserved
s.PreloadGlobalFlag=g.getUIBits(1),s.PreloadThisFlag&&(o[o.length]="this"),s.PreloadArgumentsFlag&&(o[o.length]="arguments"),s.PreloadSuperFlag&&(o[o.length]="super"),s.PreloadRootFlag&&(o[o.length]="_root"),s.PreloadParentFlag&&(o[o.length]="_parent"),s.PreloadGlobalFlag&&(o[o.length]="_global"),h=1;h<k;){var O=h-1;O in o?(i[i.length]={register:h,name:null,value:o[O]},h=0|h+1):h=0|h+1}if(r>0)for(;r;){r=0|r-1;var M=g.getUI8(),B=g.getDataUntil("\0");i[i.length]={register:M,name:B,value:null}}e=f.getData(g.getUI16()),s.ActionScript=new Gt(e,this.constantPool,i,this.initAction);break;
// ActionTry
case 143:g.getUIBits(5);// Reserved
var w=g.getUIBits(1);s.FinallyBlockFlag=g.getUIBits(1),s.CatchBlockFlag=g.getUIBits(1);var F,U=g.getUI16(),P=g.getUI16(),$=g.getUI16();F=w?g.getUI8():g.getDataUntil("\0"),c=0;var L=[];if(U)for(;U;)L[L.length]=f.getUI8(),U=0|U-1;if(s.try=function(t){var e=new Gt(L);return function(){return e.reset(),e.variables.this=this,e.execute(this)}}(),s.CatchBlockFlag){var E=[];if(P)for(;P;)E[E.length]=f.getUI8(),P=0|P-1;s.catch=function(t,e){var i=new Gt(E);return function(){return i.reset(),i.variables.this=this,i.variables[e]=arguments[0],i.execute(this)}}(0,F)}if(s.FinallyBlockFlag){var D=[];if($)for(;$;)D[D.length]=f.getUI8(),$=0|$-1;s.finally=function(t){var e=new Gt(D);return function(){return e.reset(),e.variables.this=this,e.execute(this)}}()}break;case 0:a=!0}if(p[y]=l.length,l[l.length]=s,a)break}}
// If and Jump
var Y=0|l.length;for(c=0;c<Y;)switch(s=l[c],c=0|c+1,s.actionCode){case 157:case 153:var N=p[s.offset];s.offset=void 0!==N?0|N-1:0|Y-1}this.cache=l},/**
 * @param value
 * @returns {*}
 */
Gt.prototype.calc=function(t){var e;switch(typeof t){case"boolean":e=t?1:0;break;case"object":null===t?e=0:t instanceof Array?e=t.length:t instanceof Object&&(e=1);break;default:e=+t}return this.$isNaN(e)&&(e=0),e},/**
 * @param value
 * @returns {*}
 */
Gt.prototype.logicValue=function(t){var e;switch(typeof t){case"boolean":e=t?1:0;break;case"object":null===t?e=0:t instanceof Array?e=t.length:t instanceof Object&&(e=1);break;case"string":e=""===t?0:1;break;case"function":e=1;break;default:e=+t,this.$isNaN(e)&&(e=0)}return e},/**
 * @param stack
 * @returns {Number}
 */
Gt.prototype.operationValue=function(t){var e=+t.pop();return this.$isNaN(e)&&(e=0),e},/**
 * @param mc
 * @returns {*}
 */
Gt.prototype.execute=function(t){var e=this.scope,i=e instanceof bt?e:t;if(i.active){var o=i.getStage();o&&(this.version=o.getVersion());for(var r=[],n=this.cache,a=0|n.length,s=0;s<a;){
// if (!(cIdx in cache)) {
//     cIdx = 0 | cIdx + 1;
//     continue;
// }
var c=n[s],h=0|c.actionCode;if(0===h)break;switch(h){
// ********************************************
// SWF 3
// ********************************************
case 129:this.ActionGotoFrame(i,c.frame);break;case 4:this.ActionNextFrame(i);break;case 5:this.ActionPreviousFrame(i);break;case 6:this.ActionPlay(i);break;case 7:this.ActionStop(i);break;case 8:// ActionToggleQuality
case 138:// ActionWaitForFrame
break;case 9:this.ActionStopSounds(i);break;case 139:i=this.ActionSetTarget(i,t,c.targetName);break;case 140:this.ActionGoToLabel(i,c.label);break;case 131:this.ActionGetURL(i,c.url,c.target);break;
// ********************************************
// SWF 4
// ********************************************
case 10:// ActionAdd
this.ActionOperation(r,0);break;case 11:// ActionSubtract
this.ActionOperation(r,1);break;case 12:// ActionMultiply
this.ActionOperation(r,2);break;case 13:// ActionDivide
this.ActionOperation(r,3);break;case 14:this.ActionEquals(r);break;case 15:this.ActionLess(r);break;case 16:this.ActionAnd(r);break;case 17:this.ActionOr(r);break;case 18:this.ActionNot(r);break;case 19:this.ActionStringEquals(r);break;case 20:// ActionStringLength
case 49:// ActionMBStringLength
this.ActionStringLength(r);break;case 33:this.ActionStringAdd(r);break;case 21:// ActionStringExtract
case 53:// ActionMBStringExtract
this.ActionStringExtract(r);break;case 41:this.ActionStringLess(r);break;case 23:// ActionPop
r.pop();break;case 150:this.ActionPush(r,i,c.values);break;case 51:// ActionAsciiToChar
case 55:// ActionMBAsciiToChar
this.ActionAsciiToChar(r);break;case 54:// ActionMBCharToAscii
case 50:// ActionCharToAscii
this.ActionCharToAscii(r);break;case 24:this.ActionToInteger(r);break;case 158:this.ActionCall(r,i);break;case 157:s=0|this.ActionIf(r,c.offset,s);break;case 153:// ActionJump
s=0|c.offset;break;case 28:this.ActionGetVariable(r,i);break;case 29:this.ActionSetVariable(r,i);break;case 154:this.ActionGetURL2(r,c,i);break;case 34:this.ActionGetProperty(r,i);break;case 159:this.ActionGoToFrame2(r,c,i);break;case 32:i=this.ActionSetTarget2(r,i,t);break;case 35:this.ActionSetProperty(r,i);break;case 39:this.ActionStartDrag(r,i);break;case 141:// ActionWaitForFrame2
r.pop();break;case 36:this.ActionCloneSprite(r,i);break;case 37:this.ActionRemoveSprite(r,i);break;case 40:this.ActionEndDrag(i);break;case 52:this.ActionGetTime(r);break;case 48:this.ActionRandomNumber(r);break;case 38:this.ActionTrace(r);break;case 0:break;case 45:this.ActionFsCommand2(r,i);break;
// ********************************************
// SWF 5
// ********************************************
case 82:this.ActionCallMethod(r,i);break;case 136:// ActionConstantPool
this.constantPool=c.constantPool;break;case 61:this.ActionCallFunction(r,i);break;case 155:this.ActionDefineFunction(r,c,i);break;case 60:this.ActionDefineLocal(r,i);break;case 65:this.ActionDefineLocal2(r,i);break;case 58:this.ActionDelete(r,i);break;case 59:this.ActionDelete2(r,i);break;case 70:this.ActionEnumerate(r,i);break;case 73:this.ActionEquals2(r);break;case 78:this.ActionGetMember(r,i);break;case 66:this.ActionInitArray(r);break;case 67:this.ActionInitObject(r);break;case 83:this.ActionNewMethod(r,i);break;case 64:this.ActionNewObject(r,i);break;case 79:this.ActionSetMember(r,i);break;case 69:this.ActionTargetPath(r);break;case 148:i=this.ActionWith(r,c.Size,t);break;case 74:this.ActionToNumber(r);break;case 75:this.ActionToString(r);break;case 68:this.ActionTypeOf(r);break;case 71:this.ActionAdd2(r);break;case 72:this.ActionLess2(r);break;case 63:this.ActionModulo(r);break;case 96:this.ActionBitAnd(r);break;case 99:this.ActionBitLShift(r);break;case 97:this.ActionBitOr(r);break;case 100:this.ActionBitRShift(r);break;case 101:this.ActionBitURShift(r);break;case 98:this.ActionBitXor(r);break;case 81:this.ActionDecrement(r);break;case 80:this.ActionIncrement(r);break;case 76:this.ActionPushDuplicate(r);break;case 62:// ActionReturn
return r.pop();case 77:this.ActionStackSwap(r);break;case 135:this.ActionStoreRegister(r,c.RegisterNumber);break;
// ********************************************
// SWF 6
// ********************************************
case 84:this.ActionInstanceOf(r);break;case 85:this.ActionEnumerate(r,i);break;case 102:this.ActionStrictEquals(r);break;case 103:// ActionGreater
case 104:// ActionStringGreater
this.ActionGreater(r);break;
// ********************************************
// SWF 7
// ********************************************
case 142:// ActionDefineFunction2
this.ActionDefineFunction(r,c,i);break;case 105:this.ActionExtends(r);break;case 43:this.ActionCastOp(r);break;case 44:this.ActionImplementsOp(r);break;case 143:this.ActionTry(c,i);break;case 42:this.ActionThrow(r);break;default:console.log("[ActionScript Error] Code: "+h)}s=0|s+1}}},/**
 * @type {{}}
 */
Gt.prototype.methods={gotoandstop:"gotoAndStop",gotoandplay:"gotoAndPlay",play:"play",stop:"stop",duplicatemovieclip:"duplicateMovieClip",getproperty:"getProperty",removemovieclip:"removeMovieClip",setproperty:"setProperty",startdrag:"startDrag",stopdrag:"stopDrag",targetpath:"targetPath",updateafterevent:"updateAfterEvent",nextframe:"nextFrame",nextscene:"nextScene",prevframe:"prevFrame",prevscene:"prevScene",stopallsounds:"stopAllSounds",setmask:"setMask",geturl:"getURL",loadmovie:"loadMovie",loadmovienum:"loadMovieNum",loadvariables:"loadVariables",loadvariablesnum:"loadVariablesNum",unloadmovie:"unloadMovie",unloadmovienum:"unloadMovieNum",swapdepths:"swapDepths",getinstanceatdepth:"getInstanceAtDepth",attachmovie:"attachMovie",attachaudio:"attachAudio",attachbitmap:"attachBitmap",getnexthighestdepth:"getNextHighestDepth",getbytesloaded:"getBytesLoaded",getbytestotal:"getBytesTotal",assetpropflags:"ASSetPropFlags",linestyle:"lineStyle",linegradientstyle:"lineGradientStyle",beginfill:"beginFill",begingradientfill:"beginGradientFill",beginbitmapfill:"beginBitmapFill",clear:"clear",moveto:"moveTo",lineto:"lineTo",curveto:"curveTo",endfill:"endFill",hittest:"hitTest",getdepth:"getDepth",createemptymovieclip:"createEmptyMovieClip",createtextfield:"createTextField",getbounds:"getBounds",getrect:"getRect",getswfversion:"getSWFVersion",gettextsnapshot:"getTextSnapshot",globaltolocal:"globalToLocal",localtoglobal:"localToGlobal"},/**
 * @param method
 * @returns {*}
 */
Gt.prototype.checkMethod=function(t){if(!t||"string"!=typeof t)return t;var e=t.toLowerCase();return this.methods[e]||null},/**
 * @param mc
 * @param frame
 */
Gt.prototype.ActionGotoFrame=function(t,e){void 0!==t&&(t.stop(),t.setNextFrame(e))},/**
 * @param mc
 */
Gt.prototype.ActionNextFrame=function(t){void 0!==t&&t.nextFrame()},/**
 * @param mc
 */
Gt.prototype.ActionPreviousFrame=function(t){void 0!==t&&t.prevFrame()},/**
 * @param mc
 */
Gt.prototype.ActionPlay=function(t){void 0!==t&&t.play()},/**
 * @param mc
 */
Gt.prototype.ActionStop=function(t){void 0!==t&&t.stop()},/**
 * @param mc
 */
Gt.prototype.ActionStopSounds=function(t){void 0!==t&&t.stopAllSounds()},/**
 * @param movieClip
 * @param mc
 * @param target
 * @returns {*}
 */
Gt.prototype.ActionSetTarget=function(t,e,i){if(""!==i){var o=t;return o||(o=e),o.getDisplayObject(i)}return e.active?e:void 0},/**
 * @param mc
 * @param label
 */
Gt.prototype.ActionGoToLabel=function(t,e){if(void 0!==t){var i=t.getLabel(e);t.stop(),"number"==typeof i&&i&&t.setNextFrame(i)}},/**
 * @param mc
 * @param url
 * @param target
 */
Gt.prototype.ActionGetURL=function(t,e,i){void 0!==t&&t.getURL(e,i)},/**
 * @param stack
 * @param operation
 */
Gt.prototype.ActionOperation=function(t,e){var i,o=0|this.operationValue(t),r=0|this.operationValue(t);switch(e){case 0:i=r+o;break;case 1:i=r-o;break;case 2:i=r*o;break;case 3:i=r/o}t[t.length]=i},/**
 * @param stack
 */
Gt.prototype.ActionEquals=function(t){var e=this.calc(t.pop()),i=this.calc(t.pop());this.version>4?t[t.length]=e===i:t[t.length]=e===i?1:0},/**
 * @param stack
 */
Gt.prototype.ActionLess=function(t){var e=this.calc(t.pop()),i=this.calc(t.pop());this.version>4?t[t.length]=i<e:t[t.length]=i<e?1:0},/**
 * @param stack
 */
Gt.prototype.ActionAnd=function(t){var e=t.pop(),i=t.pop();this.version>4?(e=this.logicValue(e),i=this.logicValue(i),t[t.length]=0!==e&&0!==i):(e=this.calc(e),i=this.calc(i),t[t.length]=0!==e&&0!==i?1:0)},/**
 * @param stack
 */
Gt.prototype.ActionOr=function(t){var e=t.pop(),i=t.pop();this.version>4?(e=this.logicValue(e),i=this.logicValue(i),t[t.length]=0!==e||0!==i):(e=this.calc(e),i=this.calc(i),t[t.length]=0!==e||0!==i?1:0)},/**
 * @param stack
 */
Gt.prototype.ActionNot=function(t){var e=t.pop();this.version>4?(e=this.logicValue(e),t[t.length]=0===e):(e=this.calc(e),t[t.length]=0===e?1:0)},/**
 * @param stack
 */
Gt.prototype.ActionStringEquals=function(t){var e=t.pop(),i=t.pop();e instanceof bt?e=e.getTarget():e+="",i instanceof bt?i=i.getTarget():i+="",this.version>4?t[t.length]=i===e:t[t.length]=i===e?1:0},/**
 * @param stack
 */
Gt.prototype.ActionStringLength=function(t){for(var e=t.pop(),i=(e=this.valueToString(e)).length,o=0,r=0;r<i;){var n=0|e.charCodeAt(r);r=r+1|0,o=o+1|0,255>n||(
// jp string
o=o+1|0)}t[t.length]=o},/**
 * @param stack
 */
Gt.prototype.ActionStringAdd=function(t){var e=t.pop(),i=t.pop();null!==e&&void 0!==e||(e=""),null!==i&&void 0!==i||(i=""),t[t.length]=i+e},/**
 * @param stack
 */
Gt.prototype.ActionStringExtract=function(t){var e=t.pop(),i=t.pop(),o=t.pop();o=this.valueToString(o),(i-=1)<0&&(i=0),t[t.length]=e<0?o.substr(i):o.substr(i,e)},/**
 * @param stack
 */
Gt.prototype.ActionStringLess=function(t){var e=t.pop(),i=t.pop();this.version>4?t[t.length]=i<e:t[t.length]=i<e?1:0},/**
 * @param stack
 * @param mc
 * @param values
 */
Gt.prototype.ActionPush=function(t,e,i){for(var o=0|i.length,r=this.params,n=0;n<o;){var a=i[n];if(n=0|n+1,this.version>4&&a instanceof Object){var s=a.key;if(a=void 0,s in r){var c=r[s];"string"==typeof c?void 0!==(a=this.getVariable(c))||c in this.variables||(a=c):a=c}}t[t.length]=a}},/**
 * @param stack
 */
Gt.prototype.ActionAsciiToChar=function(t){var e=t.pop();t[t.length]=this.$fromCharCode(e)},/**
 * @param stack
 */
Gt.prototype.ActionCharToAscii=function(t){var e=t.pop();e=this.valueToString(e),t[t.length]=e.charCodeAt(0)},/**
 * @param stack
 */
Gt.prototype.ActionToInteger=function(t){var e=t.pop();t[t.length]=0|e},/**
 * @param stack
 * @param mc
 */
Gt.prototype.ActionCall=function(t,e){var i=t.pop();if(void 0!==e){var o,r=(i=this.valueToString(i)).split(":"),n=r[0],a=e;r.length>1&&(a=e.getDisplayObject(r[0]),n=r[1]),void 0!==a&&(o="string"==typeof n?a.getLabel(n):n,a.executeActions(o))}},/**
 * @param stack
 * @param offset
 * @param index
 * @returns {*}
 */
Gt.prototype.ActionIf=function(t,e,i){var o=t.pop();switch(typeof o){case"boolean":break;case"string":this.$isNaN(o)||(o=+o)}return o?e:i},/**
 * @param stack
 * @param mc
 * @returns {undefined}
 */
Gt.prototype.ActionGetVariable=function(t,e){var i,o=t.pop();o instanceof bt?i=o:void 0===(i=this.getNativeClass(o))&&void 0===(i=this.getVariable(o))&&e&&(i=e.getProperty(o)),t[t.length]=i},/**
 * @param stack
 * @param mc
 */
Gt.prototype.ActionSetVariable=function(t,e){var i=t.pop(),o=t.pop();this.setVariable(o,i)||e.setProperty(o,i)},/**
 * @param stack
 * @param aScript
 * @param mc
 */
Gt.prototype.ActionGetURL2=function(t,e,i){var o=t.pop(),r=t.pop(),n=e.LoadVariablesFlag,a=e.LoadTargetFlag,s=e.SendVarsMethod,c="GET";2===s&&(c="POST");var h;if(i instanceof bt)if(r){var l=(r=this.valueToString(r)).split("?"),p=0|l.length,u="";if(1===p&&(u="?"),p>2){h=l[0]+"?",h+=l[1];for(var f=2;f<p;){var g=l[f];f=0|f+1,h=h+"&"+g}}else h=r;
// local variables
if(s){var d=i.variables,y="";for(var v in d)if(d.hasOwnProperty(v)){var b=d[v];if(null===b&&(b=""),"string"!=typeof b){var m=typeof b;b="%5Btype+"+(m=m.replace(/^[a-z]/g,function(t){return t.toUpperCase()}))+"%5D"}y+="&"+v+"="+b}""!==u&&""!==y&&(y=u+y.slice(1)),h+=y}n?i.loadVariables(h,o,c):a?o instanceof bt?o.loadMovie(h,null,s):i.loadMovie(h,o,s):i.getURL(h,o,c)}else i.unloadMovie(o)},/**
 * @param stack
 * @param mc
 * @returns {*}
 */
Gt.prototype.ActionGetProperty=function(t,e){var i=t.pop(),o=t.pop();this.$isNaN(i)||(i=this.$floor(i));var r=this.getVariable(i);if(void 0===r&&e){var n=e;o&&(o+="",n=e.getDisplayObject(o)),n instanceof bt&&(r=n.getProperty(i))}t[t.length]=r},/**
 * @param stack
 * @param aScript
 * @param mc
 */
Gt.prototype.ActionGoToFrame2=function(t,e,i){var o=e.SceneBiasFlag,r=e.PlayFlag;// 0=stop, 1=play
if(1===o){var n=e.SceneBias;console.log("SceneBias",n)}var a=t.pop();if(a&&i){if(this.$isNaN(a)){var s=a.split(":");if(s.length>1){var c=i.getDisplayObject(s[0]);c&&(a=c.getLabel(s[1]))}else a=i.getLabel(s[0])}"string"==typeof a&&(a|=0),"number"==typeof a&&a>0&&(i.setNextFrame(a),r?i.play():i.stop())}},/**
 * @param stack
 * @param movieClip
 * @param mc
 * @returns {*}
 */
Gt.prototype.ActionSetTarget2=function(t,e,i){var o=t.pop();return e||(e=i),e.getDisplayObject(o)},/**
 * @param stack
 * @param mc
 */
Gt.prototype.ActionSetProperty=function(t,e){var i=t.pop(),o=t.pop(),r=t.pop();if(this.$isNaN(o)||(o=this.$floor(o)),e){var n=e;void 0!==r&&(n=e.getDisplayObject(r)),void 0!==n&&"MovieClip"===n.getClassName()&&n.setProperty(o,i)}},/**
 * @param stack
 * @param mc
 */
Gt.prototype.ActionStartDrag=function(t,e){var i=t.pop(),o=t.pop(),r=null,n=null,a=null,s=null;t.pop()&&(r=t.pop(),n=t.pop(),a=t.pop(),s=t.pop());var c=e;i instanceof bt&&(c=i),"string"==typeof i&&i&&(c=e.getDisplayObject(i)),c instanceof bt&&c.startDrag(o,s,a,n,r)},/**
 * @param stack
 * @param mc
 */
Gt.prototype.ActionCloneSprite=function(t,e){var i=+t.pop(),o=t.pop(),r=t.pop();e&&e.duplicateMovieClip(o,r,i)},/**
 * @param stack
 * @param mc
 */
Gt.prototype.ActionRemoveSprite=function(t,e){var i=t.pop();e&&e.removeMovieClip(i)},/**
 * @param mc
 */
Gt.prototype.ActionEndDrag=function(t){t&&t.stopDrag()},/**
 * @param stack
 */
Gt.prototype.ActionGetTime=function(t){var e=new Date;t[t.length]=e.getTime()-this.$Date.getTime()},/**
 * @param stack
 */
Gt.prototype.ActionRandomNumber=function(t){var e=t.pop();t[t.length]=this.$floor(this.$random()*e)},/**
 * @param stack
 */
Gt.prototype.ActionTrace=function(t){var e=t.pop();e instanceof q&&e.removeFlag&&(e=""),e&&"object"==typeof e&&("callee"in e&&(e=Array.prototype.slice.call(e)),e=e.toString()),console.log("[trace] "+e)},/**
 * @param stack
 * @param mc
 */
Gt.prototype.ActionFsCommand2=function(t,e){t.pop();// count
var i=t.pop(),o=new Date;switch(i.toLowerCase()){case"getdateyear":t[t.length]=o.getFullYear();break;case"getdatemonth":t[t.length]=o.getMonth()+1;break;case"getdateday":t[t.length]=o.getDate();break;case"getdateweekday":t[t.length]=o.getDay();break;case"gettimehours":t[t.length]=o.getHours();break;case"gettimeminutes":t[t.length]=o.getMinutes();break;case"gettimeseconds":t[t.length]=o.getSeconds();break;case"startvibrate":t.pop(),t.pop(),t.pop(),t[t.length]=-1;break;case"gettimezoneoffset":e.setVariable(t.pop(),o.toUTCString()),e.setVariable(t.pop(),0);break;case"getlocalelongdate":e.setVariable(t.pop(),o.toLocaleDateString()),e.setVariable(t.pop(),0);break;case"getlocaleshortdate":e.setVariable(t.pop(),o.toDateString()),e.setVariable(t.pop(),0);break;case"getlocaletime":e.setVariable(t.pop(),o.toLocaleTimeString()),e.setVariable(t.pop(),0);break;case"getnetworkname":case"getdevice":case"getdeviceid":e.setVariable(t.pop(),""),e.setVariable(t.pop(),-1);break;case"getlanguage":var r=this.$navigator.userLanguage||this.$navigator.language||this.$navigator.browserLanguage||"ja-JP";e.setVariable(t.pop(),r),e.setVariable(t.pop(),0);break;case"setsoftkeys":t.pop(),t.pop(),t[t.length]=-1;break;case"fullscreen":t.pop(),// bool
t[t.length]=-1;break;case"setquality":case"getfreestagememory":case"gettotalstagememory":t.pop(),t[t.length]=-1;break;default:t[t.length]=-1}},/**
 * @param stack
 * @param mc
 */
Gt.prototype.ActionCallMethod=function(e,i){var o=e.pop(),r=e.pop(),n=+e.pop(),a=[];if(n>0)for(;n;){n=0|n-1;var c=e.pop();c&&"object"==typeof c&&"callee"in c&&(c=Array.prototype.slice.call(c)),a[a.length]=c}if("string"==typeof r&&void 0===r[o]){var h=this.stringToObject(r,i);if(h&&(r=h),"super"===r){var l=this.variables.this,u=this.getSuperClass();if(!o&&u){var f=new u;switch(u){case bt:var g=i.getStage();f.setStage(g),f.setParent(i),f._extend=!0}var d=Object.getPrototypeOf(l);d.constructor=u,Object.setPrototypeOf(d,f),Object.setPrototypeOf(l,d)}else r=l}}var y;if(r&&o){var v;if("object"==typeof r){var b=r.variables;b&&!(v=b[o])&&b.registerClass&&(v=b.registerClass[o])}if(!v){var m=this.checkMethod(o);m&&(v=r[m])}if(v||(v=r[o]),!v&&r instanceof bt&&(v=r.getVariable(o)),!v&&r instanceof s&&(v=t[o])&&(a=this.ActionNativeFunction(a,i),r=t),("call"===o||"apply"===o)&&(v=r,r=a.shift(),"apply"===o)){var S=a.shift();a=[],S&&(a=Array.prototype.slice.call(S))}if(v&&"function"==typeof v){switch(!0){case r instanceof p:if("loadClip"===o&&"string"==typeof a[1]){var A=a[1];a[1]=i.getDisplayObject(A)}}y=v.apply(r,a)}if(!v&&r instanceof Object&&"string"==typeof o)switch(o.toLowerCase()){case"registerclass":y=!1;var I=i.getDisplayObject("_root").getStage(),C=I.exportAssets[a[0]];C&&(I.registerClass[C]=a[1],y=!0);break;case"addproperty":this.addProperty(r,a)}}else o||"function"!=typeof r||(y=r.apply(this.variables.this,a));e[e.length]=y},/**
 * @param target
 * @param params
 * @returns {boolean}
 */
Gt.prototype.addProperty=function(t,e){var i=e[0];if("string"!=typeof i||""===i)return!1;var o=e[1];o||(o=function(){});var r=e[2];return r||(r=function(){}),"function"==typeof o&&"function"==typeof r&&(Object.defineProperty(t,i,{get:o,set:r}),!0)},/**
 * @param args
 * @param mc
 * @returns {Array}
 */
Gt.prototype.ActionNativeFunction=function(t,e){var i=e,o=t;if(t[0]instanceof bt&&(
// setInterval, setTimeout
i=t.shift(),t.length>0)){var r,n=t.shift();if("string"==typeof n&&"function"!=typeof(r=this.getVariable(n))&&(r=i.getVariable(n)),"function"==typeof r){var a=t.shift(),s=function(t,e,i){return function(){t.apply(e,i)}}(r,i,t);(o=[])[o.length]=s,o[o.length]=a}else console.log("DEBUG: ",o),t.unshift(n),o=t}return o},/**
 * @param stack
 * @param mc
 */
Gt.prototype.ActionCallFunction=function(e,i){var o=e.pop(),r=+e.pop(),n=[];if(r>0)for(;r;){r=0|r-1;var a=e.pop();a&&"object"==typeof a&&"callee"in a&&(a=Array.prototype.slice.call(a)),n[n.length]=a}if(i){var s,c=i,h=this.checkMethod(o);if(h)s=i[h];else if(!(s=i.variables[o])){var l=i.variables.registerClass;l&&"object"==typeof l&&(s=l[o]),s||(t[o]?(c=t,n=this.ActionNativeFunction(n,i),s=t[o]):s=i.getVariable(o))}e[e.length]=s?s.apply(c,n):void 0}},/**
 * @param stack
 * @param aScript
 * @param mc
 */
Gt.prototype.ActionDefineFunction=function(t,e,i){var o=i.createActionScript2(e.ActionScript,this),r=e.FunctionName;""!==r?i.setVariable(r,o):t[t.length]=o},/**
 * @param stack
 * @param mc
 */
Gt.prototype.ActionDefineLocal=function(t,e){var i=t.pop(),o=t.pop();this.parent?this.variables[o]=i:e.setVariable(o,i)},/**
 * @param stack
 * @param mc
 */
Gt.prototype.ActionDefineLocal2=function(t,e){var i=t.pop();this.parent?this.variables[i]=void 0:e.setVariable(i,void 0)},/**
 * @param stack
 * @param mc
 */
Gt.prototype.ActionDelete=function(t,e){var i=t.pop(),o=t.pop();if("string"==typeof o){var r=this.stringToObject(o,e);r&&(o=r)}o instanceof bt&&o.setVariable(i,void 0)},/**
 * @param stack
 * @param mc
 */
Gt.prototype.ActionDelete2=function(t,e){var i=t.pop();e&&e.setVariable(i,void 0)},/**
 * @param stack
 * @param mc
 */
Gt.prototype.ActionEnumerate=function(t,e){var i=t.pop();if(t[t.length]=null,"string"==typeof i&&(i=this.stringToObject(i,e)),i instanceof Object){var o;switch(!0){case i instanceof q:var r=i.getTags(),n=i.getStage();for(o in r)if(r.hasOwnProperty(o)){var a=r[o],s=n.getInstance(a),c="instance"+a;s.getName()&&(c=s.getName()),t[t.length]=c}var h=i.variables;for(o in h)h.hasOwnProperty(o)&&(t[t.length]=o);break;default:for(o in i)i.hasOwnProperty(o)&&(t[t.length]=o)}}},/**
 * @param stack
 */
Gt.prototype.ActionEquals2=function(t){var e=t.pop(),i=t.pop(),o=e,r=i;e instanceof bt&&(o=e.getTarget()),i instanceof bt&&(r=i.getTarget()),t[t.length]=r==o},/**
 * @param stack
 * @param mc
 */
Gt.prototype.ActionGetMember=function(e,i){var o,r=e.pop(),n=e.pop();if("string"==typeof n){var a=this.stringToObject(n,i);a&&(n=a)}if(n)switch(!0){default:o=n[r];break;case n instanceof q:case n instanceof s:if(n._extend)o=n[r];else{if(void 0===(o=n.getProperty(r,!1))&&"string"==typeof r&&"instance"===r.substr(0,8)){var c=n.getStage(),h=r.split("instance")[1];o=c.getInstance(h)}void 0===o&&this.checkMethod(r)&&(o=n[r])}break;case n instanceof Element&&"childNodes"===r:var l=n[r],p=l.length;if(o=[],p)for(var u=0;u<p;u++){var f=l[u];1===f.nodeType&&(o[o.length]=f)}break;case n instanceof t.NamedNodeMap:o=n.getNamedItem(r).value}e[e.length]=o},/**
 * @param stack
 */
Gt.prototype.ActionInitArray=function(t){var e=t.pop(),i=[];if(e>0)for(;e;)e=0|e-1,i[i.length]=t.pop();t[t.length]=i},/**
 * @param stack
 */
Gt.prototype.ActionInitObject=function(t){var e=t.pop(),i={};if(e>0)for(;e;){e=0|e-1;var o=t.pop();i[t.pop()]=o}t[t.length]=i},/**
 * @param stack
 * @param mc
 */
Gt.prototype.ActionNewMethod=function(e,i){var o=e.pop(),r=e.pop(),n=e.pop(),a=[];if(n>0)for(;n--;){var s=e.pop();s&&"object"==typeof s&&"callee"in s&&(s=Array.prototype.slice.call(s)),a[a.length]=s}var c;""===o&&(c=r.apply(r,a)),!c&&o in r&&(c=this.CreateNewActionScript(r[o],i,a)),!c&&o in t&&(c="CSSStyleDeclaration"===o?void 0:this.CreateNewActionScript(t[o],i,a)),e[e.length]=c},/**
 * @param stack
 * @param mc
 */
Gt.prototype.ActionNewObject=function(e,i){var o=e.pop(),r=+e.pop(),n=[];if(r>0)for(;r;){r=0|r-1;var s=e.pop();s&&"object"==typeof s&&"callee"in s&&(s=Array.prototype.slice.call(s)),n[n.length]=s}var c={};if(o in t)n.unshift(t[o]),c=new(Function.prototype.bind.apply(t[o],n));else switch(o){case"Object":c={};break;case"MovieClip":c=new bt;var l=i.getStage();c.setStage(l),c.setParent(i);break;case"Sound":(c=new Nt(i)).movieClip=i;break;case"XML":c=new d;break;case"LoadVars":c=new h;break;case"Color":c=new a(n[0]);break;case"TextFormat":c=new Et;break;case"MovieClipLoader":c=new p;break;default:if(i){var u=this,f=u.getVariable(o)||i.getVariable(o);c=u.CreateNewActionScript(f,i,n)}}e[e.length]=c},/**
 * @param name
 * @returns {*}
 */
Gt.prototype.getNativeClass=function(t){var e;switch(t){case"MovieClip":e=bt;break;case"Sprite":e=Q;break;case"SimpleButton":e=_t;break;case"TextField":e=Lt;break;case"Shape":e=xt;break;case"Sound":e=Nt;break;case"XML":e=d;break;case"LoadVars":e=h;break;case"Color":e=a;break;case"TextFormat":e=Et;break;case"MovieClipLoader":e=p}return e},/**
 * @param Constr
 * @param mc
 * @param params
 * @returns {*}
 */
Gt.prototype.CreateNewActionScript=function(t,e,i){if(t)return i.unshift(t),new(Function.prototype.bind.apply(t,i))},/**
 * @param stack
 * @param mc
 */
Gt.prototype.ActionSetMember=function(t,e){var i=t.pop(),o=t.pop(),r=t.pop();if(r){if("string"==typeof r){var n=this.stringToObject(r,e);n&&(r=n)}if("object"==typeof r||"function"==typeof r)switch(!0){default:case r===bt.prototype:case r===Lt.prototype:case r===_t.prototype:case r===Q.prototype:case r===xt.prototype:r[o]=i;break;case r instanceof q:case r instanceof s:r._extend?r[o]=i:r.setProperty(o,i,!1)}}},/**
 * @param stack
 */
Gt.prototype.ActionTargetPath=function(t){console.log("ActionTargetPath");var e=t.pop(),i=null;if(e instanceof bt&&null!==(i=e.getName()))for(;;){var o=e.getParent();if(null===o){i="/"+i;break}var r=o.getName();if(null===r){i=null;break}i=r+"/"+i}t[t.length]=i},/**
 * @param stack
 * @param size
 * @param mc
 * @returns {*}
 */
Gt.prototype.ActionWith=function(t,e,i){var o=i;return e&&(o=t.pop()),o},/**
 * @param stack
 */
Gt.prototype.ActionToNumber=function(t){var e=+t.pop();t[t.length]=e},/**
 * @param stack
 */
Gt.prototype.ActionToString=function(t){var e=t.pop();t[t.length]=this.valueToString(e)},/**
 * @param stack
 */
Gt.prototype.ActionTypeOf=function(t){var e=t.pop(),i="";switch(!0){case e instanceof bt:i="movieclip";break;default:i=typeof e}t[t.length]=i},/**
 * @param stack
 */
Gt.prototype.ActionAdd2=function(t){var e=t.pop(),i=t.pop();t[t.length]=i+e},/**
 * @param stack
 */
Gt.prototype.ActionLess2=function(t){var e=t.pop(),i=t.pop();t[t.length]=i<e},/**
 * @param stack
 */
Gt.prototype.ActionModulo=function(t){var e=t.pop(),i=t.pop();t[t.length]=i%e},/**
 * @param stack
 */
Gt.prototype.ActionBitAnd=function(t){var e=t.pop(),i=t.pop();t[t.length]=i&e},/**
 * @param stack
 */
Gt.prototype.ActionBitLShift=function(t){var e=t.pop(),i=t.pop();t[t.length]=i<<e},/**
 * @param stack
 */
Gt.prototype.ActionBitOr=function(t){var e=t.pop(),i=t.pop();t[t.length]=i|e},/**
 * @param stack
 */
Gt.prototype.ActionBitRShift=function(t){var e=t.pop(),i=t.pop();t[t.length]=i>>e},/**
 * @param stack
 */
Gt.prototype.ActionBitURShift=function(t){var e=t.pop(),i=t.pop();t[t.length]=i>>e},/**
 * @param stack
 */
Gt.prototype.ActionBitXor=function(t){var e=t.pop(),i=t.pop();t[t.length]=e^i},/**
 * @param stack
 */
Gt.prototype.ActionDecrement=function(t){var e=t.pop();e=0|e-1,t[t.length]=e},/**
 * @param stack
 */
Gt.prototype.ActionIncrement=function(t){var e=t.pop();e=0|e+1,t[t.length]=e},/**
 * @param stack
 */
Gt.prototype.ActionPushDuplicate=function(t){var e=t.length;t[e]=t[e-1]},/**
 * @param stack
 */
Gt.prototype.ActionStackSwap=function(t){var e=t.pop(),i=t.pop();t[t.length]=e,t[t.length]=i},/**
 * @param stack
 * @param number
 */
Gt.prototype.ActionStoreRegister=function(t,e){this.params[e]=t[t.length-1]},/**
 * @param stack
 */
Gt.prototype.ActionInstanceOf=function(t){var e=t.pop(),i=t.pop();t[t.length]=i instanceof e},/**
 * @param stack
 */
Gt.prototype.ActionStrictEquals=function(t){var e=t.pop(),i=t.pop();t[t.length]=i===e},/**
 * @param stack
 */
Gt.prototype.ActionGreater=function(t){var e=t.pop(),i=t.pop();t[t.length]=i>e},/**
 * @param stack
 */
Gt.prototype.ActionExtends=function(t){var e=t.pop(),i=t.pop();e&&i&&(this.superClass=e)},/**
 * @param stack
 */
Gt.prototype.ActionCastOp=function(t){var e=t.pop(),i=t.pop();t[t.length]="function"==typeof i&&e instanceof i.prototype.constructor?e:null},/**
 * @param stack
 */
Gt.prototype.ActionImplementsOp=function(t){console.log("ActionImplementsOp");var e=t.pop();console.log(e);var i=0|t.pop(),o=[];if(i>0)for(;i;)i=0|i-1,o[o.length]=t.pop();t[t.length]=null},/**
 * @param script
 * @param mc
 */
Gt.prototype.ActionTry=function(t,e){try{t.try.apply(e)}catch(i){t.CatchBlockFlag&&t.catch.apply(e,[i])}finally{t.FinallyBlockFlag&&t.finally.apply(e)}},/**
 * ActionThrow
 */
Gt.prototype.ActionThrow=function(t){throw t.pop().message};/**
 * @param data
 * @param id
 * @param ns
 * @param stage
 * @constructor
 */
var Zt=function(t,e,i,o){
// params
this.id=e,this.caller=null,this.parent=null,this.activation=null,this.scopeStack=[],this.currentIndex=0,this.stage=o,this.args=[],this.variables={};
// ABC code and info
var r=t.methodBody[e];this.body=r,this.codes=r.codes,this.info=t.method[r.method],
// pool and data
this.names=t.names,this.data=t,
// ns
this.ns=i,
// register
this.AVM2=this.getAVM2(),this.register=this.AVM2["__swf2js__:"+i].register,this.register[0]=this.AVM2;for(
// trait
var n=r.trait,a=0|n.length,s=0;s<a;){var c=n[s];s=s+1|0,c.kind}};(/**
 * util
 */
Zt.prototype=Object.create(i.prototype)).constructor=Zt,/**
 * @type {{}}
 */
Zt.prototype.methods={gotoAndStop:1,gotoAndPlay:1,play:1,stop:1,duplicateMovieClip:1,getProperty:1,removeMovieClip:1,setProperty:1,startDrag:1,stopDrag:1,targetPath:1,updateAfterEvent:1,nextFrame:1,nextScene:1,prevFrame:1,prevScene:1,stopAllSounds:1,setMask:1,getURL:1,loadMovie:1,loadMovieNum:1,loadVariables:1,loadVariablesNum:1,unloadMovie:1,unloadMovieNum:1,swapDepths:1,getInstanceAtDepth:1,attachMovie:1,attachAudio:1,attachBitmap:1,getNextHighestDepth:1,getBytesLoaded:1,getBytesTotal:1,ASSetPropFlags:1,lineStyle:1,lineGradientStyle:1,beginFill:1,beginGradientFill:1,beginBitmapFill:1,graphics:1,buttonMode:1,clear:1,moveTo:1,lineTo:1,curveTo:1,endFill:1,hitTest:1,getDepth:1,createEmptyMovieClip:1,createTextField:1,getBounds:1,getRect:1,getSWFVersion:1,getTextSnapshot:1,globalToLocal:1,localToGlobal:1,addFrameScript:1,trace:1,addEventListener:1,removeEventListener:1,x:1,y:1,alpha:1,name:1,blendMode:1,filters:1,visible:1,rotation:1,height:1,width:1,scaleX:1,scaleY:1,mouseX:1,mouseY:1,mask:1,mouseEnabled:1,parent:1},/**
 * @returns {*}
 */
Zt.prototype.getAVM2=function(){var t=this.ns,e=this.caller;if(e){var i=e.avm2;if(i&&"__swf2js__:"+t in i)return i}for(var o=this.stage,r=t.split(":"),n=r.pop(),a=o.avm2,s=0|r.length,c=0;c<s;)a=a[r[c]],c=c+1|0;return a[n]},/**
 * @returns {*}
 */
Zt.prototype.getBuilder=function(){return this.AVM2["__swf2js__::builder"]},/**
 * @returns {*}
 */
Zt.prototype.getSuperClass=function(){var t=this;return t.AVM2["__swf2js__:"+t.ns].superClass},/**
 * @returns {*}
 */
Zt.prototype.getParent=function(){return this.parent},/**
 * @param name
 * @returns {*}
 */
Zt.prototype.getProperty=function(t){var e,i=this.stage;
// parent
if(
// local1
this.activation&&(e=this.activation[t]),void 0===e){var o=this.getParent();o&&(e=o.getProperty(t))}
// property
if(void 0===e){var r=this.getBuilder();r&&(t in this.methods&&(e=r[t]),void 0===e&&(e=r.getProperty(t)))}
// local2
if(void 0===e&&-1!==t.indexOf("::")){var n=t.split("::"),a=n.pop(),s=n.pop();if("private"!==s){for(var c=s.split("."),h=i.avm2,l=c.length,p=0;p<l;)h=h[c[p]],p=p+1|0;void 0===(e=h[a])&&(e=this.AVM2[a])}else e=this.AVM2["private::"+a]}return e},/**
 * setOptions
 */
Zt.prototype.setOptions=function(){var t=this.info,e=0|t.paramCount;if(e)for(var i=this.data,o=t.options,r=t.paramType,n=this.stage,a=0;a<e;){var s=void 0;if(a in o){var c=o[a],h=c.val;switch(0|c.kind){case 1:// string
s=i.string[h];break;default:console.log("options",c)}}if(a in r){var l=r[a];if(l){var p=i.multiname_info[l],u=null,f="";switch(p.kind){case 7:// QName
var g=i.namespace[p.ns];switch(g.kind){case 22:f=i.string[g.name];break;default:console.log("SetOptions",g)}u=i.string[p.name]}if(f){for(var d=f.split("."),y=n.avm2,v=0|d.length,b=0;b<v;)y=y[d[b]],b=b+1|0;s=y[u]}}}void 0===this.args[a]&&(this.args[a]=s),a=a+1|0}},/**
 * execute
 */
Zt.prototype.execute=function(){var t=[];this.scopeStack=[],
// register
this.AVM2=this.getAVM2(),this.register[0]=this.AVM2;var e=0,i=this.codes,o=0|i.length;for(this.setOptions();e<o;){var r=i[e];switch(0|r.code){case 160:this.ActionAdd(t);break;case 197:this.ActionAddI(t);break;case 134:this.ActionAsType(t,r.value1);break;case 135:this.ActionAsTypeLate(t);break;case 168:this.ActionBitAnd(t);break;case 151:this.ActionBitNot(t);break;case 169:this.ActionBitOr(t);break;case 170:this.ActionBitXOr(t);break;case 65:this.ActionCall(t,r.value1);break;case 67:this.ActionCallMethod(t,r.value1,r.value2);break;case 70:this.ActionCallProperty(t,r.value1,r.value2);break;case 76:this.ActionCallPropLex(t,r.value1,r.value2);break;case 79:this.ActionCallPropVoid(t,r.value1,r.value2);break;case 68:this.ActionCallStatic(t,r.value1,r.value2);break;case 69:this.ActionCallSuper(t,r.value1,r.value2);break;case 78:this.ActionCallSuperVoid(t,r.value1,r.value2);break;case 120:this.ActionCheckFilter(t);break;case 128:this.ActionCoerce(t,r.value1);break;case 130:this.ActionCoerceA(t);break;case 133:this.ActionCoerceS(t);break;case 66:this.ActionConstruct(t,r.value1);break;case 74:this.ActionConstructProp(t,r.value1,r.value2);break;case 73:this.ActionConstructSuper(t,r.value1);break;case 118:this.ActionConvertB(t);break;case 115:this.ActionConvertI(t);break;case 117:this.ActionConvertD(t);break;case 119:this.ActionConvertO(t);break;case 116:this.ActionConvertU(t);break;case 112:this.ActionConvertS(t);break;case 239:this.ActionDebug(t,r.value1,r.value2,r.value3,r.value4);break;case 241:this.ActionDebugFile(t,r.value1);break;case 240:this.ActionDebugLine(t);break;case 148:this.ActionDecLocal(t,r.value1);break;case 195:this.ActionDecLocalI(t,r.value1);break;case 147:this.ActionDecrement(t);break;case 193:this.ActionDecrementI(t);break;case 106:this.ActionDeleteProperty(t,r.value1);break;case 163:this.ActionDivide(t);break;case 42:this.ActionDup(t);break;case 6:this.ActionDxns(t,r.value1);break;case 7:this.ActionDxnsLate(t);break;case 171:this.ActionEquals(t);break;case 114:this.ActionEscXAttr(t);break;case 113:this.ActionEscXElem(t);break;case 94:this.ActionFindProperty(t,r.value1);break;case 93:this.ActionFindPropStrict(t,r.value1);break;case 89:this.ActionGetDescendAnts(t,r.value1);break;case 100:this.ActionGetGlobalScope(t);break;case 110:this.ActionGetGlobalsLot(t,r.value1);break;case 96:this.ActionGetLex(t,r.value1);break;case 98:this.ActionGetLocal(t,r.value1);break;case 208:this.ActionGetLocal0(t);break;case 209:this.ActionGetLocal1(t);break;case 210:this.ActionGetLocal2(t);break;case 211:this.ActionGetLocal3(t);break;case 102:this.ActionGetProperty(t,r.value1);break;case 101:this.ActionGetScopeObject(t,r.value1);break;case 108:this.ActionGetSlot(t,r.value1);break;case 4:this.ActionGetSuper(t,r.value1);break;case 176:this.ActionGreaterEquals(t);break;case 175:this.ActionGreaterThan(t);break;case 31:this.ActionHasNext(t);break;case 50:this.ActionHasNext2(t,r.value1,r.value2);break;case 18:e=e+this.ActionIfFalse(t,r.value1)|0;break;case 24:e=e+this.ActionIfGe(t,r.value1)|0;break;case 23:e=e+this.ActionIfGt(t,r.value1)|0;break;case 22:e=e+this.ActionIfLe(t,r.value1)|0;break;case 21:e=e+this.ActionIfLt(t,r.value1)|0;break;case 15:e+=this.ActionIfNge(t,r.value1);break;case 14:e=e+this.ActionIfNgt(t,r.value1)|0;break;case 13:e=e+this.ActionIfNle(t,r.value1)|0;break;case 12:e=e+this.ActionIfNlt(t,r.value1)|0;break;case 20:e=e+this.ActionIfNe(t,r.value1)|0;break;case 25:e=e+this.ActionIfStrictEq(t,r.value1)|0;break;case 26:e=e+this.ActionIfStrictNe(t,r.value1)|0;break;case 17:e=e+this.ActionIfTrue(t,r.value1)|0;break;case 180:this.ActionIn(t,r.value1);break;case 146:this.ActionIncLocal(t,r.value1);break;case 194:this.ActionIncLocalI(t,r.value1);break;case 145:this.ActionIncrement(t);break;case 192:this.ActionIncrementI(t);break;case 104:this.ActionInitProperty(t,r.value1);break;case 177:this.ActionInstanceOf(t);break;case 178:this.ActionIsType(t,r.value1);break;case 179:this.ActionIsTypeLate(t);break;case 16:// ActionJump
e=e+r.value1|0;break;case 8:this.ActionKill(t,r.value1);break;case 9:this.ActionLabel(t);break;case 174:this.ActionLessEquals(t);break;case 173:this.ActionLessThan(t);break;case 27:this.ActionLookupSwitch(t,r.value1,r.value1,r.value3);break;case 165:this.ActionLShift(t);break;case 164:this.ActionModulo(t);break;case 162:this.ActionMultiply(t);break;case 199:this.ActionMultiplyI(t);break;case 144:this.ActionNeGate(t);break;case 196:this.ActionNeGateI(t);break;case 87:this.ActionNewActivation(t);break;case 86:this.ActionNewArray(t,r.value1);break;case 90:this.ActionNewCatch(t,r.value1);break;case 88:this.ActionNewClass(t,r.value1);break;case 64:this.ActionNewFunction(t,r.value1);break;case 85:this.ActionNewObject(t,r.value1);break;case 30:this.ActionNextName(t);break;case 35:this.ActionNextValue(t);break;case 2:this.ActionNop(t);break;case 150:this.ActionNot(t);break;case 41:this.ActionPop(t);break;case 29:this.ActionPopScope();break;case 36:this.ActionPushByte(t,r.value1);break;case 47:this.ActionPushDouble(t,r.value1);break;case 39:this.ActionPushFalse(t,r.value1);break;case 45:this.ActionPushInt(t,r.value1);break;case 49:this.ActionPushNameSpace(t,r.value1);break;case 40:this.ActionPushNan(t);break;case 32:this.ActionPushNull(t);break;case 48:this.ActionPushScope(t);break;case 37:this.ActionPushShort(t,r.value1);break;case 44:this.ActionPushString(t,r.value1);break;case 38:this.ActionPushTrue(t);break;case 46:this.ActionPushUInt(t,r.value1);break;case 33:this.ActionPushUndefined(t);break;case 28:this.ActionPushWith(t);break;case 72:// ActionReturnValue
return t.pop();case 71:// ReturnVoid
return;case 166:this.ActionRShift(t);break;case 99:this.ActionSetLocal(t,r.value1);break;case 212:this.ActionSetLocal0(t);break;case 213:this.ActionSetLocal1(t);break;case 214:this.ActionSetLocal2(t);break;case 215:this.ActionSetLocal3(t);break;case 111:this.ActionSetGlobalSlot(t,r.value1);break;case 97:this.ActionSetProperty(t,r.value1);break;case 109:this.ActionSetSlot(t,r.value1);break;case 5:this.ActionSetSuper(t,r.value1);break;case 172:this.ActionStrictEquals(t);break;case 161:this.ActionSubtract(t);break;case 198:this.ActionSubtractI(t);break;case 43:this.ActionSwap(t);break;case 3:this.ActionThrow(t);break;case 149:this.ActionTypeof(t);break;case 167:this.ActionURShift(t)}e=e+r.offset+1|0}},/**
 * @param stack
 */
Zt.prototype.ActionAdd=function(t){var e=t.pop(),i=t.pop();t[t.length]=i+e},/**
 * @param stack
 */
Zt.prototype.ActionAddI=function(t){var e=+t.pop(),i=+t.pop();t[t.length]=i+e},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionAsType=function(t,e){var i=this.names[e],o=t.pop();t[t.length]=typeof o===i||null},/**
 * @param stack
 */
Zt.prototype.ActionAsTypeLate=function(t){var e=t.pop(),i=t.pop();t[t.length]=typeof e===i||null},/**
 * @param stack
 */
Zt.prototype.ActionBitAnd=function(t){var e=t.pop(),i=t.pop();t[t.length]=i&e},/**
 * @param stack
 */
Zt.prototype.ActionBitNot=function(t){var e=t.pop();t[t.length]=~e},/**
 * @param stack
 */
Zt.prototype.ActionBitOr=function(t){var e=t.pop(),i=t.pop();t[t.length]=i|e},/**
 * @param stack
 */
Zt.prototype.ActionBitXOr=function(t){var e=t.pop(),i=t.pop();t[t.length]=i^e},/**
 * @param stack
 * @param argCount
 */
Zt.prototype.ActionCall=function(t,e){for(var i=[],o=e;o--;)i[o]=t.pop();var r,n=t.pop(),a=t.pop();"function"==typeof a&&(r=a.apply(n,i)),t[t.length]=r},/**
 * @param stack
 * @param index
 * @param argCount
 */
Zt.prototype.ActionCallMethod=function(t,e,i){for(var o=[],r=0;r<i;r++)o[o.length]=t.pop();var n,a=t.pop();"function"==typeof a&&(n=a.apply(this.caller,o)),t[t.length]=n},/**
 * @param stack
 * @param index
 * @param argCount
 */
Zt.prototype.ActionCallProperty=function(t,e,i){for(var o=this,r=[],n=i;n--;)r[r.length]=t.pop();var a,s=o.names[e],c=t.pop();if(c){var h=null;c instanceof q?(s in o.methods&&(h=c[s]),h||(h=c.getProperty(s))):h=c[s],h&&(a=h.apply(o.caller,r))}t[t.length]=a},/**
 * @param stack
 * @param index
 * @param argCount
 */
Zt.prototype.ActionCallPropLex=function(t,e,i){for(var o=this,r=[],n=i;n--;)r[r.length]=t.pop();var a,s=o.names[e],c=t.pop();c&&(a=c[s].apply(o.getBuilder(),r)),t[t.length]=a},/**
 * @param stack
 * @param index
 * @param argCount
 */
Zt.prototype.ActionCallPropVoid=function(t,e,i){for(var o=this,r=[],n=i;n--;)r[n]=t.pop();var a=t.pop(),s=o.names[e].split("::"),c=s.pop(),h=(s.pop(),a[c]);if(!h&&a instanceof bt){var l=a.getStage(),p=l.symbols[a.getCharacterId()];if(p){var u=p.split("."),f=u.pop(),g=u.length,d=l.avm2;for(n=0;n<g;n++)d=d[u[n]];if(d)for(var y=d[f];;){if(h=y[c])break;if(!(y=y.super)||y instanceof bt)break}}}if(!h)for(;;){var v=a.super;if(!v)break;if(v instanceof bt){h=(a=o.caller)[c];break}if(h=v[c])break;a=v}
// fscommand
"fscommand"===c&&(a=o.stage),h&&h.apply(a,r)},/**
 * @param stack
 * @param index
 * @param argCount
 */
Zt.prototype.ActionCallStatic=function(t,e,i){console.log("ActionCallStatic");for(var o=[],r=i;r--;)o[o.length]=t.pop();t.pop();t[t.length]=void 0},/**
 * @param stack
 * @param index
 * @param argCount
 */
Zt.prototype.ActionCallSuper=function(t,e,i){for(var o=[],r=i;r--;)o[o.length]=t.pop();this.names[e],t.pop()},/**
 * @param stack
 * @param index
 * @param argCount
 */
Zt.prototype.ActionCallSuperVoid=function(t,e,i){for(var o=[],r=i;r--;)o[o.length]=t.pop();this.names[e],t.pop()},/**
 * @param stack
 */
Zt.prototype.ActionCheckFilter=function(t){var e=t.pop();t[t.length]=e},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionCoerce=function(t,e){t.pop();var i=this.names[e];t[t.length]=i},/**
 * @param stack
 */
Zt.prototype.ActionCoerceA=function(t){var e=t.pop();t[t.length]=e},/**
 * @param stack
 */
Zt.prototype.ActionCoerceS=function(t){var e=t.pop();t[t.length]=String(e)},/**
 * @param stack
 * @param argCount
 */
Zt.prototype.ActionConstruct=function(t,e){for(var i=[],o=e;o--;)i[i.length]=t.pop();var r=t.pop();t[t.length]=r.construct.apply(r,i)},/**
 * @param stack
 * @param index
 * @param argCount
 */
Zt.prototype.ActionConstructProp=function(t,e,i){for(var o=this,r=[],n=i;n--;)r[r.length]=t.pop();var a,s=o.names[e],c=t.pop(),h=o.stage,l=h.abc[s];if(l){var p=o.getBuilder(),u=new l(p);h.avm2[s]=u,u[s].apply(p,r),a=u}else a=new(Function.prototype.bind.apply(c[s],r));t[t.length]=a},/**
 * @param stack
 * @param argCount
 */
Zt.prototype.ActionConstructSuper=function(e,i){for(var o=this,r=[],n=i;n--;)r[n]=e.pop();var a=e.pop(),s=a["__swf2js__:"+o.ns].extends,c=s.split("::"),h=c.pop(),l=c.pop(),p=o.stage,u=p.abc,f=p.avm2;if(l){var g=l.split("."),d=g.length;for(n=0;n<d;n++)u=u[g[n]],f=f[g[n]]}var y=null,v=u[h],b=o.getBuilder();switch(v){case bt:(y=new bt).setStage(p),y._extend=!0;break;case Nt:(y=new Nt).movieClip=b;break;default:v in t?// Object
y=new(Function.prototype.bind.apply(t[s],r)):(y=new v(b),f[h]=y,y[h].apply(b,r))}a.super=y,a["__swf2js__:"+o.ns].superClass=y},/**
 * @param stack
 */
Zt.prototype.ActionConvertB=function(t){var e=t.pop();t[t.length]=!!e},/**
 * @param stack
 */
Zt.prototype.ActionConvertI=function(t){var e=t.pop();t[t.length]=0|e},/**
 * @param stack
 */
Zt.prototype.ActionConvertD=function(t){var e=t.pop();t[t.length]=+e},/**
 * @param stack
 */
Zt.prototype.ActionConvertO=function(t){var e=t.pop();t[t.length]="object"==typeof e?e:null},/**
 * @param stack
 */
Zt.prototype.ActionConvertU=function(t){var e=t.pop();(e|=0)<0&&(e*=-1),t[t.length]=e},/**
 * @param stack
 */
Zt.prototype.ActionConvertS=function(t){var e=t.pop();t[t.length]=String(e)},/**
 * @param stack
 * @param type
 * @param index
 * @param reg
 * @param extra
 */
Zt.prototype.ActionDebug=function(t,e,i,o,r){},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionDebugFile=function(t,e){},/**
 * @param stack
 */
Zt.prototype.ActionDebugLine=function(t){},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionDecLocal=function(t,e){},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionDecLocalI=function(t,e){},/**
 * @param stack
 */
Zt.prototype.ActionDecrement=function(t){var e=t.pop();e-=1,t[t.length]=e},/**
 * @param stack
 */
Zt.prototype.ActionDecrementI=function(t){var e=t.pop();e-=1,t[t.length]=e},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionDeleteProperty=function(t,e){var i=this.name[e],o=t.pop();o&&(i in o?delete o[i]:
// TODO
console.log("ActionDeleteProperty")),t[t.length]=!0},/**
 * @param stack
 */
Zt.prototype.ActionDivide=function(t){var e=t.pop(),i=t.pop();t[t.length]=i/e},/**
 * @param stack
 */
Zt.prototype.ActionDup=function(t){var e=t.pop();t[t.length]=e,t[t.length]=e},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionDxns=function(t,e){},/**
 * @param stack
 */
Zt.prototype.ActionDxnsLate=function(t){t.pop()},/**
 * @param stack
 */
Zt.prototype.ActionEquals=function(t){var e=t.pop(),i=t.pop();t[t.length]=i==e},/**
 * @param stack
 */
Zt.prototype.ActionEscXAttr=function(t){var e=t.pop();t[t.length]=String(e)},/**
 * @param stack
 */
Zt.prototype.ActionEscXElem=function(t){var e=t.pop();t[t.length]=String(e)},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionFindProperty=function(t,e){this.names[e];t[t.length]=void 0},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionFindPropStrict=function(t,e){var i=this,o=i.names[e],r=o.split("::"),n=r.pop(),a=r.pop(),s=null,c=i.AVM2;if(a){var h=a.split("."),l=h.length;if(l>1){for(var p=i.stage.avm2,u=0;u<l;u++)p=p[h[u]];c=p}}
// find avm
if(
// local
n in c&&(s=c),!s){var f=i.stage.avm2;n in f&&(s=f[n])}
// parent
if(!s){var g=i.parent;if(g)for(;;){var d=g.getBuilder();if(d)d instanceof bt&&(n in i.methods&&(s=d),void 0!==d.getProperty()&&(s=d));else{var y=g.caller;y instanceof bt&&(n in i.methods&&(s=y),void 0!==d.getProperty()&&(s=y))}if(s)break;if(!(g=g.parent))break}}
// builder
if(!s){var v=i.getBuilder();v&&v instanceof bt&&(n in i.methods&&(s=v),void 0!==v.getProperty()&&(s=v))}
// caller
if(!s){var b=i.caller;b&&(b instanceof bt?(n in i.methods&&(s=b),void 0!==b.getProperty()&&(s=b)):(o in b&&(s=b),!s&&"__swf2js__::builder"in b&&(b=b["__swf2js__::builder"],n in i.methods&&(s=b),void 0!==b.getProperty()&&(s=b))))}t[t.length]=s},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionGetDescendAnts=function(t,e){console.log("ActionGetDescendAnts");this.names[e];t[t.length]=void 0},/**
 * @param stack
 */
Zt.prototype.ActionGetGlobalScope=function(t){var e=this.scopeStack;t[t.length]=e[e.length-1]},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionGetGlobalsLot=function(t,e){console.log("ActionGetGlobalsLot");t[t.length]=void 0},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionGetLex=function(t,e){var i=this.names[e];t[t.length]=this.getProperty(i)},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionGetLocal=function(t,e){var i=this,o=i.args[e-1];void 0===o&&(o=i.register[e]),t[t.length]=o},/**
 * @param stack
 */
Zt.prototype.ActionGetLocal0=function(t){t[t.length]=this.register[0]},/**
 * @param stack
 */
Zt.prototype.ActionGetLocal1=function(t){var e=this,i=e.args[0];void 0===i&&(i=e.register[1]),t[t.length]=i},/**
 * @param stack
 */
Zt.prototype.ActionGetLocal2=function(t){var e=this,i=e.args[1];void 0===i&&(i=e.register[2]),t[t.length]=i},/**
 * @param stack
 */
Zt.prototype.ActionGetLocal3=function(t){var e=this,i=e.args[2];void 0===i&&(i=e.register[3]),t[t.length]=i},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionGetProperty=function(t,e){var i=this,o=i.names[e];null===o&&(o=t.pop());var r,n=t.pop();n&&o&&(n instanceof q?(o in i.methods&&(r=n[o]),r||(r=n.getProperty(o))):r=n[o],void 0===r&&(r=i.getProperty(o))),t[t.length]=r},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionGetScopeObject=function(t,e){var i=this.activation;t[t.length]=e?e in i?i:null:i},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionGetSlot=function(t,e){var i=t.pop()[e];t[t.length]=this.activation[i]},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionGetSuper=function(t,e){this.prop,t.pop();t[t.length]=void 0},/**
 * @param stack
 */
Zt.prototype.ActionGreaterEquals=function(t){var e=t.pop(),i=t.pop();t[t.length]=i>=e},/**
 * @param stack
 */
Zt.prototype.ActionGreaterThan=function(t){var e=t.pop(),i=t.pop();t[t.length]=i>e},/**
 * @param stack
 */
Zt.prototype.ActionHasNext=function(t){var e=t.pop(),i=t.pop();e++;var o=0;if(i){var r=0;for(var n in i)if(i.hasOwnProperty(n)){if(r===e){o=e;break}r++}}t[t.length]=o},/**
 * @param stack
 * @param objectReg
 * @param indexReg
 */
Zt.prototype.ActionHasNext2=function(t,e,i){var o=this,r=o.register[e],n=o.currentIndex,a=!1,s=0;if(r)for(var c in r)if(r.hasOwnProperty(c)){if(s===n){a=!0,n++;break}s++}a||(n=0),o.currentIndex=n,o.register[i]=s,t[t.length]=a},/**
 * @param stack
 * @param index
 * @returns {number}
 */
Zt.prototype.ActionIfFalse=function(t,e){return!1===t.pop()?e:0},/**
 * @param stack
 * @param index
 * @returns {number}
 */
Zt.prototype.ActionIfGe=function(t,e){var i=t.pop();return t.pop()<i?e:0},/**
 * @param stack
 * @param index
 * @returns {number}
 */
Zt.prototype.ActionIfGt=function(t,e){var i=t.pop();return t.pop()>i?e:0},/**
 * @param stack
 * @param index
 * @returns {number}
 */
Zt.prototype.ActionIfLe=function(t,e){return t.pop()<t.pop()?e:0},/**
 * @param stack
 * @param index
 * @returns {number}
 */
Zt.prototype.ActionIfLt=function(t,e){var i=t.pop();return t.pop()<i?e:0},/**
 * @param stack
 * @param index
 * @returns {number}
 */
Zt.prototype.ActionIfNge=function(t,e){var i=t.pop();return t.pop()<i?e:0},/**
 * @param stack
 * @param index
 * @returns {number}
 */
Zt.prototype.ActionIfNgt=function(t,e){return t.pop()<t.pop()?e:0},/**
 * @param stack
 * @param index
 * @returns {number}
 */
Zt.prototype.ActionIfNle=function(t,e){return t.pop()<t.pop()?e:0},/**
 * @param stack
 * @param index
 * @returns {number}
 */
Zt.prototype.ActionIfNlt=function(t,e){var i=t.pop();return t.pop()<i?e:0},/**
 * @param stack
 * @param index
 * @returns {number}
 */
Zt.prototype.ActionIfNe=function(t,e){var i=t.pop();return t.pop()==i?0:e},/**
 * @param stack
 * @param index
 * @returns {number}
 */
Zt.prototype.ActionIfStrictEq=function(t,e){var i=t.pop();return t.pop()===i?e:0},/**
 * @param stack
 * @param index
 * @returns {number}
 */
Zt.prototype.ActionIfStrictNe=function(t,e){var i=t.pop();return t.pop()===i?0:e},/**
 * @param stack
 * @param index
 * @returns {number}
 */
Zt.prototype.ActionIfTrue=function(t,e){return!0===t.pop()?e:0},/**
 * @param stack
 */
Zt.prototype.ActionIn=function(t){var e=t.pop(),i=t.pop();t[t.length]=i in e},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionIncLocal=function(t,e){this.register[e]+=1},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionIncLocalI=function(t,e){this.register[e]+=1},/**
 * @param stack
 */
Zt.prototype.ActionIncrement=function(t){var e=t.pop();e++,t[t.length]=e},/**
 * @param stack
 */
Zt.prototype.ActionIncrementI=function(t){var e=t.pop();e++,t[t.length]=e},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionInitProperty=function(t,e){var i=t.pop(),o=this.names[e],r=t.pop();r&&(r instanceof q?r.setProperty(o,i):r[o]=i)},/**
 * @param stack
 */
Zt.prototype.ActionInstanceOf=function(t){var e=t.pop(),i=t.pop();t[t.length]=i instanceof e},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionIsType=function(t,e){var i=t.pop(),o=this.name[e];t[t.length]=i==o},/**
 * @param stack
 */
Zt.prototype.ActionIsTypeLate=function(t){var e=t.pop(),i=t.pop();t[t.length]=i==e},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionKill=function(t,e){delete this.register[e]},/**
 * @param stack
 */
Zt.prototype.ActionLabel=function(t){},/**
 * @param stack
 */
Zt.prototype.ActionLessEquals=function(t){var e=t.pop(),i=t.pop();t[t.length]=i<=e},/**
 * @param stack
 */
Zt.prototype.ActionLessThan=function(t){var e=t.pop(),i=t.pop();t[t.length]=i<e},/**
 * @param stack
 * @param offset
 * @param count
 * @param array
 */
Zt.prototype.ActionLookupSwitch=function(t,e,i,o){t.pop()},/**
 * @param stack
 */
Zt.prototype.ActionLShift=function(t){var e=t.pop(),i=t.pop();t[t.length]=i<<e},/**
 * @param stack
 */
Zt.prototype.ActionModulo=function(t){var e=t.pop(),i=t.pop();t[t.length]=i%e},/**
 * @param stack
 */
Zt.prototype.ActionMultiply=function(t){var e=t.pop(),i=t.pop();t[t.length]=i*e},/**
 * @param stack
 */
Zt.prototype.ActionMultiplyI=function(t){var e=t.pop(),i=t.pop();t[t.length]=i*e},/**
 * @param stack
 */
Zt.prototype.ActionNeGate=function(t){var e=t.pop();t[t.length]=-e},/**
 * @param stack
 */
Zt.prototype.ActionNeGateI=function(t){var e=t.pop();t[t.length]=-e},/**
 * @param stack
 */
Zt.prototype.ActionNewActivation=function(t){for(var e=this,i=e.body.trait,o=i.length,r=new Vt,n=0;n<o;n++){var a=i[n];switch(a.kind){case 0:r[n+1]=e.names[a.name]}}e.activation=r,t[t.length]=r},/**
 * @param stack
 * @param argCount
 */
Zt.prototype.ActionNewArray=function(t,e){for(var i=[],o=e;o--;)i[o]=t.pop();t[t.length]=i},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionNewCatch=function(t,e){t[t.length]=void 0},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionNewClass=function(t,e){var i=t.pop();this.data.class[e].cinit;t[t.length]=i},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionNewFunction=function(t,e){t[t.length]=function(t,e){return function(){var i=new Zt(t.data,e,t.ns,t.stage);return i.caller=this,i.parent=t,i.args=arguments,i.execute()}}(this,e)},/**
 * @param stack
 * @param argCount
 */
Zt.prototype.ActionNewObject=function(t,e){for(var i={},o=e;o--;){var r=t.pop();i[t.pop()]=r}t[t.length]=i},/**
 * @param stack
 */
Zt.prototype.ActionNextName=function(t){var e,i=+t.pop(),o=t.pop();if(o){var r=0;for(var n in o)if(o.hasOwnProperty(n)){if(r===i){e=n;break}r++}}t[t.length]=e},/**
 * @param stack
 */
Zt.prototype.ActionNextValue=function(t){t.pop(),t.pop();t[t.length]=void 0},/**
 * @param stack
 */
Zt.prototype.ActionNop=function(t){},/**
 * @param stack
 */
Zt.prototype.ActionNot=function(t){var e=t.pop();t[t.length]=!e},/**
 * @param stack
 */
Zt.prototype.ActionPop=function(t){t.pop()},/**
 *
 */
Zt.prototype.ActionPopScope=function(){this.scopeStack.pop()},/**
 * @param stack
 * @param value
 */
Zt.prototype.ActionPushByte=function(t,e){t[t.length]=0|e},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionPushDouble=function(t,e){var i=this.data.double[e];t[t.length]=+i},/**
 * @param stack
 */
Zt.prototype.ActionPushFalse=function(t){t[t.length]=!1},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionPushInt=function(t,e){var i=this.data.integer[e];t[t.length]=+i},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionPushNameSpace=function(t,e){var i=this.data.names[e];t[t.length]=+i},/**
 * @param stack
 */
Zt.prototype.ActionPushNan=function(t){t[t.length]=NaN},/**
 * @param stack
 */
Zt.prototype.ActionPushNull=function(t){t[t.length]=null},/**
 * @param stack
 */
Zt.prototype.ActionPushScope=function(t){var e=t.pop();if(e){var i=this.scopeStack;i[i.length]=e}},/**
 * @param stack
 * @param value
 */
Zt.prototype.ActionPushShort=function(t,e){t[t.length]=e},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionPushString=function(t,e){var i=this.data.string;t[t.length]=""+i[e]},/**
 * @param stack
 */
Zt.prototype.ActionPushTrue=function(t){t[t.length]=!0},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionPushUInt=function(t,e){var i=this.data.uinteger;t[t.length]=i[e]},/**
 * @param stack
 */
Zt.prototype.ActionPushUndefined=function(t){t[t.length]=void 0},/**
 * @param stack
 */
Zt.prototype.ActionPushWith=function(t){t.pop()},/**
 * @param stack
 */
Zt.prototype.ActionRShift=function(t){var e=t.pop(),i=t.pop();t[t.length]=i>>e},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionSetLocal=function(t,e){this.register[e]=t.pop()},/**
 * @param stack
 */
Zt.prototype.ActionSetLocal0=function(t){this.register[0]=t.pop()},/**
 * @param stack
 */
Zt.prototype.ActionSetLocal1=function(t){this.register[1]=t.pop()},/**
 * @param stack
 */
Zt.prototype.ActionSetLocal2=function(t){this.register[2]=t.pop()},/**
 * @param stack
 */
Zt.prototype.ActionSetLocal3=function(t){this.register[3]=t.pop()},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionSetGlobalSlot=function(t,e){t.pop()},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionSetProperty=function(t,e){var i=this,o=t.pop(),r=i.names[e],n=t.pop();if(n)if(n instanceof q)r in i.methods?n[r]=o:console.log("ActionSetProperty",r);else if(r in n)n[r]=o;else{var a=i.getBuilder(),s=i.caller;s instanceof bt&&(a=s),a instanceof q&&(r in i.methods?a[r]=o:n[r]=o)}},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionSetSlot=function(t,e){var i=t.pop(),o=t.pop()[e];this.activation[o]=i},/**
 * @param stack
 * @param index
 */
Zt.prototype.ActionSetSuper=function(t,e){t.pop(),this.names[e],t.pop()},/**
 * @param stack
 */
Zt.prototype.ActionStrictEquals=function(t){var e=t.pop(),i=t.pop();t[t.length]=i===e},/**
 * @param stack
 */
Zt.prototype.ActionSubtract=function(t){var e=t.pop(),i=t.pop();t[t.length]=i-e},/**
 * @param stack
 */
Zt.prototype.ActionSubtractI=function(t){var e=+t.pop(),i=+t.pop();t[t.length]=i-e},/**
 * @param stack
 */
Zt.prototype.ActionSwap=function(t){var e=t.pop(),i=t.pop();t[t.length]=e,t[t.length]=i},/**
 * @param stack
 */
Zt.prototype.ActionThrow=function(t){var e=t.pop();console.log(e)},/**
 * @param stack
 */
Zt.prototype.ActionTypeof=function(t){var e=t.pop();t[t.length]=typeof e},/**
 * @param stack
 */
Zt.prototype.ActionURShift=function(t){var e=t.pop(),i=t.pop();t[t.length]=e>>i};/**
 * @constructor
 */
var Vt=function(){},Wt=function(t){this.stage=t};/**
 * @type {*}
 */
Wt.prototype={adobe:{utils:{CustomActions:function(){},XMLUI:function(){}},MMEndCommand:function(t,e){console.log("TODO: MMEndCommand")},MMExecute:function(t){console.log("TODO: MMExecute")}},com:{adobe:{viewsource:{ViewSource:function(){}}}},fl:{accessibility:{AccImpl:function(){},ButtonAccImpl:function(){}}},flash:{accessibility:{Accessibility:function(){},AccessibilityImplementation:function(){},AccessibilityProperties:z},desktop:{Clipboard:function(){},ClipboardFormats:Ut,ClipboardTransferMode:Pt},display:{ActionScriptVersion:tt,AVLoader:function(){},AVM1Movie:function(){},Bitmap:et,BitmapData:it,BitmapDataChannel:ot,BitmapEncodingColorSpace:rt,BlendMode:nt,CapsStyle:at,ColorCorrection:st,ColorCorrectionSupport:ct,DisplayObject:q,DisplayObjectContainer:J,FrameLabel:ht,GradientType:lt,Graphics:pt,GraphicsBitmapFill:function(t,e,i,o){this._bitmapData=null,this._matrix=null,this._repeat=!0,this._smooth=!1},GraphicsEndFill:function(){},GraphicsGradientFill:function(t,e,i,o,r,n,a,s){this._type="linear",this._colors=null,this._alphas=null,this._ratios=null,this._matrix=null,this._spreadMethod="pad",this._interpolationMethod="rgb",this._focalPointRatio=0},GraphicsPath:function(t,e,i){this._commands=null,this._data=null,this._winding="evenOdd"},GraphicsPathCommand:ut,GraphicsPathWinding:ft,GraphicsShaderFill:function(t,e){this._shader=null,this._matrix=null},GraphicsSolidFill:function(t,e){this._color=0,this._alpha=1},GraphicsStroke:function(t,e,i,o,r,n,a){this._thickness="",this._pixelHinting=!1,this._scaleMode="normal",this._caps="none",this._joints="round",this._miterLimit=3,this._fill=null},GraphicsTrianglePath:function(t,e,i,o){this._vertices=null,this._indices=null,this._uvtData=null,this._culling="none"},InteractiveObject:K,InterpolationMethod:gt,JointStyle:dt,JPEGEncoderOptions:function(t){this._quality=80},JPEGXREncoderOptions:function(t,e,i){this._quantization=20,this._colorSpace="auto",this._trimFlexBits=0},LineScaleMode:yt,Loader:vt,LoaderInfo:function(){},MorphShape:function(){},MovieClip:bt,PixelSnapping:mt,PNGEncoderOptions:function(t){this._fastCompression=!1},Scene:At,Shader:function(t){this._code=null},ShaderData:function(t){this._byteCode=[]},ShaderInput:function(){},ShaderJob:function(t,e,i,o){this._shader=null,this._target=null,this._width=0,this._height=0},ShaderParameter:function(){},ShaderParameterType:It,ShaderPrecision:Ct,Shape:xt,SimpleButton:_t,SpreadMethod:Tt,Sprite:Q,Stage:kt,Stage3D:function(){},StageAlign:Ot,StageDisplayState:Mt,StageQuality:Bt,StageScaleMode:wt,SWFVersion:St,TriangleCulling:Ft},display3D:{Program3D:function(){},textures:{CubeTexture:function(){},RectangleTexture:function(){},Texture:function(){},VideoTexture:function(){}}},geom:{ColorTransform:m,Matrix:S,Matrix3D:A,Orientation3D:I,PerspectiveProjection:C,Point:x,Rectangle:_,Transform:T,Utils3D:k,Vector3D:O},errors:{EOFError:function(t){this._message=""},IllegalOperationError:function(t){this._message=""},InvalidSWFError:function(t,e){this._message="",this._id=0},IOError:function(t){this._message=""},MemoryError:function(t){this._message=""},ScriptTimeoutError:function(t){this._message=""},StackOverflowError:function(t){this._message=""}},events:{AccelerometerEvent:function(t,e,i,o,r,n,a){this._type="",this._bubbles=!1,this._cancelable=!1,this._timestamp=0,this._accelerationX=0,this._accelerationY=0,this._accelerationZ=0},ActivityEvent:function(t,e,i,o){this._type="",this._bubbles=!1,this._cancelable=!1,this._activating=!1},AsyncErrorEvent:function(t,e,i,o,r){this._type="",this._bubbles=!1,this._cancelable=!1,this._text="",this._error=null},AVDictionaryDataEvent:function(t,e,i,o,r){this._type="",this._bubbles=!1,this._cancelable=!1,this._init_dictionary=null,this.init_dataTime=null},AVHTTPStatusEvent:function(t,e,i,o,r){this._type="",this._bubbles=!1,this._cancelable=!1,this._status=0,this._responseUrl=null},AVPauseAtPeriodEndEvent:function(t,e,i,o){this._type="",this._bubbles=!1,this._cancelable=!1,this._userData=0},ContextMenuEvent:function(t,e,i,o,r){this._type="",this._bubbles=!1,this._cancelable=!1,this._mouseTarget=null,this._contextMenuOwner=null},DataEvent:function(t,e,i,o){this._type="",this._bubbles=!1,this._cancelable=!1,this._data=""},Event:function(){},EventDispatcher:b,MouseEvent:i.prototype.$clipEvent},external:{ExternalInterface:function(){}},globalization:{Collator:function(t,e){this._requestedLocaleIDName="",this._initialMode="sorting"},CollatorMode:M,CurrencyFormatter:function(t){this._requestedLocaleIDName=""},CurrencyParseResult:function(t,e){this._value="",this._symbol=""},DateTimeFormatter:function(t,e,i){this._requestedLocaleIDName="",this._dateStyle="long",this._timeStyle="long"},DateTimeNameContext:B,DateTimeNameStyle:w,DateTimeStyle:F,LastOperationStatus:U,LocaleID:function(t){this._name=""},NationalDigitsType:P,NumberFormatter:function(t){this._requestedLocaleIDName=""},NumberParseResult:function(t,e,i){this._value="",this._startIndex=2147483647,this._endIndex=2147483647},StringTools:function(t){this._requestedLocaleIDName=""}},text:{AntiAliasType:function(){},CSMSettings:function(){},Font:function(){},FontStyle:function(){},FontType:function(){},GridFitType:function(){},StaticText:$t,StyleSheet:function(){},TextColorType:function(){},TextDisplayMode:function(){},TextField:Lt,TextFieldAutoSize:function(){},TextFieldType:function(){},TextFormat:Et,TextFormatAlign:function(){},TextLineMetrics:function(){},TextRenderer:function(){},TextSnapshot:Yt},media:{AVNetworkingParams:function(){},AVURLLoader:function(){},AVURLStream:function(){},Camera:function(){},ID3Info:function(){},Microphone:function(){},Sound:Nt,SoundChannel:function(){},SoundCodec:function(){},SoundLoaderContext:function(){},SoundMixer:function(){},SoundTransform:Rt,StageVideo:function(){},StageVideoAvailability:function(){},StageVideoAvailabilityReason:function(){},Video:function(){},VideoStatus:function(){}},filters:{BevelFilter:L,BitmapFilter:$,BitmapFilterQuality:E,BitmapFilterType:D,BlurFilter:Y,ColorMatrixFilter:N,ConvolutionFilter:R,DisplacementMapFilter:X,DisplacementMapFilterMode:H,DropShadowFilter:j,GlowFilter:G,GradientBevelFilter:Z,GradientGlowFilter:V,ShaderFilter:W},net:{FileFilter:function(){},FileReference:function(){},FileReferenceList:function(){},GroupSpecifier:function(){},LocalConnection:function(){},NetConnection:function(){},NetGroup:function(){},NetGroupInfo:function(){},NetGroupReceiveMode:function(){},NetGroupReplicationStrategy:function(){},NetGroupSendMode:function(){},NetGroupSendResult:function(){},NetStream:function(){},NetStreamAppendBytesAction:function(){},NetStreamInfo:function(){},NetStreamMulticastInfo:function(){},NetStreamPlayOptions:function(){},NetStreamPlayTransitions:function(){},ObjectEncoding:function(){},Responder:function(){},SecureSocket:function(){},SharedObject:g,SharedObjectFlushStatus:function(){},Socket:function(){},URLLoader:function(){},URLLoaderDataFormat:function(){},URLRequest:Xt,URLRequestHeader:function(){},URLRequestMethod:function(){},URLStream:function(){},URLVariables:function(){},XMLSocket:function(){}},printing:{PrintJob:function(){},PrintJobOptions:function(t){this._printAsBitmap=!1},PrintJobOrientation:Ht},system:{fscommand:function(){var t=arguments[0],e=arguments[1];switch(void 0===e&&(e=""),t){case"quit":case"fullscreen":case"allowscale":case"showmenu":case"exec":case"trapallkeys":break;default:if(t){var i=(this.tagId?this.tagId:this.getName())+"_DoFSCommand(command, args);";new Func("command","args",i)(t,e)}}return!0}},xml:{XMLDocument:function(t){this._source=null},XMLNode:function(t,e){this._type=null,this._value=null},XMLNodeType:jt}}};/*jshint bitwise: false*/
/**
 * @constructor
 */
var zt=function(){this.data=null,this.bit_offset=0,this.byte_offset=0,this.bit_buffer=null};/**
 * util
 */
zt.prototype=Object.create(i.prototype),zt.prototype.constructor=zt,/**
 * @param data
 */
zt.prototype.generate=function(t){for(var e=0|t.length,i=this.createArray(e),o=0;o<e;)i[o]=255&t.charCodeAt(o),o=o+1|0;this.data=i},/**
 * @param str
 * @returns {XML|string|void|*}
 */
zt.prototype.decodeToShiftJis=function(t){var e=this;return t.replace(/%(8[1-9A-F]|[9E][0-9A-F]|F[0-9A-C])(%[4-689A-F][0-9A-F]|%7[0-9A-E]|[@-~])|%([0-7][0-9A-F]|A[1-9A-F]|[B-D][0-9A-F])/gi,function(t){var i=e.$parseInt(t.substring(1,3),16),o=t.length;return 3===o?e.$fromCharCode(i<160?i:i+65216):e.$JCT11280.charAt(188*(i<160?i-129:i-193)+(4===o?t.charCodeAt(3)-64:(i=e.$parseInt(t.substring(4),16))<127?i-64:i-65))})},/**
 * @param compressed
 * @param size
 * @returns {*}
 */
zt.prototype.unlzma=function(t,e){var i=this,o=function(t){this.buffer=t,this.processed=0};/**
     * properties
     */
Object.defineProperties(q.prototype,{available:{get:function(){return this.buffer.length-this.processed|0}}}),/**
     * @returns {*}
     */
o.prototype.readByte=function(){var t=0|this.buffer[this.processed];return this.processed=this.processed+1|0,t};/**
     * @param size
     * @constructor
     */
var r=function(t){this.buffer=i.$canArrayBuffer?new Uint8Array(t):[],this.processed=0};/**
     * @returns {Array}
     */
r.prototype.getBuffer=function(){return this.buffer},/**
     * @param data
     */
r.prototype.add=function(t){for(var e=0|t.length,i=0;i<e;)this.buffer[this.processed]=0|t[i],this.processed=this.processed+1|0,i=i+1|0};/**
     * @param outStream
     * @constructor
     */
var n=function(t){this.outStream=t,this.buf=null,this.pos=0,this.size=0,this.isFull=!1,this.writePos=0,this.totalPos=0};/**
     * @param dictSize
     */
n.prototype.create=function(t){this.buf=i.$canArrayBuffer?new Uint8Array(t):[],this.pos=0,this.size=t,this.isFull=!1,this.writePos=0,this.totalPos=0},/**
     * @param byte
     */
n.prototype.putByte=function(t){this.totalPos=this.totalPos+1|0,this.buf[this.pos]=t,this.pos=this.pos+1|0,this.pos===this.size&&(this.flush(),this.pos=0,this.isFull=!0)},/**
     * @param dist
     * @returns {*}
     */
n.prototype.getByte=function(t){return this.buf[t<=this.pos?this.pos-t:this.size-t+this.pos]},/**
     * flush
     */
n.prototype.flush=function(){if(this.writePos<this.pos){for(var t=this.pos-this.writePos,e=i.$canArrayBuffer?new Uint8Array(t):[],o=this.buf,r=this.writePos;r<this.pos;)e[r]=o[r],r=r+1|0;this.outStream.add(e),this.writePos=this.pos===this.size?0:0|this.pos}},/**
     * @param dist
     * @param len
     */
n.prototype.copyMatch=function(t,e){for(var o=this.pos,r=this.size,n=this.buf,a=t<=o?o-t:r-t+o,s=e;s>0;){for(var c=i.$min(i.$min(s,r-o),r-a),h=0;h<c;){var l=n[a];a=a+1|0,n[o]=l,o=o+1|0,h=h+1|0}o===r&&(this.pos=o,this.flush(),o=0,this.isFull=!0),a===r&&(a=0),s=s-c|0}this.pos=o,this.totalPos=this.totalPos+e|0},/**
     * @param dist
     * @returns {boolean}
     */
n.prototype.checkDistance=function(t){return t<=this.pos||this.isFull},/**
     * @returns {boolean}
     */
n.prototype.isEmpty=function(){return 0===this.pos&&!this.isFull};/**
     * @param inStream
     * @constructor
     */
var a=function(t){this.inStream=t,this.range=0,this.code=0};/**
     * init
     */
a.prototype.init=function(){this.inStream.readByte(),// rev
this.range=-1;for(var t=0,e=0;e<4;)t=t<<8|this.inStream.readByte(),e=e+1|0;this.code=t},/**
     * @returns {boolean}
     */
a.prototype.isFinishedOK=function(){return 0===this.code},/**
     * @param numBits
     * @returns {number}
     */
a.prototype.decodeDirectBits=function(t){for(var e=0,i=this.range,o=this.code;t;){var r=(o=o-(i=i>>>1|0)|0)>>31;o=o+(i&r)|0,i>=0&&i<16777216&&(i<<=8,o=o<<8|this.inStream.readByte()),e=(e<<1)+r+1|0,t=t-1|0}return this.range=i,this.code=o,e},/**
     * @param prob
     * @param index
     * @returns {*}
     */
a.prototype.decodeBit=function(t,e){var i,o=this.range,r=this.code,n=0|t[e],a=(o>>>11)*n;return r>>>0<a?(n=n+(2048-n>>5)|0,o=0|a,i=0):(n=n-(n>>5)|0,r=r-a|0,o=o-a|0,i=1),t[e]=65535&n,o>=0&&o<16777216&&(o<<=8,r=r<<8|this.inStream.readByte()),this.range=o,this.code=r,i};/**
     * @param numBits
     * @constructor
     */
var s=function(t){this.numBits=t,this.probs=this.createProbsArray(1<<t)};/**
     * @param length
     * @returns {*}
     */
s.prototype.createProbsArray=function(t){for(var e=i.$canArrayBuffer?new Uint16Array(t):[],o=0;o<t;)e[o]=1024,o=o+1|0;return e},/**
     * @param rc
     * @returns {number}
     */
s.prototype.decode=function(t){for(var e=1,i=0,o=this.numBits;i<o;)i=i+1|0,e=(e<<1)+t.decodeBit(this.probs,e);return e-(1<<this.numBits)},/**
     * @param rc
     * @returns {number|*}
     */
s.prototype.reverseDecode=function(t){return this.bitTreeReverseDecode(this.probs,0,this.numBits,t)},/**
     * @param probs
     * @param offset
     * @param numBits
     * @param rc
     * @returns {number}
     */
s.prototype.bitTreeReverseDecode=function(t,e,i,o){for(var r=1,n=0,a=0;a<i;){var s=o.decodeBit(t,r+e);r=(r<<1)+s,n|=s<<a,a=a+1|0}return n};/**
     *
     * @constructor
     */
var c=function(){this.choice=this.createProbsArray(2),this.lowCoder=this.createBitTreeDecoderArray(3,16),this.midCoder=this.createBitTreeDecoderArray(3,16),this.highCoder=new s(8)};/**
     * @param length
     * @returns {*}
     */
c.prototype.createProbsArray=function(t){for(var e=i.$canArrayBuffer?new Uint16Array(t):[],o=0;o<t;)e[o]=1024,o=o+1|0;return e},/**
     * @param numBits
     * @param length
     * @returns {Array}
     */
c.prototype.createBitTreeDecoderArray=function(t,e){var i=[];i.length=e;for(var o=0;o<e;)i[o]=new s(t),o=o+1|0;return i},/**
     * @param rc
     * @param posState
     * @returns {*}
     */
c.prototype.decode=function(t,e){return 0===t.decodeBit(this.choice,0)?this.lowCoder[e].decode(t):0===t.decodeBit(this.choice,1)?8+this.midCoder[e].decode(t):16+this.highCoder.decode(t)};/**
     * @param data
     * @param size
     * @constructor
     */
var h=function(t,e){var s=new o(t),c=new r(e);this.outStream=c,this.rangeDec=new a(s),this.outWindow=new n(c),this.lc=0,this.pb=0,this.lp=0,this.dictSize=0,this.dictSizeInProperties=0,this.leftToUnpack=void 0,this.reps=i.$canArrayBuffer?new Int32Array(4):[],this.state=0;for(var h=i.$canArrayBuffer?new Uint8Array(13):[],l=0;l<13;)h[l]=0|s.readByte(),l=l+1|0;var p=0,u=!1;for(l=0;l<8;){var f=h[5+l];255!==f&&(u=!0),p|=f<<8*l,l=l+1|0}this.markerIsMandatory=!u,this.unpackSize=u?p:void 0,this.decodeProperties(h)};/**
     * @param properties
     * @returns {Decoder}
     */
h.prototype.decodeProperties=function(t){var e=0|t[0];this.lc=e%9,e=e/9|0,this.pb=e/5|0,this.lp=e%5,this.dictSizeInProperties=0;for(var i=0;i<4;)this.dictSizeInProperties|=t[i+1]<<8*i,i=i+1|0;this.dictSize=this.dictSizeInProperties,this.dictSize<4096&&(this.dictSize=4096)},/**
     * @returns {Decoder}
     */
h.prototype.create=function(){return this.outWindow.create(this.dictSize),this.init(),this.rangeDec.init(),this.reps[0]=0,this.reps[1]=0,this.reps[2]=0,this.reps[3]=0,this.state=0,this.leftToUnpack=this.unpackSize,this},/**
     * @param state
     * @param rep0
     * @returns {number}
     */
h.prototype.decodeLiteral=function(t,e){var i=this.outWindow,o=this.rangeDec,r=0;i.isEmpty()||(r=i.getByte(1));var n=1,a=768*(((i.totalPos&(1<<this.lp)-1)<<this.lc)+(r>>8-this.lc));if(t>=7){var s=i.getByte(e+1);do{var c=s>>7&1;s<<=1;var h=o.decodeBit(this.litProbs,a+((1+c<<8)+n));if(n=n<<1|h,c!==h)break}while(n<256)}for(;n<256;)n=n<<1|o.decodeBit(this.litProbs,a+n);return n-256&255},/**
     * @param length
     * @returns {*}
     */
h.prototype.decodeDistance=function(t){var e=t;e>3&&(e=3);var i=this.rangeDec,o=this.posSlotDecoder[e].decode(i);if(o<4)return o;var r=(o>>1)-1,n=(2|1&o)<<r;return n=o<14?n+this.bitTreeReverseDecode(this.posDecoders,n-o,r,i)|0:(n=n+(i.decodeDirectBits(r-4)<<4)|0)+this.alignDecoder.reverseDecode(i)|0},/**
     * @param probs
     * @param offset
     * @param numBits
     * @param rc
     * @returns {number}
     */
h.prototype.bitTreeReverseDecode=function(t,e,i,o){for(var r=1,n=0,a=0;a<i;){var s=o.decodeBit(t,r+e);r=(r<<1)+s,n|=s<<a,a=a+1|0}return n},/**
     * init
     */
h.prototype.init=function(){this.litProbs=this.createProbsArray(768<<this.lc+this.lp),this.posSlotDecoder=this.createBitTreeDecoderArray(6,4),this.alignDecoder=new s(4),this.posDecoders=this.createProbsArray(115),this.isMatch=this.createProbsArray(192),this.isRep=this.createProbsArray(12),this.isRepG0=this.createProbsArray(12),this.isRepG1=this.createProbsArray(12),this.isRepG2=this.createProbsArray(12),this.isRep0Long=this.createProbsArray(192),this.lenDecoder=new c,this.repLenDecoder=new c},/**
     * @param numBits
     * @param length
     */
h.prototype.createBitTreeDecoderArray=function(t,e){var i=[];i.length=e;for(var o=0;o<e;)i[o]=new s(t),o=o+1|0;return i},/**
     * @param length
     * @returns {*}
     */
h.prototype.createProbsArray=function(t){for(var e=i.$canArrayBuffer?new Uint16Array(t):[],o=0;o<t;)e[o]=1024,o=o+1|0;return e},/**
     * @param state
     * @returns {number}
     */
h.prototype.updateStateLiteral=function(t){return t<4?0:t<10?t-3:t-6},/**
     * @returns {*}
     */
h.prototype.decode=function(){for(var t=this.rangeDec,e=this.outWindow,i=this.pb,o=this.markerIsMandatory,r=this.leftToUnpack,n=this.isMatch,a=this.isRep,s=this.isRepG0,c=this.isRepG1,h=this.isRepG2,l=this.isRep0Long,p=this.lenDecoder,u=this.repLenDecoder,f=this.reps[0],g=this.reps[1],d=this.reps[2],y=this.reps[3],v=this.state;;){if(t.inStream.available<48){this.outWindow.flush();break}0!==r||o||this.outWindow.flush();var b=e.totalPos&(1<<i)-1;if(0!==t.decodeBit(n,(v<<4)+b)){var m;if(0!==t.decodeBit(a,v)){if(0===t.decodeBit(s,v)){if(0===t.decodeBit(l,(v<<4)+b)){v=v<7?9:11,e.putByte(e.getByte(f+1)),r=r-1|0;continue}}else{var S;0===t.decodeBit(c,v)?S=g:(0===t.decodeBit(h,v)?S=d:(S=y,y=d),d=g),g=f,f=S}m=u.decode(t,b),v=v<7?8:11}else
// end
if(y=d,d=g,g=f,m=p.decode(t,b),v=v<7?7:10,-1===(f=this.decodeDistance(m)))return this.outWindow.flush(),this;m=m+2|0,void 0!==r&&r<m&&(m=r),e.copyMatch(f+1,m),r=r-m|0}else e.putByte(this.decodeLiteral(v,f)),v=this.updateStateLiteral(v),r=r-1|0}},/**
     * @returns {Array}
     */
h.prototype.output=function(){return this.outStream.getBuffer()};for(
// swf header rebuild
var l=[],p=12;p<17;)l[l.length]=t[p],p=p+1|0;for(p=4;p<8;)l[l.length]=t[p],p=p+1|0;for(var u=8,f=5;f<9;){if(l[f]>=u){l[f]=l[f]-u|0;break}l[f]=256+l[f]-u|0,u=1,f=f+1|0}for(p=0;p<4;)l[l.length]=0,p=p+1|0;var g=l.length;for(f=0,p=4;f<g;)t[f+p]=0|l[f],f=f+1|0;return new h(this.$canArrayBuffer?new Uint8Array(t.slice(4)):t.slice(4),e).create().decode().output()},/**
 * @param compressed
 * @param isDeCompress
 * @returns {Array}
 */
zt.prototype.unzip=function(t,e){var i=0,o=0,r=0,n=[],a=[],s=new zt;s.setData(t);var c=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],h=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,99,99],l=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],p=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],u=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];this.$canArrayBuffer&&(c=new Uint8Array(c),h=new Uint8Array(h),p=new Uint8Array(p),l=new Uint16Array(l),u=new Uint16Array(u));var f=2;e&&(f=10),s.setOffset(f,8);for(var g=0;!g;){g=s.readUB(1);var d=s.readUB(2),y={},v={},b=!1,m=!1;if(d){if(1===d){if(y=b,v=m,!y){for(a=[],o=32;o;)o=o-1|0,a[a.length]=5;y=b=this.buildHuffTable(a)}if(!v){for(a=[],o=0;o<144;)o=o+1|0,a[a.length]=8;for(;o<256;)o=o+1|0,a[a.length]=9;for(;o<280;)o=o+1|0,a[a.length]=7;for(;o<288;)o=o+1|0,a[a.length]=8;v=m=this.buildHuffTable(a)}}else{var S=s.readUB(5)+257,A=s.readUB(5)+1,I=s.readUB(4)+4,C=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(this.$canArrayBuffer&&(C=new Uint8Array(C)),o=0;o<I;)C[c[o]]=s.readUB(3),o=o+1|0;var x=this.buildHuffTable(C);C=null;for(var _=[],T=0,k=S+A|0;_.length<k;)switch(i=this.decodeSymbol(s,x)){case 16:for(o=s.readUB(2)+3|0;o;)o=o-1|0,_[_.length]=T;break;case 17:for(o=s.readUB(3)+3|0;o;)o=o-1|0,_[_.length]=0;break;case 18:for(o=s.readUB(7)+11|0;o;)o=o-1|0,_[_.length]=0;break;default:i<=15&&(_[_.length]=i,T=i)}y=this.buildHuffTable(_.splice(S,A)),v=this.buildHuffTable(_)}for(i=0;256!==i;)if((i=0|this.decodeSymbol(s,v))<256)n[n.length]=i;else if(i>256){var O=i-257|0;r=l[O]+s.readUB(h[O])|0;var M=this.decodeSymbol(s,y),B=u[M]+s.readUB(p[M])|0;for(o=n.length-B|0;r;)r=r-1|0,n[n.length]=n[o],o=o+1|0}}else// nlen
for(s.bit_offset=8,s.bit_buffer=null,r=0|s.readNumber(2),s.readNumber(2);r;)r=r-1|0,n[n.length]=s.readNumber(1)}return n},/**
 * @param data
 * @returns {{}}
 */
zt.prototype.buildHuffTable=function(t){for(var e=0|t.length,i=0,o=0,r=0,n=[],a=[],s={},c=0;c<e;)r=this.$max(r,t[c]),c=c+1|0;for(r=r+1|0,c=e;c;)n[o=t[c=c-1|0]]=(n[o]||0)+(o>0);for(c=1;c<r;)(o=c-1|0)in n||(n[o]=0),i=i+n[o]<<1,a[c]=0|i,c=c+1|0;for(c=0;c<e;)(o=t[c])&&(s[a[o]]={length:o,symbol:c},a[o]=a[o]+1|0),c=c+1|0;return s},/**
 * @param bitio
 * @param table
 * @returns {*}
 */
zt.prototype.decodeSymbol=function(t,e){for(var i=0,o=0;;)if(i=i<<1|t.readUB(1),o=o+1|0,i in e){var r=e[i];if(r.length===o)return r.symbol}},/**
 * @param length
 * @returns {Array}
 */
zt.prototype.createArray=function(t){return this.$canArrayBuffer?new Uint8Array(t):[]},/**
 * @param data
 */
zt.prototype.setData=function(t){this.data=t},/**
 * @returns {string}
 */
zt.prototype.getHeaderSignature=function(){for(var t="",e=3;e;){var i=this.getUI8();switch(i){
// trim
case 32:case 96:case 127:continue}t+=this.$fromCharCode(i),e=e-1|0}return t},/**
 * @returns {number}
 */
zt.prototype.getVersion=function(){return this.getUI8()},/**
 * byteAlign
 */
zt.prototype.byteAlign=function(){this.bit_offset&&(this.byte_offset=this.byte_offset+(this.bit_offset+7)/8|0,this.bit_offset=0)},/**
 * @param length
 * @returns {Array}
 */
zt.prototype.getData=function(t){this.byteAlign();for(var e=this.createArray(t),i=0,o=this.data,r=t;r;)e[i]=o[this.byte_offset],i=i+1|0,this.byte_offset=this.byte_offset+1|0,r=r-1|0;return e},/**
 * @param value
 * @param isJis
 * @returns {string}
 */
zt.prototype.getDataUntil=function(t,e){this.byteAlign();var i=this.data,o=0|this.byte_offset,r=0;if(null===t)r=-1;else for(var n=0|i.length;;){var a=i[o+r];if(r=r+1|0,0===a||o+r>=n)break}var s=-1===r?i.length-o:r,c=[],h="",l=Array.prototype.join,p=0;if(null!==t){for(p=0;p<s;){var u=i[o+p];p=p+1|0,10!==u&&13!==u||(c[c.length]="\n"),u<32||(c[c.length]="%"+u.toString(16))}if(c.length){var f=l.call(c,"");if(f.length>5&&"\n"===f.substr(-5)&&(f=f.slice(0,-5)),e)h=this.decodeToShiftJis(f);else try{h=decodeURIComponent(f)}catch(t){h=this.decodeToShiftJis(f)}}}else for(p=0;p<s;)h+=this.$fromCharCode(i[o+p]),p=p+1|0;return this.byte_offset=o+s,h},/**
 * byteCarry
 */
zt.prototype.byteCarry=function(){if(this.bit_offset>7)this.byte_offset=this.byte_offset+(0|(this.bit_offset+7)/8),this.bit_offset&=7;else for(;this.bit_offset<0;)this.byte_offset=this.byte_offset-1|0,this.bit_offset=this.bit_offset+8|0},/**
 * @param number
 * @returns {number}
 */
zt.prototype.getUIBits=function(t){for(var e=0;t;)e<<=1,e|=this.getUIBit(),t=t-1|0;return e},/**
 * @returns {number}
 */
zt.prototype.getUIBit=function(){this.byteCarry();var t=this.data[this.byte_offset]>>7-this.bit_offset&1;return this.bit_offset=this.bit_offset+1|0,t},/**
 * @param number
 * @returns {number}
 */
zt.prototype.getSIBits=function(t){var e=this.getUIBits(t),i=e&1<<t-1;return i?-(e^2*i-1)-1:e},/**
 * @returns {number}
 */
zt.prototype.getUI8=function(){this.byteAlign();var t=this.data[this.byte_offset];return this.byte_offset=this.byte_offset+1|0,t},/**
 * @returns {number}
 */
zt.prototype.getUI16=function(){return this.byteAlign(),this.getUI8()|this.getUI8()<<8},/**
 * @returns {number}
 */
zt.prototype.getUI24=function(){return this.byteAlign(),this.getUI8()|(this.getUI8()|this.getUI8()<<8)<<8},/**
 * @returns {number}
 */
zt.prototype.getUI32=function(){return this.byteAlign(),this.getUI8()|(this.getUI8()|(this.getUI8()|this.getUI8()<<8)<<8)<<8},/**
 * @returns {number}
 */
zt.prototype.getUI16BE=function(){return this.byteAlign(),this.getUI8()<<8|this.getUI8()},/**
 * @returns {*}
 */
zt.prototype.getFloat16=function(){var t=this.getData(2),e=0;return e|=t[1]<<8,e|=t[0]<<0},/**
 * @returns {*}
 */
zt.prototype.getFloat32=function(){var t=this.getData(4),e=0;e|=t[3]<<24,e|=t[2]<<16,e|=t[1]<<8;var i=2147483648&(e|=t[0]<<0),o=e>>23&255,r=8388607&e;return e&&2147483648!==e?(i?-1:1)*(8388608|r)*this.$pow(2,o-127-23):0},/**
 * @returns {number}
 */
zt.prototype.getFloat64=function(){var t=this.getUI32(),e=this.getUI32(),i=t>>>31&1,o=t>>>20&2047,r=1048575&t;return t||e?(0===i?1:-1)*(r/1048576+e/4503599627370496+1)*this.$pow(2,o-1023):0},/**
 * @returns {number}
 */
zt.prototype.getFloat64LittleEndian=function(){for(var t="",e=0;e<8;){for(var i=this.getUI8().toString(2);i.length<8;)i="0"+i;t=i+t,e=e+1|0}var o="1"===t.charAt(0)?-1:1,r=this.$parseInt(t.substr(1,11),2)-1023,n=t.substr(12,52),a="1"+n,s=1,c=0;if(-1023===r){if(-1===n.indexOf("1"))return 0;r=-1022,a="0"+n}for(var h=0;h<a.length;)c+=s*(0|a.charAt(h)),s/=2,h=h+1|0;return o*c*this.$pow(2,r)},/**
 * @param data
 * @returns {number}
 */
zt.prototype.toUI16=function(t){return t[0]+(t[1]<<8)},/**
 * @param data
 * @returns {number}
 */
zt.prototype.toSI16LE=function(t){var e=this.toUI16(t);return e<32768?e:e-65536},/**
 * @returns {number}
 */
zt.prototype.getSI8=function(){var t=this.getUI8();// nBits = 8;
return t>>7&&(t=t-256|0),t},/**
 * @returns {*}
 */
zt.prototype.getSI24=function(){var t=this.getUI24();// nBits = 24;
return t>>23&&(t=t-16777216|0),t},/**
 * @param byteInt
 * @param bitInt
 */
zt.prototype.incrementOffset=function(t,e){this.byte_offset=this.byte_offset+t|0,this.bit_offset=this.bit_offset+e|0,this.byteCarry()},/**
 * @param byteInt
 * @param bitInt
 */
zt.prototype.setOffset=function(t,e){this.byte_offset=t,this.bit_offset=e},/**
 * @returns {number}
 */
zt.prototype.getU30=function(){for(var t=0,e=0;e<5;){var i=this.getUI8();if(t|=(127&i)<<7*e,!(128&i))break;e=e+1|0}return t},/**
 * @returns {number}
 */
zt.prototype.getS30=function(){var t=this.byte_offset,e=this.getU30(),i=8*(this.byte_offset-t)|0;return e>>i-1&&(e=e-this.$pow(2,i)|0),e},/**
 * @param offset
 * @returns {number}
 */
zt.prototype.ReadU30=function(t){for(var e=0,i=this.data,o=0;o<5;){var r=i[t];if(t=t+1|0,e|=(127&r)<<7*o,!(128&r))break;o=o+1|0}return e},/**
 * @returns {string}
 */
zt.prototype.AbcReadString=function(){for(var t=this.byte_offset,e=this.ReadU30(t)+1,i=[],o=0;o<e;){o=o+1|0;var r=this.getUI8();if(!(r<33)){switch(r){default:break;case 34:case 35:case 36:case 37:case 38:case 39:case 43:case 45:continue}i[i.length]=this.$fromCharCode(r)}}return i.join("")},/**
 * @param length
 * @returns {number}
 */
zt.prototype.readUB=function(t){for(var e=0,i=0;i<t;)8===this.bit_offset&&(this.bit_buffer=this.readNumber(1),this.bit_offset=0),e|=(this.bit_buffer&1<<this.bit_offset?1:0)<<i,this.bit_offset=this.bit_offset+1|0,i=i+1|0;return e},/**
 * @returns {number}
 */
zt.prototype.readNumber=function(t){for(var e=0,i=this.byte_offset,o=i+t;o>i;)o=o-1|0,e=e<<8|this.data[o];return this.byte_offset=this.byte_offset+t,e},/**
 * @param size
 * @param mode
 */
zt.prototype.deCompress=function(t,e){var i=this.byte_offset;this.byte_offset=0;
// header
var o,r=this.getData(i);switch(e){case"ZLIB":o=this.unzip(this.data,!0);break;case"LZMA":o=this.unlzma(this.data,t-i)}for(
// create new array
var n=this.createArray(t),a=0,s=0,c=r.length;a<c;)n[s]=0|r[a],s=s+1|0,a=a+1|0;for(
// data
a=0,c=o.length;a<c;)n[s]=0|o[a],s=s+1|0,a=a+1|0;this.data=n,this.byte_offset=i};/*jshint bitwise: false*/
/**
 * @param stage
 * @param bitio
 * @constructor
 */
var qt=function(t,e){this.stage=t,this.bitio=e,this.currentPosition={x:0,y:0},this.jpegTables=null};/**
 * util
 */
qt.prototype=Object.create(i.prototype),qt.prototype.constructor=qt,/**
 * @returns {*}
 */
qt.prototype.getStage=function(){return this.stage},/**
 * @returns {*}
 */
qt.prototype.getBitIO=function(){return this.bitio},/**
 * @param mc
 * @returns {Array}
 */
qt.prototype.parse=function(t){var e=0|this.getBitIO().data.length;return this.parseTags(e,t.characterId)},/**
 * @param tags
 * @param parent
 */
qt.prototype.build=function(t,e){if(0|t.length){var i=[];for(var o in t)if(t.hasOwnProperty(o)){var r=t[o];this.showFrame(r,e,i)}}},/**
 * @param obj
 * @param mc
 * @param originTags
 */
qt.prototype.showFrame=function(t,e,i){var o,r=[],n=t.frame,a=this.getStage();n in i||(i[n]=[]),e.setTotalFrames(this.$max(e.getTotalFrames(),n));
// add ActionScript
var s=t.actionScript;if(s.length)for(o in s)s.hasOwnProperty(o)&&e.setActions(n,s[o]);
// add label
var c=t.labels;if(c.length)for(o in c)if(c.hasOwnProperty(o)){var h=c[o];e.addLabel(h.frame,h.name)}
// add sounds
var l=t.sounds;if(l.length)for(o in l)l.hasOwnProperty(o)&&e.addSound(n,l[o]);var p=t.cTags;if(p.length)for(o in p)if(p.hasOwnProperty(o)){var u=p[o];r[u.Depth]=!0,this.buildTag(n,u,e,i)}
// remove tag
var f=t.removeTags;if(f.length){e.setRemoveTag(n,f);for(o in f)f.hasOwnProperty(o)&&(r[f[o].Depth]=!0)}
// copy
if(n>1){var g=n-1|0,d=e.container;if(g in d){var y=d[g];if(n in d||(d[n]=[]),0|y.length){var v=e.instanceId;for(var b in y)y.hasOwnProperty(b)&&(b in r||(d[n][b]=y[b],a.copyPlaceObject(v,b,n),i[n][b]=i[g][b]))}}}},/**
 * @param frame
 * @param tag
 * @param parent
 * @param originTags
 */
qt.prototype.buildTag=function(t,e,i,o){var r=i.container;t in r||(r[t]=[]);var n=!0;if(e.PlaceFlagMove){var a=o[t-1][e.Depth];void 0!==a&&(e.PlaceFlagHasCharacter?e.CharacterId!==a.CharacterId&&(n=!1):(e.PlaceFlagHasCharacter=a.PlaceFlagHasCharacter,e.CharacterId=a.CharacterId),!e.PlaceFlagHasMatrix&&a.PlaceFlagHasMatrix&&(e.PlaceFlagHasMatrix=a.PlaceFlagHasMatrix,e.Matrix=a.Matrix),!e.PlaceFlagHasColorTransform&&a.PlaceFlagHasColorTransform&&(e.PlaceFlagHasColorTransform=a.PlaceFlagHasColorTransform,e.ColorTransform=a.ColorTransform),!e.PlaceFlagHasClipDepth&&a.PlaceFlagHasClipDepth&&(e.PlaceFlagHasClipDepth=a.PlaceFlagHasClipDepth,e.ClipDepth=a.ClipDepth),!e.PlaceFlagHasClipActions&&a.PlaceFlagHasClipActions&&(e.PlaceFlagHasClipActions=a.PlaceFlagHasClipActions,e.ClipActionRecords=a.ClipActionRecords),e.PlaceFlagHasRatio||n||(e.PlaceFlagHasRatio=1,e.Ratio=t-1|0),!e.PlaceFlagHasFilterList&&a.PlaceFlagHasFilterList&&(e.PlaceFlagHasFilterList=a.PlaceFlagHasFilterList,e.SurfaceFilterList=a.SurfaceFilterList),!e.PlaceFlagHasBlendMode&&a.PlaceFlagHasBlendMode&&(e.PlaceFlagHasBlendMode=a.PlaceFlagHasBlendMode,e.BlendMode=a.BlendMode))}o[t][e.Depth]=e;var s=this.buildObject(e,i,n,t);if(s){var c=this.getStage(),h=this.buildPlaceObject(e);c.setPlaceObject(h,i.instanceId,e.Depth,t),r[t][e.Depth]=s.instanceId}},/**
 * @param tag
 * @param parent
 * @param isCopy
 * @param frame
 * @returns {*}
 */
qt.prototype.buildObject=function(t,e,i,o){var r=this.getStage(),n=r.getCharacter(t.CharacterId);if(!n)return null;var a=n.tagType,s=!1;46!==a&&84!==a||(s=!0);var c={};if(!s&&t.PlaceFlagMove&&i){var h=e.container[o-1][t.Depth];c=r.getInstance(h)}else{if(n instanceof Array)c=this.buildMovieClip(t,n,e);else switch(a){case 11:// DefineText
case 33:// DefineText2
c=this.buildText(t,n);break;case 37:// DefineEditText
c=this.buildTextField(t,n,e);break;case 2:// DefineShape
case 22:// DefineShape2
case 32:// DefineShape3
case 83:// DefineShape4
c=this.buildShape(t,n);break;case 46:// MorphShape
case 84:// MorphShape2
var l=this.buildMorphShape(n,t.Ratio);l.tagType=a,c=this.buildShape(t,l);break;case 7:// DefineButton
case 34:// DefineButton2
c=this.buildButton(n,t,e);break;default:return 0}c.setParent(e),c.setStage(r),c.setCharacterId(t.CharacterId),c.setRatio(t.Ratio||0),c.setLevel(t.Depth)}return t.PlaceFlagHasClipDepth&&(c.isClipDepth=!0,c.clipDepth=t.ClipDepth),c},/**
 * @param tag
 * @returns {PlaceObject}
 */
qt.prototype.buildPlaceObject=function(t){var e=new f;
// Matrix
// ColorTransform
// Filter
// BlendMode
return t.PlaceFlagHasMatrix&&e.setMatrix(t.Matrix),t.PlaceFlagHasColorTransform&&e.setColorTransform(t.ColorTransform),t.PlaceFlagHasFilterList&&e.setFilters(t.SurfaceFilterList),t.PlaceFlagHasBlendMode&&e.setBlendMode(t.BlendMode),e},/**
 * @param tag
 * @param character
 * @param parent
 * @returns {MovieClip}
 */
qt.prototype.buildMovieClip=function(t,e,i){var o=this.getStage(),r=new bt;r._url=i._url,r.setStage(o);var n="instance"+r.instanceId;if(t.PlaceFlagHasName&&(r.setName(t.Name),n=t.Name),r.setTarget(i.getTarget()+"/"+n),this.build(e,r),t.PlaceFlagHasClipActions)for(var a,s=t.ClipActionRecords,c=0|s.length,h=0;h<c;){var l=s[h],p=l.EventFlags;for(a in p)if(p.hasOwnProperty(a)&&p[a]){var u=r.createActionScript(l.Actions);r.addEventListener(a,u)}h=0|h+1}return r},/**
 * @param tag
 * @param character
 * @param parent
 * @returns {TextField}
 */
qt.prototype.buildTextField=function(t,e,i){var o=this.getStage(),r=new Lt;r.setStage(o),r.setParent(i),r.setInitParams(),r.setTagType(e.tagType),r.setBounds(e.bounds);var n="instance"+r.instanceId;t.PlaceFlagHasName&&(r.setName(t.Name),n=t.Name),r.setTarget(i.getTarget()+"/"+n);var a={},s=e.data,c=null,h=s.FontID;s.HasFont&&(c=o.getCharacter(h)),r.fontId=h,r.fontScale=s.FontHeight/1024,c&&c.ZoneTable&&(r.fontScale/=20),r.initialText=s.InitialText,a.autoSize=s.AutoSize,a.border=s.Border,a.border&&(a.background=1),a.bottomScroll=1,a.condenseWhite=0,a.embedFonts=s.HasFont&&s.UseOutlines&&c.FontFlagsHasLayout&&!s.Password?1:0,a.hscroll=0,a.maxscroll=0,a.scroll=0,a.maxhscroll=0,a.html=s.HTML,a.htmlText=s.HTML?s.InitialText:null,a.length=0,a.maxChars=0,a.multiline=s.Multiline,a.password=s.Password,a.selectable=s.NoSelect,a.tabEnabled=0,a.tabIndex=0,a.text=s.InitialText,a.textColor=s.TextColor,a.textHeight=0,a.textWidth=0,a.type=s.ReadOnly?"dynamic":"input";var l=s.VariableName;if(a.variable=l,l&&i.setVariable(l,s.InitialText),a.wordWrap=s.WordWrap,
// TextFormat
a.blockIndent=0,a.bullet=0,c){a.bold=c.FontFlagsBold;var p=r.getVariable("font");a.font="'"+c.FontName+"', "+p,a.italic=c.FontFlagsItalic}if(s.HasLayout){switch(s.Align){case 1:a.align="right";break;case 2:a.align="center";break;case 3:a.align="justify"}a.leftMargin=s.LeftMargin,a.rightMargin=s.RightMargin,a.indent=s.Indent,a.leading=14400>s.Leading?s.Leading:s.Leading-65535}a.size=s.FontHeight/20,a.tabStops=[],a.target=null,a.underline=0,a.url=null;for(var u in a)a.hasOwnProperty(u)&&r.setProperty(u,a[u]);return"input"===a.type&&r.setInputElement(),r},/**
 * @param tag
 * @param character
 * @returns {StaticText}
 */
qt.prototype.buildText=function(t,e){var i=this.getStage(),o=new $t;o.setTagType(e.tagType),o.setBounds(e.bounds);for(var r=e.textRecords,n=0|r.length,a=0,s=0,c=1,h=0,l=null,p=e.matrix,u=null,f=!1,g=0;g<n;){var d=r[g];if("FontId"in d){var y=d.FontId,v=i.getCharacter(y);l=v.GlyphShapeTable,f="ZoneTable"in v}"XOffset"in d&&(a=d.XOffset),"YOffset"in d&&(s=d.YOffset),"TextColor"in d&&(u=d.TextColor),"TextHeight"in d&&(h=d.TextHeight,f&&(h/=20));var b=d.GlyphEntries,m=d.GlyphCount;c=h/1024;for(var S=0,A=this.$vtc;S<m;){var I=b[S],C=l[I.GlyphIndex],x=A.convert(C),_=[c,p[1],p[2],c,p[4]+a,p[5]+s],T=new Dt;T.setData(x),T.setColor(u),T.setMatrix(_),o.addRecord(T),a+=0|I.GlyphAdvance,S=0|S+1}g=0|g+1}return o},/**
 * @param tag
 * @param character
 * @returns {Shape}
 */
qt.prototype.buildShape=function(t,e){var i=new xt;return i.setTagType(e.tagType),i.setBounds(e.bounds),i.setData(e.data),i},/**
 * @param character
 * @param tag
 * @param parent
 * @returns {SimpleButton}
 */
qt.prototype.buildButton=function(t,e,i){var o=this.getStage(),r=t.characters,n=new _t;n.setStage(o),n.setParent(i),n.setLevel(e.Depth),"actions"in t&&n.setActions(t.actions);var a="instance"+n.instanceId;e.PlaceFlagHasName&&(n.setName(e.Name),a=e.Name),n.setTarget(i.getTarget()+"/"+a);var s=n.getSprite("down");t.ButtonStateDownSoundId&&(s.soundId=t.ButtonStateDownSoundId,s.soundInfo=t.ButtonStateDownSoundInfo);var c=n.getSprite("hit");t.ButtonStateHitTestSoundId&&(c.soundId=t.ButtonStateHitTestSoundId,c.soundInfo=t.ButtonStateHitTestSoundInfo);var h=n.getSprite("over");t.ButtonStateOverSoundId&&(h.soundId=t.ButtonStateOverSoundId,h.soundInfo=t.ButtonStateOverSoundInfo);var l=n.getSprite("up");t.ButtonStateUpSoundId&&(l.soundId=t.ButtonStateUpSoundId,l.soundInfo=t.ButtonStateUpSoundInfo);for(var p in r)if(r.hasOwnProperty(p)){var u=r[p];for(var f in u)if(u.hasOwnProperty(f)){var g=u[f],d=this.buildObject(g,n,!1,1);if(d){var y=this.buildPlaceObject(g),v=g.Depth;g.ButtonStateDown&&(s.addTag(v,d),o.setPlaceObject(y,s.instanceId,v,0)),g.ButtonStateHitTest&&(c.addTag(v,d),o.setPlaceObject(y,c.instanceId,v,0)),g.ButtonStateOver&&(h.addTag(v,d),o.setPlaceObject(y,h.instanceId,v,0)),g.ButtonStateUp&&(l.addTag(v,d),o.setPlaceObject(y,l.instanceId,v,0))}}}return n.setSprite("down",s),n.setSprite("hit",c),n.setSprite("over",h),n.setSprite("up",l),n.setTagType(t.tagType),n},/**
 * @param frame
 * @param characterId
 * @returns {{ }}
 */
qt.prototype.generateDefaultTagObj=function(t,e){return{frame:t,characterId:e,cTags:[],removeTags:[],actionScript:[],labels:[],sounds:[]}},/**
 * @param dataLength
 * @param characterId
 * @returns {Array}
 */
qt.prototype.parseTags=function(t,e){var i=1,o=[],r=0,n=this.getBitIO();for(
// default set
o[i]=this.generateDefaultTagObj(i,e);n.byte_offset<t;){var a=n.byte_offset;if(a+2>t)break;var s=n.getUI16();r=s>>6;
// long
var c=63&s;if(63===c){if(a+6>t){n.byte_offset=a,n.bit_offset=0;break}c=n.getUI32()}var h=n.byte_offset;1===r&&(i=i+1|0,t>h+2&&(o[i]=this.generateDefaultTagObj(i,e)));var l=this.parseTag(r,c),p=n.byte_offset-h|0;if(p!==c&&p<c){var u=c-p|0;u>0&&(n.byte_offset=n.byte_offset+u|0)}l&&(o=this.addTag(r,o,l,i)),n.bit_offset=0}return o},/**
 * @param tagType
 * @param length
 * @returns {*}
 */
qt.prototype.parseTag=function(t,e){var i=null,o=this.getBitIO(),r=this.getStage();switch(t){case 0:case 1:// ShowFrame
break;case 2:// DefineShape
case 22:// DefineShape2
case 32:// DefineShape3
case 83:// DefineShape4
e<10?o.byte_offset+=e:this.parseDefineShape(t);break;case 9:// BackgroundColor
r.setBackgroundColor(o.getUI8(),o.getUI8(),o.getUI8());break;case 10:// DefineFont
case 48:// DefineFont2
case 75:// DefineFont3
this.parseDefineFont(t,e);break;case 13:// DefineFontInfo
case 62:// DefineFontInfo2
this.parseDefineFontInfo(t,e);break;case 11:// DefineText
case 33:// DefineText2
this.parseDefineText(t);break;case 4:// PlaceObject
case 26:// PlaceObject2
case 70://PlaceObject3
i=this.parsePlaceObject(t,e);break;case 37:// DefineEditText
this.parseDefineEditText(t);break;case 39:// DefineSprite
this.parseDefineSprite(o.byte_offset+e);break;case 12:// DoAction
i=this.parseDoAction(e);break;case 59:// DoInitAction
this.parseDoInitAction(e);break;case 5:// RemoveObject
case 28:// RemoveObject2
i=this.parseRemoveObject(t);break;case 7:// DefineButton
case 34:// DefineButton2
i=this.parseDefineButton(t,e);break;case 43:// FrameLabel
i=this.parseFrameLabel();break;case 88:// DefineFontName
this.parseDefineFontName();break;case 20:// DefineBitsLossless
case 36:// DefineBitsLossless2
this.parseDefineBitsLossLess(t,e);break;case 6:// DefineBits
case 21:// DefineBitsJPEG2
case 35:// DefineBitsJPEG3
case 90:// DefineBitsJPEG4
this.parseDefineBits(t,e,this.jpegTables);break;case 8:// JPEGTables
this.jpegTables=this.parseJPEGTables(e);break;case 56:// ExportAssets
this.parseExportAssets();break;case 46:// DefineMorphShape
case 84:// DefineMorphShape2
this.parseDefineMorphShape(t);break;case 40:// NameCharacter
o.getDataUntil("\0");// NameCharacter
break;case 24:// Protect
o.byteAlign();break;case 63:// DebugID
o.getUI8();// UUID
break;case 64:// EnableDebugger2
o.getUI16(),// Reserved
o.getDataUntil("\0");// Password
break;case 65:// ScriptLimits
o.getUI16(),// MaxRecursionDepth
o.getUI16();// ScriptTimeoutSeconds
break;case 69:// FileAttributes
this.parseFileAttributes();break;case 77:// MetaData
o.getDataUntil("\0");// MetaData
break;case 86:// DefineSceneAndFrameLabelData
i=this.parseDefineSceneAndFrameLabelData();break;case 18:// SoundStreamHead
case 45:// SoundStreamHead2
i=this.parseSoundStreamHead(t);break;case 72:// DoABC
case 82:// DoABC2
this.parseDoABC(t,e);break;case 76:// SymbolClass
this.parseSymbolClass();break;case 14:// DefineSound
this.parseDefineSound(t,e);break;case 15:// StartSound
case 89:// StartSound2
i=this.parseStartSound(t);break;case 17:// DefineButtonSound
this.parseDefineButtonSound();break;case 73:// DefineFontAlignZones
this.parseDefineFontAlignZones();break;case 74:// CSMTextSettings
this.parseCSMTextSettings(t);break;case 19:// SoundStreamBlock
this.parseSoundStreamBlock(t,e);break;case 60:// DefineVideoStream
this.parseDefineVideoStream(t);break;case 61:// VideoFrame
this.parseVideoFrame(t,e);break;case 78:// DefineScalingGrid
this.parseDefineScalingGrid();break;case 41:// ProductInfo
o.getUI32(),// ProductID
o.getUI32(),// Edition
o.getUI8(),// MajorVersion
o.getUI8(),// MinorVersion
o.getUI32(),// BuildLow
o.getUI32(),// BuildHigh
o.getUI32(),// CompilationDate
o.getUI32();// TODO
break;case 3:// FreeCharacter
case 16:// StopSound
case 23:// DefineButtonCxform
case 25:// PathsArePostScript
case 29:// SyncFrame
case 31:// FreeAll
case 38:// DefineVideo
case 42:// DefineTextFormat
case 44:// DefineBehavior
case 47:// FrameTag
case 49:// GeProSet
case 52:// FontRef
case 53:// DefineFunction
case 54:// PlaceFunction
case 55:// GenTagObject
case 57:// ImportAssets
case 58:// EnableDebugger
case 66:// SetTabIndex
case 71:// ImportAssets2
case 87:// DefineBinaryData
case 91:// DefineFont4
case 93:// EnableTelemetry
console.log("[base] tagType -> "+t)}return i},/**
 * @param tagType
 * @param tags
 * @param tag
 * @param frame
 * @returns {*}
 */
qt.prototype.addTag=function(t,e,i,o){var r=e[o];switch(t){case 4:// PlaceObject
case 26:// PlaceObject2
case 70:// PlaceObject3
var n=r.cTags;r.cTags[n.length]=i;break;case 12:// DoAction
var a=r.actionScript;r.actionScript[a.length]=i;break;case 5:// RemoveObject
case 28:// RemoveObject2
var s=r.removeTags;r.removeTags[s.length]=i;break;case 43:// FrameLabel
var c=r.labels;i.frame=o,r.labels[c.length]=i;break;case 15:// StartSound
case 89:// StartSound2
var h=r.sounds;r.sounds[h.length]=i}return e},/**
 * @param tagType
 */
qt.prototype.parseDefineShape=function(t){var e=this.getBitIO(),i=e.getUI16(),o=this.rect();if(83===t){var r={};r.EdgeBounds=this.rect(),e.getUIBits(5),// Reserved
r.UsesFillWindingRule=e.getUIBits(1),r.UsesNonScalingStrokes=e.getUIBits(1),r.UsesScalingStrokes=e.getUIBits(1)}var n=this.shapeWithStyle(t);this.appendShapeTag(i,o,n,t)},/**
 * @returns {{xMin: number, xMax: number, yMin: number, yMax: number}}
 */
qt.prototype.rect=function(){var t=this.getBitIO();t.byteAlign();var e=t.getUIBits(5);return{xMin:t.getSIBits(e),xMax:t.getSIBits(e),yMin:t.getSIBits(e),yMax:t.getSIBits(e)}},/**
 * @param tagType
 * @returns {{}}
 */
qt.prototype.shapeWithStyle=function(t){var e,i,o=this.getBitIO();switch(t){case 46:case 84:e={fillStyleCount:0,fillStyles:[]},i={lineStyleCount:0,lineStyles:[]};break;default:e=this.fillStyleArray(t),i=this.lineStyleArray(t)}var r=o.getUI8(),n=r>>4,a=15&r;return{fillStyles:e,lineStyles:i,ShapeRecords:this.shapeRecords(t,{FillBits:n,LineBits:a})}},/**
 * @param tagType
 * @returns {{}}
 */
qt.prototype.fillStyleArray=function(t){var e=this.getBitIO(),i=e.getUI8();t>2&&255===i&&(i=e.getUI16());for(var o=[],r=0;r<i;)o[o.length]=this.fillStyle(t),r=0|r+1;return{fillStyleCount:i,fillStyles:o}},/**
 * @param tagType
 * @returns {{}}
 */
qt.prototype.fillStyle=function(t){var e=this.getBitIO(),i=e.getUI8(),o={};switch(o.fillStyleType=i,i){case 0:switch(t){case 32:case 83:o.Color=this.rgba();break;case 46:case 84:o.StartColor=this.rgba(),o.EndColor=this.rgba();break;default:o.Color=this.rgb()}break;case 16:case 18:switch(t){case 46:case 84:o.startGradientMatrix=this.matrix(),o.endGradientMatrix=this.matrix(),o.gradient=this.gradient(t);break;default:o.gradientMatrix=this.matrix(),o.gradient=this.gradient(t)}break;case 19:o.gradientMatrix=this.matrix(),o.gradient=this.focalGradient(t);break;case 64:case 65:case 66:case 67:switch(o.bitmapId=e.getUI16(),t){case 46:case 84:o.startBitmapMatrix=this.matrix(),o.endBitmapMatrix=this.matrix();break;default:o.bitmapMatrix=this.matrix()}}return o},/**
 * @returns {{}}
 */
qt.prototype.rgb=function(){var t=this.getBitIO();return{R:t.getUI8(),G:t.getUI8(),B:t.getUI8(),A:1}},/**
 * @returns {{}}
 */
qt.prototype.rgba=function(){var t=this.getBitIO();return{R:t.getUI8(),G:t.getUI8(),B:t.getUI8(),A:t.getUI8()/255}},/**
 * @returns {Array}
 */
qt.prototype.matrix=function(){var t=this.getBitIO();t.byteAlign();var e=[1,0,0,1,0,0];if(t.getUIBit()){var i=t.getUIBits(5);e[0]=t.getSIBits(i)/65536,e[3]=t.getSIBits(i)/65536}if(t.getUIBit()){var o=t.getUIBits(5);e[1]=t.getSIBits(o)/65536,e[2]=t.getSIBits(o)/65536}var r=t.getUIBits(5);return e[4]=t.getSIBits(r),e[5]=t.getSIBits(r),e},/**
 * gradient
 * @param tagType
 * @returns {{SpreadMode: number, InterpolationMode: number, GradientRecords: Array}}
 */
qt.prototype.gradient=function(t){var e,i=0,o=0,r=[],n=this.getBitIO();switch(n.byteAlign(),t){case 46:case 84:e=n.getUI8();break;default:i=n.getUIBits(2),o=n.getUIBits(2),e=n.getUIBits(4)}for(var a=0;a<e;)r[r.length]=this.gradientRecord(t),a=0|a+1;return{SpreadMode:i,InterpolationMode:o,GradientRecords:r}},/**
 * @param tagType
 * @returns {{}}
 */
qt.prototype.gradientRecord=function(t){var e=this.getBitIO();switch(t){case 46:case 84:return{StartRatio:e.getUI8()/255,StartColor:this.rgba(),EndRatio:e.getUI8()/255,EndColor:this.rgba()};default:return{Ratio:e.getUI8()/255,Color:t<32?this.rgb():this.rgba()}}},/**
 * @param tagType
 * @returns {{SpreadMode: number, InterpolationMode: number, GradientRecords: Array, FocalPoint: number}}
 */
qt.prototype.focalGradient=function(t){var e=this.getBitIO();e.byteAlign();for(var i=e.getUIBits(2),o=e.getUIBits(2),r=e.getUIBits(4),n=[],a=0;a<r;)n[n.length]=this.gradientRecord(t),a=0|a+1;return{SpreadMode:i,InterpolationMode:o,GradientRecords:n,FocalPoint:e.getFloat16()}},/**
 * @param tagType
 * @returns {{lineStyleCount: number, lineStyles: Array}}
 */
qt.prototype.lineStyleArray=function(t){var e=this.getBitIO(),i=e.getUI8();t>2&&255===i&&(i=e.getUI16());for(var o=[],r=0;r<i;)o[o.length]=this.lineStyles(t),r=0|r+1;return{lineStyleCount:i,lineStyles:o}},/**
 * @param tagType
 * @returns {{}}
 */
qt.prototype.lineStyles=function(t){var e=this.getBitIO(),i={};switch(i.fillStyleType=0,t){case 46:i={StartWidth:e.getUI16(),EndWidth:e.getUI16(),StartColor:this.rgba(),EndColor:this.rgba()};break;case 84:i.StartWidth=e.getUI16(),i.EndWidth=e.getUI16(),i.StartCapStyle=e.getUIBits(2),i.JoinStyle=e.getUIBits(2),i.HasFillFlag=e.getUIBit(),i.NoHScaleFlag=e.getUIBit(),i.NoVScaleFlag=e.getUIBit(),i.PixelHintingFlag=e.getUIBit(),e.getUIBits(5),// Reserved
i.NoClose=e.getUIBit(),i.EndCapStyle=e.getUIBits(2),2===i.JoinStyle&&(i.MiterLimitFactor=e.getUI16()),i.HasFillFlag?i.FillType=this.fillStyle(t):(i.StartColor=this.rgba(),i.EndColor=this.rgba());break;case 83:// DefineShape4
i.Width=e.getUI16(),i.StartCapStyle=e.getUIBits(2),i.JoinStyle=e.getUIBits(2),i.HasFillFlag=e.getUIBit(),i.NoHScaleFlag=e.getUIBit(),i.NoVScaleFlag=e.getUIBit(),i.PixelHintingFlag=e.getUIBit(),e.getUIBits(5),// Reserved
i.NoClose=e.getUIBit(),i.EndCapStyle=e.getUIBits(2),2===i.JoinStyle&&(i.MiterLimitFactor=e.getUI16()),i.HasFillFlag?i.FillType=this.fillStyle(t):i.Color=this.rgba();break;case 32:// DefineShape3
i.Width=e.getUI16(),i.Color=this.rgba();break;default:// DefineShape1or2
i.Width=e.getUI16(),i.Color=this.rgb()}return i},/**
 * @param tagType
 * @param currentNumBits
 * @returns {Array}
 */
qt.prototype.shapeRecords=function(t,e){var i=this.getBitIO(),o=[];for(this.currentPosition={x:0,y:0};;){
// reset
var r=0,n=i.getUIBits(6);if(32&n){var a=15&n;r=16&n?this.straightEdgeRecord(t,a):this.curvedEdgeRecord(t,a)}else n&&(r=this.styleChangeRecord(t,n,e));if(o[o.length]=r,0===r){i.byteAlign();break}}return o},/**
 * @param tagType
 * @param numBits
 * @returns {{}}
 */
qt.prototype.straightEdgeRecord=function(t,e){var i=this.getBitIO(),o=0,r=0;i.getUIBit()?(o=i.getSIBits(e+2),r=i.getSIBits(e+2)):i.getUIBit()?r=i.getSIBits(e+2):o=i.getSIBits(e+2);var n=o,a=r;switch(t){case 46:case 84:break;default:n=this.currentPosition.x+o,a=this.currentPosition.y+r,
// position
this.currentPosition.x=n,this.currentPosition.y=a}return{ControlX:0,ControlY:0,AnchorX:n,AnchorY:a,isCurved:!1,isChange:!1}},/**
 * @param tagType
 * @param numBits
 * @returns {{}}
 */
qt.prototype.curvedEdgeRecord=function(t,e){var i=this.getBitIO(),o=i.getSIBits(e+2),r=i.getSIBits(e+2),n=i.getSIBits(e+2),a=i.getSIBits(e+2),s=o,c=r,h=n,l=a;switch(t){case 46:case 84:break;default:h=(s=this.currentPosition.x+o)+n,l=(c=this.currentPosition.y+r)+a,
// position
this.currentPosition.x=h,this.currentPosition.y=l}return{ControlX:s,ControlY:c,AnchorX:h,AnchorY:l,isCurved:!0,isChange:!1}},/**
 * @param tagType
 * @param changeFlag
 * @param currentNumBits
 * @returns {{}}
 */
qt.prototype.styleChangeRecord=function(t,e,i){var o=this.getBitIO(),r={isChange:!0,FillStyle0:0,FillStyle1:0,LineStyle:0};if(r.StateNewStyles=e>>4&1,r.StateLineStyle=e>>3&1,r.StateFillStyle1=e>>2&1,r.StateFillStyle0=e>>1&1,r.StateMoveTo=1&e,r.StateMoveTo){var n=o.getUIBits(5);r.MoveX=o.getSIBits(n),r.MoveY=o.getSIBits(n),
// position
this.currentPosition.x=r.MoveX,this.currentPosition.y=r.MoveY}if(r.StateFillStyle0&&(r.FillStyle0=o.getUIBits(i.FillBits)),r.StateFillStyle1&&(r.FillStyle1=o.getUIBits(i.FillBits)),r.StateLineStyle&&(r.LineStyle=o.getUIBits(i.LineBits)),r.StateNewStyles){r.FillStyles=this.fillStyleArray(t),r.LineStyles=this.lineStyleArray(t);var a=o.getUI8();i.FillBits=r.NumFillBits=a>>4,i.LineBits=r.NumLineBits=15&a}return r},/**
 * @param characterId
 * @param bounds
 * @param shapes
 * @param tagType
 */
qt.prototype.appendShapeTag=function(t,e,i,o){this.getStage().setCharacter(t,{tagType:o,data:this.$vtc.convert(i,!1),bounds:e})},/**
 * @param tagType
 * @param length
 */
qt.prototype.parseDefineBitsLossLess=function(t,e){var i=this.getBitIO(),o=this.getStage(),r=i.byte_offset,n=i.getUI16(),a=i.getUI8(),s=i.getUI16(),c=i.getUI16(),h=36===t,l=3===a?i.getUI8()+1:0,p=i.byte_offset-r,u=i.getData(e-p),f=i.unzip(u,!1),g=this.$cacheStore.getCanvas();g.width=s,g.height=c;var d=g.getContext("2d"),y=d.createImageData(s,c),v=y.data,b=0,m=0,S=s,A=c;if(5!==a||h){var I=h?4:3,C=0|l*I,x=0;l&&(x=0|(s+3&-4)-s);var _=this.$isAlphaBug;for(A=c;A;){for(A=0|A-1,S=s;S;)if(S=0|S-1,b=l?f[C++]*I:C++*I,b|=0,h){var T=3===a?f[b+3]:f[b];b=0|b+1,_?(v[m]=f[b],b=0|b+1,v[m=0|m+1]=f[b],b=0|b+1,v[m=0|m+1]=f[b],b=0|b+1,m=0|m+1):(v[m]=255*f[b]/T,b=0|b+1,v[m=0|m+1]=255*f[b]/T,b=0|b+1,v[m=0|m+1]=255*f[b]/T,b=0|b+1,m=0|m+1),v[m]=T,m=0|m+1,3===a&&(b=0|b+1)}else v[m++]=f[b],b=0|b+1,m=0|m+1,v[m++]=f[b],b=0|b+1,m=0|m+1,v[m++]=f[b],b=0|b+1,v[m=0|m+1]=255,b=0|b+1,m=0|m+1;C=0|C+x}}else for(b=0,m=0,A=c;A;)for(A=0|A-1,S=s;S;)S=0|S-1,b=0|b+1,v[m]=f[b],b=0|b+1,v[m=0|m+1]=f[b],b=0|b+1,v[m=0|m+1]=f[b],b=0|b+1,v[m=0|m+1]=255,m=0|m+1;d.putImageData(y,0,0),o.setCharacter(n,d)},/**
 * parseExportAssets
 */
qt.prototype.parseExportAssets=function(){for(var t=this.getBitIO(),e=this.getStage(),i=t.getUI16(),o=e.exportAssets,r=e.packages,n=0;n<i;){var a=t.getUI16(),s=t.getDataUntil("\0");"__Packages"===s.substr(0,10)&&(r[a]=1),o[s]=a,n=0|n+1}e.exportAssets=o},/**
 * @param length
 * @returns {string}
 */
qt.prototype.parseJPEGTables=function(t){return this.getBitIO().getData(t)},/**
 * @param tagType
 * @param length
 * @param jpegTables
 */
qt.prototype.parseDefineBits=function(t,e,i){var o=this.getBitIO(),r=o.byte_offset,n=o.getUI16(),a=o.byte_offset-r,s=e-a;switch(t){case 35:case 90:s=o.getUI32()}if(90===t){var c=o.getUI16();console.log("TODO DeblockParam",c)}var h=o.getData(s),l=0;switch(t){case 35:case 90:l=o.getData(e-a-s)}o.byte_offset=r+e;
// render
var p=this.getStage();p.imgUnLoadCount++;var u=this.$cacheStore,f=this.$document.createElement("img");if(f.addEventListener("load",function(){var t=this.width,e=this.height,i=u.getCanvas();i.width=t,i.height=e;var r=i.getContext("2d");if(r.drawImage(this,0,0,t,e),l){for(var a=o.unzip(l,!1),s=r.getImageData(0,0,t,e),c=s.data,h=3,f=t*e,g=0;g<f;)c[h]=a[g],h=0|h+4,g=0|g+1;r.putImageData(s,0,0)}p.setCharacter(n,r),p.imgUnLoadCount--}),null!==i&&i.length>4){for(var g=[],d=0|i.length-2,y=0;y<d;)g[g.length]=i[y],y=0|y+1;for(d=0|h.length,y=2;y<d;)g[g.length]=h[y],y=0|y+1;h=g}f.src="data:image/jpeg;base64,"+this.base64encode(this.parseJpegData(h)),
// for android bug
this.$isAndroid&&(0,this.$setTimeout)(function(){},0)},/**
 * @param JPEGData
 * @returns {string}
 */
qt.prototype.parseJpegData=function(t){var e=0,i=0,o="",r=0|t.length;
// erroneous
if(255===t[0]&&217===t[1]&&255===t[2]&&216===t[3])for(e=4;e<r;)o+=this.$fromCharCode(t[e]),e=0|e+1;else if(255===t[0]&&216===t[1]){for(i=0,e=2;i<e;)o+=this.$fromCharCode(t[i]),i=0|i+1;for(;e<r;)if(255===t[e]){if(217===t[e+1]&&255===t[e+2]&&216===t[e+3]){for(i=e=0|e+4;i<r;)o+=this.$fromCharCode(t[i]),i=0|i+1;break}if(218===t[e+1]){for(i=e;i<r;)o+=this.$fromCharCode(t[i]),i=0|i+1;break}var n=0|(t[e+2]<<8)+t[e+3]+e+2;for(i=e;i<n;)o+=this.$fromCharCode(t[i]),i=0|i+1;e=0|e+(n-e)}}return o},/**
 * @param data
 * @returns {*}
 */
qt.prototype.base64encode=function(e){if(this.$canBtoa)return t.btoa(e);for(var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=[],r=0,n=e.length;r<n;){var a=255&e.charCodeAt(r);if((r=0|r+1)===n){o[o.length]=i.charAt(a>>2),o[o.length]=i.charAt((3&a)<<4),o[o.length]="==";break}var s=e.charCodeAt(r);if((r=0|r+1)===n){o[o.length]=i.charAt(a>>2),o[o.length]=i.charAt((3&a)<<4|(240&s)>>4),o[o.length]=i.charAt((15&s)<<2),o[o.length]="=";break}var c=e.charCodeAt(r);r=0|r+1,o[o.length]=i.charAt(a>>2),o[o.length]=i.charAt((3&a)<<4|(240&s)>>4),o[o.length]=i.charAt((15&s)<<2|(192&c)>>6),o[o.length]=i.charAt(63&c)}return o.join("")},/**
 * @param tagType
 * @param length
 */
qt.prototype.parseDefineFont=function(t,e){var i=this.getBitIO(),o=this.getStage(),r=i.byte_offset+e,n=0,a=0,s={};s.tagType=t,s.FontId=i.getUI16();var c=0;switch(t){case 48:case 75:var h=i.getUI8();if(s.FontFlagsHasLayout=h>>>7&1,s.FontFlagsShiftJIS=h>>>6&1,s.FontFlagsSmallText=h>>>5&1,s.FontFlagsANSI=h>>>4&1,s.FontFlagsWideOffsets=h>>>3&1,s.FontFlagsWideCodes=h>>>2&1,s.FontFlagsItalic=h>>>1&1,s.FontFlagsBold=1&h,i.byteAlign(),s.LanguageCode=i.getUI8(),s.FontNameLen=i.getUI8(),s.FontNameLen){var l=i.byte_offset,p=i.getData(s.FontNameLen),u="";for(a=s.FontNameLen,n=0;n<a;)p[n]>127?n=0|n+1:(u+=this.$fromCharCode(p[n]),n=0|n+1);var f;f=s.FontFlagsShiftJIS||2===s.LanguageCode?i.decodeToShiftJis(u):decodeURIComponent(u),s.FontName=this.getFontName(f),i.byte_offset=l+s.FontNameLen}c=i.getUI16(),s.NumGlyphs=c}
// offset
var g=i.byte_offset;if(10===t&&(c=i.getUI16()),c){var d=[];if(10===t&&(d[0]=c,c/=2,c-=1),s.FontFlagsWideOffsets){for(n=0;n<c;)d[d.length]=i.getUI32(),n=0|n+1;10!==t&&(s.CodeTableOffset=i.getUI32())}else{for(n=0;n<c;)d[d.length]=i.getUI16(),n=0|n+1;10!==t&&(s.CodeTableOffset=i.getUI16())}
// Shape
var y=[];for(10===t&&(c+=1),n=0;n<c;){i.setOffset(d[n]+g,0);var v=i.getUI8(),b={FillBits:v>>4,LineBits:15&v},m={};m.ShapeRecords=this.shapeRecords(t,b),m.lineStyles={lineStyles:[{Color:{R:0,G:0,B:0,A:1},lineStyleType:0}]},m.fillStyles={fillStyles:[{Color:{R:0,G:0,B:0,A:1},fillStyleType:0}]},y[y.length]=m,n=0|n+1}switch(s.GlyphShapeTable=y,t){case 48:case 75:i.setOffset(s.CodeTableOffset+g,0);var S=[];if(s.FontFlagsWideCodes)for(n=0;n<c;)S[S.length]=i.getUI16(),n=0|n+1;else for(n=0;n<c;)S[S.length]=i.getUI8(),n=0|n+1;if(s.CodeTable=S,s.FontFlagsHasLayout){s.FontAscent=i.getUI16(),s.FontDescent=i.getUI16(),s.FontLeading=i.getUI16();var A=[];for(n=0;n<c;)A[A.length]=i.getUI16(),n=0|n+1;s.FontAdvanceTable=A;var I=[];for(n=0;n<c;)I[I.length]=this.rect(),n=0|n+1;if(s.FontBoundsTable=I,75===t){var C=i.getUI16();s.KerningCount=C,n=0;for(var x=[],_=s.FontFlagsWideCodes;n<C;){var T=_?i.getUI16():i.getUI8(),k=_?i.getUI16():i.getUI8(),O=i.getSIBits(16);x[x.length]={FontKerningCode1:T,FontKerningCode2:k,FontKerningAdjustment:O},n=0|n+1}s.KerningRecord=x}}}}i.byte_offset=r,o.setCharacter(s.FontId,s),o.fonts[s.FontName]=s},/**
 * @param tagType
 * @param length
 */
qt.prototype.parseDefineFontInfo=function(t,e){var i=this.getBitIO(),o=i.byte_offset+e,r={};r.tagType=t,r.FontId=i.getUI16();for(var n=i.getUI8(),a=i.getData(n),s="",c=0;c<n;)a[c]>127||(s+=this.$fromCharCode(a[c]),c=0|c+1);r.FontFlagsReserved=i.getUIBits(2),r.FontFlagsSmallText=i.getUIBits(1),r.FontFlagsShiftJIS=i.getUIBits(1),r.FontFlagsANSI=i.getUIBits(1),r.FontFlagsItalic=i.getUIBits(1),r.FontFlagsBold=i.getUIBits(1),r.FontFlagsWideCodes=i.getUIBits(1),62===t&&(r.LanguageCode=i.getUI8());var h;h=r.FontFlagsShiftJIS||2===r.LanguageCode?i.decodeToShiftJis(s):decodeURIComponent(s),r.FontName=this.getFontName(h),i.byteAlign();var l=[];if(r.FontFlagsWideCodes||62===t)for(;i.byte_offset<o;)l[l.length]=i.getUI16();else for(;i.byte_offset<o;)l[l.length]=i.getUI8();r.CodeTable=l},/**
 * @param fontName
 * @returns {string}
 */
qt.prototype.getFontName=function(t){var e=t.length;switch(0===t.substr(e-1).charCodeAt(0)&&(t=t.slice(0,-1)),t){case"_sans":return"sans-serif";case"_serif":return"serif";case"_typewriter":return"monospace";default:return"_"===t.substr(0,1)?"sans-serif":t}},/**
 * parseDefineFontName
 */
qt.prototype.parseDefineFontName=function(){var t=this.getBitIO();t.getUI16(),// FontId
t.getDataUntil("\0"),// FontName
t.getDataUntil("\0")},/**
 * @param tagType
 */
qt.prototype.parseDefineText=function(t){var e=this.getBitIO(),i=this.getStage(),o={},r=e.getUI16();o.tagType=t,o.bounds=this.rect(),o.matrix=this.matrix();var n=e.getUI8(),a=e.getUI8();o.textRecords=this.getTextRecords(t,n,a),i.setCharacter(r,o)},/**
 * @param tagType
 * @param GlyphBits
 * @param AdvanceBits
 * @returns {Array}
 */
qt.prototype.getTextRecords=function(t,e,i){for(var o=this.getBitIO(),r=[];0!==o.getUI8();){o.incrementOffset(-1,0);var n={};n.TextRecordType=o.getUIBits(1),n.StyleFlagsReserved=o.getUIBits(3),n.StyleFlagsHasFont=o.getUIBits(1),n.StyleFlagsHasColor=o.getUIBits(1),n.StyleFlagsHasYOffset=o.getUIBits(1),n.StyleFlagsHasXOffset=o.getUIBits(1),n.StyleFlagsHasFont&&(n.FontId=o.getUI16()),n.StyleFlagsHasColor&&(n.TextColor=11===t?this.rgb():this.rgba()),n.StyleFlagsHasXOffset&&(n.XOffset=o.getUI16()),n.StyleFlagsHasYOffset&&(n.YOffset=o.getUI16()),n.StyleFlagsHasFont&&(n.TextHeight=o.getUI16()),n.GlyphCount=o.getUI8(),n.GlyphEntries=this.getGlyphEntries(n.GlyphCount,e,i),r[r.length]=n}return r},/**
 * @param count
 * @param GlyphBits
 * @param AdvanceBits
 * @returns {Array}
 */
qt.prototype.getGlyphEntries=function(t,e,i){for(var o=this.getBitIO(),r=0,n=[];r<t;)n[n.length]={GlyphIndex:o.getUIBits(e),GlyphAdvance:o.getSIBits(i)},r=0|r+1;return n},/**
 * @param tagType
 */
qt.prototype.parseDefineEditText=function(t){var e=this.getBitIO(),i=this.getStage(),o={};o.CharacterId=e.getUI16();var r=this.rect(),n=e.getUI8();o.HasText=n>>>7&1,o.WordWrap=n>>>6&1,o.Multiline=n>>>5&1,o.Password=n>>>4&1,o.ReadOnly=n>>>3&1,o.HasTextColor=n>>>2&1,o.HasMaxLength=n>>>1&1,o.HasFont=1&n;var a=e.getUI8();o.HasFontClass=a>>>7&1,o.AutoSize=a>>>6&1,o.HasLayout=a>>>5&1,o.NoSelect=a>>>4&1,o.Border=a>>>3&1,o.WasStatic=a>>>2&1,o.HTML=a>>>1&1,o.UseOutlines=1&a;var s=0;o.HasFont&&(o.FontID=e.getUI16(),s=i.getCharacter(o.FontID).FontFlagsShiftJIS?1:0,o.HasFontClass&&(o.FontClass=e.getDataUntil("\0")),o.FontHeight=e.getUI16()),o.HasTextColor&&(o.TextColor=this.rgba()),o.HasMaxLength&&(o.MaxLength=e.getUI16()),o.HasLayout&&(o.Align=e.getUI8(),o.LeftMargin=e.getUI16(),o.RightMargin=e.getUI16(),o.Indent=e.getUI16(),o.Leading=e.getUI16());var c=e.getDataUntil("\0",s)+"";if(o.VariableName=""===c?null:c,o.InitialText="",o.HasText){var h=e.getDataUntil("\0",s);if(o.HTML){-1!==h.indexOf("<sbr />")&&(h=h.replace(new RegExp("<sbr />","gi"),"\n")),-1!==h.indexOf("<b>")&&(h=(h=h.replace(new RegExp("<b>","gi"),"")).replace(new RegExp("</b>","gi"),""));var l=this.$document.createElement("span");l.innerHTML=h;for(var p=l.getElementsByTagName("p"),u=0|p.length,f=[],g=0;g<u;)f[g]=p[g],g=0|g+1;o.InitialText=f}else o.InitialText=h}i.setCharacter(o.CharacterId,{data:o,bounds:r,tagType:t})},/**
 * @param tagType
 */
qt.prototype.parseDefineMorphShape=function(t){var e=this.getBitIO(),i=this.getStage(),o={};o.tagType=t,o.CharacterId=e.getUI16(),o.StartBounds=this.rect(),o.EndBounds=this.rect(),84===t&&(o.StartEdgeBounds=this.rect(),o.EndEdgeBounds=this.rect(),e.getUIBits(6),// Reserved
o.UsesNonScalingStrokes=e.getUIBits(1),o.UsesScalingStrokes=e.getUIBits(1));var r=e.getUI32(),n=e.byte_offset+r;o.MorphFillStyles=this.fillStyleArray(t),o.MorphLineStyles=this.lineStyleArray(t),o.StartEdges=this.shapeWithStyle(t),e.byte_offset!==n&&(e.byte_offset=n),o.EndEdges=this.shapeWithStyle(t);for(
// fill1 control
var a={x:0,y:0},s={x:0,y:0},c=o.StartEdges.ShapeRecords,h=o.EndEdges.ShapeRecords,l=c.length,p=h.length,u=this.$max(l,p),f=0;f<u;){var g={},d=c[f],y=h[f];d||y?d.isChange||y.isChange?(d.isChange&&!y.isChange?(g={FillStyle0:d.FillStyle0,FillStyle1:d.FillStyle1,LineStyle:d.LineStyle,StateFillStyle0:d.StateFillStyle0,StateFillStyle1:d.StateFillStyle1,StateLineStyle:d.StateLineStyle,StateMoveTo:d.StateMoveTo,StateNewStyles:d.StateNewStyles,isChange:!0},d.StateMoveTo&&(g.MoveX=s.x,g.MoveY=s.y,a.x=d.MoveX,a.y=d.MoveY),h.splice(f,0,g)):!d.isChange&&y.isChange?(g={FillStyle0:y.FillStyle0,FillStyle1:y.FillStyle1,LineStyle:y.LineStyle,StateFillStyle0:y.StateFillStyle0,StateFillStyle1:y.StateFillStyle1,StateLineStyle:y.StateLineStyle,StateMoveTo:y.StateMoveTo,StateNewStyles:y.StateNewStyles,isChange:!0},y.StateMoveTo&&(g.MoveX=a.x,g.MoveY=a.y,s.x=y.MoveX,s.y=y.MoveY),c.splice(f,0,g)):(d.StateMoveTo&&(a.x=d.MoveX,a.y=d.MoveY),y.StateMoveTo&&(s.x=y.MoveX,s.y=y.MoveY)),f=0|f+1):(d.isCurved?(a.x+=d.ControlX+d.AnchorX,a.y+=d.ControlY+d.AnchorY):(a.x+=d.AnchorX,a.y+=d.AnchorY),y.isCurved?(s.x+=y.ControlX+y.AnchorX,s.y+=y.ControlY+y.AnchorY):(s.x+=y.AnchorX,s.y+=y.AnchorY),f=0|f+1):f=0|f+1}var v=0,b=0;for(u=o.StartEdges.ShapeRecords.length,f=0;f<u;){var m=c[f];f=0|f+1,m.isChange&&(m.StateFillStyle0&&(b=m.FillStyle0),b?(m.StateFillStyle0=1,m.StateFillStyle1=1,v?(m.FillStyle0=0,m.FillStyle1=b):(m.FillStyle0=b,m.FillStyle1=0)):(m.StateFillStyle1=1,m.FillStyle1=0),v=v?0:1)}i.setCharacter(o.CharacterId,o)},/**
 * @param char
 * @param ratio
 * @returns {{data: Array, bounds: {xMax: number, xMin: number, yMax: number, yMin: number}}}
 */
qt.prototype.buildMorphShape=function(t,e){for(var i=void 0===e?0:e/65535,o=1-i,r=[],n=t.MorphLineStyles,a=n.lineStyles,s=n.lineStyleCount,c=t.MorphFillStyles,h=c.fillStyles,l=c.fillStyleCount,p=t.StartEdges.ShapeRecords,u=t.EndEdges.ShapeRecords,f={lineStyles:{lineStyleCount:s,lineStyles:[]},fillStyles:{fillStyleCount:l,fillStyles:[]},ShapeRecords:[]},g={x:0,y:0},d=p.length,y=0;y<d;y++){var v=p[y];if(v){var b={},m=u[y];if(v.isChange){var S=0,A=0;1===v.StateMoveTo&&(S=v.MoveX*o+m.MoveX*i,A=v.MoveY*o+m.MoveY*i,g.x=S,g.y=A),b={FillStyle0:v.FillStyle0,FillStyle1:v.FillStyle1,LineStyle:v.LineStyle,MoveX:S,MoveY:A,StateFillStyle0:v.StateFillStyle0,StateFillStyle1:v.StateFillStyle1,StateLineStyle:v.StateLineStyle,StateMoveTo:v.StateMoveTo,StateNewStyles:v.StateNewStyles,isChange:!0}}else{var I=0,C=0,x=0,_=0,T=v.AnchorX,k=v.AnchorY,O=m.AnchorX,M=m.AnchorY,B=v.ControlX,w=v.ControlY,F=m.ControlX,U=m.ControlY;i>0&&i<1&&v.isCurved!==m.isCurved&&(v.isCurved||(B=T=v.AnchorX/2,w=k=v.AnchorY/2),m.isCurved||(F=O=m.AnchorX/2,U=M=m.AnchorY/2)),I=T*o+O*i+(x=B*o+F*i+g.x),C=k*o+M*i+(_=w*o+U*i+g.y),g.x=I,g.y=C,b={AnchorX:I,AnchorY:C,ControlX:x,ControlY:_,isChange:!1,isCurved:v.isCurved||m.isCurved}}r[y]=b}}r[r.length]=0,f.ShapeRecords=r;var P,$,L;for(y=0;y<s;y++){var E=a[y];P=E.EndColor,$=E.StartColor,L={R:this.$floor($.R*o+P.R*i),G:this.$floor($.G*o+P.G*i),B:this.$floor($.B*o+P.B*i),A:$.A*o+P.A*i};var D=a[y].EndWidth,Y=a[y].StartWidth;f.lineStyles.lineStyles[y]={Width:this.$floor(Y*o+D*i),Color:L,fillStyleType:0}}for(y=0;y<l;y++){var N=h[y],R=N.fillStyleType;if(0===R)P=N.EndColor,$=N.StartColor,L={R:this.$floor($.R*o+P.R*i),G:this.$floor($.G*o+P.G*i),B:this.$floor($.B*o+P.B*i),A:$.A*o+P.A*i},f.fillStyles.fillStyles[y]={Color:L,fillStyleType:R};else{for(var X=N.endGradientMatrix,H=N.startGradientMatrix,j=[H[0]*o+X[0]*i,H[1]*o+X[1]*i,H[2]*o+X[2]*i,H[3]*o+X[3]*i,H[4]*o+X[4]*i,H[5]*o+X[5]*i],G=[],Z=N.gradient.GradientRecords,V=Z.length,W=0;W<V;W++){var z=Z[W];P=z.EndColor,$=z.StartColor,L={R:this.$floor($.R*o+P.R*i),G:this.$floor($.G*o+P.G*i),B:this.$floor($.B*o+P.B*i),A:$.A*o+P.A*i},G[W]={Color:L,Ratio:z.StartRatio*o+z.EndRatio*i}}f.fillStyles.fillStyles[y]={gradient:{GradientRecords:G},gradientMatrix:j,fillStyleType:R}}}var q=t.EndBounds,K=t.StartBounds,J={xMax:K.xMax*o+q.xMax*i,xMin:K.xMin*o+q.xMin*i,yMax:K.yMax*o+q.yMax*i,yMin:K.yMin*o+q.yMin*i};return{data:this.$vtc.convert(f,!0),bounds:J}},/**
 * @returns {{}}
 */
qt.prototype.parseFrameLabel=function(){return{name:this.getBitIO().getDataUntil("\0"),frame:0}},/**
 * @param tagType
 * @returns {*}
 */
qt.prototype.parseRemoveObject=function(t){var e=this.getBitIO();switch(t){case 5:return console.log("TODO: RemoveObject"),{CharacterId:e.getUI16(),Depth:e.getUI16()};default:return{Depth:e.getUI16()}}},/**
 * @param tagType
 * @param length
 * @returns {*}
 */
qt.prototype.parseDefineButton=function(t,e){var i=this.getBitIO(),o=this.getStage(),r={};r.tagType=t;var n=i.byte_offset+e;r.ButtonId=i.getUI16();var a=0;
// actionScript
if(7!==t&&(r.ReservedFlags=i.getUIBits(7),r.TrackAsMenu=i.getUIBits(1),a=i.getUI16()),r.characters=this.buttonCharacters(n),7===t){var s=n-i.byte_offset;s>0&&(r.actions=this.parseDoAction(s))}else a>0&&(r.actions=this.buttonActions(n));
// set layer
return o.setCharacter(r.ButtonId,r),i.byte_offset!==n&&(i.byte_offset=n),r},/**
 * @param offset
 * @returns {Array}
 */
qt.prototype.buttonCharacters=function(t){for(var e=this.getBitIO(),i=[];0!==e.getUI8();){e.incrementOffset(-1,0);var o=e.byte_offset,r=this.buttonRecord();if(e.byte_offset>t){e.byte_offset=o;break}var n=r.Depth;r.Depth in i||(i[n]=[]);var a=i[n].length;i[n][a]=r}return i},/**
 * @returns {{}}
 */
qt.prototype.buttonRecord=function(){var t=this.getBitIO(),e={};// Reserved
return t.getUIBits(2),e.PlaceFlagHasBlendMode=t.getUIBits(1),e.PlaceFlagHasFilterList=t.getUIBits(1),e.ButtonStateHitTest=t.getUIBits(1),e.ButtonStateDown=t.getUIBits(1),e.ButtonStateOver=t.getUIBits(1),e.ButtonStateUp=t.getUIBits(1),e.CharacterId=t.getUI16(),e.Depth=t.getUI16(),e.PlaceFlagHasMatrix=1,e.Matrix=this.matrix(),e.ColorTransform=this.colorTransform(),e.PlaceFlagHasColorTransform=void 0===e.ColorTransform?0:1,e.PlaceFlagHasBlendMode&&(e.BlendMode=t.getUI8()),e.PlaceFlagHasFilterList&&(e.SurfaceFilterList=this.getFilterList()),e.PlaceFlagHasRatio=0,e.PlaceFlagHasClipDepth=0,e.Sound=null,e},/**
 * @param endOffset
 * @returns {Array}
 */
qt.prototype.buttonActions=function(t){for(var e=this.getBitIO(),i=[];;){var o={},r=e.byte_offset,n=e.getUI16();o.CondIdleToOverDown=e.getUIBits(1),o.CondOutDownToIdle=e.getUIBits(1),o.CondOutDownToOverDown=e.getUIBits(1),o.CondOverDownToOutDown=e.getUIBits(1),o.CondOverDownToOverUp=e.getUIBits(1),o.CondOverUpToOverDown=e.getUIBits(1),o.CondOverUpToIdle=e.getUIBits(1),o.CondIdleToOverUp=e.getUIBits(1),o.CondKeyPress=e.getUIBits(7),o.CondOverDownToIdle=e.getUIBits(1);
// ActionScript
var a=t-e.byte_offset+1;if(o.ActionScript=this.parseDoAction(a),i[i.length]=o,!n)break;e.byte_offset=r+n}return i},/**
 * @param tagType
 * @param length
 * @returns {{}}
 */
qt.prototype.parsePlaceObject=function(t,e){var i=this.getBitIO(),o=this.getStage(),r=i.byte_offset,n={};switch(n.tagType=t,t){case 4:n.CharacterId=i.getUI16(),n.Depth=i.getUI16(),n.Matrix=this.matrix(),n.PlaceFlagHasMatrix=1,i.byteAlign(),i.byte_offset-r<e&&(n.ColorTransform=this.colorTransform(),n.PlaceFlagHasColorTransform=1);break;default:if(n.PlaceFlagHasClipActions=i.getUIBits(1),o.getVersion()<5&&(n.PlaceFlagHasClipActions=0),n.PlaceFlagHasClipDepth=i.getUIBits(1),n.PlaceFlagHasName=i.getUIBits(1),n.PlaceFlagHasRatio=i.getUIBits(1),n.PlaceFlagHasColorTransform=i.getUIBits(1),n.PlaceFlagHasMatrix=i.getUIBits(1),n.PlaceFlagHasCharacter=i.getUIBits(1),n.PlaceFlagMove=i.getUIBits(1),
// PlaceObject3
70===t&&(i.getUIBits(1),// Reserved
n.PlaceFlagOpaqueBackground=i.getUIBits(1),n.PlaceFlagHasVisible=i.getUIBits(1),n.PlaceFlagHasImage=i.getUIBits(1),n.PlaceFlagHasClassName=i.getUIBits(1),n.PlaceFlagHasCacheAsBitmap=i.getUIBits(1),n.PlaceFlagHasBlendMode=i.getUIBits(1),n.PlaceFlagHasFilterList=i.getUIBits(1)),n.Depth=i.getUI16(),(n.PlaceFlagHasClassName||n.PlaceFlagHasImage&&n.PlaceFlagHasCharacter)&&(n.ClassName=i.getDataUntil("\0")),n.PlaceFlagHasCharacter&&(n.CharacterId=i.getUI16()),n.PlaceFlagHasMatrix&&(n.Matrix=this.matrix()),n.PlaceFlagHasColorTransform&&(n.ColorTransform=this.colorTransform()),n.PlaceFlagHasRatio&&(n.Ratio=i.getUI16()),n.PlaceFlagHasName&&(n.Name=i.getDataUntil("\0")),n.PlaceFlagHasClipDepth&&(n.ClipDepth=i.getUI16()),70===t&&(n.PlaceFlagHasFilterList&&(n.SurfaceFilterList=this.getFilterList()),n.PlaceFlagHasBlendMode&&(n.BlendMode=i.getUI8()),n.PlaceFlagHasCacheAsBitmap&&(n.BitmapCache=i.getUI8()),n.PlaceFlagHasVisible&&(n.Visible=i.getUI8(),n.BackgroundColor=this.rgba())),n.PlaceFlagHasClipActions){i.getUI16(),// Reserved
n.AllEventFlags=this.parseClipEventFlags();for(var a=r+e,s=[];i.byte_offset<a;){var c=this.parseClipActionRecord(a);if(s[s.length]=c,a<=i.byte_offset)break;if(!(o.getVersion()<=5?i.getUI16():i.getUI32()))break;o.getVersion()<=5?i.byte_offset-=2:i.byte_offset-=4,c.KeyCode&&(i.byte_offset-=1)}n.ClipActionRecords=s}}return i.byteAlign(),i.byte_offset=r+e,n},/**
 * @returns {{}}
 */
qt.prototype.parseClipActionRecord=function(t){var e=this.getBitIO(),i={},o=this.parseClipEventFlags();if(t>e.byte_offset){var r=e.getUI32();o.keyPress&&(i.KeyCode=e.getUI8()),i.EventFlags=o,i.Actions=this.parseDoAction(r)}return i},/**
 * @returns {{}}
 */
qt.prototype.parseClipEventFlags=function(){var t=this.getBitIO(),e=this.getStage(),i={};// Reserved
return i.keyUp=t.getUIBits(1),i.keyDown=t.getUIBits(1),i.mouseUp=t.getUIBits(1),i.mouseDown=t.getUIBits(1),i.mouseMove=t.getUIBits(1),i.unload=t.getUIBits(1),i.enterFrame=t.getUIBits(1),i.load=t.getUIBits(1),e.getVersion()>=6&&(i.dragOver=t.getUIBits(1),i.rollOut=t.getUIBits(1),i.rollOver=t.getUIBits(1),i.releaseOutside=t.getUIBits(1),i.release=t.getUIBits(1),i.press=t.getUIBits(1),i.initialize=t.getUIBits(1)),i.data=t.getUIBits(1),e.getVersion()>=6&&(t.getUIBits(5),i.construct=t.getUIBits(1),i.keyPress=t.getUIBits(1),i.dragOut=t.getUIBits(1),t.getUIBits(8)),t.byteAlign(),i},/**
 * @returns {Array}
 */
qt.prototype.getFilterList=function(){for(var t=this.getBitIO().getUI8(),e=0,i=[];e<t;){var o=this.getFilter();o&&(i[i.length]=o),e=0|e+1}return i.length?i:null},/**
 * @return {{}}
 */
qt.prototype.getFilter=function(){var t=null;switch(this.getBitIO().getUI8()){case 0:t=this.dropShadowFilter();break;case 1:t=this.blurFilter();break;case 2:t=this.glowFilter();break;case 3:t=this.bevelFilter();break;case 4:t=this.gradientGlowFilter();break;case 5:t=this.convolutionFilter();break;case 6:t=this.colorMatrixFilter();break;case 7:t=this.gradientBevelFilter()}return t},/**
 * @returns {DropShadowFilter}
 */
qt.prototype.dropShadowFilter=function(){var t=this.getBitIO(),e=this.rgba(),i=e.A,o=e.R<<16|e.G<<8|e.B,r=t.getUI32()/65536,n=t.getUI32()/65536,a=t.getUI32()/65536*180/this.$PI,s=t.getUI32()/65536,c=t.getFloat16()/256,h=!!t.getUIBits(1),l=!!t.getUIBits(1),p=!t.getUIBits(1),u=t.getUIBits(5);return c?new j(s,a,o,i,r,n,c,u,h,l,p):null},/**
 * @returns {BlurFilter}
 */
qt.prototype.blurFilter=function(){var t=this.getBitIO(),e=t.getUI32()/65536,i=t.getUI32()/65536,o=t.getUIBits(5);// Reserved
return t.getUIBits(3),new Y(e,i,o)},/**
 * @returns {GlowFilter}
 */
qt.prototype.glowFilter=function(){var t=this.getBitIO(),e=this.rgba(),i=e.A,o=e.R<<16|e.G<<8|e.B,r=t.getUI32()/65536,n=t.getUI32()/65536,a=t.getFloat16()/256,s=!!t.getUIBits(1),c=!!t.getUIBits(1);t.getUIBits(1);// CompositeSource
var h=t.getUIBits(5);return a?new G(o,i,r,n,a,h,s,c):null},/**
 * @returns {BevelFilter}
 */
qt.prototype.bevelFilter=function(){var t,e=this.getBitIO(),i=(t=this.rgba()).A,o=t.R<<16|t.G<<8|t.B,r=(t=this.rgba()).A,n=t.R<<16|t.G<<8|t.B,a=e.getUI32()/65536,s=e.getUI32()/65536,c=e.getUI32()/65536*180/this.$PI,h=e.getUI32()/65536,l=e.getFloat16()/256,p=!!e.getUIBits(1),u=!!e.getUIBits(1);e.getUIBits(1);// CompositeSource
var f=e.getUIBits(1),g=e.getUIBits(4),d="inner";return p||(d=f?"full":"outer"),l?new L(h,c,o,i,n,r,a,s,l,g,d,u):null},/**
 * @returns {GradientGlowFilter}
 */
qt.prototype.gradientGlowFilter=function(){for(var t=this.getBitIO(),e=0|t.getUI8(),i=[],o=[],r=0;r<e;){var n=this.rgba();o[o.length]=n.A,i[i.length]=n.R<<16|n.G<<8|n.B|0,r=r+1|0}r=0;for(var a=[];r<e;)a[a.length]=+t.getUI8()/255,r=r+1|0;var s=t.getUI32()/65536,c=t.getUI32()/65536,h=t.getUI32()/65536*180/this.$PI,l=t.getUI32()/65536,p=t.getFloat16()/256,u=!!t.getUIBits(1),f=!!t.getUIBits(1);t.getUIBits(1);// CompositeSource
var g=t.getUIBits(1),d=t.getUIBits(4),y="inner";return u||(y=g?"full":"outer"),p?new V(l,h,i,o,a,s,c,p,d,y,f):null},/**
 * @returns {ConvolutionFilter}
 */
qt.prototype.convolutionFilter=function(){for(var t=this.getBitIO(),e=t.getUI8(),i=t.getUI8(),o=t.getFloat32,r=t.getFloat32,n=e*i,a=[];n;)n=n-1|0,a[a.length]=t.getFloat32();var s=this.rgba();
// Reserved
t.getUIBits(6);var c=!!t.getUIBits(1),h=!!t.getUIBits(1);return new R(e,i,a,o,r,h,c,s)},/**
 * @returns {GradientBevelFilter}
 */
qt.prototype.gradientBevelFilter=function(){for(var t=this.getBitIO(),e=0|t.getUI8(),i=[],o=[],r=0;r<e;){var n=this.rgba();o[o.length]=n.A,i[i.length]=n.R<<16|n.G<<8|n.B|0,r=r+1|0}r=0;for(var a=[];r<e;)a[a.length]=+t.getUI8()/255,r=r+1|0;var s=t.getUI32()/65536,c=t.getUI32()/65536,h=t.getUI32()/65536*180/this.$PI,l=t.getUI32()/65536,p=t.getFloat16()/256,u=!!t.getUIBits(1),f=!!t.getUIBits(1);t.getUIBits(1);// CompositeSource
var g=t.getUIBits(1),d=t.getUIBits(4),y="inner";return u||(y=g?"full":"outer"),p?new Z(l,h,i,o,a,s,c,p,d,y,f):null},/**
 * @returns {ColorMatrixFilter}
 */
qt.prototype.colorMatrixFilter=function(){for(var t=this.getBitIO(),e=[],i=0;i<20;i++)e[e.length]=t.getFloat32();return new N(e)},/**
 * @returns {Array}
 */
qt.prototype.colorTransform=function(){var t=this.getBitIO();t.byteAlign();var e=[1,1,1,1,0,0,0,0],i=t.getUIBits(6),o=i>>5,r=15&i;return i>>4&1&&(e[0]=t.getSIBits(r)/256,e[1]=t.getSIBits(r)/256,e[2]=t.getSIBits(r)/256,e[3]=t.getSIBits(r)/256),o&&(e[4]=t.getSIBits(r),e[5]=t.getSIBits(r),e[6]=t.getSIBits(r),e[7]=t.getSIBits(r)),e},/**
 * @param length
 */
qt.prototype.parseDefineSprite=function(t){var e=this.getBitIO(),i=this.getStage(),o=e.getUI16();e.getUI16(),// FrameCount
i.setCharacter(o,this.parseTags(t,o))},/**
 * @param length
 * @returns {ActionScript}
 */
qt.prototype.parseDoAction=function(t){var e=this.getBitIO().getData(t);return new Gt(e)},/**
 * @param length
 */
qt.prototype.parseDoInitAction=function(t){var e=this.getBitIO(),i=this.getStage(),o=e.getUI16(),r=new Gt(e.getData(t-2),void 0,void 0,!0),n=i.getParent();n.variables={};var a=n.createActionScript2(r);o in i.packages&&(n.active=!0,a.apply(n),n.active=!1),i.initActions[o]=a},/**
 * @returns {{}}
 */
qt.prototype.parseDefineSceneAndFrameLabelData=function(){var t=this.getBitIO(),e={},i=0|t.getU30();e.SceneCount=i;for(var o=[],r=0;r<i;)o[r]={offset:t.getU30(),name:decodeURIComponent(t.getDataUntil("\0"))},r=0|r+1;e.sceneInfo=o,i=0|t.getU30(),e.FrameLabelCount=i;var n=[];for(r=0;r<i;)n[r]={num:t.getU30(),label:decodeURIComponent(t.getDataUntil("\0"))},r=0|r+1;return e.frameInfo=n,e},/**
 * @param tagType
 * @returns {{}}
 */
qt.prototype.parseSoundStreamHead=function(t){var e=this.getBitIO(),i={};// Reserved
// 0 = 5.5kHz, 1 = 11kHz, 2 = 22kHz, 3 = 44kHz
// 0 = 8-bit, 1 = 16-bit
// 0 = Mono, 1 = Stereo
// 0 = Uncompressed(native-endian)
// 1 = ADPCM
// 2 = MP3
// 3 = Uncompressed(little-endian)
// 4 = Nellymoser 16 kHz
// 5 = Nellymoser 8 kHz
// 6 = Nellymoser
// 11 = Speex
// 0 = 5.5kHz, 1 = 11kHz, 2 = 22kHz, 3 = 44kHz
// 0 = 8-bit, 1 = 16-bit
// 0 = Mono, 1 = Stereo
return i.tagType=t,e.getUIBits(4),i.PlaybackSoundRate=e.getUIBits(2),i.PlaybackSoundSize=e.getUIBits(1),i.PlaybackSoundType=e.getUIBits(1),i.StreamSoundCompression=e.getUIBits(4),i.StreamSoundRate=e.getUIBits(2),i.StreamSoundSize=e.getUIBits(1),i.StreamSoundType=e.getUIBits(1),i.StreamSoundSampleCount=e.getUI16(),2===i.StreamSoundCompression&&(i.LatencySeek=e.getSIBits(2)),i},/**
 * @param tagType
 * @param length
 */
qt.prototype.parseDoABC=function(t,e){var i=this.getBitIO();this.getStage().abcFlag=!0;var o=i.byte_offset,r={};r.tagType=t,r.Flags=i.getUI32(),r.Name=i.getDataUntil("\0");
// ABCBitIO
var n=e-(i.byte_offset-o),a=i.getData(n),s=new zt;s.setData(a),
// version
r.minorVersion=s.getUI16(),r.majorVersion=s.getUI16(),
// integer
r.integer=this.ABCInteger(s),
// uinteger
r.uinteger=this.ABCUinteger(s),
// double
r.double=this.ABCDouble(s),
// string_info
r.string=this.ABCStringInfo(s),
// namespace_info
r.namespace=this.ABCNameSpaceInfo(s),
// ns_set_info
r.nsSet=this.ABCNsSetInfo(s),
// multiname_info;
r.multiname_info=this.ABCMultiNameInfo(s);var c=0;
// method_info
r.method=[];var h=0|s.getU30();if(h){var l=[];for(c=0;c<h;)l[c]=this.ABCMethodInfo(s),c=0|c+1;r.method=l}
// metadata_info
r.metadata=[];var p=0|s.getU30();if(p){var u=[];for(c=0;c<p;)u[c]=this.ABCMetadataInfo(s),c=0|c+1;r.metadata=u}var f=0|s.getU30();if(r.instance=[],r.class=[],console.log(f),f){
// instance_info
var g=[];for(c=0;c<f;)g[c]=this.ABCInstanceInfo(s),c=0|c+1;console.log(g),r.instance=g;
// class_info
var d=[];for(c=0;c<f;)d[c]=this.ABCClassInfo(s),c=0|c+1;r.class=d}
// script_info
r.script=[];var y=s.getU30();if(y){var v=[];for(c=0;c<y;)v[c]=this.ABCScriptInfo(s),c=0|c+1;r.script=v}
// method_body_info
r.methodBody=[];var b=s.getU30();if(b){var m=[];for(c=0;c<b;){var S=this.ABCMethodBodyInfo(s);m[S.method]=S,c=0|c+1}r.methodBody=m}
// build names
r=this.ABCMultinameToString(r),
// build instance
this.ABCBuildInstance(r)},/**
 * @param obj
 */
qt.prototype.ABCBuildInstance=function(t){for(var e=this.getStage(),i=t.instance,o=0|i.length,r=t.namespace,n=t.string,a=t.names,s=0;s<o;){var c=i[s],h=null;8&c.flags&&(h=c.protectedNs);var l={},p=(l=h?n[r[h].name]:a[c.name]).split(":"),u=p.pop(),f=p.pop(),g=function(t){this["__swf2js__::builder"]=t},d=g.prototype;
// constructor
d[u]=this.ABCCreateActionScript3(t,c.iinit,l);
// prototype
var y=c.trait,v=0|y.length,b=[],m=1;if(v)for(var S=0;S<v;){var A=y[S],I=a[A.name].split("::").pop(),C=void 0;switch(A.kind){case 0:// Slot
b[m]=I,m=0|m+1;break;case 1:// Method
case 2:// Getter
case 3:// Setter
C=this.ABCCreateActionScript3(t,A.data.info,l);break;case 4:// Class
console.log("build: Class");break;case 5:// Function
console.log("build: Function");break;case 6:// Const
console.log("build: Const")}d[I]=C,S=0|S+1}var x="__swf2js__:"+l;d[x]={};
// extends
var _=c.superName;d[x].extends=a[_],
// register
d[x].register=b;
// build
var T=e.abc,k=e.avm2;if(f)for(var O=f.split("."),M=0|O.length,B=0;B<M;)O[B]in k||(k[O[B]]={},T[O[B]]={}),k=k[O[B]],T=T[O[B]],B=0|B+1;T[u]=g,k[u]=new g,s=0|s+1}},/**
 * @param obj
 * @param methodId
 * @param abcKey
 */
qt.prototype.ABCCreateActionScript3=function(t,e,i){return function(t,e,i,o){return function(){var r=new Zt(t,e,i,o);return r.caller=this,r.args=arguments,r.execute()}}(t,e,i,this.getStage())},/**
 * @param obj
 * @returns {*}
 */
qt.prototype.ABCMultinameToString=function(t){for(var e=t.multiname_info,i=0|e.length,o=t.string,r=t.namespace,n=[],a=1;a<i;){var s=e[a],c="";switch(s.kind){case 7:// QName
case 13:// QNameA
var h=r[s.ns];switch(h.kind){default:c+=o[h.name];break;case 5:c+="private"}""!==c&&(c+="::"),c+=o[s.name];break;case 15:// RTQName
case 16:// RTQNameA
console.log("RTQName",a,s);break;case 9:// Multiname
case 14:// MultinameA
c=o[s.name];break;case 27:// MultinameL
case 28:// MultinameLA
c=null;break;case 17:// RTQNameL
case 18:// RTQNameLA
console.log("RTQNameL",a,s)}n[a]=c,a=0|a+1}return t.names=n,t},/**
 * @param ABCBitIO
 * @returns {Array}
 */
qt.prototype.ABCInteger=function(t){var e=[],i=0|t.getU30();if(i)for(var o=1;o<i;)e[o]=t.getS30(),o=0|o+1;return e},/**
 * @param ABCBitIO
 * @returns {Array}
 */
qt.prototype.ABCUinteger=function(t){var e=[],i=0|t.getU30();if(i)for(var o=1;o<i;)e[o]=t.getU30(),o=0|o+1;return e},/**
 * @param ABCBitIO
 * @returns {Array}
 */
qt.prototype.ABCDouble=function(t){var e=[],i=0|t.getU30();if(i)for(var o=1;o<i;)e[o]=t.getFloat64LittleEndian(),o=0|o+1;return e},/**
 * @param ABCBitIO
 * @returns {Array}
 */
qt.prototype.ABCStringInfo=function(t){var e=[],i=0|t.getU30();if(i)for(var o=1;o<i;)e[o]=t.AbcReadString(),o=0|o+1;return e},/**
 * @param ABCBitIO
 * @returns {Array}
 */
qt.prototype.ABCNameSpaceInfo=function(t){var e=[],i=0|t.getU30();if(i)for(var o=1;o<i;)e[o]={kind:t.getUI8(),name:t.getU30()},o=0|o+1;return e},/**
 * @param ABCBitIO
 * @returns {Array}
 */
qt.prototype.ABCNsSetInfo=function(t){var e=[],i=0|t.getU30();if(i)for(var o=1;o<i;){var r=0|t.getU30(),n=[];if(r)for(var a=0;a<r;)n[a]=t.getU30(),a=0|a+1;e[o]=n,o=0|o+1}return e},/**
 * @param ABCBitIO
 * @returns {Array}
 */
qt.prototype.ABCMultiNameInfo=function(t){var e=[],i=0|t.getU30();if(i)for(var o=1;o<i;){var r={};switch(r.kind=t.getUI8(),r.kind){case 7:// QName
case 13:// QNameA
r.ns=t.getU30(),r.name=t.getU30();break;case 15:// RTQName
case 16:// RTQNameA
r.name=t.getU30();break;case 9:// Multiname
case 14:// MultinameA
r.name=t.getU30(),r.ns_set=t.getU30();break;case 27:// MultinameL
case 28:// MultinameLA
r.ns_set=t.getU30()}e[o]=r,o=0|o+1}return e},/**
 * @param ABCBitIO
 * @returns {{}}
 */
qt.prototype.ABCMethodInfo=function(t){var e,i={},o=0|t.getU30();if(i.paramCount=o,i.returnType=t.getU30(),i.paramType=[],o){var r=[];for(e=0;e<o;)r[r.length]=t.getU30(),e=0|e+1;i.paramType=r}if(i.name=t.getU30(),i.flags=t.getUI8(),i.options=[],8===i.flags){var n=[],a=0|t.getU30();if(a)for(e=0;e<a;)n[n.length]={val:t.getU30(),kind:t.getUI8()},e=0|e+1;i.options=n}if(i.paramName=[],128===i.flags){var s=[];if(o)for(e=0;e<o;)s[s.length]=t.getU30(),e=0|e+1;i.paramName=s}return i},/**
 * @param ABCBitIO
 * @returns {{}}
 */
qt.prototype.ABCMetadataInfo=function(t){var e={};e.name=t.getU30(),e.items=[];var i=0|t.getU30();if(i){for(var o=[],r=0;r<i;)o[o.length]={key:t.getU30(),value:t.getU30()},r=0|r+1;e.items=o}return e},/**
 * @param ABCBitIO
 * @returns {{}}
 */
qt.prototype.ABCInstanceInfo=function(t){var e={};e.name=t.getU30(),e.superName=t.getU30(),e.flags=t.getUI8(),8&e.flags&&(e.protectedNs=t.getU30());var i=0|t.getU30();if(e.interfaces=[],i){for(var o=[],r=0;r<i;)o[o.length]=t.getU30(),r=0|r+1;e.interfaces=o}return e.iinit=t.getU30(),e.trait=this.ABCTrait(t),e},/**
 * @param ABCBitIO
 * @returns {{}}
 */
qt.prototype.ABCClassInfo=function(t){var e={};return e.cinit=t.getU30(),e.trait=this.ABCTrait(t),e},/**
 * @param ABCBitIO
 */
qt.prototype.ABCScriptInfo=function(t){var e={};return e.init=t.getU30(),e.trait=this.ABCTrait(t),e},/**
 * @param ABCBitIO
 * @returns {{}}
 */
qt.prototype.ABCMethodBodyInfo=function(t){var e={};e.method=t.getU30(),e.maxStack=t.getU30(),e.localCount=t.getU30(),e.initScopeDepth=t.getU30(),e.maxScopeDepth=t.getU30();var i=t.getU30(),o=[];i&&(o=this.ABCBuildCode(t,i)),e.codes=o;var r=[];if(i=0|t.getU30())for(var n=0;n<i;)r[r.length]=this.ABCException(t),n=0|n+1;return e.exceptions=r,e.trait=this.ABCTrait(t),e},/**
 * @param ABCBitIO
 * @param count
 * @returns {Array}
 */
qt.prototype.ABCBuildCode=function(t,e){for(var i=[],o=0,r=0;r<e;){var n={},a=0,s=t.getUI8();switch(n.code=s,s){case 134:// astype
case 65:// call
case 128:// coerce
case 66:// construct
case 73:// constructsuper
case 241:// debugfile
case 240:// debugline
case 148:// declocal
case 195:// declocal_i
case 106:// deleteproperty
case 6:// dxns
case 94:// findproperty
case 93:// findpropstrict
case 89:// getdescendants
case 110:// getglobalslot
case 96:// getlex
case 98:// getlocal
case 102:// getproperty
case 108:// getslot
case 4:// getsuper
case 146:// inclocal
case 194:// inclocal_i
case 104:// initproperty
case 178:// istype
case 8:// kill
case 86:// newarray
case 90:// newcatch
case 88:// newclass
case 64:// newfunction
case 85:// newobject
case 47:// pushdouble
case 45:// pushint
case 49:// pushnamespace
case 37:// pushshort
case 44:// pushstring
case 46:// pushuint
case 99:// setlocal
case 111:// setglobalslot
case 97:// setproperty
case 109:// setslot
case 5:// setsuper
o=t.byte_offset,n.value1=t.getU30(),a+=t.byte_offset-o;break;case 27:// lookupswitch
n.value1=t.getSI24(),a+=3,o=t.byte_offset,n.value2=t.getSI24(),a+=t.byte_offset-o,n.value3=t.getSI24(),a+=3;break;case 101:// getscopeobject
case 36:// pushbyte
n.value1=t.getSI8(),a+=1;break;case 50:// hasnext2
n.value1=t.getSI8(),n.value2=t.getSI8(),a+=2;break;case 19:// ifeq
case 18:// iffalse
case 24:// ifge
case 23:// ifgt
case 22:// ifle
case 21:// iflt
case 15:// ifnge
case 14:// ifngt
case 13:// ifnle
case 12:// ifnlt
case 20:// ifne
case 25:// ifstricteq
case 26:// ifstrictne
case 17:// iftrue
case 16:// jump
n.value1=t.getSI24(),a+=3;break;case 67:// callmethod
case 70:// callproperty
case 76:// callproplex
case 79:// callpropvoid
case 68:// callstatic
case 69:// callsuper
case 78:// callsupervoid
case 74:// constructprop
case 239:// debug
o=t.byte_offset,n.value1=t.getU30(),n.value2=t.getU30(),a+=t.byte_offset-o}n.offset=a,i[r]=n,r+=a}return i},/**
 * @param ABCBitIO
 * @returns {{}}
 */
qt.prototype.ABCException=function(t){var e={};return e.from=t.getU30(),e.to=t.getU30(),e.target=t.getU30(),e.excType=t.getU30(),e.varName=t.getU30(),e},/**
 * @param ABCBitIO
 * @returns {Array}
 */
qt.prototype.ABCTrait=function(t){var e=t.getU30(),i=[];if(e)for(var o=0;o<e;o++){var r={};r.name=t.getU30();var n=15&t.getUI8(),a=n>>4&15,s={};switch(n){default:console.log("ERROR:"+n);break;case 0:// Trait_Slot
case 6:// Trait_Const
s.id=t.getU30(),s.name=t.getU30(),s.index=t.getU30(),s.kind=null,0!==s.index&&(s.kind=t.getUI8());break;case 1:// Trait_Method
case 2:// Trait_Getter
case 3:case 4:case 5:// Trait_Function
s.id=t.getU30(),s.info=t.getU30()}if(r.kind=n,r.data=s,4&a){var c=t.getU30(),h=[];if(c)for(var l=0;l<c;l++)h[h.length]=t.getU30();r.metadata=h}i[i.length]=r}return i},/**
 * parseSymbolClass
 */
qt.prototype.parseSymbolClass=function(){var t=this.getBitIO(),e=this.getStage().symbols,i=t.getUI16();if(i)for(var o=0;o<i;)e[t.getUI16()]=t.getDataUntil("\0"),o=0|o+1},/**
 * @param tagType
 * @param length
 */
qt.prototype.parseDefineSound=function(e,i){var o=this.getBitIO(),r=this.getStage(),n=o.byte_offset,a={};a.tagType=e,a.SoundId=o.getUI16(),a.SoundFormat=o.getUIBits(4),a.SoundRate=o.getUIBits(2),a.SoundSize=o.getUIBit(),a.SoundType=o.getUIBit(),a.SoundSampleCount=o.getUI32();for(var s=0|i-(o.byte_offset-n),c=o.getData(s),h="",l=0;l<s;)h+=this.$fromCharCode(c[l]),l=0|l+1;o.byte_offset=n+i;var p="";switch(a.SoundFormat){case 0:// Uncompressed native-endian
case 3:case 1:// ADPCM ? 32KADPCM
p="wave";break;case 2:// MP3
p="mpeg";break;case 4:// Nellymoser 16
case 5:// Nellymoser 8
case 6://
p="nellymoser";break;case 11:// Speex
p="speex";break;case 15:p="x-aiff"}a.base64="data:audio/"+p+";base64,"+t.btoa(h),r.sounds[a.SoundId]=a},/**
 * @param tagType
 */
qt.prototype.parseStartSound=function(t){var e=this.getBitIO(),i=this.getStage(),o={};o.tagType=t,o.SoundId=e.getUI16(),89===t&&(o.SoundClassName=e.getDataUntil("\0")),o.SoundInfo=this.parseSoundInfo(),i.setCharacter(o.SoundId,o);var r=i.sounds[o.SoundId],n=this.$document.createElement("audio");n.onload=function(){this.load(),this.preload="auto",this.autoplay=!1,this.loop=!1},n.src=r.base64;var a=i.loadSounds;return a[a.length]=n,{SoundId:o.SoundId,Audio:n,tagType:t}},/**
 * parseDefineButtonSound
 */
qt.prototype.parseDefineButtonSound=function(){for(var t=this.getBitIO(),e=this.getStage(),i=t.getUI16(),o=e.getCharacter(i),r=0;r<4;r++){var n=t.getUI16();if(n){var a=this.parseSoundInfo();switch(r){case 0:o.ButtonStateUpSoundInfo=a,o.ButtonStateUpSoundId=n;break;case 1:o.ButtonStateOverSoundInfo=a,o.ButtonStateOverSoundId=n;break;case 2:o.ButtonStateDownSoundInfo=a,o.ButtonStateDownSoundId=n;break;case 3:o.ButtonStateHitTestSoundInfo=a,o.ButtonStateHitTestSoundId=n}}}e.setCharacter(i,o)},/**
 * @returns {{}}
 */
qt.prototype.parseSoundInfo=function(){var t=this.getBitIO(),e={};if(t.getUIBits(2),// Reserved
e.SyncStop=t.getUIBit(),e.SyncNoMultiple=t.getUIBit(),e.HasEnvelope=t.getUIBit(),e.HasLoops=t.getUIBit(),e.HasOutPoint=t.getUIBit(),e.HasInPoint=t.getUIBit(),e.HasInPoint&&(e.InPoint=t.getUI32()),e.HasOutPoint&&(e.OutPoint=t.getUI32()),e.HasLoops&&(e.LoopCount=t.getUI16()),e.HasEnvelope){for(var i=0|t.getUI8(),o=0,r=[];o<i;)r[o]={Pos44:t.getUI32(),LeftLevel:t.getUI16(),RightLevel:t.getUI16()},o=0|o+1;e.EnvPoints=i,e.EnvelopeRecords=r}return e},/**
 * parseDefineFontAlignZones
 */
qt.prototype.parseDefineFontAlignZones=function(){var t=this.getBitIO(),e=this.getStage(),i=t.getUI16(),o=e.getCharacter(i);o.CSMTableHint=t.getUIBits(2),t.getUIBits(6);for(// Reserved
var r=0|o.NumGlyphs,n=[],a=0;a<r;){for(var s=0|t.getUI8(),c=[],h=0;h<s;)c[h]=t.getUI32(),h=0|h+1;n[a]={ZoneData:c,Mask:t.getUI8()},a=0|a+1}t.byteAlign(),o.ZoneTable=n,e.setCharacter(i,o)},/**
 * @param tagType
 */
qt.prototype.parseCSMTextSettings=function(t){var e=this.getBitIO(),i={};i.tagType=t,i.TextID=e.getUI16(),i.UseFlashType=e.getUIBits(2),i.GridFit=e.getUIBits(3),e.getUIBits(3),// Reserved
i.Thickness=e.getUI32(),i.Sharpness=e.getUI32(),e.getUI8()},/**
 * @param tagType
 * @param length
 */
qt.prototype.parseSoundStreamBlock=function(t,e){var i=this.getBitIO(),o={};o.tagType=t,o.compressed=i.getData(e)},/**
 * @param tagType
 */
qt.prototype.parseDefineVideoStream=function(t){var e=this.getBitIO(),i=this.getStage(),o={};o.tagType=t,o.CharacterId=e.getUI16(),o.NumFrames=e.getUI16(),o.Width=e.getUI16(),o.Height=e.getUI16(),e.getUIBits(4),// Reserved
o.VideoFlagsDeblocking=e.getUIBits(3),o.VideoFlagsSmoothing=e.getUIBits(1),o.CodecID=e.getUI8(),i.setCharacter(o.CharacterId,o),console.log(o)},/**
 *
 * @param tagType
 * @param length
 */
qt.prototype.parseVideoFrame=function(t,e){var i=this.getBitIO(),o=this.getStage(),r=i.byte_offset,n={};n.tagType=t,n.StreamID=i.getUI16(),n.FrameNum=i.getUI16();var a=o.getCharacter(n.StreamID),s=e-(i.byte_offset-r);switch(a.CodecID){case 4:this.parseVp6SwfVideoPacket(s)}i.byte_offset=r+e,
// obj.base64 = 'data:image/jpeg;base64,' + window.btoa(VideoData);
o.videos[n.StreamID]=n},/**
 * @param length
 * @returns {string}
 */
qt.prototype.parseVp6SwfVideoPacket=function(t){var e=this.getBitIO().getData(t);return console.log(e),""},/**
 * parseFileAttributes
 */
qt.prototype.parseFileAttributes=function(){var t=this.getBitIO(),e={};t.getUIBit(),// Reserved
e.UseDirectBlit=t.getUIBit(),e.UseGPU=t.getUIBit(),e.HasMetadata=t.getUIBit(),e.ActionScript3=t.getUIBit(),e.Reserved2=t.getUIBits(3),e.UseNetwork=t.getUIBit(),e.Reserved3=t.getUIBits(24)},/**
 * parseDefineScalingGrid
 */
qt.prototype.parseDefineScalingGrid=function(){var t={},e=this.getBitIO();t.CharacterId=e.getUI16(),t.Splitter=this.rect()};/**
 * @constructor
 */
var Kt=function(){};/**
 * Function
 */
Kt.prototype.$Function=Function,/**
 * @param src
 * @returns {{}}
 */
Kt.prototype.clone=function(t){var e=function(t,i){var o;for(o in t)if(t.hasOwnProperty(o)){var r=t[o];r instanceof Array?(i[o]=[],e(r,i[o])):r instanceof Object?(i[o]={},e(r,i[o])):i[o]=r}},i={};return e(t,i),i},/**
 * @param shapes
 * @param isMorph
 * @returns {Array}
 */
Kt.prototype.convert=function(t,e){for(var i=t.lineStyles.lineStyles,o=t.fillStyles.fillStyles,r=t.ShapeRecords,n=0,a={},s=[],c=0,h=0,l=0,p=0,u=0,f=0,g=0,d=0,y=0,v=[],b=[],m=[],S=[],A=0,I=0|r.length,C=0;C<I;){var x=r[C];if(C=C+1|0,!x){S=this.setStack(S,this.fillMerge(v,b,e)),S=this.setStack(S,m);break}if(x.isChange)A=A+1|0,x.StateNewStyles&&(c=0,h=0,S=this.setStack(S,this.fillMerge(v,b,e)),S=this.setStack(S,m),v=[],b=[],m=[],x.NumFillBits&&(o=x.FillStyles.fillStyles),x.NumLineBits&&(i=x.LineStyles.lineStyles)),l=c,p=h,x.StateMoveTo&&(l=x.MoveX,p=x.MoveY),u=l,f=p,x.StateFillStyle0&&(g=0|x.FillStyle0),x.StateFillStyle1&&(d=0|x.FillStyle1),x.StateLineStyle&&(y=0|x.LineStyle);else{c=x.AnchorX,h=x.AnchorY;var _=x.ControlX,T=x.ControlY,k=x.isCurved;if(g&&((n=g-1|0)in v||(v[n]=[]),A in v[n]||(v[n][A]={obj:o[n],startX:l,startY:p,endX:0,endY:0,cache:[]}),(s=(a=v[n][A]).cache)[s.length]=this.clone(x),a.endX=c,a.endY=h),d&&((n=d-1|0)in b||(b[n]=[]),A in b[n]||(b[n][A]={obj:o[n],startX:l,startY:p,endX:0,endY:0,cache:[]}),(s=(a=b[n][A]).cache)[s.length]=this.clone(x),a.endX=c,a.endY=h),y){(n=y-1|0)in m||(m[n]={obj:i[n],cache:[]}),(s=(a=m[n]).cache)[s.length]=[0,u,f];var O=[2,c,h];k&&(O=[1,_,T,c,h]),s[s.length]=O}u=c,f=h}}return S},/**
 * @param fills0
 * @param fills1
 * @param isMorph
 * @returns {*}
 */
Kt.prototype.fillMerge=function(t,e,i){if((t=this.fillReverse(t)).length)for(var o in t)if(t.hasOwnProperty(o)){var r=t[o];if(o in e){var n=e[o];for(var a in r)r.hasOwnProperty(a)&&(n[n.length]=r[a])}else e[o]=r}return this.coordinateAdjustment(e,i)},/**
 * @param fills0
 * @returns {*}
 */
Kt.prototype.fillReverse=function(t){if(!t.length)return t;for(var e in t)if(t.hasOwnProperty(e)){var i=t[e];for(var o in i)if(i.hasOwnProperty(o)){var r=0,n=0,a=i[o],s=a.startX,c=a.startY,h=a.cache,l=0|h.length;if(l){for(var p in h)if(h.hasOwnProperty(p)){var u=h[p];r=u.AnchorX,n=u.AnchorY,u.AnchorX=s,u.AnchorY=c,s=r,c=n}var f=[];if(l>0)for(;l;)l=l-1|0,f[f.length]=h[l];a.cache=f}s=a.startX,c=a.startY,a.startX=a.endX,a.startY=a.endY,a.endX=s,a.endY=c}}return t},/**
 * @param fills1
 * @param isMorph
 */
Kt.prototype.coordinateAdjustment=function(t,e){for(var i in t)if(t.hasOwnProperty(i)){var o=[],r=t[i];for(var n in r)r.hasOwnProperty(n)&&(o[o.length]=r[n]);var a=[];if(o.length>1&&!e)for(;;){if(!o.length)break;var s=o.shift();if(s.startX!==s.endX||s.startY!==s.endY){var c=0|o.length;if(c<0)break;for(var h=0;c;){var l=o[c=c-1|0];if(l.startX===s.endX&&l.startY===s.endY){s.endX=l.endX,s.endY=l.endY;for(var p=s.cache,u=l.cache,f=0|u.length,g=0;g<f;)p[p.length]=u[g],g=g+1|0;o.splice(c,1),o.unshift(s),h=1;break}}h||o.unshift(s)}else a[a.length]=s}else a=o;for(var d=0|a.length,y=[],v={},b=0;b<d;){var m=a[b];v=m.obj;var S=m.cache,A=0|S.length;y[y.length]=[0,m.startX,m.startY];for(var I=0;I<A;){var C=S[I],x=[2,C.AnchorX,C.AnchorY];C.isCurved&&(x=[1,C.ControlX,C.ControlY,C.AnchorX,C.AnchorY]),y[y.length]=x,I=I+1|0}b=b+1|0}t[i]={cache:y,obj:v}}return t},/**
 * @param stack
 * @param array
 * @returns {*}
 */
Kt.prototype.setStack=function(t,e){if(e.length)for(var i in e)if(e.hasOwnProperty(i)){var o=e[i];t[t.length]={obj:o.obj,cmd:this.buildCommand(o.cache)}}return t},/**
 * @param cache
 * @returns {*}
 */
Kt.prototype.buildCommand=function(t){return this.toCanvas2D(t)},/**
 * @param cache
 * @returns {*}
 */
Kt.prototype.toCanvas2D=function(t){for(var e=0|t.length,i="",o=0;o<e;){var r=t[o];switch(r[0]){case 0:i+="ctx.moveTo("+r[1]+","+r[2]+");";break;case 1:i+="ctx.quadraticCurveTo("+r[1]+","+r[2]+","+r[3]+","+r[4]+");";break;case 2:i+="ctx.lineTo("+r[1]+","+r[2]+");";break;case 3:i+="ctx.bezierCurveTo("+r[1]+","+r[2]+","+r[3]+","+r[4]+","+r[5]+","+r[6]+");";break;case 4:i+="ctx.moveTo("+(r[1]+r[3])+","+r[2]+");",i+="ctx.arc("+r[1]+","+r[2]+","+r[3]+",0 , Math.PI*2, false);";break;
// Graphics
case 5:// fillStyle
i+="var r = Math.max(0, Math.min(("+r[1]+" * ct[0]) + ct[4], 255))|0;",i+="var g = Math.max(0, Math.min(("+r[2]+" * ct[1]) + ct[5], 255))|0;",i+="var b = Math.max(0, Math.min(("+r[3]+" * ct[2]) + ct[6], 255))|0;",i+="var a = Math.max(0, Math.min(("+r[4]+" * 255 * ct[3]) + ct[7], 255)) / 255;",i+="ctx.fillStyle = 'rgba('+r+', '+g+', '+b+', '+a+')';";break;case 6:// strokeStyle
i+="var r = Math.max(0, Math.min(("+r[1]+" * ct[0]) + ct[4], 255))|0;",i+="var g = Math.max(0, Math.min(("+r[2]+" * ct[1]) + ct[5], 255))|0;",i+="var b = Math.max(0, Math.min(("+r[3]+" * ct[2]) + ct[6], 255))|0;",i+="var a = Math.max(0, Math.min(("+r[4]+" * 255 * ct[3]) + ct[7], 255)) / 255;",i+="ctx.strokeStyle = 'rgba('+r+', '+g+', '+b+', '+a+')';";break;case 7:// fill
i+="if (!isClip) { ctx.fill(); }";break;case 8:// stroke
i+="if (!isClip) { ctx.stroke(); }";break;case 9:// width
i+="ctx.lineWidth = "+r[1]+";";break;case 10:// lineCap
i+="ctx.lineCap = '"+r[1]+"';";break;case 11:// lineJoin
i+="ctx.lineJoin = '"+r[1]+"';";break;case 12:// miterLimit
i+="ctx.miterLimit = '"+r[1]+"';";break;case 13:// beginPath
i+="ctx.beginPath();"}o=o+1|0}return new this.$Function("ctx","ct","isClip",i)},i.prototype.$vtc=new Kt;/**
 * @constructor
 */
var Jt=function(){this.pool=[],this.store=[],this.size=73400320};(/**
 * extends
 */
Jt.prototype=Object.create(i.prototype)).constructor=Jt,/**
 * reset
 */
Jt.prototype.reset=function(){var t=this.store;for(var e in t)if(t.hasOwnProperty(e)){var i=t[e];i instanceof CanvasRenderingContext2D&&this.destroy(i)}this.store=[],this.size=73400320},/**
 * @param ctx
 */
Jt.prototype.destroy=function(t){var e=this.pool,i=t.canvas,o=0|i.width,r=0|i.height;this.size=this.size+o*r|0,this.$canWebGL?t.clear(t.STENCIL_BUFFER_BIT|t.COLOR_BUFFER_BIT):t.clearRect(0,0,o+1,r+1),
// reset
i.width=i.height=1,
// pool
e[e.length]=i},/**
 * @returns {*}
 */
Jt.prototype.getCanvas=function(){return this.pool.pop()||this.$document.createElement("canvas")},/**
 * @param key
 * @returns {*}
 */
Jt.prototype.getCache=function(t){return this.store[t]},/**
 * @param key
 * @param value
 */
Jt.prototype.setCache=function(t,e){if(e instanceof CanvasRenderingContext2D){var i=e.canvas;this.size=this.size-i.width*i.height|0}this.store[t]=e},/**
 * @param id
 * @param matrix
 * @param cxForm
 * @returns {string}
 */
Jt.prototype.generateKey=function(t,e,i){
// matrix
var o=0;if(void 0!==e)switch(0|e.length){case 2:o=this.$sqrt(e[0]*e[0]+e[1]*e[1]);break;default:var r=this.$sqrt(e[0]*e[0]+e[1]*e[1]),n=this.$sqrt(e[2]*e[2]+e[3]*e[3]);o=this.$sqrt(r*r+n*n)}var a=this.$rgbToInt(i[4],i[5],i[6]);return t+"_"+o+"_"+this.$round(32*i[0])+"_"+this.$round(32*i[1])+"_"+this.$round(32*i[2])+"_"+this.$round(32*i[3])+"_"+a.toString(16)+"_"+this.$round(i[7]/8)},i.prototype.$cacheStore=new Jt;/**
 * @constructor
 */
var Qt=function(){};(/**
 * extends
 */
Qt.prototype=Object.create(i.prototype)).constructor=Qt,/**
 * @param path
 * @returns {Packages}
 */
Qt.prototype.getPackage=function(t){for(var e=new Wt,i=t.split("."),o=i.length,r=0;r<o;)e=e[i[r]],r=r+1|0;return e},/**
 * @param url
 * @param options
 */
Qt.prototype.load=function(t,e){if(
// develop only
"develop"===t&&(t=location.search.substr(1).split("&")[0]),t){var i=this,o=e&&e.stage instanceof kt?e.stage:new kt;o.setOptions(e),i.$stages[o.getId()]=o,
// init
o.init();var r=new XMLHttpRequest;r.open("GET",t,!0),i.$canXHR2?r.responseType="arraybuffer":r.overrideMimeType("text/plain; charset=x-user-defined"),r.onreadystatechange=function(){if(4===(0|r.readyState))switch(0|r.status){case 200:case 304:var e=i.$canXHR2?r.response:r.responseText;o.parse(e,t),i.$cacheStore.reset();break;default:alert(r.statusText)}},r.send(null)}else alert("please set swf url")},/**
 * @param url
 * @param options
 * @returns {*}
 */
Qt.prototype.reload=function(t,e){if(!o)return this.load(t,e);var i=this.$stages,r=i[0];for(var n in i)if(i.hasOwnProperty(n)){var a=i[n];a.stop(),n&&(a.deleteNode(a.tagId),a=void 0)}
// reset
o=1,this.$stages=[],this.$loadStages=[],this.$stages[0]=r,
// reload
r.reload(t,e)},/**
 * @param width
 * @param height
 * @param fps
 * @param options
 * @returns {MovieClip}
 */
Qt.prototype.createRootMovieClip=function(e,i,o,r){var n=new kt;if(e=e||240,i=i||240,o=o||60,
// set
n.setBaseWidth(e),n.setBaseHeight(i),n.setFrameRate(o),n.setOptions(r),this.$stages[n.getId()]=n,
// init
n.init(),n.isLoad=!0,"loading"===this.$document.readyState){var a=function(){t.removeEventListener("DOMContentLoaded",a,!1),n.resize(),n.loaded()};t.addEventListener("DOMContentLoaded",a,!1)}return n.getParent()},t.swf2js=new Qt}(window);