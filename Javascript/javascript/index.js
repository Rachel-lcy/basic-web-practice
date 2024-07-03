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

//---------------------
// The function that puts 
// the new text into the H1
function update_the_h1(){
    // new_text = the text (.value) from the element with the id 'updated_text'
    let new_text = document.getElementById('updated_text').value;
    
    // Find <h1> elements and update the content with the new_text
    document.querySelector('h1').textContent = new_text;
}