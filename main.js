var app=angular.module("myApp", []);
app.controller("newControl", function($scope)
 {
    $scope.studentlist = [];
	$scope.student=
	{
	  id: 0,
	  name: ' ',
	  college: ' ',
	  email: ' ',
	  dept: ' ',
	  phone: ' '
	  };


	$scope.adddata = function()
	{
	  var newdata = {
	    id: $scope.studentlist.length +1,
		name: $scope.student.name,
		college: $scope.student.college,
		email: $scope.student.email,
		dept: $scope.student.dept,
		phone: $scope.student.phone
		};
	  $scope.studentlist.push(newdata);
	  cleardata();
	  alert("Record added");
	  }

	  function cleardata()
	  {
	    $scope.student.id = 0;
		$scope.student.name= ' ';
		$scope.student.college=' ';
		$scope.student.email=' ';
		$scope.student.dept=' ';
		$scope.student.phone=' ';
		}

	$scope.deletedata = function(x)
	{
	  var index = $scope.studentlist.indexOf(x);
	  $scope.studentlist.splice(index,1);
	  }

	$scope.bindchosendata= function(x)
	{
	    $scope.student.id = x.id;
		$scope.student.name= x.name;
		$scope.student.college=x.college;
		$scope.student.email=x.email;
		$scope.student.dept=x.dept;
		$scope.student.phone=x.phone;
		}

	$scope.updatedata = function () {
    $.grep($scope.studentlist, function (e) {
        if (e.id == $scope.student.id) {
            e.name = $scope.student.name;
            e.college = $scope.student.college;
			e.email = $scope.student.email;
			e.dept = $scope.student.dept;
			e.phone = $scope.student.phone;
        }  });
		cleardata(); }

	//$scope.chooseorder = function(x)
	//{
	  // $scope.neworder = x;
	  // }

	$scope.orderByMe = function(x) {
       $scope.myOrderBy = x;
      }

	document.getElementById("toggleDiv").style.display = "none";

	$scope.viewdata = function () {
       var x = document.getElementById("toggleDiv");
       if(x.style.display == "none")
        { var psw = prompt("Enter the password : ");
		if(psw=="xyz"){
		x.style.display = "block";
		var y = document.getElementById("closeview");
		y.value="Close View";}
		else{alert("wrong password!");}}
       else {x.style.display = "none"
       var y = document.getElementById("closeview");
   		y.value="View";};
    }

	$scope.userinstruct = function()
	{
	  alert(" ADD DATA : enter data and click save. TO VIEW DB : Click View, password : 'xyz'. TO UPDATE : click select from view, change details, click update. TO SORT BY name/college, click name/college button in view. Use search bar to narrow down options. ");
		}

		});
