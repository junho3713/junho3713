$(function () {
    var tab_Btn = $(".tab_btn > ul > li");
    var tab_Cont = $(".tab_cont > ul");
    var tab_ContDiv = $(".tab_cont > .tab_div");
    

    // 초기 설정: 첫 번째 탭과 첫 번째 페이지를 보여줌
    tab_Cont.hide().eq(0).show(); // 첫 번째 탭 콘텐츠 보이기
    tab_Cont.eq(0).find('.page_content').hide().eq(0).show(); // 첫 번째 페이지 보이기
    // 초기 설정: 첫 번째 탭과 첫 번째 페이지를 보여줌
    tab_ContDiv.hide().eq(0).show(); // 첫 번째 탭 콘텐츠 보이기
    tab_ContDiv.eq(0).find('.page_content').hide().eq(0).show(); // 첫 번째 페이지 보이기

    
    // 탭 버튼 클릭 시
    tab_Btn.click(function (e) {
        e.preventDefault();
        var target = $(this);
        var index = target.index();

        // 탭 전환 처리
        tab_Btn.removeClass("active"); // 모든 탭의 active 제거
        target.addClass("active"); // 클릭한 탭에 active 추가
        tab_Cont.hide(); // 모든 탭 콘텐츠 숨기기
        tab_Cont.eq(index).show(); // 해당하는 탭 콘텐츠 보이기
        tab_ContDiv.hide(); // 모든 탭 콘텐츠 숨기기
        tab_ContDiv.eq(index).show(); // 해당하는 탭 콘텐츠 
        // 탭에 맞는 제목 설정
        tab_Title.text(tabTitles[index]);
        tab_Title2.text(tabTitles2[index]);

        // 해당 탭의 첫 번째 페이지를 기본으로 보여줌
        tab_Cont.eq(index).find('.page_content').hide().eq(0).show();
        tab_ContDiv.eq(index).find('.page_content').hide().eq(0).show();

        // 해당 탭의 페이지 버튼 초기화
        updatePageButtons(1); // 1번 페이지 버튼 활성화

    });


    // 현재 페이지에 맞는 버튼에 .active 클래스 붙이기
    function updatePageButtons(pageIndex) {
        $(".page_btn").removeClass("active"); // 모든 버튼에서 active 클래스 제거
        $(".page_btn[data-page='" + pageIndex + "']").addClass("active"); // 해당 페이지 버튼에 active 클래스 추가
    }
});

// 스와이퍼
$(document).ready(function() {
    var mySwiper3 = new Swiper('.mySwiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar', // 스크롤바 엘리먼트
            draggable: true,
            hide: false, // 스크롤바 숨김 여부
        },
        loop: true, // 무한 루프 설정
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0,
        
        breakpoints: {
            1200: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1.1,
            },
            0: { 
                slidesPerView: 1.1
            },
        },
    });

    // 화면 크기 체크 및 스크롤바 표시 설정
    function checkScreenSize() {
        if ($(window).width() <= 1200) {
            mySwiper3.scrollbar.el.style.display = 'block'; // 스크롤바 보이기
            mySwiper3.scrollbar.el.style.visibility = 'visible'; // 스크롤바 보이도록 설정
            $("img[src='./assets/img/paper-wrap.png']").attr("src", "./assets/img/paper-wrap_mo.jpg");
        } else {
            mySwiper3.scrollbar.el.style.display = 'none'; // 스크롤바 숨기기
            mySwiper3.scrollbar.el.style.visibility = 'hidden'; // 스크롤바를 보이지 않도록 설정
            $("img[src='./assets/img/paper-wrap_mo.jpg']").attr("src", "./assets/img/paper-wrap.png");
        }
    }

    // 초기 화면 크기 체크
    checkScreenSize();

    // 창 크기 변경 시 체크
    $(window).resize(function() {
        checkScreenSize();
    });

    // 다음 슬라이드로 이동 버튼
    $('.swiper-button-next').on('click', function() {
        mySwiper.slideNext(); // 다음 슬라이드로 이동
    });

    // 이전 슬라이드로 이동 버튼
    $('.swiper-button-prev').on('click', function() {
        mySwiper.slidePrev(); // 이전 슬라이드로 이동
    });
});