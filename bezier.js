function main() {

	let btn = document.querySelector('.btn');

	btn.addEventListener('click', renderBezier);

    let canvas = document.querySelector('.progress canvas');
    let context = canvas.getContext('2d');

    let firstPointX = 10;
    let firstPointY = 490;

    let secondPointX = 190;
    let secondPointY = 490;

    let thirdPointX = 190;
    let thirdPointY = 10;

    let fourthPointX = 390;
    let fourthPointY = 10;

    let percent = 10;

    let sublineFirstX = firstPointX + (secondPointX - firstPointX)*percent/100;
    let sublineFirstY = firstPointY - (firstPointY - secondPointY)*percent/100;

    let sublineSecondX = secondPointX + (thirdPointX - secondPointX)*percent/100;
    let sublineSecondY = secondPointY - (secondPointY - thirdPointY)*percent/100;

    let sublineThirdX = thirdPointX + (fourthPointX - thirdPointX)*percent/100;
    let sublineThirdY = thirdPointY - (thirdPointY - fourthPointY)*percent/100;

    
    let finalLineFirstX = sublineFirstX + (sublineSecondX - sublineFirstX)*percent/100;
    let finalLineFirstY = sublineFirstY - (sublineFirstY - sublineSecondY)*percent/100;

    let finalLineSecondX = sublineSecondX + (sublineThirdX - sublineSecondX)*percent/100;
    let finalLineSecondY = sublineSecondY - (sublineSecondY - sublineThirdY)*percent/100;


    context.beginPath();
    context.strokeStyle = '#c2ca2b';
    context.fillStyle = '#fff';
    context.lineWidth = 2;
    context.moveTo(firstPointX, firstPointY);
    context.lineTo(secondPointX, secondPointY);
    context.stroke();
    context.beginPath();
    context.arc(firstPointX, firstPointY, 3, 0, Math.PI*2, true);
    context.stroke();
    context.fill();


    context.beginPath();
    context.moveTo(secondPointX, secondPointY);
    context.lineTo(thirdPointX, thirdPointY);
    context.stroke();
    context.beginPath();
    context.arc(secondPointX, secondPointY, 3, 0, Math.PI*2, true);
    context.stroke();
    context.fill();


    context.beginPath();
    context.moveTo(thirdPointX, thirdPointY);
    context.lineTo(fourthPointX, fourthPointY);
    context.stroke();
    context.beginPath();
    context.arc(thirdPointX, thirdPointY, 3, 0, Math.PI*2, true);
    context.stroke();
    context.fill();

    context.beginPath();
    context.arc(fourthPointX, fourthPointY, 3, 0, Math.PI*2, true);
    context.stroke();
    context.fill();


    context.beginPath();
    context.strokeStyle = '#ff0000';
    context.moveTo(firstPointX, firstPointY);
    context.bezierCurveTo(secondPointX, secondPointY, thirdPointX, thirdPointY, fourthPointX, fourthPointY);
    context.stroke();

    context.font = '13px';
    context.strokeStyle = '#fff';
    context.textAlign = 'left';
    context.textBaseline = 'middle';
    context.fillText("100", 10, 400);
    context.fillText("200", 10, 300);
    context.fillText("300", 10, 200);
    context.fillText("400", 10, 100);
    context.textBaseline = 'top';
    context.fillText("500", 10, 0);
    context.textAlign = 'center';
    context.fillText("100", 100, 490);
    context.fillText("200", 200, 490);
    context.fillText("300", 300, 490);
    context.textAlign = 'right';
    context.fillText("400", 400, 490);

    

    function renderBezier(e) {
    	let timer = setInterval(()=> {
    		context.clearRect(0,0, canvas.width, canvas.height);
        	percent += 1;

        	context.beginPath();
        	context.strokeStyle = '#c2ca2b';
        	context.fillStyle = '#fff';
        	context.lineWidth = 2;
        	context.moveTo(firstPointX, firstPointY);
        	context.lineTo(secondPointX, secondPointY);
        	context.stroke();
        	context.beginPath();
        	context.arc(firstPointX, firstPointY, 3, 0, Math.PI*2, true);
       	 	context.stroke();
        	context.fill();


        	context.beginPath();
        	context.moveTo(secondPointX, secondPointY);
        	context.lineTo(thirdPointX, thirdPointY);
        	context.stroke();
        	context.beginPath();
        	context.arc(secondPointX, secondPointY, 3, 0, Math.PI*2, true);
        	context.stroke();
        	context.fill();


        	context.beginPath();
        	context.moveTo(thirdPointX, thirdPointY);
        	context.lineTo(fourthPointX, fourthPointY);
        	context.stroke();
        	context.beginPath();
        	context.arc(thirdPointX, thirdPointY, 3, 0, Math.PI*2, true);
        	context.stroke();
        	context.fill();

        	context.beginPath();
        	context.arc(fourthPointX, fourthPointY, 3, 0, Math.PI*2, true);
        	context.stroke();
        	context.fill();


        	context.beginPath();
        	context.strokeStyle = '#ff0000';
        	context.moveTo(firstPointX, firstPointY);
        	context.bezierCurveTo(secondPointX, secondPointY, thirdPointX, thirdPointY, fourthPointX, fourthPointY);
        	context.stroke();


        	sublineFirstX = firstPointX + (secondPointX - firstPointX)*percent/100;
            sublineFirstY = firstPointY - (firstPointY - secondPointY)*percent/100;

            sublineSecondX = secondPointX + (thirdPointX - secondPointX)*percent/100;
            sublineSecondY = secondPointY - (secondPointY - thirdPointY)*percent/100;

            sublineThirdX = thirdPointX + (fourthPointX - thirdPointX)*percent/100;
            sublineThirdY = thirdPointY - (thirdPointY - fourthPointY)*percent/100;

    
            finalLineFirstX = sublineFirstX + (sublineSecondX - sublineFirstX)*percent/100;
            finalLineFirstY = sublineFirstY - (sublineFirstY - sublineSecondY)*percent/100;

            finalLineSecondX = sublineSecondX + (sublineThirdX - sublineSecondX)*percent/100;
            finalLineSecondY = sublineSecondY - (sublineSecondY - sublineThirdY)*percent/100;
        
        	context.beginPath();
        	context.strokeStyle = 'blue';
       	 	context.moveTo(sublineFirstX, sublineFirstY);
        	context.lineTo(sublineSecondX, sublineSecondY);
        	context.stroke();

        	context.beginPath();
        	context.strokeStyle = 'blue';
        	context.moveTo(sublineSecondX, sublineSecondY);
        	context.lineTo(sublineThirdX, sublineThirdY);
        	context.stroke();

        	context.beginPath();
        	context.strokeStyle = 'aqua';
        	context.moveTo(finalLineFirstX, finalLineFirstY);
        	context.lineTo(finalLineSecondX, finalLineSecondY);
        	context.stroke();

       		context.beginPath();
        	context.fillStyle = 'red';
        	context.arc(finalLineFirstX + (finalLineSecondX - finalLineFirstX)*percent/100, finalLineFirstY - (finalLineFirstY - finalLineSecondY)*percent/100, 5, 0, Math.PI*2, true);
        	context.fill();


        	context.font = '13px';
        	context.fillStyle = '#fff';
            context.strokeStyle = '#fff';
            context.textAlign = 'left';
            context.textBaseline = 'middle';
            context.fillText("100", 10, 400);
            context.fillText("200", 10, 300);
            context.fillText("300", 10, 200);
            context.fillText("400", 10, 100);
            context.textBaseline = 'top';
            context.fillText("500", 10, 0);
            context.textAlign = 'center';
            context.fillText("100", 100, 490);
            context.fillText("200", 200, 490);
            context.fillText("300", 300, 490);
            context.textAlign = 'right';
            context.fillText("400", 400, 490);



    		if (percent >= 100) {
   	       		clearInterval(timer);
   	       		percent = 0;
        	}
        }, 20);
    }
}


document.addEventListener('DOMContentLoaded', main);

