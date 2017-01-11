(function (){
	var identityCardVerify ={};
	
		/**
	 * this is new add function
	 * [getAge This method is used to detect the user age are legal ]
	 * @method   getAge
	 * @Author   MoneLing
	 * @DateTime 2017-01-09T16:49:10+0800
	 * @param    {[type:string]}                 birthday [this is user age format is yyyy-mm-dd]
	 * @return   {[type:boolean]}                          [true:is ok;false:don't use]
	 */
identityCardVerify.getUserAge=function(birthday){
		//获取当前日期
		var nowDate = new Date();
		var nowYear = nowDate.getFullYear();
		var nowMonth = parseInt(nowDate.getMonth())+1;
		var nowDay = nowDate.getDate();
		var userBirth =birthday;
		var userBirthArr = userBirth.split("-");
		//获取用户生日
		var userBirthYear =parseInt(userBirthArr[0]);
		var userBirthMonth =parseInt(userBirthArr[1]);
		var userBirthDay =parseInt(userBirthArr[2]);
		if((nowYear-userBirthYear)>16){
			return true;
		}else if((nowYear-userBirthYear)==16){
				if((nowMonth-userBirthMonth)>0){
					return true;
				}else if((nowMonth-userBirthMonth)==0){
					if((nowDay-userBirthDay)>=0){
						return true;
					}else{
						return false;
					}
					
				}else {
					return false;
				}
		}else {
			return false;
		}

		return false;
	}

/**
 * this is new add function
 * [userIDValid this method is use check user identifiy card are legal ]
 * @method   userIDValid
 * @Author   MoneLing
 * @DateTime 2017-01-09T16:53:16+0800
 * @param    {[string]}                 idValidDate [user identity card are  legal format:2008.04.24-2018.04.24/长期]
 * @return   {[boolean]}                             [true:is ok;false:don't use]
 */

identityCardVerify.userIDValid = function(idValidDate){

	var card_valid_data_Arr =idValidDate.split("-");
		var card_valid_data_begain_Time =card_valid_data_Arr[0];
		var card_valid_data_end_Time =card_valid_data_Arr[1];
		var nowDateTime = new Date().getTime();
		var idValidDateTime = new Date(card_valid_data_end_Time).getTime();
		if(card_valid_data_end_Time=="长期" || idValidDateTime>nowDateTime){
			return true;
		}
		return false;
}


})