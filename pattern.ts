//*
//**
//***
//**** 


let  n1 = 4;

for(let i =1 ; i <= n1 ; i++ ) {
    let s = "";
    for(let j = 1 ; j <= i ; j++ ){
        s+='*';
    }

    console.log(s);
}



console.log('========================================================');

//**** 
//***
//**
//*

let  n2 = 4;

for(let i =1 ; i <= n2 ; i++ ) {
    let s = "";
    for(let j = n2  ; j >= i ; j-- ){
        s+='*';
    }

    console.log(s);
}

console.log('=================================================================')



//   *
//  ** 
// *** 
//**** 

let n3 = 4 ;
let sp1 = n3-1;

for(let i = 0 ; i < n3 ; i++){
    let s= '';
    for(let j = 0 ;  j < sp1 ; j++ ){
        s+=" ";
    }
    sp1--;
    for(let x = 0 ; x <= i ; x++){
        s+="*";
    }
    console.log(s);
}

 console.log('or ------------------------------------------------------');

for(let i = 1 ; i <= n3 ; i++ ) {
    let s='';
    for(let j = 1 ; j <= n3-i ; j++ ){
        s+=' ';
    }
    for(let x =1 ; x<= i ; x++){
        s+='*';
    }
    console.log(s);
}


console.log('=================================================================');




// *****
//  ***
//   *
//  ***
// *****

let n4 = 5;

let st = n4;
let sp = 0 ;

for(let i = 1 ; i <= n4 ; i++) {
    let s = '';

  
    
    for(let i = 1 ; i <= sp/2 ; i++){
        s+=' ';
    }
    
    for(let j = 1 ; j <= st ; j++){
        s+='*';   
    }
    
    for(let k = 1 ; k <= sp/2 ; k++){
        s+=' ';
    }
    
        
    console.log(s);
    
    if(i <= (n4/2)){  
        st-=2;
        sp+=2;
    }
    else{
        st+=2;
        sp-=2;
    }

 

}


console.log("==================================================================")



//  *
// ***
//*****
// ***
//  *

let n5 = 5 ;

let sp2 = n5-1;
let star = 1;

for(let i = 1 ; i <=n5 ; i++){
    let s ='';
    //for space
    for(let j = 1 ; j <= sp2/2 ; j++ ){
        s+=" ";
    }
    //star
    for(let k = 1 ; k <= star ; k++){
        s+="*";
    }
    //for space
    for(let x = 1 ; x <= sp2/2 ; x++ ){
        s+=" ";
    }

    if(i <= n5/2){
        sp2-=2;
        star+=2;
    }else{
        sp2+=2;
        star-=2;
    }

    console.log(s);

}

