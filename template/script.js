// 改变panel的class
const panels=document.querySelectorAll('.panel')

//用forEach给每个panel加上时间监听
panels.forEach((panel,index)=>{
    panel.addEventListener('click',()=>{
        // 先逐个删除每个panel上面的active
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach((panel)=>{
        //删除所有active
        panel.classList.remove('active')
    })
}