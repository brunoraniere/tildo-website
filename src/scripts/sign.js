$(document).ready(function() {
    $('.sign input').on('input', function() {
        var inputValue = $(this).val();
        var sanitizedValue = inputValue.replace(/\s/g, '');
        $(this).val(sanitizedValue);
    });
});