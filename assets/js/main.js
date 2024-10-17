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