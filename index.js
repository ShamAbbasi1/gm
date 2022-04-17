
function Click(){
    var random_num = Math.floor(Math.random() * 6+ 1 )  ;
    
    var image_src1 = "dice"+ random_num + ".png";
    var final1 = "images/"+ image_src1;
    
    var element_sel = document.querySelectorAll("img")[0];
    element_sel.setAttribute("src" , final1);
    
    
    
    var random_num2 = Math.floor(Math.random() * 6+ 1 )  ;
    
    var image_src2 = "dice"+ random_num2 + ".png";
    var final2 = "images/"+ image_src2;
    
    var element_sel1 = document.querySelectorAll("img")[1];
    element_sel1.setAttribute("src" , final2);


    if (random_num > random_num2){
        document.querySelector("h1").innerHTML = "Player 1 Win!";
    }
    else if (random_num2 > random_num){
        document.querySelector("h1").innerHTML = "player 2 win!";
    }
    else {
        document.querySelector("h1").innerHTML = "Match Draw";
    }


}

    