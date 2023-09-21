// Send Money
function sendMoney() {
   var enterName = document.getElementById("enterName").value;
   var name = ["Mr.Raj", "Mr.Nick", "Mr.Sharma", "Mrs.Talvari", "Miss.Naqs", "Mrs.Kapoor", "Mrs.Patel", "Mr.Shah", "Mrs.Nayak", "Mr.Roy"];

   if (!name.includes(enterName)) {
      alert(`This user does not have an account in our bank`);
   } else {
      var enterAmount = parseInt(document.getElementById("enterAmount").value);
      if (enterAmount > 10000) {
         alert("Insufficient Balance.");
      } else {
         var findUserBankAccount = enterName + "BankBalance";
         var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
         var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount;
         document.getElementById("myAccountBalance").innerText = myAccountBalance;
         document.getElementById(findUserBankAccount).innerHTML = finalAmount;
         alert(`Successful Transaction !!  
         ₹ ${enterAmount} is sent to ${enterName}@email.com.`);

         // Transaction History
         var createPTag = document.createElement("li");
         var textNode = document.createTextNode(`₹ ${enterAmount} is sent to recipient with Email-id ${enterName}@email.com on ${Date()}.`);
         createPTag.appendChild(textNode);
         var element = document.getElementById("transaction-history-body");
         element.insertBefore(createPTag, element.firstChild);
      }
   }
}
