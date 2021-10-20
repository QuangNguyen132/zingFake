
function modalBlock() {
    var modal = document.querySelector('.modal-theme');
    modal.classList.add('open');   
          
}

function closeModal() {   
    var modal = document.querySelector('.modal-theme');
    modal.classList.remove('open');
}

//Handle Events
        const containerHeaderItem = $$('.container_player-header-item');  
        const contentPane = $$('.container_player-slider-content')
        const btnThemeTry = $$('.hover-img-sub-try');    
        const btnThemeApply = $$('.hover-img-sub-apply');       

        var themeArray = [
            {
                name: 'London',
                link_body: "url('../img/theme/London.jpg')",
                text_color: 'white',
                link_foot: 'none',
                backgroundColor_foot: '#061d50',
                footBtncolor: 'rgba(255, 255, 255, 0.2)',
                borderFooterColor: 'rgba(255, 255, 255, 0.1)',
                navColor: 'rgba(0, 0, 0, 0.1)'
            },
            {
                name: 'Zing Music',
                link_body: "url('../img/theme/zma.svg')",
                text_color: 'white',
                link_foot: "url('../img/theme/theme1.png')",
                backgroundColor_foot: 'rgba(0,0,0,0)',
                footBtncolor: 'rgba(255, 255, 255, 0.2)',
                borderFooterColor: 'rgba(255, 255, 255, 0.1)',
                navColor: 'rgba(0, 0, 0, 0.1)'
            },
            {
                name: 'Effeil',
                link_body: "url('../img/theme/eiffel.jpg')",
                text_color: 'white',
                link_foot: 'none',
                backgroundColor_foot: '#282828',
                footBtncolor: 'rgba(255, 255, 255, 0.2)',
                borderFooterColor: 'rgba(255, 255, 255, 0.1)',
                navColor: 'rgba(0, 0, 0, 0.1)'
            },
            {
                name: 'Jack',
                link_body: "url('../img/theme/jack.jpg')",
                text_color: 'white',
                link_foot: 'none',
                backgroundColor_foot: '#767269',
                footBtncolor: 'rgba(255, 255, 255, 0.2)',
                borderFooterColor: 'rgba(255, 255, 255, 0.2)',
                navColor: 'rgba(255, 255, 255, 0.05)'
            },
            {
                name: 'IU',
                link_body: "url('../img/theme/iu.jpg')",
                text_color: 'black',
                link_foot: 'none',
                backgroundColor_foot: '#d0ccc5',
                footBtncolor: 'rgba(0, 0, 0, 0.2)',
                borderFooterColor: 'rgba(0, 0, 0, 0.2)',
                navColor: 'rgba(0, 0, 0, 0.05)'
            },
            {
                name: 'Ji Chang Wook',
                link_body: "url('../img/theme/wook.jpg')",
                text_color: 'black',
                link_foot: 'none',
                backgroundColor_foot: '#b4d0d0',
                footBtncolor: 'rgba(0, 0, 0, 0.2)',
                borderFooterColor: 'rgba(0, 0, 0, 0.2)',
                navColor: 'rgba(255, 255, 255, 0.25)'
            },
            {
                name: 'Jennie Kim',
                link_body: "url('../img/theme/jennie.jpg')",
                text_color: 'black',
                link_foot: 'none',
                backgroundColor_foot: '#c6c4d1',
                footBtncolor: 'rgba(0, 0, 0, 0.2)',
                borderFooterColor: 'rgba(0, 0, 0, 0.2)',
                navColor: 'rgba(0, 0, 0, 0.05)'
            },
            {
                name: 'Lisa',
                link_body: "url('../img/theme/lisa.jpg')",
                text_color: 'black',
                link_foot: 'none',
                backgroundColor_foot: '#f9c6c5',
                footBtncolor: 'rgba(0, 0, 0, 0.2)',
                borderFooterColor: 'rgba(0, 0, 0, 0.2)',
                navColor: 'rgba(255, 255, 255, 0.25)'
            },
            {
                name: 'Jisoo',
                link_body: "url('../img/theme/jisoo.jpg')",
                text_color: 'black',
                link_foot: 'none',
                backgroundColor_foot: '#fff',
                footBtncolor: 'rgba(0, 0, 0, 0.2)',
                borderFooterColor: 'rgba(0, 0, 0, 0.2)',
                navColor: 'rgba(0, 0, 0, 0.05)'
            }
        ];

        Array.from(containerHeaderItem).forEach(function(element, index) {
                var pane = contentPane[index-1];
                element.onclick = function(e) {
                    if(index==0) {
                        $('.active').classList.remove('active');
                        e.target.classList.add('active');
                        Array.from(contentPane).forEach(function(elementCurrent) {
                            elementCurrent.classList.add('content-active');
                        })
                        document.querySelector('.container_profile').classList.remove('none');

                    }
                    else {
                        $('.active').classList.remove('active');
                        e.target.classList.add('active');
                        Array.from(contentPane).forEach(function(elementCurrent) {
                                elementCurrent.classList.remove('content-active');
                            })
                        pane.classList.add('content-active');
                        document.querySelector('.container_profile').classList.add('none');
                    }
                }
            });
        
        //Xử lý sự kiện thử áp dụng theme mới
        Array.from(btnThemeTry).forEach(function(element, index) {
            let root = document.documentElement;
            element.onclick = function() {
                root.style.setProperty('--borderFooterColor', themeArray[index].borderFooterColor);
                root.style.setProperty('--fontBtn', themeArray[index].footBtncolor);
                root.style.setProperty('--footBackground', themeArray[index].link_foot);
                root.style.setProperty('--primary-foot-color', themeArray[index].backgroundColor_foot);
                root.style.setProperty('--text-color', themeArray[index].text_color);
                root.style.setProperty('--backgroundImage', themeArray[index].link_body);
                root.style.setProperty('--primary-nav-color', themeArray[index].navColor);
            }
        });

        //Xử lý sự kiện áp dụng theme mới
        Array.from(btnThemeApply).forEach(function(element, index) {
            let root = document.documentElement;
            element.onclick = function() {
                root.style.setProperty('--borderFooterColor', themeArray[index].borderFooterColor);
                root.style.setProperty('--fontBtn', themeArray[index].footBtncolor);
                root.style.setProperty('--footBackground', themeArray[index].link_foot);
                root.style.setProperty('--primary-foot-color', themeArray[index].backgroundColor_foot);
                root.style.setProperty('--text-color', themeArray[index].text_color);
                root.style.setProperty('--backgroundImage', themeArray[index].link_body);
                root.style.setProperty('--primary-nav-color', themeArray[index].navColor);
                $('.modal-theme').classList.remove('open')
            }
        });