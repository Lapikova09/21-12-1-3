function clickBtn1(){
    document.querySelector('.tab_pane1').classList.add('tab_pane_show')
    document.querySelector('.tab_pane2').classList.remove('tab_pane_show')
    document.querySelector('.tab_pane3').classList.remove('tab_pane_show')
}
function clickBtn2(){
    document.querySelector('.tab_pane1').classList.remove('tab_pane_show')
    document.querySelector('.tab_pane2').classList.add('tab_pane_show')
    document.querySelector('.tab_pane3').classList.remove('tab_pane_show')
}
function clickBtn3(){
    document.querySelector('.tab_pane1').classList.remove('tab_pane_show')
    document.querySelector('.tab_pane2').classList.remove('tab_pane_show')
    document.querySelector('.tab_pane3').classList.add('tab_pane_show')
}