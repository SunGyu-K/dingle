//main.js
//메인배너
const mainSwiper = new Swiper('.main_b', {
    //기본 옵션
    loop: true, // 무한 루프
    autoplay: {
    delay: 5000, // 5초 시간조정
    disableOnInteraction: false,
    },
    //전환효과설정
    effect: 'fade', 
    fadeEffect: {
    crossFade: true
    }
});

//초이스목록
document.addEventListener('DOMContentLoaded', function() {
    const choiceSwiper = new Swiper('.c_list', {
        slidesPerView: 3,
        spaceBetween: 16,
        slidesPerGroup: 1,
        loop:true,
        navigation: {
            nextEl: '.c_swiper_area .btn-next',
            prevEl: '.c_swiper_area .btn-prev',
        },
        // 모바일 및 반응형 대응 (필요 시 조정)
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 12
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 16
            }
        }
    });
});

//신상품목록
document.addEventListener('DOMContentLoaded', function() {
    const choiceSwiper = new Swiper('.n_list', {
        slidesPerView: 5,
        spaceBetween: 16,
        slidesPerGroup: 1,
        loop:true,
        navigation: {
            nextEl: '.n_swiper_area .btn-next',
            prevEl: '.n_swiper_area .btn-prev',
        },
        // 모바일 및 반응형 대응 (필요 시 조정)
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 12
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 16
            }
        }
    });
});
//콜라보상품
document.addEventListener('DOMContentLoaded', function() {
    const choiceSwiper = new Swiper('.coll_list', {
        slidesPerView: 3,
        spaceBetween: 16,
        slidesPerGroup: 1,
        loop:true,
        navigation: {
            nextEl: '.coll_swiper_area .btn-next',
            prevEl: '.coll_swiper_area .btn-prev',
        },
        // 모바일 및 반응형 대응 (필요 시 조정)
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 12
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 16
            }
        }
    });
});
//베스트상품
document.addEventListener('DOMContentLoaded', function() {
    const choiceSwiper = new Swiper('.best_list', {
        slidesPerView: 3,
        spaceBetween: 16,
        slidesPerGroup: 1,
        loop: true,
        navigation: {
            nextEl: '.best_swiper_area .btn-next',
            prevEl: '.best_swiper_area .btn-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 12
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 16
            }
        }
    });
});
//세일상품목록
document.addEventListener('DOMContentLoaded', function() {
    const choiceSwiper = new Swiper('.sale_list', {
        slidesPerView: 5,
        spaceBetween: 16,
        slidesPerGroup: 1,
        loop:true,
        navigation: {
            nextEl: '.sale_swiper_area .btn-next',
            prevEl: '.sale_swiper_area .btn-prev',
        },
        // 모바일 및 반응형 대응 (필요 시 조정)
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 12
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 16
            }
        }
    });
});
// 룩북목록

document.addEventListener('DOMContentLoaded', function() {
    const choiceSwiper = new Swiper('.look_list', {
        slidesPerView: 5,
        spaceBetween: 16,
        slidesPerGroup: 1,
        loop:true,
        navigation: {
            nextEl: '.look_swiper_area .btn-next',
            prevEl: '.look_swiper_area .btn-prev',
        },
        // 모바일 및 반응형 대응 (필요 시 조정)
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 12
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 16
            }
        }
    });
});