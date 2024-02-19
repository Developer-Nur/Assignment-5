const tickets = document.querySelectorAll('#ticket-number');
let maxSelect = 0;
const ticketPrice = 550;
const discountNew15 = 0.15;
const discountCouple20 = 0.20;
const availableSeatsElement = document.getElementById('available-seets');
const phoneNumberInput = document.getElementById('phone-number');
const submitButton = document.getElementById('form-submition');


for (let index = 0; index < tickets.length; index++) {
    const seats = tickets[index];
    seats.addEventListener('click', function () {
        if (maxSelect < 4 && seats.classList.contains('bg-gray-50')) {
            seats.classList.remove('bg-gray-50');
            seats.classList.add('bg-primary');
            maxSelect++;
        }
        else {
            return;
        }

        // total selected seats
        const seatPicked = document.getElementById('seat-selected')
        seatPicked.innerText = maxSelect;

        // remaining Seats
        availableSeatsElement.textContent = 8 - maxSelect;

        // number validation
        phoneNumberInput.addEventListener('input', function () {
            const phoneNumberValue = phoneNumberInput.value;
            if (!isNaN(phoneNumberValue) && parseInt(phoneNumberValue) > 0) {
                submitButton.disabled = false;
            } else {
                submitButton.disabled = true;
            }
        });

        // ticket summery 
        const seatNumber = seats.innerText;
        const ticketTitle = seatNumber

        const ticketSummery = document.getElementById('ticket-summery');
        const h3 = document.createElement('h3');
        h3.innerText = ticketTitle


        const p = document.createElement('p');
        p.innerText = 'Economoy'

        const h4 = document.createElement('h4');
        h4.innerText = parseInt(ticketPrice)

        ticketSummery.appendChild(h3)
        ticketSummery.appendChild(p)
        ticketSummery.appendChild(h4)

        //pricing calculation
        const price = ticketPrice
        const totalPrice = price * maxSelect;
        const priceElement = document.getElementById('total-price');
        priceElement.innerText = totalPrice;

        //grand total price 
        const grandTotalElement = document.getElementById('grand-total-price')
        grandTotalElement.innerText = totalPrice;
        

        // coupon
        document.getElementById('apply-coupon').addEventListener('click', function() {
            const couponInput = document.getElementById('coupon');
            const couponInputArea = document.getElementById('coupon-input-area')
            const couponInputValue = couponInput.value;
            if(couponInputValue === "NEW15"){
               const  discountPrice = totalPrice * discountNew15;
                const discountTotel = totalPrice - discountPrice;
                grandTotalElement.innerText = parseFloat(discountTotel);
                const discountNote = document.getElementById('discount-note-15')
                discountNote.classList.remove('hidden')
                couponInputArea.classList.add('hidden')  
            }
            else if (couponInputValue === "Couple 20"){
                const  discountPrice = totalPrice * discountCouple20;
                const discountTotel = totalPrice - discountPrice;
                grandTotalElement.innerText = parseFloat(discountTotel);
                const discountNote = document.getElementById('discount-note-20')
                discountNote.classList.remove('hidden')
                console.log(discountNote)
                couponInputArea.classList.add('hidden')
            }

          });
          
    });

}


// onclick section hide and show
function success() {
    hideElement('main-content')
    hideElement('header-area')
    showElement('success-note')
}

// hide
function hideElement(elementId) {
    const hideSection = document.getElementById(elementId)
    hideSection.classList.add('hidden');
}
//show
function showElement(elementId) {
    const showSection = document.getElementById(elementId);
    showSection.classList.remove('hidden');
}