"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

$(document).ready(function () {
  // Dynamic Adapt v.1
  // HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
  // e.x. data-da=".item,992,2"
  // Andrikanych Yevhen 2020
  // https://www.youtube.com/c/freelancerlifestyle
  "use strict";

  var _$$slick;

  function DynamicAdapt(type) {
    this.type = type;
  }

  DynamicAdapt.prototype.init = function () {
    var _this2 = this;

    var _this = this; // массив объектов


    this.оbjects = [];
    this.daClassname = "_dynamic_adapt_"; // массив DOM-элементов

    this.nodes = document.querySelectorAll("[data-da]"); // наполнение оbjects объктами

    for (var i = 0; i < this.nodes.length; i++) {
      var node = this.nodes[i];
      var data = node.dataset.da.trim();
      var dataArray = data.split(",");
      var оbject = {};
      оbject.element = node;
      оbject.parent = node.parentNode;
      оbject.destination = document.querySelector(dataArray[0].trim());
      оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
      оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.оbjects.push(оbject);
    }

    this.arraySort(this.оbjects); // массив уникальных медиа-запросов

    this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
      return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
    }, this);
    this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
      return Array.prototype.indexOf.call(self, item) === index;
    }); // навешивание слушателя на медиа-запрос
    // и вызов обработчика при первом запуске

    var _loop = function _loop(_i) {
      var media = _this2.mediaQueries[_i];
      var mediaSplit = String.prototype.split.call(media, ',');
      var matchMedia = window.matchMedia(mediaSplit[0]);
      var mediaBreakpoint = mediaSplit[1]; // массив объектов с подходящим брейкпоинтом

      var оbjectsFilter = Array.prototype.filter.call(_this2.оbjects, function (item) {
        return item.breakpoint === mediaBreakpoint;
      });
      matchMedia.addListener(function () {
        _this.mediaHandler(matchMedia, оbjectsFilter);
      });

      _this2.mediaHandler(matchMedia, оbjectsFilter);
    };

    for (var _i = 0; _i < this.mediaQueries.length; _i++) {
      _loop(_i);
    }
  };

  DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
    if (matchMedia.matches) {
      for (var i = 0; i < оbjects.length; i++) {
        var оbject = оbjects[i];
        оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.moveTo(оbject.place, оbject.element, оbject.destination);
      }
    } else {
      for (var _i2 = 0; _i2 < оbjects.length; _i2++) {
        var _bject = оbjects[_i2];

        if (_bject.element.classList.contains(this.daClassname)) {
          this.moveBack(_bject.parent, _bject.element, _bject.index);
        }
      }
    }
  }; // Функция перемещения


  DynamicAdapt.prototype.moveTo = function (place, element, destination) {
    element.classList.add(this.daClassname);

    if (place === 'last' || place >= destination.children.length) {
      destination.insertAdjacentElement('beforeend', element);
      return;
    }

    if (place === 'first') {
      destination.insertAdjacentElement('afterbegin', element);
      return;
    }

    destination.children[place].insertAdjacentElement('beforebegin', element);
  }; // Функция возврата


  DynamicAdapt.prototype.moveBack = function (parent, element, index) {
    element.classList.remove(this.daClassname);

    if (parent.children[index] !== undefined) {
      parent.children[index].insertAdjacentElement('beforebegin', element);
    } else {
      parent.insertAdjacentElement('beforeend', element);
    }
  }; // Функция получения индекса внутри родителя


  DynamicAdapt.prototype.indexInParent = function (parent, element) {
    var array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
  }; // Функция сортировки массива по breakpoint и place 
  // по возрастанию для this.type = min
  // по убыванию для this.type = max


  DynamicAdapt.prototype.arraySort = function (arr) {
    if (this.type === "min") {
      Array.prototype.sort.call(arr, function (a, b) {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }

          if (a.place === "first" || b.place === "last") {
            return -1;
          }

          if (a.place === "last" || b.place === "first") {
            return 1;
          }

          return a.place - b.place;
        }

        return a.breakpoint - b.breakpoint;
      });
    } else {
      Array.prototype.sort.call(arr, function (a, b) {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }

          if (a.place === "first" || b.place === "last") {
            return 1;
          }

          if (a.place === "last" || b.place === "first") {
            return -1;
          }

          return b.place - a.place;
        }

        return b.breakpoint - a.breakpoint;
      });
      return;
    }
  };

  var da = new DynamicAdapt("min");
  da.init();
  /*
      jQuery Masked Input Plugin
      Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
      Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
      Version: 1.4.1
  */

  !function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? require("jquery") : jQuery);
  }(function (a) {
    var b,
        c = navigator.userAgent,
        d = /iphone/i.test(c),
        e = /chrome/i.test(c),
        f = /android/i.test(c);
    a.mask = {
      definitions: {
        9: "[0-9]",
        a: "[A-Za-z]",
        "*": "[A-Za-z0-9]"
      },
      autoclear: !0,
      dataName: "rawMaskFn",
      placeholder: "-"
    }, a.fn.extend({
      caret: function caret(a, b) {
        var c;
        if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function () {
          this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select());
        })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), {
          begin: a,
          end: b
        });
      },
      unmask: function unmask() {
        return this.trigger("unmask");
      },
      mask: function mask(c, g) {
        var h, i, j, k, l, m, n, o;

        if (!c && this.length > 0) {
          h = a(this[0]);
          var p = h.data(a.mask.dataName);
          return p ? p() : void 0;
        }

        return g = a.extend({
          autoclear: a.mask.autoclear,
          placeholder: a.mask.placeholder,
          completed: null
        }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function (a, b) {
          "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null);
        }), this.trigger("unmask").each(function () {
          function h() {
            if (g.completed) {
              for (var a = l; m >= a; a++) {
                if (j[a] && C[a] === p(a)) return;
              }

              g.completed.call(B);
            }
          }

          function p(a) {
            return g.placeholder.charAt(a < g.placeholder.length ? a : 0);
          }

          function q(a) {
            for (; ++a < n && !j[a];) {
              ;
            }

            return a;
          }

          function r(a) {
            for (; --a >= 0 && !j[a];) {
              ;
            }

            return a;
          }

          function s(a, b) {
            var c, d;

            if (!(0 > a)) {
              for (c = a, d = q(b); n > c; c++) {
                if (j[c]) {
                  if (!(n > d && j[c].test(C[d]))) break;
                  C[c] = C[d], C[d] = p(d), d = q(d);
                }
              }

              z(), B.caret(Math.max(l, a));
            }
          }

          function t(a) {
            var b, c, d, e;

            for (b = a, c = p(a); n > b; b++) {
              if (j[b]) {
                if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e))) break;
                c = e;
              }
            }
          }

          function u() {
            var a = B.val(),
                b = B.caret();

            if (o && o.length && o.length > a.length) {
              for (A(!0); b.begin > 0 && !j[b.begin - 1];) {
                b.begin--;
              }

              if (0 === b.begin) for (; b.begin < l && !j[b.begin];) {
                b.begin++;
              }
              B.caret(b.begin, b.begin);
            } else {
              for (A(!0); b.begin < n && !j[b.begin];) {
                b.begin++;
              }

              B.caret(b.begin, b.begin);
            }

            h();
          }

          function v() {
            A(), B.val() != E && B.change();
          }

          function w(a) {
            if (!B.prop("readonly")) {
              var b,
                  c,
                  e,
                  f = a.which || a.keyCode;
              o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault());
            }
          }

          function x(b) {
            if (!B.prop("readonly")) {
              var c,
                  d,
                  e,
                  g = b.which || b.keyCode,
                  i = B.caret();

              if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
                if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) {
                  if (t(c), C[c] = d, z(), e = q(c), f) {
                    var k = function k() {
                      a.proxy(a.fn.caret, B, e)();
                    };

                    setTimeout(k, 0);
                  } else B.caret(e);

                  i.begin <= m && h();
                }

                b.preventDefault();
              }
            }
          }

          function y(a, b) {
            var c;

            for (c = a; b > c && n > c; c++) {
              j[c] && (C[c] = p(c));
            }
          }

          function z() {
            B.val(C.join(""));
          }

          function A(a) {
            var b,
                c,
                d,
                e = B.val(),
                f = -1;

            for (b = 0, d = 0; n > b; b++) {
              if (j[b]) {
                for (C[b] = p(b); d++ < e.length;) {
                  if (c = e.charAt(d - 1), j[b].test(c)) {
                    C[b] = c, f = b;
                    break;
                  }
                }

                if (d > e.length) {
                  y(b + 1, n);
                  break;
                }
              } else C[b] === e.charAt(d) && d++, k > b && (f = b);
            }

            return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l;
          }

          var B = a(this),
              C = a.map(c.split(""), function (a, b) {
            return "?" != a ? i[a] ? p(b) : a : void 0;
          }),
              D = C.join(""),
              E = B.val();
          B.data(a.mask.dataName, function () {
            return a.map(C, function (a, b) {
              return j[b] && a != p(b) ? a : null;
            }).join("");
          }), B.one("unmask", function () {
            B.off(".mask").removeData(a.mask.dataName);
          }).on("focus.mask", function () {
            if (!B.prop("readonly")) {
              clearTimeout(b);
              var a;
              E = B.val(), a = A(), b = setTimeout(function () {
                B.get(0) === document.activeElement && (z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a));
              }, 10);
            }
          }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function () {
            B.prop("readonly") || setTimeout(function () {
              var a = A(!0);
              B.caret(a), h();
            }, 0);
          }), e && f && B.off("input.mask").on("input.mask", u), A();
        });
      }
    });
  });

  function testWebP(callback) {
    var webP = new Image();

    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };

    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  });
  var iconMenu = document.querySelector('.header__burger');
  var menuBody = document.querySelector('.header__menu');

  if (iconMenu) {
    iconMenu.addEventListener('click', function () {
      document.body.classList.toggle('lock');
      iconMenu.classList.toggle('active');
      menuBody.classList.toggle('active');
    });
  }

  var scroll = $(window).scrollTop();

  if (scroll > 0) {
    $('.header').addClass('bg');
  }

  $(window).on('scroll', function () {
    scroll = $(window).scrollTop();

    if (scroll > 0) {
      $('.header').addClass('bg');
    } else {
      $('.header').removeClass('bg');
    }
  }); // Прокрутка при клике

  var menuLinks = document.querySelectorAll('.menu__link[data-goto]');

  if (menuLinks.length > 0) {
    var onMenuLinkClick = function onMenuLinkClick(e) {
      var menuLink = e.target;

      if (menuLink.dataset["goto"] && document.querySelector(menuLink.dataset["goto"])) {
        var gotoBlock = document.querySelector(menuLink.dataset["goto"]);
        var gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

        if (iconMenu.classList.contains('active')) {
          removeActive();
        }

        $('body,html').animate({
          scrollTop: gotoBlockValue
        }, 1000);
        e.preventDefault();
      }
    };

    var removeActive = function removeActive() {
      document.body.classList.remove('lock');
      iconMenu.classList.remove('active');
      menuBody.classList.remove('active');
    };

    menuLinks.forEach(function (menuLink) {
      menuLink.addEventListener('click', onMenuLinkClick);
    });
  } // === FORM INPUT FOCUS CONDITION ===


  $('.form__input').focus(function () {
    $(this).closest('.form__item-wrapper').addClass('focus');
  });
  $('.form__input').focusout(function () {
    $(this).closest('.form__item-wrapper').removeClass('focus');
  }); // === FORM INPUT FOCUS CONDITION END ===
  // === PHONE INPUT MASK START ===

  $('.form__input--phone').mask("+7 (999) 999-99-99"); // === PHONE INPUT MASK END ===
  // $('.gallery__main').slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: false,
  //     fade: true,
  //     asNavFor: '.gallery__thumbnails',
  // });

  $('.statistics__cards').slick({
    dots: true,
    slidesToShow: 1,
    arrows: false,
    mobileFirst: true,
    responsive: [{
      breakpoint: 992,
      settings: "unslick"
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true
      }
    }]
  });
  $('.cases__items').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="icon-arrow-right"></i></button>',
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrows: false
      }
    }]
  });
  $('.clients__list').slick((_$$slick = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false
  }, _defineProperty(_$$slick, "dots", false), _defineProperty(_$$slick, "responsive", [{
    breakpoint: 767,
    settings: {
      slidesToShow: 4
    }
  }, {
    breakpoint: 575,
    settings: {
      slidesToShow: 3
    }
  }]), _$$slick)); // $('#productGallery .tabs-triggers__item').click(function() {
  //     $('.gallery__main').slick('refresh');
  //     $('.gallery__thumbnails').slick('refresh');
  // })

  $('.accordion__title').click(function (event) {
    var accordionid = $(this).closest('.accordion').attr("id");

    if ($('#' + accordionid).hasClass('accordion-one')) {
      $('#' + accordionid + ' ' + '.accordion__title').not($(this)).removeClass('active');
      $('#' + accordionid + ' ' + '.accordion__text').not($(this).next()).slideUp(300);
    }

    $(this).toggleClass('active').next().slideToggle(300);
  });
  ;
  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene);
});