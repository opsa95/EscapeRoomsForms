function userObj () {
	//Attributes declaration
	this.id;
	this.username;
	this.password;
	this.name;
	this.surname;
	this.email;
	this.telephone;

	//Methods declaration
	this.construct = function (id,username,password,name,surname,email,telephone) {
		this.setId(id);
    this.setUsername(username);
    this.setPassword(password);
		this.setName(name);
		this.setSurname(surname);
		this.setEmail(email);
    this.setPhone(telephone);
	}

	this.setId = function (id){this.id=id;}
  this.setUsername = function (username){this.username=username;}
  this.setPassword = function (password){this.password=password;}
	this.setName = function (name){this.name=name;}
	this.setSurname = function (surname){this.surname=surname;}
	this.setEmail = function (email){this.email=email;}
  this.setTelephone = function (telephone){this.telephone=telephone;}

	this.getId = function () {return this.id;}
  this.getUsername = function () {return this.username;}
  this.getPassword = function () {return this.password;}
	this.getName = function () {return this.name;}
	this.getSurname = function () {return this.surname;}
	this.getEmail = function () {return this.email;}
	this.getTelephone = function () {return this.telephone;}

	this.validate = function (){
		var errors = new Array();

		try	{
			if(this.getName().length == 0 || this.getName().match(/^[A-ZÑ][a-zA-Zñá-ú\s]+$/)==null)
			{
				errors.push("Name must be informed and contain only letters");
			}
		}
		catch(e) {
			errors.push("Name must be informed and contain only letters");
		}

		try	{
			if(this.getSurname().length == 0)
			{
				errors.push("Surname must be informed and contain only letters");
			}
		}
		catch(e) {
			errors.push("Surname must be informed and contain only letters");
		}

		return errors;
	}

	this.toString = function (){
		var userString ="USER - ID="+this.getId()+" USERNAME="+this.getUsername()+" PASSWORD="+this.getPassword();
		userString +=" FIRST NAME="+this.getName()+" LAST NAME="+this.getSurname();
		userString +=" EMAIL="+this.getEmail()+" PHONE="+this.getTelephone();
		return userString;
	}
}
