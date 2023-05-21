fetch('./assets/data/ranking.json')
.then((response) => response.json())
.then((json) => {
    ranking = json.ageGenderRanking

    var sort01 = ranking.filter(function (parm) {return parm.cate == "10대여자" });
    var sort02 = ranking.filter(function (parm) {return parm.cate == "10대남자" });
    var sort03 = ranking.filter(function (parm) {return parm.cate == "20대여자" });
    var sort04 = ranking.filter(function (parm) {return parm.cate == "20대남자" });
    var sort05 = ranking.filter(function (parm) {return parm.cate == "30대여자" });
    var sort06 = ranking.filter(function (parm) {return parm.cate == "30대남자" });

    sort01Html ='';
    sort01.forEach(el => {
        sort01Html += 
        `<li class="rank-item">
        <a href="">
        <img src="${el.img}" alt="">
            <div class="rank-num"><em>${el.rank}</em></div>
            <div class="rank-info">
            <strong class="title">${el.title}</strong>
            <span class="writer">${el.writer}</span></div>
        </a>
    </li>`
    });
    $('#tab1 .agegender').html(sort01Html);


    sort02Html ='';
    sort02.forEach(el => {
        sort02Html += 
        `<li class="rank-item">
        <a href="">
        <img src="${el.img}" alt="">
            <div class="rank-num"><em>${el.rank}</em></div>
            <div class="rank-info">
            <strong class="title">${el.title}</strong>
            <span class="writer">${el.writer}</span></div>
        </a>
    </li>`});
    $('#tab2 .agegender').html(sort02Html);


    sort03Html ='';
    sort03.forEach(el => {
        sort03Html += 
        `<li class="rank-item">
        <a href="">
        <img src="${el.img}" alt="">
            <div class="rank-num"><em>${el.rank}</em></div>
            <div class="rank-info">
            <strong class="title">${el.title}</strong>
            <span class="writer">${el.writer}</span></div>
        </a>
    </li>`
    });
    $('#tab3 .agegender').html(sort03Html);

    sort04Html ='';
    sort04.forEach(el => {
        sort04Html += 
        `<li class="rank-item">
        <a href="">
        <img src="${el.img}" alt="">
            <div class="rank-num"><em>${el.rank}</em></div>
            <div class="rank-info">
            <strong class="title">${el.title}</strong>
            <span class="writer">${el.writer}</span></div>
        </a>
    </li>`
    });
    $('#tab4 .agegender').html(sort04Html);


    sort05Html ='';
    sort05.forEach(el => {
        sort05Html += 
        `<li class="rank-item">
        <a href="">
        <img src="${el.img}" alt="">
            <div class="rank-num"><em>${el.rank}</em></div>
            <div class="rank-info">
            <strong class="title">${el.title}</strong>
            <span class="writer">${el.writer}</span></div>
        </a>
    </li>`
    });
    $('#tab5 .agegender').html(sort05Html);


    sort06Html ='';
    sort06.forEach(el => {
        sort06Html += 
        `<li class="rank-item">
        <a href="">
        <img src="${el.img}" alt="">
            <div class="rank-num"><em>${el.rank}</em></div>
            <div class="rank-info">
            <strong class="title">${el.title}</strong>
            <span class="writer">${el.writer}</span></div>
        </a>
    </li>`
    });
    $('#tab6 .agegender').html(sort06Html);

    finishItem = json.finishItem //items가 묶인 배열이기 때문에
    html = '';
    finishItem.forEach(el => {
        html += `<li class="order-item">
        <a href=""><img src="${el.img}" alt="">
            <div class="info-area">
                <strong class="title">${el.title}</strong>
                <p class="writer">${el.writer}</p>
                <span class="like">${el.like}</span>
            </div>
        </a>
    </li>`
    });

    $('.order-list.finish').html(html);


    recentFinish = json.recentFinish
    html='';
    recentFinish.forEach(el=>{
        html += `  <li class="swiper-slide intro-item">
        <a href="">
        <div class="img-box"><img src="${el.img}" alt=""></div>
        <div class="info-area">
            <strong class="title">${el.title}</strong>
            <span class="writer">${el.writer}</span>
            <p class="desc">${el.desc}</p>
        </div>
    </a>
</li>`
    });
    $('.intro-list.finish').html(html);
})



