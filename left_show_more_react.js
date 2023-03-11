const parent_element_1 = document.querySelector('.ham_wrapper .section_3')
const children = parent_element_1.children
const show_more = children[7]
const channel_names = ['carwow', 'Hyperplexed', 'KSIClips', 'monium', 'penguinz0', 'Retals', 'Swissbeatbox', 'Tesla', 'Waveform Clips', 'xQc Clips']
const channel_count = channel_names.length

function show_less_button(id){
    const temp_show = show_more.cloneNode(true)
    const show_children = temp_show.children
    temp_show.setAttribute('title','Show less')
    temp_show.setAttribute('id',id)
    img_path_value = 'images/Youtube_left_section/Youtube_left_section_show_more (subcriptions)/up_arrow.png'
    show_children[0].setAttribute('src',img_path_value)
    show_children[1].innerText = 'Show less'
    return temp_show
}
show_more.onclick = function(){
    show_more.remove()
    for (let i=0;i<channel_count;i++){
        const temp_channel = children[6].cloneNode(true)
        temp_channel.setAttribute('title',channel_names[i])
        const temp_nodes = temp_channel.children
        const first_node = temp_nodes[0]
        const second_node = temp_nodes[1]
        let img_path_value = 'images/Youtube_left_section/Youtube_left_section_show_more (subcriptions)/image' + (i+1) + '.jpg'
        first_node.setAttribute('src',img_path_value)
        second_node.innerText = channel_names[i]
        parent_element_1.appendChild(temp_channel)
    }
    const show_less = show_less_button('show_less_1') 
    parent_element_1.appendChild(show_less)
    const show_less_element = document.getElementById('show_less_1')

    show_less_element.onclick = function(){
        for(let i=channel_count+7;i>=7;i--){
            children[i].remove()
        }
        parent_element_1.appendChild(show_more)
    }
}

const parent_element_2 = document.querySelector('.ham_wrapper .section_2')
const show_more_1 = document.querySelector('.ham_wrapper .section_2 .left_icon_container:last-child')
console.log(show_more_1)
show_more_1.onclick = function(){
    show_more_1.remove()
    const temp_div = show_more_1.cloneNode(true)
    const img_path_value = 'images/Youtube_left_section/Youtube_left_section_show_more (subcriptions)/add_list_icon.png'
    temp_div.setAttribute('title','Add playlist')
    temp_div.children[0].setAttribute('src',img_path_value)
    temp_div.children[1].innerText = 'Add playlist'
    parent_element_2.appendChild(temp_div)
    show_less = show_less_button('show_less_2')
    parent_element_2.appendChild(show_less)
    const show_less_element = document.getElementById('show_less_2')
    
    show_less_element.onclick = function(){
        parent_element_2.children[6].remove()
        parent_element_2.children[5].remove()
        parent_element_2.appendChild(show_more_1)
    }
}

