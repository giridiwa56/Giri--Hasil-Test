

// // Buatlah skema logika untuk memuat kata diatas menjadi berbentuk seperti berikut : 
// // b
// // be
// // bee
// // beev
// // beeve
// // beever
//Jawaban
let words = "beever";
const reverseLadder = (words) =>{
    let temp = "";

    if(words.length % 2 !== 0){
        for(let i  = 0; i < words.length; i++){
            if (i % 2 === 0){
                for (let j = 0; j <= i; j++){
                    if (j % 2 === 0){
                        temp += words[j].toLowerCase();
                    }else{
                        temp += words[j];
                    }
                }
            }else{
                for (let j = i; j >= 0; j--){
                    if (j % 2 === 0){
                        temp += words[j].toLowerCase();
                    }else{
                        temp += words[j];
                    }
                }
            }

            console.log(temp);
            temp = "";
        }
    }else{
        console.log("Tidak Boleh Genap");
    }
}

reverseLadder("beever");