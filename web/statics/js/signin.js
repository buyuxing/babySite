'use strict'
$(function(){
    let data = {
        username:'',
        password:'',
    }
    
    const vm = new Vue({
        el:'#signinform',
        data:data,
        methods:{
            login:function (event) {
                fetch('/manage/login',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify(this.$data)
                })
                .then((response)=>response.json())
                .then((json)=>{
                    alert(JSON.stringify(json))
                    location.assign('/')
                })
            }
        }
        
    })
});
// fetch(state.environment.businessServerBaseUrl+'/civet/projectInfo/loanUserDataInfo',{
//     method:'POST',
//     headers:{
//         'token':state.environment.token,
//         'content-type':'application/json',
//         'Accept':'*/*',
//         'User-Agent' : 'Finance/5.0.0 (iPhone; iOS 11.2; Scale/2.00)',
//         'Accept-Language' : 'zh-Hans;q=1',
//         'Accept-Encoding': 'br, gzip, deflate'
//     },
//     body:JSON.stringify({
//         "borrowUserId": state.environment.userId,
//         "projectId": state.environment.projectId,
//         "projectType":state.environment.projectType
//       })
// })