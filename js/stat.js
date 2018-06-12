window.renderStatistics = function(ctx, names, times) {
	
	ctx.translate(10,10);
	ctx.fillStyle = 'grey';
	ctx.strokeStyle = 'grey';
	renderFinishBox(ctx);

	ctx.translate(-10,-10);
	ctx.fillStyle = 'white';
	ctx.strokeStyle = 'white';
	renderFinishBox(ctx);

	ctx.fillStyle = 'black';
	ctx.font = '16px PT Mono';
	ctx.fillText('Ура вы победили!', 180, 45);
	ctx.fillText('Список результатов:', 180, 65);

	renderItemGistogram(ctx, names, times);
}

var renderFinishBox = function(ctx){
	ctx.beginPath();
		ctx.moveTo(150,10);
		ctx.lineTo(360,20);
		ctx.lineTo(570,10);
		ctx.lineTo(550,145);
		ctx.lineTo(570,280);
		ctx.lineTo(360,270);
		ctx.lineTo(150,280);
		ctx.lineTo(170,145);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();
}
var maxItem = function(array_all){
	var maxElem=0;
	for(var i=0; i < array_all.length; i++){
		if(maxElem < array_all[i]){
			maxElem=array_all[i];
		}
	}
	return maxElem;
}
var renderItemGistogram = function(ctx, names, times){
	var widthItemGistogram = 40;
	var maxHeightItemGistogram = 150;
	var paddingItemGistogram = 50;
	var heightCoficient = maxHeightItemGistogram/ maxItem(times);
	for(var i=0; i<names.length; i++){
		ctx.fillStyle = 'black';
		ctx.fillText(names[i], 180+paddingItemGistogram*i, 100);

		if(names[i]=='Вы'){
			ctx.fillStyle = 'rgba(255, 0, 0, 1)';
		}
		else{
			ctx.fillStyle = 'rgba(0, 0, 255, '+(Math.random()+0.2)+')';
		}
		ctx.fillRect(180+paddingItemGistogram*i, 270-times[i]*heightCoficient, widthItemGistogram, times[i]*heightCoficient);
	}
}