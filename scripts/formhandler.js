(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    FormHandler.prototype.addSubmitHandler = function(fn) {
        console.log('Setting submit handler for form');
        this.$formElement.on('submit', function(event) {
            event.preventDefault();

            var data = {};
            $(this).serializeArray().forEach(function(item) {
                data[item.name] = item.value;
                console.log(item.name + ' is ' + item.value);
            });
            console.log(data);
            fn(data);
            this.reset();
            this.elements[0].focus();
        });
    };

    App.FormHandler = FormHandler;
    window.App = App;
})(window);

function rangeValue() { // eslint-disable-line
    'use strict';
    var rangeValue = document.getElementById('strengthLevel').value;
    if (rangeValue <= 33) {
        document.getElementById('value').style.color = 'green';
    } else if (rangeValue > 33 && rangeValue <= 66) {
        document.getElementById('value').style.color = '#e5e500';
    } else if (rangeValue > 66) {
        document.getElementById('value').style.color = 'red';
    }
    document.getElementById('value').innerHTML = rangeValue;
}

function achievementModal() { // eslint-disable-line
    'use strict';
    var getValues1 = document.querySelectorAll('#coffeeOrder, #emailInput, #flavorShot, #strengthLevel');
    var getValues2 = document.getElementsByName('size');

    if (getValues2[3].checked == true && getValues1[3].value == 100 && getValues1[2].value != '') {
        return true;
    } else {
        return false;
    }
}

function getAchievementModal() { //eslint-disable-line
    $(document).ready(function() { //eslint-disable-line
        var getEmail = document.querySelector('#emailInput');
        var usedEmail = [];
        $('#myBtn').click(function() { //eslint-disable-line
            document.getElementById('value').style.color = 'green';
            document.getElementById('value').innerHTML = '30';
            if (achievementModal() == true && usedEmail.includes(getEmail.value) == true) {
                $('#myModal5').modal(); //eslint-disable-line
            }
            if (achievementModal() == true && usedEmail.includes(getEmail.value) == false && getEmail.value != '') {
                usedEmail.push(getEmail.value);
                $('#myModal').modal(); //eslint-disable-line
            } else if (achievementModal() == true && getEmail.value == '') {
                $('#myModal3').modal(); //eslint-disable-line
            } else if (achievementModal() == true && getEmail.value == '') {
                $('#myModal6').modal(); //eslint-disable-line
            }
        });
    });
}

function initializeEvents() {
    'use strict';
    getAchievementModal();
}

initializeEvents();
