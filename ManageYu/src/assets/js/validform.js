export const ValidForm = { 
    //邮箱
    email: (rule, value, callback) => {   
        if( !ValidForm.pattresult["email"].test(value) ){
            callback(new Error('请输入正确的邮箱'));
        }else{
            callback();
        };
    },
    //汉字
    chinese: (rule, value, callback) => {   
        if( !ValidForm.pattresult["chinese"].test(value) ){
            callback(new Error('只能输入汉字'));
        }else{
            callback();
        };
    }, 
    pattresult: {
        "email": /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        "chinese": /^[\u4e00-\u9fa5]{0,}$/ 
    } 
};
