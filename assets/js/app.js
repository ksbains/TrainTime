function train (name, dest, time, freq){ 
  this.name = name;
  this.dest = dest;
  this.time = time;
  this.freq = freq;
  this.changeName = function(name){
    this.name = name;
  }
  this.getName = function(){
    return this.name;
  }
}
// Initialize Firebase
    var config = {
      apiKey: "AIzaSyBSLUepk6oQpKVCkQj-p-Cwa4E057En3dI",
      authDomain: "rock-paper-scissors-a3748.firebaseapp.com",
      databaseURL: "https://rock-paper-scissors-a3748.firebaseio.com",
      projectId: "rock-paper-scissors-a3748",
      storageBucket: "rock-paper-scissors-a3748.appspot.com",
      messagingSenderId: "540223845963"
    };
    firebase.initializeApp(config);
    var db = firebase.database();
   $("#add-train").on("click", function(event) {
      // prevent page from refreshing when form tries to submit itself
      event.preventDefault();
     // Capture user inputs and store them into variables
      var name = $("#name-input").val().trim();
      var dest = $("#dest-input").val().trim();
      var time = $("#time-input").val().trim();
      var freq = $("#freq-input").val().trim();

     // Console log each of the user inputs to confirm we are receiving them
      console.log(name);
      console.log(dest);
      console.log(time);
      console.log(freq);      
      /*<tr>
          <td>BBB Express</td>
          <td>San Jose</td>
          <td>5</td>
          <td>08:55PM</td>
          <td>20</td>
       </tr>*/

       //make html ready elements with proper info
      var tableRow = $("<tr></tr>");
      var nameTd = $("<td>" + name +"</td>");
      var destTd = $("<td>" + dest +"</td>");
      var timeTd = $("<td>" + time +"</td>");
      var freqTd = $("<td>" + freq +"</td>");

      //append the html elements
      tableRow.append(nameTd);
      tableRow.append(destTd);
      tableRow.append(timeTd);
      tableRow.append(freqTd);
      $("#tableBody").append(tableRow);

      //push to firebase
      var ref = db.ref("/Train");   
      var refKey = ref.push({
        name: name,
        dest: dest,
        time: time,
        freq: freq
      }).key;
    });