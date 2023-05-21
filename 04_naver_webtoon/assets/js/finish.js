fetch('./assets/data/finish.json')
.then((response) => response.json())
.then((json) => {
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

    $('.order-list').html(html);


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
    $('.intro-list').html(html);
})
