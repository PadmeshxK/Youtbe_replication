const icons_element = document.querySelectorAll('.icons_container, .mic_button, .left_icon_container, .search_button_media_660')
const video_border_animate_element  = document.querySelectorAll('.video_container')
let animation_duration = 800

icons_element.forEach((element) => {
    element.addEventListener('mouseup',() =>{
        icon_border_animate(element,'outering_icon')
    })
})

video_border_animate_element.forEach((element) => {
    element.addEventListener('mouseup',() => {
        icon_border_animate(element,'videoring')
    })
})

function icon_border_animate(element,name){
    console.log(element)
    element.style.animationName = name
    element.style.animationDuration = animation_duration + 'ms'
    element.style.animationTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)'
    setTimeout(() =>{
        element.style.animationName = 'none'
        element.style.animationDuration = '0ms'
    },animation_duration)
}
