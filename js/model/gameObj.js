function gameObj ()
{
	//Attributes declaration
	this.id;
	this.name;
  this.description;
  this.maxPlayers;
  this.minPlayers;
  this.length;
  this.price;


	//Methods declaration
	this.construct = function (id,name,description,maxPlayers,minPlayers,length,price) {
		this.setId(id);
		this.setName(name);
		this.setDescription(description);
    this.setMaxPlayers(maxPlayers);
    this.setMinPlayers(minPlayers);
    this.setLength(length);
    this.setPrice(price);
	}

	this.setId = function (id){this.id=id;}
	this.setName = function (name){this.name=name;}
	this.setDescription = function (description){this.description=description;}
	this.setMaxPlayers = function (maxPlayers){this.maxPlayers=maxPlayers;}
	this.setMinPlayers = function (minPlayers){this.minPlayers=minPlayers;}
	this.setLength = function (length){this.length=length;}
	this.setPrice = function (price){this.price=price;}

/*
	this.addSpecialRequests = function (specialreq)
	{
		this.specialRequests.push(specialreq);
	}

	this.removeSpecialRequests = function (specialreq)
	{
		for (var i = 0; i < this.getSpecialRequests().length; i++)
		{
			if(this.getSpecialRequests()[i]==specialreq)
			{
				this.specialRequests.splice(i,1);
				break;
			}
		}

	}
*/
	this.getId = function () {return this.id;}
	this.getName = function () {return this.name;}
	this.getDescription = function () {return this.description;}
	this.getMaxPlayers = function () {return this.maxPlayers;}
	this.getMinPlayers = function () {return this.minPlayers;}
	this.getLength = function () {return this.length;}
	this.getPrice = function () {return this.price;}

	this.validate = function ()	{

		var errors = new Array();

		try {
			if(this.getName().length == 0 || this.getName().match(/^[A-ZÑ][a-zA-Zñá-ú\s]+$/)==null)	{
				errors.push("Name must be informed and contain only letters");
			}
		}
		catch(e) {
			errors.push("Name must be informed and contain only letters");
		}

		try	{
			if(this.getDescription().length == 0)	{
				errors.push("Surname must be informed and contain only letters");
			}
		}
		catch(e) {
			errors.push("Surname must be informed and contain only letters");
		}

		return errors;
	}

	this.toString = function (){
		var escapeRoomString ="ESCAPE ROOM - ID="+this.getId()+" NAME="+this.getName()+" DESCRIPTION="+this.getDescription();
		escapeRoomString +="MAX PLAYERS="+this.getMaxPlayers()+" MIN PLAYERS="+this.getMinPlayers()+" LENGTH="+this.getLength();
		escapeRoomString +=" PRICE="+this.getPrice();

		return escapeRoomString;
	}
}
