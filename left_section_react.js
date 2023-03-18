const ham_button_before = document.getElementById('ham_icon_before')
const ham_header = document.getElementById('ham_header')
const ham_menu = document.getElementById('ham_menu')
const ham_button_after = document.getElementById('ham_icon_after')
const trans_background = document.querySelector('.black_background')
const left_section = document.querySelector('#left_section_icons_container')
const video_grid = document.querySelector('.videos_container');

function ham_media_query(){
    let query1 = window.matchMedia("(max-width: 1312px)");
    let query2 = window.matchMedia("(max-width:820px)");
    let query3 = window.matchMedia("(max-width:550px)");
    if (query1.matches){
        video_grid.style.marginLeft = '6.2rem';
        video_grid.style.marginRight = '2rem';
        left_section.style.display = 'flex';
        ham_menu.style.transform = 'translateX(-15rem)';
        ham_button_before.onclick = function(){
            const style = 'translateX(0rem)';
            ham_menu.style.transition = 'transform 200ms ease-out';
            ham_header.style.transition = 'transform 200ms ease-out';
            ham_header.style.transform = style;
            ham_menu.style.transform = style;
            trans_background.style.opacity = '1';
            trans_background.style.zIndex = '149';
        }
        
        ham_button_after.onclick = function(){
            ham_menu_close();
        }
        
        trans_background.onclick = function() {
            ham_menu_close();
        }
        
        function ham_menu_close(){
            const style = 'translateX(-15rem)';
            ham_header.style.transform = style;
            ham_menu.style.transform = style;
            trans_background.style.opacity = '0';
            trans_background.style.zIndex = '-1';
        }
    }
    else{
        ham_menu.style.transition = 'none';
        ham_menu.style.transform = 'translateX(0rem)';
        video_grid.style.marginLeft = '17rem';
        let mul = '-15rem';
        let left_dis_style = 'flex';
        let vid_grid_style = '6.2rem';
        ham_button_before.onclick = function(){
            ham_menu.style.transform = 'translateX('+mul+')';
            left_section.style.display = left_dis_style;
            video_grid.style.marginLeft = vid_grid_style;
            if (mul == '-15rem'){
                mul = '0rem';
                left_dis_style = 'none';
                vid_grid_style = '17rem';
            }
            else{
                mul = '-15rem';
                left_dis_style = 'flex';
                vid_grid_style = '6.2rem';
            }
        }
    }

    if (query2.matches){
        left_section.style.display = 'none';
        video_grid.style.marginLeft = '2rem';
        video_grid.style.marginRight = '2rem';
    }

    if (query3.matches){
        video_grid.style.marginLeft = '5rem'
        video_grid.style.marginRight = '5rem'
    }
}

onload = ham_media_query;
onresize = ham_media_query;