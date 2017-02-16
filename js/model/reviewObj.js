function reviewObj () {
	//Attributes declaration
	this.id;
	this.game;
	this.rate;
	this.opinion;

	//Methods declaration
	this.construct = function (id,gameReserved,rate,opinion){
		this.setId(id);
		this.setGame(game);
		this.setRate(rate);
		this.setOpinion(opinion);

	}

	this.setId = function (id){this.id=id;}
	this.setGame = function (game){this.game=game;}
	this.setRate = function (rate){this.rate=rate;}
	this.setOpinion = function (opinion){this.opinion=opinion;}

	this.getId = function () {return this.id;}
	this.getGame = function () {return this.game;}
	this.getRate = function () {return this.rate;}
	this.getOpinion = function () {return this.opinion;}




	this.arrayToString = function (arrayReviewObj){
		var reviewString ="";
		$.each(arrayReviewObj, function (index, review){
			reviewString+="stock number "+(index+1)+":"+review.toString()+"\n";
		});
		return reviewString;

	}

	this.toString = function (){
		var reviewString ="REVIEW - ID="+this.getId()+" GAME="+this.getGame()+" RATE="+this.getRate();
		reviewString +=" OPINION="+this.getOpinion();
		return reviewString;
	}
}
