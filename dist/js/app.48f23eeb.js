(function(e){function t(t){for(var s,o,r=t[0],l=t[1],c=t[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(s=!1)}s&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},n={app:0},i=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"00b7":function(e,t,a){"use strict";a("dce6")},"1dca":function(e,t,a){"use strict";a("cb33")},"2b0f":function(e,t,a){},"2eab":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("2b0e"),n=a("7496"),i=a("f6c4"),o=function(){var e=this,t=e._self._c;return t(n["a"],[t(i["a"],{staticClass:"pt-0.5"},[t("TheNavbar"),t("ScrollToTop"),t("router-view"),t("Thefooter")],1)],1)},r=[],l=a("8336"),c=a("71d9"),u=a("2a7f"),d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container mx-auto"},[t(c["a"],{staticClass:"my-6",attrs:{flat:""}},[t(u["a"],{staticClass:"text-h5 font-weight-bold cyan--text"},[t("span",[e._v("F")]),e._v("anny ")]),t(u["a"],[t(l["a"],{staticClass:"font-weight-bold cyan--text",attrs:{text:""},on:{click:function(t){return e.$vuetify.goTo("#aboutMe",{duration:500,easing:"easeInOutCubic"})}}},[e._v("A propos")]),t(l["a"],{staticClass:"font-weight-bold cyan--text",attrs:{text:""},on:{click:function(t){return e.$vuetify.goTo("#portfolio",{duration:500,easing:"easeInOutCubic"})}}},[e._v("Portfolio")]),t(l["a"],{staticClass:"font-weight-bold cyan--text",attrs:{text:""},on:{click:function(t){return e.$vuetify.goTo("#background",{duration:500,easing:"easeInOutCubic"})}}},[e._v("Mon parcours")]),t(l["a"],{staticClass:"font-weight-bold cyan--text",attrs:{text:""},on:{click:function(t){return e.$vuetify.goTo("#contact",{duration:500,easing:"easeInOutCubic"})}}},[e._v("Contact")])],1)],1)],1)},p=[],v={name:"TheNavbar"},f=v,m=(a("95ad"),a("2877")),g=Object(m["a"])(f,d,p,!1,null,null,null),_=g.exports,b=a("132d"),h=function(){var e=this,t=e._self._c;return t(l["a"],{staticClass:"mx-2",attrs:{fab:"",dark:"",color:"primary"},on:{click:function(t){return e.$vuetify.goTo("#aboutMe",{duration:500,easing:"easeInOutCubic"})}}},[t(b["a"],{attrs:{dark:""}},[e._v(" mdi-arrow-up-thick ")])],1)},x=[],C={name:"ScrollToTop"},y=C,j=(a("667d"),Object(m["a"])(y,h,x,!1,null,"09f37161",null)),w=j.exports,O=a("553a"),T=function(){var e=this,t=e._self._c;return t(O["a"],{staticClass:"container mx-auto d-flex justify-center text-h6 ma-2"},[t("div",[e._v(" @"+e._s(e.date)+" "+e._s(e.copyright)+" — Développé par "),t("strong",[e._v(e._s(e.author))])])])},A=[],M={name:"Thefooter",data:()=>({copyright:"Tous droits réservés",date:(new Date).getFullYear(),author:"Fanny Jobert"})},S=M,k=(a("00b7"),Object(m["a"])(S,T,A,!1,null,"688b6510",null)),P=k.exports,E={components:{TheNavbar:_,ScrollToTop:w,Thefooter:P}},q=E,N=(a("64f3"),Object(m["a"])(q,o,r,!1,null,null,null)),I=N.exports,F=a("8c4f"),G=a("a523"),L=function(){var e=this,t=e._self._c;return t("div",[t(G["a"],{staticClass:"text-center mx-auto"},[t("AboutMe",{staticClass:"mb-5"}),t("Portfolio"),t("Background"),t("Contact")],1)],1)},R=[],B=function(){var e=this,t=e._self._c;return t("section",{staticClass:"d-flex flex-row justify-space-between",attrs:{id:"aboutMe"}},[t("div",{staticClass:"d-flex flex-column justify-center text-left col-4"},[e._m(0),t(l["a"],{staticClass:"pX-4 mX-5 my-5 white--text",attrs:{elevation:"3",color:"primary1",large:"",target:"_blank",href:"/public/CV.pdf",download:""}},[e._v(" Télécharger mon CV ")])],1),e._m(1)])},J=[function(){var e=this,t=e._self._c;return t("div",[t("h2",{staticClass:"text-h5 font-weight-medium mb-2 text-uppercase"},[e._v(" Bonjour,"),t("br"),e._v(" Je m'appelle Fanny JOBERT")]),t("p",{staticClass:"text-p my-5"},[e._v("Je suis developpeuse Fullstack Javascript")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-flex text-right col-7"},[t("img",{staticClass:"img",attrs:{src:a("9739"),alt:"image developpeur"}})])}],$={name:"AboutMe"},D=$,H=(a("a401"),Object(m["a"])(D,B,J,!1,null,"455f6fdd",null)),V=H.exports,z=a("b0af"),X=a("99d9"),U=a("62ad"),Y=a("adda"),K=a("0fd9"),Q=function(){var e=this,t=e._self._c;return t("div",{staticClass:"py-2 mb-12"},[t("h3",{staticClass:"text-h3 font-weight-medium my-5"},[e._v("Mon portfolio")]),t("p",[e._v("Voici les projets réalisés durant ma formation ainsi que mes projets personnels")]),t("div",[t(G["a"],[t(K["a"],e._l(4,(function(a){return t(U["a"],{key:a,attrs:{cols:"6",md:"4"}},[t(z["a"],[t(Y["a"],{attrs:{src:"https://picsum.photos/500/300?image="+(a*e.n*5+10),"lazy-src":"https://picsum.photos/10/6?image="+(a*e.n*5+10),"aspect-ratio":"1"}}),t(X["c"],[e._v(" test ")]),t(X["a"],[e._v(" sous titre ")])],1)],1)})),1)],1)],1),t(l["a"],{attrs:{color:"success"}},[e._v("voir plus")])],1)},W=[],Z={name:"Portfolio"},ee=Z,te=Object(m["a"])(ee,Q,W,!1,null,null,null),ae=te.exports,se=function(){var e=this,t=e._self._c;return t("div",{staticClass:"box"},[t("div",{staticClass:"contact-info"},[t("div",{staticClass:"container"},[t(K["a"],{staticClass:"d-flex justify-center"},[t(z["a"],[t(X["c"],{staticClass:"mt-8 mb-4"},[e._v(" Contactez moi ")]),t(X["b"],[t("p",[t("strong",[e._v(" Adresse:")]),e._v(" "),t("br"),e._v(" 90 Route du grand pré "),t("br"),e._v(" 38580 Le haut breda ")]),t("p",[t("strong",[e._v(" Email:")]),e._v(" "),t("br"),t("a",{attrs:{href:"mailto:fanny.jbt38@gmail.com"}},[e._v("fanny.jbt38@gmail.com")])])])],1)],1)],1)])])},ne=[],ie={name:"Contact"},oe=ie,re=(a("f063"),Object(m["a"])(oe,se,ne,!1,null,null,null)),le=re.exports,ce=a("71a3"),ue=a("c671"),de=a("fe57"),pe=function(){var e=this,t=e._self._c;return t("div",{staticClass:"background py-2 mb-12"},[t("div",{staticClass:"container"},[t("h3",{staticClass:"text-h3 font-weight-medium my-5"},[e._v("Mon parcours")]),t("div",{staticClass:"gird"},[t(de["a"],{attrs:{color:"cyan darken-1",grow:""}},[t(ce["a"],[e._v("FORMATION")]),t(ce["a"],[e._v("EXPERIENCES PROFESSIONNELLLES")]),t(ce["a"],[e._v("COMPETENCES")]),t(ue["a"],{staticClass:"ma-2"},[t("exp")],1),t(ue["a"],{staticClass:"ma-2"},[t("formation")],1),t(ue["a"],{staticClass:"ma-2"},[t("competences")],1)],1)],1)])])},ve=[],fe=function(){var e=this,t=e._self._c;return t(K["a"],{staticClass:"d-flex"},e._l(e.logos,(function(e){return t(U["a"],{key:e.src,staticClass:"img-logo",attrs:{"aspect-ratio":"1",cols:"2"}},[t("img",{attrs:{src:e.src,alt:e.alt}})])})),1)},me=[],ge={name:"competences",data(){return{logos:[{src:"require(`//public/images/logos/vuetify.svg`)",alt:"vuetify",class:"img-logo",col:"2"},{src:"../../public/images/logos/wordpress-blue.svg",alt:"wordpress",class:"img-logo",col:"2"},{src:"../../public/images/logos/vue-js-1.svg",alt:"vue-js",class:"img-logo",col:"2"},{src:"../../public/images/logos/nodejs-2.svg",alt:"node-js",class:"img-logo",col:"2"},{src:"../../public/images/logos/logo-javascript.svg",alt:"javascript",class:"img-logo",col:"2"},{src:"../../public/images/logos/git.svg",alt:"git",class:"img-logo",col:"2"}]}}},_e=ge,be=Object(m["a"])(_e,fe,me,!1,null,null,null),he=be.exports,xe=a("cd55"),Ce=a("49e2"),ye=a("c865"),je=a("0393"),we=function(){var e=this,t=e._self._c;return t("div",[t(je["a"],[t(xe["a"],[t(ye["a"],[t("h3",[e._v("OppenClassrooms")]),t("p",[e._v("2022")])]),t(Ce["a"],[t("h3",[e._v("Certification développeur web ")]),t("ul",[t("li",[e._v("Découper, assembler et intégrer tous les éléments d’une maquette graphique en HTML5 et CSS. ")]),t("li",[e._v("Ajouter du contenu audio et vidéo en HTML5,animer les pages web avec CSS3 . ")]),t("li",[e._v("Appliquer les standards du web et les normes en vigueur.")]),t("li",[e._v("Construire un site web fluide et responsive.")]),t("li",[e._v("Améliorer le référencement naturel. ")]),t("li",[e._v("Faire réagir la page web en fonction des actions de l’utilisateur en JavaScript. ")]),t("li",[e._v("Se connecter à un service web pour exploiter des données tierces (API). ")]),t("li",[e._v("Créer, gérer et afficher le contenu d’une base de données. ")])])])],1)],1),t(je["a"],[t(xe["a"],[t(ye["a"],[t("h3",[e._v("IUT Valence")]),t("p",[e._v("2009")])]),t(Ce["a"],[t("h3",[e._v("Licence pro management des approvisionnements et de la chaîne logistique en alternance")]),t("ul",[t("li",[e._v("Maîtriser les concepts, outils et méthodes relatifs à la gestion de la chaîne logistique. ")]),t("li",[e._v("Maîtriser les problématiques liées à l’environnement de la logistique (aspects juridiques, écologiques,commerciaux et qualité). ")]),t("li",[e._v("Comprendre les défis actuels et futurs du pilotage des flux internationaux. ")]),t("li",[e._v("Conduite de projet concernant le pilotage des flux.")])])])],1)],1),t(je["a"],[t(xe["a"],[t(ye["a"],[t("h3",[e._v("CFA Valence")]),t("p",[e._v("2008")])]),t(Ce["a"],[t("h3",[e._v("BTS Assitante de gestion PMI PME en alternance")]),t("ul",[t("li",[e._v("Gérer les relations clients et fournisseurs de la PME.")]),t("li",[e._v("Maitrise des outils et methodologie liés à gestion administrative , commerciale et comptable de la PME. ")]),t("li",[e._v("Comprendre les défis actuels et futurs du pilotage des flux internationaux. ")]),t("li",[e._v("Participation a la gestion RH de la PME")])])])],1)],1)],1)},Oe=[],Te={name:"formation"},Ae=Te,Me=Object(m["a"])(Ae,we,Oe,!1,null,null,null),Se=Me.exports,ke=function(){var e=this,t=e._self._c;return t("div",[t(je["a"],[t(xe["a"],[t(ye["a"],[t("h3",[e._v("Developpeur web ")]),t("p")]),t(Ce["a"],[t("li",[e._v("Projets d'études dans le cadre de la formation developpeur web ")]),t("li",[e._v("Side project pour consolider et élargir ma stack technique")])])],1)],1),t(je["a"],[t(xe["a"],[t(ye["a"],[t("h3",[e._v("Gestionnaire Logistique")]),t("p",[e._v("Banque populaire AURA")])]),t(Ce["a"],[t("ul",[t("li",[e._v("Facility management : gestion des prestataires de services (ménages, entretiens des bâtiments,travaux) ")]),t("li",[e._v("Gestion du logiciel de suivi des demandes d'intervention (évolution, paramétrage, section des utilisateurs) ")]),t("li",[e._v("Gestion des sinistres du parc immobilier (dégâts des eaux, événements climatiques, mise au normes, panne et remplacement de matériels) ")]),t("li",[e._v("Gestion du bilan carbon du service : création Base de Données ")]),t("li",[e._v("Acces pour le suivi des consommations d'énergie et élaboration du tableau de bord. ")])])])],1)],1),t(je["a"],[t(xe["a"],[t(ye["a"],[t("h3",[e._v("Approvisionneur gestionnaire de production et ordonnancement")]),t("p",[e._v("Crouzet Automatismes")])]),t(Ce["a"],[t("ul",[t("li",[e._v("Approvisionneur en composant pour la ligne de production de micro-commutateurs standard ou personnalisés, Sub-subminiature , Subminiature , Miniature et Special. ")]),t("li",[e._v("Gestionnaire de production et ordonnancement : mise à disposition des composants et ordonnancement des ordres de fabrication ppour la ligne de production")])])])],1)],1),t(je["a"],[t(xe["a"],[t(ye["a"],[t("h3",[e._v("Assistant service logistique EN ALTERNANCE")]),t("p",[e._v("Thales avionics")])]),t(Ce["a"],[t("ul",[t("li",[e._v("Gestion de projet : procédure de suivi et de fiabilisation des prévisions de commandes")]),t("li",[e._v("Automatisation d'un outil de suivi des retards de livraison des fournisseurs")]),t("li",[e._v("Approvisionnement et gestion de produits ")]),t("li",[e._v("Gestion des stocks ")]),t("li",[e._v("Suivi et analyse d'activité ")])])])],1)],1),t(je["a"],[t(xe["a"],[t(ye["a"],[t("h3",[e._v("Assistant service formation EN ALTERNANCE")]),t("p",[e._v("Spit Paslode")])]),t(Ce["a"],[t("ul",[t("li",[e._v("Gestion administrative, commerciale et comptable des formations ")]),t("li",[e._v("Gestion des stocks d'équipements de sécurité ")])])])],1)],1)],1)},Pe=[],Ee={name:"exp"},qe=Ee,Ne=Object(m["a"])(qe,ke,Pe,!1,null,null,null),Ie=Ne.exports,Fe={name:"Background",components:{competences:he,formation:Se,exp:Ie}},Ge=Fe,Le=(a("1dca"),Object(m["a"])(Ge,pe,ve,!1,null,null,null)),Re=Le.exports,Be={name:"Home",components:{AboutMe:V,Portfolio:ae,Contact:le,Background:Re}},Je=Be,$e=(a("ecc5"),Object(m["a"])(Je,L,R,!1,null,"2034e908",null)),De=$e.exports;s["a"].use(F["a"]);const He=[{path:"/",name:"Home",component:De}],Ve=new F["a"]({mode:"history",base:"/",routes:He});var ze=Ve,Xe=a("f309"),Ue=a("fcf4");s["a"].use(Xe["a"]);var Ye=new Xe["a"]({theme:{themes:{light:{primary:Ue["a"].red.darken1,secondary:Ue["a"].red.lighten4,accent:Ue["a"].indigo.base,primary1:Ue["a"].celadon.dye}}}});s["a"].config.productionTip=!1,new s["a"]({router:ze,vuetify:Ye,render:e=>e(I)}).$mount("#app")},"64f3":function(e,t,a){"use strict";a("84e6")},"667d":function(e,t,a){"use strict";a("fa37")},"84e6":function(e,t,a){},"8ad1":function(e,t,a){},"95ad":function(e,t,a){"use strict";a("8ad1")},9739:function(e,t,a){e.exports=a.p+"img/dev.0285a26f.svg"},a401:function(e,t,a){"use strict";a("c0ea")},c0ea:function(e,t,a){},cb33:function(e,t,a){},dce6:function(e,t,a){},ecc5:function(e,t,a){"use strict";a("2eab")},f063:function(e,t,a){"use strict";a("2b0f")},fa37:function(e,t,a){}});
//# sourceMappingURL=app.48f23eeb.js.map