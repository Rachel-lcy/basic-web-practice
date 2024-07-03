// Wait until the page loads before doing any javascript stuff
// then run the funtion get_page_items()
document.addEventListener('DOMContentLoaded', get_page_items);

// --------------------
// The function that gets 
// the page items we need
function get_page_items(){

    // Find the update button by its ID
    const the_button = document.getElementById('update_button');

    // Attach an event listener to the update button 
    // Listen for 'click' events
    the_button.addEventListener('click', update_the_h1);
}

function do_math(first_number, action, second_number){
    let calc_total
    console.log(action)
    // Convert string inputs to numbers if they aren't already, to ensure the calculations work as expected
    // first_number = Number(first_number);
    // second_number = Number(second_number);
    
    if (action == 'multiply'){
        calc_total = first_number * second_number; 
    }else if (action == 'add'){
        calc_total = first_number + second_number; 
    }else if (action == 'subtract'){
        calc_total = first_number - second_number; 
    }else{calc_total = "An Error Occured."}

    return calc_total;

}

//---------------------
// The function that puts 
// the new text into the H1
function update_the_h1(){
    
    const action = document.getElementById('calc_action').value;
    const first_number = document.getElementById('first_number').value;
    const second_number = document.getElementById('second_number').value;
    
    new_text = do_math(first_number,action, second_number)
    
    // Find <h1> elements and update the content with the new_text
    document.querySelector('h1').textContent = new_text;
}